module.exports = async function ($) {
  return /* html */ `
  <div class="full-width border-row light-background">
    <div class="inner-width-wide">
      <div class="customers">
        <h2 id="kunder">${$.t('index_prosjekter_tittel')}</h2>
      </div>
    </div>
  </div>

  `
}
