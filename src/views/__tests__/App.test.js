import { App } from '../App';

const createView = () => new App({
    usersService: { manageUsers: () => {} },
    usersTableEl: { innerHTML: '' },
    inputEl: { addEventListener: () => {} },
    selectEl: { addEventListener: () => {}, insertAdjacentHTML: () => {} },
});

describe('getSortByOptionsData', () => {
    test('Should return sort by options', () => {
        expect(createView().getSortByOptionsData()).toStrictEqual([
            { sortBy: 'full_name', order: 'asc', label: 'Full name' },
            { sortBy: 'full_name', order: 'desc', label: 'Full name' },
            { sortBy: 'posts', order: 'asc', label: 'Posts' },
            { sortBy: 'posts', order: 'desc', label: 'Posts' },
            { sortBy: 'birth_date', order: 'asc', label: 'Birth date' },
            { sortBy: 'birth_date', order: 'desc', label: 'Birth date' },
        ]);
    });
});
