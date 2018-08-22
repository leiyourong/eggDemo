export default {
    // 此处改为你自己的 Cookie 安全字符串 - ?
    keys: '_456456456486421_4545',
    view: {
        defaultViewEngine: 'handlebars',
        defaultExtension: '.hbs',
        mapping: {
            '.hbs': 'handlebars',
        }
    },
    middleware: ['log']
}

