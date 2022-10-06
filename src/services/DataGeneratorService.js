import { NAMES, LAST_NAMES } from '../consts/index';

const ID_LENGTH = 8;
const USERS_COUNT = 15;

export class DataGeneratorService {
    generateUsersData() {
        // todo: Має повертати масив, що складається з `USERS_COUNT` (константа описана в цьому файлі) об'єктів.
        // Кожен об'єкт має містити такі поля:
        //    1. `id` - результат виклику методу `generateId`
        //    2. `name` - результат виклику методу `generateName`
        //    3. `lastName` - результат виклику методу `generateLastName`
        //    4. `avatarId` - результат виклику методу `generateAvatarId`
        //    5. `birthDate` - результат виклику методу `generateBirthDate`

        return [];
    }

    generateId() {
        // todo: Має повертати рядок з `ID_LENGTH` (константа описана в цьому файлі) символів, де кожен символ генерується по такій формулі:
        //   1. Якщо `випадкове число < 0.33`, символ буде результатом виклику метода `generateUpperCase`
        //   2. Якщо `0.33 < випадкове число < 0.66`, символ буде результатом виклику метода `generateLowerCase`
        //   3. Якщо `випадкове число > 0.66`, символ буде результатом виклику метода `generateDigit`

        return '';
    }

    generateUpperCase() {
        // todo: Має повертати 1 рандомну літеру латинського алфавіту в діапазоні [A-Z]

        return '';
    }

    generateLowerCase() {
        // todo: Має повертати 1 рандомну літеру латинського алфавіту в діапазоні [a-z]

        return '';
    }

    generateDigit() {
        // todo: Має повертати 1 рандомну цифру в діапазоні [0-9]

        return 0;
    }

    generateName() {
        // todo:
        // У файл імпортована константа `NAMES`, яка описана в файлі `src/consts/index.js` і
        // являє собою масив рядків, які є іменами. Метод має повертати рандомне ім'я з цього масиву.

        return '';
    }

    generateLastName() {
        // todo:
        // У файл імпортована константа `LAST_NAMES`, яка описана в файлі `src/consts/index.js` і
        // являє собою масив рядків, які є прізвищами. Метод має повертати рандомне прізвище з цього масиву.

        return '';
    }

    generateAvatarId() {
        // todo: Має повертати рандомне число в діапазоні [1-11]

        return 1;
    }

    generateBirthDate() {
        // todo: Має повертати дату з сьогоднішнім числом і місяцем. Рік має бути вибраний випадково
        // в діапазоні [1975-2000]

        return new Date();
    }
}
