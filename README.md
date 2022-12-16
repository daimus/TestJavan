# Test Javan

## Instalasi
1. Clone repository
```
git clone https://github.com/daimus/TestJavan
```
2. CD ke project directory
```
cd TestJavan
```
3. Install dependency
```
yarn install
atau
npm install
```
4. Konfigurasi environment variable pada file `.env` (jika belum ada dapat mencontoh file `.env.example`)
5. Konfigurasi database pada file `database.config.json` (jika belum ada dapat mencontoh file `database.config.json.example`)
6. Jalankan migrasi untuk membuat table yang dibutuhkan
```
yarn migrate
atau
npm run migrate
```
7. Jalankan seeder untuk insert data-data awal yang dibutuhkan
```
yarn seed
atau
npm run migrate
```
8. Jalankan aplikasi
```
yarn dev
atau
npm run dev
```
9. Build aplikasi
```
yarn build
atau
npm run build
```

## Demo Aplikasi
Aplikasi Test Javan dapat diakses melalui link [https://testjavan.daimus.id](https://testjavan.daimus.id)
