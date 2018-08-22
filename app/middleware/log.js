module.exports = (options, app) => {
    return async function logMiddleware(ctx, next) {
        const request = ctx.request
        const startTime = Date.now()
        await next();
        console.log(`${request.method} ${request.url} ${Date.now() - startTime}ms`)
    }
  }