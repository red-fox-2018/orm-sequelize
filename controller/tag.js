const db = require('../models')
const View = require('../view/view')

class ControllerTag{

    static create(name){
        
        db.Tag.create({
            name:name
        })
        .then(resolveCreate => {
            View.display(`Create Tag Success`)
        })
        .catch(rejectCreate => {
            View.display(rejectCreate)
        })
    }

    static update(id,name){

        db.Tag.update({
            name:name
        },{
            where:{ id:id }
        })
        .then(resolveUpdate =>{
            View.display(`Update Tag Success`)
        })
        .catch(rejectUpdate => {
            View.display(rejectUpdate)
        })
    }

    static delete(id){

        db.Tag.destroy({
            where:{id:id}
        })
        .then(resolveDelete => {
            View.display(`Delete Success`)
        })
        .catch(rejectDelete =>{
            View.display(rejectDelete)
        })
    }

    static findOne(id){

        db.Tag.findOne({
            id:id
        },{
            raw:true
        })
        .then(resolveFindOne => {
            View.display(resolveFindOne)
        })
        .catch(rejectFindOne => {
            View.display(rejectFindOne)
        })
    }

    static findAll(){

        db.Tag.findAll({
            raw:true
        })
        .then(resolveFindAll => {
            View.display(resolveFindAll)
        })
        .catch(rejectFindAll => {
            View.display(rejectFindAll)
        })
    }
}

module.exports = ControllerTag