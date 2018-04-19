const Controller = require('./controller')

const input = process.argv.splice(2);
const tabel = input[0];
const command = input[1];
// console.log(tabel)
switch (command) {
  case 'add':
    var first_name = input[2];
    var last_name = input[3];
    var religion = input[4];
    var gender = input[5];
    var age = input[6];
    Controller.add(first_name, last_name, religion, gender, age, tabel);
    break;
  case 'read_one':
    var idData = input[2];
    Controller.read_one(idData, tabel);
    break;
  case 'read_all':
    Controller.read_all(tabel);
    break;
  case 'update':
    var input_column = input[2];
    var input_value = input[3];
    var idData = input[4];
    Controller.update(input_column, input_value, idData, tabel);
    break;
  case 'delete':
    var idData = input[2];
    Controller.delete(idData, tabel);
    break;
  case 'help':
    break;
  default:
    break;
}
