const { app, mock, assert } = require('egg-mock/bootstrap')

describe('test/app/extend/helper.test.js', () => {
  it('should return right format', () => {
    // 没过
    assert(app.formatDate('2018-06-25T22:04:04.931+0800') === '2018-06-25 22:04:04')
  })
})