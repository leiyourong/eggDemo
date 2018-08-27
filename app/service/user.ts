import { Service } from 'egg'

export default class UserService extends Service {
    async list (id?: string) {
        const ctx = this.ctx
        const User = ctx.model.User
        if (id) {
            const items = await User.findById(id).exec()
            return items
        } else {
            const items = await User.find().exec()
            return items
        }
    }
}
