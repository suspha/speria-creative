module.exports = async function($) {

return /* html */ `
  <div class="full-width border-row light-background">
    <div class="about-us inner-width-full">
      <div class="row gutters">
        <div class="col col-6 about-us-intro">
          <h2>${ $.t('index_om_oss_tittel') }</h2>
          <hr style="width:6%; margin-top: -12px; padding-bottom: 1rem;">
          <p>${ $.t('index_om_oss1') }</p>
          <p>${ $.t('index_om_oss2') }</p>
          <a href="${ $.link('om-oss') }">${ $.t('index_les_mer') }</a>
        </div>
        <div class="col col-6 about-us-image">
          <img src="/images/screen_demo.jpeg" alt="image">
        </div>
      </div>
    </div>
  </div>

  `
}