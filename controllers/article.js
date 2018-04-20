/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

const Model = require('../models');
const View = require('../views/article.js');

class Article {
   static run(input) {
      switch (input[0]) {

         case 'read_one':
            Model.Article.findById(input[1], {
                  raw: true
               })
               .then(data => {
                  View.read_one(data);
               });
            break;

         case 'read_all':
            Model.Article.findAll({
                  raw: true
               })
               .then(data => {
                  View.read_all(data);
               });
            break;

         case 'add':
            Model.Article.create({
                  title: input[1],
                  body: input[2],
                  id_author: input[3],
                  id_tag: input[4]
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
            Model.Article.update(
                  obj, {
                     where: {
                        id: index
                     }
                  }
               )
               .then(() => Model.Article.findAll({
                     raw: true
                  })
                  .then(data => {
                     View.read_all(data);
                  }))
               .catch(err => console.log(err));
            break;

         case 'delete':
            Model.Article.destroy({
                  where: {
                     id: input[1]
                  }
               })
               .then(() => {
                  Model.Article.findAll({
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

module.exports = Article;
