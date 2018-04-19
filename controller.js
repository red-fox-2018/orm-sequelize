const model = require('./models');
const Author = model.Author
const View = require('./view');

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
    Author.findAll({
      where: {
        id: inputId
      }
    })
    .then((author) => {
      return author.map(());
      // console.log(author);
      View.showAuthor(author)
    })
    .catch((err) => {
      if (err) View.showErr(err)
    })
  }
}

module.exports = Controller
