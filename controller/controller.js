
const Documentation = require('../helper/help')
class Controller {
  constructor() {

  }

  static showDocumentation(){
    Documentation.help()
  }
}

module.exports = Controller;
