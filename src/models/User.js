export class User {
    constructor({
        id, name, lastName, avatarId, birthDate
    }) {
        this.id = id;
        this.fullName = `${name} ${lastName}`;
        this.avatarId = avatarId;
        this.birthDate = birthDate;
        this.postsCount = avatarId ** 3;
    }
}
