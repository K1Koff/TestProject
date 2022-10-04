import { debounce } from '../utils/debounce';
import { SORT_BY_OPTIONS } from '../consts/index';
import { SORT_BY_SELECT_OPTION_TEMPLATE } from '../templates/SORT_BY_SELECT_OPTION_TEMPLATE';
import { USER_LIST_ITEM_TEMPLATE } from '../templates/USER_LIST_ITEM_TEMPLATE';
import { template } from '../utils/index';

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
                .replaceAll('0', 'O');

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
        }, 1000));

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
        const users = this.usersService.orderUsers(this.filters, this.sorts);

        this.usersTableEl.childNodes.forEach((el) => el.remove());

        users
            .map((user) => template(user.getData(), USER_LIST_ITEM_TEMPLATE))
            .forEach((op) => this.usersTableEl.insertAdjacentHTML('beforeend', op));
    }
}
