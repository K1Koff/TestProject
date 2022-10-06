import { NAMES, LAST_NAMES } from '../consts/index';

const ID_LENGTH = 8;
const USERS_COUNT = 15;

export class DataGeneratorService {
    generateUsersData() {
        return [];
    }

    generateId() {
        return '';
    }

    generateUpperCase() {
        return '';
    }

    generateLowerCase() {
        return '';
    }

    generateDigit() {
        return 0;
    }

    generateName() {
        return '';
    }

    generateLastName() {
        return '';
    }

    generateAvatarId() {
        return 1;
    }

    generateBirthDate() {
        return new Date();
    }
}
