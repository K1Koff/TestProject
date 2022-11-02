export class User {
    constructor(userData) {
        this.id = userData.id;
        this.avatarId = userData.avatarId;
        this.birthDate = userData.birthDate;
        this.fullName = `${userData.name} ${userData.lastName}`;
        this.postsCount = this.avatarId ** 3;
        this.formattedBirthDate = this.getData().birthDate;
    }

    getData() {
        const getDataId = this.id;
        const getDataFullName = this.fullName;
        const getDataPostsCount = this.postsCount;
        const getDataBirthDate = () => {
            function dateNormalize(formatingDatePart) {
                const str = formatingDatePart.toString();
                if (str.length === 2) return str;
                if (str.length < 2) return `0${str}`;
                return str;
            }
            const normalzedDate = (`${
                dateNormalize(this.birthDate.getDate())
            }/${
                dateNormalize(this.birthDate.getMonth() + 1)
            }/${
                dateNormalize(this.birthDate.getFullYear())
            }`
            );
            return normalzedDate;
        };
        const getDataAvatarSrc = `https://ik.imagekit.io/igo1qzk1oe2z/avatars/${this.avatarId}.webp`;
        return {
            id: getDataId,
            fullName: getDataFullName,
            postsCount: getDataPostsCount,
            birthDate: getDataBirthDate(),
            avatarSrc: getDataAvatarSrc,
            formattedBirthDate: this.formattedBirthDate
        };
    }
}
