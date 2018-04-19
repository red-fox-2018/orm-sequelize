const Model = require('../models/index');
const View = require('../views/view');

class Controller {
  constructor() {

  }

  static add(content){

    Model.author.create({
      first_name: content[0],
      last_name: content[1],
      religion: content[2],
      gender: content[3],
      age: +(content[4]),
      createdAt: new Date,
      updatedAt: new Date
    })

    .then(success => {
      View.show(`data "${content[0]} ${content[1]}" has been saved...`)
      process.exit()
    })
    .catch(err => {
      View.show(err)
    })

  }

  static read_one(content){

    Model.author.findOne(
      {
        raw:true,
        where:{id : +(content)
      }
    })

    .then(data => {

      if (data == null) {
        View.show(`data author is empty...`)
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

    Model.author.findAll({
      raw:true
    })

    .then(data => {

      if (data.length == 0) {
        View.show(`data author is empty...`)
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

    const key = content[1]
    const new_record = content[2]
    const id_author = +(content[0])
    let data = ''

    switch (key) {

      case 'first_name': { data = {first_name: new_record}; break; }
      case 'last_name': { data = {last_name: new_record}; break; }
      case 'religion': { data = {religion: new_record}; break; }
      case 'gender': { data = {gender: new_record}; break; }
      case 'age': { data = {age: +(new_record)}; break; }
      default:{ return View.help() }

    }

    Model.author.update(
      data,
      {
        where:{
          id: id_author
      }
    })

    .then(success => {
      View.show(`Author with id ${content[0]} updated successfully!`)

      process.exit()

    })
    .catch(err => {
      View.show("Author update failed !")
    })

  }

  static erase(content){

    Model.author.destroy({
      where:{
        id: +(content)
      }
    })

    .then(success => {
      View.show(`data with id "${+(content)}" is deleted...`)

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
