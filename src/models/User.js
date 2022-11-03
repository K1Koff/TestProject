export class User {
    constructor(userData) {
        this.id = userData.id;
        this.avatarId = userData.avatarId;
        this.birthDate = userData.birthDate;
        this.fullName = `${userData.name} ${userData.lastName}`;
        this.postsCount = this.avatarId ** 3;
        this.formattedBirthDate = this.createNormalizedBirthDate(userData.birthDate);
    }

    datePartNormalize(formatingDatePart) {
        if (formatingDatePart < 10) return `0${formatingDatePart}`;
        return formatingDatePart;
    }

    createNormalizedBirthDate(date) {
        const normalzedDate = (`${
            this.datePartNormalize(date.getDate())
        }/${
            this.datePartNormalize(date.getMonth() + 1)
        }/${
            this.datePartNormalize(date.getFullYear())
        }`
        );
        return normalzedDate;
    }

    getData() {
        const getDataId = this.id;
        const getDataFullName = this.fullName;
        const getDataPostsCount = this.postsCount;
        const getDataBirthDate = this.formattedBirthDate;
        const getDataAvatarSrc = `https://ik.imagekit.io/igo1qzk1oe2z/avatars/${this.avatarId}.webp`;
        return {
            id: getDataId,
            fullName: getDataFullName,
            postsCount: getDataPostsCount,
            birthDate: getDataBirthDate,
            avatarSrc: getDataAvatarSrc,
            formattedBirthDate: getDataBirthDate
        };
    }
}
