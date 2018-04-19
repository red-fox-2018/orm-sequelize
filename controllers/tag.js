'use strict'
const Model = require('../models');
const View = require('../views/view');

class Controller {
  static add(name) {
    Model.Author.create({
        name: name
      })
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static read_one(id) {
    Model.Author.findOne({
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
    Model.Author.findAll()
      .then(data => {
        View.showData(data);
      })
      .catch(err => {
        View.showErrorMessage(err);
      })
  }

  static update(id, value) {
    Model.Author.update({
        name: value
      }, {
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
    Model.Author.destroy({
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