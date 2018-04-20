/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

const Table = require('cli-table');
const chalk = require('chalk');

class View {
   static read_one(data) {
      let table = new Table({
         head: ['Id','Name', 'CreatedAt', 'UpdatedAt' ],
         colWidths: [5, 15, 25, 25]
      });
      table.push(Object.values(data));
      console.log(chalk.grey(table.toString()));
      process.exit();
   }
   static read_all(data) {

      let table = new Table({
         head: ['Id','Name', 'CreatedAt', 'UpdatedAt' ],
         colWidths: [5, 15, 25, 25]
      });
      for (let i = 0; i < data.length; i++) {
         table.push(Object.values(data[i]));
      }
      console.log(chalk.grey(table.toString()));
      process.exit();
   }
}

module.exports = View;
