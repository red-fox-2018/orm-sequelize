const command = process.argv.slice(2)
const Controller = require('./controller')

switch (command[0]) {
    case 'author':
        switch (command[1]) {
          case 'add': return Controller.addAuthor(command[2], command[3], command[4], command[5], command[6])
          case 'read_one': return Controller.findOneAuthor(command[2])
          case 'read_all': return Controller.findAllAuthor(command[2])
          case 'update': return Controller.updateAuthor(command[2], command[3], command[4])
          case 'delete': return Controller.deleteAuthor(command[2])
        }
    break

    case 'article':
      switch (command[1]) {
          case 'add': return Controller.addArticle(command[2], command[3], command[4], command[5])
          case 'read_one': return Controller.findOneArticle(command[2])
          case 'read_all': return Controller.findAllArticle(command[2])
          case 'update': return Controller.updateArticle(command[2], command[3], command[4])
          case 'delete': return Controller.deleteArticle(command[2])
      }
    break;

    case 'tag':
      switch (command[1]) {
          case 'add': return Controller.addTag(command[2])
          case 'read_one': return Controller.findOneTag(command[2])
          case 'read_all': return Controller.findAllTag(command[2])
          case 'update': return Controller.updateTag(command[2], command[3], command[4])
          case 'delete': return Controller.deleteTag(command[2])
      }
    break;
}
