const argv = process.argv.slice(2)
const Controller = require('./controller');


let table = argv[0];
let command = argv[1];

if (table === 'author') {
  switch (command) {
    case 'add':
      //[0] first_name [1] last_name [2] religion [3] gender [4] age
      Controller.addAuthor(argv.slice(2))
      break;
    case 'read_one':        //by id
      Controller.findByID(argv[2])
      break;
    case 'read_all':
      Controller.findAllAuthor()
      break;
    case 'update':
      //[0] id; [1] col; [2] value
      Controller.updateById(argv.slice(2))
      break;
    case 'delete':
      Controller.deleteById(argv[2])
      break;
    default:

  }
}
