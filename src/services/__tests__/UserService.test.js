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
    test('Should sort users by name (asc)', () => {
        const users = [
            { fullName: 'Dmytro' },
            { fullName: 'Dmytryk' },
            { fullName: 'Roman' },
            { fullName: 'Mitiay' }
        ];

        const filteredUsers = createService().sortUsers(users, { sortBy: 'full_name', order: 'asc' });

        expect(filteredUsers).toStrictEqual([
            { fullName: 'Dmytro' },
            { fullName: 'Dmytryk' },
            { fullName: 'Mitiay' },
            { fullName: 'Roman' }
        ]);
    });

    test('Should sort users by name (desc)', () => {
        const users = [
            { fullName: 'Dmytro' },
            { fullName: 'Dmytryk' },
            { fullName: 'Roman' },
            { fullName: 'Mitiay' }
        ];

        const filteredUsers = createService().sortUsers(users, { sortBy: 'full_name', order: 'desc' });

        expect(filteredUsers).toStrictEqual([
            { fullName: 'Roman' },
            { fullName: 'Mitiay' },
            { fullName: 'Dmytryk' },
            { fullName: 'Dmytro' }
        ]);
    });

    test('Should sort users by posts count (asc)', () => {
        const users = [
            { postsCount: 30 },
            { postsCount: 111 },
            { postsCount: 99 },
            { postsCount: 77 },
        ];

        const filteredUsers = createService().sortUsers(users, { sortBy: 'posts', order: 'asc' });

        expect(filteredUsers).toStrictEqual([
            { postsCount: 30 },
            { postsCount: 77 },
            { postsCount: 99 },
            { postsCount: 111 },
        ]);
    });

    test('Should sort users by posts count (desc)', () => {
        const users = [
            { postsCount: 30 },
            { postsCount: 111 },
            { postsCount: 99 },
            { postsCount: 77 },
        ];

        const filteredUsers = createService().sortUsers(users, { sortBy: 'posts', order: 'desc' });

        expect(filteredUsers).toStrictEqual([
            { postsCount: 111 },
            { postsCount: 99 },
            { postsCount: 77 },
            { postsCount: 30 },
        ]);
    });

    test('Should sort users by birth date (asc)', () => {
        const users = [
            { birthDate: new Date(1999, 0) },
            { birthDate: new Date(1977, 0) },
            { birthDate: new Date(2011, 0) },
            { birthDate: new Date(1988, 0) },
        ];

        const filteredUsers = createService().sortUsers(users, { sortBy: 'birth_date', order: 'asc' });

        expect(filteredUsers).toStrictEqual([
            { birthDate: new Date(1977, 0) },
            { birthDate: new Date(1988, 0) },
            { birthDate: new Date(1999, 0) },
            { birthDate: new Date(2011, 0) },
        ]);
    });

    test('Should sort users by birth date (desc)', () => {
        const users = [
            { birthDate: new Date(1999, 0) },
            { birthDate: new Date(1977, 0) },
            { birthDate: new Date(2011, 0) },
            { birthDate: new Date(1988, 0) },
        ];

        const filteredUsers = createService().sortUsers(users, { sortBy: 'birth_date', order: 'desc' });

        expect(filteredUsers).toStrictEqual([
            { birthDate: new Date(2011, 0) },
            { birthDate: new Date(1999, 0) },
            { birthDate: new Date(1988, 0) },
            { birthDate: new Date(1977, 0) },
        ]);
    });
});
