import { NAMES, LAST_NAMES } from '../consts/index';

const USERS_COUNT = 10;

export class DataGeneratorService {
    generateUsersData() {
        return new Array(USERS_COUNT).fill(null).map(() => ({
            id: this.generateId(),
            name: this.generateName(),
            lastName: this.generateLastName(),
            avatarId: this.generateAvatarId(),
            birthDate: this.generateBirthDate()
        }));
    }

    generateId() {
        return 'AZaz09';
    }

    generateUpperCase() {

    }

    generateLowerCase() {

    }

    generateDigit() {

    }

    generateName() {
        const index = Math.floor(Math.random() * NAMES.length);
        return NAMES[index];
    }

    generateLastName() {
        const index = Math.floor(Math.random() * NAMES.length);
        return LAST_NAMES[index];
    }

    generateAvatarId() {
        return Math.floor(Math.random() * 10) + 1;
    }

    generateBirthDate() {
        return new Date();
    }
}
