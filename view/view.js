const Controller = require('../controller/controller');

class ViewAuthor {
  static showErr() {
    console.log('error bos');
  }

  static showAuthorData(data) {
    console.log(data);
    process.exit();
  }

  static addAuthor() {
    console.log('data berhasil ditambahkan');
    process.exit();
  }

  static showDataById(data) {
    console.log(data);
    process.exit();
  }

  static updateData() {
    console.log('selamat data berhasil diupdate!');
    process.exit();
  }
}

class ViewTag {

}

class ViewArticle {

}

module.exports = {
  ViewTag,
  ViewAuthor,
  ViewArticle
}
