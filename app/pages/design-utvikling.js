module.exports = async function($) {
  $.page.description = $.t('design_meta')
  $.page.title = $.t('design_title')

  return /* html */`
    <div class="header-design">
      <h1>${ $.t('design_tittel_bilde') }</h1>
      <h2>${ $.t('design_undertittel_bilde') }</h2>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-design-utvikling inner-width">
        <h2>${ $.t('design_tittel') }</h2><hr style="width:5%; margin-left: 5px;">
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
