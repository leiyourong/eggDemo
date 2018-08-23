import { Application } from 'egg';

export default (options, app: Application) => {
    app.logger.debug(options.args)
    // options, app
    return async function logMiddleware(ctx, next) {
        const request = ctx.request
        const startTime = Date.now()
        await next()
        console.log(`${request.method} ${request.url} ${Date.now() - startTime}ms`)
    }
}