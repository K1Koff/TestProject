import { NAMES, LAST_NAMES } from '../consts/index';

export class DataGeneratorService {
    generateUsersData() {
        return new Array(10).fill(null).map(() => ({
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
        return NAMES[0];
    }

    generateLastName() {
        return LAST_NAMES[0];
    }

    generateAvatarId() {
        return 5;
    }

    generateBirthDate() {
        return new Date();
    }
}
