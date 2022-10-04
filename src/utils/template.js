export const template = (obj, tmpl) => Object.entries(obj)
    .reduce((currentTmpl, [key, value]) => currentTmpl.replaceAll(`{{ ${key} }}`, value), tmpl);
