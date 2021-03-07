const mailer = require('wmail')

// Default options
const options = {
  subject: 'Henvendelse',
  reply: 'post@speria.no',
  to: 'post@speria.no'
}

module.exports = async function(app) {
  app.mailer = mailer({ ...app.config.mail, options })
}
