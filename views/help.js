/*jshint esversion:6*/
/*jshint -W097*/
/*jshint -W117*/

const chalk = require('chalk');

class Help {
   static
   view() {
      let list = ['======= documentation ===========================================',
         'author add <data yang ingin dimasukkan>',
         'author read_one <masukkan id author>',
         'author read_all',
         'author update <masukkan idnya dan data yang ingin di update>',
         'author delete <masukkan id author>',
         'tag add <data yang ingin dimasukkan>',
         'tag read_one <masukkan id tag>',
         'tag read_all',
         'tag update <masukkan idnya dan data yang ingin di update>',
         'tag delete <masukkan id author>',
         'article add <data yang ingin dimasukkan>',
         'article read_one <masukkan id article>',
         'article read_all',
         'article update <masukkan idnya dan data yang ingin di update>',
         'article delete <masukkan id author>',
         '================================================================='
      ];

      list.forEach((list) => {
         console.log(chalk.green(`${list}`));
      });
   }
}

module.exports = Help;
