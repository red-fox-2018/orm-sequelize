const index = require('..');
const { ViewTag, ViewAuthor, ViewArticle } = require('../view/view');
const Models = require('../models');

class Controller {
  static getCommand(command) {
    var table = command[0];
    var perintah = command[1];
    if (table == 'author') {
      if (perintah == 'read_all') {
        Models.Authors.findAll({raw: true})
        .then(dataAuthor => {
          ViewAuthor.showAuthorData(dataAuthor)
        })
        .catch(function(err) {
          ViewAuthor.showErr()
        })
      } else if (perintah == 'add') {
        var firstName = command[2];
        var lastName = command[3];
        var religion = command[4];
        var gender = command[5];
        var age = command[6];
        Models.Authors.create({
          first_name: firstName,
          last_name: lastName,
          religion: religion,
          gender: gender,
          age: age
        })
        .then(function() {
          ViewAuthor.addAuthor();
        })
        .catch(function(err) {
          ViewAuthor.showErr()
        })
      } else if (perintah == 'read_one') {
        //find 1 id
        var idYangDicari = command[2];
        Models.Authors.findOne({where: {id: idYangDicari}, raw: true})
        .then(data => {
          ViewAuthor.showDataById(data);
        })
        .catch(function(err) {
          ViewAuthor.showErr();
        })
      } else if (perintah == 'update') {
        //update author
        var idYangPengenDiupdate = command[2];
        var valueYangPengenDiupdate = command[3];
        var isiUpdate = command[4];

        Models.Authors.update({
          [valueYangPengenDiupdate]: isiUpdate
        }, {where: {id: Number(idYangPengenDiupdate)}})
        .then(function(data) {
          ViewAuthor.updateData();
        })
        .catch(function(err) {
          ViewAuthor.showErr();
        })
      }
    }
  }
}

module.exports = Controller;
