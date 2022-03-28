module.exports = async function($) {

  return /* html */ `
    <div class="full-width border-row pale-background">
      <div class="tjenester inner-width-wide">
        <div class="row">
          <div class="col col-12 title-space">
            <h2>${ $.t('index_tjenester_tittel') }</h2>
            <hr style="width:4%; margin-top: -12px; margin-left: 4em;">
            <p>${ $.t('index_tjenester') }</p>
          </div>
        </div>

        <div class="row gutters paragraph">
          <a href="${ $.link('design-utvikling') }" class="col col-4 service-card light-background">
            <div class="circle">
              <img class="img-circle" src="/img/design_icon.png" alt="icon">
            </div>
            <div class="service-text">
              <h3>${ $.t('index_design_tittel') }</h3>
              <p>${ $.t('index_design') }</p>
              <span>${ $.t('index_les_mer') }</span>
            </div>
          </a>

          <a href="${ $.link('seo-marketing') }" class="col col-4 service-card light-background">
            <div class="circle">
              <img class="img-circle" src="/img/seo_icon.png" alt="icon">
            </div>
            <div class="service-text">
            <h3>${ $.t('index_seo_tittel') }</h3>
              <p>${ $.t('index_seo') }</p>
              <span>${ $.t('index_les_mer') }</span>
            </div>
          </a>

          <a href="${ $.link('hosting-drift') }" class="col col-4 service-card light-background">
            <div class="circle">
              <img class="img-circle" src="/img/hosting_icon.png" alt="icon">
            </div>
            <div class="service-text">
            <h3>${ $.t('index_hosting_tittel') }</h3>
              <p>${ $.t('index_hosting') }</p>
              <span>${ $.t('index_les_mer') }</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  `
}