class View {
  constructor() {

  }

  static help(){
    console.log('======Documentation=====================================');
    console.log(`author add     -> add    <space> "data yang ingin dimasukan"`);
    console.log(`author readId  -> readId <space> "id yang ingin dimasukan"`);
    console.log(`author readAll -> readAll`);
    console.log(`author update  -> update <space> "data yang ingin dimasukan"`);
    console.log(`author delete  -> delete <space> "id yang ingin didelete"`);
    console.log(`tag add        -> add    <space> "data yang ingin dimasukan"`);
    console.log(`tag readId     -> readId <space> "id yang ingin dimasukan"`);
    console.log(`tag readAll    -> readAll`);
    console.log(`tag update     -> update <space> "data yang ingin dimasukan"`);
    console.log(`tag delete     -> delete <space> "id yang ingin didelete"`);
    console.log(`article add    -> add    <space> "data yang ingin dimasukan"`);
    console.log(`article readId -> readId <space> "id yang ingin dimasukan"`);
    console.log(`article readAll-> readAll`);
    console.log(`article update -> update <space> "data yang ingin dimasukan"`);
    console.log(`article delete -> delete <space> "id yang ingin didelete"`);
    console.log(`==========================================================`);

  }

  static show(data){
    console.log(data);
    process.exit()
  }
}

module.exports = View;
