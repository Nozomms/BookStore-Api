const { Book } = require("./models/Book");
const {books} = require("./data");
const connectToDb = require("./config/db");
require("dotenv").config();


// Connection to DB
connectToDb();


//Import Books
const importBooks = async()=>{
    try{
        await Book.insertMany(books);
        console.log("Books Imported");
    }catch (error){
        console.log(error);
        process.exit(1);
    }
};

//Remove Books
const removeBooks = async()=>{
    try{
        await Book.deletMany();
        console.log("Books Removed");
    }catch (error){
        console.log(error);
        process.exit(1);
    }
};

if(process.argv[2] === "-import"){
    importBooks();
} else if (process.argv[2] === "-remove"){
    removeBooks();
}

console.log(process.argv);