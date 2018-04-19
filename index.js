let argv = process.argv
let command = argv[2]

let Controller = require('./controller')

switch (command) {
    case 'add':
        if(argv[3]=='author'){
            Controller.add(argv[4], argv[5], argv[6], argv[7], argv[8])
        }
        break;
    case 'read_one':
        if(argv[3]=='author'){
            Controller.read_one(argv[4])
        }
        break;
    case 'read_all':
        if (argv[3] == 'author') {
            Controller.read_all()
        }
        break;
    case 'update':
        if (argv[3] == 'author') {
            Controller.update(argv[4], argv[5], argv[6])
        }
        break;
    case 'delete':
        if (argv[3] == 'author') {
            Controller.delete(argv[4])
        }
        break;
    default:
        break;
}