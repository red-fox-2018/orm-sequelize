'use strict'
const Model = require('../models');
const View = require('../views/view');

class Controller {
  static add(first_name, last_name, religion, gender, age) {
    Model.Author.create({
        first_name: first_name,
        last_name: last_name,
        religion: religion,
        gender: gender,
        age: age
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

  static update(id, column, value) {
    let objUpdate;

    switch (column) {
      case 'first_name':
        objUpdate = {
          first_name: value
        }
        break;
      case 'last_name':
        objUpdate = {
          last_name: value
        }
        break;
      case 'religion':
        objUpdate = {
          religion: value
        }
        break;
      case 'gender':
        objUpdate = {
          gender: value
        }
        break;
      case 'age':
        objUpdate = {
          age: value
        }
        break;
      default:
        break;
    }

    Model.Author.update(objUpdate, {
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