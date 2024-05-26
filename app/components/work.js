module.exports = async function ($) {
  return /* html */ `
  <div class="full-width border-row pale-background">
    <div class="how-i-work inner-width-wide">
      <div class="row gutters">
        <div class="col col-8 how-i-work-intro">
          <h2>${$.t('how_i_work_tittel')}</h2>
          <p>${$.t('how_i_work1')}</p>
           <ul class="numbered">
            <li class="text">
              <h3>${$.t('how_i_work_step1_header')}</h3>
              <p>${$.t('how_i_work_step1')}</p>
            </li>
            <li class="text">
              <h3>${$.t('how_i_work_step2_header')}</h3>
              <p>${$.t('how_i_work_step2')}</p>
            </li>
            <li class="text">
              <h3>${$.t('how_i_work_step3_header')}</h3>
              <p>${$.t('how_i_work_step3')}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  `
}
