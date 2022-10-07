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

        this.populateSortBySelect();
        this.listenEvents();
        this.renderUsers();
    }

    populateSortBySelect() {
        const sb = SORT_BY_OPTIONS.flatMap((sortBy) => {
            const normalizedSortBy = sortBy
                .replaceAll('1', 'I')
                .replaceAll('@', 'A')
                .replaceAll('$', 'S')
                .replaceAll('3', 'E')
                .replaceAll('0', 'O')
                .replaceAll('_', ' ');

            return [
                { sortBy: normalizedSortBy, order: 'asc', label: normalizedSortBy },
                { sortBy: normalizedSortBy, order: 'desc', label: normalizedSortBy }
            ];
        });

        const ops2 = sb.map((ops) => template(ops, SORT_BY_SELECT_OPTION_TEMPLATE));
        ops2.forEach((op) => this.selectEl.insertAdjacentHTML('beforeend', op));
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
