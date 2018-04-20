const db = require('../models')
const View = require('../view/view')

class ControllerArticle {

    static create(title,body,id_author,id_tag){

        db.Article.create({
            title: title,
            body: body,
            id_author: id_author,
            id_tag:id_tag
        })
        .then(resolveCreate =>{
            View.display(`Add Article Success`)
        })
        .catch(rejectCreate =>{
            View.display(rejectCreate)
        })
    }

    static update(id,column,value){
        
        db.Article.update({
            column:value
        },{
            where: { id:id }
        })
        .then(resolveUpdate => {
            View.display(`Update Article Success`)
        })
        .catch(rejectUpdate => {
            View.display(rejectUpdate)
        })
    }

    static delete(id){

        db.Article.destroy({
            where: { id:id }
        })
        .then(resolveDelete => {
            View.display(`Delete Success`)
        })
        .catch(rejectDelete => {
            View.display(rejectDelete)
        })
    }

    static findOne(id){

        db.Article.findOne({
            id:id
        })
        .then(resolveFindOne => {
            View.display(resolveFindOne)
        })
        .catch(rejectFindOne => {
            View.display(rejectFindOne)
        })
    }

    static findAll(){

        db.Article.findAll({
            raw:true
        })
        .then(resolveFindAll =>{
            View.display(resolveFindAll)
        })
        .catch(rejectFindAll =>{
            View.display(rejectFindAll)
        })
    }
}

module.exports = ControllerArticle