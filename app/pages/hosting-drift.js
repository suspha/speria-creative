module.exports = async function($) {

  $.page.description = $.t('host_meta')
  $.page.title = $.t('host_title')

  return /* html */`
    <div class="top-wrapper">
      <div class="top-row">
        <div class="top-column image">
          <div class="top-image">
            <img src="/img/speria-creative-hosting-support-opt.svg" alt="image">
          </div>
        </div>
        <div class="top-column text">
          <div class="top-text">
            <h1>${ $.t('hosting_tittel') }</h1><hr style="width:14%; position: relative; left: 2rem">
            <p>&ldquo; ${ $.t('hosting_undertittel_bilde') } &rdquo;</p>
          </div>
        </div>
      </div>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-hosting inner-width">
        <h2>${ $.t('hosting_tekst_bilde') }</h2>
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
