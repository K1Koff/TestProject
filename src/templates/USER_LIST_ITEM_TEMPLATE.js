export const USER_LIST_ITEM_TEMPLATE = `
    <tr>
    <td> <img class="{{ users-table__image }}"
    src="{{ avatarSrc }}"> </td>
    <td>{{ id }}</td>
    <td>{{ fullName }}</td>
    <td>{{ birthDate }}</td>
    <td>{{ postsCount }}</td>
    </tr>
`.trim();
