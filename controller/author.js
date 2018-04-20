const db = require('../models')
const View = require('../view/view')

class ControllerAuthor{

    static create(Fname,Lname,Religion,Religion,Age){
        
        db.Author.create({
            first_name:Fname,
            last_name:Lname,
            Religion:Religion,
            gender:Gender,
            age:Age
        })
        .then(resolveCreate => {
            View.display(`Create Author Success`)
        })
        .catch(rejectCreate => {
            View.display(rejectCreate)
        })
    }

    static update(idNew,column,value){

        db.Author.update({
            column:value
        },{
            where:{ id:idNew }
        })
        .then(resolveUpdate =>{
            View.display(`Update Author Success`)
        })
        .catch(rejectUpdate => {
            View.display(rejectUpdate)
        })
    }

    static delete(idNew){

        db.Author.destroy({
            where:{id:idNew}
        })
        .then(resolveDelete => {
            View.display(`Delete Success`)
        })
        .catch(rejectDelete =>{
            View.display(rejectDelete)
        })
    }

    static findOne(idNew){

        db.Author.findOne({
            id:New
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

        db.Author.findAll({
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

module.exports = ControllerAuthor