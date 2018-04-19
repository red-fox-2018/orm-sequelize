const argv = process.argv
const table = argv[2]
const command = argv[3]
const content = argv.slice(4)

const Controller_author = require('./controllers/controller_author');
const Controller_tag = require('./controllers/controller_tag');
const Controller_article = require('./controllers/controller_article');

if (table == 'author') {

  switch (command) {
    case 'add':{ return Controller_author.add(content) }
    case 'read_one':{ return Controller_author.read_one(content) }
    case 'read_all':{ return Controller_author.read_all(content) }
    case 'update':{ return Controller_author.update(content) }
    case 'erase':{ return Controller_author.erase(content) }
    default: { return Controller_author.help() }

  }

} else if (table == 'tag') {

  switch (command) {
    case 'add':{ return Controller_tag.add(content) }
    case 'read_one':{ return Controller_tag.read_one(content) }
    case 'read_all':{ return Controller_tag.read_all(content) }
    case 'update':{ return Controller_tag.update(content) }
    case 'erase':{ return Controller_tag.erase(content) }
    default: { return Controller_tag.help() }

  }

} else if (table == 'article') {

  switch (command) {
    case 'add':{ return Controller_article.add(content) }
    case 'read_one':{ return Controller_article.read_one(content) }
    case 'read_all':{ return Controller_article.read_all(content) }
    case 'update':{ return Controller_article.update(content) }
    case 'erase':{ return Controller_article.erase(content) }
    default: { return Controller_article.help() }

  }

} else {

  return Controller_author.help()

}
