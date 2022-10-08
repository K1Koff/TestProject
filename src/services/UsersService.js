import { User } from '../models/User';

export class UsersService {
    constructor(cleanedUsers) {
        this.users = [];
    }

    manageUsers(filters, sorts) {
        const filteredUsers = this.filterUsers(this.users, filters);
        return this.sortUsers(filteredUsers, sorts);
    }

    filterUsers(users, filters) {
        return users;
    }

    sortUsers(users, sorts) {
        return users;
    }
}
