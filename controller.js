const db = require('./models/index.js')


class Controller {
  static add(table,values){
    if (table == 'Authors') {//[0] = first_name,[1] = last_name, [2] = religion, [3] = gender, [4] = age
      db.Authors.create({
        first_name: `${values[0]}`,
        last_name: `${values[1]}`,
        religion: `${values[2]}`,
        gender: `${values[3]}`,
        age: values[4],
        createdAt: new Date(),
        updatedAt: new Date()
      }).then(author =>{
        console.log(author.get({
          plain:true
        }));
      })
    }
  }
  static read_one(table,itemId){
    if (table == 'Authors') {
      db.Authors.findById(itemId).then(result => {
        console.log(result.get({
          plain:true
        }));
      })
    }
  }
  static read_all(table){
    if (table == 'Authors') {
      db.Authors.findAll({raw:true}).then(result =>{
        console.log(result);
      })
    }
  }
  static update(table,column,value,itemId){
    // console.log('column ', column);
    // console.log('value ', value);
    if (table == 'Authors') {
      let obj = {}
      obj[column] = value
      db.Authors.update(
        obj,
        {where: {id: itemId} }
      ).then(result => {
        console.log(result)
      })
    }
  }
  static destroy(table,itemId){
    if (table == 'Authors') {
      db.Authors.destroy({where: {id: itemId}}).then(result => {
        console.log(result);
      })
    }
  }
}
module.exports = Controller
