const Controller = require('./controller.js');
const argv = process.argv.slice(2)
const command = argv[0]
const task = argv[1]


if (task == 'add') {
  console.log(argv.slice(2));
  Controller.add(command,argv.slice(2))//table,values
} else if (task == 'read_one') {
  Controller.read_one(command,+(argv[2]))//table,id
} else if (task == 'read_all' ) {
  Controller.read_all(command)//table
} else if (task == 'update') {
  Controller.update(command,argv[2],argv[3],+(argv[4]))// table,column,value,id (update sequelize)
} else if (task == 'erase') {//destroy
  Controller.destroy(command,+(argv[2]))//table,id

}
