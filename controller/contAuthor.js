const Models = require('../models');
const View = require('../View');

class ContAuthor{

  static readAll(data){
    //console.log(data);
    Models.Author.findAll()
      .then(authorData=>{
        View.show(authorData)
      })
      .catch(error=>{
        console.log(error);
      })
  }


}


module.exports = ContAuthor;
