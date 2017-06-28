'use strict'

const gplay = require('google-play-scraper')

exports.handler = (event, context, cb) => {
  context.callbackWaitsForEmptyEventLoop = false

  gplay[event.command](event.options)
    .then(res => { cb(null, res) }, err => { cb(err) })
}
