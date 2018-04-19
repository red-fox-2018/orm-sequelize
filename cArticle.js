let {Article} = require('./models')
const View = require('./views.js')

class ControllerArticle {

  static add(objArticle) {
    Author.create({
      title: objArticle.first_name,
      body: objArticle.last_name,
      id_author: objArticle.religion,
      id_tag: objArticle.gender
    })
    .then((newArticle) => {
      View.addNew(newArticle)
    })
    .catch((err) => {
      View.addNew(err)
    })
  }

  static readOne(input) {
    Article.find({
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
    Article.findAll()
    .then((articles) => {
      View.readAll(articles)
    })
    .catch((err) => {
      View.readAll(err)
    })
  }

  static update(column, inputValue, inputId) {
    Article.update({
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
    } )
  }

  static deleteById(inputId) {
    Article.destroy({
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

module.exports = ControllerArticle
