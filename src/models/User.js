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

    getData() {
        return {
            id: this.id,
            fullName: this.fullName,
            birthDate: '11/11/2022',
            postsCount: this.postsCount,
            avatarSrc: `https://ik.imagekit.io/igo1qzk1oe2z/avatars/${this.avatarId}.webp`,
        };
    }
}
