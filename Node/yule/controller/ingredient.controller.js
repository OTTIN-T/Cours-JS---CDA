const Category = require("../models").Category;
const Yule = require("../models").Yule;
const Ingredient = require("../models").Ingredient;

exports.list_ingredient = (req, res, next) => {
  Ingredient.findAll()
    .then((ingredients) => {
      //  console.log("ingredients", ingredients);
      res.status(200).json(ingredients);
    })
    .catch((err) => {
      console.log("err ingredient", err);
    });
};

exports.list_ingredient_yule = (req, res, next) => {
  Yule.findAll({
    attributes: ["id", "name", "price", "description"],
    include: [
      {
        model: Ingredient,
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

exports.get_ingredient = (req, res, next) => {
  Ingredient.findByPk(req.params.id)
    .then((ingredient) => {
      res.status(200).json(ingredient);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.add_ingredient = (req, res, next) => {
  Ingredient.create(req.body)
    .then((ingredient) => {
      res.status(201).json(ingredient);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.delete_ingredient = (req, res, next) => {
  Ingredient.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (data == 0) {
        res.status(200).json({
          message: "No Ingredient deleted successfully",
        });
      }
      res.status(201).end();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.edit_ingredient = (req, res, next) => {
  Ingredient.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.status(200).json({
        message: "Ingredient updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
