const moment = require('moment')

export default {
    formatDate: (date, format) => {
        return moment(date).format(format || 'YYYY-MM-DD HH:mm:ss')
    },
}
