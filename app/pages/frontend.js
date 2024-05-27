module.exports = async function ($) {
  $.page.description = $.t('design_meta')
  $.page.title = $.t('design_title')

  return /* html */ `
    <div class="top-wrapper forest-background ">
      <div class="top-row">
        <div class="top-column image">
          <div class="top-image">
            <img src="/img/speria-creative-design-development-opt.svg" alt="image">
          </div>
        </div>
        <div class="top-column text">
          <div class="top-text">
            <h1>${$.t('index_dev_tittel')}
          </div>
        </div>
      </div>
    </div>
    <div class="full-width border-row light-background">
      <div class="intro-frontend inner-width">
        <h2>Kommer snart!</h2>
        <a href="${$.link(
          'index'
        )}?subject=design#kontakt" class="button small" role="button">${$.t(
    'design_tekst8'
  )}</a>
      </div>
    </div>
  `
}
