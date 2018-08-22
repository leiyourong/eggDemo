const moment = require('moment')
exports.formatDate = (date, format) => {
    return moment(date).format(format || 'YYYY-MM-DD HH:mm:ss')
}
