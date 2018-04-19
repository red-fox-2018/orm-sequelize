
const { AutorController }= require('./controllers');

let argv = process.argv.slice(2);
let command = argv.slice(0, 2).join(' ');
let values = argv.slice(2);

switch(command) {
  case 'author add':
    AutorController.auhorAdd(values);
    break;
  case 'author read_one':
    AutorController.authorReadOne(values);
    break;
  case 'author read_all':
    AutorController.authorReadAll();
    break;
  case 'author update':
    AutorController.authorUpdate(values);
    break;
  case 'author delete':
    AutorController.authorDelete(values);
    break;
  default:
    console.log('Please enter correct command!');
    break;
}