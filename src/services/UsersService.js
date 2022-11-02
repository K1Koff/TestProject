/* eslint-disable no-fallthrough */
/* eslint-disable no-nested-ternary */
import { User } from '../models/User';

export class UsersService {
    constructor(cleanedUsers) {
        this.users = [];
        cleanedUsers.forEach((element) => {
            this.users.push(new User(element));
        });
    }

    manageUsers(filters, sorts) {
        const filteredUsers = this.filterUsers(this.users, filters);
        return this.sortUsers(filteredUsers, sorts);
    }

    filterUsers(users, filters) {
        if (filters.query === '') return users;
        function searchBy(filteredParameter, searchRequest) {
            return (filteredParameter.toString().toLowerCase().includes(searchRequest.toString().toLowerCase())) ? 1 : 0;
        }
        function searchByAll(searchRequest, currentUser) {
            return searchBy(currentUser.fullName, searchRequest) || searchBy(currentUser.id, searchRequest)
            || searchBy(currentUser.postsCount, searchRequest) || searchBy(currentUser.formattedBirthDate, searchRequest);
        }
        const filteredUsers = users.filter((value) => {
            switch (filters.filterBy) {
            case 'all': return searchByAll(filters.query, value);
            case 'fullName': return searchBy(value.fullName, filters.query);
            case 'iD': return searchBy(value.id, filters.query);
            case 'posts': return searchBy(value.postsCount, filters.query);
            case 'birthDate': return searchBy(value.formattedBirthDate, filters.query);
            default: return null;
            }
        });
        return filteredUsers;
    }

    sortUsers(users, sorts) {
        let valueA = '';
        let valueB = '';
        if (sorts.sortBy === '') return users;
        return users.sort((a, b) => {
            if (sorts.sortBy === 'full_name') {
                valueA = a.fullName;
                valueB = b.fullName;
                if (sorts.order === 'desc') {
                    return valueB.localeCompare(valueA);
                }
                return valueA.localeCompare(valueB);
            }
            if (sorts.sortBy === 'birth_date') {
                valueA = a.birthDate;
                valueB = b.birthDate;
            } else {
                valueA = a.postsCount;
                valueB = b.postsCount;
            }
            if (sorts.order === 'desc') {
                return (valueA - valueB > 0) ? -1 : 1;
            }
            return (valueA - valueB > 0) ? 1 : -1;
        });
    }

    numOfUsers() {
        return this.users.length;
    }
}
