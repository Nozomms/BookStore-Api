const express = require("express");
const booksPath = require("./routes/books");
const authorsPath = require("./routes/authors");
const usersPath = require("./routes/users");
const authPath = require("./routes/auth");
const logger = require('./middlewares/logger')
const connectToDB =require('./config/db')
const dotenv = require("dotenv");
const { notFound, errHandler } = require("./middlewares/errors");
dotenv.config()

//connection to Database
connectToDB();
//init App
const app = express();

// Apply Middlewares
app.use(express.json());
app.use(logger);

//Routes 
app.get('/', (req, res) => {
  res.send("WELCOME IN BOOKstore API  ")
})
app.use("/api/books", booksPath)
app.use("/api/authors", authorsPath)
app.use("/api/auth", authPath)
app.use("/api/users", usersPath)

// Error Handling
app.use(notFound);
app.use(errHandler);
// running server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is running in ${process.env.NODE_ENV} mode on port ${PORT}`))