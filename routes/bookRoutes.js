import express from 'express';
import { addBook, getBooks, updateBookStatus, upload } from '../controllers/bookController.js';

const router = express.Router();

router.post('/books', upload.single('coverImage'), addBook); // Middleware `upload` para manejar la carga de imagen
router.get('/books', getBooks);
router.patch('/books/:id/status', updateBookStatus);

export default router;
