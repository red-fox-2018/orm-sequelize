/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

const Author = require('./controllers/author.js');
const Tag = require('./controllers/tag.js');
const Article = require('./controllers/article.js');
const Help = require('./views/help.js');

const argv = process.argv;

class Start {
   static run() {
      switch (argv[2]) {
         case 'article':
            Article.run(argv.splice(3));
            break;
         case 'author':
            Author.run(argv.splice(3));
            break;
         case 'tag':
            Tag.run(argv.splice(3));
            break;
         default:
            Help.view();
            break;
      }
   }
}

Start.run();
