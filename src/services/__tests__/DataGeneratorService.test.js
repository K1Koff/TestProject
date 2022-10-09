import { DataGeneratorService } from '../DataGeneratorService';
import { NAMES, LAST_NAMES } from '../../consts/index';

const createService = () => new DataGeneratorService();

describe('generateUsersData', () => {
    test('Should return array', () => {
        const usersData = createService().generateUsersData();

        expect(Array.isArray(usersData)).toBeTruthy();
        expect(usersData.length).toBe(15);
    });
});

describe('generateId', () => {
    test('Should return string', () => {
        const usersData = createService().generateId();

        expect(typeof usersData).toBe('string');
        expect(usersData.length).toBe(8);
    });
});

describe('generateUpperCase', () => {
    test('Should return string', () => {
        const letter = createService().generateUpperCase();

        expect(letter).toMatch(/[A-Z]/);
    });
});

describe('generateLowerCase', () => {
    test('Should return string', () => {
        const letter = createService().generateLowerCase();

        expect(letter).toMatch(/[a-z]/);
    });
});

describe('generateDigit', () => {
    test('Should return a digit', () => {
        const letter = createService().generateDigit();

        expect(letter).toBeGreaterThanOrEqual(0);
        expect(letter).toBeLessThanOrEqual(9);
    });
});

describe('generateName', () => {
    test('Should return a name', () => {
        const name = createService().generateName();

        expect(NAMES.includes(name)).toBeTruthy();
    });
});

describe('generateLastName', () => {
    test('Should return a last name', () => {
        const lastName = createService().generateLastName();

        expect(LAST_NAMES.includes(lastName)).toBeTruthy();
    });
});

describe('generateAvatarId', () => {
    test('Should return a number', () => {
        const letter = createService().generateAvatarId();

        expect(letter).toBeGreaterThanOrEqual(1);
        expect(letter).toBeLessThanOrEqual(11);
    });
});

describe('generateBirthDate', () => {
    test('Should return a date', () => {
        const birthDate = createService().generateBirthDate();

        expect(birthDate instanceof Date).toBeTruthy();
    });
});
