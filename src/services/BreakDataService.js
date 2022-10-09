export class BreakDataService {
    breakData(users) {
        const brokenUsers = users.map(({
            id, name, lastName, avatarId, birthDate
        }) => {
            const brokenId = ['😎', id.padStart(10).padEnd(20)];
            const brokenName = [name, name, name].join('__');
            const brokenLastName = lastName.charAt(0).toLowerCase() + lastName.slice(1).toUpperCase();
            const brokenAvatarId = { value: avatarId ** 2 };
            const brokenBirthDate = Math.floor(birthDate.getTime() / 1000 / 2.25);

            return {
                id: brokenId,
                name: brokenName,
                lastName: brokenLastName,
                avatarId: brokenAvatarId,
                birthDate: brokenBirthDate
            };
        });

        return JSON.stringify(brokenUsers);
    }
}
