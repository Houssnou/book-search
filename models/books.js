const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define our book schema
// title, author, description, image, link, date, bookId
const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  authors: Array,
  description:String,
  image: String,
  link: String,
  date: String,
  bookId: String
});

// create our model using mongoose and the schema we just created
const Books = mongoose.model("Books", BookSchema);

module.exports = Books;
