// LAH LU WNI? - Full Upfront Game Data Downloader with MB Display
(function () {
  "use strict";

  const CACHE_NAME = "wni-assets-v5";
const ALL_GAME_ASSETS = [["/models/board.glb", 2552384], ["/models/pawns.glb", 268856], ["/models/dice.glb", 126516], ["/models/buildings.glb", 33604], ["/textures/kota.jpg", 737262], ["/fonts/fredoka-600.woff", 20380], ["/assets/vt323.ttf", 147320], ["/assets/press-start-2p.ttf", 115280], ["/audio/music/musik-menu.mp3", 961239], ["/audio/music/musik-ingame.mp3", 961239], ["/audio/music/musik-fase-kritis.mp3", 961239], ["/audio/music/musik-victory.mp3", 241513], ["/audio/vo/ambil-alih.mp3", 4012], ["/audio/vo/elit.mp3", 4012], ["/audio/vo/gajian.mp3", 4012], ["/audio/vo/lapas-bebas-kembar.mp3", 67510], ["/audio/vo/pajak.mp3", 4012], ["/audio/vo/parkir.mp3", 4012], ["/audio/vo/pengadilan-menang.mp3", 49537], ["/audio/vo/pinjol.mp3", 4012], ["/audio/vo/provinsi.mp3", 4012], ["/audio/vo/sewa-mahal.mp3", 4012], ["/audio/vo/sewa-naik.mp3", 52045], ["/audio/vo/sita.mp3", 4012], ["/audio/vo/tol-baru.mp3", 86736], ["/audio/vo/tol.mp3", 4012], ["/audio/vo/tukar-deal.mp3", 35327], ["/audio/vo/tukar-tolak.mp3", 44522], ["/audio/vo/utang-telat.mp3", 4012], ["/audio/sfx/ambil-alih.mp3", 25389], ["/audio/sfx/bangkrut.mp3", 49581], ["/audio/sfx/bangun-elit.mp3", 49581], ["/audio/sfx/bangun-kpr-1.mp3", 17901], ["/audio/sfx/bangun-kpr-2.mp3", 17901], ["/audio/sfx/bangun-runtuh.mp3", 49581], ["/audio/sfx/bidak-langkah-1.mp3", 17901], ["/audio/sfx/bidak-langkah-2.mp3", 17901], ["/audio/sfx/bidak-langkah-3.mp3", 17901], ["/audio/sfx/bidak-langkah-4.mp3", 17901], ["/audio/sfx/bidak-lompat-1.mp3", 25389], ["/audio/sfx/bidak-lompat-2.mp3", 25389], ["/audio/sfx/dadu-kocok.mp3", 49581], ["/audio/sfx/dadu-lempar-1.mp3", 13293], ["/audio/sfx/dadu-lempar-2.mp3", 13293], ["/audio/sfx/dadu-pantul-1.mp3", 13293], ["/audio/sfx/dadu-pantul-2.mp3", 13293], ["/audio/sfx/dadu-pantul-3.mp3", 13293], ["/audio/sfx/dadu-pantul-4.mp3", 13293], ["/audio/sfx/dek-kocok.mp3", 36909], ["/audio/sfx/gadai.mp3", 25389], ["/audio/sfx/galat.mp3", 17901], ["/audio/sfx/gali-lubang.mp3", 36909], ["/audio/sfx/kartu-balik-1.mp3", 13293], ["/audio/sfx/kartu-balik-2.mp3", 13293], ["/audio/sfx/kartu-muncul-1.mp3", 13293], ["/audio/sfx/kartu-muncul-2.mp3", 13293], ["/audio/sfx/kartu-pakai.mp3", 16173], ["/audio/sfx/kartu-simpan.mp3", 16173], ["/audio/sfx/kas-hitung.mp3", 39789], ["/audio/sfx/konfeti.mp3", 29997], ["/audio/sfx/krisis.mp3", 61101], ["/audio/sfx/ktp-baru.mp3", 16173], ["/audio/sfx/lapas-keluar.mp3", 36909], ["/audio/sfx/lapas-masuk.mp3", 25389], ["/audio/sfx/lobi-keluar.mp3", 20781], ["/audio/sfx/lobi-masuk.mp3", 29997], ["/audio/sfx/pajak.mp3", 29997], ["/audio/sfx/pengadilan.mp3", 36909], ["/audio/sfx/pinjol.mp3", 20781], ["/audio/sfx/popup-buka-1.mp3", 13293], ["/audio/sfx/popup-buka-2.mp3", 13293], ["/audio/sfx/razia.mp3", 25389], ["/audio/sfx/salin-link.mp3", 13293], ["/audio/sfx/sewa-naik.mp3", 29997], ["/audio/sfx/stempel-menang.mp3", 20781], ["/audio/sfx/tagihan-kota.mp3", 20781], ["/audio/sfx/tanah-beli-1.mp3", 17901], ["/audio/sfx/tanah-beli-2.mp3", 17901], ["/audio/sfx/tebus.mp3", 25389], ["/audio/sfx/timer-detak-1.mp3", 13293], ["/audio/sfx/timer-detak-2.mp3", 13293], ["/audio/sfx/timer-habis.mp3", 25389], ["/audio/sfx/tol-baru.mp3", 49581], ["/audio/sfx/tol.mp3", 29997], ["/audio/sfx/uang-keluar-1.mp3", 20781], ["/audio/sfx/uang-keluar-2.mp3", 20781], ["/audio/sfx/uang-keluar-3.mp3", 20781], ["/audio/sfx/uang-masuk-1.mp3", 16173], ["/audio/sfx/uang-masuk-2.mp3", 16173], ["/audio/sfx/uang-masuk-3.mp3", 16173], ["/audio/sfx/ui-pilih-1.mp3", 13293], ["/audio/sfx/ui-pilih-2.mp3", 13293], ["/audio/sfx/ui-tekan-1.mp3", 13293], ["/audio/sfx/ui-tekan-2.mp3", 13293], ["/audio/sfx/ui-tekan-3.mp3", 13293], ["/audio/sfx/utang-tagih.mp3", 29997]];
const TOTAL_BYTES = 9055640;

  const TOTAL_MB_STR = (TOTAL_BYTES / 1048576).toFixed(1);

  let loadedBytes = 0;

  const AssetManager = {
    ready: false,
    percent: 0,
    loadedMB: "0.0",
    totalMB: TOTAL_MB_STR,
    listeners: new Set(),

    isReady() {
      return this.ready;
    },

    subscribe(fn) {
      this.listeners.add(fn);
      try { fn(this); } catch (e) { console.error(e); }
      return () => this.listeners.delete(fn);
    },

    emit() {
      this.listeners.forEach((fn) => {
        try { fn(this); } catch (e) { console.error(e); }
      });
      window.dispatchEvent(new CustomEvent("wni:assets_progress", { detail: this }));
      if (this.ready) {
        window.dispatchEvent(new CustomEvent("wni:assets_ready", { detail: this }));
      }
    }
  };

  window.__WNI_ASSETS__ = AssetManager;

  // DOM Elements
  let loaderEl = null;
  let barEl = null;
  let statusEl = null;
  let mbEl = null;

  function initDOMElements() {
    loaderEl = document.getElementById("wni-initial-loader");
    barEl = document.getElementById("wni-load-bar");
    statusEl = document.getElementById("wni-load-status");
    mbEl = document.getElementById("wni-load-mb");
  }

  function updateProgress(addedBytes) {
    loadedBytes = Math.min(TOTAL_BYTES, loadedBytes + addedBytes);
    const loadedMB = (loadedBytes / 1048576).toFixed(1);
    const totalMB = TOTAL_MB_STR;
    const pct = Math.min(100, Math.round((loadedBytes / TOTAL_BYTES) * 100));

    AssetManager.percent = pct;
    AssetManager.loadedMB = loadedMB;
    AssetManager.totalMB = totalMB;

    if (barEl) barEl.style.width = pct + "%";
    if (mbEl) mbEl.textContent = loadedMB + " MB / " + totalMB + " MB (" + pct + "%)";

    if (statusEl) {
      if (pct < 35) {
        statusEl.textContent = "Mengunduh model 3D & peta kota...";
      } else if (pct < 75) {
        statusEl.textContent = "Mengunduh audio, sfx & musik warga...";
      } else if (pct < 100) {
        statusEl.textContent = "Menyelesaikan sinkronisasi data...";
      } else {
        statusEl.textContent = "✅ Data Permainan Siap! Memulai...";
      }
    }

    AssetManager.emit();
  }

  function dismissLoader() {
    if (!loaderEl) loaderEl = document.getElementById("wni-initial-loader");
    if (!loaderEl) return;

    loaderEl.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    loaderEl.style.opacity = "0";
    loaderEl.style.transform = "scale(0.98)";
    loaderEl.style.pointerEvents = "none";

    setTimeout(() => {
      if (loaderEl && loaderEl.parentNode) {
        loaderEl.parentNode.removeChild(loaderEl);
        loaderEl = null;
      }
    }, 450);
  }

  async function startPreloader() {
    initDOMElements();

    let cache = null;
    if ("caches" in window) {
      try {
        cache = await caches.open(CACHE_NAME);
      } catch (err) {
        console.warn("CacheStorage unavailable:", err);
      }
    }

    let index = 0;
    const total = ALL_GAME_ASSETS.length;
    const CONCURRENCY = 6;

    async function worker() {
      while (index < total) {
        const curIdx = index++;
        const [url, size] = ALL_GAME_ASSETS[curIdx];

        try {
          let isCached = false;
          if (cache) {
            const match = await cache.match(url);
            if (match) isCached = true;
          }

          if (!isCached) {
            const res = await fetch(url, { cache: "force-cache" });
            if (res.ok && cache) {
              await cache.put(url, res.clone());
            }
          }
        } catch (err) {
          console.warn("Asset fetch error:", url, err);
        }

        updateProgress(size);
      }
    }

    const workers = [];
    for (let i = 0; i < Math.min(CONCURRENCY, total); i++) {
      workers.push(worker());
    }

    await Promise.all(workers);

    // All assets 100% loaded!
    AssetManager.ready = true;
    AssetManager.percent = 100;
    updateProgress(0);

    if (barEl) {
      barEl.style.width = "100%";
      barEl.style.background = "#2a9d8f";
    }
    if (statusEl) {
      statusEl.textContent = "✅ Data Permainan Siap! Memulai...";
      statusEl.style.color = "#2a9d8f";
    }

    AssetManager.emit();

    setTimeout(() => {
      dismissLoader();
    }, 350);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startPreloader);
  } else {
    startPreloader();
  }
})();
