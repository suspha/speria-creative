module.exports = async function ($) {
  return /* html */ `
  <div class="full-width border-row light-background">
    <div class="about inner-width-wide">
      <div class="row gutters">
        <div class="col col-6 about-intro">
          <h2>${$.t('index_om_meg_tittel')}</h2>
          <p>${$.t('index_om_meg1')}</p>
          <p>${$.t('index_om_meg2')}</p>
          <a href="${$.link('om-meg')}">${$.t('index_les_mer')}</a>
        </div>
        <div class="col col-6 about-image">
            <img src="/img/speria-creative-main.svg" width="500" alt="image">
        </div>
      </div>
    </div>
  </div>
  `
}
