import { Router} from 'express';
import { UsersController } from './controllers/usersController';

// cria uma instancia de Router
const routes = Router();

//cria uma instancia de usersController
const usersController = new UsersController();

// Médodos HTTP 

// GET - Ler os dados;
// POST - Criar os dados;
// PUT / PATCH - Editar os dados;
// DELETE - Destar os dados;

//rota usada para listar os usuarios
routes.get('/users', usersController.listarUsuario);

//rota das cadastrar os usuarios
routes.post('/users', usersController.criarUsuario);

/*
Status Code
200 (OK) e 201(Criado)
404 pagina nao encontrada
403 não autorizado
*/


//utilizado para exportar o modulo para ser utilizado por outro modulo
export {routes}