
class View {
  static show(value) {
    console.log(value);
  }
  static showList(list) {
    for (let l of list) {
      console.log(l);
    }
  }
}

module.exports = View;