module.exports = async function(data) {
  return {
    // Wmail options
    options: {
      subject: 'Speria kontakt'
    },
    // HTML version
    html: {
      // The name of the layout to use in app/layouts
      layout: 'mail-html',
      // The content property of the data parameter
      content: [
        `<div>Navn: ${ data.name }</div>`,
        `<div>Epost: ${ data.email }</div>`,
        `<div>Telefon: ${ data.phone }</div>`,
        `<div>Beskjed:<br> ${ data.message }</div>`
      ].join('\n')
    },
    // Text version
    text: {
      layout: 'mail-text',
      content: [
        `Navn: ${ data.name }`,
        `Epost: ${ data.email }`,
        `Telefon: ${ data.phone }`,
        `Beskjed:`,
        `${ data.message }`
      ].join('\n')
    }
  }
}
