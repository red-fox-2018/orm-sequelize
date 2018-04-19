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

  successAdd(newTag){
    console.log();
    console.log(`New Tag ${newTag.name} with id ${newTag.id} has been created`);
    process.exit()
  }

  successUpdate(newTag){
    console.log();
    console.log(`success update`);
    process.exit()
  }

  successDelete(deleted){
    console.log();
    if(deleted == 1){
      console.log(`succes delete Tag`)
    } else {
      console.log(`tidak ada data Tag`);
    }
    process.exit()
  }
}

let view = new View()
module.exports = view
