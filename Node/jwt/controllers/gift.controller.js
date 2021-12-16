const Gift = require("../models").Gift;

exports.gift_list = (req, res) => {
  Gift.findAll({})
    .then((gifts) => {
      res.status(201).json(gifts);
    })
    .catch((error) => {
      console.log(error);
    });
};
exports.gift_detail = (req, res) => {};

exports.gift_add = (req, res) => {
  if (!req.body.name || !req.file)
    return res.status(400).json({ message: "Champs vides" });
  let gift = req.body;
  if (req.file) {
    gift.picture = `public/upload/gift/${req.file.filename}`;
  }
  Gift.create(gift)
    .then((gift) => {
      if (!gift)
        return res.status(500).json({ message: `Erreur à la création` });
      res.status(201).json(gift);
    })
    .catch((error) => console.log(error));
};
