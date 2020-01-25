const subjects = ['price', 'questions', 'marketing', 'design', 'hosting', 'other']

module.exports = async function($) {

  // Methods
  function sendEmail(form) {
    console.log(form)
  }

  // Components
  function renderSubjectOptions() {
    return subjects.map(function(subject) {
      var value = $.t(`subjects_${ subject }`)
      return `<option value="${ subject }">${ value }</option>`
    }).join('')
  }

  return /* html */`
    <div class="full-width border-row dark-background">
      <div class="contact-form inner-width">
        <div class="row gutters">
          <div class="col col-4 ta-kontakt" id="kontakt">
            <h2>${ $.t('index_kontakt_tittel') }</h2>
            <hr style="width:10%; margin-top: -12px;  margin-left: 3em;">
            <p>${ $.t('index_kontakt1') }</p>
            <p>${ $.t('index_kontakt2') }</p><br>
            <p><span>&#9993;&nbsp;</span>&nbsp;<a href="mailto:post@speria.no">post@speria.no</a></p>
            <p><span>&#8858;&nbsp;</span>&nbsp; Oslo, ${ $.t('index_nor') }</p>
          </div>
          <div class="col col-8">
            <div class="message error" data-component="message">
              ${ $.t('correct_errors') }
              <span class="close small"></span>
            </div>
            <form action="${ $.link('index') }" method="post" class="form" onsubmit="sendEmail(this); return false">
              <div class="row gutters">
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form1') }<span class="req">*</span></label>
                    <input type="text" name="name">
                  </div>
                </div>
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form2') }</label>
                    <input type="text" name="phone">
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form3') }<span class="req">*</span></label>
                    <input type="text" name="email">
                  </div>
                </div>
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form4') }<span class="req">*</span></label>
                    <select name="subject">
                      <option value="">---</option>
                      ${ renderSubjectOptions() }
                    </select>
                  </div>
                </div>
              </div>
              <div class="form-item">
                <label>${ $.t('index_kontakt_form5') }</label>
                <textarea rows="6" name="message"></textarea>
              </div>
              <div class="form-item">
                <button class="w100 button-style">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <script>${ sendEmail }</script>
  `
}