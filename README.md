Joshua 535250146 Membuat Endpoint untuk Pilihan Skema pembayaran dan transkip

http://localhost:5000/api/pembayaran (POST sebagai admin, GET sebagai semua role)
http://localhost:5000/api/pembayaran/nim/:nim (GET sebagai semua role)
http://localhost:5000/api/pembayaran/:id (GET sebagai semua role)
http://localhost:5000/api/pembayaran/:id (PUT sebagai admin)
http://localhost:5000/api/pembayaran/:id (DELETE sebagai admin)

http://localhost:5000/api/transkrip (GET sebagai mahasiswa)
http://localhost:5000/api/transkrip (POST sebagai admin dan dosen)
