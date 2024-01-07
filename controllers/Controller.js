const { Character } = require("../models");

class Controller {
  static showAll(req, res) {
    Character.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  }
}

module.exports = Controller;
