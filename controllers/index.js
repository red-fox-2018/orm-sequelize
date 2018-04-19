
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
    
    Author.create({ firstName, lastName, religion, gender, age, createdAt: new Date(), updatedAt: new Date() })
      .then(author => {
        if (author) {
          views.show(`Data baru berhasil dimasukan!`);
          process.exit(0);
        } else {
          views.show(`Gagal memasukan data!`);
          process.exit(0);
        }
      });
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
  static authorDelete(values) {
    let id = values[0];
    Author.destroy({
      where: {
        id: id
      }
    }).then(res => {
      if (res) {
        views.show(`Row berhasil dihapus berhasil dihapus!`);
        process.exit(0);
      } else {
        views.show(`Gagal menghapus database!`);
        process.exit(0);
      }
    });
  }
}

module.exports = { AutorController };