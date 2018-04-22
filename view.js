class View{
	constructor(){

	}
	static showErr(err){
		console.log(err)
	}
	static addAuthor(data){
		console.log(data)
	}
	static showAuthor(data){
		console.log('ini viewnnya',data)
	}
	static updateAuthor(data){
	console.log(`Updated ${data[0]} data(s)`)
 
	}
	static deletedData(data){
		console.log('data deleted',data)
	}
}

module.exports = View