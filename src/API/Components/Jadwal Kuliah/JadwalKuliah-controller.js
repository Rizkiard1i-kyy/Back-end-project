const jadwalService = require('./JadwalKuliah-service');

exports.postJadwal = async (req, res) => {
    try {
        const jadwalBaru = await jadwalService.buatJadwalBaru(req.body);
        res.status(201).json({ status: "success", data: jadwalBaru });
    } catch (error) {
        res.status(400).json({ status: "fail", message: error.message });
    }
};

exports.getJadwal = async (req, res) => {
    try {
        // Menangkap kata kunci dari URL (?semester=Genap)
        const filterSemester = req.query.semester; 
        
        // Kirim filter tersebut ke Service
        const jadwal = await jadwalService.ambilJadwal(filterSemester);
        
        res.status(200).json({ 
            status: "success", data: jadwal });
    } catch (error) {
        res.status(500).json({ 
            status: "error", message: error.message });
    }
};

