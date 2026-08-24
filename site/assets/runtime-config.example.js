// 运行时配置模板 — 请将本文件复制为 runtime-config.js 并填入真实密钥
// runtime-config.js 已被 .gitignore 排除，不会上传到 GitHub
window.GUQIAO_RUNTIME_CONFIG = {
  aiModel: {
    enabled: true,
    apiKey: "YOUR_DEEPSEEK_API_KEY",
    baseUrl: "https://api.deepseek.com",
    // chatPath: "/chat/completions",
    model: "deepseek-v4-flash",
    temperature: 0.35,
    connectTimeoutMs: 3500,
    requestTimeoutMs: 30000,
    systemPrompt: "你是古桥千秋作品内置的古桥讲解助手。优先围绕中国古桥的数据、地图、桥型、技术演进、文化传承和保护价值回答。回答简洁、准确、适合展览导览。",
  },
  xfyunTtsPool: [
    {
      enabled: true,
      appId: "YOUR_XFYUN_APP_ID",
      apiKey: "YOUR_XFYUN_API_KEY",
      apiSecret: "YOUR_XFYUN_API_SECRET",
    },
  ],
  xfyunTts: {
    host: "tts-api.xfyun.cn",
    path: "/v2/tts",
    voiceName: "x4_yezi",
    speed: 50,
    volume: 50,
    pitch: 50,
    audioEncoding: "lame",
    connectTimeoutMs: 3500,
    requestTimeoutMs: 20000,
    maxKeyRetries: 2,
  },
};
