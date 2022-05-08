const favoriteController = require("../controllers/favorite.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/favorites", favoriteController.index);
  app.post("/api/favorites", favoriteController.store);
  app.delete("/api/favorites/:id", favoriteController.delete);
};
