const Controller = require('./controller/controller')

let argv = process.argv

let table = argv[2]
let command = argv[3]

if(table == 'author') {
    if(command == 'add') {
        Controller.addAuthor(argv[4],argv[5],argv[6],argv[7],argv[8])
    }

    if(command == 'read_one') {
        Controller.readAuthor(argv[4])
    }

    if(command == 'read_all') {
        Controller.readAuthorAll()
    }

    if(command == 'update') {
        Controller.updateAuthor(argv[4],argv[5],argv[6])
    }

    if(command == 'erase') {
        Controller.deleteAuthor(argv[4])
    }
}
