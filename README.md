# PinHost

Website sederhana untuk pengaturan biaya bandwidth dan backend dengan tema pin.

## Cara pakai

1. Buka `index.html` di browser.
2. Isi biaya bandwidth per GB dan perkiraan penggunaan bandwidth per bulan.
3. Isi biaya backend per jam dan perkiraan jam penggunaan backend per bulan.
4. Klik tombol **Hitung Total Biaya** untuk melihat ringkasan biaya.

### Menggunakan link otomatis

Anda dapat membuka halaman dengan nilai otomatis melalui query string di URL, misalnya:

`index.html?bandwidthRate=5000&bandwidthUsage=20&backendRate=15000&backendHours=30`

## Struktur

- `index.html` — halaman utama
- `styles.css` — gaya dengan tema pin
- `script.js` — logika perhitungan biaya

## Hosting

File ini bisa dihosting di GitHub Pages sebagai website statis.
