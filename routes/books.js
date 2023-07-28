const express = require("express");
const router = express.Router();
const {getAllBooks,getBookById,createNewBook,updateBook,deletBook} = require('../controllers/bookController')


router.get("/", getAllBooks)
router.get("/:id",getBookById )
router.post("/",createNewBook)
router.put("/:id",updateBook)
router.delete("/:id",deletBook)


module.exports = router;