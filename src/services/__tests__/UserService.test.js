import { UsersService } from '../UsersService';
import { User } from '../../models/User';

const createService = (users = []) => new UsersService(users);

describe('constructor', () => {
    test('Should create user models', () => {
        const service = createService([
            { fullName: 'Dmytro' },
            { fullName: 'Roman' },
            { fullName: 'Mitiay' }
        ]);

        expect(service.users.length).toBe(3);
        expect(service.users.every((user) => user instanceof User)).toBeTruthy();
    });
});

describe('filterUsers', () => {
    test('Should filter users', () => {
        const users = [
            { fullName: 'Dmytro' },
            { fullName: 'Dmytryk' },
            { fullName: 'Roman' },
            { fullName: 'Mitiay' }
        ];

        const filteredUsers = createService().filterUsers(users, { query: 'dmy' });

        expect(filteredUsers).toStrictEqual([
            { fullName: 'Dmytro' },
            { fullName: 'Dmytryk' }
        ]);
    });
});

describe('sortUsers', () => {
    test('Should filter users', () => {
        const users = [
            { fullName: 'Dmytro' },
            { fullName: 'Dmytryk' },
            { fullName: 'Roman' },
            { fullName: 'Mitiay' }
        ];

        const filteredUsers = createService().filterUsers(users, { query: 'dmy' });

        expect(filteredUsers).toStrictEqual([
            { fullName: 'Dmytro' },
            { fullName: 'Dmytryk' }
        ]);
    });
});
