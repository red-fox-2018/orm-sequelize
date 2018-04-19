class View {
  constructor() {

  }

  showErr(err){
    console.log(err);
    process.exit()
  }

  showData(data){
    console.log('');
    console.log('== Your Result ===========');
    console.log(data.dataValues);
    console.log('==========================');
    process.exit()
  }

  showAll(data){
    console.log('');
    console.log('== Your Result ===========');
    console.log(data);
    console.log('==========================');
    process.exit()
  }

  successAdd(newAuthor){
    console.log(`New Author ${newAuthor.first_name} ${newAuthor.last_name} with id ${newAuthor.id} has been created`);
    process.exit()
  }

  successUpdate(newAuthor){
    console.log();
    console.log(`success update`);
    process.exit()
  }

  successDelete(deleted){
    console.log();
    if(deleted == 1){
      console.log(`succes delete author`)
    } else {
      console.log(`tidak ada data author`);
    }
    process.exit()
  }
}

let view = new View()
module.exports = view
