module.exports = async function ($) {
  return /* html */ `
  <div class="full-width border-row light-background">
    <div class="how-i-work inner-width-wide">
      <div class="row gutters">
        <div class="col col-8 how-i-work-intro">
          <h2>${$.t('how_i_work_tittel')}</h2>
          <h3>${$.t('how_i_work1')}</h3>
           <ol class="numbered">
            <li class="text first">
              <h4>${$.t('how_i_work_step1_header')}</h4>
              <p>${$.t('how_i_work_step1')}</p>
            </li>
            <li class="text second">
              <h4>${$.t('how_i_work_step2_header')}</h4>
              <p>${$.t('how_i_work_step2')}</p>
            </li>
            <li class="text third">
              <h4>${$.t('how_i_work_step3_header')}</h4>
              <p>${$.t('how_i_work_step3')}</p>
              <p>${$.t('how_i_work_pricing')}</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  `
}
