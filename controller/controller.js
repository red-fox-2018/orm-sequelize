const Model = require('../models')
const View = require('../view/view')

class Controller{
    static addAuthor(first_name,last_name,religion,gender,age){
        Model.Authors.create(
                { 
                    first_name: first_name, 
                    last_name: last_name,
                    religion : religion,
                    gender : gender,
                    age : age,
                    createdAt : new Date(),
                    updatedAt : new Date()
                }
            )
            .then(user => {
                console.log(user.get({plain: true}))
            })
    }

    static readAuthor(id){
        Model.Authors.findOne(
            { 
                where: { id: id } 
            }
        ).then(person => {
            console.log(person.get({plain: true}))
        })
    }

    static readAuthorAll(){
        Model.Authors.findAll({raw: true})
        .then(person => {
            console.log(person)
        })
    }
    
    static updateAuthor(id,kolom,value){
        let title = {}
        title[kolom] = value
        Model.Authors.update(
            title,
            {where: { id: id }},
            {raw: true}
        )
        .then(person => {
            if(user){
                View.methodView(`Data berhasil diubah`)
                process.exit(0)
            }else{
                View.methodView(`Gagal diubah`)
                process.exit(0)
            }
        })
    }

    static deleteAuthor(id){
        Model.Authors.destroy(
            {where: { id: id }},
            {raw: true}
        )
        .then(person => {
            if(user){
                View.methodView(`Data berhasil dihapus`)
                process.exit(0)
            }else{
                View.methodView(`Gagal dihapus`)
                process.exit(0)
            }
        })
    }
}

module.exports = Controller