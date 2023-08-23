import Server from './classes/server';
import mongoose from 'mongoose';
import userRoutes from './routes/usuario';
import bodyParser from 'body-parser';

const server = new Server();

// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

//Rutas app
server.app.use('/user', userRoutes)

// Conectar DB
mongoose.connect('mongodb+srv://amarianjel:angelito1993@cluster0.skd2tj9.mongodb.net/fotosgram').catch(error => handleError(error));
console.log('DB online');

// Levantar express
server.start(() => {
    console.log(`Server is running on port ${ server.port }`);
})

function handleError(error: any): any {
    throw new Error('Function not implemented.');
}
