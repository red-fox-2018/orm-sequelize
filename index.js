const Controller = require('./controller/controller');
const ContAuthor = require('./controller/contAuthor')

let argv = process.argv

let command = argv[2]
let content = argv.slice(3)

console.log("=======================");

if(command == undefined | command =='help'){
  return Controller.showDocumentation()
}

if(command == "authors"){
console.log('masuk author',content);
  switch (content[0]) {
    case "readAll": ContAuthor.readAll(content);break;
  //   case "readId": ControllerAuthor.readId(argv[3]);break;
  //   case "add": ControllerAuthor.add(argv[3],argv[4],argv[5],argv[6]);break;//first_name,last_name,gender,age
  //   case "update": ControllerAuthor.update(argv[3],argv[4],argv[5]);break;//id, column, value
  //   case "delete": ControllerAuthor.delete(argv[3]);break;
  //  default:ControllerAuthor.help();break;
  }

}

if(command == "tags"){

  console.log('masuk tags',content);

  // switch (content[0]) {
  //   case "readAll": ControllerTag.readAll();break;
  //   case "readId": ControllerTag.readId(argv[3]);break;
  //   case "add": ControllerTag.add(argv[3],argv[4]);break;//tag_name,category
  //   case "update": ControllerTag.update(argv[3],argv[4],argv[5]);break;//id, column, value
  //   case "delete": ControllerTag.delete(argv[3]);break;
  //   default:ControllerTag.help();break;
  // }

}

if(command == "articles"){
console.log('masuk articles',content);
  // switch (content[0]) {
  //   case "readAll": ControllerArticle.readAll();break;
  //   case "readId": ControllerArticle.readId(argv[3]);break;
  //   case "add": ControllerArticle.add(argv[3],argv[4],argv[5]);break;//title,author,pages
  //   case "update": ControllerArticle.update(argv[3],argv[4],argv[5]);break;//id, column, value
  //   case "delete": ControllerArticle.delete(argv[3]);break;
  //   default:ControllerArticle.help();break;
  // }
}
