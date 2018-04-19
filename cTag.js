let {Tag} = require('./models')
const View = require('./views.js')

class ControllerTag{

  static add(objTag) {
    Author.create({
      name: objTag.name,
    })
    .then((newTag) => {
      View.addNew(newTag)
    })
    .catch((err) => {
      View.addNew(err)
    })
  }

  static readOne(input) {
    Tag.find({
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
    Tag.findAll()
    .then((tags) => {
      View.readAll(tags)
    })
    .catch((err) => {
      View.readAll(err)
    })
  }

  static update(column, inputValue, inputId) {
    Tag.update({
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
    Tag.destroy({
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

module.exports = ControllerTag
