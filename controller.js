const model = require('./models')
const View = require('./view.js')
const Authors = model.Authors
const Sequelize = require('sequelize');

class Controller{
	constructor(){

	}

	static addAuthor(data){
		Authors.create({
			first_name: data[0],
			last_name: data[1],
			religion: data[2],
			gender: data[3],
			age: data[4]
		})
		.then((author)=>{
			View.addAuthor(author)
		})
		.catch((err)=>{
			if (err) 
			View.showErr(err)
		})
	}
}

module.exports = Controller