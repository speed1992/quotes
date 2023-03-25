const fs = require('fs')
const { getClockTime } = require('./utils/utils')

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

var currentdate = new Date()
var datetime = currentdate.getDate() + ' ' + monthNames[currentdate.getMonth()] + ' ' + currentdate.getFullYear() + ' @ ' + getClockTime()

const buildInfo = {}

buildInfo.buildDateTime = datetime

fs.writeFile('./src/scripts/buildDate.json', JSON.stringify(buildInfo), function (err) {
    if (err) {
        return console.log(err)
    }
    console.log('Build Info Updated:', datetime)
})
