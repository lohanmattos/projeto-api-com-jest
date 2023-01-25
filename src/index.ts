/*import o module from express
    Para utilizar o importe precisa modificar o pakcage.json
        - add type: module

    require('express')
*/
import express from 'express';
import { routes } from './routes';

//instancia o servidor
const server = express();

//informa para o servidor que vai trabalhar com json
server.use(express.json());

//informa para o servidor um arquivo para tratar as rotas 
server.use(routes);

const porta = 5000;
const host = 'http://localhost';

server.listen(porta, () => {
    console.log(`Rodando no endereço -> ${host}:${porta}`);
})