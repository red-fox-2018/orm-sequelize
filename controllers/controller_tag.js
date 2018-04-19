const Model = require('../models/index');
const View = require('../views/view');

class Controller {
  constructor() {

  }

  static add(content){

    Model.tags.create({
      tag: content[0],
      createdAt: new Date,
      updatedAt: new Date
    })

    .then(success => {
      View.show(`tag "${content[0]}" has been saved...`)
      process.exit()
    })
    .catch(err => {
      View.show(err)
    })

  }

  static read_one(content){

    Model.tags.findOne(
      {
        raw:true,
        where:{id : +(content)
      }
    })

    .then(data => {

      if (data == null) {
        View.show(`tags is empty...`)
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

    Model.tags.findAll({
      raw:true
    })

    .then(data => {

      if (data.length == 0) {
        View.show(`tags is empty...`)
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

    const id_tag = +(content[0])
    const new_record = content[1]

    Model.tags.update(
      {
        tag: new_record
      },{
        where:{
          id: id_tag
      }
    })

    .then(success => {
      View.show(`Tag with id ${content[0]} updated successfully!`)

      process.exit()

    })
    .catch(err => {
      View.show("Tag update failed !")
    })

  }

  static erase(content){

    Model.tags.destroy({
      where:{
        id: +(content)
      }
    })

    .then(success => {
      View.show(`tag with id "${+(content)}" is deleted...`)

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
