module.exports = async function ($) {
  $.page.description = $.t('om-meg_meta')
  $.page.title = $.t('om-meg_title')

  return /* html */ `
  <div class="top-wrapper beige-background">
    <div class="top-row">
      <div class="top-column image">
        <div class="top-image">
          <img src="/img/speria-creative-about.svg" alt="image">
        </div>
      </div>
      <div class="top-column text">
        <div class="top-text">
          <h1>${$.t('om_meg_tittel')}</h1>
          <p>${$.t('om_meg_undertittel_bilde')}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="full-width border-row light-background">
    <div class="intro-om-meg inner-width">
      <h2>I don't work to live - I live to work</span></h2>
      <p>${$.t('om_meg_tekst1')}</p>
      <p>${$.t('om_meg_tekst2')}</p>
      <p>${$.t('om_meg_tekst3')}</p>
      <h3>${$.t('om_meg_tittel1')}</h3>
      <p>${$.t('om_meg_tekst4')}</p>
      <p>${$.t('om_meg_tekst5')}</p>
      <p>${$.t('om_meg_tekst6')}</p>
      <p>${$.t('om_meg_tekst7')}</p>
      <p>${$.t('om_meg_tekst8')}</p>
      <p>${$.t('om_meg_tekst9')}</p>
      <a class="button cta" href="${$.link('index')}#kontakt"> ${$.t(
    'om_meg_tekst10'
  )}</a>
    </div>
  </div>

  `
}
