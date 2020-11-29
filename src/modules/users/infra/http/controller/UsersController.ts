import { Request, Response } from 'express';
import { container } from 'tsyringe';
import CreateUserService from '@modules/users/services/CreateUserService';

export default class UsersController {
    public async create(request: Request, response: Response) {
        const createUserService = container.resolve(CreateUserService);

        const { name, email, password } = request.body;

        const user = await createUserService.execute({ name, email, password });

        return response.json(user);
    }
}

/*
Abstrair arquivo das rotas
Receber requisição
repassar pra outro arquivo lidar com isso.
retorna uma respota
*/