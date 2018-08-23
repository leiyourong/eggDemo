export default appInfo => {
    // 此处改为你自己的 Cookie 安全字符串 - ?
    const config = {
        keys: '_456456456486421_4545',
        view: {
            defaultViewEngine: 'handlebars',
            defaultExtension: '.hbs',
            mapping: {
                '.hbs': 'handlebars',
            },
        },
        middleware: ['log', 'error'],
        log: {
            args: appInfo.env
        }
    }
    return config
}
