module.exports = async function ($) {
  $.page.description = $.t('design_meta')
  $.page.title = $.t('design_title')

  return /* HTML */ `
    <div class="top-wrapper beige-background ">
      <div class="top-row">
        <div class="top-column image">
          <div class="top-image">
            <img src="/img/frontend.svg" alt="image" />
          </div>
        </div>
        <div class="top-column text">
          <div class="top-text">
            <h1>${$.t('index_dev_tittel')}</h1>
            <h2>${$.t('frontend_undertittel_bilde')}</h2>
            <h2></h2>
          </div>
        </div>
      </div>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-frontend inner-width">
        <h3>${$.t('frontend_tittel2')}</h3>
        <p>${$.t('frontend_tekst5')}</p>

        <h3>${$.t('frontend_tittel1')}</h3>
        <p>${$.t('frontend_tekst4')}</p>

        <h3>${$.t('frontend_tittel4')}</h3>
        <p>${$.t('frontend_tekst9')}</p>

        <h3>${$.t('frontend_tittel3')}</h3>
        <p>${$.t('frontend_tekst6')}</p>
        <br />

        <p>${$.t('frontend_tekst7')}</p>
        <br />
        <a
          href="${$.link('index')}?subject=design#kontakt"
          class="button cta"
          role="button"
          >${$.t('design_knapp8')}</a
        >
      </div>
    </div>
  `
}
