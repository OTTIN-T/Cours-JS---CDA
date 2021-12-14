const Gift = require("../models").Gift;
const MatterGift = require("../models").MatterGift;

exports.list_gift = (req, res, next) => {
  Gift.findAll({
    attributes: ["id", "name"],
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
    order: [["price", "ASC"]],
  })
    .then((gifts) => {
      res.status(200).json(gifts);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.get_gift = (req, res, next) => {
  Gift.findByPk(req.params.id)
    .then((gift) => {
      res.status(200).json(gift);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.search_gift = (req, res, next) => {
  Gift.findAll({
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
    .then((gifts) => {
      res.status(200).json(gifts);
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.add_gift = (req, res, next) => {
  MatterGift.findByPk(req.body.MatterId)
    .then((category) => {
      if (category) {
        Gift.create(req.body)
          .then((gift) => {
            //   gift
            //     .setIngredients(req.body.ingredients)
            //     .then(() => {
            res.status(201).json(gift);
            //     })
            //     .catch((err) => {
            //       console.log("err set ingre", err);
            //     });
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

exports.delete_gift = (req, res, next) => {
  Gift.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (data == 0) {
        res.status(200).json({
          message: "No Gift deleted successfully",
        });
      }
      res.status(201).end();
    })
    .catch((err) => {
      console.log("err", err);
    });
};

exports.edit_gift = (req, res, next) => {
  Gift.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      res.status(200).json({
        message: "Gift updated successfully",
        data: data,
      });
    })
    .catch((err) => {
      console.log("err", err);
    });
};
