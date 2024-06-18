module.exports = async function ($) {
  $.page.title = $.t('bekreftelse_title')

  return /* HTML */ `
    <div class="beige-background">
      <div class="bekreftelse">
        <h1>${$.t('bekreftelse_title')}</h1>
        <p>${$.t('bekreftelse_text1')}</p>
      </div>
    </div>
  `
}
