import { debounce } from '../utils/debounce';

export class App {
    constructor(usersService) {
        this.usersService = usersService;

        this.filters = { query: '' };
        this.sorts = { sortBy: '', order: 'asc' };

        this.inputEl = window.document.getElementById('searchInput');
        this.selectEl = window.document.getElementById('sortBy');

        this.populateSortBySelect();
        this.listenEvents();
    }

    populateSortBySelect() {

    }

    listenEvents() {
        this.inputEl.addEventListener('input', debounce((event) => {
            this.filters.query = event.target.value.trim();
            this.renderUsers();
        }, 1000));

        this.selectEl.addEventListener('change', (event) => {
            this.filters.query = event.target.value.trim();
            this.renderUsers();
        });
    }

    renderUsers() {
        const users = this.usersService.orderUsers(this.filters, this.sorts);
    }
}
