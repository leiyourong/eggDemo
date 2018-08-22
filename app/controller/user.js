const Controller = require('egg').Controller
const handlebars = require('handlebars')

class UserController extends Controller {
  async list() {
    const ctx = this.ctx
    const users = await ctx.service.user.list()
    await ctx.render('../view/user.hbs', { users })
  }
}

module.exports = UserController