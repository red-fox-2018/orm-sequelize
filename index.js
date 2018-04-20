const cmd = process.argv
const { ControllerArticle, ControllerAuthor, ControllerTag } = require('./controller')

if(cmd[2] == 'tag'){
    switch (cmd[3]) {
        case 'create':
            ControllerTag.create(cmd[4])
            break;
        case 'update':
            ControllerTag.update(cmd[4],cmd[5])
            break;
        case 'delete':
            ControllerTag.delete(cmd[4])
            break;
        case 'findOne':
            ControllerTag.find(cmd[4])
            break;
        case 'findAll':
            ControllerTag.findAll()
            break;
        
        default:
            break;
    }
}

if(cmd[2] == 'author'){
    switch (cmd[3]) {
        case 'create':
            ControllerAuthor.create(cmd[4],cmd[5],cmd[6],cmd[7],cmd[8])
            break;
        case 'update':
            ControllerAuthor.update(cmd[4],cmd[5],cmd[6])
            break;
        case 'delete':
            ControllerAuthor.delete(cmd[4])
            break;
        case 'findOne':
            ControllerAuthor.find(cmd[4])
            break;
        case 'findAll':
            ControllerAuthor.findAll()
            break;
        
        default:
            break;
    }
}


if(cmd[2] == 'article'){
    switch (cmd[3]) {
        case 'create':
            ControllerArticle.create(cmd[4],cmd[5],cmd[6],cmd[7])
            break;
        case 'update':
            ControllerArticle.update(cmd[4],cmd[5],cmd[6])
            break;
        case 'delete':
            ControllerArticle.delete(cmd[4])
            break;
        case 'findOne':
            ControllerArticle.find(cmd[4])
            break;
        case 'findAll':
            ControllerArticle.findAll()
            break;
        
        default:
            break;
    }
}