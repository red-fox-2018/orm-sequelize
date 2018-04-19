const Model = require('../models/index');
const View = require('../views/view');

class Controller {
  constructor() {

  }

  static add(content){

    Model.article.create({
      article: content.slice(0).join(' '),
      createdAt: new Date,
      updatedAt: new Date
    })

    .then(success => {
      View.show(`article "${content.slice(0).join(' ')}" has been saved...`)
      process.exit()
    })
    .catch(err => {
      View.show(err)
    })

  }

  static read_one(content){

    Model.article.findOne(
      {
        raw:true,
        where:{id : +(content)
      }
    })

    .then(data => {

      if (data == null) {
        View.show(`data article is empty...`)
      } else {
        View.show(data)
      }

      process.exit()

    })
    .catch(err => {
      View.show(err)
    })


  }

  static read_all(content){

    Model.article.findAll({
      raw:true
    })

    .then(data => {

      if (data.length == 0) {
        View.show(`data article is empty...`)
      } else {
        View.show(data)
      }

      process.exit()

    })
    .catch(err => {
      View.show(err)
    })

  }

  static update(content){

    const id_article = content[0]
    const new_article = content.slice(1).join(' ')

    Model.article.update(
      {
        article: new_article
      },{
        where:{
          id: id_article
      }
    })

    .then(success => {
      View.show(`Article with id ${content[0]} updated successfully!`)

      process.exit()

    })
    .catch(err => {
      View.show("Article update failed !")
    })

  }

  static erase(content){

    Model.article.destroy({
      where:{
        id: +(content)
      }
    })

    .then(success => {
      View.show(`article with id "${+(content)}" is deleted...`)

      process.exit()

    })
    .catch(err => {
      View.show(err)
    })

  }

  static help(){

    View.help()

  }

}

module.exports = Controller;
