import { BreakDataService } from '../BreakDataService';

const createService = () => new BreakDataService();

describe('breakData', () => {
    test('Should correctly break user\'s data', () => {
        const birthDate = new Date();
        const usersDataJson = createService().breakData([{
            id: 'test',
            name: 'Dmytro',
            lastName: 'Kit',
            avatarId: 3,
            birthDate
        }]);

        const brokenUser = {
            id: ['😎', '      test          '],
            name: 'Dmytro__Dmytro__Dmytro',
            lastName: 'kIT',
            avatarId: { value: 9 },
            birthDate: Math.floor(birthDate.getTime() / 1000 / 2.25)
        };

        expect(usersDataJson).toBe(JSON.stringify([brokenUser]));
    });
});
