import { UsersController } from "./usersController";
import { Request } from "express";
import { makeMockResponse } from "../mocks/mockResponse";

describe('User Controller', () =>{

    const usersController = new UsersController();

    const mockRequest = {} as Request; 
    const mockResponse = makeMockResponse();

    it('Deve retornar a lista de usuarios', () =>{
        usersController.listarUsuario(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(0)
    })

    it('Criar usuario e retonar o usuario criado', () => {
        mockRequest.body = {
            name: 'Novo usuario'
        }

        usersController.criarUsuario(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({mesagem: `O usuario:Novo usuario foi criado`})
    })

    it("Não deve criar usuario com nome em branco", () => {
        
        mockRequest.body = {
            name: ''
        }
        usersController.criarUsuario(mockRequest, mockResponse)

        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({message:"Não é possivel criar usuario sem um nome."})
    })
})