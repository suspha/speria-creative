module.exports = async function ($) {
  await $.validate({
    values: {
      name: {
        required: true,
        min: 3
      },
      email: {
        required: true,
        is: 'email'
      },
      phone: {},
      subject: {
        required: true,
        in: ['price', 'questions', 'design', 'development', 'other']
      },
      message: {
        required: true,
        min: 5
      }
    }
  })

  // Gather parameters sent from the client
  const { name, phone, email, subject, message } = $.params.values

  const data = { name, email, phone, message }
  const options = {
    subject,
    from: 'post@speria.no',
    to: 'post@speria.no',
    replyTo: email
  }

  // Send the email and return the result
  return await $.mailer.send('contact', $, options, data)
}
