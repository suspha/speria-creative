module.exports = {
  validate: {
    values: {
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
    const { name, phone, email, subject, message } = $.params.values

    const data = { name, email, phone, message }
    const options = { subject, from: email }

    // Send the email and return the result
    return await $.app.mailer.send('contact', $, options, data)
  }
}
