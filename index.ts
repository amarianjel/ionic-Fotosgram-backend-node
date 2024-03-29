import Server from './classes/server';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';

import userRoutes from './routes/usuario';
import postRoutes from './routes/post';

const server = new Server();

// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

// FileUpload
server.app.use( fileUpload({ useTempFiles: true }) );

// Configurar cors
server.app.use( cors({ origin: true, credentials: true }))

//Rutas app
server.app.use('/user', userRoutes)
server.app.use('/posts', postRoutes)

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
