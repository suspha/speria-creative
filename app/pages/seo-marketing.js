module.exports = async function($) {
  $.page.description = $.t('seo_meta')
  $.page.title = $.t('om-oss_title')

  return /* html */`
    <div class="header-seo">
      <h1>${ $.t('seo_tekst_bilde') }</h1>
      <h2>${ $.t('seo_undertittel_bilde') }</h2>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-seo inner-width">
        <h2>${ $.t('seo_tittel') }</h2><hr style="width:5%; margin-left: 5px;">
        <p>${ $.t('seo_tekst1') }</p>
        <h3>${ $.t('seo_tittel1') }</h3>
        <p>${ $.t('seo_tekst2') }</p>
        <p>${ $.t('seo_tekst3') }</p>
        <p>${ $.t('seo_tekst4') }</p>
        <p>${ $.t('seo_tekst5') }</p>
        <h3>${ $.t('seo_tittel2') }</h3>
        <p>${ $.t('seo_tekst6') }</p>
        <p>${ $.t('seo_tekst7') }</p>
        <p>${ $.t('seo_tekst8') }</p>
        <p>${ $.t('seo_tekst9') }</p>
        <p>${ $.t('seo_tekst10') }</p><br>
        <a href="${ $.link('index') }?subject=marketing#kontakt" class="button small" role="button">${ $.t('seo_tekst11') }</a>
      </div>
    </div>
  `
}
