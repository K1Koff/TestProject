import { User } from '../models/User';

export class UsersService {
    constructor(users) {
        this.users = users.map((user) => new User(user));
    }

    orderUsers(filters, sorts) {
        return this.users;
    }
}
