import { usersService } from './services/index';
import { App } from './views/App';

const inputEl = window.document.getElementById('searchInput');
const selectEl = window.document.getElementById('sortBy');
const usersTableEl = window.document.getElementById('usersTable');

new App({
    usersService,
    inputEl,
    selectEl,
    usersTableEl
});
