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
      <h2>${ $.t('om_oss_tittel') }</h2><hr style="width:5%; margin-left: 5px;">
      <p>${ $.t('om_oss_tekst1') }</p>
      <p>${ $.t('om_oss_tekst2') }</p>
      <p>${ $.t('om_oss_tekst3') }</p>
      <h3>${ $.t('om_oss_tittel1') }</h3>
      <p><span>&ulcorn;</span>${ $.t('om_oss_tekst4') }</p>
      <p><span>&ulcorn;</span>${ $.t('om_oss_tekst5') }</p>
      <p><span>&ulcorn;</span>${ $.t('om_oss_tekst6') }</p>
      <p><span>&ulcorn;</span>${ $.t('om_oss_tekst7') }</p>
      <p><span>&ulcorn;</span>${ $.t('om_oss_tekst8') }</p>
      <p>${ $.t('om_oss_tekst9') }<a href="${ $.link('index') }#kontakt"> ${ $.t('om_oss_tekst10') }</a></p>
    </div>
  </div>

  `
}
