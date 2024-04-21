module.exports = async function ($) {
  $.page.description = $.t('om-meg_meta')
  $.page.title = $.t('om-meg_title')

  return /* html */ `
  <div class="top-wrapper pale-background">
    <div class="top-row">
      <div class="top-column image">
        <div class="top-image">
          <img src="/img/speria-creative-about-opt.svg" alt="image">
        </div>
      </div>
      <div class="top-column text">
        <div class="top-text">
          <h1>${$.t('om_oss_tittel')}</h1>
          <p>&ldquo; ${$.t('om_oss_undertittel_bilde')} &rdquo;</p>
        </div>
      </div>
    </div>
  </div>
  <div class="full-width border-row light-background">
    <div class="intro-om-meg inner-width">
      <h2>We don't work to live - We live to work</span></h2>
      <p>${$.t('om_oss_tekst1')}</p>
      <p>${$.t('om_oss_tekst2')}</p>
      <p>${$.t('om_oss_tekst3')}</p>
      <h3>${$.t('om_oss_tittel1')}</h3>
      <blockquote>${$.t('om_oss_tekst4')}</blockquote>
      <blockquote>${$.t('om_oss_tekst5')}</blockquote>
      <blockquote>${$.t('om_oss_tekst6')}</blockquote>
      <blockquote>${$.t('om_oss_tekst7')}</blockquote>
      <blockquote>${$.t('om_oss_tekst8')}</blockquote>
      <blockquote>${$.t('om_oss_tekst9')}</blockquote>
      <a class="button small" href="${$.link('index')}#kontakt"> ${$.t(
    'om_oss_tekst10'
  )}</a>
    </div>
  </div>

  `
}
