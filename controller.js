const model = require('./models');
const Author = model.Author
const View = require('./view');
const Sequelize = require('sequelize');
require('sequelize-values')(Sequelize)

class Controller {
  constructor() {

  }

  static addAuthor(inputData) {
    //[0] first_name; [1] last_name; [2] religion; [3] gender; [4] age
    Author.create({
                    first_name: inputData[0],
                    last_name: inputData[1],
                    religion: inputData[2],
                    gender: inputData[3],
                    age: inputData[4],
                    createdAt: new Date().toUTCString(),
                    updatedAt: new Date().toUTCString()
    })
    .then((author) => {
      View.successAddAuthor(author)
    })
    .catch((err) => {
      if (err) View.showErr(err)
    })
  }

  static findByID(inputId) {
    Author.findById(inputId)
    .then((author) => {
      return author.getValues();
    })
    .then((author) => {
      // console.log(author);
      View.showAuthor(author)
    })
    .catch((err) => {
      if (err) View.showErr(err)
    })
  }

  static findAllAuthor() {
    Author.findAll({
      attributes: {include: ''}
    })
    .then((authors) => {
      // console.log(authors);
      return authors.map((authors) => {
        return authors.getValues();
      })
    })
    .then((authors) => {
      View.showAuthor(authors)
    })
    .catch((err) => {
      if (err) View.showErr(err)
    })
  }

  static updateById(inputData) {
    //[0] id; [1] col; [2] value
    Author.update({
      [inputData[1]]: inputData[2],
      updatedAt: new Date().toUTCString()
    }, {
      where: {
        id: inputData[0]
      },
      returning: true
    })
    .then((countAndRows) => {
      View.successUpdateAuthor(countAndRows);
    })
    .catch((err) => {
      if (err) View.showErr(err)
    })
  }

  static deleteById(inputId) {
    Author.destroy({
      where:{
        id: inputId
      }
    })
    .then((num) => {
      View.successDelAuthor(num)
    })
    .catch((err) => {
      View.showErr(err)
    })
  }
}

module.exports = Controller
