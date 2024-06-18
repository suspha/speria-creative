module.exports = {
  validate: {
    values: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        is: '$email'
      },
      subject: {
        required: true,
        in: ['price', 'questions', 'design', 'development', 'other']
      },
      message: {
        minlength: 5
      }
    }
  },
  main: async function ($) {
    // Gather parameters sent from the client
    const { name, phone, email, subject, message } = $.params.values

    const data = { name, email, phone, message }
    const options = { subject, from: email }

    // Send the email and return the result
    return await $.mailer.send('contact', $, options, data)
  }
}
