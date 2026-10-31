// LAH LU WNI? - Mobile Legends Style Resource Downloader & Cache Manager
(function () {
  "use strict";

  const CACHE_NAME = "wni-assets-v4";

  // Tier 1: CRITICAL ASSETS (Must be 100% downloaded before entering match)
  const CRITICAL_ASSETS = [
    { url: "/models/board.glb", name: "Papan Pulau 3D" },
    { url: "/models/pawns.glb", name: "Karakter Warga 3D" },
    { url: "/models/dice.glb", name: "Dadu 3D" },
    { url: "/models/buildings.glb", name: "Model Bangunan & Properti" },
    { url: "/textures/kota.jpg", name: "Tekstur Papan Kota" },
    { url: "/fonts/fredoka-600.woff", name: "Font Permainan" },
    { url: "/audio/sfx/dadu-lempar-1.mp3", name: "Audio Dadu" },
    { url: "/audio/sfx/dadu-pantul-1.mp3", name: "Audio Pantul" },
    { url: "/audio/sfx/bidak-langkah-1.mp3", name: "Audio Bidak" },
    { url: "/audio/sfx/bidak-lompat-1.mp3", name: "Audio Lompat" },
    { url: "/audio/sfx/uang-masuk-1.mp3", name: "Audio Kas" },
    { url: "/audio/sfx/tanah-beli-1.mp3", name: "Audio Beli Tanah" },
    { url: "/audio/sfx/lobi-masuk.mp3", name: "Audio Lobi" }
  ];

  // Tier 2: SECONDARY AUDIO (Downloaded in background after Tier 1)
  const SECONDARY_AUDIO = [
    "/audio/music/musik-ingame.mp3",
    "/audio/music/musik-menu.mp3",
    "/audio/music/musik-fase-kritis.mp3",
    "/audio/music/musik-victory.mp3",
    "/audio/sfx/kartu-balik-1.mp3",
    "/audio/sfx/kartu-muncul-1.mp3",
    "/audio/sfx/kartu-pakai.mp3",
    "/audio/sfx/kartu-simpan.mp3",
    "/audio/sfx/timer-detak-1.mp3",
    "/audio/sfx/timer-habis.mp3",
    "/audio/sfx/bangun-kpr-1.mp3",
    "/audio/sfx/bangun-elit.mp3",
    "/audio/sfx/bangkrut.mp3",
    "/audio/sfx/pinjol.mp3",
    "/audio/sfx/tol.mp3",
    "/audio/sfx/pajak.mp3",
    "/audio/sfx/razia.mp3",
    "/audio/sfx/sewa-naik.mp3",
    "/audio/sfx/ambil-alih.mp3",
    "/audio/sfx/tebus.mp3",
    "/audio/sfx/gadai.mp3",
    "/audio/sfx/pengadilan.mp3",
    "/audio/sfx/lapas-masuk.mp3",
    "/audio/sfx/lapas-keluar.mp3",
    "/audio/sfx/salin-link.mp3",
    "/audio/sfx/stempel-menang.mp3",
    "/audio/vo/pajak.mp3",
    "/audio/vo/gajian.mp3",
    "/audio/vo/elit.mp3",
    "/audio/vo/provinsi.mp3",
    "/audio/vo/sita.mp3",
    "/audio/vo/sewa-mahal.mp3",
    "/audio/vo/sewa-naik.mp3",
    "/audio/vo/pinjol.mp3",
    "/audio/vo/tol.mp3",
    "/audio/vo/ambil-alih.mp3",
    "/audio/vo/tukar-deal.mp3",
    "/audio/vo/tukar-tolak.mp3"
  ];

  // Global Asset Manager State
  const AssetManager = {
    ready: false,
    allDownloaded: false,
    percent: 0,
    totalCritical: CRITICAL_ASSETS.length,
    loadedCritical: 0,
    currentName: "Menyiapkan berkas...",
    listeners: new Set(),

    isReady() {
      return this.ready;
    },

    subscribe(fn) {
      this.listeners.add(fn);
      try {
        fn(this);
      } catch (err) {
        console.error(err);
      }
      return () => this.listeners.delete(fn);
    },

    emit() {
      this.listeners.forEach((fn) => {
        try {
          fn(this);
        } catch (err) {
          console.error(err);
        }
      });
      window.dispatchEvent(new CustomEvent("wni:assets_progress", { detail: this }));
      if (this.ready) {
        window.dispatchEvent(new CustomEvent("wni:assets_ready", { detail: this }));
      }
    },

    showGateModal(customMessage) {
      if (this.ready) return;
      showGatekeeperModal(customMessage);
    }
  };

  window.__WNI_ASSETS__ = AssetManager;

  // Insert Styles for Mobile Legends Style Downloader Widget & Gatekeeper Modal
  function injectStyles() {
    const style = document.createElement("style");
    style.id = "wni-assets-style";
    style.textContent = `
      /* MLBB-Style Floating Bottom Resource Widget */
      #wni-mlbb-widget {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        z-index: 99998;
        background: rgba(15, 23, 42, 0.95);
        color: #f8fafc;
        border: 2px solid #334155;
        border-radius: 1rem;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
        padding: 0.65rem 1rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        font-size: 0.75rem;
        user-select: none;
        max-width: calc(100vw - 2rem);
        width: 320px;
        backdrop-filter: blur(8px);
        transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
      }
      #wni-mlbb-widget.completed-badge {
        width: auto;
        max-width: 220px;
        background: rgba(16, 185, 129, 0.95);
        border-color: #059669;
        color: #ffffff;
        cursor: pointer;
        padding: 0.4rem 0.85rem;
      }
      #wni-mlbb-widget.completed-badge .wni-mlbb-body {
        display: none;
      }
      .wni-mlbb-icon {
        width: 1.85rem;
        height: 1.85rem;
        border-radius: 0.5rem;
        background: #1e293b;
        border: 1px solid #475569;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      #wni-mlbb-widget.completed-badge .wni-mlbb-icon {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        width: 1.35rem;
        height: 1.35rem;
      }
      .wni-mlbb-body {
        flex: 1;
        min-width: 0;
      }
      .wni-mlbb-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.25rem;
      }
      .wni-mlbb-title {
        font-weight: 800;
        font-size: 0.75rem;
        letter-spacing: -0.01em;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .wni-mlbb-pct {
        font-weight: 900;
        font-size: 0.75rem;
        color: #fbbf24;
      }
      .wni-mlbb-bar-bg {
        width: 100%;
        height: 0.4rem;
        background: #334155;
        border-radius: 9999px;
        overflow: hidden;
        position: relative;
        margin-bottom: 0.25rem;
      }
      .wni-mlbb-bar-fill {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #f59e0b, #e63946);
        border-radius: 9999px;
        transition: width 0.15s ease-out;
      }
      .wni-mlbb-desc {
        font-size: 0.65rem;
        color: #94a3b8;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: block;
      }

      /* Gatekeeper Modal when trying to play while loading */
      #wni-gate-modal {
        position: fixed;
        inset: 0;
        z-index: 999999;
        background: rgba(15, 23, 42, 0.85);
        backdrop-filter: blur(6px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.25rem;
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
      }
      #wni-gate-modal.active {
        opacity: 1;
        visibility: visible;
      }
      .wni-gate-card {
        background: #ffffff;
        color: #0f172a;
        border: 4px solid #0f172a;
        border-radius: 1.25rem;
        box-shadow: 8px 8px 0px #0f172a;
        padding: 1.75rem 1.5rem;
        width: 100%;
        max-width: 380px;
        text-align: center;
        transform: scale(0.95);
        transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
      }
      #wni-gate-modal.active .wni-gate-card {
        transform: scale(1);
      }
      .wni-gate-badge {
        display: inline-block;
        background: #fbbf24;
        color: #0f172a;
        border: 2px solid #0f172a;
        font-size: 0.7rem;
        font-weight: 800;
        padding: 0.2rem 0.55rem;
        border-radius: 0.4rem;
        text-transform: uppercase;
        margin-bottom: 0.65rem;
      }
      .wni-gate-title {
        font-size: 1.35rem;
        font-weight: 900;
        line-height: 1.15;
        margin-bottom: 0.5rem;
      }
      .wni-gate-msg {
        font-size: 0.82rem;
        color: #475569;
        font-weight: 500;
        line-height: 1.4;
        margin-bottom: 1.25rem;
      }
      .wni-gate-bar-bg {
        width: 100%;
        height: 0.85rem;
        background: #f1f5f9;
        border: 2px solid #0f172a;
        border-radius: 9999px;
        overflow: hidden;
        margin-bottom: 0.5rem;
      }
      .wni-gate-bar-fill {
        height: 100%;
        width: 0%;
        background: #e63946;
        transition: width 0.15s ease-out;
      }
      .wni-gate-stats {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        font-weight: 800;
        color: #334155;
        margin-bottom: 1.25rem;
      }
      .wni-gate-btn {
        width: 100%;
        background: #0f172a;
        color: #ffffff;
        font-weight: 800;
        font-size: 0.85rem;
        padding: 0.65rem;
        border-radius: 0.75rem;
        border: 2px solid #0f172a;
        cursor: pointer;
        transition: transform 0.1s active;
      }
      .wni-gate-btn:active {
        transform: translateY(2px);
      }
    `;
    document.head.appendChild(style);
  }

  // Render the Floating Widget
  let widgetEl = null;
  let widgetBar = null;
  let widgetPct = null;
  let widgetDesc = null;
  let widgetIcon = null;

  function createWidget() {
    if (document.getElementById("wni-mlbb-widget")) return;

    widgetEl = document.createElement("div");
    widgetEl.id = "wni-mlbb-widget";
    widgetEl.innerHTML = `
      <div class="wni-mlbb-icon" id="wni-mlbb-icon">
        <svg class="size-4 text-amber-400 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 3v13M5 12l7 7 7-7"/>
          <path d="M5 21h14"/>
        </svg>
      </div>
      <div class="wni-mlbb-body">
        <div class="wni-mlbb-top">
          <span class="wni-mlbb-title">Mengunduh Data Game</span>
          <span class="wni-mlbb-pct" id="wni-mlbb-pct">0%</span>
        </div>
        <div class="wni-mlbb-bar-bg">
          <div class="wni-mlbb-bar-fill" id="wni-mlbb-bar"></div>
        </div>
        <span class="wni-mlbb-desc" id="wni-mlbb-desc">Memeriksa berkas 3D...</span>
      </div>
    `;
    document.body.appendChild(widgetEl);

    widgetBar = document.getElementById("wni-mlbb-bar");
    widgetPct = document.getElementById("wni-mlbb-pct");
    widgetDesc = document.getElementById("wni-mlbb-desc");
    widgetIcon = document.getElementById("wni-mlbb-icon");
  }

  // Render Gatekeeper Modal
  let gateModalEl = null;
  let gateBar = null;
  let gatePct = null;
  let gateFile = null;

  function createGateModal() {
    if (document.getElementById("wni-gate-modal")) return;

    gateModalEl = document.createElement("div");
    gateModalEl.id = "wni-gate-modal";
    gateModalEl.innerHTML = `
      <div class="wni-gate-card">
        <span class="wni-gate-badge">Sinkronisasi Aset</span>
        <h2 class="wni-gate-title">Menyiapkan Data Game</h2>
        <p class="wni-gate-msg">
          Model 3D pulau, bidak, dadu, dan suara sedang diunduh. Mohon tunggu sebentar agar permainan sinkron dan tidak ada bidak yang hilang!
        </p>

        <div class="wni-gate-bar-bg">
          <div class="wni-gate-bar-fill" id="wni-gate-bar"></div>
        </div>

        <div class="wni-gate-stats">
          <span id="wni-gate-file">Menyiapkan model 3D...</span>
          <span id="wni-gate-pct">0%</span>
        </div>

        <button type="button" class="wni-gate-btn" id="wni-gate-btn">Mengerti, Tunggu Selesai</button>
      </div>
    `;
    document.body.appendChild(gateModalEl);

    gateBar = document.getElementById("wni-gate-bar");
    gatePct = document.getElementById("wni-gate-pct");
    gateFile = document.getElementById("wni-gate-file");

    const btn = document.getElementById("wni-gate-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        gateModalEl.classList.remove("active");
      });
    }
  }

  function showGatekeeperModal() {
    if (!gateModalEl) createGateModal();
    if (gateModalEl) {
      gateModalEl.classList.add("active");
    }
  }

  // Update UI Elements with Latest Progress
  function updateUI(percent, loaded, total, currentName) {
    if (widgetBar) widgetBar.style.width = `${percent}%`;
    if (widgetPct) widgetPct.textContent = `${percent}%`;
    if (widgetDesc) widgetDesc.textContent = `${currentName} (${loaded}/${total})`;

    if (gateBar) gateBar.style.width = `${percent}%`;
    if (gatePct) gatePct.textContent = `${percent}%`;
    if (gateFile) gateFile.textContent = `${currentName} (${loaded}/${total})`;

    if (AssetManager.ready && widgetEl) {
      widgetEl.classList.add("completed-badge");
      widgetEl.innerHTML = `
        <div class="wni-mlbb-icon">
          <svg class="size-3.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <span class="font-extrabold text-xs">Data Game Siap (100%)</span>
      `;
      if (gateModalEl) {
        gateModalEl.classList.remove("active");
      }
    }
  }

  // Core Asset Downloader with Persistent CacheStorage
  async function startAssetDownload() {
    injectStyles();
    createWidget();
    createGateModal();

    let cache = null;
    if ("caches" in window) {
      try {
        cache = await caches.open(CACHE_NAME);
      } catch (err) {
        console.warn("CacheStorage unavailable, using standard HTTP cache", err);
      }
    }

    // Step 1: Download Tier 1 Critical Assets (3D Models & Core SFX)
    let loadedCount = 0;
    const totalCritical = CRITICAL_ASSETS.length;

    for (let i = 0; i < totalCritical; i++) {
      const item = CRITICAL_ASSETS[i];
      AssetManager.currentName = item.name;

      try {
        let isCached = false;
        if (cache) {
          const match = await cache.match(item.url);
          if (match) isCached = true;
        }

        if (!isCached) {
          const res = await fetch(item.url, { cache: "force-cache" });
          if (res.ok && cache) {
            await cache.put(item.url, res.clone());
          }
        }
      } catch (err) {
        console.warn(`Asset ${item.url} fetch error:`, err);
      }

      loadedCount++;
      AssetManager.loadedCritical = loadedCount;
      const pct = Math.min(100, Math.round((loadedCount / totalCritical) * 100));
      AssetManager.percent = pct;

      updateUI(pct, loadedCount, totalCritical, item.name);
      AssetManager.emit();
    }

    // Tier 1 is Complete! Game is ready to play!
    AssetManager.ready = true;
    AssetManager.percent = 100;
    AssetManager.currentName = "Aset 3D & Papan Siap";
    updateUI(100, totalCritical, totalCritical, "Aset 3D & Papan Siap");
    AssetManager.emit();

    // Step 2: Background Download Tier 2 (Secondary VO and SFX without blocking player)
    (async function downloadSecondary() {
      for (const url of SECONDARY_AUDIO) {
        try {
          if (cache) {
            const match = await cache.match(url);
            if (!match) {
              const res = await fetch(url, { cache: "force-cache" });
              if (res.ok) await cache.put(url, res.clone());
            }
          }
        } catch (_) {}
      }
      AssetManager.allDownloaded = true;
    })();
  }

  // Intercept Direct Clicks on "Buat room" / "Gabung" if assets are not ready
  document.addEventListener("click", function (e) {
    if (AssetManager.ready) return;

    const target = e.target.closest("button, a, input[type='submit']");
    if (!target) return;

    const text = (target.textContent || target.value || "").toLowerCase();
    const isPlayAction =
      text.includes("buat room") ||
      text.includes("gabung") ||
      text.includes("mulai") ||
      text.includes("main");

    if (isPlayAction) {
      e.preventDefault();
      e.stopPropagation();
      AssetManager.showGateModal();
    }
  }, true);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startAssetDownload);
  } else {
    startAssetDownload();
  }
})();
