module.exports = () => {
    return async function error(ctx, next) {
        try {
            await next()
        } catch (e) {
            console.log(e)
            ctx.body = e
        }
    };
  }