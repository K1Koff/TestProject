/* eslint-disable no-restricted-syntax */
export class FixDataService {
    fixData(brokenUsersJson) {
        return this.parseUsersJson(brokenUsersJson).map(this.fixUser);
    }

    parseUsersJson(usersJSON) {
        const decodedUsersJson = JSON.parse(usersJSON);
        return decodedUsersJson;
    }

    fixUser({
        id, name, lastName, avatarId, birthDate
    }) {
        const fixedId = () => {
            let fixedIdString = '';
            for (const char of id[1]) fixedIdString += (char === ' ') ? '' : char;
            return fixedIdString;
        };
        const fixedName = () => {
            const splitedName = name.split('__');
            return splitedName[0];
        };
        const fixedLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
        const fixedAvatarId = Math.sqrt(avatarId.value);
        const fixedBirthDate = new Date(birthDate * 1000 * 2.25);
        return {
            id: fixedId(),
            name: fixedName(),
            lastName: fixedLastName,
            avatarId: fixedAvatarId,
            birthDate: fixedBirthDate
        };
    }
}
