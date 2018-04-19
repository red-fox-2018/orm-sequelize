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

  successAdd(newArticle){
    console.log();
    console.log(`New Article ${newArticle.title} with id ${newArticle.id} has been created`);
    process.exit()
  }

  successUpdate(newArticle){
    console.log();
    console.log(`success update`);
    process.exit()
  }

  successDelete(deleted){
    console.log();
    if(deleted == 1){
      console.log(`succes delete Article`)
    } else {
      console.log(`tidak ada data Article`);
    }
    process.exit()
  }
}

let view = new View()
module.exports = view
