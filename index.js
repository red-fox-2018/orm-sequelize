const model = require("./models")
const Author = model.Author
var argv = process.argv;
var command = argv[2]
var task = argv[3]

if(command == "author") {
	if(task == "add") {
		Author.create({ first_name: argv[4], last_name: argv[5],religion:argv[6],gender:argv[7],age:argv[8], createdAt: new Date(),updatedAt:new Date() ,raw:true}).then(task => {
  			console.log(task.get({plain:true}))
			})
	}

	if(task == "read_one") {
		Author.findById(argv[4]).then(author => {
 			console.log(author.get({plain:true}))
		})
	}

	if(task == "read_all") {
		Author.findAll().then(author => {
  			console.log(author)	
		})

	}

	if(task == "update") {
		Author.update({
  			first_name: argv[4],
		}, {
			where:{
				id: argv[5]
			}	
		});

	}

	if(task == "erase") {
		Author.destroy({
  			where: {
    		id: argv[4]
  			}
		})
	}


}

