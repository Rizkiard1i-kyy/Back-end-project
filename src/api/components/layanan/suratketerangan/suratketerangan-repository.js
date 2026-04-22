const model = require("../../../../models/suratketerangan-models");

const save = async (data) => {
  return model.save(data);
};

const findall = async () => {
  return model.findall();
};

module.exports = {
  save,
  findall,
};