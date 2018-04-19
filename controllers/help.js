const View = require('../views/help.js')

class Help {
  constructor(){

  }

  help(){
    View.help()
  }
}

let help = new Help()
module.exports = help
