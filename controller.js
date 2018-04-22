const model = require('./models')
const View = require('./view.js')
const Authors = model.Authors
const Sequelize = require('sequelize');
require('sequelize-values')(Sequelize)

class Controller{
	constructor(){

	}

	static addAuthor(data){
		Authors.create({
			firstName: data[0],
			lastName: data[1],
			religion: data[2],
			gender: data[3],
			age: data[4],
			createdAt: new Date(),
			updatedAt: new Date()
		})
		.then((author)=>{
			View.addAuthor(author)
		})
		.catch((err)=>{
			if (err) 
			View.showErr(err)
		})
	}
	static findById(data){
		Authors.findById(data)
		.then((author)=>{
			return author.getValues();
		})
		.then((author)=>{
			View.showAuthor(author)
		})
		.catch((err)=>{
			if (err) View.showErr(err)
		})
	}
	static findAll(data){
		Authors.findAll({
			attribute:['id','firstName','lastName','religion','gender',
						'age','createdAt','updatedAt']
		})
		.then((authors)=>{
			return authors.map((authors)=>{
				return authors.getValues()
			})
		})
		.then((authors)=>{
			View.showAuthor(authors)
		})
		.catch((err)=>{
			if (err) View.showAuthor(err)
		})
	}
	static updateById(data){
		Authors.update({
			[data[1]]: data[2],// data 1 columnya, data 2 valuenya
			updatedAt: new Date()
		},{
			where:{
				id: data[0]
			},
			returning: true
		})
		.then((count)=>{
			View.updateAuthor(count)
		})
		.catch((err)=>{
			if (err) View.showErr(err)
		})
	}
	static deleteById(data){
		Authors.destroy({
			where:{
				id:data
			}
		})
		.then((deleteData)=>{
			View.deletedData(deleteData)
		})
		.catch((err)=>{
			View.showErr
		})
	}
}

module.exports = Controller	