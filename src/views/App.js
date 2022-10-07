import { SORT_BY_OPTIONS } from '../consts/index';
import { SORT_BY_SELECT_OPTION_TEMPLATE } from '../templates/SORT_BY_SELECT_OPTION_TEMPLATE';
import { USER_LIST_ITEM_TEMPLATE } from '../templates/USER_LIST_ITEM_TEMPLATE';
import { template, debounce } from '../utils/index';

export class App {
    constructor(usersService) {
        this.usersService = usersService;

        this.filters = { query: '' };
        this.sorts = { sortBy: '', order: 'asc' };

        this.inputEl = window.document.getElementById('searchInput');
        this.selectEl = window.document.getElementById('sortBy');
        this.usersTableEl = window.document.getElementById('usersTable');

        this.renderSortBySelect();
        this.listenEvents();
        this.renderUsers();
    }

    renderSortBySelect() {
        this.getSortByOptionsData()
            .map((optionData) => template(optionData, SORT_BY_SELECT_OPTION_TEMPLATE))
            .forEach((optionsHtml) => this.selectEl.insertAdjacentHTML('beforeend', optionsHtml));
    }

    getSortByOptionsData() {
        return SORT_BY_OPTIONS.flatMap((sortBy) => {
            const normalizedSortBy = sortBy
                .replaceAll('1', 'I')
                .replaceAll('@', 'A')
                .replaceAll('$', 'S')
                .replaceAll('3', 'E')
                .replaceAll('0', 'O');

            return [
                { sortBy: normalizedSortBy.toLowerCase().replaceAll(' ', '_'), order: 'asc', label: normalizedSortBy.toLowerCase() },
                { sortBy: normalizedSortBy.toLowerCase().replaceAll(' ', '_'), order: 'desc', label: normalizedSortBy.toLowerCase() }
            ];
        });
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
    }

    renderUsers() {
        const orderedUsers = this.usersService.manageUsers(this.filters, this.sorts);
        const userModels = Array.isArray(orderedUsers) ? orderedUsers : [];

        this.usersTableEl.innerHTML = '';

        userModels
            .map((userModel) => template(userModel.getData ? userModel.getData() : {}, USER_LIST_ITEM_TEMPLATE))
            .forEach((optionHtml) => this.usersTableEl.insertAdjacentHTML('beforeend', optionHtml));
    }
}
