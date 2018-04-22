const argv = process.argv.slice(2)
const Controller = require('./controller')


if (argv[0]=='author' && argv[1]=='add') {
	Controller.addAuthor(argv.slice(2))
}
if (argv[0]==='author' && argv[1]==='read_one'){
	Controller.findById(argv[2])
}
if (argv[0]==='author' && argv[1]==='read_all') {
	Controller.findAll()
}
if (argv[0]==='author' && argv[1]==='update') {
	Controller.updateById(argv.slice(2))
}
if (argv[0]==='author' && argv[1]==='delete') {
	Controller.deleteById(argv[2])
}