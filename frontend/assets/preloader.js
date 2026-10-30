// Asset Preloader & Audio Cache for WNI Simulator
// Auto-dismisses when 100% loaded without needing button press

(function() {
  const AUDIO_FILES = [
    "/audio/music/musik-fase-kritis.mp3",
    "/audio/music/musik-ingame.mp3",
    "/audio/music/musik-menu.mp3",
    "/audio/music/musik-victory.mp3",
    "/audio/sfx/ambil-alih.mp3",
    "/audio/sfx/bangkrut.mp3",
    "/audio/sfx/bangun-elit.mp3",
    "/audio/sfx/bangun-kpr-1.mp3",
    "/audio/sfx/bangun-kpr-2.mp3",
    "/audio/sfx/bangun-runtuh.mp3",
    "/audio/sfx/bidak-langkah-1.mp3",
    "/audio/sfx/bidak-langkah-2.mp3",
    "/audio/sfx/bidak-langkah-3.mp3",
    "/audio/sfx/bidak-langkah-4.mp3",
    "/audio/sfx/bidak-lompat-1.mp3",
    "/audio/sfx/bidak-lompat-2.mp3",
    "/audio/sfx/dadu-kocok.mp3",
    "/audio/sfx/dadu-lempar-1.mp3",
    "/audio/sfx/dadu-lempar-2.mp3",
    "/audio/sfx/dadu-pantul-1.mp3",
    "/audio/sfx/dadu-pantul-2.mp3",
    "/audio/sfx/dadu-pantul-3.mp3",
    "/audio/sfx/dadu-pantul-4.mp3",
    "/audio/sfx/dek-kocok.mp3",
    "/audio/sfx/gadai.mp3",
    "/audio/sfx/galat.mp3",
    "/audio/sfx/gali-lubang.mp3",
    "/audio/sfx/kartu-balik-1.mp3",
    "/audio/sfx/kartu-balik-2.mp3",
    "/audio/sfx/kartu-muncul-1.mp3",
    "/audio/sfx/kartu-muncul-2.mp3",
    "/audio/sfx/kartu-pakai.mp3",
    "/audio/sfx/kartu-simpan.mp3",
    "/audio/sfx/kas-hitung.mp3",
    "/audio/sfx/konfeti.mp3",
    "/audio/sfx/krisis.mp3",
    "/audio/sfx/ktp-baru.mp3",
    "/audio/sfx/lapas-keluar.mp3",
    "/audio/sfx/lapas-masuk.mp3",
    "/audio/sfx/lobi-keluar.mp3",
    "/audio/sfx/lobi-masuk.mp3",
    "/audio/sfx/pajak.mp3",
    "/audio/sfx/pengadilan.mp3",
    "/audio/sfx/pinjol.mp3",
    "/audio/sfx/popup-buka-1.mp3",
    "/audio/sfx/popup-buka-2.mp3",
    "/audio/sfx/razia.mp3",
    "/audio/sfx/salin-link.mp3",
    "/audio/sfx/sewa-naik.mp3",
    "/audio/sfx/stempel-menang.mp3",
    "/audio/sfx/tagihan-kota.mp3",
    "/audio/sfx/tanah-beli-1.mp3",
    "/audio/sfx/tanah-beli-2.mp3",
    "/audio/sfx/tebus.mp3",
    "/audio/sfx/timer-detak-1.mp3",
    "/audio/sfx/timer-detak-2.mp3",
    "/audio/sfx/timer-habis.mp3",
    "/audio/sfx/tol-baru.mp3",
    "/audio/sfx/tol.mp3",
    "/audio/sfx/uang-keluar-1.mp3",
    "/audio/sfx/uang-keluar-2.mp3",
    "/audio/sfx/uang-keluar-3.mp3",
    "/audio/sfx/uang-masuk-1.mp3",
    "/audio/sfx/uang-masuk-2.mp3",
    "/audio/sfx/uang-masuk-3.mp3",
    "/audio/sfx/ui-pilih-1.mp3",
    "/audio/sfx/ui-pilih-2.mp3",
    "/audio/sfx/ui-tekan-1.mp3",
    "/audio/sfx/ui-tekan-2.mp3",
    "/audio/sfx/ui-tekan-3.mp3",
    "/audio/sfx/utang-tagih.mp3",
    "/audio/vo/ambil-alih.mp3",
    "/audio/vo/elit.mp3",
    "/audio/vo/gajian.mp3",
    "/audio/vo/lapas-bebas-kembar.mp3",
    "/audio/vo/pajak.mp3",
    "/audio/vo/parkir.mp3",
    "/audio/vo/pengadilan-menang.mp3",
    "/audio/vo/pinjol.mp3",
    "/audio/vo/provinsi.mp3",
    "/audio/vo/sewa-mahal.mp3",
    "/audio/vo/sewa-naik.mp3",
    "/audio/vo/sita.mp3",
    "/audio/vo/tol-baru.mp3",
    "/audio/vo/tol.mp3",
    "/audio/vo/tukar-deal.mp3",
    "/audio/vo/tukar-tolak.mp3",
    "/audio/vo/utang-telat.mp3"
  ];

  const CACHE_NAME = "wni-audio-cache-v1";
  const isLoadedBefore = sessionStorage.getItem("wni_assets_cached") === "1";

  const SATIR_TIPS = [
    "Menyetempel formulir rangkap 4 bermeterai...",
    "Petugas kelurahan sedang istirahat makan siang...",
    "Server Dukcapil sedang antre koneksi internet...",
    "Fotokopi KTP warna 2 lembar belum diserahkan...",
    "Menunggu tanda tangan Pak RT yang lagi ronda...",
    "Menyortir berkas bansos dan tagihan pinjol..."
  ];

  function createPreloaderOverlay() {
    const style = document.createElement("style");
    style.textContent = `
      #wni-preloader {
        position: fixed;
        inset: 0;
        z-index: 999999;
        background-color: #161412;
        background-image: linear-gradient(rgba(10, 10, 12, 0.45), rgba(10, 10, 12, 0.55)), url('/assets/loading-bg.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        backdrop-filter: blur(2px);
        color: #fff8e8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 1.25rem;
        font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
        user-select: none;
        transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.5s ease;
      }
      #wni-preloader.fade-out {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
      }
      .preloader-card {
        width: 100%;
        max-width: 380px;
        background: #ffffff;
        color: #161412;
        border: 4px solid #161412;
        border-radius: 1.25rem;
        box-shadow: 8px 8px 0px #161412;
        padding: 1.75rem 1.5rem;
        text-align: center;
      }
      .preloader-badge {
        display: inline-block;
        background: #e63946;
        color: #ffffff;
        border: 2px solid #161412;
        font-size: 0.75rem;
        font-weight: 800;
        padding: 0.2rem 0.6rem;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
      }
      .preloader-title {
        font-size: 1.75rem;
        font-weight: 900;
        letter-spacing: -0.03em;
        margin-bottom: 0.25rem;
        line-height: 1.1;
      }
      .preloader-subtitle {
        font-size: 0.82rem;
        color: #666;
        margin-bottom: 1.25rem;
        font-weight: 500;
      }
      .preloader-bar-bg {
        width: 100%;
        height: 1.25rem;
        background: #f1f5f9;
        border: 3px solid #161412;
        border-radius: 9999px;
        overflow: hidden;
        margin-bottom: 0.6rem;
        position: relative;
      }
      .preloader-bar-fill {
        height: 100%;
        width: 0%;
        background: #e63946;
        border-right: 3px solid #161412;
        transition: width 0.1s ease-out;
      }
      .preloader-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.75rem;
        font-weight: 800;
        color: #475569;
      }
    `;
    document.head.appendChild(style);

    const overlay = document.createElement("div");
    overlay.id = "wni-preloader";
    overlay.innerHTML = `
      <div class="preloader-card">
        <span class="preloader-badge">Board game satir</span>
        <h2 class="preloader-title">LAH LU WNI?</h2>
        <p class="preloader-subtitle">Memuat aset permainan...</p>
        
        <div class="preloader-bar-bg">
          <div class="preloader-bar-fill" id="wni-bar"></div>
        </div>
        
        <div class="preloader-stats">
          <span id="wni-status">Menyiapkan aset...</span>
          <span id="wni-pct">0%</span>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    return overlay;
  }

  async function startPreloading() {
    const overlay = createPreloaderOverlay();
    const bar = document.getElementById("wni-bar");
    const pct = document.getElementById("wni-pct");
    let loaded = 0;
    const total = AUDIO_FILES.length;
    const CONCURRENCY = 6;
    let index = 0;

    let cache = null;
    if ("caches" in window) {
      try {
        cache = await caches.open(CACHE_NAME);
      } catch (_) {}
    }

    async function downloadNext() {
      while (index < total) {
        const file = AUDIO_FILES[index++];
        try {
          if (cache) {
            const match = await cache.match(file);
            if (!match) {
              const res = await fetch(file);
              if (res.ok) await cache.put(file, res.clone());
            }
          } else {
            await fetch(file, { cache: "force-cache" });
          }
        } catch (_) {}

        loaded++;
        const percent = Math.round((loaded / total) * 100);
        if (bar) bar.style.width = percent + "%";
        if (pct) pct.textContent = percent + "%";
        if (status) status.textContent = `Memuat suara & aset (${loaded}/${total})`;
      }
    }

    const workers = [];
    for (let i = 0; i < CONCURRENCY; i++) {
      workers.push(downloadNext());
    }

    await Promise.all(workers);

    sessionStorage.setItem("wni_assets_cached", "1");

    if (bar) bar.style.width = "100%";
    if (pct) pct.textContent = "100%";
    if (status) status.textContent = "Siap dimainkan!";

    // Otomatis langsung masuk ke game begitu 100% tanpa klik tombol
    setTimeout(() => {
      overlay.classList.add("fade-out");
      setTimeout(() => overlay.remove(), 500);
    }, 450);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startPreloading);
  } else {
    startPreloading();
  }
})();
