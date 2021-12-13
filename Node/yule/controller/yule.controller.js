const Yule = require("../models").Yule;

exports.list_yule = (req, res, next) => {
  Yule.findAll({})
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

exports.add_yule = (req, res, next) => {
  Yule.create(req.body)
    .then((yule) => {
      res.status(201).json(yule);
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
