module.exports = async function ($) {
  return /* HTML */ `
    <div class="full-width border-row dark-background">
      <div class="inner-width-wide">
        <div class="customers">
          <h2 id="kunder">${$.t('index_prosjekter_tittel')}</h2>
          <div class="customer">
            <span
              ><img
                src="/img/eldoy-logo-light.svg"
                width="200"
                alt="Eldøy projects"
            /></span>
            <span
              ><img
                style="position: relative;bottom: 10px;"
                src="/img/safedrive-logo-light.svg"
                width="200"
                alt="Safedrive"
            /></span>
            <span
              ><img
                src="/img/liftroller-logo-light.svg"
                width="200"
                alt="Liftroller"
            /></span>
            <span
              ><img
                src="/img/vander-logo-light.svg"
                width="200"
                alt="Vander apartments"
            /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="go-top" title="Scroll til topp">
      <a id="arrow-up" href="javascript:void(0)"
        ><img src="/img/arrow-up.svg" alt="arrow_up" title="Scroll to the top"
      /></a>
    </div>
  `
}
