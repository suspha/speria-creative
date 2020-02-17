module.exports = async function($) {
  $.page.description = $.t('om-oss_meta')
  $.page.title = $.t('om-oss_title')

  return /* html */`
  <div class="header-om-oss">
    <h1>We don't work to live - <span class="new-line">We live to work</span></h1>
    <h2>${ $.t('om_oss_undertittel_bilde') }</h2>
  </div>
  <div class="full-width border-row light-background">
    <div class="intro-om-oss inner-width">
      <h2>${ $.t('om_oss_tittel') }</h2><hr style="width:10%; position: relative; bottom: 1rem; left: 3rem;">
      <p>${ $.t('om_oss_tekst1') }</p>
      <p>${ $.t('om_oss_tekst2') }</p>
      <p>${ $.t('om_oss_tekst3') }</p>
      <h3>${ $.t('om_oss_tittel1') }</h3>
      <blockquote>${ $.t('om_oss_tekst4') }</blockquote>
      <blockquote>${ $.t('om_oss_tekst5') }</blockquote>
      <blockquote>${ $.t('om_oss_tekst6') }</blockquote>
      <blockquote>${ $.t('om_oss_tekst7') }</blockquote>
      <blockquote>${ $.t('om_oss_tekst8') }</blockquote>
      <blockquote>${ $.t('om_oss_tekst9') }</blockquote>
      <p><a href="${ $.link('index') }#kontakt"> ${ $.t('om_oss_tekst10') }</a></p>
    </div>
  </div>

  `
}
