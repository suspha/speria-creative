module.exports = async function(mail, $, data) {
  console.log(mail)
  return /* html */`
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="content-type" content="text/html; charset=utf-8">
        <title>${ mail.subject || 'Speria kontakt' }</title>
        <style>
          body {
            background-color: white;
          }
        </style>
      </head>
      <body>
        <div class="content">${ mail.content }</div>
      </body>
    </html>
  `
}
