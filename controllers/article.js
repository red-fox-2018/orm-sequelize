'use strict'
const Model = require('../models');
const View = require('../views/view');

class Controller {
  static add(title, body, authorId, tagId) {
    Model.Article.create({
        title: title,
        body: body,
        authorId: authorId,
        tagId: tagId
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static read_one(id) {
    Model.Article.findOne({
        where: {
          id: id
        }
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static read_all() {
    Model.Article.findAll()
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static update(id, column, value) {
    let objUpdate;

    switch (column) {
      case 'title':
        objUpdate = {
          title: value
        }
        break;
      case 'body':
        objUpdate = {
          body: value
        }
        break;
      case 'AuthorId':
        objUpdate = {
          AuthorId: value
        }
        break;
      case 'TagId':
        objUpdate = {
          TagId: value
        }
        break;
      default:
        break;
    }

    Model.Article.update(objUpdate, {
        where: {
          id: id
        }
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static erase(id) {
    Model.Article.destroy({
        where: {
          id: id
        }
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }
}

module.exports = Controller;