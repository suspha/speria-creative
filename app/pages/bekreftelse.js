module.exports = async function($) {
  $.page.title = $.t('bekreftelse_title')

  return /* html */`
  <div class="inner-width">
    <div class="bekreftelse">
      <h1>${ $.t('bekreftelse_tittel') }</h1>
      <p>${ $.t('bekreftelse_text1') }</p>
    </div>
  </div>

  `
}

