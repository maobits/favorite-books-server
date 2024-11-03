import express from 'express';
import cors from 'cors'; // Importa cors
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import bookRoutes from './routes/bookRoutes.js';

const app = express();

connectDB(); // Conecta a la base de datos


// Definir __dirname para módulos ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurar CORS
app.use(cors()); // Permite todos los orígenes; para permitir solo un origen específico, usa: app.use(cors({ origin: 'http://localhost:5173' }))

// Middleware para procesar JSON
app.use(express.json());

// Configuración para servir archivos estáticos desde la carpeta 'uploads'
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/api', bookRoutes);

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
