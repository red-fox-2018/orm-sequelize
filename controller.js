const View = require('./view')
const db = require('./models/index')

class Controller {

    static addAuthor(firstName, lastName, religion, gender, age){
        db.Author.create({
            firstName: firstName,
            lastName: lastName,
            religion: religion,
            gender: gender,
            age: age
        })
        .then(author =>{
            View.print('create author success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static findOneAuthor(id){
        db.Author.findById(id, {
            raw: true
        })
        .then(author =>{
            View.print(author)
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static findAllAuthor(){
        db.Author.findAll({
            raw: true
        })
        .then(authors =>{
            View.print(authors)
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static updateAuthor(id, column, value){
        let data;
        switch (column) {
            case 'firstName':
                data = {firstName: value}
                break;

            case 'lastName':
                data = {lastName: value}
                break;

            case 'religion':
                data = {religion: value}
                break;

            case 'gender':
                data = {gender: value}
                break;

            case 'age':
                data = {age: value}
                break;
        }

        db.Author.update(data, {
            where: {id: id}
        })
        .then(author =>{
            View.print('update author success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static deleteAuthor(id){
        db.Author.destroy({
            where: {id: id}
        })
        .then(author =>{
            View.print(`delete author success`);
            process.exit();
        })
        .catch(err =>{
            View.print(err);
        })
    }

    static addArticle(title, body, AuthorId, TagId){
        db.Article.create({
            title: title,
            body: body,
            AuthorId: AuthorId,
            TagId: TagId
        })
        .then(article =>{
            View.print('create article success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static findOneArticle(id){
        db.Article.findById(id, {
            raw: true
        })
        .then(article =>{
            View.print(article)
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static findAllArticle(){
        db.Article.findAll({
            raw: true
        })
        .then(articles =>{
            View.print(articles)
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static updateArticle(id, column, value){
        let data;
        switch (column) {
            case 'title':
                data = {title: value}
                break;

            case 'body':
                data = {body: value}
                break;

            case 'AuthorId':
                data = {AuthorId: value}
                break;

            case 'TagId':
                data = {TagId: value}
                break;

        }

        db.Article.update(data, {
            where: {id: id}
        })
        .then(article =>{
            View.print('update article success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static deleteArticle(id){
        db.Article.destroy({
            where: {id: id}
        })
        .then(article =>{
            View.print(`delete article success`);
            process.exit();
        })
        .catch(err =>{
            View.print(err);
        })
    }

    static addTag(name){
        db.Tag.create({
            name: name
        })
        .then(tag =>{
            View.print('create tag success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static findOneTag(id){
        db.Tag.findById(id, {
            raw: true
        })
        .then(tag =>{
            View.print(tag)
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static findAllTag(){
        db.Tag.findAll({
            raw: true
        })
        .then(tags =>{
            View.print(tags)
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static updateTag(id, column, value){
        let data;
        switch (column) {
            case 'name':
                data = {name: value}
                break;

        }

        db.Tag.update(data, {
            where: {id: id}
        })
        .then(tag =>{
            View.print('update tag success')
            process.exit()
        })
        .catch(err =>{
            View.print(err)
        })
    }

    static deleteTag(id){
        db.Tag.destroy({
            where: {id: id}
        })
        .then(tag =>{
            View.print(`delete tag success`);
            process.exit();
        })
        .catch(err =>{
            View.print(err);
        })
    }

}

module.exports = Controller
