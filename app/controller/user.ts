import { Controller } from 'egg'

export default class UserController extends Controller {
  async list() {
    const ctx = this.ctx
    const users = await ctx.service.user.list()
    await ctx.render('../view/user.hbs', { users })
  }
}
