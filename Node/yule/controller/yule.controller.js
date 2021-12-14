const Yule = require("../models").Yule;
const Category = require("../models").Category;
const { Op } = require("sequelize");

exports.list_yule = (req, res, next) => {
  Yule.findAll({
    attributes: ["id", "name", "price", "description"],
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
      },
    ],
    order: [["price", "ASC"]],
  })
    .then((yules) => {
      res.status(200).json(yules);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.get_yule = (req, res, next) => {
  Yule.findByPk(req.params.id)
    .then((yule) => {
      res.status(200).json(yule);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.search_yule = (req, res, next) => {
  Yule.findAll({
    attributes: ["id", "name", "price", "description"],
    include: [
      {
        model: Category,
        attributes: ["id", "name"],
      },
    ],
    where: {
      name: {
        [Op.substring]: req.params.search,
      },
    },
  })
    .then((yules) => {
      res.status(200).json(yules);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.add_yule = (req, res, next) => {
  Category.findByPk(req.body.CategoryId)
    .then((category) => {
      if (category) {
        Yule.create(req.body)
          .then((yule) => {
            console.log("yule", yule);
            console.log("req.body.ingredients", req.body.ingredients);

            yule
              .setIngredients(req.body.ingredients)
              .then(() => {
                res.status(201).json(yule);
              })
              .catch((err) => {
                console.log("err set ingre", err);
              });
          })
          .catch((err) => {
            console.log("err", err);
          });
      } else {
        res.status(404).json({ message: "Category not found" });
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.delete_yule = (req, res, next) => {
  Yule.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (data == 0) {
        res.status(200).json({
          message: "No Yule deleted successfully",
        });
      }
      res.status(201).end();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.edit_yule = (req, res, next) => {
  Yule.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.status(200).json({
        message: "Yule updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
