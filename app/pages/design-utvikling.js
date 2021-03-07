module.exports = async function($) {
  $.page.description = $.t('design_meta')
  $.page.title = $.t('design_title')

  return /* html */`
    <div class="top-wrapper">
      <div class="top-row">
        <div class="top-column image">
          <div class="top-image">
            <img src="/img/speria-creative-design-development-opt.svg" alt="image">
          </div>
        </div>
        <div class="top-column text">
          <div class="top-text">
            <h1>${ $.t('design_tittel') }</h1><hr style="width:8%; position: relative; left: 6rem">
            <p>&ldquo; ${ $.t('design_undertittel_bilde') } &rdquo;</p>
          </div>
        </div>
      </div>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-design-utvikling inner-width">
        <h2>${ $.t('design_tittel_bilde') }</h2>
        <p>${ $.t('design_tekst1') }</p>
        <p>${ $.t('design_tekst2') }</p>
        <p>${ $.t('design_tekst3') }</p>
        <h3>${ $.t('design_tittel1') }</h3>
        <p>${ $.t('design_tekst4') }</p>
        <h3>${ $.t('design_tittel2') }</h3>
        <p>${ $.t('design_tekst5') }</p>
        <h3>${ $.t('design_tittel4') }</h3>
        <p>${ $.t('design_tekst9') }</p>

        <h3>${ $.t('design_tittel3') }</h3>
        <p>${ $.t('design_tekst6') }</p><br>
        <p>${ $.t('design_tekst7') }</p><br>
        <a href="${ $.link('index') }?subject=design#kontakt" class="button small" role="button">${ $.t('design_tekst8') }</a>
      </div>
    </div>
  `
}
