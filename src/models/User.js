export class User {
    constructor(userData) {}

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
