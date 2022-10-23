const bookModel = require("./../models/books")


const addBook = (req, res) =>{
    res.render("addBooks")
}


const postBook = (req, res) =>{
    const data = new bookModel({
        name: req.body.name,
        author: req.body.author,
        genre: req.body.genre
    })
    data.save().then(()=>{
        console.log("Book Added!")
    }).catch((error)=>{console.log(error)}).finally(()=>{
        res.redirect("/book-list")
    })

    
}

const getBookList = (req, res) =>{
    const new_book = bookModel.find().
    then((new_book) => res.send(new_book)).
    catch((err) => console.log(err));
    console.log(new_book);
}

module.exports= {addBook, getBookList, postBook}