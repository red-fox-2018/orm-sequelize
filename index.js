const HelpController = require('./controllers/help');
const AuthorController = require('./controllers/author');
const ArticleController = require('./controllers/article');
const TagController = require('./controllers/tag');

var argv = process.argv

var table = argv[2]
var command = argv[3]

switch(table){
  case 'author':
    switch(command){
      case 'add':
        let inputData = argv.slice(4)
        AuthorController.create(inputData)
        break;
      case 'read_one':
        AuthorController.readOne(argv[4])
        break;
      case 'read_all':
        AuthorController.readAll()
        break;
      case 'update':
        let id = argv[4]
        let values = argv[5]
        AuthorController.update(id, values)
        break;
      case 'erase':
        AuthorController.erase(argv[4])
        break;
      default: HelpController.help()
    }

    break;

  case 'article':

    switch(command){
      case 'add':
        let inputData = argv.slice(4)
        ArticleController.create(inputData)
        break;
      case 'read_one':
        ArticleController.readOne(argv[4])
        break;
      case 'read_all':
        ArticleController.readAll()
        break;
      case 'update':
        let id = argv[4]
        let values = argv[5]
        ArticleController.update(id, values)
        break;
      case 'erase':
        ArticleController.erase(argv[4])
        break;
      default: HelpController.help()
    }

    break;

  case 'tag':

    switch(command){
      case 'add':
        let name = argv[4]
        TagController.create(name)
        break;
      case 'read_one':
        TagController.readOne(argv[4])
        break;
      case 'read_all':
        TagController.readAll()
        break;
      case 'update':
        let id = argv[4]
        let values = argv[5]
        TagController.update(id, values)
        break;
      case 'erase':
        TagController.erase(argv[4])
        break;
      default: HelpController.help()
    }

    break;
  default: HelpController.help()
}
