import { User } from '../models/User';

export class UsersService {
    constructor(cleanedUsers) {
        this.users = [];
    }

    manageUsers(filters, sorts) {
        return this.users;
    }
}
