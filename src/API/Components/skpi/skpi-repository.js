const Skpi = require('../models/skpi');

class SkpiRepository {
    async create(data) {
        const newSkpi = new Skpi(data);
        return await newSkpi.save();
    }
    async findAll() {
        return await Skpi.find().sort({ tanggalInput: -1 });
    }
    async findById(id) {
        return await Skpi.findById(id);
    }
    async deleteById(id) {
        return await Skpi.findByIdAndDelete(id);
    }
}

module.exports = new SkpiRepository();