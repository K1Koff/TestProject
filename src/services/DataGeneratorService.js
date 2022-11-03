import { NAMES, LAST_NAMES } from '../consts/index';

const ID_LENGTH = 8;
const USERS_COUNT = 15;

export class DataGeneratorService {
    generateUsersData() {
        const arrOfUsers = [];
        for (let i = 0; i < USERS_COUNT; i += 1) {
            const userPersonalObj = {
                id: this.generateId(),
                name: this.generateName(),
                lastName: this.generateLastName(),
                avatarId: this.generateAvatarId(),
                birthDate: this.generateBirthDate(),
            };
            arrOfUsers.push(userPersonalObj);
        }
        return arrOfUsers;
    }

    generateId() {
        let idString = '';
        for (let i = 1; i <= ID_LENGTH; i += 1) {
            const randNumber = Math.random();
            if (randNumber <= 0.33) idString += this.generateUpperCase();
            if (randNumber > 0.33 && randNumber <= 0.66) idString += this.generateLowerCase();
            if (randNumber > 0.66) idString += this.generateDigit();
        }
        return idString;
    }

    generateUpperCase() {
        return String.fromCodePoint(Math.floor(Math.random() * 26) + 65);
    }

    generateLowerCase() {
        return String.fromCodePoint(Math.floor(Math.random() * 26) + 97);
    }

    generateDigit() {
        return Math.floor(Math.random() * 10);
    }

    generateName() {
        return NAMES[Math.floor(Math.random() * NAMES.length)];
    }

    generateLastName() {
        return LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
    }

    generateAvatarId() {
        return Math.floor(Math.random() * 11 + 1);
    }

    generateBirthDate() {
        const dateToday = new Date();
        const randYear = Math.floor(Math.random() * 26 + 1975);
        const date = new Date(randYear, dateToday.getMonth(), dateToday.getDate(), 0, 0, 0, 0);
        return date;
    }
}
