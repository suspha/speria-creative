const mailer = require('wmail')

// This config can also be added to app/config/mail.yml
const config = {
  domain: 'speria.no',
  key: 'key-your-mailgun-key'
}

// Default options
const options = {
  subject: 'Henvendelse',
  reply: 'post@speria.no',
  from: 'post@speria.no',
  to: 'post@speria.no'
}

// Add the mailer to the app object so we can access it in our app
module.exports = async function(app) {
  app.mailer = mailer({ app, ...config, options })
}