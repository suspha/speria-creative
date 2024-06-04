module.exports = async function ($) {
  $.page.title = $.t('bekreftelse_title')

  return /* HTML */ `
    <div class="inner-width">
      <div class="bekreftelse">
        <h1>${$.t('bekreftelse_title')}</h1>
        <p>${$.t('bekreftelse_text1')}</p>
      </div>
    </div>
  `
}
