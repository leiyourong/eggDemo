import { Service } from 'egg'

export default class UserService extends Service {
    async list (page: number) {
        if (page == 1) {
            return [{
                name: '张XX',
                age: 99,
                birthday: '2018-06-25T22:04:04.931+0800'
            }]
        }
        return [{
            name: '张三',
            age: 18,
            birthday: '2018-06-25T22:04:04.931+0800'
        }, {
            name: '李五',
            age: 20,
            birthday: '2017-12-28T14:40:41.164+0800'
        }]
    }
}