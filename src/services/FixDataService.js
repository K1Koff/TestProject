export class FixDataService {
    fixData(brokenUsersJson) {
        return this.parseUsersJson(brokenUsersJson).map(this.fixUser);
    }

    parseUsersJson(usersJSON) {
        return [];
    }

    fixUser(brokenUser) {
        return brokenUser;
    }
}
