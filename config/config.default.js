// 此处改为你自己的 Cookie 安全字符串 - ?
exports.keys = '_456456456486421_4545'
exports.view = {
    defaultViewEngine: 'handlebars',
    defaultExtension: '.hbs',
    mapping: {
        '.hbs': 'handlebars',
    }
}
exports.middleware = [
    'log'
]