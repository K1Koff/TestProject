import { FixDataService } from '../FixDataService';

const createService = () => new FixDataService();

describe('parseUsersJson', () => {
    test('Should correctly parse users data', () => {
        const user = {
            id: ['😎', '      test          '],
            name: 'Dmytro__Dmytro__Dmytro',
            lastName: 'kIT',
            avatarId: { value: 9 },
            birthDate: 123456
        };

        const parsedUsers = createService().parseUsersJson(JSON.stringify([user]));

        expect(parsedUsers).toStrictEqual([user]);
    });
});

describe('fixUser', () => {
    test('Should correctly fix user\'s data', () => {
        const now = new Date();
        const birthDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);

        const user = {
            id: ['😎', '      test          '],
            name: 'Dmytro__Dmytro__Dmytro',
            lastName: 'kIT',
            avatarId: { value: 9 },
            birthDate: Math.floor(birthDate.getTime() / 1000 / 2.25)
        };

        const fixedUser = createService().fixUser(user);

        expect(fixedUser).toStrictEqual({
            id: 'test',
            name: 'Dmytro',
            lastName: 'Kit',
            avatarId: 3,
            birthDate
        });
    });
});
