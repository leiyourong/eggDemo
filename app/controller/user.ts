import { Controller } from 'egg'

export default class UserController extends Controller {
  // ctx.query ctx.params request.body
  // for GET /user
  async index() {
    const ctx = this.ctx
    const users = await ctx.service.user.list(0)
    await ctx.render('../view/user.hbs', { users })
  }
  async list() {
    const ctx = this.ctx
    const users = await ctx.service.user.list(0)
    ctx.status = 200
    // ctx.set('Cache-Control', 'no-cache')
    ctx.body = {
      res: users
    }
  }
  // for GET /user/:id
  async show() {
    const ctx = this.ctx
    // 实际上校验params没意义 肯定是string
    try {
      ctx.validate({
        id: { type: 'string' }
      }, ctx.params)
    } catch (error) {
      ctx.status = 500
      ctx.body = error
      return
    }
    ctx.status = 200
    const times = ctx.helper.parseInt(ctx.cookies.get('times'))
    if (times > 5) {
      ctx.body = '休息会把~'
      ctx.cookies.set('times', '0')
      return
    }
    ctx.cookies.set('times', String(times + 1))
    const users = await ctx.service.user.list(ctx.params.id)
    await ctx.render('../view/user.hbs', { users })
  }
  // for GET /user/new
  async new() {}
  // for GET /user/:id/edit 跟show有区别？
  async edit() {}
  // for POST /user
  async create() {}
  // for PUT /user/:id
  async update() {}
  // for DELELE /user/:id
  async destroy() {}
}
