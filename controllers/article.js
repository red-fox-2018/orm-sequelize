const View = require ('../views/article');
const { Article } = require ('../models')

class Controller {
  constructor() {

  }

  readAll(){
    Article.findAll({raw:true})
    .then(articles => {
      // console.log(Articles);
      View.showAll(articles)
    })
    .catch(err => {
      console.log(err);
    })
  }

  readOne(id){
    Article.findById(id)
    .then(article => {
      View.showData(article)
    })
    .catch(err =>{
      View.showErr(err)
    })
  }

  create(newArticle){
    Article.create({
      title: newArticle[0],
      body: newArticle[1],
      AuthorId: newArticle[2],
      TagId: newArticle[3],
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(newArticle => {
      View.successAdd(newArticle)
    })
    .catch(err => {
      View.showErr(err)
    })
  }

  update(articleId, values){
    let splitValues = values.split(":")
    let column = splitValues[0]
    let newData = {
       [column]: splitValues[1]
    }
    console.log(newData);

    Article.update(newData, {where: {id : articleId}})
    .then(updArticle => {
      View.successUpdate(updArticle)
    })
    .catch(err => {
      View.showErr(err)
    })
  }

  erase(idArticle){
    Article.destroy({
      where: { id: idArticle}
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
