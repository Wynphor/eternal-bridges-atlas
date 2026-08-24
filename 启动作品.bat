@echo off
setlocal
cd /d "%~dp0"

if exist "%~dp0tools\local-static-server.ps1" (
  powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\local-static-server.ps1"
  if not errorlevel 1 goto end
)

echo PowerShell local server failed. Trying Python fallback...
start "" "http://127.0.0.1:8000/site/index.html"
py -m http.server 8000
if errorlevel 1 python -m http.server 8000

:end
endlocal
