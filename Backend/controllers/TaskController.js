const TaskModel = require("../models/TaskModel");

module.exports.getTasks = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTask = (req, res) => {
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

  TaskModel.create({
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

module.exports.updateTask = (req, res) => {
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

  TaskModel.findByIdAndUpdate(id, {
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

module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Somthing went wrong!" });
    });
};
