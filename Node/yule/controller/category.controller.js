const Category = require("../models").Category;
const Yule = require("../models").Yule;

exports.list_category = (req, res, next) => {
  Category.findAll({})
    .then((categories) => {
      res.status(200).json(categories);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.list_category_yule = (req, res, next) => {
  Yule.findAll({
    attributes: ["id", "name", "price", "description"],
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
        where: {
          id: req.params.id,
        },
      },
    ],
  })
    .then((yules) => {
      res.status(200).json(yules);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.get_category = (req, res, next) => {
  Category.findByPk(req.params.id)
    .then((category) => {
      res.status(200).json(category);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.add_category = (req, res, next) => {
  Category.create(req.body)
    .then((category) => {
      res.status(201).json(category);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.delete_category = (req, res, next) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (data == 0) {
        res.status(200).json({
          message: "No Category deleted successfully",
        });
      }
      res.status(201).end();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.edit_category = (req, res, next) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.status(200).json({
        message: "Category updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
