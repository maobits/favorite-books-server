import Book from '../models/Book.js';
import multer from 'multer';
import path from 'path';

// Configuración de multer para almacenar las imágenes en la carpeta 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("Configuración de destino de la imagen");
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueFilename = Date.now() + path.extname(file.originalname);
        console.log(`Generando un nombre único para el archivo: ${uniqueFilename}`);
        cb(null, uniqueFilename);
    },
});

const upload = multer({ storage });

// Controlador para agregar un libro con imagen
export const addBook = async (req, res) => {
    try {
        console.log("Iniciando el proceso para agregar un nuevo libro...");

        const { title, author, description, review } = req.body;
        console.log("Datos recibidos del formulario:", { title, author, description, review });

        const coverImage = req.file ? req.file.path : null; // Obtiene la ruta de la imagen si fue cargada
        if (coverImage) {
            console.log(`Imagen cargada con éxito. Ruta de la imagen: ${coverImage}`);
        } else {
            console.log("No se cargó ninguna imagen.");
        }

        const book = new Book({
            title,
            author,
            description,
            review,
            coverImage, // Almacena la ruta de la imagen
        });

        await book.save();
        console.log("Libro guardado en la base de datos:", book);

        res.status(201).json(book);
    } catch (error) {
        console.error("Error al agregar el libro:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Controlador para obtener todos los libros
export const getBooks = async (req, res) => {
    try {
        console.log("Obteniendo la lista de libros...");
        const books = await Book.find();
        console.log("Libros obtenidos:", books);
        res.json(books);
    } catch (error) {
        console.error("Error al obtener los libros:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Controlador para actualizar el estado de un libro
export const updateBookStatus = async (req, res) => {
    try {
        console.log(`Actualizando el estado del libro con ID: ${req.params.id} a: ${req.body.status}`);
        const book = await Book.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        console.log("Estado actualizado:", book);
        res.json(book);
    } catch (error) {
        console.error("Error al actualizar el estado del libro:", error.message);
        res.status(500).json({ message: error.message });
    }
};

// Exporta multer como middleware para manejar la carga de archivos
export { upload };
