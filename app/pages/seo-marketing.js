module.exports = async function($) {
  $.page.description = $.t('seo_meta')
  $.page.title = $.t('om-oss_title')

  return /* html */`
    <div class="top-wrapper pale-background">
      <div class="top-row">
        <div class="top-column image">
          <div class="top-image">
            <img src="/img/speria-creative-seo-marketing-opt.svg" alt="image">
          </div>
        </div>
        <div class="top-column text">
          <div class="top-text">
            <h1>${ $.t('seo_tittel') }</h1><hr style="width:16%; position: relative; left: -5rem">
            <p>&ldquo; ${ $.t('seo_undertittel_bilde') } &rdquo;</p>
          </div>
        </div>
      </div>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-seo inner-width">
        <h2>${ $.t('seo_tekst_bilde') }</h2>
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
