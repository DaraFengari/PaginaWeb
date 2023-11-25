const express = require('express');
const app = express();
const port = 3000;

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Función para generar texto aleatorio
function generateRandomText() {
    const phrases = [
      'Bienvenido a mi página sobre mí.',
      '¡Hola! Gracias por visitar esta página.',
      'Aquí encontrarás información interesante sobre mí.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      // Agrega más frases según sea necesario
    ];
  
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }


// Ruta principal
app.get('/', (req, res) => {
  const data = {
    perfil: 'Estudiante de noveno semestre de la carrera de licenciatura en computación con conocimientos básicos en ciberseguridad, programación orientada a objetos y trabajos en Unity, con disposición a mejorar mis talentos y habilidades.',
    formacion: 'Licenciatura en Ingeniería en Computación (INCO estudiante)\nUniversidad De Guadalajara (2019-actualidad)',
    experiencia: 'Desarrollo de Videojuego Rouge Like\nDesarrolladora principal\nCreación de recursos visuales, de código y de ideas',
    actualizaciones: '¿Qué es la ciberseguridad y cómo aplicarla en el día a día?'
  };

  res.render('index', { data }); // Aquí se pasa la variable 'data' correctamente
});

// Ruta para la página "Acerca de"
app.get('/about', (req, res) => {
    res.render('about', { generateRandomText });
});

// Agrega una nueva ruta para la página de cuentas
app.get('/accounts', (req, res) => {
    const accountsData = [
      { platform: 'Facebook', username: 'Dara Rodriguez', link: 'https://www.facebook.com/profile.php?id=100027056672720' },
      { platform: 'Instagram', username: 'Dara Fronggary', link: 'https://www.instagram.com/dara_fronggary/' },
      // Puedes agregar más cuentas según sea necesario
    ];
    res.render('accounts', { accountsData });
});
  

// Archivo estático para el fondo de color
app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
