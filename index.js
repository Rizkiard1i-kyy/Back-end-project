const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware (agar server bisa membaca input JSON)
app.use(cors());
app.use(express.json());

// Endpoint dasar untuk ngetes server
app.get('/', (req, res) => {
    res.json({ 
        status: "success",
        message: "Halo, Server Kelompok Kami Sudah Jalan!" 
    });
});

// Menyalakan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});