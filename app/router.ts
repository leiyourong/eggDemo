export default app => {
    const { router, controller } = app
    // router.verb(reqName?, path, ...middlewares?, controller)
    router.get('/', controller.home.index)
    // router.get('getUser', '/user', controller.user.list)
    router.resources('getUser', '/user', controller.user)
} 