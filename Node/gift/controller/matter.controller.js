const Matter = require("../models").Matter;
const MatterGift = require("../models").MatterGift;

exports.list_matter = (req, res, next) => {
  Matter.findAll({
    attributes: ["id", "name"],
    order: [["price", "ASC"]],
  })
    .then((matters) => {
      res.status(200).json(matters);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.get_matter = (req, res, next) => {
  Matter.findByPk(req.params.id)
    .then((matter) => {
      res.status(200).json(matter);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.search_matter = (req, res, next) => {
  Matter.findAll({
    attributes: ["id", "name", "price", "description"],
    include: [
      {
        model: MatterGift,
        attributes: ["id", "name"],
      },
      {
        model: Age,
        attributes: ["id", "age"],
      },
    ],
    where: {
      name: {
        [Op.substring]: req.params.search,
      },
    },
  })
    .then((matters) => {
      res.status(200).json(matters);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.add_matter = (req, res, next) => {
  //   MatterGift.findByPk(req.body.MatterId)
  //     .then((category) => {
  //       if (category) {
  MatterGift.create(req.body)
    .then((matter) => {
      //   matter
      //     .setIngredients(req.body.ingredients)
      //     .then(() => {
      res.status(201).json(matter);
      //     })
      //     .catch((err) => {
      //       console.log("err set ingre", err);
      //     });
    })
    .catch((err) => {
      console.log("err", err);
    });
  //       } else {
  //         res.status(404).json({ message: "Category not found" });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log("err", err);
  //     });
};

exports.delete_matter = (req, res, next) => {
  Matter.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (data == 0) {
        res.status(200).json({
          message: "No Matter deleted successfully",
        });
      }
      res.status(201).end();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.edit_matter = (req, res, next) => {
  Matter.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.status(200).json({
        message: "Matter updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
