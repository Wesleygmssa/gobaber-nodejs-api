import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import User from '../models/Users';


interface Request {
    email: string;
    password: string;
}

class AuthencateUserService {
    public async execute({ email, password }: Request): Promise<{ user: User }> {
        const usersRepository = getRepository(User); // todos metodosll

        const user = await usersRepository.findOne({
            where: {
                email: email
            }
        })

        if (!user) {
            throw new Error('Incorrect email/password combination');
        }

        //user.password = senha criptografada
        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new Error('Incorrect email/password combination');
        }

        return {
            user,
        }

    }
}

export default AuthencateUserService;