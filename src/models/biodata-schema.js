module.exports = (db) =>
  db.model(
    'Biodata',
    db.Schema({
      email: String,
      fullName: String,
      nim: String,
      jurusan: String,
      angkatan: String,
      noTelp: String,
      alamat: String,
    })
  );
