const models = require("../models");
const Favorite = models.Favorite;

exports.index = (req, res) => {
  Favorite.findAll().then((response) => {
    res.send(response);
  });
};

exports.store = (req, res) => {
  Favorite.create(req.body).then((response) => {
    const bookId = response.bookId;
    res.status(200).send({
      bookId,
    });
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Favorite.destroy({
    where: {
      id: id,
    },
  }).then(
    (rowDeleted) => {
      if (rowDeleted === 1) {
        res.status(200).send({
          message: "success",
        });
      }
    },
    (err) => {
      console.log(err);
    }
  );
};
