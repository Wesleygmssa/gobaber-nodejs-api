import AppError from '@shared/errors/AppError';

import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';
import FakeUserRespository from '../I_Repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';


//teste unitario
describe('CreateUser', () => {

    it('should be able to create new user', async () => {

        const fakeUserRespository = new FakeUserRespository();
        const fakeHashProvider = new FakeHashProvider();
        const createUserService = new CreateUserService(fakeUserRespository, fakeHashProvider);

        const user = await createUserService.execute({
            name: 'John Doe',
            email: 'Johndoe@exemple.com',
            password: '123456'
        });

        expect(user).toHaveProperty('id'); //verificando usuário pelo id

    });

    it('should not be able to create a new user with same email from another', async () => {

        const fakeUserRespository = new FakeUserRespository();
        const fakeHashProvider = new FakeHashProvider();
        const createUserService = new CreateUserService(fakeUserRespository, fakeHashProvider);

        await createUserService.execute({
            name: 'John Doe',
            email: 'Johndoe@exemple.com',
            password: '123456'
        });

        await expect(
            createUserService.execute({
                name: 'John Doe',
                email: 'Johndoe@exemple.com',
                password: '123456'
            }),

        ).rejects.toBeInstanceOf(AppError)

    });


})