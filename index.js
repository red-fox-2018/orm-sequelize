const Controller = require('./controller')

let apply = process.argv.slice(2)

let command1 = apply[0]
let command2 = apply[1]

if(command1 == 'author' && command2 == 'add'){
    let first_name = apply[2]
    let last_name = apply[3]
    let religion = apply[4]
    let gender = apply[5]

    Controller.addAuthor(first_name, last_name, religion, gender)
}
else if(command1 == 'author' && command2 == 'read_one'){
    let id = apply[2]
    Controller.showById(command1, id)
}
else if(command1 == 'author' && command2 == 'read_all'){
    Controller.showAll(command1)
}
else if(command1 == 'author' && command2 == 'update'){
    let column = apply[2]
    let id = apply[3]
    let pros = apply.slice(4)
    let update = pros.join(' ')
    Controller.update(command1, column, id, update)
}
else if(command1 == 'author' && command2 == 'delete'){
    let id = apply[2]
    Controller.delete(command1, id)
}
else if(command1 == 'tag' && command2 == 'add'){
    let name = apply[2]
    Controller.addTag(name)
}
else if(command1 == 'tag' && command2 == 'read_one'){
    let id = apply[2]
    Controller.showById(command1, id)
}
else if(command1 == 'tag' && command2 == 'read_all'){
    Controller.showAll(command1)
}
else if(command1 == 'tag' && command2 == 'update'){
    let column = apply[2]
    let id = apply[3]
    let pros = apply.slice(4)
    let update = pros.join(' ')
    Controller.update(command1, column, id, update)
}
else if(command1 == 'tag' && command2 == 'delete'){
    let id = apply[2]
    Controller.delete(command1, id)
}
else if(command1 == 'article' && command2 == 'add'){
    let title = apply[2]
    let body = apply[3]
    let authorId = apply[4]
    let tagId = apply[5]
    Controller.addArticle(title, body, authorId, tagId)
}
else if(command1 == 'article' && command2 == 'read_one'){
    let id = apply[2]
    Controller.showById(command1, id)
}
else if(command1 == 'article' && command2 == 'read_all'){
    Controller.showAll(command1)
}
else if(command1 == 'article' && command2 == 'update'){
    let column = apply[2]
    let id = apply[3]
    let pros = apply.slice(4)
    let update = pros.join(' ')
    Controller.update(command1, column, id, update)
}
else if(command1 == 'article' && command2 == 'delete'){
    let id = apply[2]
    Controller.delete(command1, id)
}