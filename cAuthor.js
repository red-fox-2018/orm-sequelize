let {Author} = require('./models')
const View = require('./views.js')

class ControllerAuthor{
  static addNew(objAuthor) {
    Author.create({
      first_name: objAuthor.first_name,
      last_name: objAuthor.last_name,
      religion: objAuthor.religion,
      gender: objAuthor.gender,
      age: objAuthor.age
    })
    .then((newAuthor) => {
      View.addNew(newAuthor)
    })
    .catch((err) => {
      View.addNew(err)
    })
  }

  static readOne(input) {
    Author.find({
      where: {
        id: `${input}`
      }
    })
    .then((author) => {
      View.find(author)
    })
    .catch((err) => {
      View.find(err)
    })
  }

  static readAll() {
    Author.findAll()
    .then((authors) => {
      View.readAll(authors)
    })
    .catch((err) => {
      View.readAll(err)
    })
  }

  static update(column, inputValue, inputId) {
    Author.update({
      [column]: inputValue
    }, {
      where: {
        id: inputId
      }
    })
    .then((updated) => {
      View.update(updated)
    })
    .catch((err) => {
      View.update(err)
    })
  }

  static deleteById(inputId) {
    Author.destroy({
      where: {
        id: inputId
      }
    })
    .then((deleted) => {
      View.update(deleted)
    })
    .catch((err) => {
      View.update(err)
    })
  }

}

module.exports = ControllerAuthor
