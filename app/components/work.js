module.exports = async function ($) {
  return /* html */ `
  <div class="full-width border-row pale-background">
    <div class="how-i-work inner-width-wide">
      <div class="row gutters">
        <div class="col col-6 how-i-work-intro">
          <h2>${$.t('index_how_i_work_tittel')}</h2>
          <p>${$.t('index_how_i_work1')}</p>
           <ol class="numbered">
            <li class="text">
              <h3>${$.t('pages.index.how_i_work_step1_header')}</h3>
              <p>${$.t('pages.index.how_i_work_step1')}</p>
            </li>
            <li class="text">
              <h3>${$.t('pages.index.how_i_work_step2_header')}</h3>
              <p>${$.t('pages.index.how_i_work_step2')}</p>
            </li>
            <li class="text">
              <h3>${$.t('pages.index.how_i_work_step3_header')}</h3>
              <p>${$.t('pages.index.how_i_work_step3')}</p>
              <p>${$.t('pages.index.how_i_work_pricing')}</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
  `
}
