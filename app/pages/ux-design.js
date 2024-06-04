module.exports = async function ($) {
  $.page.description = $.t('design_meta')
  $.page.title = $.t('design_title')

  return /* HTML */ `
    <div class="top-wrapper beige-background ">
      <div class="top-row">
        <div class="top-column image">
          <div class="top-image">
            <img
              src="/img/speria-creative-design-development-opt.svg"
              alt="image"
            />
          </div>
        </div>
        <div class="top-column text">
          <div class="top-text">
            <h1>${$.t('design_tittel')}</h1>
            <h2>${$.t('design_undertittel_bilde')}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-ux-design inner-width">
        <h2>${$.t('design_tittel_bilde')}</h2>
        <p>${$.t('design_tekst1')}</p>
        <p>${$.t('design_tekst2')}</p>
        <p>${$.t('design_tekst3')}</p>

        <a
          href="${$.link('index')}?subject=design#kontakt"
          class="button cta m-t-24"
          role="button"
          >${$.t('design_knapp8')}</a
        >
      </div>
    </div>
  `
}
