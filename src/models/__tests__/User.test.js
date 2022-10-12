import { User } from '../User';

const createUser = (params = {}) => new User(params);

describe('Constructor', () => {
    test('Should init the id property', () => {
        const user = createUser({ id: 'qwerty' });

        expect(user.id).toBe('qwerty');
    });

    test('Should init the avatarId property', () => {
        const user = createUser({ avatarId: 5 });

        expect(user.avatarId).toBe(5);
    });

    test('Should init the birthDate property', () => {
        const birthDate = new Date();
        const user = createUser({ birthDate });

        expect(user.birthDate).toBe(birthDate);
    });

    test('Should init the fullName property', () => {
        const user = createUser({ name: 'Dmytro', lastName: 'Kit' });

        expect(user.fullName).toBe('Dmytro Kit');
    });

    test('Should init the postsCount property', () => {
        const user = createUser({ avatarId: 5 });

        expect(user.postsCount).toBe(125);
    });
});

describe('getData', () => {
    test('Should init the id property', () => {
        const birthDate = new Date();
        const user = createUser({
            id: 'qwerty',
            name: 'Dmytro',
            lastName: 'Kit',
            avatarId: 5,
            birthDate
        });

        const f = (n) => (n < 10 ? `0${n}` : n);
        const formattedDate = `${f(birthDate.getDate())}/${f(birthDate.getMonth() + 1)}/${birthDate.getFullYear()}`;

        expect(user.getData()).toStrictEqual({
            id: 'qwerty',
            fullName: 'Dmytro Kit',
            postsCount: 125,
            birthDate: formattedDate,
            avatarSrc: 'https://ik.imagekit.io/igo1qzk1oe2z/avatars/5.webp'
        });
    });
});
