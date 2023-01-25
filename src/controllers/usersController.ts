import { Request, Response } from "express";
import  {database}  from "../database";

//Class
export class UsersController {
    criarUsuario(request: Request, response: Response): Response {
        const {name} = request.body;

        if(name.length < 1){
            return response.status(403).json({message:"Não é possivel criar usuario sem um nome."})
        }
        database.push(name);
        return response.status(201).json({mesagem: `O usuario:${name} foi criado`});
    }

    listarUsuario(request: Request, response: Response):Response{
        return response.status(200).json(database);
    }

}

