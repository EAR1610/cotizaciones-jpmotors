import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sequelize from './config/config.mjs';
import authRouters from './routes/auth.routes.mjs';
import dashboardRouters from './routes/dashboard.routes.mjs';
import vehiculosRouter from './routes/vehiculo.routes.mjs';
import marcasRouter from './routes/marca.routes.mjs';

// Iniciar la conexión a la base de datos
sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos conectada');
  })
  .catch((error) => {
    console.log('Error al conectar con la base de datos:', error);
  });

const app = express();
const PORT = 4000;

// Middleware para permitir solicitudes CORS
app.use(cors());

// Middleware para analizar las solicitudes entrantes
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
app.use('/auth', authRouters);
app.use('/dashboard', dashboardRouters);
app.use('/vehiculos', vehiculosRouter);
app.use('/marcas', marcasRouter);

// Iniciar el servidor
app.listen(PORT, function() {
  console.log('Servidor escuchando en el puerto ' + PORT);
});