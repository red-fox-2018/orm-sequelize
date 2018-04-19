class View {
  constructor() {

  }

  help(){
    console.log(`
      author add         -->  "menambah data author" (first_name last_name religion gender age)
      author read_one    -->  "menampilkan data author sesuai id" (id)
      author read_all    -->  "menampilkan semua data author"
      author update      -->  "update data author" (id column:value)
      author erase       -->  "menghapus data author sesuai id" (id)

      tag add            -->  "menambah data tag" ( "tag_name" )
      tag read_one       -->  "menampilkan data tag sesuai id" (id)
      tag read_all       -->  "menampilkan semua data tag"
      tag update         -->  "update data tag" (id column:value)
      tag erase          -->  "menghapus data tag sesuai id" (id)

      article add        -->  "menambah data article" ( "title" "body" author_id tag_id)
      article read_one   -->  "menampilkan data article sesuai id" (id)
      article read_all   -->  "menampilkan semua data article"
      article update     -->  "update data article" (id column:value)
      article erase      -->  "menghapus data article sesuai id" (id)

    `);
  }
}

let view = new View()
module.exports = view;
