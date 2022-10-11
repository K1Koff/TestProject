export const template = (tmpl, obj) => Object.entries(obj)
    .reduce((currentTmpl, [key, value]) => currentTmpl.replaceAll(`{{ ${key} }}`, value), tmpl);
