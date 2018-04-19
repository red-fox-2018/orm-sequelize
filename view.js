class View {
  constructor() {

  }

  static showErr(err) {
    console.log(err);
  }

  static successAddAuthor(author) {
    console.log(author)
  }

  static showAuthor(author) {
    console.log(author);
  }

  static successUpdateAuthor(countAndRows) {
    console.log(`Updated ${countAndRows[0]} data(s)`)
    countAndRows[1].map((row) => {
      console.log(row.get({plain: true}));
    })
  }

  static successDelAuthor(num) {
    console.log(`${num} author(s) deleted`);
  }
}


module.exports = View
