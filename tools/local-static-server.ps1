param(
  [int]$PreferredPort = 8000,
  [string]$HomePath = "/site/index.html",
  [switch]$NoOpen
)

$ErrorActionPreference = "Stop"
$root = (Resolve-Path (Join-Path $PSScriptRoot "..")).Path

function Get-MimeType {
  param([string]$Path)
  $ext = [System.IO.Path]::GetExtension($Path).ToLowerInvariant()
  switch ($ext) {
    ".html" { "text/html; charset=utf-8" }
    ".htm"  { "text/html; charset=utf-8" }
    ".css"  { "text/css; charset=utf-8" }
    ".js"   { "application/javascript; charset=utf-8" }
    ".json" { "application/json; charset=utf-8" }
    ".png"  { "image/png" }
    ".jpg"  { "image/jpeg" }
    ".jpeg" { "image/jpeg" }
    ".gif"  { "image/gif" }
    ".svg"  { "image/svg+xml" }
    ".ico"  { "image/x-icon" }
    ".mp3"  { "audio/mpeg" }
    ".wav"  { "audio/wav" }
    ".wasm" { "application/wasm" }
    default { "application/octet-stream" }
  }
}

function Find-FreePort {
  param([int]$StartPort)
  for ($port = $StartPort; $port -lt ($StartPort + 20); $port++) {
    $listener = $null
    try {
      $listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
      $listener.Start()
      $listener.Stop()
      return $port
    } catch {
      if ($listener) { $listener.Stop() }
    }
  }
  throw "No available local port found from $StartPort."
}

function Send-Response {
  param(
    [System.Net.Sockets.TcpClient]$Client,
    [int]$StatusCode,
    [string]$StatusText,
    [byte[]]$Body,
    [string]$ContentType = "text/plain; charset=utf-8",
    [bool]$HeadOnly = $false
  )
  $stream = $Client.GetStream()
  $headers = "HTTP/1.1 $StatusCode $StatusText`r`n" +
    "Content-Type: $ContentType`r`n" +
    "Content-Length: $($Body.Length)`r`n" +
    "Cache-Control: no-store`r`n" +
    "Connection: close`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($headers)
  $stream.Write($headerBytes, 0, $headerBytes.Length)
  if (-not $HeadOnly -and $Body.Length -gt 0) {
    $stream.Write($Body, 0, $Body.Length)
  }
}

function Resolve-RequestPath {
  param([string]$RawPath)
  $pathOnly = ($RawPath -split "\?")[0]
  if ([string]::IsNullOrWhiteSpace($pathOnly) -or $pathOnly -eq "/") {
    $pathOnly = $HomePath
  }
  $relative = [System.Uri]::UnescapeDataString($pathOnly).TrimStart("/")
  $relative = $relative -replace "/", [System.IO.Path]::DirectorySeparatorChar
  $candidate = [System.IO.Path]::GetFullPath((Join-Path $root $relative))
  if (-not $candidate.StartsWith($root, [System.StringComparison]::OrdinalIgnoreCase)) {
    return $null
  }
  return $candidate
}

$port = Find-FreePort -StartPort $PreferredPort
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
$listener.Start()

$url = "http://127.0.0.1:$port$HomePath"
Write-Host "Guqiao Qianqiu local server: $url"
Write-Host "Press Ctrl+C to stop."
if (-not $NoOpen) {
  Start-Process $url
}

try {
  while ($true) {
    $client = $listener.AcceptTcpClient()
    try {
      $stream = $client.GetStream()
      $buffer = New-Object byte[] 8192
      $read = $stream.Read($buffer, 0, $buffer.Length)
      if ($read -le 0) {
        $client.Close()
        continue
      }

      $requestText = [System.Text.Encoding]::ASCII.GetString($buffer, 0, $read)
      $requestLine = ($requestText -split "\r?\n")[0]
      $parts = $requestLine -split " "
      if ($parts.Length -lt 2) {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Bad Request")
        Send-Response -Client $client -StatusCode 400 -StatusText "Bad Request" -Body $body
        $client.Close()
        continue
      }

      $method = $parts[0].ToUpperInvariant()
      $targetPath = Resolve-RequestPath -RawPath $parts[1]
      $headOnly = $method -eq "HEAD"
      if ($method -ne "GET" -and $method -ne "HEAD") {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Method Not Allowed")
        Send-Response -Client $client -StatusCode 405 -StatusText "Method Not Allowed" -Body $body
        $client.Close()
        continue
      }

      if (-not $targetPath -or -not (Test-Path -LiteralPath $targetPath -PathType Leaf)) {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Not Found")
        Send-Response -Client $client -StatusCode 404 -StatusText "Not Found" -Body $body
        $client.Close()
        continue
      }

      $bytes = [System.IO.File]::ReadAllBytes($targetPath)
      Send-Response -Client $client -StatusCode 200 -StatusText "OK" -Body $bytes -ContentType (Get-MimeType -Path $targetPath) -HeadOnly $headOnly
    } catch {
      try {
        $body = [System.Text.Encoding]::UTF8.GetBytes("Internal Server Error")
        Send-Response -Client $client -StatusCode 500 -StatusText "Internal Server Error" -Body $body
      } catch {}
    } finally {
      $client.Close()
    }
  }
} finally {
  $listener.Stop()
}
