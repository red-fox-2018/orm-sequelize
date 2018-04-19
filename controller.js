let Models = require('./models')

class Controller{
    static add(first_name,last_name,religion,gender,age){
        Models.Authors.create({ 
            first_name: first_name,
            last_name:last_name,
            religion:religion, 
            gender:gender, 
            age:age,
            createdAt:new Date(),
            updatedAt:new Date()
        }).then(data => {
            console.log(data.get({
                plain: true
            })) 
        })
    }
    static read_one(id){
        Models.Authors.findOne(
            {
           where:{id:id}
        }
        ).then(data => {
            console.log(data.get({
                plain: true}))
        })
    }
    static read_all() {
        Models.Authors.findAll({
            raw:true
        }).then(data => {
            console.log(data)
        })
    }
    static update(attribute,value,id) {
        let obj = {}
        obj[attribute] = value
        Models.Authors.update(obj,{ where: { id: id }}).then(data => {
        console.log(data)
        })
    }
    static delete(id) {
        Models.Authors.destroy({ where: { id: id } }).then(data => {
            console.log(data)
        })
    }
}

module.exports = Controller
