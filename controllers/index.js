
let models = require('./../models');
let views = require('./../views');

let Author = models.Author;

class AutorController {
  static auhorAdd(values) {
    let firstName = values[0];
    let lastName = values[1];
    let religion = values[2];
    let gender = values[3];
    let age = values[4];
    
  }
  static authorReadOne(values) {
    let id = Number(values[0]);
    Author.findById(id).then(row => {
      views.show(row.dataValues);
      process.exit(0);
    });
  }
  static authorReadAll() {
    Author.findAll({ raw: true }).then(rows => {
      views.showList(rows);
      process.exit(0);
    });
  }










































































  static authorUpdate() {

  }
  static authorDelete() {

  }
}

module.exports = { AutorController };