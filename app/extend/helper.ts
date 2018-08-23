const moment = require('moment')

export default {
    formatDate: (date, format) => {
        return moment(date).format(format || 'YYYY-MM-DD HH:mm:ss')
    },
    parseInt: (str) => {
        if (typeof str === 'number') {
            return str
        }
        if (!str) {
            return 0
        }
        return parseInt(str, 10) || 0
    },
}
