const mailer = require('wmail')

// Default options
const options = {
  subject: 'Henvendelse',
  reply: 'post@speria.no',
  to: 'post@speria.no'
}

// Add the mailer to the app object so we can access it in our app
module.exports = async function(app) {
  const config = app.config.mail
  app.mailer = mailer({ app, ...config, options })
}
