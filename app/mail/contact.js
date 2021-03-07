module.exports = async function($, data) {
  return {
    layout: 'mail',
    subject: 'Henvendelse',
    content: [
      `<div>Navn: ${ data.name }</div>`,
      `<div>Epost: ${ data.email }</div>`,
      `<div>Telefon: ${ data.phone }</div>`,
      `<div>Beskjed:<br> ${ data.message }</div>`
    ].join('\n')
  }
}
