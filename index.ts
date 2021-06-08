import Server from "./classes/server";
import router from "./routes/router";
import express from 'express';
import cors from 'cors';

const server = new Server();

//BodyParser (lo que sea que me Posteen, pasamelo a un objeto de javascript)
server.app.use(express.urlencoded({extended:true}));
server.app.use(express.json());

//CORS
server.app.use(cors({origin: true, credentials: true} ))




//Rutas de servicios
server.app.use('/', router);

server.start(() => {
	console.log(`servidor corriendo en el puerto sigueinte: ${ server.port }`);

})

export default router;