export const USER_LIST_ITEM_TEMPLATE = `
    <tr>
        <td><img src="{{ avatarSrc }}" class="users-table__image"></td>
        <td><span>{{ id }}</span></td>
        <td><span>{{ fullName }}</span></td>
        <td><span>{{ birthDate }}</span></td>
        <td><span>{{ postsCount }}</span></td>
    </tr> 
`.trim();
