const View = require ('../views/tag');
const { Tag } = require ('../models')

class Controller {
  constructor() {

  }

  readAll(){
    Tag.findAll({raw:true})
    .then(tags => {
      // console.log(Tags);
      View.showAll(tags)
    })
    .catch(err => {
      console.log(err);
    })
  }

  readOne(id){
    Tag.findById(id)
    .then(tag => {
      View.showData(tag)
    })
    .catch(err =>{
      View.showErr(err)
    })
  }

  create(tag){
    Tag.create({
      name: tag,
      createdAt: new Date(),
      updatedAt: new Date()
    })
    .then(newTag => {
      View.successAdd(newTag)
    })
    .catch(err => {
      View.showErr(err)
    })
  }

  update(tagId, values){
    let splitValues = values.split(":")
    let column = splitValues[0]
    let newData = {
       [column]: splitValues[1]
    }
    console.log(newData);

    Tag.update(newData, {where: {id : tagId}})
    .then(updTag => {
      View.successUpdate(updTag)
    })
    .catch(err => {
      View.showErr(err)
    })
  }

  erase(idTag){
    Tag.destroy({
      where: { id: idTag}
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
