const actions = {}

actions.sendEmail = {
  validate: {
    data: {
      name: {
        minlength: 2
      },
      email: {
        is: '$email'
      },
      subject: {
        in: ['price', 'questions', 'marketing', 'design', 'hosting', 'other']
      },
      message: {
        minlength: 5
      }
    }
  },

  main: async function($) {
    // Gather parameters sent from the client
    const {name, phone, email, subject, message} = $.params.data

    const data = { name, email, phone, message }
    const config = { subject, from: email }

    // Send the email and return the result
    return await $.app.mailer('contact-mail', config, data)
  }
}

module.exports = actions
