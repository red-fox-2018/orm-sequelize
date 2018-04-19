'use strict'
const Article = require('./controllers/article');
const Author = require('./controllers/author');
const Tag = require('./controllers/tag');
const command = process.argv;

if (command[2] === 'author') {
  switch (command[3]) {
    case 'add':
      Author.add(command[4], command[5], command[6], command[7], parseInt(command[8]));
      break;
    case 'read_one':
      Author.read_one(command[4]);
      break;
    case 'read_all':
      Author.read_all();
      break;
    case 'update':
      Author.update(command[4], command[5], command[6]);
      break;
    case 'erase':
      Author.erase(command[4]);
      break;
    default:
      break;
  }
} else if (command[2] === 'tag') {
  switch (command[3]) {
    case 'add':
      Tag.add(command[4]);
      break;
    case 'read_one':
      Tag.read_one(command[4]);
      break;
    case 'read_all':
      Tag.read_all();
      break;
    case 'update':
      Tag.update(command[4], command[5], command[6]);
      break;
    case 'erase':
      Tag.erase(command[4]);
      break;
    default:
      break;
  }
} else if (command[2] === 'article') {
  switch (command[3]) {
    case 'add':
      Article.add(command[4], command[5], parseInt(command[6]), parseInt(command[7]));
      break;
    case 'read_one':
      Article.read_one(command[4]);
      break;
    case 'read_all':
      Article.read_all();
      break;
    case 'update':
      Article.update(command[4], command[5], command[6]);
      break;
    case 'erase':
      Article.erase(command[4]);
      break;
    default:
      break;
  }
}