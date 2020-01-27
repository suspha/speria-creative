module.exports = async function($) {

  $.page.description = $.t('host_meta')
  $.page.title = $.t('host_title')

  return /* html */`
    <div class="header-hosting">
      <h1>${ $.t('hosting_tekst_bilde') }</h1>
      <h2>${ $.t('hosting_undertittel_bilde') }</h2>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-hosting inner-width">
        <h2>${ $.t('hosting_tittel') }</h2><hr style="width:5%; margin-left: 5px;">
        <p>${ $.t('hosting_tekst1') }</p>
        <h3>${ $.t('hosting_tittel1') }</h3>
        <p>${ $.t('hosting_tekst2') }</p>
        <h3>${ $.t('hosting_tittel2') }</h3>
        <p>${ $.t('hosting_tekst3') }</p><br>
        <p>${ $.t('hosting_tekst4') }</p><br>
        <a href="${ $.link('index') }?subject=hosting#kontakt" class="button small" role="button">${ $.t('hosting_tekst5') }</a>
      </div>
    </div>
  `
}
