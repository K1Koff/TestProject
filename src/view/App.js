import { SORT_BY_OPTIONS } from '../consts/index';
import { SORT_BY_SELECT_OPTION_TEMPLATE } from '../templates/SORT_BY_SELECT_OPTION_TEMPLATE';
import { USER_LIST_ITEM_TEMPLATE } from '../templates/USER_LIST_ITEM_TEMPLATE';
import { QUANTITY_OF_USERS_DISPLAYED } from '../templates/QUANTITY_OF_USERS_DISPLAYED';
import { template, debounce } from '../utils/index';

export class App {
    constructor({
        usersService, inputEl, selectEl, usersTableEl, numOfUsersDisplayed, sortByParameter
    } = {}) {
        this.usersService = usersService;
        this.inputEl = inputEl;
        this.selectEl = selectEl;
        this.usersTableEl = usersTableEl;
        this.numOfUsersDisplayed = numOfUsersDisplayed;
        this.sortByParameter = sortByParameter;

        this.filters = { query: '', filterBy: 'fullName' };
        this.sorts = { sortBy: '', order: 'asc' };

        this.renderSortBySelect();
        this.listenEvents();
        this.renderUsers();
    }

    renderSortBySelect() {
        this.getSortByOptionsData()
            .map((optionData) => template(SORT_BY_SELECT_OPTION_TEMPLATE, optionData))
            .forEach((optionsHtml) => this.selectEl.insertAdjacentHTML('beforeend', optionsHtml));
    }

    getSortByOptionsData() {
        const opionsArray = [];
        function addItem(array, item, sortingOrder) {
            array.push({
                sortBy: item.toLowerCase().replace(' ', '_'),
                order: sortingOrder,
                label: item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
            });
        }
        function normalizedSortingOptions(sortingTemplate) {
            sortingTemplate.forEach((value) => {
                const cleanedValue = value.replaceAll('@', 'A')
                    .replaceAll('3', 'E')
                    .replaceAll('$', 'S')
                    .replaceAll('0', 'O')
                    .replaceAll('1', 'I');
                addItem(opionsArray, cleanedValue, 'asc');
                addItem(opionsArray, cleanedValue, 'desc');
            });
        }
        normalizedSortingOptions(SORT_BY_OPTIONS);
        return opionsArray;
    }

    listenEvents() {
        this.inputEl.addEventListener('input', debounce((event) => {
            this.filters.query = event.target.value.trim();
            this.renderUsers();
        }, 500));

        this.selectEl.addEventListener('change', () => {
            const selectedOption = this.selectEl.options[this.selectEl.selectedIndex];

            this.sorts = {
                sortBy: selectedOption.dataset.sortBy,
                order: selectedOption.dataset.order
            };

            this.renderUsers();
        });

        this.sortByParameter.addEventListener('change', () => {
            const selectedDataFilterBy = this.sortByParameter.options[this.sortByParameter.selectedIndex];

            this.filters = {
                query: this.filters.query,
                filterBy: selectedDataFilterBy.dataset.filterBy
            };

            this.renderUsers();
        });
    }

    renderNumberOfDisplayedUsers(filteredUsers) {
        const displayedUsersCounter = {
            displayedUsers: filteredUsers.length,
            numOfAllUsers: this.usersService.countUsers()
        };
        const counter = template(QUANTITY_OF_USERS_DISPLAYED, displayedUsersCounter);
        this.numOfUsersDisplayed.innerHTML = counter;
    }

    renderUsers() {
        const orderedUsers = this.usersService.manageUsers(this.filters, this.sorts);
        const userModels = Array.isArray(orderedUsers) ? orderedUsers : [];

        this.usersTableEl.innerHTML = '';

        this.renderNumberOfDisplayedUsers(orderedUsers);

        userModels
            .map((userModel) => template(USER_LIST_ITEM_TEMPLATE, userModel.getData()))
            .forEach((optionHtml) => this.usersTableEl.insertAdjacentHTML('beforeend', optionHtml));
    }
}
