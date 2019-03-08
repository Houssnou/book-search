const router = require('express').Router();
const booksController = require('../../controllers/booksController');

// match /api/books
router
  .route('/')
  .get(booksController.findAll)
  .post(booksController.saveBook);

// match /api/books/:id
router
  .route('/:id')
  .get(booksController.findById)
  .delete(booksController.deleteBook);

module.exports = router;
