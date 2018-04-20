const argv = process.argv.slice(2)
const Controller = require('./controller.js')

let table=argv[0]
let command=argv[1]


if (table==='author') {
	if (command==='add') {
		Controller.addAuthor(argv.slice(2))
	}
}