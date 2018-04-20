/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

const Model = require('../models');
const View = require('../views/author.js');

class Author {
   static run(input) {
      switch (input[0]) {

         case 'read_one':
            Model.Author.findById(input[1], {
                  raw: true
               })
               .then(data => {
                  View.read_one(data);
               });
            break;

         case 'read_all':
            Model.Author.findAll({
                  raw: true
               })
               .then(data => {
                  View.read_all(data);
               });
            break;

         case 'add':
            Model.Author.create({
                  first_name: input[1],
                  last_name: input[2],
                  religion: input[3],
                  gender: input[4],
                  age: input[5]
               })
               .then(data => {
                  View.read_one(data.dataValues);
               });
            break;

         case 'update':
            let index = input[1];
            let change = input.splice(2);
            let obj = {};
            for (let i = 0; i < change.length; i++) {
               let column = change[i].split(':')[0];
               let value = change[i].split(':')[1];
               obj[column] = value;
            }
            Model.Author.update(
                  obj, {
                     where: {
                        id: index
                     }
                  }
               )
               .then(() => Model.Author.findAll({
                     raw: true
                  })
                  .then(data => {
                     View.read_all(data);
                  }))
               .catch(err => console.log(err));
            break;

         case 'delete':
            Model.Author.destroy({
                  where: {
                     id: input[1]
                  }
               })
               .then(() => {
                  Model.Author.findAll({
                        raw: true
                     })
                     .then(data => {
                        View.read_all(data);
                     });
               });
            break;
      }
   }
}

module.exports = Author;
