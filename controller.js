const db = require('./models/index');
class Controller {
  static add(first_name, last_name, religion, gender, age, tabel) {
    if (tabel == 'author') {
      db.Author.create({
        first_name: first_name,
        last_name: last_name,
        religion: religion,
        gender: gender,
        age: age
      }).then(author => {
        console.log(author.get({
          plain: true
        }));
      });
    } else if (tabel == 'article') {
      db.Article.create({
        first_name: first_name,
        last_name: last_name,
        religion: religion,
        gender: gender,
        age: age
      }).then(article => {
        console.log(article.get({
          plain: true
        }));
      });
    }
  }
  static read_one(idData, tabel) {
    if (tabel == 'author') {
      db.Author.findOne({ where: { id: idData } }).then(author => {
        console.log(author.get({
          plain: true
        }));
      })
    } else if (tabel == 'article') {
      db.Article.findOne({ where: { id: idData } }).then(article => {
        console.log(article.get({
          plain: true
        }));
      })
    }
  }
  static read_all(tabel) {
    if (tabel == 'author') {
      db.Author.findAll({ raw: true }).then(author => {
        console.log(author)
      })
    } else if (tabel == 'article') {
      db.Article.findAll({ raw: true }).then(article => {
        console.log(article)
      });
    }
  }
  static update(input_column, input_value, idData, tabel) {
    if (tabel == 'author') {
      let data = {};
      data[input_column] = input_value
      db.Author.update(data, { where: { id: idData } })
    } else if (tabel == 'article') {
      let data = {};
      data[input_column] = input_value
      db.Article.update(data, { where: { id: idData } })
    }
  }
  static delete(idData, tabel) {
    if (tabel == 'author') {
      db.Author.destroy({ where: { id: idData } })
    } else if (tabel == 'article') {
      db.Article.destroy({ where: { id: idData } })
    }
  }
}

module.exports = Controller