import User from '../infra/typeorm/entities/Users';
import ICreateUserDTO from '../dtos/ICreateUserDTO';

interface IUsersRepository {
    findById(id: string): Promise<User | undefined>;
    findbyEmail(email: string): Promise<User | undefined>;
    create(data: ICreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;

}

export default IUsersRepository;