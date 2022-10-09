import { User } from '../User';

const DEFAULT_BIRTHDATE = new Date();

const createUser = (overrides = {}) => new User({
    id: 'qwerty',
    name: 'Dmytro',
    lastName: 'Kit',
    avatarId: 5,
    birthDate: DEFAULT_BIRTHDATE,
    ...overrides
});

describe('Constructor', () => {
    test('Should init the id property', () => {
        const user = createUser();

        expect(user.id).toBe('qwerty');
    });

    test('Should init the avatarId property', () => {
        const user = createUser();

        expect(user.avatarId).toBe(5);
    });

    test('Should init the birthDate property', () => {
        const user = createUser();

        expect(user.birthDate).toBe(DEFAULT_BIRTHDATE);
    });

    test('Should init the fullName property', () => {
        const user = createUser();

        expect(user.fullName).toBe('Dmytro Kit');
    });

    test('Should init the postsCount property', () => {
        const user = createUser();

        expect(user.postsCount).toBe(125);
    });
});

describe('getData', () => {
    test('Should init the id property', () => {
        const user = createUser();

        expect(user.getData()).toBe({
            id: 'qwerty',
            fullName: 'Dmytro Kit',
            postsCount: 125,
            birthDate: '09/10/2022',
            avatarSrc: 'https://ik.imagekit.io/igo1qzk1oe2z/avatars/5.webp'
        });
    });
});
