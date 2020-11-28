import { container } from 'tsyringe';

import IAppointmentsRepository from '@modules/appointments/I_Repositories/IAppointmentsRepository';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';


import IUsersRepository from '@modules/users/I_Repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

container.registerSingleton<IAppointmentsRepository>(
    'AppointmentsRepository',
    AppointmentsRepository
);

container.registerSingleton<IUsersRepository>(
    'AppointmentsRepository',
    UsersRepository
);