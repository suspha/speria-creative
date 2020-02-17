module.exports = async function($) {

  return /* html */ `
    <div class="full-width border-row dark-background">
      <div class="tjenester inner-width-full">
        <div class="row">
          <div class="col col-12 title-space">
            <h2>${ $.t('index_tjenester_tittel') }</h2>
            <hr style="width:4%; margin-top: -12px; margin-left: 4em;">
            <p>${ $.t('index_tjenester') }</p>
          </div>
        </div>

        <div class="row gutters paragraph">
          <div class="col col-4 space-between">
            <div class="circle">
              <img class="img-circle" src="/images/design_icon.png" alt="icon">
            </div>
            <div class="vertical-line">
            <h3>${ $.t('index_design_tittel') }</h3>
            <p>${ $.t('index_design') }</p>
            <a href="${ $.link('design-utvikling') }">${ $.t('index_les_mer') }</a>
            </div>
          </div>

          <div class="col col-4 space-between">
            <div class="circle">
              <img class="img-circle" src="/images/seo_icon.png" alt="icon">
            </div>
            <div class="vertical-line">
            <h3>${ $.t('index_seo_tittel') }</h3>
            <p>${ $.t('index_seo') }</p>
            <a href="${ $.link('seo-marketing') }">${ $.t('index_les_mer') }</a>
            </div>
          </div>

          <div class="col col-4 space-between">
            <div class="circle">
              <img class="img-circle" src="/images/hosting_icon.png" alt="icon">
            </div>
            <h3>${ $.t('index_hosting_tittel') }</h3>
            <p>${ $.t('index_hosting') }</p>
            <a href="${ $.link('hosting-drift') }">${ $.t('index_les_mer') }</a>
          </div>
        </div>
      </div>
    </div>
  `
}