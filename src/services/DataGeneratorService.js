/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import { NAMES, LAST_NAMES } from '../consts/index';

const ID_LENGTH = 8;
const USERS_COUNT = 15;

export class DataGeneratorService {
    generateUsersData() {
        const arrOfUsers = [];
        for (let i = 0; i < USERS_COUNT; i++) {
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
        for (let i = 1; i <= ID_LENGTH; i++) {
            const randNumber = Math.random();
            idString
            += randNumber <= 0.33
                    ? this.generateUpperCase()
                    : randNumber > 0.33 && randNumber <= 0.66
                        ? this.generateLowerCase()
                        : this.generateDigit();
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
