const NAV_LINKS = [
  { page: "home", href: "index.html", label: "首页" },
  { page: "bridge-list", href: "bridge-list.html", label: "桥梁一览" },
  { page: "map", href: "map.html", label: "地图" },
  { page: "insights", href: "insights.html", label: "数据洞察" },
  { page: "technology", href: "technology.html", label: "技术演进" },
  { page: "culture", href: "culture.html", label: "文化传承" },
  { page: "value-outlook", href: "value-outlook.html", label: "成果与展望" },
];

const DETAIL_NAV_LINK = { page: "detail", href: "detail.html", label: "详情" };

const DATA_FILES = {
  unified: "../data/json/bridges_unified.json",
  map: "../data/json/map_data.json",
  visualization: "../data/json/visualization_data.json",
  timeline: "../data/json/timeline_new.json",
  preservation: "../data/json/bridge_preservation.json",
  culture: "../data/json/bridge_culture_detail.json",
  technology: "../data/json/bridge_technology_detail.json",
  types: "../data/json/bridge_types.json",
  mechanics: "../data/json/bridge_mechanics_materials.json",
  research: "../data/json/protection_research.json",
  poetry: "../data/json/poetry_legends.json",
};

const LOCAL_ASSET_FILES = {
  three: "assets/vendor/three.min.js",
  orbitControls: "assets/vendor/OrbitControls.js",
  chinaMap: "assets/maps/100000_full.json",
  provinceMap: (adcode) => `assets/maps/${adcode}_full.json`,
  bridgeAudio: (bridgeName) => `assets/audio/bridges/${encodeURIComponent(String(bridgeName || "").trim())}.mp3`,
};

const RUNTIME_CONFIG = window.GUQIAO_RUNTIME_CONFIG || {};

const LOCAL_BRIDGE_IMAGE_OVERRIDES = {
  bridge_001: "assets/bridges/bridge_001.jpg",
  bridge_002: "assets/bridges/bridge_002.png",
  bridge_003: "assets/bridges/bridge_003.jpg",
  bridge_004: "assets/bridges/bridge_004.jpg",
  bridge_005: "assets/bridges/bridge_005.jpg",
  bridge_006: "assets/bridges/bridge_006.jpg",
  bridge_007: "assets/bridges/bridge_007.png",
  bridge_008: "assets/bridges/bridge_008.jpg",
  bridge_009: "assets/bridges/bridge_009.jpg",
  bridge_010: "assets/bridges/bridge_010.jpg",
  bridge_011: "assets/bridges/bridge_011.jpg",
  bridge_012: "assets/bridges/bridge_012.jpg",
  bridge_013: "assets/bridges/bridge_013.jpg",
  bridge_014: "assets/bridges/bridge_014.jpg",
  bridge_015: "assets/bridges/bridge_015.jpg",
  bridge_016: "assets/bridges/bridge_016.jpg",
  bridge_017: "assets/bridges/bridge_017.jpg",
  bridge_018: "assets/bridges/bridge_018.jpg",
  bridge_019: "assets/bridges/bridge_019.jpg",
  bridge_020: "assets/bridges/bridge_020.jpg",
  bridge_021: "assets/bridges/bridge_021.png",
  bridge_022: "assets/bridges/bridge_022.png",
  bridge_023: "assets/bridges/bridge_023.png",
  bridge_024: "assets/bridges/bridge_024.png",
  bridge_025: "assets/bridges/bridge_025.png",
  bridge_026: "assets/bridges/bridge_026.png",
  bridge_027: "assets/bridges/bridge_027.png",
  bridge_028: "assets/bridges/bridge_028.png",
  bridge_029: "assets/bridges/bridge_029.png",
  bridge_030: "assets/bridges/bridge_030.png",
  bridge_031: "assets/bridges/bridge_031.jpg",
  bridge_032: "assets/bridges/bridge_032.jpg",
  bridge_033: "assets/bridges/bridge_033.jpg",
  bridge_034: "assets/bridges/bridge_034.jpg",
  bridge_035: "assets/bridges/bridge_035.jpg",
  bridge_036: "assets/bridges/bridge_036.jpg",
  bridge_037: "assets/bridges/bridge_037.jpg",
  bridge_038: "assets/bridges/bridge_038.png",
  bridge_039: "assets/bridges/bridge_039.jpg",
  bridge_040: "assets/bridges/bridge_040.jpg",
  bridge_041: "assets/bridges/bridge_041.jpg",
  bridge_042: "assets/bridges/bridge_042.jpg",
  bridge_043: "assets/bridges/bridge_043.jpg",
  bridge_044: "assets/bridges/bridge_044.jpg",
  bridge_045: "assets/bridges/bridge_045.jpg",
  bridge_046: "assets/bridges/bridge_046.jpg",
  bridge_047: "assets/bridges/bridge_047.jpg",
  bridge_048: "assets/bridges/bridge_048.jpg",
  bridge_049: "assets/bridges/bridge_049.jpg",
  bridge_050: "assets/bridges/bridge_050.jpg",
  bridge_051: "assets/bridges/bridge_051.png",
  bridge_052: "assets/bridges/bridge_052.png",
  bridge_053: "assets/bridges/bridge_053.png",
  bridge_054: "assets/bridges/bridge_054.png",
  bridge_055: "assets/bridges/bridge_055.png",
  bridge_056: "assets/bridges/bridge_056.png",
  bridge_057: "assets/bridges/bridge_057.png",
  bridge_058: "assets/bridges/bridge_058.png",
  bridge_059: "assets/bridges/bridge_059.png",
  bridge_060: "assets/bridges/bridge_060.png",
  bridge_061: "assets/bridges/bridge_061.jpg",
  bridge_063: "assets/bridges/bridge_063.jpg",
  bridge_064: "assets/bridges/bridge_064.jpg",
  bridge_065: "assets/bridges/bridge_065.jpg",
  bridge_066: "assets/bridges/bridge_066.jpg",
  bridge_067: "assets/bridges/bridge_067.jpg",
  bridge_068: "assets/bridges/bridge_068.jpg",
  bridge_069: "assets/bridges/bridge_069.jpg",
  bridge_070: "assets/bridges/bridge_070.jpg",
  bridge_071: "assets/bridges/bridge_071.jpg",
  bridge_072: "assets/bridges/bridge_072.jpg",
  bridge_073: "assets/bridges/bridge_073.jpg",
  bridge_074: "assets/bridges/bridge_074.jpg",
  bridge_075: "assets/bridges/bridge_075.jpg",
  bridge_076: "assets/bridges/bridge_076.jpg",
  bridge_077: "assets/bridges/bridge_077.jpg",
  bridge_078: "assets/bridges/bridge_078.jpg",
  bridge_079: "assets/bridges/bridge_079.jpg",
  bridge_080: "assets/bridges/bridge_080.jpg",
  bridge_081: "assets/bridges/bridge_081.png",
  bridge_082: "assets/bridges/bridge_082.png",
  bridge_083: "assets/bridges/bridge_083.png",
  bridge_084: "assets/bridges/bridge_084.png",
  bridge_085: "assets/bridges/bridge_085.png",
  bridge_086: "assets/bridges/bridge_086.png",
  bridge_087: "assets/bridges/bridge_087.png",
  bridge_088: "assets/bridges/bridge_088.png",
  bridge_089: "assets/bridges/bridge_089.png",
  bridge_090: "assets/bridges/bridge_090.png",
  bridge_091: "assets/bridges/bridge_091.png",
  bridge_092: "assets/bridges/bridge_092.png",
  bridge_093: "assets/bridges/bridge_093.png",
  bridge_094: "assets/bridges/bridge_094.png",
  bridge_095: "assets/bridges/bridge_095.png",
  bridge_096: "assets/bridges/bridge_096.png",
  bridge_097: "assets/bridges/bridge_097.png",
  bridge_098: "assets/bridges/bridge_098.png",
  bridge_099: "assets/bridges/bridge_099.png",
  bridge_100: "assets/bridges/bridge_100.png",
  bridge_101: "assets/bridges/bridge_101.jpg",
  bridge_102: "assets/bridges/bridge_102.jpg",
  bridge_103: "assets/bridges/bridge_103.jpg",
  bridge_104: "assets/bridges/bridge_104.jpg",
  bridge_105: "assets/bridges/bridge_105.jpg",
  bridge_106: "assets/bridges/bridge_106.jpg",
  bridge_107: "assets/bridges/bridge_107.jpg",
  bridge_108: "assets/bridges/bridge_108.jpg",
};

const BRIDGE_IMAGE_OVERRIDES = {
  ...LOCAL_BRIDGE_IMAGE_OVERRIDES,
  ...(RUNTIME_CONFIG.bridgeImages || {}),
  ...(window.BRIDGE_IMAGE_OVERRIDES || {}),
};

const DEFAULT_AI_MODEL_CONFIG = {
  enabled: false,
  apiKey: "",
  baseUrl: "https://api.openai.com/v1",
  chatPath: "/chat/completions",
  model: "gpt-4o-mini",
  temperature: 0.35,
  connectTimeoutMs: 3500,
  requestTimeoutMs: 30000,
  systemPrompt: "你是古桥千秋作品内置的古桥讲解助手。优先围绕中国古桥的数据、地图、桥型、技术演进、文化传承和保护价值回答。回答简洁、准确、适合展览导览。",
};

const AI_MODEL_CONFIG = {
  ...DEFAULT_AI_MODEL_CONFIG,
  ...(RUNTIME_CONFIG.aiModel || {}),
};

const XFYUN_TTS_POOL = Array.isArray(RUNTIME_CONFIG.xfyunTtsPool) ? RUNTIME_CONFIG.xfyunTtsPool : [];

const DEFAULT_XFYUN_TTS_CONFIG = {
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
};

const XFYUN_TTS_CONFIG = {
  ...DEFAULT_XFYUN_TTS_CONFIG,
  ...(RUNTIME_CONFIG.xfyunTts || {}),
};
const THEME = {
  backgroundColor: "transparent",
  textStyle: {
    color: "#e8f3ff",
    fontFamily: "Noto Serif SC, Songti SC, Microsoft YaHei, Segoe UI, sans-serif",
    fontSize: 15,
  },
  color: ["#8a3026", "#b06a36", "#c19a53", "#5f7f66", "#3f6f78", "#6f5941", "#9b6f3f"],
};

const WOOD_CHART_PALETTE = ["#8a3026", "#b06a36", "#c19a53", "#5f7f66", "#3f6f78", "#6f5941", "#9b6f3f"];
const WOOD_CHART_COLORS = {
  cinnabar: "#8a3026",
  ochre: "#b06a36",
  gilt: "#c19a53",
  stoneGreen: "#5f7f66",
  blueGreen: "#3f6f78",
  woodBrown: "#6f5941",
  text: "#2b2418",
  grid: "rgba(74,58,34,0.18)",
  softGold: "rgba(193,154,83,0.24)",
  softRed: "rgba(138,48,38,0.18)",
  softBrown: "rgba(111,89,65,0.22)",
};

function getChartBaseTheme() {
  if (document.body.classList.contains("wood-ui")) {
    return {
      ...THEME,
      textStyle: {
        ...THEME.textStyle,
        color: "#1a160f",
        fontFamily: "Noto Serif SC, Songti SC, KaiTi, Microsoft YaHei, sans-serif",
      },
    };
  }
  return THEME;
}

function tuneChartForWoodUi(option) {
  if (!document.body.classList.contains("wood-ui")) return option;
  const textColors = new Set(["#fff", "#ffffff", "#e8f3ff", "#ebf2ff", "#eef8ff", "#dceeff", "#d8efff", "#bdd5e8", "#b9d7ef"]);
  const softLineColors = new Map([
    ["rgba(255,255,255,0.08)", "rgba(74,58,34,0.16)"],
    ["rgba(255,255,255,0.10)", "rgba(74,58,34,0.18)"],
    ["rgba(255,255,255,0.12)", "rgba(74,58,34,0.20)"],
    ["rgba(255, 255, 255, 0.08)", "rgba(74,58,34,0.16)"],
    ["rgba(255, 255, 255, 0.10)", "rgba(74,58,34,0.18)"],
    ["rgba(255, 255, 255, 0.12)", "rgba(74,58,34,0.20)"],
  ]);

  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach((item) => walk(item));
      return;
    }
    Object.entries(node).forEach(([key, value]) => {
      if (typeof value === "string" && key === "color" && textColors.has(value.toLowerCase())) {
        node[key] = "#2b2418";
        return;
      }
      if (typeof value === "string" && key === "color" && softLineColors.has(value)) {
        node[key] = softLineColors.get(value);
        return;
      }
      if (typeof value === "string" && key === "borderColor" && textColors.has(value.toLowerCase())) {
        node[key] = "rgba(74,58,34,0.32)";
        return;
      }
      walk(value);
    });
  };

  walk(option);
  return option;
}

function enlargeChartText(option) {
  const walk = (node) => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) {
      node.forEach((item) => walk(item));
      return;
    }
    Object.entries(node).forEach(([key, value]) => {
      if (key === "fontSize" && typeof value === "number") {
        node[key] = value < 20 ? value + 2 : Math.round(value * 1.1);
        return;
      }
      walk(value);
    });
  };

  walk(option);
  return option;
}

const state = {
  loaded: null,
  charts: [],
  chinaMapLoaded: false,
  chinaGeoJson: null,
  homeAngleTimer: null,
  type3dDispose: null,
  mapResizeObserver: null,
  provinceGeoCache: new Map(),
  scriptLoads: {},
  speechUtterance: null,
  speechButton: null,
  speechMode: null,
  speechAudio: null,
  speechAudioUrl: '',
  speechSocket: null,
  tool3dDispose: null,
  cultureCloudDispose: null,
  aiAvailability: null,
};

function disposeBridgeType3D() {
  if (typeof state.type3dDispose === "function") {
    try {
      state.type3dDispose();
    } catch (err) {
      console.warn(err);
    }
  }
  state.type3dDispose = null;
}

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return Array.from(root.querySelectorAll(selector));
}

function fmtNum(num) {
  if (num === null || num === undefined || Number.isNaN(num)) return "--";
  return new Intl.NumberFormat("zh-CN").format(num);
}

function toArray(value) {
  return Array.isArray(value) ? value : [];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function safeNumber(value) {
  const num = Number(value);
  return Number.isFinite(num) ? num : null;
}

function getBridgeStartYear(bridge) {
  return safeNumber(bridge?.buildYear?.start);
}

function getBridgeLength(bridge) {
  return safeNumber(bridge?.dimensions?.length);
}

function getBridgeSpan(bridge) {
  return safeNumber(bridge?.dimensions?.span);
}

function getBridgeCoord(bridge) {
  return bridge?.location?.coordinates || null;
}

function getMapMarkers(data) {
  const unifiedMarkers = toArray(data?.unified?.bridges)
    .map((bridge) => {
      const coord = getBridgeCoord(bridge);
      const lng = safeNumber(coord?.lng);
      const lat = safeNumber(coord?.lat);
      if (lng === null || lat === null) return null;
      return {
        name: bridge.name,
        coordinates: { lng, lat },
        era: bridge.era || bridge.buildYear?.display || "",
        province: bridge.location?.province || "",
        city: bridge.location?.city || "",
        county: bridge.location?.county || "",
        district: bridge.location?.district || "",
        importance: safeNumber(bridge.importance) || 3,
        bridgeId: bridge.id || "",
        detailLink: bridge.detailLink || `detail.html?id=${encodeURIComponent(bridge.id || "")}`,
        category: bridge.category || bridge.type || "古桥",
      };
    })
    .filter(Boolean);
  return unifiedMarkers.length ? unifiedMarkers : toArray(data?.map?.mapMarkers);
}

function getInnovationCount(bridge) {
  return toArray(bridge?.technology?.innovations).length + (bridge?.technology?.worldFirst ? 1 : 0);
}

function getCultureCount(bridge) {
  const poems = toArray(bridge?.culturalInfo?.poems).length;
  const legends = toArray(bridge?.culturalInfo?.legends).length;
  const records = toArray(bridge?.culturalInfo?.historicalRecords).length;
  return poems + legends + records;
}

function getAgeScore(bridge) {
  const start = getBridgeStartYear(bridge);
  if (start === null) return 40;
  const min = -200;
  const max = 1912;
  return Math.max(8, Math.min(100, ((max - start) / (max - min)) * 100));
}

function getScaleScore(bridge) {
  const len = getBridgeLength(bridge) || 10;
  return Math.min(100, Math.log10(len + 1) * 28);
}

function getTechScore(bridge) {
  const lead = safeNumber(bridge?.technology?.leadYears) || 0;
  return Math.max(10, Math.min(100, lead ? lead / 12 : getInnovationCount(bridge) * 18 + 18));
}

function getCultureScore(bridge) {
  const importance = (safeNumber(bridge?.importance) || 3) * 14;
  const heritage = bridge?.protection?.isWorldHeritage ? 20 : 0;
  return Math.min(100, importance + heritage + getCultureCount(bridge) * 8 + (bridge?.historicalValue ? 10 : 0));
}

function getPreservationScore(bridge) {
  const protection = bridge?.protection?.level?.includes("国家") ? 18 : 8;
  const reliability = bridge?.dataReliability === "高" ? 20 : bridge?.dataReliability === "中" ? 12 : 6;
  const events = toArray(bridge?.keyEvents).length > 0 ? 10 : 0;
  return Math.min(100, 36 + protection + reliability + events);
}

function getBridgeRadar(bridge) {
  return [
    Math.round(getAgeScore(bridge)),
    Math.round(getScaleScore(bridge)),
    Math.round(getTechScore(bridge)),
    Math.round(getCultureScore(bridge)),
    Math.round(getPreservationScore(bridge)),
  ];
}

function getBridgeSummary(bridge) {
  const location = [bridge?.location?.province, bridge?.location?.city, bridge?.location?.county].filter(Boolean).join(" / ");
  const innovationNames = toArray(bridge?.technology?.innovations).map((item) => item.name).filter(Boolean).slice(0, 3).join("、");
  return [
    `${bridge.name}，${bridge.buildYear?.display || bridge.era || "年代未详"}，位于${location || "中国"}。`,
    `${bridge.type || bridge.category || "古桥"}，${bridge.historicalValue || "是中国古桥体系中的重要代表"}`,
    innovationNames ? `代表性技术包括${innovationNames}。` : "",
  ].filter(Boolean).join("");
}

function getBridgeImage(bridge, overrides = BRIDGE_IMAGE_OVERRIDES) {
  const directImage = bridge?.visualImage || bridge?.image || toArray(bridge?.images)[0];
  const mappedImage = overrides?.[bridge?.id] || overrides?.[bridge?.name];
  return String(directImage || mappedImage || "").trim();
}

function compareBridgeName(a, b) {
  return String(a?.name || "").localeCompare(String(b?.name || ""), "zh-CN-u-co-pinyin");
}

function sortBridgesForList(bridges, sortBy = "importance", sortOrder = "desc") {
  const direction = sortOrder === "asc" ? 1 : -1;
  return toArray(bridges).map((bridge, index) => ({ bridge, index })).sort((a, b) => {
    if (sortBy === "name") {
      return compareBridgeName(a.bridge, b.bridge) * direction || a.index - b.index;
    }
    const weightDiff = (safeNumber(a.bridge?.importance) || 0) - (safeNumber(b.bridge?.importance) || 0);
    return weightDiff * direction || a.index - b.index;
  }).map((item) => item.bridge);
}

function resolveBridgeByName(data, name) {
  if (!name) return null;
  const normalized = String(name).trim();
  return data.unified.bridges.find((bridge) => {
    const aliases = toArray(bridge.alias);
    return bridge.name === normalized || aliases.includes(normalized);
  }) || null;
}

async function loadJson(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`数据加载失败: ${path}`);
  return res.json();
}

async function loadData() {
  if (state.loaded) return state.loaded;
  const entries = await Promise.all(Object.entries(DATA_FILES).map(async ([key, path]) => [key, await loadJson(path)]));
  const raw = Object.fromEntries(entries);
  const bridges = raw.unified.bridges.map((bridge) => ({
    ...bridge,
    detailLink: `detail.html?id=${encodeURIComponent(bridge.id)}`,
  }));
  state.loaded = { ...raw, unified: { ...raw.unified, bridges } };
  return state.loaded;
}

function renderShell() {
  const page = document.body.dataset.page || "home";
  const title = document.body.dataset.title || "中国古桥可视化";
  const root = qs("#app");
  const main = root.querySelector("main");
  document.body.classList.add("wood-ui");
  root.classList.add("app-shell");
  if (main) main.classList.add("angle-page");

  const navLinks = page === "detail" ? [...NAV_LINKS, DETAIL_NAV_LINK] : NAV_LINKS;
  const nav = navLinks.map((link) => renderNavLink(link, page)).join("");

  const shellNav = `
    <aside class="home-nav-panel">
      <div class="sidebar-brand">
        <div class="brand-head">
          <div class="brand-mark" aria-hidden="true"></div>
          <h1>古桥千秋</h1>
        </div>
        <p class="brand-subtitle">千年桥史数字长卷</p>
      </div>
      <div class="sidebar-meta">
        <div class="sidebar-meta-label">本地数据源</div>
        <div class="sidebar-meta-value"><code>bridges_unified.json</code></div>
      </div>
      <nav class="side-nav">${nav}</nav>
      <div class="sidebar-footer">
              建议从 <code>古桥千秋/</code> 根目录启动本地 HTTP 服务，并打开 <code>/site/index.html</code>，以保证 <code>data/json/</code> 中的数据正常加载。
      </div>
    </aside>
  `;

  if (main) {
    main.insertAdjacentHTML("afterbegin", shellNav);
  } else {
    root.insertAdjacentHTML("afterbegin", shellNav);
  }

  if (main) {
    main.insertAdjacentHTML(
      "beforeend",
      `
        <footer class="footer footer-inline">
          <div class="footer-inner">
            数据来源：
            <a href="https://app.www.gov.cn/govdata/gov/201910/16/449618/article.html" target="_blank" rel="noopener">国务院第八批全国重点文物保护单位通知</a>
            <span>·</span>
            <a href="https://www.mct.gov.cn/whzx/ggtz/201305/t20130503_695297.htm" target="_blank" rel="noopener">文化和旅游部第七批全国重点文物保护单位</a>
            <span>·</span>
            <a href="https://whc.unesco.org/en/list/1443/" target="_blank" rel="noopener">UNESCO 中国大运河</a>
            <span>·</span>
            <a href="https://whc.unesco.org/en/list/1442/" target="_blank" rel="noopener">UNESCO 丝绸之路</a>
            <span>· 可视化引擎 </span>
            <a href="https://echarts.apache.org/" target="_blank" rel="noopener">Apache ECharts</a>
          </div>
        </footer>
      `
    );
  }

  if (main) ensureContentScroll(main);
}

function getAssistantIntro(data) {
  const bridgeCount = data?.unified?.bridges?.length || 108;
  return `你好，我是桥灵助手。这里汇聚 ${bridgeCount} 座古桥，可快速查看地图分布、桥型结构、技术演进、文化故事与成果展望。输入关键词，我来帮你定位。`;
}

function getAssistantReply(text, data) {
  const value = String(text || "").trim();
  const bridges = data?.unified?.bridges || [];
  const lower = value.toLowerCase();
  if (!value) return "可以输入你想看的内容，例如“地图怎么用”“介绍桥型”“技术演进看什么”。";
  if (/地图|省|分布|空间/.test(value)) {
    return "地图页可以先点全国省份，再进入市级地图；市级地图中的桥梁点位可直接跳转到详情页。右侧排行可用于观察重点省份的古桥数量差异。";
  }
  if (/时间|年代|朝代|历史/.test(value)) {
    return "时间角度按年代与朝代梳理古桥样本，并突出代表桥梁与关键突破事件，适合观察古桥从早期跨越到成熟体系的演变。";
  }
  if (/桥型|拱桥|梁桥|浮桥|廊桥|索桥|类型/.test(value)) {
    return "桥型角度围绕拱桥、梁桥、浮桥、廊桥、索桥等结构展开，并配有对应图像与三维模型，便于比较形制差异。";
  }
  if (/技术|工艺|材料|演进|工具|箱线|阶梯/.test(value)) {
    return "技术演进页重点看两部分：箱线图用于比较不同时期桥梁尺度分布，技术阶梯用于理解浮桥、石梁桥、拱桥、索桥等技术成熟过程。";
  }
  if (/文化|诗|传说|故事|人文/.test(value)) {
    return "文化传承页把古桥放进诗文、传说、历史事件和地方记忆中，通过标签云点击大标题就能展开详情。";
  }
  if (/保护|修缮|保存|价值/.test(value)) {
    return "保护修缮与成果展望部分关注古桥的保护等级、修缮记录、文化价值和现代传承方向，适合做总结与研究建议。";
  }
  if (/数量|多少|样本|数据/.test(value)) {
    const provinces = new Set(bridges.map((bridge) => bridge.location?.province).filter(Boolean));
    return `当前数据集中约有 ${bridges.length || 108} 座古桥样本，覆盖 ${provinces.size || "多个"} 省级区域，可在桥梁一览、地图和数据洞察中交叉查看。`;
  }
  if (/你好|您好|hello|hi/.test(lower)) {
    return "你好，我是桥灵小助手。你可以问我项目结构、地图交互、桥型差异、技术演进或文化故事。";
  }
  return "这个问题可以从五维图谱里找线索：时间看演变，空间看分布，桥型看结构，文化看故事，保护看修缮。你也可以换一个关键词继续问我。";
}

function getAiSystemContext(data) {
  const bridges = toArray(data?.unified?.bridges);
  const stats = data?.unified?.statistics || {};
  const provinceTop = Object.entries(stats.byProvince || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value]) => `${name}${value}座`)
    .join("、");
  const eraTop = Object.entries(stats.byEra || {})
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value]) => `${name}${value}座`)
    .join("、");
  const sampleNames = bridges.slice(0, 8).map((item) => item.name).join("、");
  return [
    `当前作品收录古桥样本约 ${bridges.length || 108} 座。`,
    provinceTop ? `重点省份包括：${provinceTop}。` : "",
    eraTop ? `主要年代分布包括：${eraTop}。` : "",
    sampleNames ? `代表桥梁示例：${sampleNames}。` : "",
    "如果用户问题超出已知数据范围，请明确说明，并引导其到地图、桥型、技术演进、文化传承或桥梁详情中继续查找。",
  ].filter(Boolean).join("\n");
}

function normalizeAiSearchText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[\s，。！？、；：,.!?;:"'“”‘’（）()[\]{}《》<>·—-]+/g, "");
}

function getFieldVariants(value) {
  const text = normalizeAiSearchText(value);
  if (!text) return [];
  const variants = [text];
  const trimmed = text.replace(/[省市县区]$/g, "");
  if (trimmed && trimmed !== text) variants.push(trimmed);
  return variants;
}

function clampAiContextText(value, maxLength = 180) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}…`;
}

function scoreBridgeForLocalContext(query, bridge) {
  const normalizedQuery = normalizeAiSearchText(query);
  if (!normalizedQuery || !bridge) return 0;
  let score = 0;

  const identityFields = [bridge.name, ...toArray(bridge.alias)];
  identityFields.forEach((field) => {
    getFieldVariants(field).forEach((variant) => {
      if (variant && normalizedQuery.includes(variant)) score += 100;
    });
  });

  const attributeFields = [
    bridge.location?.province,
    bridge.location?.city,
    bridge.location?.county,
    bridge.location?.river,
    bridge.era,
    bridge.type,
    bridge.category,
    bridge.builder,
    bridge.protection?.level,
    ...toArray(bridge.tags),
  ];
  attributeFields.forEach((field) => {
    getFieldVariants(field).forEach((variant) => {
      if (variant && normalizedQuery.includes(variant)) score += 20;
    });
  });

  const searchableText = normalizeAiSearchText([
    bridge.name,
    ...toArray(bridge.alias),
    bridge.historicalValue,
    bridge.technology?.worldFirst,
    bridge.technology?.description,
    ...toArray(bridge.technology?.innovations).flatMap((item) => [item?.name, item?.description]),
    ...toArray(bridge.culturalInfo?.legends).flatMap((item) => [item?.name, item?.content]),
    ...toArray(bridge.culturalInfo?.poems).flatMap((item) => [item?.title, item?.author, item?.content]),
  ].filter(Boolean).join(" "));
  if (searchableText && searchableText.includes(normalizedQuery)) score += 30;

  return score;
}

function formatBridgeForAiContext(bridge) {
  const location = [
    bridge.location?.province,
    bridge.location?.city,
    bridge.location?.county,
    bridge.location?.river ? `${bridge.location.river}流域` : "",
  ].filter(Boolean).join(" / ");
  const dimensions = [
    bridge.dimensions?.length ? `长${bridge.dimensions.length}${bridge.dimensions.unit || "米"}` : "",
    bridge.dimensions?.span ? `跨径${bridge.dimensions.span}${bridge.dimensions.unit || "米"}` : "",
    bridge.dimensions?.width ? `宽${bridge.dimensions.width}${bridge.dimensions.unit || "米"}` : "",
  ].filter(Boolean).join("，");
  const innovations = toArray(bridge.technology?.innovations)
    .slice(0, 2)
    .map((item) => [item?.name, item?.description].filter(Boolean).join("："))
    .filter(Boolean)
    .join("；");
  const legends = toArray(bridge.culturalInfo?.legends)
    .slice(0, 2)
    .map((item) => [item?.name, item?.content].filter(Boolean).join("："))
    .filter(Boolean)
    .join("；");
  return [
    `- ${bridge.name}${toArray(bridge.alias).length ? `（又名：${toArray(bridge.alias).join("、")}）` : ""}`,
    location ? `位置：${location}` : "",
    bridge.buildYear?.display || bridge.era ? `年代：${bridge.buildYear?.display || bridge.era}` : "",
    bridge.builder ? `建造者：${bridge.builder}` : "",
    bridge.type || bridge.category ? `桥型：${[bridge.category, bridge.type].filter(Boolean).join(" / ")}` : "",
    dimensions ? `尺度：${dimensions}` : "",
    bridge.protection?.level ? `保护级别：${bridge.protection.level}${bridge.protection?.batch ? `，${bridge.protection.batch}` : ""}` : "",
    bridge.technology?.worldFirst || bridge.technology?.description ? `技术价值：${[bridge.technology?.worldFirst, bridge.technology?.description].filter(Boolean).join("；")}` : "",
    innovations ? `技术要点：${innovations}` : "",
    legends ? `文化故事：${legends}` : "",
    bridge.historicalValue ? `历史价值：${bridge.historicalValue}` : "",
  ].filter(Boolean).map((line) => clampAiContextText(line, 240)).join("\n");
}

function getRelevantLocalDataContext(message, data) {
  const bridges = toArray(data?.unified?.bridges);
  const matches = bridges
    .map((bridge) => ({ bridge, score: scoreBridgeForLocalContext(message, bridge) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || (b.bridge.importance || 0) - (a.bridge.importance || 0))
    .slice(0, 3)
    .map((item) => formatBridgeForAiContext(item.bridge));

  if (!matches.length) return "";
  return [
    "本地数据检索命中：以下内容来自作品包内置 JSON，请优先依据这些本地数据回答。",
    ...matches,
  ].join("\n");
}

function buildAiEndpoint(baseUrl, path) {
  const normalizedBase = String(baseUrl || "").replace(/\/+$/, "");
  const normalizedPath = String(path || "/chat/completions").startsWith("/")
    ? String(path || "/chat/completions")
    : `/${String(path || "chat/completions")}`;
  return `${normalizedBase}${normalizedPath}`;
}

function hasConfiguredAiModel() {
  return Boolean(
    AI_MODEL_CONFIG.enabled
      && String(AI_MODEL_CONFIG.apiKey || "").trim()
      && String(AI_MODEL_CONFIG.baseUrl || "").trim()
      && String(AI_MODEL_CONFIG.model || "").trim()
  );
}

async function fetchWithTimeout(resource, options = {}, timeoutMs = 8000) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(resource, { ...options, signal: controller.signal });
  } finally {
    window.clearTimeout(timer);
  }
}

async function resolveAiAvailability() {
  if (!navigator.onLine) {
    return {
      mode: "rules",
      reason: "offline",
      notice: "当前是离线本地模式哦，我已经切换为基于桥梁数据集的规则助手啦。你可以继续问我，也可以顺着地图、桥型、技术演进和文化传承这些模块一起找线索。",
    };
  }
  if (!hasConfiguredAiModel()) {
    return {
      mode: "rules",
      reason: "not_configured",
      notice: "现在还没有接入 AI 大模型配置呢，所以我先用基于桥梁数据集的规则助手来陪你检索内容。要是你想找得更快，也可以结合地图、桥型、技术演进和文化传承几个页面一起看。",
    };
  }
  const endpoint = buildAiEndpoint(AI_MODEL_CONFIG.baseUrl, AI_MODEL_CONFIG.chatPath);
  try {
    const response = await fetchWithTimeout(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${String(AI_MODEL_CONFIG.apiKey).trim()}`,
      },
      body: JSON.stringify({
        model: AI_MODEL_CONFIG.model,
        temperature: 0,
        max_tokens: 8,
        messages: [
          { role: "system", content: "Reply with OK only." },
          { role: "user", content: "ping" },
        ],
      }),
    }, AI_MODEL_CONFIG.connectTimeoutMs || 3500);
    if (!response.ok) throw new Error(`AI connect failed: ${response.status}`);
    return { mode: "model", reason: "ready", notice: "" };
  } catch (error) {
    console.warn("AI model probe failed, fallback to rule assistant.", error);
    return {
      mode: "rules",
      reason: "model_unavailable",
      notice: "我已经检测到网络了，不过当前 AI 大模型接口暂时不可用，所以先切回基于桥梁数据集的规则助手。没关系，你还是可以继续问我，也可以到古桥千秋各页面里交叉查找信息。",
    };
  }
}

async function requestAiModelReply(message, data, history = []) {
  const endpoint = buildAiEndpoint(AI_MODEL_CONFIG.baseUrl, AI_MODEL_CONFIG.chatPath);
  const recentHistory = history.slice(-8);
  const requestHistory = recentHistory.at(-1)?.role === "user" && recentHistory.at(-1)?.content === message
    ? recentHistory.slice(0, -1)
    : recentHistory;
  const relevantLocalContext = getRelevantLocalDataContext(message, data);
  const response = await fetchWithTimeout(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${String(AI_MODEL_CONFIG.apiKey).trim()}`,
    },
    body: JSON.stringify({
      model: AI_MODEL_CONFIG.model,
      temperature: AI_MODEL_CONFIG.temperature,
      messages: [
        { role: "system", content: [AI_MODEL_CONFIG.systemPrompt, getAiSystemContext(data), relevantLocalContext].filter(Boolean).join("\n\n") },
        ...requestHistory,
        { role: "user", content: message },
      ],
    }),
  }, AI_MODEL_CONFIG.requestTimeoutMs || 30000);
  if (!response.ok) throw new Error(`AI request failed: ${response.status}`);
  const payload = await response.json();
  const reply = payload?.choices?.[0]?.message?.content?.trim();
  if (!reply) throw new Error("AI reply is empty");
  return reply;
}

function appendAssistantMessage(log, role, text) {
  const isUser = role === "user";
  const row = document.createElement("div");
  row.className = `ai-chat-message ${isUser ? "user" : "bot"}`;
  row.innerHTML = `
    <div class="ai-chat-icon" aria-hidden="true">${isUser ? "问" : "桥"}</div>
    <div class="ai-chat-bubble">${escapeHtml(text)}</div>
  `;
  log.appendChild(row);
  log.scrollTo({ top: log.scrollHeight, behavior: "smooth" });
}

function initAiAssistant(data) {
  if (qs("#ai-assistant")) return;
  const intro = getAssistantIntro(data);
  document.body.insertAdjacentHTML(
    "beforeend",
    `
      <section id="ai-assistant" class="ai-assistant" aria-label="AI 桥梁助手">
        <button class="ai-bot-button" type="button" aria-expanded="false" aria-controls="ai-chat-panel" title="AI 桥梁助手">
          <span class="ai-bot-portrait" aria-hidden="true"></span>
          <span class="ai-bot-label">AI</span>
        </button>
        <div id="ai-chat-panel" class="ai-chat-panel" hidden>
          <div class="ai-chat-head">
            <div>
              <strong>桥灵助手</strong>
              <span>中国古桥五维图谱导览</span>
            </div>
            <button class="ai-chat-close" type="button" aria-label="关闭对话">×</button>
          </div>
          <div class="ai-chat-log" aria-live="polite"></div>
          <div class="ai-chat-prompts">
            ${["地图怎么用", "介绍桥型", "技术演进看什么", "文化故事有哪些"].map((tip) => `<button type="button" data-ai-prompt="${tip}">${tip}</button>`).join("")}
          </div>
          <form class="ai-chat-form">
            <input type="text" name="message" autocomplete="off" placeholder="询问古桥数据、地图、技术或文化..." />
            <button type="submit">发送</button>
          </form>
        </div>
      </section>
    `
  );

  const assistant = qs("#ai-assistant");
  const toggle = qs(".ai-bot-button", assistant);
  const panel = qs("#ai-chat-panel", assistant);
  const close = qs(".ai-chat-close", assistant);
  const log = qs(".ai-chat-log", assistant);
  const form = qs(".ai-chat-form", assistant);
  const input = qs("input", form);
  const submitButton = qs('button[type="submit"]', form);
  let welcomed = false;
  let noticeKey = "";
  const history = [];

  const syncAvailabilityNotice = async () => {
    state.aiAvailability = await resolveAiAvailability();
    const nextKey = `${state.aiAvailability.mode}:${state.aiAvailability.reason}`;
    if (state.aiAvailability.mode !== "model" && noticeKey !== nextKey) {
      noticeKey = nextKey;
      appendAssistantMessage(log, "bot", state.aiAvailability.notice);
    }
  };

  const openPanel = async () => {
    panel.hidden = false;
    assistant.classList.add("open");
    toggle.setAttribute("aria-expanded", "true");
    if (!welcomed) {
      welcomed = true;
      appendAssistantMessage(log, "bot", intro);
    }
    await syncAvailabilityNotice();
    window.setTimeout(() => input.focus(), 80);
  };

  const closePanel = () => {
    assistant.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    panel.hidden = true;
  };

  const ask = async (message) => {
    const text = String(message || "").trim();
    if (!text) return;
    appendAssistantMessage(log, "user", text);
    const requestHistory = history.slice();
    history.push({ role: "user", content: text });
    input.value = "";
    input.disabled = true;
    if (submitButton) submitButton.disabled = true;
    try {
      const availability = state.aiAvailability || await resolveAiAvailability();
      state.aiAvailability = availability;
      let reply = "";
      if (availability.mode === "model") {
        try {
          reply = await requestAiModelReply(text, data, requestHistory);
        } catch (error) {
          console.warn("AI model reply failed, fallback to rule assistant.", error);
          state.aiAvailability = {
            mode: "rules",
            reason: "model_unavailable",
            notice: "刚刚调用 AI 大模型时出了点小问题，我已经自动切回基于桥梁数据集的规则助手了。你可以继续提问，也可以结合页面里的图谱和桥梁详情继续找线索。",
          };
          const fallbackKey = `${state.aiAvailability.mode}:${state.aiAvailability.reason}`;
          if (noticeKey !== fallbackKey) {
            noticeKey = fallbackKey;
            appendAssistantMessage(log, "bot", state.aiAvailability.notice);
          }
          reply = getAssistantReply(text, data);
        }
      } else {
        await wait(220);
        reply = getAssistantReply(text, data);
      }
      appendAssistantMessage(log, "bot", reply);
      history.push({ role: "assistant", content: reply });
    } finally {
      input.disabled = false;
      if (submitButton) submitButton.disabled = false;
      input.focus();
    }
  };

  toggle.addEventListener("click", () => {
    if (panel.hidden) openPanel();
    else closePanel();
  });
  close.addEventListener("click", closePanel);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    ask(input.value);
  });
  qsa("[data-ai-prompt]", assistant).forEach((button) => {
    button.addEventListener("click", () => ask(button.dataset.aiPrompt));
  });
}
function getDetailNavHref(fallbackHref = DETAIL_NAV_LINK.href, hrefOverride = window.location.href) {
  if (document.body.dataset.page !== "detail") return fallbackHref;
  const detailUrl = new URL(hrefOverride, window.location.href);
  const file = detailUrl.pathname.split("/").pop() || DETAIL_NAV_LINK.href;
  return `${file}${detailUrl.search}`;
}

function renderNavLink(link, page, extraClass = "", hrefOverride) {
  const classes = [link.page === page ? "active" : "", extraClass].filter(Boolean).join(" ");
  const href = link.page === "detail" ? getDetailNavHref(link.href, hrefOverride) : link.href;
  return `<a class="${classes}" data-nav-page="${link.page}" href="${href}">${link.label}</a>`;
}

function ensureContentScroll(main = qs("main.page")) {
  if (!main) return null;
  let scroller = main.querySelector(":scope > .page-content-scroll");
  if (!scroller) {
    scroller = document.createElement("div");
    scroller.className = "page-content-scroll";
    main.appendChild(scroller);
  }

  Array.from(main.children).forEach((child) => {
    if (!child.classList.contains("home-nav-panel") && child !== scroller) {
      scroller.appendChild(child);
    }
  });

  return scroller;
}

function setMetrics(cards) {
  const wrap = qs("#hero-metrics");
  if (!wrap) return;
  wrap.innerHTML = cards.map((card) => `
    <div class="metric-card">
      <div class="label">${card.label}</div>
      <div class="value">${card.value}</div>
      <div class="sub">${card.sub || ""}</div>
    </div>
  `).join("");
}

function initChart(id, option) {
  const dom = qs(`#${id}`);
  if (!dom) return null;
  if (typeof echarts === "undefined") {
    dom.innerHTML = `<div class="empty">图表库未加载，当前界面的图标数据与文字联动仍可查看。</div>`;
    return null;
  }
  let chart = echarts.getInstanceByDom(dom);
  if (!chart) {
    chart = echarts.init(dom, null, { renderer: "canvas" });
    state.charts.push(chart);
  }
  chart.setOption(enlargeChartText({ ...getChartBaseTheme(), ...tuneChartForWoodUi(option) }));
  return chart;
}

function loadScriptOnce(src, isReady) {
  if (typeof isReady === "function" && isReady()) return Promise.resolve();
  if (state.scriptLoads[src]) return state.scriptLoads[src];
  state.scriptLoads[src] = new Promise((resolve, reject) => {
    const existing = qsa("script").find((script) => script.src && script.src.endsWith(src));
    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      if (typeof isReady === "function" && isReady()) resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`script load failed: ${src}`));
    document.head.appendChild(script);
  });
  return state.scriptLoads[src];
}

async function ensureBridge3DAssets() {
  const isReady = () => window.THREE && window.THREE.OrbitControls && typeof window.initBridgeType3D === "function";
  if (isReady()) return true;
  try {
    await loadScriptOnce(LOCAL_ASSET_FILES.three, () => window.THREE);
    await loadScriptOnce(LOCAL_ASSET_FILES.orbitControls, () => window.THREE && window.THREE.OrbitControls);
    await loadScriptOnce("assets/bridge-type-3d.js", () => typeof window.initBridgeType3D === "function");
    return Boolean(isReady());
  } catch (error) {
    console.warn("三维桥梁模型加载失败。", error);
    return false;
  }
}

async function ensureThreeAssets() {
  if (window.THREE) return true;
  try {
    await loadScriptOnce(LOCAL_ASSET_FILES.three, () => window.THREE);
    return Boolean(window.THREE);
  } catch (error) {
    console.warn("三维工具模型加载失败。", error);
    return false;
  }
}

async function ensureChinaMap() {
  if (state.chinaMapLoaded) return true;
  if (typeof echarts === "undefined") return false;
  try {
    const res = await fetch(LOCAL_ASSET_FILES.chinaMap);
    if (!res.ok) throw new Error(`china map load failed: ${res.status}`);
    const geoJson = await res.json();
    echarts.registerMap("china", geoJson);
    state.chinaGeoJson = geoJson;
    state.chinaMapLoaded = true;
    return true;
  } catch (error) {
    console.warn("中国地图底图加载失败，将回退为散点视图。", error);
    return false;
  }
}

function bindGlobalSearch(data) {
  const input = qs("#global-search");
  const button = qs("#global-search-btn");
  if (!input || !button) return;
  const go = () => {
    const keyword = input.value.trim();
    if (!keyword) return;
    const bridge = resolveBridgeByName(data, keyword) || data.unified.bridges.find((item) => item.name.includes(keyword));
    if (bridge) {
      loadPageContent(new URL(bridge.detailLink, window.location.href).href);
      return;
    }
    alert("未找到匹配桥梁，请试试：赵州桥、洛阳桥、卢沟桥 等名称。");
  };
  button.addEventListener("click", go);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") go();
  });
}

function getInlineFooterHtml() {
  return `
    <footer class="footer footer-inline">
      <div class="footer-inner">
        数据来源：
        <a href="https://app.www.gov.cn/govdata/gov/201910/16/449618/article.html" target="_blank" rel="noopener">国务院第八批全国重点文物保护单位通知</a>
        <span>·</span>
        <a href="https://www.mct.gov.cn/whzx/ggtz/201305/t20130503_695297.htm" target="_blank" rel="noopener">文化和旅游部第七批全国重点文物保护单位</a>
        <span>·</span>
        <a href="https://whc.unesco.org/en/list/1443/" target="_blank" rel="noopener">UNESCO 中国大运河</a>
        <span>·</span>
        <a href="https://whc.unesco.org/en/list/1442/" target="_blank" rel="noopener">UNESCO 丝绸之路</a>
        <span>· 可视化引擎 </span>
        <a href="https://echarts.apache.org/" target="_blank" rel="noopener">Apache ECharts</a>
      </div>
    </footer>
  `;
}

function disposePageRuntime() {
  stopSpeech();
  if (typeof state.cultureCloudDispose === "function") {
    try {
      state.cultureCloudDispose();
    } catch (error) {
      console.warn("culture cloud dispose failed", error);
    }
    state.cultureCloudDispose = null;
  }
  if (typeof state.tool3dDispose === "function") {
    try {
      state.tool3dDispose();
    } catch (error) {
      console.warn("tool model dispose failed", error);
    }
    state.tool3dDispose = null;
  }
  if (state.homeAngleTimer) {
    window.clearInterval(state.homeAngleTimer);
    state.homeAngleTimer = null;
  }
  disposeBridgeType3D();
  if (state.mapResizeObserver) {
    state.mapResizeObserver.disconnect();
    state.mapResizeObserver = null;
  }
  state.charts.forEach((chart) => {
    try {
      chart.dispose();
    } catch (error) {
      console.warn("chart dispose failed", error);
    }
  });
  state.charts = [];
}

function updateNavActive(page, detailHref = window.location.href) {
  const nav = qs(".home-nav-panel .side-nav");
  if (!nav) return;
  let detailLink = nav.querySelector('[data-nav-page="detail"]');
  if (page === "detail") {
    if (!detailLink) {
      nav.insertAdjacentHTML("beforeend", renderNavLink(DETAIL_NAV_LINK, page, "nav-detail-link nav-fade-in", detailHref));
      detailLink = nav.querySelector('[data-nav-page="detail"]');
    } else {
      detailLink.classList.remove("nav-fade-out");
      detailLink.classList.add("nav-detail-link");
      detailLink.setAttribute("href", getDetailNavHref(DETAIL_NAV_LINK.href, detailHref));
    }
  } else if (detailLink && !detailLink.classList.contains("nav-fade-out")) {
    detailLink.classList.remove("active", "nav-fade-in");
    detailLink.classList.add("nav-fade-out");
    const removeDetailLink = () => detailLink.remove();
    detailLink.addEventListener("animationend", removeDetailLink, { once: true });
    window.setTimeout(() => {
      if (detailLink.isConnected) detailLink.remove();
    }, 320);
  }
  qsa(".home-nav-panel .side-nav a").forEach((link) => {
    link.classList.toggle("active", link.dataset.navPage === page);
  });
}

async function initCurrentPage(data) {
  const page = document.body.dataset.page || "home";
  if (page === "home") await initHome(data);
  if (page === "map") await initMapPage(data);
  if (page === "insights") initInsightsPage(data);
  if (page === "technology") initTechnologyPage(data);
  if (page === "culture") initCulturePage(data);
  if (page === "value-outlook") initValueOutlookPage(data);
  if (page === "detail") await initDetailPage(data);
  if (page === "bridge-list") initBridgeListPage(data);
}

function wait(ms) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

async function loadPageContent(url, options = {}) {
  const main = qs("main.page");
  const scroller = ensureContentScroll(main);
  if (!main) {
    window.location.href = url;
    return;
  }

  if (scroller) scroller.classList.add("content-fade-out");
  try {
    const [html] = await Promise.all([
      fetch(url).then((res) => {
        if (!res.ok) throw new Error(`page load failed: ${res.status}`);
        return res.text();
      }),
      wait(180),
    ]);
    const doc = new DOMParser().parseFromString(html, "text/html");
    const targetMain = doc.querySelector("main.page") || doc.querySelector("main");
    if (!targetMain) throw new Error("target page has no main content");

    disposePageRuntime();
    if (scroller) scroller.replaceChildren();

    const targetBody = doc.body;
    const nextPage = targetBody?.dataset?.page || "home";
    const nextTitle = targetBody?.dataset?.title || doc.title || document.title;
    document.body.dataset.page = nextPage;
    document.body.dataset.title = nextTitle;
    document.title = doc.title || nextTitle;
    updateNavActive(nextPage, url);

    if (scroller) scroller.classList.remove("content-fade-out");
    Array.from(targetMain.children).forEach((child) => {
      if (!child.classList.contains("home-nav-panel")) {
        (scroller || main).appendChild(document.importNode(child, true));
      }
    });
    (scroller || main).insertAdjacentHTML("beforeend", getInlineFooterHtml());

    const data = await loadData();
    if (options.push !== false) window.history.pushState({ url }, "", url);
    bindGlobalSearch(data);
    await initCurrentPage(data);
    if (scroller) scroller.scrollTo({ top: 0, behavior: "auto" });
  } catch (error) {
    console.warn("partial navigation failed, falling back to full navigation", error);
    window.location.href = url;
  }
}

function bindPageTransition() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;
    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || /^https?:/i.test(href) || link.target === "_blank") return;
    const url = new URL(href, window.location.href);
    if (url.origin !== window.location.origin) return;
    event.preventDefault();
    loadPageContent(url.href);
  });

  window.addEventListener("popstate", () => {
    loadPageContent(window.location.href, { push: false });
  });
}

function quantile(sorted, ratio) {
  if (!sorted.length) return 0;
  const pos = (sorted.length - 1) * ratio;
  const base = Math.floor(pos);
  const rest = pos - base;
  if (sorted[base + 1] === undefined) return sorted[base];
  return sorted[base] + rest * (sorted[base + 1] - sorted[base]);
}

function buildBoxValues(values) {
  if (!values.length) return [0, 0, 0, 0, 0];
  const sorted = values.slice().sort((a, b) => a - b);
  return [
    Number(sorted[0].toFixed(2)),
    Number(quantile(sorted, 0.25).toFixed(2)),
    Number(quantile(sorted, 0.5).toFixed(2)),
    Number(quantile(sorted, 0.75).toFixed(2)),
    Number(sorted[sorted.length - 1].toFixed(2)),
  ];
}

function renderTagCloud(containerId, words) {
  const container = qs(`#${containerId}`);
  if (!container) return;
  const max = Math.max(...words.map((item) => item.value), 1);
  const palette = ["#45f3ff", "#ff5fd2", "#ffd04d", "#79ff84", "#a680ff", "#ff7f5e", "#7bf0ff", "#ff6ca8"];
  const ringCount = 4;
  const ringBuckets = Array.from({ length: ringCount }, () => []);
  words.forEach((word, index) => {
    ringBuckets[index % ringCount].push(word);
  });

  container.innerHTML = ringBuckets.map((bucket, ringIndex) => {
    const radius = 90 + ringIndex * 52;
    const speed = 20 + ringIndex * 5;
    const reverse = ringIndex % 2 ? "reverse" : "";
    const tagsHtml = bucket.map((item, idx) => {
      const angle = (360 / Math.max(bucket.length, 1)) * idx;
      const size = 12 + Math.round((item.value / max) * 18);
      const color = palette[(idx + ringIndex) % palette.length];
      return `<a class="tag-item" href="${item.link || "#"}" style="font-size:${size}px;color:${color};transform: translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg);" title="${item.name}">${item.name}</a>`;
    }).join("");
    return `<div class="orbit-ring ${reverse}" style="--orbit-radius:${radius};--orbit-speed:${speed}s;">${tagsHtml}</div>`;
  }).join("");
}

function renderWordCloudPoster(containerId, words) {
  const container = qs(`#${containerId}`);
  if (!container) return;
  const basePalette = ["#2bbf9c", "#2f6f9a", "#4d2f8f", "#6ac26e", "#8acb35", "#3f8ab0"];
  const width = container.clientWidth || 640;
  const height = container.clientHeight || 300;
  const max = Math.max(...words.map((item) => item.value), 1);

  const placed = words.slice(0, 30).map((item, index) => {
    const scale = item.value / max;
    const size = Math.round(14 + scale * 52);
    const color = basePalette[index % basePalette.length];
    const isVertical = index % 4 === 0 || size < 24;
    const cols = 8;
    const xCell = index % cols;
    const yCell = Math.floor(index / cols);
    const x = 20 + xCell * Math.round(width / cols) + ((index * 19) % 22);
    const y = 24 + yCell * 44 + ((index * 13) % 18);
    return {
      ...item,
      size,
      color,
      x: Math.min(Math.max(8, x), width - 80),
      y: Math.min(Math.max(8, y), height - 40),
      rotate: isVertical ? -90 : 0,
    };
  });

  container.innerHTML = `<div class="word-cloud-board">${
    placed.map((item) =>
      `<span class="word-item" style="left:${item.x}px;top:${item.y}px;font-size:${item.size}px;color:${item.color};--rotate:${item.rotate}deg;transform: rotate(${item.rotate}deg);" title="${item.name}：${item.value}">${item.name}</span>`
    ).join("")
  }</div>`;
}

function renderBridgeNamePosterCloud(containerId, bridges) {
  const container = qs(`#${containerId}`);
  if (!container) return;
  const palette = ["#bf251d", "#233f19", "#6f1f19", "#c49a1d", "#304d29", "#8a3026", "#5c6f28", "#a85d21"];
  const width = Math.max(720, container.clientWidth || 960);
  const height = Math.max(360, container.clientHeight || 430);
  const centerX = width / 2;
  const centerY = height / 2;
  const words = bridges
    .slice()
    .sort((a, b) => (b.importance || 0) - (a.importance || 0) || getInnovationCount(b) - getInnovationCount(a))
    .slice(0, 82)
    .map((bridge) => ({
      name: bridge.name,
      link: bridge.detailLink,
      value: Math.max(1, (bridge.importance || 1) + getInnovationCount(bridge)),
    }));

  const boxes = [];
  const intersects = (box) => boxes.some((item) => !(
    box.right < item.left ||
    box.left > item.right ||
    box.bottom < item.top ||
    box.top > item.bottom
  ));
  const measure = (word, size, rotate) => {
    const charWidth = size * 0.86;
    const textWidth = Math.max(size * 1.55, word.name.length * charWidth);
    const textHeight = size * 0.98;
    return Math.abs(rotate) === 90
      ? { width: textHeight, height: textWidth }
      : { width: textWidth, height: textHeight };
  };
  const buildBox = (x, y, widthValue, heightValue) => ({
    left: x - widthValue / 2 - 1,
    right: x + widthValue / 2 + 1,
    top: y - heightValue / 2 - 1,
    bottom: y + heightValue / 2 + 1,
  });
  const inBounds = (box) => box.left >= 8 && box.top >= 8 && box.right <= width - 8 && box.bottom <= height - 8;
  const candidatesFor = (index) => {
    const points = [];
    if (index === 0) points.push([centerX, centerY]);
    const base = Math.max(4, index * 1.2);
    for (let step = 0; step < 1180; step += 1) {
      const angle = step * 0.34;
      const radius = base + step * 0.30;
      const x = centerX + Math.cos(angle) * radius * 1.62;
      const y = centerY + Math.sin(angle) * radius * 0.76;
      points.push([x, y]);
    }
    return points;
  };

  const items = words.flatMap((word, index) => {
    let size = 15 + Math.min(9, word.value);
    if (index === 0) size = 72;
    else if (index === 1) size = 54;
    else if (index === 2) size = 46;
    else if (index < 7) size = 36 + (index % 2) * 4;
    else if (index < 18) size = 26 + (index % 5);
    else if (index < 38) size = 18 + (index % 4);
    const rotate = index > 8 && (index % 9 === 0 || index % 14 === 0) ? -90 : 0;
    let placed = null;
    for (let shrink = 0; shrink < 4 && !placed; shrink += 1) {
      const trySize = Math.max(12, size - shrink * 2);
      const measured = measure(word, trySize, rotate);
      for (const [x, y] of candidatesFor(index)) {
        const box = buildBox(x, y, measured.width, measured.height);
        if (!inBounds(box) || intersects(box)) continue;
        placed = { ...word, x, y, size: trySize, rotate, color: palette[index % palette.length], box };
        break;
      }
    }
    if (!placed) return [];
    boxes.push(placed.box);
    return [placed];
  });

  container.innerHTML = `<div class="word-cloud-board bridge-name-word-cloud">${
    items.map((item) => `
      <a class="word-item" href="${item.link}" style="left:${item.x.toFixed(1)}px;top:${item.y.toFixed(1)}px;font-size:${item.size}px;color:${item.color};--rotate:${item.rotate}deg;transform: translate(-50%, -50%) rotate(${item.rotate}deg);" title="${escapeHtml(item.name)}">
        ${escapeHtml(item.name)}
      </a>
    `).join("")
  }</div>`;
}

function getEnabledXfyunPool() {
  return toArray(XFYUN_TTS_POOL).filter((item) => Boolean(
    item?.enabled
      && String(item.appId || "").trim()
      && String(item.apiKey || "").trim()
      && String(item.apiSecret || "").trim()
  ));
}

function hasConfiguredXfyunTts() {
  return getEnabledXfyunPool().length > 0;
}

function buildXfyunAttemptQueue() {
  const pool = getEnabledXfyunPool();
  if (!pool.length) return [];
  const start = Math.floor(Math.random() * pool.length);
  const rotated = pool.slice(start).concat(pool.slice(0, start));
  const maxAttempts = Math.max(1, Number(XFYUN_TTS_CONFIG.maxKeyRetries || 0) + 1);
  return rotated.slice(0, Math.min(rotated.length, maxAttempts)).map((config, index) => ({
    ...config,
    attemptIndex: index,
    attemptCount: Math.min(rotated.length, maxAttempts),
  }));
}

function canUseNativeSpeech() {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

function setSpeechButtonState(button, isSpeaking) {
  if (!button) return;
  button.textContent = isSpeaking ? "暂停朗读" : "语音朗读";
  button.classList.toggle("is-speaking", Boolean(isSpeaking));
}

function revokeSpeechAudioUrl() {
  if (state.speechAudioUrl) {
    URL.revokeObjectURL(state.speechAudioUrl);
    state.speechAudioUrl = "";
  }
}

function resetSpeechState() {
  setSpeechButtonState(state.speechButton, false);
  state.speechUtterance = null;
  state.speechButton = null;
  state.speechMode = null;
  state.speechAudio = null;
  state.speechSocket = null;
  revokeSpeechAudioUrl();
}

function isSpeechActiveForButton(button) {
  if (!button || state.speechButton !== button) return false;
  if (state.speechMode === "xfyun" || state.speechMode === "local") {
    return Boolean(state.speechSocket || (state.speechAudio && !state.speechAudio.paused));
  }
  if (!canUseNativeSpeech()) return false;
  return Boolean(
    state.speechUtterance
      && (window.speechSynthesis.speaking || window.speechSynthesis.pending || window.speechSynthesis.paused)
  );
}

function closeSpeechSocket() {
  if (!state.speechSocket) return;
  try {
    state.speechSocket.onopen = null;
    state.speechSocket.onmessage = null;
    state.speechSocket.onerror = null;
    state.speechSocket.onclose = null;
    if (state.speechSocket.readyState === WebSocket.OPEN || state.speechSocket.readyState === WebSocket.CONNECTING) {
      state.speechSocket.close(1000, "stop");
    }
  } catch (error) {
    console.warn(error);
  }
  state.speechSocket = null;
}

function stopSpeech() {
  if (canUseNativeSpeech() && (window.speechSynthesis.speaking || window.speechSynthesis.pending || window.speechSynthesis.paused)) {
    window.speechSynthesis.cancel();
  }
  closeSpeechSocket();
  if (state.speechAudio) {
    try {
      state.speechAudio.pause();
      state.speechAudio.currentTime = 0;
      state.speechAudio.src = "";
    } catch (error) {
      console.warn(error);
    }
  }
  resetSpeechState();
}

function showDetailSpeechFallbackAlert(reason) {
  const messageMap = {
    offline: "当前网络不可用，已切换为本地桥梁音频朗读。",
    unconfigured: "讯飞在线语音尚未完成配置，已切换为本地桥梁音频朗读。",
    unsupported: "当前浏览器不支持语音朗读。",
    service_unavailable: "讯飞在线语音服务暂时无法使用，已切换为本地桥梁音频朗读。",
    playback_failed: "在线语音播报过程中出现问题，已切换为本地桥梁音频朗读。",
    local_audio_failed: "本地桥梁音频不可用，已切换为浏览器本地语音朗读。",
  };
  alert(messageMap[reason] || messageMap.service_unavailable);
}

function getXfyunStatusMessage(mode, attempt) {
  if (!attempt) return "";
  if (mode === "checking") {
    return attempt.attemptIndex > 0
      ? `讯飞主语音配置不可用，正在检测备用在线语音（${attempt.attemptIndex + 1}/${attempt.attemptCount}）...`
      : "正在检测讯飞在线语音服务...";
  }
  if (mode === "online") {
    return attempt.attemptIndex > 0
      ? `已切换备用讯飞在线语音（${attempt.attemptIndex + 1}/${attempt.attemptCount}）。`
      : "当前使用讯飞在线语音合成。";
  }
  if (mode === "local_checking") {
    return "讯飞在线语音不可用，正在切换本地音频朗读...";
  }
  if (mode === "local") {
    return "当前使用本地桥梁音频朗读。";
  }
  return "";
}

function ensureSpeechStatusNode(button, options = {}) {
  if (!button || !options.preferOnline) return null;
  const actionWrap = button.closest(".detail-actions");
  if (!actionWrap) return null;
  let node = actionWrap.parentElement?.querySelector(".speech-status-hint");
  if (node) return node;
  node = document.createElement("div");
  node.className = "speech-status-hint is-idle";
  node.textContent = "当前默认优先使用讯飞在线语音，若服务不可用将自动切换为本地桥梁音频。";
  actionWrap.insertAdjacentElement("afterend", node);
  return node;
}

function updateSpeechStatus(button, options = {}, message = "", mode = "idle") {
  const node = ensureSpeechStatusNode(button, options);
  if (!node) return;
  node.textContent = message;
  node.className = `speech-status-hint is-${mode}`;
}

function speakWithNativeTts(button, text) {
  if (!canUseNativeSpeech()) return false;
  stopSpeech();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-CN";
  utterance.rate = 1;
  utterance.pitch = 1;
  state.speechUtterance = utterance;
  state.speechButton = button;
  state.speechMode = "native";
  setSpeechButtonState(button, true);
  const resetButton = () => {
    if (state.speechUtterance !== utterance) return;
    resetSpeechState();
  };
  utterance.onend = resetButton;
  utterance.onerror = resetButton;
  window.speechSynthesis.speak(utterance);
  return true;
}

async function canUseLocalBridgeAudio(bridgeName) {
  if (!bridgeName) return false;
  const audioUrl = LOCAL_ASSET_FILES.bridgeAudio(bridgeName);
  try {
    const response = await fetchWithTimeout(audioUrl, { method: "HEAD" }, 4000);
    return response.ok;
  } catch (error) {
    console.warn("Local bridge audio probe failed.", error);
    return false;
  }
}

async function speakWithLocalBridgeAudio(button, bridgeName) {
  if (!bridgeName) return false;
  stopSpeech();
  const audioUrl = LOCAL_ASSET_FILES.bridgeAudio(bridgeName);
  const audio = new Audio(audioUrl);
  audio.preload = "auto";
  state.speechButton = button;
  state.speechMode = "local";
  state.speechAudio = audio;
  state.speechAudioUrl = audioUrl;
  setSpeechButtonState(button, true);
  return new Promise((resolve, reject) => {
    let settled = false;
    const finalizeResolve = () => {
      if (settled) return;
      settled = true;
      resolve(true);
    };
    const finalizeReject = (error) => {
      if (settled) return;
      settled = true;
      reject(error instanceof Error ? error : new Error(String(error || "Local audio playback failed")));
    };
    audio.onended = () => {
      if (state.speechAudio !== audio) return;
      resetSpeechState();
    };
    audio.onerror = () => {
      if (state.speechAudio !== audio) return;
      stopSpeech();
      finalizeReject(new Error("Local bridge audio error"));
    };
    audio.onplay = () => finalizeResolve();
    audio.play().catch((error) => {
      stopSpeech();
      finalizeReject(error);
    });
  });
}

function uint8ToBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function utf8ToBase64(text) {
  return uint8ToBase64(new TextEncoder().encode(String(text || "")));
}

async function hmacSha256Base64(secret, text) {
  const keyData = new TextEncoder().encode(secret);
  const messageData = new TextEncoder().encode(text);
  const cryptoKey = await crypto.subtle.importKey(
    "raw",
    keyData,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", cryptoKey, messageData);
  return uint8ToBase64(new Uint8Array(signature));
}

async function buildXfyunTtsUrl(ttsConfig) {
  const host = String(XFYUN_TTS_CONFIG.host || "tts-api.xfyun.cn").trim();
  const path = String(XFYUN_TTS_CONFIG.path || "/v2/tts").trim();
  const date = new Date().toUTCString();
  const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${path} HTTP/1.1`;
  const signatureSha = await hmacSha256Base64(String(ttsConfig?.apiSecret || "").trim(), signatureOrigin);
  const authorizationOrigin = `api_key="${String(ttsConfig?.apiKey || "").trim()}", algorithm="hmac-sha256", headers="host date request-line", signature="${signatureSha}"`;
  const authorization = btoa(authorizationOrigin);
  return `wss://${host}${path}?authorization=${encodeURIComponent(authorization)}&date=${encodeURIComponent(date)}&host=${encodeURIComponent(host)}`;
}

function buildXfyunTtsPayload(text, ttsConfig) {
  const aue = String(XFYUN_TTS_CONFIG.audioEncoding || "lame").trim() || "lame";
  return {
    common: {
      app_id: String(ttsConfig?.appId || "").trim(),
    },
    business: {
      aue,
      ...(aue === "lame" ? { sfl: 1 } : {}),
      vcn: String(XFYUN_TTS_CONFIG.voiceName || "xiaoyan").trim() || "xiaoyan",
      speed: Number(XFYUN_TTS_CONFIG.speed || 50),
      volume: Number(XFYUN_TTS_CONFIG.volume || 50),
      pitch: Number(XFYUN_TTS_CONFIG.pitch || 50),
      auf: "audio/L16;rate=16000",
      tte: "UTF8",
    },
    data: {
      status: 2,
      text: utf8ToBase64(text),
    },
  };
}

function getXfyunAudioMimeType() {
  const aue = String(XFYUN_TTS_CONFIG.audioEncoding || "lame").trim().toLowerCase();
  if (aue === "lame") return "audio/mpeg";
  if (aue === "speex-wb" || aue === "speex") return "audio/webm";
  return "audio/wav";
}

async function openXfyunTtsSocket(ttsConfig, timeoutMs = XFYUN_TTS_CONFIG.connectTimeoutMs || 3500) {
  if (!window.crypto?.subtle) {
    throw new Error("WebCrypto unavailable");
  }
  const url = await buildXfyunTtsUrl(ttsConfig);
  return new Promise((resolve, reject) => {
    let settled = false;
    const socket = new WebSocket(url);
    const timer = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      try { socket.close(); } catch (error) { console.warn(error); }
      reject(new Error("XFYUN socket timeout"));
    }, timeoutMs);
    const cleanup = () => window.clearTimeout(timer);
    socket.onopen = () => {
      if (settled) return;
      settled = true;
      cleanup();
      resolve(socket);
    };
    socket.onerror = () => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error("XFYUN socket error"));
    };
    socket.onclose = (event) => {
      if (settled) return;
      settled = true;
      cleanup();
      reject(new Error(`XFYUN socket closed: ${event.code}`));
    };
  });
}

async function resolveDetailSpeechAvailability(attemptQueue = []) {
  if (!hasConfiguredXfyunTts()) {
    return { mode: "native", reason: "unconfigured" };
  }
  if (!navigator.onLine) {
    return { mode: "native", reason: "offline" };
  }
  if (!window.crypto?.subtle) {
    return { mode: "native", reason: "service_unavailable" };
  }
  let lastError = null;
  for (const attempt of attemptQueue) {
    try {
      const socket = await openXfyunTtsSocket(attempt);
      try {
        socket.close(1000, "probe");
      } catch (error) {
        console.warn(error);
      }
      return { mode: "xfyun", reason: "ready", attempt };
    } catch (error) {
      lastError = error;
      console.warn(`XFYUN TTS probe failed on key ${attempt.attemptIndex + 1}/${attempt.attemptCount}.`, error);
    }
  }
  return { mode: "native", reason: "service_unavailable", error: lastError };
}

async function speakWithXfyunTts(button, text, ttsConfig) {
  stopSpeech();
  const chunks = [];
  const socket = await openXfyunTtsSocket(ttsConfig, XFYUN_TTS_CONFIG.requestTimeoutMs || 20000);
  state.speechButton = button;
  state.speechMode = "xfyun";
  state.speechSocket = socket;
  setSpeechButtonState(button, true);
  return new Promise((resolve, reject) => {
    let settled = false;
    let playbackStarted = false;
    const timer = window.setTimeout(() => {
      if (settled) return;
      settled = true;
      closeSpeechSocket();
      reject(new Error("XFYUN speech request timeout"));
    }, XFYUN_TTS_CONFIG.requestTimeoutMs || 20000);
    const finalizeReject = (error) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      closeSpeechSocket();
      reject(error instanceof Error ? error : new Error(String(error || "XFYUN speech failed")));
    };
    const finalizeResolve = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve(true);
    };
    socket.onmessage = async (event) => {
      try {
        const payload = JSON.parse(event.data);
        if (payload.code !== 0) {
          finalizeReject(new Error(`XFYUN error: ${payload.code} ${payload.message || ""}`.trim()));
          return;
        }
        if (payload.data?.audio) {
          const binary = atob(payload.data.audio);
          const chunk = new Uint8Array(binary.length);
          for (let i = 0; i < binary.length; i += 1) {
            chunk[i] = binary.charCodeAt(i);
          }
          chunks.push(chunk);
        }
        if (payload.data?.status === 2 && !playbackStarted) {
          playbackStarted = true;
          closeSpeechSocket();
          const blob = new Blob(chunks, { type: getXfyunAudioMimeType() });
          const audioUrl = URL.createObjectURL(blob);
          const audio = new Audio(audioUrl);
          state.speechAudioUrl = audioUrl;
          state.speechAudio = audio;
          audio.onended = () => {
            if (state.speechAudio !== audio) return;
            resetSpeechState();
          };
          audio.onerror = async () => {
            if (state.speechAudio !== audio) return;
            stopSpeech();
            await tryFallbackToNative(button, text, "playback_failed");
          };
          await audio.play();
          finalizeResolve();
        }
      } catch (error) {
        finalizeReject(error);
      }
    };
    socket.onerror = () => finalizeReject(new Error("XFYUN socket error"));
    socket.onclose = (event) => {
      if (playbackStarted || settled) return;
      finalizeReject(new Error(`XFYUN socket closed: ${event.code}`));
    };
    try {
      socket.send(JSON.stringify(buildXfyunTtsPayload(text, ttsConfig)));
    } catch (error) {
      finalizeReject(error);
    }
  });
}

async function tryFallbackToNative(button, text, reason) {
  if (speakWithNativeTts(button, text)) {
    updateSpeechStatus(button, { preferOnline: true }, "当前使用浏览器本地语音朗读。", "native");
    showDetailSpeechFallbackAlert(reason);
    return true;
  }
  updateSpeechStatus(button, { preferOnline: true }, "当前浏览器不支持本地语音朗读。", "error");
  showDetailSpeechFallbackAlert("unsupported");
  return false;
}

async function tryFallbackToLocalAudio(button, text, bridgeName, reason, options = {}) {
  updateSpeechStatus(button, options, getXfyunStatusMessage("local_checking"), "checking");
  if (!await canUseLocalBridgeAudio(bridgeName)) {
    return tryFallbackToNative(button, text, "local_audio_failed");
  }
  try {
    await speakWithLocalBridgeAudio(button, bridgeName);
    updateSpeechStatus(button, options, getXfyunStatusMessage("local"), "local");
    showDetailSpeechFallbackAlert(reason);
    return true;
  } catch (error) {
    console.warn("Local bridge audio playback failed, fallback to native speech.", error);
    return tryFallbackToNative(button, text, "local_audio_failed");
  }
}

function setupSpeech(buttonId, getText, options = {}) {
  const button = qs(`#${buttonId}`);
  if (!button) return;
  ensureSpeechStatusNode(button, options);
  button.addEventListener("click", async () => {
    const text = getText();
    if (isSpeechActiveForButton(button)) {
      stopSpeech();
      updateSpeechStatus(button, options, "已停止当前语音播报。", "idle");
      return;
    }
    if (!options.preferOnline) {
      if (!speakWithNativeTts(button, text)) {
        alert("当前浏览器不支持语音朗读。");
      } else {
        updateSpeechStatus(button, options, "当前使用浏览器本地语音朗读。", "native");
      }
      return;
    }
    const attemptQueue = buildXfyunAttemptQueue();
    updateSpeechStatus(button, options, getXfyunStatusMessage("checking", attemptQueue[0]), "checking");
    const availability = await resolveDetailSpeechAvailability(attemptQueue);
    if (availability.mode !== "xfyun") {
      await tryFallbackToLocalAudio(button, text, options.getLocalAudioName?.(), availability.reason, options);
      return;
    }
    const readyIndex = availability.attempt?.attemptIndex || 0;
    for (let index = readyIndex; index < attemptQueue.length; index += 1) {
      const attempt = attemptQueue[index];
      try {
        updateSpeechStatus(button, options, getXfyunStatusMessage("online", attempt), "online");
        await speakWithXfyunTts(button, text, attempt);
        return;
      } catch (error) {
        console.warn(`XFYUN TTS playback failed on key ${attempt.attemptIndex + 1}/${attempt.attemptCount}.`, error);
        if (index < attemptQueue.length - 1) {
          updateSpeechStatus(button, options, getXfyunStatusMessage("checking", attemptQueue[index + 1]), "checking");
          continue;
        }
      }
    }
    await tryFallbackToLocalAudio(button, text, options.getLocalAudioName?.(), "playback_failed", options);
  });
}

function buildCompareOptions(data) {
  return data.unified.bridges
    .slice()
    .sort((a, b) => (b.importance || 0) - (a.importance || 0))
    .map((bridge) => `<option value="${bridge.name}">${bridge.name}</option>`)
    .join("");
}

function setupBridgeComparer(data) {
  const selectA = qs("#compare-a");
  const selectB = qs("#compare-b");
  const output = qs("#compare-result");
  if (!selectA || !selectB || !output) return;

  const options = buildCompareOptions(data);
  selectA.innerHTML = options;
  selectB.innerHTML = options;
  selectA.value = "赵州桥";
  selectB.value = "洛阳桥";

  const redraw = () => {
    const bridgeA = resolveBridgeByName(data, selectA.value);
    const bridgeB = resolveBridgeByName(data, selectB.value);
    if (!bridgeA || !bridgeB) return;
    output.innerHTML = `
      <div class="mini-card">
        <h4>对比摘要</h4>
        <p>${bridgeA.name} 更偏向 ${bridgeA.category || "综合"} 技术代表，${bridgeB.name} 则更突出 ${bridgeB.type || bridgeB.category || "桥型"} 特征。</p>
      </div>
      <div class="mini-card">
        <h4>核心差异</h4>
        <p>年代：${bridgeA.buildYear?.display || bridgeA.era} / ${bridgeB.buildYear?.display || bridgeB.era}</p>
        <p>跨度：${fmtNum(getBridgeSpan(bridgeA))}m / ${fmtNum(getBridgeSpan(bridgeB))}m</p>
        <p>保护：${bridgeA.protection?.level || "未标注"} / ${bridgeB.protection?.level || "未标注"}</p>
      </div>
    `;
    initChart("compare-chart", {
      legend: { top: 0, textStyle: { color: "#dceeff" } },
      radar: {
        indicator: [
          { name: "年代", max: 100 },
          { name: "規模", max: 100 },
          { name: "技术", max: 100 },
          { name: "文化", max: 100 },
          { name: "保护", max: 100 },
        ],
        splitArea: { areaStyle: { color: ["rgba(255,255,255,0.02)", "rgba(193,154,83,0.08)"] } },
        axisLine: { lineStyle: { color: "rgba(255,255,255,0.18)" } },
        splitLine: { lineStyle: { color: "rgba(255,255,255,0.12)" } },
      },
      tooltip: {},
      series: [{
        type: "radar",
        data: [
          { value: getBridgeRadar(bridgeA), name: bridgeA.name, areaStyle: { color: "rgba(138,48,38,0.24)" } },
          { value: getBridgeRadar(bridgeB), name: bridgeB.name, areaStyle: { color: "rgba(111,89,65,0.2)" } },
        ],
      }],
    });
  };

  selectA.addEventListener("change", redraw);
  selectB.addEventListener("change", redraw);
  redraw();
}

function answerQuestion(query, data) {
  const bridges = data.unified.bridges;
  const lower = query.replace(/\s+/g, "");

  if (/最早|最古老/.test(lower)) {
    const earliest = bridges.slice().sort((a, b) => (getBridgeStartYear(a) ?? 99999) - (getBridgeStartYear(b) ?? 99999))[0];
    return `${earliest.name} 可视为当前数据集中最早的一批古桥，年代为 ${earliest.buildYear?.display || earliest.era}。`;
  }
  if (/最长|最長/.test(lower)) {
    const longest = bridges.slice().sort((a, b) => (getBridgeLength(b) ?? 0) - (getBridgeLength(a) ?? 0))[0];
    return `${longest.name} 在数据中拥有最长桥体，长度约 ${fmtNum(getBridgeLength(longest))} 米。`;
  }
  if (/世界遗产/.test(lower)) {
    const list = bridges.filter((item) => item.protection?.isWorldHeritage).map((item) => item.name);
    return `数据集中标注为世界遗产的古桥包括：${list.join("、")}。`;
  }
  if (/修缮|修繕|维修|維修/.test(lower) && /最多/.test(lower)) {
    const items = toArray(data.preservation.bridges).map((item) => ({
      ...item,
      score: typeof item.renovationCount === "number" ? item.renovationCount : String(item.renovationCount).includes("多次") ? 10 : 0,
    }));
    items.sort((a, b) => b.score - a.score);
    const top = items[0];
    return `${top.name} 在修缮数据中最为频繁，记录显示为「${top.renovationCount}」。`;
  }
  if (/保护原则/.test(lower)) {
    return `保护研究资料提到的核心原则包括：${toArray(data.preservation.protectionPrinciples).join("、")}。`;
  }

  const hit = bridges.find((bridge) => lower.includes(bridge.name));
  if (hit) {
    const innovations = toArray(hit.technology?.innovations).map((item) => item.name).join("、");
    return `${getBridgeSummary(hit)}${innovations ? `创新技术有：${innovations}。` : ""}`;
  }

  return "你可以试着问：最早的桥是哪座、最长的桥是哪座、哪些桥是世界遗产、赵州桥有什么创新、保护原则有哪些。";
}

function setupQA(data) {
  const input = qs("#qa-input");
  const button = qs("#qa-submit");
  const answer = qs("#qa-answer");
  if (!input || !button || !answer) return;
  const run = () => {
    const query = input.value.trim();
    if (!query) return;
    answer.innerHTML = `<div class="list-item"><h4>知識問答回覆</h4><p>${answerQuestion(query, data)}</p></div>`;
  };
  button.addEventListener("click", run);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") run();
  });
}

function renderBridgeList(targetId, bridges, descriptionBuilder) {
  const wrap = qs(`#${targetId}`);
  if (!wrap) return;
  wrap.innerHTML = bridges.map((bridge) => `
    <a class="list-item" href="${bridge.detailLink}">
      <h4>${bridge.name}</h4>
      <p>${descriptionBuilder(bridge)}</p>
    </a>
  `).join("");
}

function renderRows(targetId, rows) {
  const wrap = qs(`#${targetId}`);
  if (!wrap) return;
  wrap.innerHTML = rows.map((row) => `
    <div class="row">
      <div class="key">${row.key}</div>
      <div class="value">${row.value}</div>
    </div>
  `).join("");
}

function setText(id, value) {
  const el = qs(`#${id}`);
  if (el) el.textContent = value;
}

const HOME_ANGLES = [
  { key: "time", icon: "◷", title: "时间角度", subtitle: "按朝代排序，滑动刷新主流桥型、代表桥梁与技术突破。" },
  { key: "space", icon: "⌖", title: "空间角度", subtitle: "地域、水系、易得材料与桥型相互牵引，形成空间网络。" },
  { key: "type", icon: "⌁", title: "桥型角度", subtitle: "从外观名称进入工艺、结构与交通需求，展示桥型如何延续。" },
  { key: "culture", icon: "※", title: "人文文化", subtitle: "连接建造者、历史用途、事件、诗文传说与文化传承。" },
  { key: "preservation", icon: "⌂", title: "保护修缮", subtitle: "把留存状态、修缮记录、现状风险与数字保护方式串联起来。" },
];

const CATEGORY_ICONS = {
  拱桥: "⌒",
  梁桥: "═",
  索桥: "╱",
  浮桥: "▱",
  廊桥: "▤",
  其他: "◇",
};

const PERIOD_PATTERNS = [
  { name: "先秦时期", test: /先秦|夏|商|周|春秋|战国|秦以前/, min: -3000, max: -221 },
  { name: "秦汉时期", test: /秦汉|秦代|汉代|西汉|东汉/, min: -221, max: 220 },
  { name: "魏晋南北朝", test: /魏晋|晋|三国|南北朝/, min: 220, max: 589 },
  { name: "隋唐时期", test: /隋|唐|隋唐/, min: 581, max: 907 },
  { name: "宋元时期", test: /宋|北宋|南宋|元|宋元/, min: 960, max: 1368 },
  { name: "明清时期", test: /明|清|明清/, min: 1368, max: 1911 },
];

const TIME_ANGLE_MAX_YEAR = 1911;

function countBy(items, getter) {
  return items.reduce((acc, item) => {
    const key = getter(item) || "未标注";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
}

function topEntries(map, limit = 8) {
  return Object.entries(map || {}).sort((a, b) => b[1] - a[1]).slice(0, limit);
}

function getCategoryIcon(category) {
  return CATEGORY_ICONS[category] || CATEGORY_ICONS.其他;
}

function getBridgeMaterialLabel(bridge) {
  const values = Object.values(bridge?.materials || {}).filter(Boolean).join(" ");
  if (/木|杉|松|柏|楠/.test(values) || /木/.test(bridge?.type || "")) return "木材";
  if (/铁|索|链/.test(values) || /索/.test(bridge?.category || "")) return "铁索";
  if (/船|浮/.test(values) || /浮/.test(bridge?.category || "")) return "舟船";
  if (/石|花岗岩|青石|砂岩/.test(values) || /石/.test(bridge?.type || "")) return "石材";
  return "因地取材";
}

function bridgeMatchesPeriod(bridge, period) {
  const text = `${bridge.era || ""} ${bridge.buildYear?.display || ""} ${bridge.type || ""}`;
  const matcher = PERIOD_PATTERNS.find((item) => item.name === period.period) || PERIOD_PATTERNS.find((item) => period.period.includes(item.name.slice(0, 2)));
  if (!matcher) return false;
  if (matcher.test.test(text)) return true;
  const year = getBridgeStartYear(bridge);
  return year !== null && year >= matcher.min && year <= matcher.max;
}

function getPeriodBridges(data, period) {
  return data.unified.bridges
    .filter((bridge) => bridgeMatchesPeriod(bridge, period))
    .sort((a, b) => (b.importance || 0) - (a.importance || 0));
}

function getDominantCategory(bridges) {
  const [top] = topEntries(countBy(bridges, (bridge) => bridge.category || bridge.type), 1);
  return top ? { name: top[0], value: top[1], icon: getCategoryIcon(top[0]) } : { name: "资料不足", value: 0, icon: "◇" };
}

function getTimelinePeriods(data) {
  return toArray(data.timeline.timeline).map((period, index) => ({
    ...period,
    order: index,
    bridges: getPeriodBridges(data, period),
  }));
}

function createBridgeCard(bridge, extra = "") {
  return `
    <a class="angle-mini-card" href="${bridge.detailLink}">
      <span class="angle-card-icon">${getCategoryIcon(bridge.category)}</span>
      <strong>${bridge.name}</strong>
      <small>${bridge.era || bridge.buildYear?.display || "年代未详"} · ${bridge.category || bridge.type || "古桥"}</small>
      ${extra ? `<p>${extra}</p>` : ""}
    </a>
  `;
}

function renderAngleStats(data) {
  const wrap = qs("#angle-stats");
  if (!wrap) return;
  const bridges = data.unified.bridges;
  const stats = data.unified.statistics || {};
  const techTotal = bridges.reduce((sum, bridge) => sum + getInnovationCount(bridge), 0);
  const cultureTotal = bridges.reduce((sum, bridge) => sum + getCultureCount(bridge), 0);
  const cards = [
    { icon: "◇", label: "桥梁样本", value: fmtNum(stats.totalBridges || bridges.length), sub: "统一数据源" },
    { icon: "◷", label: "朝代跨度", value: fmtNum(Object.keys(stats.byEra || {}).length), sub: "按时间排序" },
    { icon: "⌖", label: "覆盖省份", value: fmtNum(Object.keys(stats.byProvince || {}).length), sub: "地域与水系" },
    { icon: "⌁", label: "桥型类别", value: fmtNum(Object.keys(stats.byCategory || {}).length), sub: "结构谱系" },
    { icon: "⚙", label: "技术线索", value: fmtNum(techTotal), sub: "创新与工艺" },
    { icon: "※", label: "文化线索", value: fmtNum(cultureTotal), sub: "诗文与传说" },
  ];
  wrap.innerHTML = cards.map((card) => `
    <article class="angle-stat-card">
      <span>${card.icon}</span>
      <div>
        <small>${card.label}</small>
        <strong>${card.value}</strong>
        <em>${card.sub}</em>
      </div>
    </article>
  `).join("");
}

function setAngleCopy(angle) {
  setText("angle-title", angle.title);
  setText("angle-subtitle", angle.subtitle);
}

function clearHomeAngleTimer() {
  if (state.homeAngleTimer) {
    window.clearInterval(state.homeAngleTimer);
    state.homeAngleTimer = null;
  }
}

function formatYearLabel(year) {
  const value = Math.round(Number(year) || 0);
  return value < 0 ? `公元前${Math.abs(value)}年` : `${value}年`;
}

function parseTimelineEraRange(eraText) {
  const text = String(eraText || "");
  const years = Array.from(text.matchAll(/(?:公元)?(前)?\s*(\d+)/g))
    .map((match) => Number(match[2]) * (match[1] ? -1 : 1));
  if (!years.length) return null;
  const range = years.length >= 2 ? years.slice(0, 2) : [years[0], years[0]];
  return [Math.min(...range), Math.max(...range)];
}

function parseEventYear(event, fallbackRange) {
  const text = String(event?.year || "");
  const numericRange = parseTimelineEraRange(text);
  if (numericRange) return Math.round((numericRange[0] + numericRange[1]) / 2);
  if (fallbackRange) return Math.round((fallbackRange[0] + fallbackRange[1]) / 2);
  return null;
}

function getTimeYearRange(data, periods) {
  const bridgeYears = data.unified.bridges
    .map((bridge) => getBridgeStartYear(bridge))
    .filter((year) => year !== null && year <= TIME_ANGLE_MAX_YEAR);
  const periodYears = periods
    .flatMap((period) => parseTimelineEraRange(period.era) || [])
    .filter((year) => year <= TIME_ANGLE_MAX_YEAR);
  const years = [...bridgeYears, ...periodYears].filter((year) => Number.isFinite(year));
  return {
    min: Math.min(...years, -200),
    max: TIME_ANGLE_MAX_YEAR,
  };
}

function periodRangeIntersectsSelection(range, start, end) {
  if (!range) return false;
  if (start === end) return range[0] <= start && range[1] >= end;
  return range[1] > start && range[0] < end;
}

function renderTimeAngle(data) {
  disposeBridgeType3D();
  const stage = qs("#angle-stage");
  const periods = getTimelinePeriods(data);
  if (!stage || !periods.length) return;
  const periodRanges = periods.map((period) => parseTimelineEraRange(period.era));
  const { min: minYear, max: maxYear } = getTimeYearRange(data, periods);
  const defaultStart = minYear;
  const defaultEnd = maxYear;
  stage.innerHTML = `
    <div class="time-angle-grid">
      <section class="time-control-panel">
        <span class="angle-chip">◷ 年份区间解读</span>
        <div id="time-era-panel" class="time-era-panel"></div>
      </section>
      <section class="angle-chart-panel">
        <div class="time-track-head">
          <span class="angle-chip">按年划分 · 图表内置时间轴</span>
          <div class="time-step-buttons">
            <button class="icon-btn" id="time-prev" aria-label="时间段向前移动">‹</button>
            <button class="icon-btn" id="time-play" aria-label="自动刷新">Ⅱ</button>
            <button class="icon-btn" id="time-next" aria-label="时间段向后移动">›</button>
          </div>
        </div>
        <div class="time-chart-shell">
          <div class="chart-year-controls">
            <strong id="year-range-label">${formatYearLabel(defaultStart)} - ${formatYearLabel(defaultEnd)}</strong>
            <div class="year-inputs">
              <label>起点 <input id="year-start-input" type="number" min="${minYear}" max="${maxYear}" value="${defaultStart}" /></label>
              <label>终点 <input id="year-end-input" type="number" min="${minYear}" max="${maxYear}" value="${defaultEnd}" /></label>
            </div>
          </div>
          <div id="time-bridge-chart" class="chart angle-chart time-chart"></div>
          <div class="time-chart-hint">时间轴覆盖 ${formatYearLabel(minYear)} 至 ${formatYearLabel(maxYear)}；依据原始年份密度折中采用每 100 年为单位，缺失区间按相邻记录与周期扰动估算补全。</div>
          <div class="dynasty-ticks">${periods
            .map((period, index) => ({ period, index }))
            .map(({ period, index }) => `<button class="dynasty-tick" data-era-index="${index}">${period.period}</button>`)
            .join("")}</div>
        </div>
      </section>
    </div>
  `;

  const panel = qs("#time-era-panel");
  const playButton = qs("#time-play");
  const startInput = qs("#year-start-input");
  const endInput = qs("#year-end-input");
  const rangeLabel = qs("#year-range-label");
  let playing = false;
  let currentStart = defaultStart;
  let currentEnd = defaultEnd;

  const getSelectedPeriods = (start, end) => periods.filter((period, index) => {
    const range = periodRanges[index];
    return periodRangeIntersectsSelection(range, start, end);
  });

  const getSelectedEvents = (selectedPeriods, start, end) => selectedPeriods.flatMap((period) => {
    const fallbackRange = parseTimelineEraRange(period.era);
    return toArray(period.events).map((event) => ({
      ...event,
      period: period.period,
      numericYear: parseEventYear(event, fallbackRange),
    }));
  }).filter((event) => event.numericYear === null || (event.numericYear >= start && event.numericYear <= end));

  const buildAnnualBridgeSeries = () => {
    const binSize = 100;
    const bridgeCountByYear = {};
    data.unified.bridges.forEach((bridge) => {
      const year = getBridgeStartYear(bridge);
      if (year === null || year < minYear || year > maxYear) return;
      const binYear = minYear + Math.floor((year - minYear) / binSize) * binSize;
      bridgeCountByYear[binYear] = (bridgeCountByYear[binYear] || 0) + 1;
    });
    const observedYears = Object.keys(bridgeCountByYear).map(Number).sort((a, b) => a - b);
    const getEstimatedCount = (year) => {
      if (bridgeCountByYear[year]) return bridgeCountByYear[year];
      const prevYear = observedYears.filter((item) => item < year).pop();
      const nextYear = observedYears.find((item) => item > year);
      const prevValue = prevYear === undefined ? 0 : bridgeCountByYear[prevYear];
      const nextValue = nextYear === undefined ? prevValue : bridgeCountByYear[nextYear];
      const span = prevYear !== undefined && nextYear !== undefined ? Math.max(1, nextYear - prevYear) : 160;
      const ratio = prevYear !== undefined && nextYear !== undefined ? (year - prevYear) / span : 0.5;
      const trend = prevValue + (nextValue - prevValue) * ratio;
      const localInfluence = observedYears.reduce((sum, item) => {
        const distance = Math.abs(year - item);
        if (distance > 120) return sum;
        return sum + bridgeCountByYear[item] * Math.exp(-distance / 36);
      }, 0);
      const longWave = 0.9 * Math.sin((year - minYear) / 46);
      const midWave = 0.55 * Math.sin((year - minYear) / 17 + 1.4);
      const shortWave = 0.35 * Math.sin((year - minYear) / 7 + 0.6);
      const value = trend * 0.36 + localInfluence * 0.72 + 1.2 + longWave + midWave + shortWave;
      return Math.max(0, Math.round(value));
    };
    const series = [];
    for (let year = minYear; year <= maxYear; year += binSize) {
      const observed = Boolean(bridgeCountByYear[year]);
      series.push({
        value: [year, observed ? bridgeCountByYear[year] : getEstimatedCount(year)],
        sourceStatus: observed ? "原始记录" : "趋势估算",
        periodLabel: `${formatYearLabel(year)}-${formatYearLabel(Math.min(year + binSize - 1, maxYear))}`,
      });
    }
    return series;
  };

  const syncRangeUi = () => {
    startInput.value = currentStart;
    endInput.value = currentEnd;
    rangeLabel.textContent = `${formatYearLabel(currentStart)} - ${formatYearLabel(currentEnd)}`;
  };

  const updateInfo = (start, end) => {
    const nextStart = Math.max(minYear, Math.min(maxYear, Math.round(Number(start))));
    const nextEnd = Math.max(minYear, Math.min(maxYear, Math.round(Number(end))));
    currentStart = Math.min(nextStart, nextEnd);
    currentEnd = Math.max(nextStart, nextEnd);
    const selectedPeriods = getSelectedPeriods(currentStart, currentEnd);
    const bridges = data.unified.bridges
      .filter((bridge) => {
        const year = getBridgeStartYear(bridge);
        return year !== null && year >= currentStart && year <= currentEnd;
      })
      .sort((a, b) => (b.importance || 0) - (a.importance || 0));
    const dominant = getDominantCategory(bridges);
    const events = getSelectedEvents(selectedPeriods, currentStart, currentEnd);
    const representatives = bridges.slice(0, 2);
    const selectedPeriodNames = selectedPeriods.map((period) => period.period).join("、") || "未匹配到朝代段";
    const eventCards = events.slice(0, 3).map((event) => `
      <article class="time-event-card">
        <span>${event.year || formatYearLabel(event.numericYear)} · ${event.period || ""}</span>
        <strong>${event.title}</strong>
        <p>${event.significance || event.description || "技术节点"}</p>
      </article>
    `).join("");
    syncRangeUi();
    panel.innerHTML = `
      <div class="time-era-title">
        <span>年</span>
        <div>
          <h4>${formatYearLabel(currentStart)} - ${formatYearLabel(currentEnd)}</h4>
          <p>${selectedPeriodNames}</p>
        </div>
      </div>
      <div class="time-refresh-cards">
        <article><small>主流桥型</small><strong>${dominant.icon} ${dominant.name}</strong><em>${dominant.value ? `${dominant.value} 座样本` : "以史料事件为主"}</em></article>
        <article><small>代表桥梁</small><strong>${representatives.map((bridge) => bridge.name).join("、") || "暂未匹配"}</strong><em>随图表时间轴实时刷新</em></article>
        <article><small>技术突破</small><strong>${events[0]?.title || "桥梁技术积累"}</strong><em>${events[0]?.significance || "随年份区间更新"}</em></article>
      </div>
      <div class="time-card-columns">
        <div>
          <h5>代表桥梁</h5>
          <div class="angle-mini-grid">${representatives.map((bridge) => createBridgeCard(bridge, bridge.historicalValue || "")).join("") || `<div class="empty">此时间段以技术史事件为主，暂无匹配桥梁样本。</div>`}</div>
        </div>
        <div>
          <h5>突破事件</h5>
          <div class="time-events">${eventCards}</div>
        </div>
      </div>
    `;
    qsa(".dynasty-tick").forEach((tick) => {
      const range = periodRanges[Number(tick.dataset.eraIndex)];
      tick.classList.toggle("active", periodRangeIntersectsSelection(range, currentStart, currentEnd));
    });
  };

  const readZoomRange = (chart) => {
    const zoom = chart.getOption().dataZoom?.[0] || {};
    let start = zoom.startValue;
    let end = zoom.endValue;
    if (start === undefined || end === undefined) {
      start = minYear + ((zoom.start || 0) / 100) * (maxYear - minYear);
      end = minYear + ((zoom.end ?? 100) / 100) * (maxYear - minYear);
    }
    return [start, end];
  };

  const setRange = (start, end, syncChart = true) => {
    updateInfo(start, end);
    if (!syncChart || typeof echarts === "undefined") return;
    const chart = echarts.getInstanceByDom(qs("#time-bridge-chart"));
    if (!chart) return;
    chart.setOption({
      dataZoom: [
        { startValue: currentStart, endValue: currentEnd },
        { startValue: currentStart, endValue: currentEnd },
      ],
    });
  };

  const annualBridgeSeries = buildAnnualBridgeSeries();
  const chart = initChart("time-bridge-chart", {
    color: [WOOD_CHART_COLORS.cinnabar],
    tooltip: {
      trigger: "axis",
      formatter(params) {
        const year = params[0]?.value?.[0] ?? params[0]?.axisValue;
        const point = params[0]?.data || {};
        const value = Array.isArray(params[0]?.value) ? params[0].value[1] : params[0]?.value;
        return `${point.periodLabel || formatYearLabel(year)}<br/>${params[0]?.marker || ""}新建桥梁总数: ${value || 0}<br/>来源: ${point.sourceStatus || "未知"}`;
      },
    },
    grid: { left: 42, right: 18, top: 28, bottom: 118 },
    dataZoom: [
      {
        type: "slider",
        show: true,
        realtime: true,
        brushSelect: true,
        startValue: defaultStart,
        endValue: defaultEnd,
        bottom: 42,
        height: 34,
        borderColor: WOOD_CHART_COLORS.softBrown,
        fillerColor: WOOD_CHART_COLORS.softGold,
        backgroundColor: "rgba(111,89,65,0.08)",
        dataBackground: {
          lineStyle: { color: "rgba(111,89,65,0.52)" },
          areaStyle: { color: "rgba(193,154,83,0.14)" },
        },
        selectedDataBackground: {
          lineStyle: { color: WOOD_CHART_COLORS.cinnabar },
          areaStyle: { color: WOOD_CHART_COLORS.softRed },
        },
        handleSize: "118%",
        handleStyle: { color: "#fff8e3", borderColor: WOOD_CHART_COLORS.gilt, borderWidth: 2 },
        moveHandleStyle: { color: "rgba(95,127,102,0.56)" },
        textStyle: { color: document.body.dataset.page === "home" ? WOOD_CHART_COLORS.text : "#b9d7ef" },
      },
      {
        type: "inside",
        realtime: true,
        startValue: defaultStart,
        endValue: defaultEnd,
      },
    ],
    toolbox: {
      right: 10,
      top: 0,
      iconStyle: { borderColor: document.body.dataset.page === "home" ? WOOD_CHART_COLORS.woodBrown : "#b9d7ef" },
      emphasis: { iconStyle: { borderColor: WOOD_CHART_COLORS.gilt } },
      feature: {
        dataZoom: { title: { zoom: "区域缩放", back: "撤销缩放" } },
        restore: { title: "还原" },
      },
    },
    xAxis: {
      type: "value",
      min: minYear,
      max: maxYear,
      axisLabel: { color: document.body.dataset.page === "home" ? WOOD_CHART_COLORS.text : "#b9d7ef", formatter: (value) => formatYearLabel(Math.round(value)).replace("年", ""), rotate: 18 },
      splitLine: { lineStyle: { color: document.body.dataset.page === "home" ? WOOD_CHART_COLORS.grid : "rgba(255,255,255,0.06)" } },
    },
    yAxis: {
      type: "value",
      name: "座",
      axisLabel: { color: document.body.dataset.page === "home" ? WOOD_CHART_COLORS.text : "#b9d7ef" },
      nameTextStyle: { color: document.body.dataset.page === "home" ? WOOD_CHART_COLORS.text : "#b9d7ef" },
      splitLine: { lineStyle: { color: document.body.dataset.page === "home" ? WOOD_CHART_COLORS.grid : "rgba(255,255,255,0.08)" } },
    },
    series: [
      {
        name: "新建桥梁总数",
        type: "line",
        data: annualBridgeSeries,
        smooth: true,
        showSymbol: false,
        symbol: "none",
        lineStyle: { color: WOOD_CHART_COLORS.cinnabar, width: 3 },
        areaStyle: { color: WOOD_CHART_COLORS.softRed },
        emphasis: { focus: "series" },
      },
    ],
  });
  if (chart) {
    chart.off("datazoom");
    chart.on("datazoom", () => {
      const [start, end] = readZoomRange(chart);
      updateInfo(start, end);
    });
    chart.off("restore");
    chart.on("restore", () => updateInfo(defaultStart, defaultEnd));
  }

  const shiftRange = (direction) => {
    const width = currentEnd - currentStart || Math.round((maxYear - minYear) / 8);
    const step = Math.max(1, Math.round(width / 4));
    const nextStart = Math.max(minYear, Math.min(maxYear - width, currentStart + direction * step));
    setRange(nextStart, nextStart + width);
  };

  qsa(".dynasty-tick").forEach((tick) => tick.addEventListener("click", () => {
    playing = false;
    playButton.textContent = "▶";
    const range = periodRanges[Number(tick.dataset.eraIndex)];
    if (range) setRange(range[0], range[1]);
  }));
  [startInput, endInput].forEach((input) => input.addEventListener("change", () => {
    playing = false;
    playButton.textContent = "▶";
    setRange(startInput.value, endInput.value);
  }));
  qs("#time-prev").addEventListener("click", () => shiftRange(-1));
  qs("#time-next").addEventListener("click", () => shiftRange(1));
  playButton.addEventListener("click", () => {
    playing = !playing;
    playButton.textContent = playing ? "Ⅱ" : "▶";
    if (playing && currentStart === minYear && currentEnd === maxYear) {
      const windowSize = Math.round((maxYear - minYear) / 6);
      setRange(minYear, minYear + windowSize);
    }
  });

  updateInfo(defaultStart, defaultEnd);
  clearHomeAngleTimer();
  state.homeAngleTimer = window.setInterval(() => {
    if (!playing) return;
    const width = currentEnd - currentStart || Math.round((maxYear - minYear) / 8);
    if (currentEnd >= maxYear) setRange(minYear, Math.min(maxYear, minYear + width));
    else shiftRange(1);
  }, 2600);
}

function renderSpaceAngle(data) {
  disposeBridgeType3D();
  clearHomeAngleTimer();
  const stage = qs("#angle-stage");
  if (!stage) return;
  const bridges = data.unified.bridges;
  const provinceTop = topEntries(countBy(bridges, (bridge) => bridge.location?.province), 8);
  const riverTop = topEntries(countBy(bridges, (bridge) => bridge.location?.river), 6);
  const materialTop = topEntries(countBy(bridges, getBridgeMaterialLabel), 5);
  const categoryTop = topEntries(countBy(bridges, (bridge) => bridge.category), 6);
  stage.innerHTML = `
    <div class="space-angle-grid">
      <section class="space-map-panel">
        <div id="space-network-chart" class="chart angle-chart"></div>
      </section>
      <section class="space-link-panel">
        <span class="angle-chip">⌖ 地域 → 水系 → 材料 → 桥型</span>
        <div class="space-link-grid">
          <article><strong>地域集聚</strong>${provinceTop.map(([name, value]) => `<p><b>${name}</b><span>${value} 座</span></p>`).join("")}</article>
          <article><strong>水系触发</strong>${riverTop.map(([name, value]) => `<p><b>${name}</b><span>${value} 条线索</span></p>`).join("")}</article>
          <article><strong>易得材料</strong>${materialTop.map(([name, value]) => `<p><b>${name}</b><span>${value} 座</span></p>`).join("")}</article>
          <article><strong>因地成型</strong>${categoryTop.map(([name, value]) => `<p><b>${getCategoryIcon(name)} ${name}</b><span>${value} 座</span></p>`).join("")}</article>
        </div>
        <div class="space-legend">节点越大，说明该类数据越集中；连线表示地理环境对取材和桥型选择的影响。</div>
      </section>
    </div>
  `;

  const nodes = [
    { name: "中国古桥", category: 0, symbolSize: 68, value: bridges.length },
    ...provinceTop.map(([name, value]) => ({ name: `⌖ ${name}`, category: 1, symbolSize: 22 + value * 2, value })),
    ...riverTop.map(([name, value]) => ({ name: `≈ ${name}`, category: 2, symbolSize: 24 + value * 3, value })),
    ...materialTop.map(([name, value]) => ({ name: `▣ ${name}`, category: 3, symbolSize: 26 + value * 2, value })),
    ...categoryTop.map(([name, value]) => ({ name: `${getCategoryIcon(name)} ${name}`, category: 4, symbolSize: 28 + value * 2, value })),
  ];
  const links = [];
  provinceTop.forEach(([name]) => links.push({ source: "中国古桥", target: `⌖ ${name}` }));
  riverTop.forEach(([name], index) => links.push({ source: `⌖ ${provinceTop[index % provinceTop.length]?.[0]}`, target: `≈ ${name}` }));
  materialTop.forEach(([name], index) => links.push({ source: `≈ ${riverTop[index % riverTop.length]?.[0]}`, target: `▣ ${name}` }));
  categoryTop.forEach(([name], index) => links.push({ source: `▣ ${materialTop[index % materialTop.length]?.[0]}`, target: `${getCategoryIcon(name)} ${name}` }));

  initChart("space-network-chart", {
    color: WOOD_CHART_PALETTE,
    tooltip: { formatter: (params) => params.dataType === "edge" ? "空间影响路径" : `${params.name}<br/>数量：${params.data.value || ""}` },
    legend: { top: 0, textStyle: { color: WOOD_CHART_COLORS.text } },
    series: [{
      type: "graph",
      layout: "force",
      roam: true,
      categories: [{ name: "中心" }, { name: "地域" }, { name: "水系" }, { name: "材料" }, { name: "桥型" }],
      force: { repulsion: 210, edgeLength: 95 },
      label: { show: true, color: WOOD_CHART_COLORS.text, fontSize: 12 },
      lineStyle: { color: "source", opacity: 0.5, width: 1.8, curveness: 0.12 },
      data: nodes,
      links,
    }],
  });
}

function renderTypeAngle(data) {
  disposeBridgeType3D();
  clearHomeAngleTimer();
  const stage = qs("#angle-stage");
  if (!stage) return;
  let type3dRenderSeq = 0;
  const types = toArray(data.types.structureTypes);
  const typeVisuals = {
    "拱桥": { src: "assets/bridge-type-arch.png", alt: "拱桥图示" },
    "梁桥": { src: "assets/bridge-type-beam.jpg", alt: "梁桥图示" },
    "浮桥": { src: "assets/bridge-type-pontoon.png", alt: "浮桥图示" },
    "廊桥": { src: "assets/bridge-type-covered.png", alt: "廊桥图示" },
    "索桥": { src: "assets/bridge-type-suspension.png", alt: "索桥图示" },
  };
  stage.innerHTML = `
    <div class="type-angle-grid">
      <section class="type-selector">
        ${types.map((type, index) => `<button class="type-token ${index === 0 ? "active" : ""}" data-type-index="${index}"><span>${getCategoryIcon(type.name)}</span>${type.name}</button>`).join("")}
      </section>
      <section id="type-detail" class="type-detail-panel"></section>
      <section class="type-tree-panel">
        <div id="type-feature-tree" class="chart angle-chart"></div>
        <figure id="type-panel-visual" class="type-panel-visual" hidden></figure>
      </section>
    </div>
  `;

  const redraw = (index) => {
    const renderSeq = ++type3dRenderSeq;
    disposeBridgeType3D();
    const type = types[index];
    const detail = qs("#type-detail");
    qsa(".type-token").forEach((button) => button.classList.toggle("active", Number(button.dataset.typeIndex) === index));
    detail.innerHTML = `
      <div class="type-bridge-3d-wrap">
        <div class="type-bridge-3d" id="type-bridge-3d-host" role="img" aria-label="${type.name} 三維示意模型"></div>
        <p class="type-bridge-3d-hint">拖曳旋轉檢視 · 滾輪縮放</p>
      </div>
      <div class="type-copy">
        <span class="angle-chip">⌁ 外观名称 → 工艺 → 结构 → 交通需求</span>
        <h4>${type.name}</h4>
        <p>${type.description}</p>
        <p>${type.history}</p>
      </div>
      <div class="type-feature-list">
        ${toArray(type.technicalFeatures).map((item) => `<article><span>工</span><p>${item}</p></article>`).join("")}
      </div>
      <div class="type-representatives">
        ${toArray(type.representatives).map((item) => {
          const bridge = resolveBridgeByName(data, item.name);
          return bridge ? createBridgeCard(bridge, item.feature) : `<div class="angle-mini-card"><span class="angle-card-icon">${getCategoryIcon(type.name)}</span><strong>${item.name}</strong><small>${item.feature}</small></div>`;
        }).join("")}
      </div>
    `;

    initChart("type-feature-tree", {
      color: WOOD_CHART_PALETTE,
      tooltip: { trigger: "item" },
      series: [{
        type: "tree",
        roam: true,
        top: "6%",
        left: "10%",
        bottom: "6%",
        right: "20%",
        symbolSize: 12,
        itemStyle: { color: WOOD_CHART_COLORS.gilt, borderColor: WOOD_CHART_COLORS.cinnabar, borderWidth: 1.5 },
        label: { color: WOOD_CHART_COLORS.text, position: "left", verticalAlign: "middle", align: "right" },
        leaves: { label: { position: "right", align: "left" } },
        lineStyle: { color: "rgba(138,48,38,0.38)" },
        data: [{
          name: `${getCategoryIcon(type.name)} ${type.name}`,
          children: [
            { name: "工艺", children: toArray(type.technicalFeatures).slice(0, 4).map((item) => ({ name: item.split("：")[0] || item })) },
            { name: "代表桥梁", children: toArray(type.representatives).map((item) => ({ name: item.name })) },
            { name: "意义", children: [{ name: type.statistics?.nationalProtection || "类型传承" }] },
          ],
        }],
      }],
    });

    const visual = qs("#type-panel-visual");
    if (visual) {
      const visualData = typeVisuals[type.name];
      visual.hidden = !visualData;
      visual.innerHTML = visualData ? `<img src="${visualData.src}" alt="${visualData.alt}" />` : "";
    }

    const host = qs("#type-bridge-3d-host");
    if (host) {
      host.textContent = "三维模型加载中...";
      ensureBridge3DAssets().then((canRender3D) => {
        if (renderSeq !== type3dRenderSeq || !host.isConnected) return;
        host.replaceChildren();
        if (canRender3D && typeof window.initBridgeType3D === "function") {
          disposeBridgeType3D();
          state.type3dDispose = window.initBridgeType3D(host, type.name);
        } else {
          host.textContent = "三维模型暂未加载";
        }
      });
    }
  };

  qsa(".type-token").forEach((button) => button.addEventListener("click", () => redraw(Number(button.dataset.typeIndex))));
  redraw(0);
}

function renderCultureAngle(data) {
  disposeBridgeType3D();
  clearHomeAngleTimer();
  const stage = qs("#angle-stage");
  if (!stage) return;
  const poetryBridges = Object.values(data.poetry.bridges || {});
  const cultureStories = [...toArray(data.culture.historicalEvents), ...toArray(data.culture.folkLegends)];
  const quotes = poetryBridges.flatMap((item) => toArray(item.poems).slice(0, 1).map((poem) => ({ bridge: item.name, ...poem }))).slice(0, 5);
  const storyNodes = cultureStories.slice(0, 8);
  stage.innerHTML = `
    <div class="culture-angle-grid">
      <section class="culture-river">
        <span class="angle-chip">※ 建造者 → 历史用途 → 事件 → 诗词小说 → 文化传承</span>
        <div class="quote-stream">
          ${quotes.map((item) => `<blockquote><strong>${item.bridge} · ${item.title}</strong><p>${item.content}</p><cite>${item.author || "佚名"} · ${item.dynasty || "年代未详"}</cite></blockquote>`).join("")}
        </div>
      </section>
      <section class="culture-graph-panel">
        <div id="culture-link-chart" class="chart angle-chart"></div>
        <div class="culture-flow">
          <article><span>匠</span><strong>建造者</strong><p>李春、蔡襄、地方匠师与族群工艺共同塑造古桥。</p></article>
          <article><span>事</span><strong>历史用途</strong><p>交通、商贸、军事、礼仪与聚落生活让桥梁进入日常。</p></article>
          <article><span>文</span><strong>诗词传说</strong><p>${quotes.map((item) => item.title).join("、") || "诗文资料"}</p></article>
          <article><span>传</span><strong>文化意义</strong><p>从工程实体转化为地方记忆、文学意象和遗产身份。</p></article>
        </div>
      </section>
    </div>
  `;

  const nodes = [
    { name: "古桥文化", category: 0, symbolSize: 62 },
    ...poetryBridges.slice(0, 6).map((item) => ({ name: `桥 ${item.name}`, category: 1, symbolSize: 34 + toArray(item.poems).length * 4 })),
    ...quotes.map((item) => ({ name: `文 ${item.title}`, category: 2, symbolSize: 28 })),
    ...storyNodes.map((item) => ({ name: `事 ${item.name}`, category: 3, symbolSize: 30 })),
  ];
  const links = [];
  nodes.filter((item) => item.category === 1).forEach((node) => links.push({ source: "古桥文化", target: node.name }));
  quotes.forEach((quote) => links.push({ source: `桥 ${quote.bridge}`, target: `文 ${quote.title}` }));
  storyNodes.forEach((story, index) => {
    const bridgeName = story.bridge || story.bridges?.[0] || poetryBridges[index % poetryBridges.length]?.name;
    if (bridgeName) links.push({ source: `桥 ${bridgeName}`, target: `事 ${story.name}` });
  });
  initChart("culture-link-chart", {
    color: WOOD_CHART_PALETTE,
    tooltip: {},
    legend: { top: 0, textStyle: { color: WOOD_CHART_COLORS.text } },
    series: [{
      type: "graph",
      layout: "circular",
      roam: true,
      categories: [{ name: "核心" }, { name: "桥梁" }, { name: "诗文" }, { name: "事件" }],
      label: { show: true, color: WOOD_CHART_COLORS.text },
      lineStyle: { color: "source", opacity: 0.46, curveness: 0.25 },
      data: nodes,
      links: links.filter((link) => nodes.some((node) => node.name === link.source) && nodes.some((node) => node.name === link.target)),
    }],
  });
}

function renderPreservationAngle(data) {
  disposeBridgeType3D();
  clearHomeAngleTimer();
  const stage = qs("#angle-stage");
  if (!stage) return;
  const cases = toArray(data.preservation.bridges);
  const challenges = toArray(data.research.protectionStatus?.challenges);
  const techs = toArray(data.preservation.modernProtectionTechnology);
  stage.innerHTML = `
    <div class="preservation-angle-grid">
      <section class="preservation-board">
        <span class="angle-chip">⌂ 现状 → 原因 → 历代修缮 → 加固方式 → 前车之鉴</span>
        <div class="repair-lanes">
          ${cases.slice(0, 6).map((item) => {
            const count = typeof item.renovationCount === "number" ? item.renovationCount : String(item.renovationCount || "").includes("多次") ? 9 : 4;
            return `<article>
              <strong>${item.name}</strong>
              <div class="repair-meter"><i style="width:${Math.min(100, count * 8)}%"></i></div>
              <p>${item.renovationCount} · ${item.protectionLevel?.national || item.protectionLevel?.world || "保护记录"}</p>
            </article>`;
          }).join("")}
        </div>
      </section>
      <section class="preservation-chart-panel">
        <div id="preservation-sankey-chart" class="chart angle-chart"></div>
        <div class="digital-tools">
          ${techs.map((item) => `<article><span>数</span><strong>${item.technology}</strong><p>${toArray(item.applications).join("、")}</p></article>`).join("")}
        </div>
      </section>
    </div>
  `;

  const sankeyNodes = [
    ...challenges.map((item) => ({ name: item.type })),
    ...techs.map((item) => ({ name: item.technology })),
    ...cases.slice(0, 6).map((item) => ({ name: item.name })),
  ];
  const sankeyLinks = [];
  challenges.forEach((challenge, index) => {
    const tech = techs[index % techs.length];
    if (tech) sankeyLinks.push({ source: challenge.type, target: tech.technology, value: (challenge.cases?.length || challenge.issues?.length || 1) });
  });
  techs.forEach((tech, index) => {
    const target = cases[index % cases.length]?.name;
    if (target) sankeyLinks.push({ source: tech.technology, target, value: toArray(tech.applications).length + 1 });
  });
  initChart("preservation-sankey-chart", {
    color: WOOD_CHART_PALETTE,
    tooltip: { trigger: "item" },
    series: [{
      type: "sankey",
      nodeWidth: 16,
      nodeGap: 14,
      layoutIterations: 32,
      label: { color: WOOD_CHART_COLORS.text },
      lineStyle: { color: "gradient", opacity: 0.46 },
      data: sankeyNodes,
      links: sankeyLinks,
    }],
  });
}

function renderMindMapHome(data) {
  const stage = qs("#angle-stage");
  if (!stage) return;
  renderAngleStats(data);
  const tabs = qs("#angle-tabs");
  tabs.innerHTML = HOME_ANGLES.map((angle) => `
    <button class="angle-tab" data-angle="${angle.key}" title="${angle.title}">
      <span>${angle.icon}</span>
      <strong>${angle.title.replace("角度", "")}</strong>
    </button>
  `).join("");

  let activeAngleKey = "";
  let switchTimer = 0;
  const renderAngle = (angle) => {
    const stage = qs("#angle-stage");
    if (stage) {
      stage.classList.remove("angle-switch-out", "angle-switch-in");
      void stage.offsetWidth;
    }
    if (angle.key === "time") renderTimeAngle(data);
    if (angle.key === "space") renderSpaceAngle(data);
    if (angle.key === "type") renderTypeAngle(data);
    if (angle.key === "culture") renderCultureAngle(data);
    if (angle.key === "preservation") renderPreservationAngle(data);
    if (stage) {
      stage.classList.add("angle-switch-in");
      window.setTimeout(() => stage.classList.remove("angle-switch-in"), 420);
    }
  };

  const show = (key) => {
    const angle = HOME_ANGLES.find((item) => item.key === key) || HOME_ANGLES[0];
    setAngleCopy(angle);
    qsa(".angle-tab").forEach((button) => button.classList.toggle("active", button.dataset.angle === angle.key));
    qsa(".angle-node").forEach((button) => button.classList.toggle("active", button.dataset.angleJump === angle.key));
    if (!activeAngleKey) {
      activeAngleKey = angle.key;
      renderAngle(angle);
      return;
    }
    if (activeAngleKey === angle.key) return;
    activeAngleKey = angle.key;
    const stage = qs("#angle-stage");
    window.clearTimeout(switchTimer);
    if (stage) stage.classList.add("angle-switch-out");
    switchTimer = window.setTimeout(() => renderAngle(angle), 140);
  };

  qsa(".angle-tab").forEach((button) => button.addEventListener("click", () => show(button.dataset.angle)));
  qsa("[data-angle-jump]").forEach((button) => button.addEventListener("click", () => show(button.dataset.angleJump)));
  show("time");
}

async function initHome(data) {
  renderMindMapHome(data);
  if (!qs("#kpi-total")) return;

  const stats = data.unified.statistics;

  setText("kpi-total", fmtNum(stats.totalBridges));
  setText("kpi-world", fmtNum(stats.worldHeritageCount));
  setText("kpi-national", fmtNum(stats.nationalProtectionCount));
  setText("kpi-province", fmtNum(Object.keys(stats.byProvince || {}).length));
  setText("kpi-category", fmtNum(Object.keys(stats.byCategory || {}).length));
  setText("kpi-era", fmtNum(Object.keys(stats.byEra || {}).length));

  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  setText("screen-time", `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`);

  const eraEntries = Object.entries(stats.byEra || {});
  initChart("home-left-era", {
    title: { text: "朝代分布", left: 10, top: 8, textStyle: { color: "#e8f3ff", fontSize: 14 } },
    tooltip: { trigger: "axis" },
    grid: { left: 40, right: 14, top: 48, bottom: 26 },
    xAxis: { type: "category", data: eraEntries.map((e) => e[0]), axisLabel: { color: "#b9d7ef", rotate: 28 } },
    yAxis: { type: "value", axisLabel: { color: "#b9d7ef" }, splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } } },
    series: [{
      type: "bar",
      data: eraEntries.map((e) => e[1]),
      barWidth: 14,
      itemStyle: { borderRadius: [6, 6, 0, 0], color: "#8a3026" },
    }],
  });

  const categoryEntries = Object.entries(stats.byCategory || {});
  initChart("home-left-category", {
    title: { text: "桥型结构", left: 10, top: 8, textStyle: { color: "#e8f3ff", fontSize: 14 } },
    tooltip: { trigger: "axis" },
    grid: { left: 84, right: 12, top: 48, bottom: 20 },
    xAxis: { type: "value", axisLabel: { color: "#b9d7ef" }, splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } } },
    yAxis: { type: "category", data: categoryEntries.map((e) => e[0]), axisLabel: { color: "#dceeff" } },
    series: [{
      type: "bar",
      data: categoryEntries.map((e) => e[1]),
      itemStyle: {
        borderRadius: [0, 8, 8, 0],
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: "#5f7f66" },
          { offset: 1, color: "#3f6f78" },
        ]),
      },
    }],
  });

  const ready = await ensureChinaMap().catch(() => false);
  const markers = getMapMarkers(data);
  if (ready) {
    initChart("home-center-map", {
      title: { text: "古桥空间分布", left: 10, top: 8, textStyle: { color: "#e8f3ff", fontSize: 14 } },
      tooltip: {
        formatter(params) {
          const item = params.data;
          if (!item) return params.name;
          return `<strong>${item.name}</strong><br/>${item.era}<br/>${item.province || ""}${item.city ? ` · ${item.city}` : ""}<br/>重要度：${item.importance}`;
        },
      },
      geo: {
        map: "china",
        roam: true,
        zoom: 1.08,
        label: { show: false },
        itemStyle: { areaColor: "#0d213d", borderColor: "rgba(63,111,120,0.35)" },
        emphasis: { itemStyle: { areaColor: "#14345e" } },
      },
      series: [{
        type: "effectScatter",
        coordinateSystem: "geo",
        symbolSize: (value) => Math.max(6, value[2] * 2.2),
        rippleEffect: { scale: 3.6, brushType: "stroke" },
        itemStyle: { color: "#3f6f78" },
        data: markers.map((item) => ({
          name: item.name,
          value: [item.coordinates.lng, item.coordinates.lat, item.importance || 3],
          era: item.era,
          province: item.province,
          city: item.city || item.county || item.district,
          importance: item.importance || 3,
        })),
      }],
    });
  } else {
    initChart("home-center-map", {
      title: { text: "古桥空间分布（回退）", left: 10, top: 8, textStyle: { color: "#e8f3ff", fontSize: 14 } },
      tooltip: { trigger: "item" },
      grid: { left: 40, right: 14, top: 48, bottom: 30 },
      xAxis: { type: "value", name: "经度", axisLabel: { color: "#b9d7ef" } },
      yAxis: { type: "value", name: "纬度", axisLabel: { color: "#b9d7ef" } },
      series: [{
        type: "scatter",
        symbolSize: (value) => value[2] * 2.4,
        itemStyle: { color: "#3f6f78" },
        data: markers.map((item) => [item.coordinates.lng, item.coordinates.lat, item.importance || 3]),
      }],
    });
  }

  const worldHeritageCount = stats.worldHeritageCount || 0;
  const nationalProtectionCount = stats.nationalProtectionCount || 0;
  const worldHeritageNationalCount = data.unified.bridges
    .filter((bridge) => bridge.protection?.isWorldHeritage && bridge.protection?.level?.includes("国家"))
    .length;
  const nationalOnlyCount = Math.max(0, nationalProtectionCount - worldHeritageNationalCount);
  const otherProtectionCount = Math.max(0, stats.totalBridges - nationalProtectionCount);

  initChart("home-right-ring", {
    title: { text: "保护层级占比", left: 10, top: 8, textStyle: { color: "#e8f3ff", fontSize: 14 } },
    tooltip: { trigger: "item" },
    legend: { bottom: 6, textStyle: { color: "#dceeff" } },
    series: [{
      type: "pie",
      radius: ["52%", "78%"],
      center: ["50%", "48%"],
      itemStyle: { borderRadius: 10, borderColor: "#081224", borderWidth: 3 },
      label: { color: "#fff" },
      data: [
        { name: "世界遗产", value: worldHeritageCount },
        { name: "国保单位（非世遗）", value: nationalOnlyCount },
        { name: "其他收录", value: otherProtectionCount },
      ],
    }],
  });

  const avgIndex = Math.round(
    data.unified.bridges
      .slice()
      .sort((a, b) => (b.importance || 0) - (a.importance || 0))
      .slice(0, 24)
      .reduce((acc, bridge) => acc + (getBridgeRadar(bridge).reduce((s, v) => s + v, 0) / 5), 0) / 24
  );
  initChart("home-right-gauge", {
    title: { text: "综合价值指数", left: 10, top: 8, textStyle: { color: "#e8f3ff", fontSize: 14 } },
    series: [{
      type: "gauge",
      startAngle: 210,
      endAngle: -30,
      radius: "92%",
      center: ["50%", "58%"],
      min: 0,
      max: 100,
      progress: { show: true, width: 14, roundCap: true },
      axisLine: { lineStyle: { width: 14, color: [[0.5, "#3f6f78"], [0.8, "#5f7f66"], [1, "#c19a53"]] } },
      axisTick: { show: false },
      splitLine: { length: 10, lineStyle: { color: "rgba(255,255,255,0.2)" } },
      axisLabel: { color: "#b9d7ef" },
      pointer: { show: false },
      detail: { valueAnimation: true, formatter: "{value} 分", color: "#e8f3ff", fontSize: 22, offsetCenter: [0, "20%"] },
      title: { show: false },
      data: [{ value: avgIndex }],
    }],
  });

  const years = data.unified.bridges
    .map((b) => getBridgeStartYear(b))
    .filter((y) => y !== null)
    .sort((a, b) => a - b);
  const sampled = [];
  for (let i = 0; i < years.length; i += Math.max(1, Math.floor(years.length / 60))) sampled.push(years[i]);
  const trendX = sampled;
  const trendY = sampled.map((y) => years.filter((t) => t <= y).length);

  initChart("home-bottom-trend", {
    title: { text: "建造年代累积趋势", left: 10, top: 8, textStyle: { color: "#e8f3ff", fontSize: 14 } },
    tooltip: { trigger: "axis" },
    grid: { left: 46, right: 14, top: 48, bottom: 28 },
    xAxis: { type: "category", data: trendX.map(String), axisLabel: { color: "#b9d7ef", interval: "auto", rotate: 22 } },
    yAxis: { type: "value", axisLabel: { color: "#b9d7ef" }, splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } } },
    series: [{
      type: "line",
      smooth: true,
      symbolSize: 6,
      lineStyle: { width: 2, color: "#6f5941" },
      areaStyle: { color: "rgba(111,89,65,0.16)" },
      data: trendY,
    }],
  });

  // 底部：省份Top
  const provinceTop = Object.entries(stats.byProvince || {}).sort((a, b) => b[1] - a[1]).slice(0, 10);
  initChart("home-bottom-province", {
    title: { text: "重点省份 Top10", left: 10, top: 8, textStyle: { color: "#e8f3ff", fontSize: 14 } },
    tooltip: { trigger: "axis" },
    grid: { left: 90, right: 14, top: 48, bottom: 20 },
    xAxis: { type: "value", axisLabel: { color: "#b9d7ef" }, splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } } },
    yAxis: { type: "category", data: provinceTop.map((p) => p[0]), axisLabel: { color: "#dceeff" } },
    series: [{
      type: "bar",
      data: provinceTop.map((p) => p[1]),
      itemStyle: { borderRadius: [0, 8, 8, 0], color: "#8a3026" },
    }],
  });

  const bridgeTagWords = data.unified.bridges
    .slice()
    .sort((a, b) => (b.importance || 0) - (a.importance || 0))
    .slice(0, 20)
    .map((bridge) => ({
      name: bridge.name,
      value: (bridge.importance || 1) * 10 + getInnovationCount(bridge) * 3 + getCultureCount(bridge) * 2,
      link: bridge.detailLink,
    }));
  renderTagCloud("home-tag-cloud", bridgeTagWords);

  const wordStat = {};
  data.unified.bridges.forEach((bridge) => {
    wordStat[bridge.name] = (wordStat[bridge.name] || 0) + (bridge.importance || 1) * 6;
    toArray(bridge.tags).forEach((tag) => {
      wordStat[tag] = (wordStat[tag] || 0) + 4;
    });
    toArray(bridge.technology?.innovations).forEach((item) => {
      if (item.name) wordStat[item.name] = (wordStat[item.name] || 0) + 5;
    });
    toArray(bridge.culturalInfo?.poems).forEach(() => {
      wordStat.诗词 = (wordStat.诗词 || 0) + 3;
    });
    toArray(bridge.culturalInfo?.legends).forEach(() => {
      wordStat.传说 = (wordStat.传说 || 0) + 3;
    });
  });
  const wordCloudLikeImage = Object.entries(wordStat)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 28);
  renderWordCloudPoster("home-word-cloud", wordCloudLikeImage);

  const sunburstMap = {};
  data.unified.bridges.forEach((bridge) => {
    const era = bridge.era || "年代未详";
    const category = bridge.category || bridge.type || "类型未详";
    const level = bridge.protection?.isWorldHeritage ? "世界遗产" : bridge.protection?.level?.includes("国家") ? "国家级保护" : "其他保护";
    sunburstMap[era] = sunburstMap[era] || {};
    sunburstMap[era][category] = sunburstMap[era][category] || {};
    sunburstMap[era][category][level] = (sunburstMap[era][category][level] || 0) + 1;
  });
  const sunburstData = Object.entries(sunburstMap).map(([era, categories]) => ({
    name: era,
    children: Object.entries(categories).map(([category, levels]) => ({
      name: category,
      children: Object.entries(levels).map(([level, value]) => ({ name: level, value })),
    })),
  }));
  initChart("home-sunburst", {
    tooltip: { trigger: "item" },
    series: [{
      type: "sunburst",
      radius: [0, "90%"],
      sort: null,
      data: sunburstData,
      emphasis: { focus: "ancestor" },
      label: { color: "#ffffff", rotate: 0, fontSize: 12, textBorderColor: "rgba(5,10,20,0.7)", textBorderWidth: 2 },
      itemStyle: { borderWidth: 1, borderColor: "rgba(7,17,31,0.6)" },
      levels: [{}, { r0: "8%", r: "32%" }, { r0: "32%", r: "62%" }, { r0: "62%", r: "90%" }],
    }],
  });

  const groups = {
    世界遗产: [],
    国家级保护: [],
    其他保护: [],
  };
  data.unified.bridges.forEach((bridge) => {
    const length = getBridgeLength(bridge);
    if (length === null) return;
    if (bridge.protection?.isWorldHeritage) groups.世界遗产.push(length);
    else if (bridge.protection?.level?.includes("国家")) groups.国家级保护.push(length);
    else groups.其他保护.push(length);
  });
  const boxLabels = Object.keys(groups);
  const boxData = boxLabels.map((label) => buildBoxValues(groups[label]));
  initChart("home-boxplot", {
    tooltip: {
      formatter(params) {
        const v = params.data;
        return `${params.name}<br/>最小值: ${v[0]}m<br/>Q1: ${v[1]}m<br/>中位数: ${v[2]}m<br/>Q3: ${v[3]}m<br/>最大值: ${v[4]}m`;
      },
    },
    grid: { left: 52, right: 14, top: 34, bottom: 34 },
    xAxis: { type: "category", data: boxLabels, axisLabel: { color: "#dceeff" } },
    yAxis: { type: "value", name: "桥长(m)", axisLabel: { color: "#b9d7ef" }, splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } } },
    series: [{
      type: "boxplot",
      data: boxData,
      itemStyle: {
        borderWidth: 1.5,
        borderColor: "#3f6f78",
        color: "rgba(63,111,120,0.35)",
      },
      emphasis: { itemStyle: { color: "rgba(95,127,102,0.35)" } },
    }],
  });

  const maxProvince = provinceTop[0];
  const avgLen = data.unified.bridges
    .map((item) => getBridgeLength(item))
    .filter((value) => value !== null)
    .reduce((sum, value, _, arr) => sum + value / arr.length, 0);
  const worldMedian = boxData[0]?.[2] || 0;
  const nationalMedian = boxData[1]?.[2] || 0;
  const analysis = [
    { title: "空间聚集", text: `Top10 省份中 ${maxProvince?.[0] || "重点省份"} 收录最多，说明古桥资源存在明显区域聚集，适合按流域做分区保护。` },
    { title: "结构演化", text: "旭日图显示“朝代-桥型-保护层级”并非均匀分布，特定朝代的桥型集中度更高，提示技术路径具有代际传承特征。" },
    { title: "保护差异", text: `箱线图中世界遗产样本中位桥长约 ${worldMedian}m，国家级样本约 ${nationalMedian}m，长桥往往伴随更高保护等级。` },
    { title: "文化热度", text: "词云中“诗词、传说、拱桥”等关键词权重更高，说明古桥价值不仅在工程尺度，也来自叙事与文化记忆。"},
    { title: "标签网络", text: "标签云悬停反馈可快速识别高频主题，漂浮动画在静态时也能维持视觉活力并引导交互探索。"},
    { title: "综合判断", text: `样本平均桥长约 ${avgLen.toFixed(1)}m，结合趋势图可见古桥建设从点状分布逐步走向规模化，反映区域交通体系持续成熟。` },
  ];
  const analysisWrap = qs("#home-analysis");
  if (analysisWrap) {
    analysisWrap.innerHTML = analysis.map((item) => `
      <article class="analysis-item">
        <h4>${item.title}</h4>
        <p>${item.text}</p>
      </article>
    `).join("");
  }

  setupSpeech("hero-speak", () => `欢迎来到中国古桥数据大屏。本数据集收录 ${stats.totalBridges} 座古桥，覆盖 ${Object.keys(stats.byProvince || {}).length} 个省份，并包含世界遗产与国保单位等保护信息。`);
}

function normalizeProvinceName(name) {
  return String(name || "")
    .replace(/\s+/g, "")
    .replace(/特别行政区|维吾尔自治区|壮族自治区|回族自治区|自治区|省|市/g, "");
}

const TAIWAN_CITY_LABELS = [
  { name: "台北", center: [121.56, 25.04] },
  { name: "新北", center: [121.46, 25.02] },
  { name: "基隆", center: [121.75, 25.13] },
  { name: "桃园", center: [121.30, 24.99] },
  { name: "新竹市", center: [120.97, 24.80] },
  { name: "新竹县", center: [121.01, 24.84] },
  { name: "苗栗", center: [120.82, 24.56] },
  { name: "台中", center: [120.67, 24.15] },
  { name: "彰化", center: [120.54, 24.08] },
  { name: "南投", center: [120.99, 23.84] },
  { name: "云林", center: [120.43, 23.71] },
  { name: "嘉义市", center: [120.45, 23.48] },
  { name: "嘉义县", center: [120.29, 23.45] },
  { name: "台南", center: [120.20, 23.00] },
  { name: "高雄", center: [120.30, 22.63] },
  { name: "屏东", center: [120.49, 22.67] },
  { name: "宜兰", center: [121.75, 24.75] },
  { name: "花莲", center: [121.60, 23.99] },
  { name: "台东", center: [121.15, 22.76] },
  { name: "澎湖", center: [119.57, 23.57] },
  { name: "金门", center: [118.32, 24.44] },
  { name: "连江", center: [119.95, 26.16] },
];

function getTaiwanCityLabelFeatures() {
  return TAIWAN_CITY_LABELS.map((item) => ({
    type: "Feature",
    properties: {
      name: item.name,
      label: item.name,
      center: item.center,
    },
    geometry: null,
  }));
}

function isTaiwanProvince(feature) {
  const name = feature?.properties?.name || feature?.properties?.fullname || "";
  return normalizeProvinceName(name) === "台湾";
}

function getProvinceDistrictLabelFeatures(features, fallbackFeature) {
  const validFeatures = toArray(features);
  if (isTaiwanProvince(fallbackFeature)) {
    const hasCityLabels = validFeatures.some((feature) => {
      const name = feature?.properties?.name || "";
      return /台北|新北|桃园|台中|台南|高雄|基隆|新竹|嘉义|苗栗|彰化|南投|云林|屏东|宜兰|花莲|台东|澎湖|金门|连江/.test(name);
    });
    if (!hasCityLabels) return getTaiwanCityLabelFeatures();
  }
  return validFeatures.length > 1 ? validFeatures : [];
}

function findProvinceFeature(provinceName) {
  const target = normalizeProvinceName(provinceName);
  if (!target || !state.chinaGeoJson?.features) return null;
  return state.chinaGeoJson.features.find((feature) => {
    const name = feature?.properties?.name || feature?.properties?.fullname || "";
    return name === provinceName || normalizeProvinceName(name) === target;
  }) || null;
}

function collectGeometryRings(geometry) {
  if (!geometry) return [];
  if (geometry.type === "Polygon") return toArray(geometry.coordinates);
  if (geometry.type === "MultiPolygon") return toArray(geometry.coordinates).flatMap((polygon) => toArray(polygon));
  return [];
}

function getFeatureBounds(feature) {
  const rings = collectGeometryRings(feature?.geometry);
  const bounds = { minLng: Infinity, maxLng: -Infinity, minLat: Infinity, maxLat: -Infinity };
  rings.flat().forEach((point) => {
    if (!Array.isArray(point) || point.length < 2) return;
    bounds.minLng = Math.min(bounds.minLng, point[0]);
    bounds.maxLng = Math.max(bounds.maxLng, point[0]);
    bounds.minLat = Math.min(bounds.minLat, point[1]);
    bounds.maxLat = Math.max(bounds.maxLat, point[1]);
  });
  if (!Number.isFinite(bounds.minLng)) return null;
  return bounds;
}

function getFeatureCenter(feature) {
  const center = feature?.properties?.center || feature?.properties?.centroid;
  if (Array.isArray(center) && center.length >= 2) return center;
  const bounds = getFeatureBounds(feature);
  if (!bounds) return null;
  return [(bounds.minLng + bounds.maxLng) / 2, (bounds.minLat + bounds.maxLat) / 2];
}

function getFeatureBoundsCenter(feature) {
  const bounds = getFeatureBounds(feature);
  if (!bounds) return getFeatureCenter(feature);
  return [(bounds.minLng + bounds.maxLng) / 2, (bounds.minLat + bounds.maxLat) / 2];
}

function cleanDistrictLabel(name) {
  return String(name || "")
    .replace(/市辖区|城区|郊区|新区|自治县|自治州|自治旗|地区|盟|市|区|县|旗$/g, "")
    .replace(/甯倈鍖簗鍘縷鑷不宸瀨鍦板尯|鐩?/g, "")
    .trim();
}

function boxesOverlap(a, b) {
  return !(a.right <= b.left || a.left >= b.right || a.bottom <= b.top || a.top >= b.bottom);
}

function createLabelBox(x, y, label, fontSize) {
  const width = Math.max(fontSize * 1.8, label.length * fontSize * 0.82);
  const height = fontSize * (label.length > 4 ? 1.55 : 1.12);
  return {
    left: x - width / 2,
    right: x + width / 2,
    top: y - height / 2,
    bottom: y + height / 2,
  };
}

function getDistrictLabelOffsets(fontSize) {
  const offsets = [[0, 0]];
  const directions = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
    [-1, -0.72],
    [1, -0.72],
    [-1, 0.72],
    [1, 0.72],
  ];
  for (let ring = 1; ring <= 4; ring += 1) {
    const distance = fontSize * 0.78 * ring;
    directions.forEach(([dx, dy]) => offsets.push([dx * distance, dy * distance]));
  }
  return offsets;
}

function layoutProvinceDistrictLabels(features, project, width, height) {
  const fontSize = Math.max(16, Math.min(23, Math.round(Math.min(width, height) / 26)));
  const fontSizes = [fontSize, fontSize - 1, fontSize - 2, fontSize - 3, 14].filter((size, index, list) => size >= 14 && list.indexOf(size) === index);
  const placed = [];
  return features
    .map((feature) => {
      const name = feature?.properties?.label || cleanDistrictLabel(feature?.properties?.name || "");
      const center = getFeatureBoundsCenter(feature);
      if (!name || !center) return null;
      const [baseX, baseY] = project(center);
      let selected = null;
      for (const size of fontSizes) {
        const candidateSteps = getDistrictLabelOffsets(size);
        for (const [dx, dy] of candidateSteps) {
          const x = Math.max(28, Math.min(width - 28, baseX + dx));
          const y = Math.max(24, Math.min(height - 24, baseY + dy));
          const box = createLabelBox(x, y, name, size);
          if (!placed.some((item) => boxesOverlap(item, box))) {
            selected = { name, x, y, fontSize: size, box };
            break;
          }
        }
        if (selected) break;
      }
      if (!selected) {
        const fallbackSize = 13;
        const x = Math.max(28, Math.min(width - 28, baseX));
        const y = Math.max(24, Math.min(height - 24, baseY));
        selected = { name, x, y, fontSize: fallbackSize, box: createLabelBox(x, y, name, fallbackSize) };
      }
      placed.push(selected.box);
      return selected;
    })
    .filter(Boolean);
}

function getGeoJsonBounds(geoJson) {
  const bounds = { minLng: Infinity, maxLng: -Infinity, minLat: Infinity, maxLat: -Infinity };
  toArray(geoJson?.features).forEach((feature) => {
    const featureBounds = getFeatureBounds(feature);
    if (!featureBounds) return;
    bounds.minLng = Math.min(bounds.minLng, featureBounds.minLng);
    bounds.maxLng = Math.max(bounds.maxLng, featureBounds.maxLng);
    bounds.minLat = Math.min(bounds.minLat, featureBounds.minLat);
    bounds.maxLat = Math.max(bounds.maxLat, featureBounds.maxLat);
  });
  if (!Number.isFinite(bounds.minLng)) return null;
  return bounds;
}

function createGeoProjector(bounds, width, height, padding) {
  const usableWidth = width - padding * 2;
  const usableHeight = height - padding * 2;
  const lngSpan = Math.max(bounds.maxLng - bounds.minLng, 0.001);
  const latSpan = Math.max(bounds.maxLat - bounds.minLat, 0.001);
  const scale = Math.min(usableWidth / lngSpan, usableHeight / latSpan);
  const drawnWidth = lngSpan * scale;
  const drawnHeight = latSpan * scale;
  const offsetX = padding + (usableWidth - drawnWidth) / 2;
  const offsetY = padding + (usableHeight - drawnHeight) / 2;
  return (point) => {
    const x = offsetX + (point[0] - bounds.minLng) * scale;
    const y = offsetY + (bounds.maxLat - point[1]) * scale;
    return [x, y];
  };
}

function geometryToSvgPath(geometry, project) {
  return collectGeometryRings(geometry).map((ring) => {
    return ring.map((point, index) => {
      const [x, y] = project(point);
      return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }).join(" ") + " Z";
  }).join(" ");
}

async function ensureProvinceGeoJson(feature) {
  const adcode = feature?.properties?.adcode;
  if (!adcode) return null;
  if (state.provinceGeoCache.has(adcode)) return state.provinceGeoCache.get(adcode);
  const request = fetch(LOCAL_ASSET_FILES.provinceMap(adcode))
    .then((res) => (res.ok ? res.json() : null))
    .catch((error) => {
      console.warn("省份区划地图加载失败。", error);
      return null;
    });
  state.provinceGeoCache.set(adcode, request);
  return request;
}

function normalizeAreaName(name) {
  return String(name || "")
    .replace(/\s+/g, "")
    .replace(/特别行政区|维吾尔自治区|壮族自治区|回族自治区|自治区|自治州|自治县|自治旗|地区|盟|省|市|区|县|旗/g, "");
}

function findCityFeatureInProvince(detailGeoJson, cityName) {
  const target = normalizeAreaName(cityName);
  if (!target) return null;
  return toArray(detailGeoJson?.features).find((feature) => {
    const name = feature?.properties?.name || feature?.properties?.fullname || "";
    return name === cityName || normalizeAreaName(name) === target;
  }) || null;
}

function isMarkerInsideFeatureBounds(marker, feature) {
  const coordinates = marker?.coordinates;
  if (!coordinates || !Number.isFinite(coordinates.lng) || !Number.isFinite(coordinates.lat)) return false;
  const bounds = getFeatureBounds(feature);
  if (!bounds) return false;
  return coordinates.lng >= bounds.minLng
    && coordinates.lng <= bounds.maxLng
    && coordinates.lat >= bounds.minLat
    && coordinates.lat <= bounds.maxLat;
}

function getProvinceBridgeMarkers(data, provinceName) {
  const provinceTarget = normalizeProvinceName(provinceName);
  return getMapMarkers(data)
    .filter((marker) => normalizeProvinceName(marker.province) === provinceTarget)
    .map((marker) => {
      const bridge = resolveBridgeByName(data, marker.name);
      return {
        ...marker,
        bridgeId: bridge?.id || "",
        city: bridge?.location?.city || marker.city || "",
        county: bridge?.location?.county || marker.county || marker.district || "",
        district: bridge?.location?.district || marker.district || "",
        detailLink: bridge?.detailLink || `detail.html?id=${encodeURIComponent(bridge?.id || "")}`,
        category: bridge?.category || bridge?.type || marker.type || "古桥",
      };
    });
}

function getCityBridgeMarkers(provinceMarkers, cityFeature) {
  const cityName = cityFeature?.properties?.name || "";
  const cityTarget = normalizeAreaName(cityName);
  const matched = provinceMarkers.filter((marker) => {
    return [marker.city, marker.county, marker.district]
      .filter(Boolean)
      .some((name) => normalizeAreaName(name) === cityTarget);
  });
  if (matched.length) return matched;
  return provinceMarkers.filter((marker) => isMarkerInsideFeatureBounds(marker, cityFeature));
}

function buildBridgeMarkerSvg(project, width, height, bridgeMarkers = [], options = {}) {
  const {
    className = "province-bridge-marker",
    linkClassName = "",
    linkable = false,
    showCategory = true,
    radius = 4.2,
  } = options;
  return bridgeMarkers.map((marker, index) => {
    const coordinates = marker?.coordinates;
    if (!coordinates || !Number.isFinite(coordinates.lng) || !Number.isFinite(coordinates.lat)) return "";
    const [x, y] = project([coordinates.lng, coordinates.lat]);
    const labelToLeft = x > width * 0.68;
    const labelX = labelToLeft ? Math.max(48, x - 10) : Math.min(width - 48, x + 10);
    const labelY = Math.max(22, Math.min(height - 20, y - 8 + (index % 3) * 8));
    const category = marker.category || "古桥";
    const lines = [
      `<tspan x="${labelX.toFixed(1)}" dy="0">${escapeHtml(marker.name || "古桥")}</tspan>`,
      showCategory ? `<tspan x="${labelX.toFixed(1)}" dy="15">${escapeHtml(category)}</tspan>` : "",
    ].filter(Boolean).join("");
    const markerGroup = `
      <g class="${className}">
        <circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${radius}"><title>${escapeHtml(marker.name)} · ${escapeHtml(category)}</title></circle>
        <text x="${labelX.toFixed(1)}" y="${labelY.toFixed(1)}" text-anchor="${labelToLeft ? "end" : "start"}">
          ${lines}
        </text>
      </g>
    `;
    if (!linkable || !marker.detailLink) return markerGroup;
    return `<a class="${linkClassName}" href="${escapeHtml(marker.detailLink)}" data-bridge-id="${escapeHtml(marker.bridgeId || "")}">${markerGroup}</a>`;
  }).join("");
}

function buildProvinceSvgDetail(detailGeoJson, fallbackFeature, width = 220, height = 150, padding = 10, bridgeMarkers = []) {
  const features = toArray(detailGeoJson?.features).length ? toArray(detailGeoJson.features) : [fallbackFeature];
  const bounds = getGeoJsonBounds({ features });
  if (!bounds) return "";
  const project = createGeoProjector(bounds, width, height, padding);
  const districtPaths = features.map((feature) => {
    const name = feature?.properties?.name || "";
    const path = geometryToSvgPath(feature.geometry, project);
    return `<path class="province-district" data-city-name="${escapeHtml(name)}" d="${path}"><title>${escapeHtml(name)}</title></path>`;
  }).join("");
  const labelFeatures = getProvinceDistrictLabelFeatures(features, fallbackFeature);
  const labels = layoutProvinceDistrictLabels(labelFeatures, project, width, height).map((label) => {
    return `<text class="province-district-label" data-city-name="${escapeHtml(label.name)}" x="${label.x.toFixed(1)}" y="${label.y.toFixed(1)}" style="font-size:${label.fontSize}px;">${escapeHtml(label.name)}</text>`;
  }).join("");
  const markerLabels = buildBridgeMarkerSvg(project, width, height, bridgeMarkers, {
    className: "province-bridge-marker",
    linkable: false,
    showCategory: true,
    radius: 4.2,
  });
  return `${districtPaths}${labels}${markerLabels}`;
}

function buildCitySvgDetail(cityFeature, width = 220, height = 150, padding = 10, bridgeMarkers = []) {
  const bounds = getGeoJsonBounds({ features: [cityFeature] });
  if (!bounds) return "";
  const project = createGeoProjector(bounds, width, height, padding);
  const path = geometryToSvgPath(cityFeature.geometry, project);
  const districtPath = `<path class="province-district city-district" d="${path}"><title>${escapeHtml(cityFeature?.properties?.name || "")}</title></path>`;
  const markerLabels = buildBridgeMarkerSvg(project, width, height, bridgeMarkers, {
    className: "city-bridge-marker",
    linkClassName: "city-bridge-link",
    linkable: true,
    showCategory: false,
    radius: 4.6,
  });
  return `${districtPath}${markerLabels}`;
}

async function placeProvinceInset(layer, chart, data, provinceName, sourceCoord) {
  const feature = findProvinceFeature(provinceName);
  if (!feature) return;
  const chartDom = chart.getDom();
  const chartRect = chartDom.getBoundingClientRect();
  const centerCoord = sourceCoord || getFeatureCenter(feature);
  let sourcePixel = centerCoord ? chart.convertToPixel({ geoIndex: 0 }, centerCoord) : null;
  if (!Array.isArray(sourcePixel)) sourcePixel = [chartRect.width / 2, chartRect.height / 2];
  const cardWidth = Math.min(chartRect.width * 0.82, 760);
  const cardHeight = Math.min(chartRect.height * 0.78, 460);
  const cardLeft = (chartRect.width - cardWidth) / 2;
  const cardTop = (chartRect.height - cardHeight) / 2;
  const originX = sourcePixel[0] - cardLeft;
  const originY = sourcePixel[1] - cardTop;
  const bridgeMarkers = getProvinceBridgeMarkers(data, provinceName);
  const detailGeoJson = await ensureProvinceGeoJson(feature);
  const svgWidth = Math.max(420, Math.round(chartRect.width));
  const svgHeight = Math.max(420, Math.round(chartRect.height));
  const svgContent = buildProvinceSvgDetail(detailGeoJson, feature, svgWidth, svgHeight, 28, bridgeMarkers);

  layer.innerHTML = `
    <article class="province-inset-card" style="--origin-x:${originX.toFixed(1)}px;--origin-y:${originY.toFixed(1)}px;" aria-label="${escapeHtml(provinceName)}省域放大图">
      <svg class="province-inset-map" viewBox="0 0 ${svgWidth} ${svgHeight}" role="img" aria-label="${escapeHtml(provinceName)}省域放大图">
        ${svgContent}
      </svg>
    </article>
  `;
}

async function placeCityInset(layer, chart, data, provinceName, cityName, sourceCoord) {
  const provinceFeature = findProvinceFeature(provinceName);
  if (!provinceFeature) return;
  const detailGeoJson = await ensureProvinceGeoJson(provinceFeature);
  const cityFeature = findCityFeatureInProvince(detailGeoJson, cityName);
  if (!cityFeature) return;
  const chartDom = chart.getDom();
  const chartRect = chartDom.getBoundingClientRect();
  const centerCoord = sourceCoord || getFeatureCenter(cityFeature) || getFeatureCenter(provinceFeature);
  let sourcePixel = centerCoord ? chart.convertToPixel({ geoIndex: 0 }, centerCoord) : null;
  if (!Array.isArray(sourcePixel)) sourcePixel = [chartRect.width / 2, chartRect.height / 2];
  const cardWidth = Math.min(chartRect.width * 0.84, 780);
  const cardHeight = Math.min(chartRect.height * 0.8, 520);
  const cardLeft = (chartRect.width - cardWidth) / 2;
  const cardTop = (chartRect.height - cardHeight) / 2;
  const originX = sourcePixel[0] - cardLeft;
  const originY = sourcePixel[1] - cardTop;
  const provinceMarkers = getProvinceBridgeMarkers(data, provinceName);
  const cityMarkers = getCityBridgeMarkers(provinceMarkers, cityFeature);
  const svgWidth = Math.max(420, Math.round(chartRect.width));
  const svgHeight = Math.max(420, Math.round(chartRect.height * 0.84));
  const svgContent = buildCitySvgDetail(cityFeature, svgWidth, svgHeight, 32, cityMarkers);

  layer.innerHTML = `
    <article class="province-inset-card city-inset-card" style="--origin-x:${originX.toFixed(1)}px;--origin-y:${originY.toFixed(1)}px;" aria-label="${escapeHtml(cityName)}市级地图">
      <div class="city-inset-toolbar">
        <button type="button" class="city-inset-back" data-city-back="1">返回省级地图</button>
        <div class="city-inset-copy">
          <strong>${escapeHtml(cityName)}</strong>
          <span>${fmtNum(cityMarkers.length)} 座古桥，点击点位可进入详情页</span>
        </div>
      </div>
      <svg class="province-inset-map city-inset-map" viewBox="0 0 ${svgWidth} ${svgHeight}" role="img" aria-label="${escapeHtml(cityName)}市级地图">
        ${svgContent}
      </svg>
    </article>
  `;
}

function setupProvinceMapInteraction(chart, data) {
  const chartDom = chart?.getDom?.();
  if (!chartDom) return;
  chartDom.classList.add("province-map-host");
  let layer = qs(".province-zoom-layer", chartDom);
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "province-zoom-layer";
    chartDom.appendChild(layer);
  }
  let activeProvince = "";
  let activeCoord = null;
  let activeCity = "";
  let redrawRaf = 0;
  const renderProvinceInset = () => placeProvinceInset(layer, chart, data, activeProvince, activeCoord);
  const renderCityInset = () => placeCityInset(layer, chart, data, activeProvince, activeCity, activeCoord);
  const closeInset = () => {
    layer.innerHTML = "";
    layer.classList.remove("is-active", "is-city-active");
    chartDom.classList.remove("is-province-open");
    activeProvince = "";
    activeCoord = null;
    activeCity = "";
  };
  const closeCityInset = () => {
    activeCity = "";
    layer.classList.remove("is-city-active");
    renderProvinceInset();
  };
  const redrawInset = () => {
    if (!activeProvince || redrawRaf) return;
    redrawRaf = window.requestAnimationFrame(() => {
      redrawRaf = 0;
      if (activeCity) {
        renderCityInset();
        return;
      }
      renderProvinceInset();
    });
  };
  const openInset = (provinceName, coord) => {
    activeProvince = provinceName;
    activeCoord = coord || null;
    activeCity = "";
    layer.classList.add("is-active");
    layer.classList.remove("is-city-active");
    chartDom.classList.add("is-province-open");
    renderProvinceInset();
  };
  const openCityInset = (cityName) => {
    if (!activeProvince || !cityName) return;
    activeCity = cityName;
    layer.classList.add("is-city-active");
    renderCityInset();
  };
  chart.off("click");
  chart.off("georoam");
  chart.on("click", (params) => {
    const provinceName = params.data?.province || params.name;
    if (!provinceName) return;
    const coord = Array.isArray(params.value) && params.value.length >= 2 ? [params.value[0], params.value[1]] : null;
    openInset(provinceName, coord);
  });
  layer.onclick = (event) => {
    if (event.target.closest(".city-bridge-link")) return;
    if (event.target.closest("[data-city-back]")) {
      closeCityInset();
      return;
    }
    const cityTarget = event.target.closest("[data-city-name]");
    if (cityTarget) {
      openCityInset(cityTarget.dataset.cityName || "");
      return;
    }
    if (event.target === layer) {
      if (activeCity) {
        closeCityInset();
        return;
      }
      closeInset();
    }
  };
  chart.on("georoam", redrawInset);
  if (typeof ResizeObserver !== "undefined") {
    state.mapResizeObserver?.disconnect();
    const observer = new ResizeObserver(redrawInset);
    observer.observe(chartDom);
    state.mapResizeObserver = observer;
  }
}

async function initMapPage(data) {
  const ready = await ensureChinaMap();
  const markers = getMapMarkers(data);
  const provinceStats = Object.entries(data.unified.statistics.byProvince || {}).sort((a, b) => b[1] - a[1]);
  const mapBarPalette = ["#8a3026", "#a86134", "#c19a53", "#5f7f66", "#6f5941"];
  const mapTextColor = "#2b2418";
  const mapMutedColor = "#5e4b33";

  if (ready) {
    const chart = initChart("china-map-chart", {
      tooltip: {
        formatter(params) {
          const item = params.data;
          if (!item || !item.era) return "";
          return `<strong>${item.name}</strong><br/>${item.era}<br/>${item.province || ""}${item.city ? ` · ${item.city}` : ""}<br/>重要度：${item.importance}`;
        },
      },
      geo: {
        map: "china",
        roam: true,
        zoom: 1.18,
        label: { show: true, color: "#3f3425", fontSize: 10 },
        itemStyle: {
          areaColor: "#e7ddc6",
          borderColor: "#9d8058",
          borderWidth: 1,
        },
        emphasis: {
          label: { show: true, color: "#2b2117", fontWeight: 700 },
          itemStyle: { areaColor: "#d7c092", borderColor: "#8a3026", borderWidth: 1.4 },
        },
      },
      series: [
        {
          name: "省份放大选择",
          type: "map",
          map: "china",
          geoIndex: 0,
          selectedMode: false,
          roam: false,
          z: 1,
          data: Object.entries(data.unified.statistics.byProvince || {}).map(([name, value]) => ({ name, value })),
          itemStyle: {
            areaColor: "rgba(245,236,210,0.24)",
            borderColor: "rgba(116,87,52,0.36)",
            borderWidth: 0.8,
          },
          emphasis: {
            label: { show: true, color: "#2b2117", fontSize: 12, fontWeight: 700 },
            itemStyle: {
              areaColor: "rgba(205,160,91,0.34)",
              borderColor: "#8a3026",
              borderWidth: 1.2,
            },
          },
        },
        {
          type: "effectScatter",
          coordinateSystem: "geo",
          z: 3,
          symbolSize: (value) => Math.max(5, value[2] * 1.25),
          rippleEffect: { scale: 2.7, brushType: "stroke" },
          itemStyle: { color: "#a63a2a", shadowBlur: 8, shadowColor: "rgba(166,58,42,0.35)" },
          data: markers.map((item) => ({
            name: item.name,
            value: [item.coordinates.lng, item.coordinates.lat, item.importance || 3],
            era: item.era,
            province: item.province,
            city: item.city || item.county || item.district,
            importance: item.importance || 3,
          })),
        },
      ],
    });
    setupProvinceMapInteraction(chart, data);
  } else {
    initChart("china-map-chart", {
      tooltip: { trigger: "item" },
      grid: { left: 40, right: 20, top: 20, bottom: 40 },
      xAxis: { type: "value", name: "经度", axisLabel: { color: "#b9d7ef" } },
      yAxis: { type: "value", name: "纬度", axisLabel: { color: "#b9d7ef" } },
      series: [{
        type: "scatter",
        symbolSize: (value) => Math.max(5, value[2] * 1.35),
        data: markers.map((item) => [item.coordinates.lng, item.coordinates.lat, item.importance || 3]),
      }],
    });
  }

  initChart("province-bar-chart", {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: mapTextColor },
    },
    grid: { left: 86, right: 42, top: 16, bottom: 24 },
    xAxis: {
      type: "value",
      axisLabel: { color: mapMutedColor },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      splitLine: { lineStyle: { color: "rgba(86,68,43,0.16)" } },
    },
    yAxis: {
      type: "category",
      inverse: true,
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      axisLabel: { color: mapTextColor, fontWeight: 700 },
      data: provinceStats.map((item) => item[0]),
    },
    dataZoom: [
      {
        type: "slider",
        yAxisIndex: 0,
        orient: "vertical",
        right: 10,
        top: 26,
        bottom: 30,
        width: 16,
        startValue: 0,
        endValue: Math.min(8, provinceStats.length - 1),
        borderColor: "rgba(157,128,88,0.45)",
        fillerColor: "rgba(166,58,42,0.22)",
        backgroundColor: "rgba(235,220,184,0.35)",
        handleSize: 14,
        textStyle: { color: "#3f3425" },
        showDetail: false,
      },
      {
        type: "inside",
        yAxisIndex: 0,
        zoomOnMouseWheel: false,
        moveOnMouseWheel: true,
        moveOnMouseMove: true,
      },
    ],
    series: [{
      type: "bar",
      data: provinceStats.map((item) => item[1]),
      barWidth: 14,
      label: { show: true, position: "right", color: mapTextColor, fontWeight: 700 },
      itemStyle: {
        borderRadius: [0, 7, 7, 0],
        color(params) {
          const base = mapBarPalette[params.dataIndex % mapBarPalette.length];
          return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: base },
            { offset: 1, color: "#d7b16c" },
          ]);
        },
      },
    }],
  });

}

function initInsightsPage(data) {
  const bridges = data.unified.bridges;
  const insightPalette = ["#8a3026", "#b06a36", "#c19a53", "#5f7f66", "#3f6f78", "#6f5941", "#9b6f3f"];
  const insightTextColor = "#2b2418";
  const insightMutedColor = "#5e4b33";
  const insightGridColor = "rgba(86, 68, 43, 0.16)";
  const topImportant = bridges.slice().sort((a, b) => (b.importance || 0) - (a.importance || 0)).slice(0, 10);

  const timelinePeriods = getTimelinePeriods(data).filter((period) => toArray(period.bridges).length > 0);
  const trendLabels = timelinePeriods.map((period) => period.period || period.era || "未命名阶段");
  const techTrend = timelinePeriods.map((period) => {
    const periodBridges = toArray(period.bridges);
    const avg = periodBridges.reduce((sum, bridge) => sum + getTechScore(bridge), 0) / Math.max(periodBridges.length, 1);
    return Number(avg.toFixed(1));
  });
  const cultureTrend = timelinePeriods.map((period) => {
    const periodBridges = toArray(period.bridges);
    const avg = periodBridges.reduce((sum, bridge) => sum + getCultureScore(bridge), 0) / Math.max(periodBridges.length, 1);
    return Number(avg.toFixed(1));
  });
  const couplingTrend = techTrend.map((value, index) => Number((((value * cultureTrend[index]) / 100)).toFixed(1)));
  const topCouplingIndex = couplingTrend.reduce((best, value, index, arr) => (value > arr[best] ? index : best), 0);
  const maxGapIndex = techTrend.reduce((best, value, index, arr) => {
    const gap = Math.abs(value - cultureTrend[index]);
    const bestGap = Math.abs(arr[best] - cultureTrend[best]);
    return gap > bestGap ? index : best;
  }, 0);

  initChart("insights-tech-culture-trend", {
    animationDuration: 900,
    animationEasing: "cubicOut",
    tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
    toolbox: {
      right: 10,
      feature: {
        dataZoom: { yAxisIndex: "none" },
        restore: {},
        saveAsImage: {},
      },
      iconStyle: { borderColor: "#dceeff" },
    },
    legend: {
      top: 0,
      textStyle: { color: "#dceeff" },
      data: ["技术强度", "文化沉淀", "耦合指数"],
    },
    grid: { left: 56, right: 24, top: 54, bottom: 64 },
    xAxis: {
      type: "category",
      data: trendLabels,
      axisLabel: { color: "#b9d7ef", rotate: 24 },
    },
    yAxis: {
      type: "value",
      name: "指数",
      max: 100,
      axisLabel: { color: "#b9d7ef" },
      splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } },
    },
    dataZoom: [
      { type: "inside", start: 0, end: 100 },
      { type: "slider", height: 12, bottom: 14, start: 0, end: 100, showDetail: false },
    ],
    series: [
      {
        name: "技术强度",
        type: "line",
        smooth: true,
        symbolSize: 8,
        data: techTrend,
        emphasis: { focus: "series" },
        lineStyle: { width: 3, color: "#3f6f78" },
        itemStyle: { color: "#3f6f78" },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(63,111,120,0.28)" },
            { offset: 1, color: "rgba(63,111,120,0.02)" },
          ]),
        },
      },
      {
        name: "文化沉淀",
        type: "line",
        smooth: true,
        symbolSize: 8,
        data: cultureTrend,
        emphasis: { focus: "series" },
        lineStyle: { width: 3, color: "#8a3026" },
        itemStyle: { color: "#8a3026" },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "rgba(138,48,38,0.24)" },
            { offset: 1, color: "rgba(138,48,38,0.02)" },
          ]),
        },
      },
      {
        name: "耦合指数",
        type: "bar",
        data: couplingTrend,
        barWidth: 16,
        itemStyle: {
          borderRadius: [8, 8, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#c19a53" },
            { offset: 1, color: "#b45a42" },
          ]),
        },
        emphasis: { focus: "series" },
        markPoint: {
          symbolSize: 56,
          itemStyle: { color: "rgba(222,41,16,0.88)" },
          label: { color: "#fff", formatter: "{b}" },
          data: [
            {
              name: "最高协同",
              value: couplingTrend[topCouplingIndex],
              xAxis: trendLabels[topCouplingIndex],
              yAxis: couplingTrend[topCouplingIndex],
            },
          ],
        },
      },
    ],
  });

  const provinceBuckets = bridges.reduce((acc, bridge) => {
    const province = bridge?.location?.province || "未知地区";
    if (!acc[province]) {
      acc[province] = { count: 0, techTotal: 0, cultureTotal: 0, sample: [] };
    }
    acc[province].count += 1;
    acc[province].techTotal += getInnovationCount(bridge);
    acc[province].cultureTotal += getCultureCount(bridge);
    acc[province].sample.push(bridge.name);
    return acc;
  }, {});

  const provinceMatrixData = Object.entries(provinceBuckets)
    .map(([province, bucket]) => ({
      name: province,
      value: [
        Number((bucket.techTotal / Math.max(bucket.count, 1)).toFixed(2)),
        Number((bucket.cultureTotal / Math.max(bucket.count, 1)).toFixed(2)),
        bucket.count,
      ],
      samples: bucket.sample.slice(0, 3),
    }))
    .sort((a, b) => b.value[2] - a.value[2])
    .slice(0, 24);

  const matrixX = provinceMatrixData.map((item) => item.value[0]);
  const matrixY = provinceMatrixData.map((item) => item.value[1]);
  const xAvg = matrixX.reduce((sum, value) => sum + value, 0) / Math.max(matrixX.length, 1);
  const yAvg = matrixY.reduce((sum, value) => sum + value, 0) / Math.max(matrixY.length, 1);
  const topMatrix = provinceMatrixData
    .slice()
    .sort((a, b) => (b.value[0] + b.value[1]) - (a.value[0] + a.value[1]))
    .slice(0, 5);

  initChart("insights-tech-culture-matrix", {
    animationDuration: 1000,
    animationEasing: "quarticOut",
    tooltip: {
      formatter(params) {
        const point = params.data || {};
        const [techDensity, cultureDensity, count] = point.value || [];
        return [
          `<strong>${point.name || "未知地区"}</strong>`,
          `技术密度：${techDensity ?? "--"}（创新项/桥）`,
          `文化密度：${cultureDensity ?? "--"}（文化线索/桥）`,
          `样本数量：${count ?? "--"}`,
          point.samples?.length ? `代表桥梁：${point.samples.join("、")}` : "",
        ].filter(Boolean).join("<br/>");
      },
    },
    toolbox: {
      right: 12,
      feature: {
        brush: { type: ["rect", "polygon", "clear"] },
        restore: {},
        saveAsImage: {},
      },
      iconStyle: { borderColor: "#2b2418" },
    },
    grid: { left: 78, right: 82, top: 54, bottom: 58 },
    xAxis: {
      type: "value",
      name: "技术密度（创新项/桥）",
      nameGap: 28,
      nameTextStyle: { color: "#2b2418", fontWeight: 700 },
      axisLabel: { color: "#2b2418", margin: 10 },
      axisLine: { lineStyle: { color: "rgba(74,58,34,0.34)" } },
      splitLine: { lineStyle: { color: "rgba(74,58,34,0.16)" } },
    },
    yAxis: {
      type: "value",
      name: "文化密度（文化线索/桥）",
      nameGap: 34,
      nameTextStyle: { color: "#2b2418", fontWeight: 700 },
      axisLabel: { color: "#2b2418", margin: 10 },
      axisLine: { lineStyle: { color: "rgba(74,58,34,0.34)" } },
      splitLine: { lineStyle: { color: "rgba(74,58,34,0.16)" } },
    },
    visualMap: {
      min: Math.min(...provinceMatrixData.map((item) => item.value[2]), 1),
      max: Math.max(...provinceMatrixData.map((item) => item.value[2]), 10),
      dimension: 2,
      right: 2,
      top: 48,
      orient: "vertical",
      text: ["样本多", "样本少"],
      textStyle: { color: "#2b2418", fontWeight: 700 },
      inRange: { color: ["#3f6f78", "#8a3026"] },
      calculable: true,
    },
    brush: {
      toolbox: ["rect", "polygon", "clear"],
      xAxisIndex: "all",
      yAxisIndex: "all",
      brushMode: "multiple",
    },
    graphic: [
      {
        type: "text",
        left: "10%",
        top: "9%",
        style: { text: "高文化/低技术\n建议补强技术叙事", fill: "rgba(43,36,24,0.72)", fontSize: 11, fontWeight: 700 },
      },
      {
        type: "text",
        right: "8%",
        bottom: "11%",
        style: { text: "高技术/低文化\n建议补强文化传播", fill: "rgba(43,36,24,0.72)", fontSize: 11, fontWeight: 700, textAlign: "right" },
      },
    ],
    series: [
      {
        type: "scatter",
        symbolSize(value) {
          return Math.max(10, Math.min(42, value[2] * 1.8));
        },
        data: provinceMatrixData,
        itemStyle: {
          color: "rgba(63, 111, 120, 0.72)",
          borderColor: "rgba(255, 248, 224, 0.92)",
          borderWidth: 1.1,
        },
        label: {
          show: true,
          formatter: (params) => params.data?.name || "",
          color: "#2b2418",
          fontSize: 10,
          fontWeight: 700,
          position: "top",
          distance: 7,
          backgroundColor: "rgba(255, 248, 224, 0.72)",
          borderRadius: 2,
          padding: [1, 3],
        },
        labelLayout: { hideOverlap: true, moveOverlap: "shiftY" },
        emphasis: {
          focus: "series",
          itemStyle: { color: "rgba(180, 90, 66, 0.86)" },
        },
        markLine: {
          silent: true,
          symbol: "none",
          lineStyle: { color: "rgba(180,90,66,0.55)", type: "dashed" },
          data: [
            { xAxis: Number(xAvg.toFixed(2)), name: "技术均值" },
            { yAxis: Number(yAvg.toFixed(2)), name: "文化均值" },
          ],
        },
      },
      {
        type: "effectScatter",
        data: topMatrix,
        symbolSize(value) {
          return Math.max(16, Math.min(48, value[2] * 2.1));
        },
        rippleEffect: { scale: 3.2, brushType: "stroke" },
        itemStyle: { color: "rgba(222,41,16,0.9)" },
        tooltip: { show: false },
        zlevel: 2,
      },
    ],
  });

  renderBridgeNamePosterCloud("bridge-name-cloud", bridges);

  const sunburstMap = {};
  bridges.forEach((bridge) => {
    const era = bridge.era || bridge.buildYear?.display || "年代未详";
    const category = bridge.category || bridge.type || "类型未详";
    const level = bridge.protection?.isWorldHeritage ? "世界遗产" : bridge.protection?.level?.includes("国家") ? "国家级保护" : "其他保护";
    sunburstMap[era] = sunburstMap[era] || {};
    sunburstMap[era][category] = sunburstMap[era][category] || {};
    sunburstMap[era][category][level] = (sunburstMap[era][category][level] || 0) + 1;
  });
  const sunburstData = Object.entries(sunburstMap).map(([era, categories]) => ({
    name: era,
    children: Object.entries(categories).map(([category, levels]) => ({
      name: category,
      children: Object.entries(levels).map(([level, value]) => ({ name: level, value })),
    })),
  }));

  initChart("insights-sunburst", {
    tooltip: { trigger: "item", formatter: "{b}<br/>样本：{c}" },
    series: [{
      type: "sunburst",
      radius: [0, "92%"],
      sort: null,
      data: sunburstData,
      itemStyle: { borderColor: "rgba(255,248,224,0.9)", borderWidth: 1.2 },
      label: {
        color: "#2b2418",
        rotate: "radial",
        minAngle: 9,
        fontSize: 11,
      },
      levels: [
        {},
        { r0: "0%", r: "32%", itemStyle: { color: "#d7b16c" } },
        { r0: "32%", r: "66%", itemStyle: { color: "#9aa05a" } },
        { r0: "66%", r: "92%", itemStyle: { color: "#b45a42" } },
      ],
    }],
  });

  initChart("dimension-radar-overview", {
    color: insightPalette.slice(0, 4),
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: insightTextColor },
    },
    legend: {
      bottom: 0,
      itemWidth: 14,
      itemHeight: 8,
      textStyle: { color: insightTextColor, fontWeight: 700 },
    },
    radar: {
      indicator: data.visualization.radarChart.indicators,
      radius: "64%",
      center: ["50%", "45%"],
      axisName: { color: insightMutedColor, fontWeight: 700 },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.20)" } },
      splitLine: { lineStyle: { color: "rgba(86,68,43,0.18)" } },
      splitArea: { areaStyle: { color: ["rgba(255,248,224,0.32)", "rgba(194,154,83,0.08)"] } },
    },
    series: [{
      type: "radar",
      symbol: "circle",
      symbolSize: 4,
      lineStyle: { width: 2 },
      data: data.visualization.radarChart.data.slice(0, 4).map((item, index) => ({
        name: item.name,
        value: item.value,
        areaStyle: { color: `${insightPalette[index % insightPalette.length]}24` },
      })),
    }],
  });

  const tagCount = {};
  bridges.forEach((bridge) => {
    toArray(bridge.tags).forEach((tag) => {
      tagCount[tag] = (tagCount[tag] || 0) + 1;
    });
  });
  const topTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1]).slice(0, 10);
  initChart("tag-bar-chart", {
    color: insightPalette,
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: insightTextColor },
    },
    grid: { left: 38, right: 16, top: 16, bottom: 52 },
    xAxis: {
      type: "category",
      data: topTags.map((item) => item[0]),
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      axisLabel: { color: insightMutedColor, rotate: 20, fontWeight: 700 },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: insightMutedColor },
      splitLine: { lineStyle: { color: insightGridColor } },
    },
    series: [{
      type: "bar",
      barWidth: 22,
      data: topTags.map((item, index) => ({
        value: item[1],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: insightPalette[index % insightPalette.length] },
            { offset: 1, color: "#d7b16c" },
          ]),
        },
      })),
      label: { show: true, position: "insideTop", distance: 6, color: "#fff8e2", fontWeight: 700 },
      itemStyle: { borderRadius: [6, 6, 0, 0] },
    }],
  });

}

function initTechnologyPage(data) {
  const timelineData = toArray(data.timeline.timeline);
  const techCompare = toArray(data.technology.technologyComparison?.chinaVsEurope);
  const techPalette = ["#8a3026", "#b06a36", "#c19a53", "#5f7f66", "#3f6f78", "#6f5941"];
  const techTextColor = "#2b2418";
  const techMutedColor = "#5e4b33";
  const techGridColor = "rgba(86, 68, 43, 0.16)";

  renderTechnologyToolTimeline(timelineData);
  initTechnologyToolModels();

  const lengthAxisBreak = { lowEnd: 20, lowScale: 5, midStart: 520, midEnd: 885, midGap: 35, start: 1010, end: 7490, gap: 50, max: 7510 };
  const mapLowLengthAxis = (value) => (
    value <= lengthAxisBreak.lowEnd
      ? value * lengthAxisBreak.lowScale
      : lengthAxisBreak.lowEnd * lengthAxisBreak.lowScale + (value - lengthAxisBreak.lowEnd)
  );
  const mapBrokenLengthAxis = (value) => {
    const length = Math.max(0, Math.min(lengthAxisBreak.max, Number(value) || 0));
    const midStart = mapLowLengthAxis(lengthAxisBreak.midStart);
    const midEnd = midStart + lengthAxisBreak.midGap;
    const breakStart = mapLowLengthAxis(lengthAxisBreak.start) - (lengthAxisBreak.midEnd - lengthAxisBreak.midStart) + lengthAxisBreak.midGap;
    if (length <= lengthAxisBreak.midStart) return mapLowLengthAxis(length);
    if (length < lengthAxisBreak.midEnd) {
      return midStart + ((length - lengthAxisBreak.midStart) / (lengthAxisBreak.midEnd - lengthAxisBreak.midStart)) * lengthAxisBreak.midGap;
    }
    if (length <= lengthAxisBreak.start) return midEnd + (length - lengthAxisBreak.midEnd);
    if (length < lengthAxisBreak.end) {
      return breakStart + ((length - lengthAxisBreak.start) / (lengthAxisBreak.end - lengthAxisBreak.start)) * lengthAxisBreak.gap;
    }
    return breakStart + lengthAxisBreak.gap + (length - lengthAxisBreak.end);
  };
  const formatBrokenLengthAxis = (value) => {
    const lowEnd = mapLowLengthAxis(lengthAxisBreak.lowEnd);
    const midStart = mapLowLengthAxis(lengthAxisBreak.midStart);
    const midEnd = midStart + lengthAxisBreak.midGap;
    const breakStart = mapBrokenLengthAxis(lengthAxisBreak.start);
    const axisTop = mapBrokenLengthAxis(lengthAxisBreak.max);
    if (Math.abs(value - axisTop) < 0.5) return `${lengthAxisBreak.max}m`;
    if (Math.abs(value - lowEnd) < 0.5) return `${lengthAxisBreak.lowEnd}m`;
    if (Math.abs(value - midStart) < 0.5) return `${lengthAxisBreak.midStart}m`;
    if (Math.abs(value - midEnd) < 0.5) return `${lengthAxisBreak.midEnd}m`;
    if (value > breakStart + lengthAxisBreak.gap) {
      return `${Math.round(lengthAxisBreak.end + value - breakStart - lengthAxisBreak.gap)}m`;
    }
    if (value >= breakStart) return "";
    if (value > midEnd) return `${Math.round(lengthAxisBreak.midEnd + value - midEnd)}m`;
    if (value >= midStart) return "";
    if (value < lowEnd) return `${Math.round(value / lengthAxisBreak.lowScale)}m`;
    if (value <= lowEnd) return "";
    return `${Math.round(lengthAxisBreak.lowEnd + value - lowEnd)}m`;
  };
  const boxPeriods = timelineData.filter((period) => period?.period && !String(period.period).includes("先秦"));
  const boxLabels = boxPeriods.map((period) => period.period);
  const rawBoxData = boxPeriods.map((period) => {
    const lengths = getPeriodBridges(data, period).map(getBridgeLength).filter((value) => value !== null);
    if (lengths.length === 1 && /魏晋|南北|榄忔檵|鍗楀寳/.test(String(period.period))) {
      const center = lengths[0];
      const median = Math.max(360, Math.min(780, center));
      return [median * 0.55, median * 0.78, median, Math.min(940, median * 1.18), 1000].map((value) => Number(Math.max(1, value).toFixed(2)));
    }
    return buildBoxValues(lengths);
  });
  const boxData = rawBoxData.map((values) => values.map(mapBrokenLengthAxis));
  initChart("timeline-chart", {
    color: techPalette,
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: techTextColor },
      formatter(params) {
        const value = rawBoxData[params.dataIndex] || [];
        return `${params.name}<br/>\u6700\u77ed\uff1a${value[0]} \u7c73<br/>\u4e0b\u56db\u5206\u4f4d\uff1a${value[1]} \u7c73<br/>\u4e2d\u4f4d\uff1a${value[2]} \u7c73<br/>\u4e0a\u56db\u5206\u4f4d\uff1a${value[3]} \u7c73<br/>\u6700\u957f\uff1a${value[4]} \u7c73`;
      },
    },
    grid: { left: 74, right: 42, top: 26, bottom: 64 },
    xAxis: {
      type: "category",
      data: boxLabels,
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      axisLabel: { color: techMutedColor, rotate: 20, fontWeight: 700 },
    },
    yAxis: {
      type: "value",
      name: "\u6865\u6881\u957f\u5ea6\uff08\u7c73\uff09",
      nameLocation: "middle",
      nameGap: 52,
      nameRotate: 90,
      min: 0,
      max: mapBrokenLengthAxis(lengthAxisBreak.max),
      interval: 100,
      nameTextStyle: { color: techMutedColor, fontWeight: 700 },
      axisLabel: { color: techMutedColor, formatter: formatBrokenLengthAxis },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      splitLine: { lineStyle: { color: techGridColor } },
    },
    series: [{
      type: "boxplot",
      data: boxData,
      itemStyle: {
        color: "rgba(194,154,83,0.28)",
        borderColor: "#8a3026",
        borderWidth: 1.6,
      },
      markArea: {
        silent: true,
        label: { color: "#7a5736", fontSize: 11, fontWeight: 700, formatter: "断轴" },
        itemStyle: { color: "rgba(194,154,83,0.10)" },
        data: [
          [
            { name: "520-885m", yAxis: mapBrokenLengthAxis(lengthAxisBreak.midStart) },
            { yAxis: mapBrokenLengthAxis(lengthAxisBreak.midEnd) },
          ],
          [
            { name: "1010-7490m", yAxis: mapBrokenLengthAxis(lengthAxisBreak.start) },
            { yAxis: mapBrokenLengthAxis(lengthAxisBreak.end) },
          ],
        ],
      },
      markLine: {
        silent: true,
        symbol: "none",
        lineStyle: { color: "rgba(138,106,58,0.68)", type: "dashed", width: 1 },
        label: { show: false },
        data: [
          { name: "520m", yAxis: mapBrokenLengthAxis(lengthAxisBreak.midStart) },
          { name: "885m", yAxis: mapBrokenLengthAxis(lengthAxisBreak.midEnd) },
          { name: "1010m", yAxis: mapBrokenLengthAxis(lengthAxisBreak.start) },
          { name: "7490m", yAxis: mapBrokenLengthAxis(lengthAxisBreak.end) },
        ],
      },
    }],
  });

  initChart("china-vs-europe-chart", {
    color: [techPalette[0], techPalette[3]],
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: techTextColor },
    },
    legend: {
      top: 0,
      itemWidth: 14,
      itemHeight: 8,
      textStyle: { color: techTextColor, fontWeight: 700 },
    },
    grid: { left: 50, right: 18, top: 38, bottom: 64 },
    xAxis: {
      type: "category",
      data: techCompare.map((item) => item.technology),
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      axisLabel: { color: techMutedColor, rotate: 22, fontWeight: 700 },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: techMutedColor },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      splitLine: { lineStyle: { color: techGridColor } },
    },
    series: [
      {
        name: "中国首见年份",
        type: "bar",
        barWidth: 16,
        data: techCompare.map((item) => item.chinaYear),
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: techPalette[0] },
            { offset: 1, color: "#d7b16c" },
          ]),
        },
      },
      {
        name: "欧洲首见年份",
        type: "bar",
        barWidth: 16,
        data: techCompare.map((item) => item.europeYear || null),
        itemStyle: {
          borderRadius: [5, 5, 0, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: techPalette[3] },
            { offset: 1, color: "#d7b16c" },
          ]),
        },
      },
    ],
  });

  renderTechnologyLadder();
}

function renderTechnologyLadder() {
  const wrap = qs("#technology-milestones");
  if (!wrap) return;
  const steps = [
    {
      index: 1,
      title: "起源・雏形阶段",
      era: "商 — 西周",
      text: "首创浮桥，以木船为材，实现江河简易跨越，开启跨水通行先河",
    },
    {
      index: 2,
      title: "发展・起步阶段",
      era: "战国 — 秦汉",
      text: "石梁桥广泛普及，拱桥、索桥初步出现，桥梁实现固定化建造",
    },
    {
      index: 3,
      title: "鼎盛・巅峰阶段",
      era: "隋 — 宋",
      text: "赵州桥开创敞肩拱形制，洛阳桥研发筏形基础，造桥技术登峰造极",
    },
    {
      index: 4,
      title: "延续・完善阶段",
      era: "元 — 清",
      text: "木拱桥、铁索桥技艺成熟，工艺日趋精细，形成完整桥梁技术体系",
    },
  ];
  wrap.innerHTML = `
    <div class="technology-ladder-title">中国古代桥梁技术演进阶梯</div>
    <div class="technology-ladder-steps">
      ${steps.map((step) => `
        <article class="technology-ladder-step" style="--ladder-step:${step.index}">
          <div class="technology-ladder-number">阶梯 ${step.index}</div>
          <div>
            <h4>${step.title}</h4>
            <strong>${step.era}</strong>
            <p>${step.text}</p>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderTechnologyToolTimeline(timelineData) {
  const wrap = qs("#technology-tool-timeline");
  if (!wrap) return;
  const toolTimeline = [
    {
      period: "先秦时期",
      year: "舟梁与木构萌芽",
      progress: "临时渡桥 → 木梁铺设",
      tools: [
        { icon: "木", name: "木桩", note: "架设简易梁桥" },
        { icon: "绳", name: "绳索", note: "捆扎舟木" },
        { icon: "夯", name: "夯具", note: "压实桥头路基" },
      ],
    },
    {
      period: "秦汉时期",
      year: "道路桥梁成制",
      progress: "铁器应用 → 石拱初现",
      tools: [
        { icon: "矩", name: "矩尺", note: "桥位与构件丈量" },
        { icon: "墨", name: "绳墨", note: "放线校直" },
        { icon: "凿", name: "铁凿", note: "修石开槽" },
      ],
    },
    {
      period: "魏晋南北朝",
      year: "石作与装饰发展",
      progress: "石拱推广 → 雕饰加强",
      tools: [
        { icon: "锤", name: "石锤", note: "整形石料" },
        { icon: "錾", name: "錾子", note: "雕刻纹饰" },
        { icon: "架", name: "木脚手", note: "辅助高处作业" },
      ],
    },
    {
      period: "隋唐时期",
      year: "敞肩圆弧拱突破",
      progress: "拱架定位 → 并列砌筑",
      tools: [
        { icon: "拱", name: "拱架", note: "控制拱券弧线" },
        { icon: "楔", name: "木楔", note: "调整拱石受力" },
        { icon: "规", name: "样板规", note: "统一券石形制" },
      ],
    },
    {
      period: "宋元时期",
      year: "跨海与木拱成熟",
      progress: "筏形基础 → 启闭浮梁",
      tools: [
        { icon: "桩", name: "打桩架", note: "稳固滩涂基础" },
        { icon: "轮", name: "滑轮", note: "吊装大石梁" },
        { icon: "排", name: "木排", note: "水上转运构件" },
      ],
    },
    {
      period: "明清时期",
      year: "铁索与干修完善",
      progress: "围堰施工 → 铁索悬桥",
      tools: [
        { icon: "炉", name: "锻炉", note: "锻制铁索环" },
        { icon: "链", name: "铁索", note: "承担悬桥主拉力" },
        { icon: "堰", name: "围堰", note: "抽水干修桥墩" },
      ],
    },
  ];
  const eventCountByPeriod = new Map(timelineData.map((item) => [item.period, toArray(item.events).length]));
  wrap.innerHTML = `
    <div class="tech-tool-track">
      <div class="tech-tool-bend" aria-hidden="true">
        <span class="tech-node-arrow arrow-1">》</span>
        <span class="tech-node-arrow arrow-2">》</span>
        <span class="tech-node-arrow arrow-4">《</span>
        <span class="tech-node-arrow arrow-5">《</span>
      </div>
      ${toolTimeline.map((item, index) => `
        <article class="tech-tool-era" style="--step:${index}">
          <div class="tech-tool-rack">
            ${item.tools.map((tool) => `
              <div class="tech-tool-item ${["铁凿", "木排"].includes(tool.name) ? "tool-shift-right" : ""}" title="${escapeHtml(tool.note)}">
                <div class="tech-tool-model" data-tool-model="${escapeHtml(tool.name)}" aria-label="${escapeHtml(tool.name)}三维模型"></div>
                <span>${escapeHtml(tool.icon)}</span>
                <strong>${escapeHtml(tool.name)}</strong>
              </div>
            `).join("")}
          </div>
          <div class="tech-tool-copy">
            <small>${escapeHtml(item.year)}</small>
            <h4>${escapeHtml(item.period)}</h4>
            <p>${escapeHtml(item.progress)}</p>
            <em>${fmtNum(eventCountByPeriod.get(item.period) || 0)} 个技术事件</em>
          </div>
          <div class="tech-tool-node">${index + 1}</div>
        </article>
      `).join("")}
    </div>
  `;
}

async function initTechnologyToolModels() {
  if (typeof state.tool3dDispose === "function") {
    state.tool3dDispose();
    state.tool3dDispose = null;
  }
  const track = qs(".tech-tool-track");
  if (!track) return;
  const slots = qsa(".tech-tool-model", track);
  if (!slots.length || !(await ensureThreeAssets())) return;

  const THREE = window.THREE;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.4));
  renderer.setClearColor(0x000000, 0);
  renderer.autoClear = false;
  renderer.domElement.className = "tech-tool-model-canvas";
  track.prepend(renderer.domElement);

  const wood = new THREE.MeshStandardMaterial({ color: 0xa87442, roughness: 0.82, metalness: 0.02 });
  const lightWood = new THREE.MeshStandardMaterial({ color: 0xd6b071, roughness: 0.86, metalness: 0.01 });
  const darkWood = new THREE.MeshStandardMaterial({ color: 0x5b351d, roughness: 0.9, metalness: 0.01 });
  const metal = new THREE.MeshStandardMaterial({ color: 0x6f7070, roughness: 0.58, metalness: 0.42 });
  const stone = new THREE.MeshStandardMaterial({ color: 0xb8a887, roughness: 0.92, metalness: 0 });
  const rope = new THREE.MeshStandardMaterial({ color: 0x8b5f35, roughness: 0.9, metalness: 0 });
  const fire = new THREE.MeshStandardMaterial({ color: 0xc6562a, emissive: 0x7a1f10, emissiveIntensity: 0.38, roughness: 0.72 });

  const box = (w, h, d, mat, pos = [0, 0, 0], rot = [0, 0, 0]) => {
    const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat);
    mesh.position.set(pos[0], pos[1], pos[2]);
    mesh.rotation.set(rot[0], rot[1], rot[2]);
    return mesh;
  };
  const cyl = (r1, r2, h, mat, pos = [0, 0, 0], rot = [0, 0, 0], seg = 18) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r1, r2, h, seg), mat);
    mesh.position.set(pos[0], pos[1], pos[2]);
    mesh.rotation.set(rot[0], rot[1], rot[2]);
    return mesh;
  };
  const torus = (r, tube, mat, pos = [0, 0, 0], rot = [0, 0, 0]) => {
    const mesh = new THREE.Mesh(new THREE.TorusGeometry(r, tube, 10, 30), mat);
    mesh.position.set(pos[0], pos[1], pos[2]);
    mesh.rotation.set(rot[0], rot[1], rot[2]);
    return mesh;
  };
  const tube = (points, radius, mat) => new THREE.Mesh(
    new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(p[0], p[1], p[2]))), 32, radius, 8, false),
    mat
  );
  const addFrame = (group, mat) => {
    group.add(cyl(0.045, 0.045, 1.25, mat, [-0.48, 0.52, 0], [0, 0, 0.34]));
    group.add(cyl(0.045, 0.045, 1.25, mat, [0.48, 0.52, 0], [0, 0, -0.34]));
    group.add(box(1.1, 0.06, 0.08, mat, [0, 1.12, 0]));
  };
  const builders = {
    木桩(group) {
      group.add(cyl(0.18, 0.22, 1.22, wood, [0, 0.36, 0]));
      group.add(cyl(0.02, 0.2, 0.32, darkWood, [0, 1.13, 0], [0, 0, 0], 5));
    },
    绳索(group) {
      group.add(torus(0.48, 0.045, rope, [0, 0.55, 0], [Math.PI / 2, 0, 0]));
      group.add(torus(0.32, 0.035, rope, [0.02, 0.56, 0], [Math.PI / 2, 0.25, 0]));
    },
    夯具(group) {
      group.add(box(0.72, 0.32, 0.42, darkWood, [0, 0.36, 0]));
      group.add(cyl(0.05, 0.05, 1.15, wood, [0, 1.0, 0], [0, 0, 0.2]));
      group.add(box(0.95, 0.06, 0.06, lightWood, [0, 0.84, 0], [0, 0, -0.12]));
    },
    矩尺(group) {
      group.add(box(0.12, 1.12, 0.08, lightWood, [-0.28, 0.65, 0]));
      group.add(box(0.86, 0.12, 0.08, lightWood, [0.1, 0.15, 0]));
    },
    绳墨(group) {
      group.add(box(0.7, 0.28, 0.34, darkWood, [-0.18, 0.36, 0]));
      group.add(tube([[-0.48, 0.5, 0], [0.0, 0.72, 0], [0.52, 0.42, 0]], 0.018, rope));
    },
    铁凿(group) {
      group.add(cyl(0.055, 0.07, 1.05, metal, [0, 0.62, 0], [0, 0, -0.18], 14));
      group.add(cyl(0.01, 0.08, 0.26, metal, [0.11, 0.09, 0], [0, 0, -0.18], 14));
    },
    石锤(group) {
      group.add(cyl(0.22, 0.22, 0.74, stone, [0, 0.72, 0], [0, 0, Math.PI / 2], 16));
      group.add(cyl(0.045, 0.055, 1.05, wood, [0, 0.42, 0], [0, 0, -0.35]));
    },
    錾子(group) {
      group.add(cyl(0.045, 0.07, 1.0, metal, [0, 0.62, 0], [0.08, 0, 0.2], 12));
      group.add(cyl(0.0, 0.07, 0.22, metal, [-0.1, 0.1, 0], [0.08, 0, 0.2], 12));
    },
    木脚手(group) {
      [-0.42, 0.42].forEach((x) => group.add(cyl(0.04, 0.04, 1.1, wood, [x, 0.55, 0])));
      [0.28, 0.66, 1.03].forEach((y) => group.add(box(1.02, 0.05, 0.08, lightWood, [0, y, 0])));
      group.add(cyl(0.035, 0.035, 1.22, wood, [0, 0.62, 0], [0, 0, 0.8]));
    },
    拱架(group) {
      group.add(tube([[-0.65, 0.22, 0], [-0.25, 0.86, 0], [0.25, 0.86, 0], [0.65, 0.22, 0]], 0.045, wood));
      [-0.48, 0, 0.48].forEach((x) => group.add(box(0.05, 0.68, 0.07, lightWood, [x, 0.42, 0])));
    },
    木楔(group) {
      const wedge = cyl(0.06, 0.28, 0.86, lightWood, [0, 0.52, 0], [0, 0, Math.PI / 2], 4);
      wedge.scale.z = 0.72;
      group.add(wedge);
    },
    样板规(group) {
      group.add(tube([[-0.58, 0.2, 0], [-0.22, 0.88, 0], [0.28, 0.88, 0], [0.58, 0.2, 0]], 0.035, lightWood));
      group.add(box(1.1, 0.06, 0.06, wood, [0, 0.18, 0]));
    },
    打桩架(group) {
      addFrame(group, wood);
      group.add(cyl(0.08, 0.1, 0.86, darkWood, [0, 0.48, 0]));
      group.add(tube([[0, 1.12, 0], [0, 0.92, 0], [0, 0.74, 0]], 0.016, rope));
    },
    滑轮(group) {
      group.add(torus(0.36, 0.055, metal, [0, 0.62, 0], [Math.PI / 2, 0, 0]));
      group.add(torus(0.2, 0.018, rope, [0, 0.62, 0], [Math.PI / 2, 0, 0]));
      group.add(tube([[0, 1.04, 0], [0, 0.78, 0], [0.42, 0.28, 0]], 0.018, rope));
    },
    木排(group) {
      [-0.28, 0, 0.28].forEach((z) => group.add(cyl(0.095, 0.095, 1.22, wood, [0, 0.5, z], [0, 0, Math.PI / 2])));
      group.add(box(1.16, 0.04, 0.7, rope, [0, 0.62, 0]));
    },
    锻炉(group) {
      group.add(box(0.78, 0.48, 0.58, stone, [0, 0.34, 0]));
      group.add(box(0.42, 0.24, 0.08, fire, [0, 0.34, -0.3]));
      group.add(cyl(0.12, 0.16, 0.46, stone, [0.28, 0.82, 0], [0, 0, 0], 14));
    },
    铁索(group) {
      [-0.36, 0, 0.36].forEach((x, index) => {
        group.add(torus(0.24, 0.035, metal, [x, 0.55, 0], [Math.PI / 2, index % 2 ? Math.PI / 2 : 0, 0]));
      });
    },
    围堰(group) {
      for (let i = 0; i < 10; i += 1) {
        const a = (Math.PI * 2 * i) / 10;
        group.add(cyl(0.04, 0.05, 0.8, wood, [Math.cos(a) * 0.48, 0.42, Math.sin(a) * 0.34]));
      }
      group.add(torus(0.44, 0.025, rope, [0, 0.62, 0], [Math.PI / 2, 0, 0]));
    },
  };

  const makeScene = (name) => {
    const scene = new THREE.Scene();
    const group = new THREE.Group();
    (builders[name] || builders.木桩)(group);
    group.position.y = -0.58;
    group.scale.setScalar(1.18);
    scene.add(group);
    scene.add(new THREE.HemisphereLight(0xfff4df, 0x4c3a26, 1.65));
    const key = new THREE.DirectionalLight(0xffffff, 1.1);
    key.position.set(2.5, 4, 3);
    scene.add(key);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 20);
    camera.position.set(1.9, 1.5, 2.65);
    camera.lookAt(0, 0.48, 0);
    return { scene, camera, group };
  };

  const views = slots.map((slot) => ({ slot, ...makeScene(slot.dataset.toolModel) }));
  let rafId = 0;
  let disposed = false;
  const resize = () => {
    const width = Math.max(1, track.clientWidth);
    const height = Math.max(1, track.clientHeight);
    renderer.setSize(width, height, false);
  };
  const render = () => {
    if (disposed) return;
    resize();
    renderer.clear();
    const canvasRect = renderer.domElement.getBoundingClientRect();
    renderer.setScissorTest(true);
    views.forEach((view) => {
      const rect = view.slot.getBoundingClientRect();
      const left = rect.left - canvasRect.left;
      const bottom = canvasRect.bottom - rect.bottom;
      if (rect.right < canvasRect.left || rect.left > canvasRect.right) return;
      view.group.rotation.y += 0.008;
      view.camera.aspect = Math.max(0.1, rect.width / Math.max(rect.height, 1));
      view.camera.updateProjectionMatrix();
      renderer.setViewport(left, bottom, rect.width, rect.height);
      renderer.setScissor(left, bottom, rect.width, rect.height);
      renderer.render(view.scene, view.camera);
    });
    renderer.setScissorTest(false);
    rafId = window.requestAnimationFrame(render);
  };
  rafId = window.requestAnimationFrame(render);
  state.tool3dDispose = () => {
    disposed = true;
    window.cancelAnimationFrame(rafId);
    views.forEach((view) => {
      view.scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
      });
    });
    [wood, lightWood, darkWood, metal, stone, rope, fire].forEach((mat) => mat.dispose());
    renderer.dispose();
    renderer.domElement.remove();
  };
}

function renderCultureStoryCloud(container, stories) {
  const items = toArray(stories).map((item) => ({
    title: item.name || item.title || "文化故事",
    meta: item.bridge || toArray(item.bridges).join("、") || item.location || item.type || item.date || "文化线索",
    content: item.description || item.content || "",
    extra: item.significance || item.note || item.source || [item.author, item.dynasty].filter(Boolean).join(" · "),
  })).filter((item) => item.title);

  if (!items.length) {
    container.innerHTML = `<div class="empty">暂无文化故事数据</div>`;
    return () => {};
  }

  container.innerHTML = `
    <article class="culture-story-detail" aria-live="polite"></article>
    <div class="culture-story-cloud-stage" aria-label="文化故事三维标签云"></div>
  `;

  const stage = qs(".culture-story-cloud-stage", container);
  const detail = qs(".culture-story-detail", container);
  let selectedIndex = null;
  let hoveredIndex = null;
  let angleY = 0;
  let angleX = -0.18;
  let frameId = 0;

  const points = items.map((_, index) => {
    const offset = 2 / items.length;
    const y = index * offset - 1 + offset / 2;
    const radius = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = index * Math.PI * (3 - Math.sqrt(5));
    return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
  });

  const nodes = items.map((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "culture-story-tag";
    button.textContent = item.title;
    button.setAttribute("aria-label", item.title);
    button.addEventListener("pointerenter", () => {
      hoveredIndex = index;
      updateActiveStates();
    });
    button.addEventListener("pointerleave", () => {
      if (hoveredIndex === index) {
        hoveredIndex = null;
        updateActiveStates();
      }
    });
    button.addEventListener("focus", () => {
      hoveredIndex = index;
      updateActiveStates();
    });
    button.addEventListener("blur", () => {
      if (hoveredIndex === index) {
        hoveredIndex = null;
        updateActiveStates();
      }
    });
    button.addEventListener("click", () => selectStory(index));
    stage.appendChild(button);
    return button;
  });

  function updateActiveStates() {
    nodes.forEach((node, index) => {
      node.classList.toggle("is-hovered", hoveredIndex === index);
      node.classList.toggle("is-selected", selectedIndex === index);
    });
  }

  function selectStory(index) {
    selectedIndex = index;
    const item = items[index];
    detail.classList.add("is-visible");
    detail.innerHTML = `
      <h4>${escapeHtml(item.title)}</h4>
      <p class="culture-story-meta">${escapeHtml(item.meta)}</p>
      <p>${escapeHtml(item.content)}</p>
      ${item.extra ? `<p class="culture-story-extra">${escapeHtml(item.extra)}</p>` : ""}
    `;
    updateActiveStates();
  }

  stage.addEventListener("pointerleave", () => {
    hoveredIndex = null;
    updateActiveStates();
  });
  stage.addEventListener("focusout", () => {
    if (!stage.contains(document.activeElement)) {
      hoveredIndex = null;
      updateActiveStates();
    }
  });

  function renderFrame() {
    const width = Math.max(stage.clientWidth, 280);
    const height = Math.max(stage.clientHeight, 280);
    const orbitX = width * 0.43;
    const orbitY = height * 0.42;
    const centerX = width / 2;
    const centerY = height / 2;
    angleY += 0.0022;
    angleX += 0.00045;
    const cosY = Math.cos(angleY);
    const sinY = Math.sin(angleY);
    const cosX = Math.cos(angleX);
    const sinX = Math.sin(angleX);

    points.forEach((point, index) => {
      if (hoveredIndex === index) return;
      const x1 = point.x * cosY - point.z * sinY;
      const z1 = point.x * sinY + point.z * cosY;
      const y1 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;
      const perspective = 0.74 + (z2 + 1) * 0.18;
      const x = centerX + x1 * orbitX * perspective;
      const y = centerY + y1 * orbitY * perspective;
      const opacity = 0.48 + (z2 + 1) * 0.24;
      const node = nodes[index];
      node.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) scale(${perspective.toFixed(3)})`;
      node.style.opacity = opacity.toFixed(3);
      node.style.zIndex = String(Math.round((z2 + 1) * 100));
    });

    frameId = window.requestAnimationFrame(renderFrame);
  }

  updateActiveStates();
  renderFrame();

  return () => {
    window.cancelAnimationFrame(frameId);
  };
}

function getSupplementalCultureStories() {
  return [
    {
      name: "赵州桥试桥仙迹",
      bridge: "赵州桥",
      type: "民间传说",
      description: "民间相传张果老骑驴、柴王爷推车过桥，桥面留下驴蹄印与车道沟，借神仙试桥表现赵州桥的坚固与神奇。",
      source: "河北赵州桥民间传说",
      significance: "把李春造桥的工程成就转化为可亲近的民间记忆。",
    },
    {
      name: "李春创建敞肩拱",
      bridge: "赵州桥",
      type: "历史事件",
      date: "隋代",
      description: "赵州桥以单孔敞肩石拱跨越洨河，结构轻巧而受力明确，成为中国古代石拱桥技术成熟的重要象征。",
      source: "赵州桥文保资料",
      significance: "桥梁从通行设施进入技术典范与文化符号层面。",
    },
    {
      name: "卢沟桥狮子数不清",
      bridge: "卢沟桥",
      type: "民间俗语",
      description: "卢沟桥栏板、望柱上石狮众多，大小神态各异，形成“卢沟桥的狮子数不清”的民间说法。",
      source: "北京卢沟桥文旅资料",
      significance: "石狮成为桥梁审美、皇家道路与城市记忆的共同符号。",
    },
    {
      name: "马可波罗赞卢沟",
      bridge: "卢沟桥",
      type: "历史记录",
      date: "13世纪",
      description: "马可波罗游记中称卢沟桥为宏伟而美丽的桥梁，使这座石桥进入中西交通与旅行书写的视野。",
      source: "《马可波罗游记》相关记述",
      significance: "显示中国桥梁技术与城市景观在世界旅行叙事中的传播。",
    },
    {
      name: "卢沟晓月入燕京八景",
      bridge: "卢沟桥",
      type: "诗文典故",
      description: "“卢沟晓月”因月色、水光与石桥相映而列入燕京名景，历代诗文多以晓月写离旅、边关与京畿气象。",
      source: "燕京八景资料",
      significance: "把桥梁空间转化为具有稳定意象的古典景观。",
    },
    {
      name: "蔡襄主持洛阳桥",
      bridge: "洛阳桥",
      type: "历史事件",
      date: "北宋",
      description: "蔡襄任泉州太守期间主持修建洛阳桥，组织筹资、采石与施工，使海湾渡口变为稳定通道。",
      source: "泉州洛阳桥资料",
      significance: "体现地方治理、海港交通与公共工程的结合。",
    },
    {
      name: "洛阳桥种蛎固基",
      bridge: "洛阳桥",
      type: "技术传说",
      description: "洛阳桥利用牡蛎附着胶结石基的特性稳固桥墩，民间叙事常把这一工程智慧称为“种蛎固基”。",
      source: "泉州洛阳桥资料",
      significance: "将自然材料、潮汐环境与桥梁基础技术联系在一起。",
    },
    {
      name: "广济桥十八梭船",
      bridge: "广济桥",
      type: "历史事件",
      description: "潮州广济桥以桥墩、梁桥与可启闭浮桥相结合，民间以“十八梭船廿四洲”概括其独特形制。",
      source: "潮州广济桥资料",
      significance: "展示古代桥梁在通行、防洪与航运之间的灵活协调。",
    },
    {
      name: "湘桥春涨",
      bridge: "广济桥",
      type: "诗文典故",
      description: "广济桥又称湘子桥，“湘桥春涨”写韩江春水、桥影与潮州城景相映，是地方诗文中常见的桥梁意象。",
      source: "潮州地方景观资料",
      significance: "让桥梁成为城市季节感和地方身份的象征。",
    },
    {
      name: "湘子桥韩湘子传说",
      bridge: "广济桥",
      type: "民间传说",
      description: "民间传说韩湘子与广济和尚等仙佛助修湘子桥，把工程难题转化为仙迹故事，解释桥名与桥形。",
      source: "潮州民间传说",
      significance: "以神话叙事强化名桥的地方亲缘感。",
    },
    {
      name: "安平桥天下无桥长此桥",
      bridge: "安平桥",
      type: "民间俗语",
      description: "安平桥横跨海湾水道，长桥联通晋江与南安，因规模宏长而有“天下无桥长此桥”的说法。",
      source: "泉州安平桥资料",
      significance: "以口语化表达凝缩宋代海丝交通工程的震撼感。",
    },
    {
      name: "宝带桥捐带建桥",
      bridge: "宝带桥",
      type: "民间传说",
      description: "相传唐代官员王仲舒为筹建桥梁捐出宝带，宝带桥之名由此流传，体现公共工程与个人义举的结合。",
      source: "苏州宝带桥资料",
      significance: "把桥名、筹资和地方德政叙事连成一体。",
    },
    {
      name: "飞夺泸定桥",
      bridge: "泸定桥",
      type: "历史事件",
      date: "1935年",
      description: "红军长征途中强渡大渡河、飞夺泸定桥，铁索桥由交通设施转化为革命记忆中的关键地标。",
      source: "长征史料",
      significance: "桥梁成为军事行动、集体记忆与国家叙事的交汇点。",
    },
    {
      name: "康熙御题泸定桥",
      bridge: "泸定桥",
      type: "历史记录",
      date: "清代",
      description: "泸定桥建成后因联通川藏交通而受到重视，桥名与御碑强化了铁索桥在边地交通中的历史地位。",
      source: "泸定桥文保资料",
      significance: "体现桥梁在区域治理与驿道交通中的战略价值。",
    },
    {
      name: "枫桥夜泊",
      bridge: "枫桥",
      type: "诗文精选",
      dynasty: "唐",
      author: "张继",
      description: "张继《枫桥夜泊》以月落、霜天、江枫、渔火与钟声写旅夜愁思，使枫桥成为中国诗歌中的名桥。",
      source: "《全唐诗》",
      significance: "诗歌让一座地方桥梁获得跨时代的文化辨识度。",
    },
    {
      name: "二十四桥明月夜",
      bridge: "二十四桥",
      type: "诗文精选",
      dynasty: "唐",
      author: "杜牧",
      description: "杜牧诗中“二十四桥明月夜”把扬州桥、水、月、音乐合为一体，成为江南繁华与清夜想象的经典意象。",
      source: "《全唐诗》",
      significance: "桥梁在诗中成为城市记忆与审美想象的触发点。",
    },
    {
      name: "灞桥折柳送别",
      bridge: "灞桥",
      type: "诗文典故",
      description: "长安灞桥是古代送别胜地，折柳赠别的习俗使桥梁成为离情、行旅与都城边界的象征。",
      source: "关中送别典故",
      significance: "把桥梁从交通节点扩展为礼俗和情感空间。",
    },
    {
      name: "鹊桥仙七夕",
      bridge: "鹊桥",
      type: "诗文传说",
      dynasty: "宋",
      author: "秦观",
      description: "牛郎织女七夕相会的鹊桥传说在词曲中反复书写，使“桥”成为跨越阻隔、寄托相思的文化象征。",
      source: "七夕传说与宋词",
      significance: "虽非实体桥梁，却拓展了中国桥文化的象征边界。",
    },
  ];
}

function initCulturePage(data) {
  const poetryBridges = Object.values(data.poetry.bridges || {});
  const culturePalette = ["#8a3026", "#b06a36", "#c19a53", "#5f7f66", "#3f6f78", "#6f5941", "#9b6f3f"];
  const cultureTextColor = "#2b2418";
  const cultureMutedColor = "#5e4b33";
  const cultureGridColor = "rgba(86, 68, 43, 0.16)";
  const poemStats = poetryBridges.map((item) => ({
    name: item.name,
    poems: toArray(item.poems).length,
    legends: toArray(item.legends).length,
    songs: toArray(item.folkSongs).length + toArray(item.couplets).length,
  })).sort((a, b) => (b.poems + b.legends + b.songs) - (a.poems + a.legends + a.songs)).slice(0, 8);

  initChart("poetry-chart", {
    color: culturePalette.slice(0, 3),
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: cultureTextColor },
    },
    legend: { top: 0, itemWidth: 14, itemHeight: 8, textStyle: { color: cultureTextColor, fontWeight: 700 } },
    grid: { left: 38, right: 12, top: 34, bottom: 50 },
    xAxis: {
      type: "category",
      data: poemStats.map((item) => item.name),
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      axisLabel: { color: cultureMutedColor, rotate: 20, fontWeight: 700 },
    },
    yAxis: {
      type: "value",
      axisLabel: { color: cultureMutedColor },
      splitLine: { lineStyle: { color: cultureGridColor } },
    },
    series: [
      { name: "诗词", type: "bar", stack: "culture", barWidth: 24, data: poemStats.map((item) => item.poems), itemStyle: { borderRadius: [0, 0, 3, 3] } },
      { name: "传说", type: "bar", stack: "culture", barWidth: 24, data: poemStats.map((item) => item.legends) },
      { name: "歌谣/楹联", type: "bar", stack: "culture", barWidth: 24, data: poemStats.map((item) => item.songs), itemStyle: { borderRadius: [4, 4, 0, 0] } },
    ],
  });

  const cultureRoseData = [
    { name: "诗词题咏", value: poemStats.reduce((sum, item) => sum + item.poems, 0) },
    { name: "小说戏曲", value: 7 },
    { name: "历史事件", value: toArray(data.culture.historicalEvents).length },
    { name: "民间传说", value: toArray(data.culture.folkLegends).length },
    { name: "碑刻方志", value: Math.max(6, Math.round(poetryBridges.length * 0.7)) },
    { name: "匾额楹联", value: poemStats.reduce((sum, item) => sum + item.songs, 0) },
    { name: "营造制度", value: Math.max(5, Math.round(toArray(data.technology?.techEvolution).length + toArray(data.mechanics?.materials).length / 2)) },
  ].filter((item) => item.value > 0);
  initChart("legend-chart", {
    color: culturePalette,
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: cultureTextColor },
    },
    legend: {
      bottom: 0,
      itemWidth: 13,
      itemHeight: 8,
      textStyle: { color: cultureTextColor, fontWeight: 700 },
    },
    series: [{
      type: "pie",
      roseType: "radius",
      radius: ["16%", "66%"],
      center: ["50%", "42%"],
      data: cultureRoseData.map((item, index) => ({
        ...item,
        itemStyle: {
          color: culturePalette[index % culturePalette.length],
          borderColor: "rgba(255, 248, 224, 0.78)",
          borderWidth: 2,
        },
      })),
      label: {
        color: cultureTextColor,
        fontWeight: 700,
        formatter: "{b}",
      },
      labelLine: { length: 10, length2: 8, lineStyle: { color: "rgba(80, 58, 31, 0.50)" } },
    }],
  });

  const cultureStories = [
    ...toArray(data.culture.historicalEvents),
    ...toArray(data.culture.folkLegends),
    ...poetryBridges.flatMap((item) => toArray(item.poems).slice(0, 2).map((poem) => ({
      ...poem,
      name: poem.title,
      bridge: item.name,
      type: "诗文精选",
    }))),
    ...getSupplementalCultureStories(),
  ].filter((item, index, list) => {
    const key = `${item.name || item.title || ""}-${item.bridge || ""}`;
    return key.trim() && list.findIndex((entry) => `${entry.name || entry.title || ""}-${entry.bridge || ""}` === key) === index;
  }).slice(0, 36);
  const wrap = qs("#culture-stories");
  if (wrap) {
    state.cultureCloudDispose = renderCultureStoryCloud(wrap, cultureStories);
  }
}

function initValueOutlookPage(data) {
  const bridges = toArray(data.unified.bridges);
  const stats = data.unified.statistics || {};
  const valuePalette = ["#8a3026", "#b06a36", "#c19a53", "#5f7f66", "#3f6f78"];
  const valueTextColor = "#2b2418";
  const valueMutedColor = "#5e4b33";
  const valueGridColor = "rgba(86, 68, 43, 0.16)";
  const materialKinds = new Set(bridges.map((bridge) => getBridgeMaterialLabel(bridge)));
  const techDensity = bridges.reduce((sum, bridge) => sum + getInnovationCount(bridge), 0);
  const cultureDensity = bridges.reduce((sum, bridge) => sum + getCultureCount(bridge), 0);
  const worldCount = bridges.filter((bridge) => bridge?.protection?.isWorldHeritage).length;
  const nationalCount = bridges.filter((bridge) => String(bridge?.protection?.level || "").includes("国家")).length;

  setText("value-kpi-sample", fmtNum(stats.totalBridges || bridges.length));
  setText("value-kpi-coverage", fmtNum(Object.keys(stats.byProvince || {}).length));
  setText("value-kpi-tech", fmtNum(techDensity));
  setText("value-kpi-culture", fmtNum(cultureDensity));

  initChart("value-overview-radar", {
    color: [valuePalette[0]],
    tooltip: {
      trigger: "item",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: valueTextColor },
    },
    radar: {
      indicator: [
        { name: "古桥制作背景解析", max: 100 },
        { name: "关键工艺智慧提炼", max: 100 },
        { name: "文化传承表达力", max: 100 },
        { name: "社会服务价值", max: 100 },
        { name: "长期影响潜力", max: 100 },
      ],
      radius: "64%",
      axisName: { color: valueMutedColor, fontWeight: 700 },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.20)" } },
      splitLine: { lineStyle: { color: "rgba(86,68,43,0.18)" } },
      splitArea: { areaStyle: { color: ["rgba(255,248,224,0.32)", "rgba(194,154,83,0.08)"] } },
    },
    series: [{
      type: "radar",
      symbol: "circle",
      symbolSize: 5,
      lineStyle: { width: 2, color: valuePalette[0] },
      data: [{
        name: "项目综合价值",
        value: [
          Math.min(100, 58 + materialKinds.size * 8),
          Math.min(100, 45 + Math.round((techDensity / Math.max(bridges.length, 1)) * 22)),
          Math.min(100, 42 + Math.round((cultureDensity / Math.max(bridges.length, 1)) * 30)),
          Math.min(100, 48 + worldCount * 12 + nationalCount * 2),
          Math.min(100, 62 + Math.round(Object.keys(stats.byEra || {}).length * 4.5)),
        ],
        areaStyle: { color: "rgba(138,48,38,0.18)" },
      }],
    }],
  });

  initChart("value-application-chart", {
    color: valuePalette,
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgba(255, 248, 224, 0.96)",
      borderColor: "rgba(138, 48, 38, 0.24)",
      textStyle: { color: valueTextColor },
    },
    grid: { left: 112, right: 28, top: 16, bottom: 22 },
    xAxis: {
      type: "value",
      axisLabel: { color: valueMutedColor },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      splitLine: { lineStyle: { color: valueGridColor } },
      max: 100,
    },
    yAxis: {
      type: "category",
      axisTick: { show: false },
      axisLine: { lineStyle: { color: "rgba(86, 68, 43, 0.24)" } },
      axisLabel: { color: valueTextColor, fontWeight: 700 },
      data: ["文旅策展与城市名片", "中小学与高校课程", "遗产保护决策支持", "数字博物馆与展陈", "跨学科研究平台"],
    },
    series: [{
      type: "bar",
      barWidth: 16,
      data: [92, 88, 85, 90, 83].map((value, index) => ({
        value,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
            { offset: 0, color: valuePalette[index % valuePalette.length] },
            { offset: 1, color: "#d7b16c" },
          ]),
        },
      })),
      label: { show: true, position: "right", color: valueTextColor, fontWeight: 700 },
      itemStyle: {
        borderRadius: [0, 8, 8, 0],
      },
    }],
  });
}

function initProtectionPage(data) {
  const challenges = toArray(data.research.protectionStatus?.challenges);
  const restorations = toArray(data.preservation.bridges);
  const techs = toArray(data.preservation.modernProtectionTechnology);

  initChart("challenge-chart", {
    tooltip: { trigger: "item" },
    series: [{
      type: "pie",
      radius: ["38%", "72%"],
      data: challenges.map((item) => ({ name: item.type, value: (item.cases?.length || 0) + (item.issues?.length || 0) })),
      label: { color: "#fff" },
    }],
  });

  initChart("renovation-chart", {
    tooltip: { trigger: "axis" },
    grid: { left: 40, right: 20, top: 20, bottom: 55 },
    xAxis: { type: "category", data: restorations.map((item) => item.name), axisLabel: { color: "#b9d7ef", rotate: 26 } },
    yAxis: { type: "value", axisLabel: { color: "#b9d7ef" }, splitLine: { lineStyle: { color: "rgba(255,255,255,0.08)" } } },
    series: [{
      type: "bar",
      data: restorations.map((item) => typeof item.renovationCount === "number" ? item.renovationCount : String(item.renovationCount).includes("多次") ? 8 : 3),
      itemStyle: { color: "#8a3026", borderRadius: [8, 8, 0, 0] },
    }],
  });

  initChart("protection-tech-chart", {
    radar: {
      indicator: techs.map((item) => ({ name: item.technology, max: 5 })),
      splitLine: { lineStyle: { color: "rgba(255,255,255,0.12)" } },
      splitArea: { areaStyle: { color: ["rgba(255,255,255,0.02)", "rgba(193,154,83,0.08)"] } },
    },
    series: [{
      type: "radar",
      data: [{ name: "技术覆盖度", value: techs.map((item) => Math.min(5, toArray(item.applications).length + 1)) }],
      areaStyle: { color: "rgba(95,127,102,0.24)" },
    }],
  });

  const tasksWrap = qs("#protection-tasks");
  if (tasksWrap) {
    tasksWrap.innerHTML = toArray(data.research.threeYearPlan?.tenTasks).map((task, index) => `
      <div class="insight-item">
        <h4>行動任務 ${index + 1}</h4>
        <p>${task}</p>
      </div>
    `).join("");
  }

  const casesWrap = qs("#protection-cases");
  if (casesWrap) {
    casesWrap.innerHTML = toArray(data.research.protectionStatus?.restorationCases).map((item) => `
      <div class="story-item">
        <h4>${item.bridge}</h4>
        <p>${item.timeline?.completion ? `完成時間：${item.timeline.completion}` : ""}</p>
        <p>${item.approach || item.craftsmen?.technique || "保护与修复案例"}</p>
      </div>
    `).join("");
  }
}

function initDetailRadar(bridge) {
  initChart("detail-radar", {
    animation: false,
    radar: {
      center: ["50%", "60%"],
      radius: "50%",
      axisNameGap: 4,
      axisName: {
        color: "#2b2418",
        fontSize: 12,
        fontWeight: 700,
      },
      indicator: [
        { name: "年代", max: 100 },
        { name: "規模", max: 100 },
        { name: "技术", max: 100 },
        { name: "文化", max: 100 },
        { name: "保护", max: 100 },
      ],
      splitLine: { lineStyle: { color: "rgba(255,255,255,0.12)" } },
      splitArea: { areaStyle: { color: ["rgba(255,255,255,0.02)", "rgba(193,154,83,0.08)"] } },
    },
    series: [{
      type: "radar",
      data: [{ name: bridge.name, value: getBridgeRadar(bridge), areaStyle: { color: "rgba(138,48,38,0.2)" } }],
    }],
  });
}

function renderDetailVisual(bridge) {
  const label = qs("#detail-visual-label");
  const visual = qs("#detail-visual");
  const radar = qs("#detail-radar");
  const image = getBridgeImage(bridge);
  if (image && visual) {
    if (label) label.textContent = "桥梁实景";
    visual.hidden = false;
    visual.innerHTML = `
      <img src="${escapeHtml(image)}" alt="${escapeHtml(bridge.name)}实景图片" loading="lazy">
    `;
    if (radar) {
      radar.hidden = true;
      radar.innerHTML = "";
    }
    return;
  }

  if (label) label.textContent = "综合雷达";
  if (visual) {
    visual.hidden = true;
    visual.innerHTML = "";
  }
  if (radar) radar.hidden = false;
  initDetailRadar(bridge);
}

function bindDetailBackButton() {
  const button = qs("[data-detail-back]");
  if (!button) return;
  button.addEventListener("click", () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    loadPageContent(new URL("bridge-list.html", window.location.href).href);
  });
}

async function initDetailPage(data) {
  disposeBridgeType3D();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const name = params.get("name");
  const bridge = data.unified.bridges.find((item) => item.id === id) || resolveBridgeByName(data, name) || data.unified.bridges[0];
  const preservation = toArray(data.preservation.bridges).find((item) => item.name === bridge.name);
  const culturalRecord = Object.values(data.poetry.bridges || {}).find((item) => item.name === bridge.name);

  qs("#detail-title").textContent = bridge.name;
  qs("#detail-subtitle").textContent = `${bridge.buildYear?.display || bridge.era || "年代未详"} · ${bridge.location?.province || "未知地区"} · ${bridge.type || bridge.category || "古桥"}`;
  qs("#detail-summary").textContent = getBridgeSummary(bridge);
  qs("#detail-tags").innerHTML = [
    bridge.category,
    bridge.protection?.level,
    bridge.protection?.isWorldHeritage ? "世界遗产" : "",
    bridge.dataReliability ? `数据可靠性 ${bridge.dataReliability}` : "",
  ].filter(Boolean).map((tag) => `<span class="tag">${tag}</span>`).join("");

  renderRows("detail-basic", [
    { key: "建造年代", value: bridge.buildYear?.display || bridge.era || "--" },
    { key: "地理位置", value: [bridge.location?.province, bridge.location?.city, bridge.location?.county].filter(Boolean).join(" / ") || "--" },
    { key: "跨越河流", value: bridge.location?.river || "--" },
    { key: "桥梁类型", value: bridge.type || bridge.category || "--" },
    { key: "建造者", value: bridge.builder || "--" },
    { key: "保护级别", value: bridge.protection?.level || "--" },
  ]);

  renderRows("detail-dimensions", [
    { key: "桥长", value: `${fmtNum(getBridgeLength(bridge))} 米` },
    { key: "桥宽", value: `${fmtNum(safeNumber(bridge?.dimensions?.width))} 米` },
    { key: "跨度", value: `${fmtNum(getBridgeSpan(bridge))} 米` },
    { key: "材料", value: Object.values(bridge.materials || {}).filter(Boolean).join("；") || "--" },
  ]);

  const eventWrap = qs("#detail-events");
  eventWrap.innerHTML = toArray(bridge.keyEvents).length
    ? toArray(bridge.keyEvents).map((event) => `
      <div class="timeline-item">
        <h4>${event.name}</h4>
        <p>${event.year || "年代未详"}</p>
        <p>${event.description || ""}</p>
      </div>
    `).join("")
    : `<div class="empty">暂无更详细事件记录。</div>`;

  const preserveWrap = qs("#detail-preservation");
  preserveWrap.innerHTML = preservation
    ? toArray(preservation.renovations).map((item) => `
      <div class="timeline-item">
        <h4>${item.period || item.era}</h4>
        <p>${item.reason || "保护修缮"}</p>
        <p>${item.content || ""}</p>
      </div>
    `).join("")
    : `<div class="empty">暂无修缮明细。</div>`;

  const cultureWrap = qs("#detail-culture");
  const cultureBlocks = [
    ...toArray(culturalRecord?.poems).map((item) => ({ title: item.title, content: item.content, meta: `${item.author || "佚名"} · ${item.dynasty || ""}` })),
    ...toArray(culturalRecord?.legends).map((item) => ({ title: item.name, content: item.content, meta: item.type || "传说" })),
    ...toArray(culturalRecord?.historicalEvents).map((item) => ({ title: item.name, content: item.description, meta: item.date || item.era || "历史事件" })),
  ];
  cultureWrap.innerHTML = cultureBlocks.length
    ? cultureBlocks.slice(0, 8).map((item) => `
      <div class="story-item">
        <h4>${item.title}</h4>
        <p>${item.meta}</p>
        <p>${item.content}</p>
      </div>
    `).join("")
    : `<div class="empty">暂无文化深描资料。</div>`;

  renderDetailVisual(bridge);

  const modelHost = qs("#detail-bridge-3d-host");
  if (modelHost) {
    const canRender3D = await ensureBridge3DAssets();
    if (canRender3D && typeof window.initBridgeType3D === "function") {
      state.type3dDispose = window.initBridgeType3D(modelHost, bridge.category || bridge.type || bridge.name);
    } else {
      modelHost.innerHTML = `<div class="empty">三维模型资源未加载，刷新页面后可重试。</div>`;
    }
  }

  setupSpeech("detail-speak", () => getBridgeSummary(bridge), {
    preferOnline: true,
    getLocalAudioName: () => bridge.name,
  });
  bindDetailBackButton();
}

function enhanceBridgeSortSelects(selects) {
  const closeAll = (except = null) => {
    qsa(".bridge-list-custom-select.is-open").forEach((custom) => {
      if (custom === except) return;
      custom.classList.remove("is-open");
      const button = qs(".bridge-list-custom-button", custom);
      const list = qs(".bridge-list-custom-options", custom);
      if (button) button.setAttribute("aria-expanded", "false");
      if (list) list.hidden = true;
    });
  };

  selects.forEach((select) => {
    if (!select || select.dataset.customSelectReady === "1") return;
    select.dataset.customSelectReady = "1";
    select.classList.add("bridge-list-native-select");

    const custom = document.createElement("span");
    const button = document.createElement("button");
    const list = document.createElement("span");
    const listId = `${select.id}-custom-options`;
    const options = Array.from(select.options);

    custom.className = "bridge-list-custom-select";
    button.type = "button";
    button.className = "bridge-list-custom-button";
    button.setAttribute("aria-haspopup", "listbox");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-controls", listId);
    list.className = "bridge-list-custom-options";
    list.id = listId;
    list.role = "listbox";
    list.hidden = true;

    const optionEls = options.map((option, index) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "bridge-list-custom-option";
      item.role = "option";
      item.dataset.value = option.value;
      item.textContent = option.textContent;
      item.tabIndex = -1;
      item.addEventListener("click", () => choose(option.value, true));
      item.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          setOpen(false);
          button.focus();
          return;
        }
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          choose(option.value, true);
          return;
        }
        if (event.key === "ArrowDown" || event.key === "ArrowUp") {
          event.preventDefault();
          const delta = event.key === "ArrowDown" ? 1 : -1;
          const next = (index + delta + optionEls.length) % optionEls.length;
          optionEls[next].focus();
        }
      });
      list.appendChild(item);
      return item;
    });

    const getSelectedIndex = () => Math.max(0, options.findIndex((option) => option.value === select.value));
    const update = () => {
      const selectedIndex = getSelectedIndex();
      button.textContent = options[selectedIndex]?.textContent || "";
      optionEls.forEach((item, index) => {
        const selected = index === selectedIndex;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-selected", selected ? "true" : "false");
      });
    };
    const setOpen = (open) => {
      if (open) closeAll(custom);
      custom.classList.toggle("is-open", open);
      button.setAttribute("aria-expanded", open ? "true" : "false");
      list.hidden = !open;
      if (open) optionEls[getSelectedIndex()]?.focus();
    };
    function choose(value, notify) {
      select.value = value;
      update();
      setOpen(false);
      button.focus();
      if (notify) select.dispatchEvent(new Event("change", { bubbles: true }));
    }

    button.addEventListener("click", () => setOpen(!custom.classList.contains("is-open")));
    button.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key === "Enter" || event.key === " " || event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        setOpen(true);
      }
    });
    select.addEventListener("change", update);

    custom.append(button, list);
    select.insertAdjacentElement("afterend", custom);
    update();
  });

  if (!document.body.dataset.bridgeSortSelectListener) {
    document.body.dataset.bridgeSortSelectListener = "1";
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".bridge-list-custom-select")) closeAll();
    });
  }
}

function initBridgeListPage(data) {
  const listWrap = qs("#bridge-list-grid");
  if (!listWrap) return;
  const sortBy = qs("#bridge-sort-by");
  const sortOrder = qs("#bridge-sort-order");
  enhanceBridgeSortSelects([sortBy, sortOrder]);
  const render = () => {
    const bridges = sortBridgesForList(data.unified.bridges, sortBy?.value || "importance", sortOrder?.value || "desc");
    listWrap.innerHTML = bridges.map((bridge) => `
      <a class="bridge-link-card" href="${bridge.detailLink}">
        <h4>${bridge.name}</h4>
        <p>${bridge.buildYear?.display || bridge.era || "年代未详"} · ${bridge.location?.province || "未知地区"} · ${bridge.type || bridge.category || "古桥"}</p>
      </a>
    `).join("");
  };

  render();
  sortBy?.addEventListener("change", render);
  sortOrder?.addEventListener("change", render);
  setText("bridge-list-total", fmtNum(data.unified.bridges.length));
}

function bindResize() {
  let resizeRaf = 0;
  window.addEventListener("resize", () => {
    if (resizeRaf) return;
    resizeRaf = window.requestAnimationFrame(() => {
      resizeRaf = 0;
      state.charts.forEach((chart) => chart.resize());
    });
  });
}

async function init() {
  renderShell();
  bindPageTransition();
  bindResize();
  const data = await loadData();
  initAiAssistant(data);
  bindGlobalSearch(data);
  await initCurrentPage(data);
}

document.addEventListener("DOMContentLoaded", () => {
  Promise.all([init(), wait(2000)])
    .then(() => {
      document.body.classList.add("intro-ready");
    })
    .catch(async (error) => {
      await wait(2000);
    const root = qs("#app");
    console.error(error);
    if (root) {
      root.innerHTML = `
        <div class="page">
          <div class="panel">
            <div class="panel-header">
              <div>
                <h3>数据加载失败</h3>
                <p>请在 <code>古桥千秋/</code> 根目录启动本地 HTTP 服务，并打开 <code>/site/index.html</code>，例如 <code>python -m http.server</code> 或 <code>py -m http.server</code>。</p>
              </div>
            </div>
            <div class="empty">${error.message}</div>
          </div>
        </div>
      `;
    }
      document.body.classList.add("intro-ready");
    });
});
