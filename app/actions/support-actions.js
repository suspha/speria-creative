const actions = {}

actions.sendEmail = {
  main: async function($) {
    // Gather parameters sent from the client
    const { email, subject, content } = $.params.data

    // Send the email and return the result
    return await $.app.mailer('support-mail', { subject, from: email }, { content })
  }
}

module.exports = actions
