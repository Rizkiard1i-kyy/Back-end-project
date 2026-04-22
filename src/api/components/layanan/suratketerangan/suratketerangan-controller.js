const Surat = require("../../../../models/suratketerangan-models");

// CREATE
const createsuratketerangan = async (req, res) => {
  try {
    const { nim, nama, prodi, bahasa, jenis } = req.body;

    if (!nim || !nama || !prodi || !bahasa || !jenis) {
      return res.status(400).json({
        message: "Semua data wajib diisi",
      });
    }

    const result = await Surat.create({
      nim,
      nama,
      prodi,
      bahasa,
      jenis,
    });

    return res.status(201).json({
      message: "Surat berhasil dibuat",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// GET ALL
const getallsuratketerangan = async (req, res) => {
  try {
    const data = await Surat.find();

    return res.status(200).json({
      message: "List surat",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createsuratketerangan,
  getallsuratketerangan,
};