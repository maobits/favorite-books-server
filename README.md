# Servidor de Gestión de Libros Favoritos / Favorite Books Management Server

Este proyecto es el servidor para la aplicación de gestión de libros favoritos, construido con **Node.js**, **Express**, y **MongoDB**. Proporciona una API para gestionar libros favoritos, permitiendo agregar, actualizar y visualizar información detallada de cada libro, incluyendo su estado de lectura.

### Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para construir el backend.
- **Express**: Framework para construir un servidor y manejar las rutas de la API.
- **MongoDB**: Base de datos NoSQL para almacenar la información de los libros.
- **Mongoose**: ODM para manejar esquemas y conexiones en MongoDB.
- **Multer**: Middleware para gestionar la subida de archivos, permitiendo subir imágenes de portadas.
- **Axios**: Para pruebas de integración en el cliente.
  
### Características

- **CRUD de libros**: Permite crear, leer, actualizar y eliminar libros en la base de datos.
- **Actualización de estado**: Cambia el estado de cada libro entre "leído", "pendiente por leer" y "archivado".
- **Subida de imágenes**: Gestiona la subida de imágenes de portada de libros.
- **Conexión a MongoDB**: Almacena los datos de libros en una base de datos NoSQL.

### Instalación

#### Prerrequisitos

- **Node.js** y **MongoDB** instalados en tu máquina.

#### Pasos para la instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/tu-usuario/favorite-books-server.git
    cd favorite-books-server
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Configura tu base de datos MongoDB:

   - Asegúrate de que MongoDB esté en funcionamiento.
   - Configura la cadena de conexión a MongoDB en un archivo `.env` en la raíz del proyecto:
     ```bash
     MONGODB_URI=mongodb://localhost:27017/favorite-books
     PORT=3000
     ```

4. Inicia el servidor:

    ```bash
    npm start
    ```

5. La API estará disponible en `http://localhost:3000`.

### Uso

El servidor expone varias rutas para gestionar los libros:

- **POST /api/books**: Agrega un nuevo libro con detalles y portada opcional.
- **GET /api/books**: Obtiene la lista de todos los libros.
- **PATCH /api/books/:id/status**: Actualiza el estado de un libro específico.
- **DELETE /api/books/:id**: Elimina un libro de la base de datos.

### Rutas y Estructura de la API

| Método | Ruta                   | Descripción                               |
|--------|-------------------------|-------------------------------------------|
| POST   | `/api/books`           | Agrega un nuevo libro                     |
| GET    | `/api/books`           | Obtiene todos los libros                  |
| PATCH  | `/api/books/:id/status`| Actualiza el estado de un libro           |
| DELETE | `/api/books/:id`       | Elimina un libro                          |

### Contribución

Si deseas contribuir al proyecto:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3. Haz commit a tus cambios (`git commit -m 'feat: añadir nueva funcionalidad'`).
4. Sube tu rama (`git push origin feature/nueva-funcionalidad`).
5. Crea un Pull Request.

### Licencia

Este proyecto está bajo la licencia MIT. Puedes ver más detalles en el archivo [LICENSE](LICENSE).

### Contacto

- **Empresa**: Maobits
- **Desarrollador**: Mauricio Chara Hurtado
- **E-mail**: [code@maobits.com](mailto:code@maobits.com)
- **WhatsApp**: [Enlace directo](https://wa.me/573153774638?text=Deseo%20más%20información%20sobre%20la%20API%20del%20servidor)
- **Sitio web**: [mauriciochara.online](http://mauriciochara.online)
- **Foto de perfil**: ![Foto de perfil](https://i.ibb.co/ncmG17j/foto-perfil.jpg)
