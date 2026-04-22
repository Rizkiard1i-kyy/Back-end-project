module.exports = (db) =>
  db.model(
    'Users',
    db.Schema({
      email: String,
      password: String,
      fullName: String,
      role: {
        type: String,
        enum: ['mahasiswa', 'dosen', 'admin'],
        default: 'mahasiswa',
      },
    })
  );
