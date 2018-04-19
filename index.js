const command = process.argv.slice(2)
const Controller = require('./controllers/controller')

switch (command[0]) {
    case 'author':
        if(command[1] == 'add'){
            Controller.addAuthor(command[2], command[3], command[4], command[5], command[6])
        } else if(command[1] == 'read_one'){
            Controller.findOneAuthor(command[2])
        } else if(command[1] == 'read_all'){
            Controller.findAllAuthor(command[2])
        } else if(command[1] == 'update'){
            Controller.updateAuthor(command[2], command[3], command[4])
        } else if(command[1] == 'delete'){
            Controller.deleteAuthor(command[2])
        }
        break;

    case 'article':
        if(command[1] == 'add'){
            Controller.addArticle(command[2], command[3], command[4], command[5])
        } else if(command[1] == 'read_one'){
            Controller.findOneArticle(command[2])
        } else if(command[1] == 'read_all'){
            Controller.findAllArticle(command[2])
        } else if(command[1] == 'update'){
            Controller.updateArticle(command[2], command[3], command[4])
        } else if(command[1] == 'delete'){
            Controller.deleteArticle(command[2])
        }
        break;

    case 'tag':
        if(command[1] == 'add'){
            Controller.addTag(command[2])
        } else if(command[1] == 'read_one'){
            Controller.findOneTag(command[2])
        } else if(command[1] == 'read_all'){
            Controller.findAllTag(command[2])
        } else if(command[1] == 'update'){
            Controller.updateTag(command[2], command[3], command[4])
        } else if(command[1] == 'delete'){
            Controller.deleteTag(command[2])
        }
        break;

}