# WNI Simulator (LAH LU WNI? Web Board Game)

Clone full-stack dari game web **LAH LU WNI?: Board Game Satir Bertahan Hidup di Indonesia**. Dilengkapi dengan frontend (Three.js 3D board, audio, voiceover, styling Neo-Brutalism) dan backend server multiplayer (Colyseus + WebSocket).

---

## 📁 Struktur Direktori

```text
wni-simulator/
├── backend/
│   ├── src/
│   │   ├── index.js          # Entrypoint server (Express + Colyseus + Static files)
│   │   ├── engine.js         # Deterministic state machine & board game rules
│   │   ├── rooms/
│   │   │   └── GameRoom.js   # Colyseus Room ('game') logic & WebSocket handler
│   │   └── schema/
│   │       └── GameState.js  # Colyseus Schema definitions
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── index.html            # Web app entrypoint & configuration
│   ├── assets/               # JS chunks, CSS, dan webfonts (Archivo Black & Space Grotesk)
│   └── audio/
│       ├── music/            # 4 musik latar (menu, ingame, kritis, victory)
│       ├── sfx/              # 67 efek suara (dadu, langkah bidak, sewa, KPR, dll)
│       └── vo/               # 17 voiceover satir reaksi khas warga Indonesia
├── docker-compose.yml        # Setup 1-klik untuk Docker di VPS
├── nginx.conf                # Template konfigurasi reverse proxy Nginx
├── package.json              # Root npm scripts
└── README.md
```

---

## 🚀 Cara Menjalankan di Lokal (Komputer / Laptop)

### 1. Prasyarat
Pastikan komputer Anda sudah terinstal **Node.js** (versi 18+ atau 22+).

### 2. Jalankan Server
Buka terminal di folder project ini:

```bash
cd desktop/fly/wni-simulator

# Jalankan server (backend + frontend sekaligus)
npm start
```

### 3. Mainkan Game
Buka browser Anda dan akses:
👉 **[http://localhost:2567](http://localhost:2567)**

* **Mode Lokal**: Klik "Main di satu HP", tentukan bidak dan pemain (2-6 orang), lalu mainkan bergantian.
* **Mode Online**: Klik "Main online", buat room atau gabung dengan kode room 6 huruf.

---

## 🌐 Cara Pasang / Deploy di VPS

Anda dapat memasang game ini di VPS (Ubuntu, Debian, dll) menggunakan **Docker Compose** (Rekomendasi) atau **PM2 + Nginx**.

---

### Opsi 1: Menggunakan Docker Compose (Paling Mudah)

1. **Upload folder project ke VPS**:
   ```bash
   scp -r desktop/fly/wni-simulator user@IP_VPS:/home/user/wni-simulator
   ```

2. **Masuk ke VPS dan jalankan container**:
   ```bash
   ssh user@IP_VPS
   cd /home/user/wni-simulator
   docker compose up -d --build
   ```

   Game Anda sekarang sudah berjalan di port `2567` VPS!

3. **(Opsional) Sambungkan ke Domain & Nginx**:
   Salin `nginx.conf` ke konfigurasi Nginx VPS:
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/wni-simulator
   # Sesuaikan nama server_name di file tersebut dengan domain Anda
   sudo ln -s /etc/nginx/sites-available/wni-simulator /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

4. **Pasang HTTPS / SSL Gratis**:
   ```bash
   sudo certbot --nginx -d game.domainanda.com
   ```

---

### Opsi 2: Menggunakan PM2 (Tanpa Docker)

1. **Install Node.js & PM2 di VPS**:
   ```bash
   sudo apt update && sudo apt install -y nodejs npm
   sudo npm install -g pm2
   ```

2. **Install dependency dan jalankan aplikasi**:
   ```bash
   cd /home/user/wni-simulator/backend
   npm install --omit=dev
   pm2 start src/index.js --name "wni-simulator"
   pm2 save
   pm2 startup
   ```

3. **Konfigurasi Nginx**:
   Gunakan konfigurasi dari file `nginx.conf` di root project.

---

## ⚙️ Konfigurasi URL Backend (Jika Dipisah)

Secara default, client frontend otomatis mendeteksi server backend:
* Jika diakses via `http://localhost:2567` -> otomatis memakai port `2567`.
* Jika diakses via Nginx (`http://game.domainanda.com`) -> otomatis memakai origin domain tersebut.
* Jika ingin mengarahkan manual ke server tertentu, cukup atur di `frontend/index.html`:
  ```html
  <script>
    window.__GAME_SERVER__ = "https://backend-anda.com";
  </script>
  ```
