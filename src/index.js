import { usersService } from './services/index';
import { App } from './view/App';

const inputEl = window.document.getElementById('searchInput');
const selectEl = window.document.getElementById('sortBy');
const usersTableEl = window.document.getElementById('usersTable');
const numOfUsersDisplayed = window.document.getElementById('usersShown');
const sortByParameter = window.document.getElementById('sortByParameter');

new App({
    usersService,
    inputEl,
    selectEl,
    usersTableEl,
    numOfUsersDisplayed,
    sortByParameter,
});
