module.exports = async function ($) {
  return /* HTML */ `
    <div class="full-width border-row beige-background">
      <div class="tjenester inner-width-wide">
        <div class="row">
          <div class="col col-12 title-space">
            <h2>${$.t('index_tjenester_tittel')}</h2>
            <p>${$.t('index_tjenester')}</p>
          </div>
        </div>

        <div class="row gutters paragraph">
          <a
            href="${$.link('ux-design')}"
            class="col col-6 service-card hunt-background"
          >
            <div class="circle">
              <img
                class="img-circle"
                src="/img/design-icon.svg"
                alt="design icon"
              />
            </div>
            <div class="service-text light">
              <h3>${$.t('index_design_tittel')}</h3>
              <p>${$.t('index_design')}</p>
              <span>${$.t('index_les_mer')}</span>
            </div>
          </a>

          <a
            href="${$.link('frontend')}"
            class="col col-6 service-card lime-background"
          >
            <div class="circle">
              <img
                class="img-circle"
                src="/img/responsive_icon.png"
                alt="frontend icon"
              />
            </div>
            <div class="service-text dark">
              <h3>${$.t('index_dev_tittel')}</h3>
              <p>${$.t('index_dev_frontend')}</p>
              <span>${$.t('index_les_mer')}</span>
            </div>
          </a>

          ${
            '' /*<a href="${$.link(
            'seo-marketing'
          )}" class="col col-4 service-card light-background">
            <div class="circle">
              <img class="img-circle" src="/img/seo-icon.svg" alt="seo icon">
            </div>
            <div class="service-text">
            <h3>${$.t('index_seo_tittel')}</h3>
              <p>${$.t('index_seo')}</p>
              <span>${$.t('index_les_mer')}</span>
            </div>
          </a>

          <a href="${$.link(
            'hosting-drift'
          )}" class="col col-4 service-card light-background">
            <div class="circle">
              <img class="img-circle" src="/img/hosting-icon.svg" alt="hosting icon">
            </div>
            <div class="service-text">
            <h3>${$.t('index_hosting_tittel')}</h3>
              <p>${$.t('index_hosting')}</p>
              <span>${$.t('index_les_mer')}</span>
            </div>
          </a>*/
          }
        </div>
      </div>
    </div>
  `
}
