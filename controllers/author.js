const View = require ('../views/author');
const { Author } = require ('../models')

class Controller {
  constructor() {

  }

  readAll(){
    Author.findAll({raw:true})
    .then(authors => {
      // console.log(authors);
      View.showAll(authors)
    })
    .catch(err => {
      console.log(err);
    })
  }

  readOne(id){
    Author.findById(id)
    .then(author => {
      View.showData(author)
    })
    .catch(err =>{
      View.showErr(err)
    })
  }

  create(newAuthor){
    Author.create({
      first_name: newAuthor[0],
      last_name: newAuthor[1],
      religion: newAuthor[2],
      gender: newAuthor[3],
      age: newAuthor[4],
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(newAuthor => {
      View.successAdd(newAuthor)
    })
    .catch(err => {
      View.showErr(err)
    })
  }

  update(authorId, values){
    let splitValues = values.split(":")
    let column = splitValues[0]
    let newData = {
       [column]: splitValues[1]
    }
    console.log(newData);

    Author.update(newData, {where: {id : authorId}})
    .then(updAuthor => {
      View.successUpdate(updAuthor)
    })
    .catch(err => {
      View.showErr(err)
    })
  }

  erase(idAuthor){
    Author.destroy({
      where: { id: idAuthor}
    })
    .then(deleted => {
      View.successDelete(deleted)
    })
    .catch( err => {
      View.showErr(err)
    })
  }

}

let controller = new Controller()
module.exports = controller;
