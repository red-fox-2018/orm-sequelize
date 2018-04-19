var command = process.argv.slice(2)
const Controller = require('./controllers.js')
const ControllerAuthor = require('./cAuthor.js')
const ControllerArticle = require('./cArticle.js')
const ControllerTag = require('./cTag.js')

if(command[0] === 'help') {
  Controller.help()
}

if(command[0] === 'author') {
  if(command[1] === 'add') {
    ControllerAuthor.addNew({first_name: command[2], last_name: command[3], religion: command[4], gender: command[5], age: command[6])
  }
  if(command[1] === 'read_one') {
    ControllerAuthor.readOne(command[2])
  }
  if(command[1] === 'read_all') {
    ControllerAuthor.readAll(command[2])
  }
  if(command[1] === 'update') {
    ControllerAuthor.update(command[2], command[3], command[4])
  }
  if(command[1] === 'delete') {
    ControllerAuthor.deleteById(command[2])
  }
}

if(command[0] === 'article') {
  if(command[1] === 'add') {
    ControllerArticle.addNew({title: command[2], body: command[3], id_author: command[4], id_tag: command[5])
  }
  if(command[1] === 'read_one') {
    ControllerArticle.readOne(command[2])
  }
  if(command[1] === 'read_all') {
    ControllerArticle.readAll(command[2])
  }
  if(command[1] === 'update') {
    ControllerArticle.update(command[2], command[3], command[4])
  }
  if(command[1] === 'delete') {
    ControllerArticle.deleteById(command[2])
  }
}

if(command[0] === 'tag') {
  if(command[1] === 'add') {
    ControllerTag.addNew({title: command[2], body: command[3], id_author: command[4], id_tag: command[5])
  }
  if(command[1] === 'read_one') {
    ControllerTag.readOne(command[2])
  }
  if(command[1] === 'read_all') {
    ControllerTag.readAll(command[2])
  }
  if(command[1] === 'update') {
    ControllerTag.update(command[2], command[3])
  }
  if(command[1] === 'delete') {
    ControllerTag.deleteById(command[2])
  }
}
