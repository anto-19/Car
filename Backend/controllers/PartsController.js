const PartsModel = require("../models/PartsModel");

module.exports.getParts = async (req, res) => {
  const Parts = await PartsModel.find();
  res.send(Parts);
};

module.exports.saveParts = (req, res) => {
  const {
    title,
    stock_number,
    model,
    desc,
    year,
    tag_number,
    odometer,
    details,
    Warranty,
    shippment_payment,
    image_url,
    gallery,
    category,
  } = req.body;

  PartsModel.create({
    title,
    stock_number,
    model,
    desc,
    year,
    tag_number,
    odometer,
    details,
    Warranty,
    shippment_payment,
    image_url,
    gallery,
    category,
  })
    .then((data) => {
      console.log(req.body);
      console.log("savvvve successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};

module.exports.updateParts = (req, res) => {
  const { id } = req.params;
  const {
    title,
    stock_number,
    model,
    desc,
    year,
    tag_number,
    odometer,
    details,
    Warranty,
    shippment_payment,
    image_url,
    gallery,
    category,
  } = req.body;

  PartsModel.findByIdAndUpdate(id, {
    title,
    stock_number,
    model,
    desc,
    year,
    tag_number,
    odometer,
    details,
    Warranty,
    shippment_payment,
    image_url,
    gallery,
    category,
  })
    .then(() => res.send("Updated successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};

module.exports.deleteParts = (req, res) => {
  const { id } = req.params;

  PartsModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};
