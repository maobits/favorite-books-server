import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: String,
    review: String,
    coverImage: String,
    status: { type: String, enum: ['leído', 'pendiente por leer', 'archivado'], default: 'pendiente por leer' },
    images: [String],
}, { timestamps: true });

const Book = mongoose.model('Book', bookSchema);
export default Book;
