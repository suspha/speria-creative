const subjects = ['price', 'questions', 'marketing', 'design', 'hosting', 'other']

module.exports = async function($) {

  // Methods
  function clearField(el) {
    console.log(el)
    var field = q('span.form-error', el.parentNode)
    console.log(field)
    text(field, '')
  }

  async function sendEmail(form) {
    console.log(form)
    var data = serialize(form)
    console.log(data)
    const result = await api.fetch({ path: 'sendEmail', data })
    console.log(result)
    if (result.error) {
      console.log('ERROR')
      css('.message.error', 'opacity: 1')
      window.location = '#kontakt'

      Object.keys(result.error.data).forEach(function(key) {
        var values = result.error.data[key]
        console.log(values)
        text(`.${key}-error`, values.join(', '))
      })
    } else {
      console.log('OK')
      window.location = $.link('bekreftelse')
    }
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
            <div class="message error">
              ${ $.t('correct_errors') }
              <span class="close small"></span>
            </div>
            <form action="${ $.link('index') }" method="post" class="form" onsubmit="sendEmail(this); return false">
              <div class="row gutters">
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form1') }<span class="req">*</span></label>
                    <input type="text" name="name" onfocus="clearField(this)">
                    <span class="form-error name-error"></span>
                  </div>
                </div>
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form2') }</label>
                    <input type="text" name="phone" onfocus="clearField(this)">
                    <span class="form-error phone-error"></span>
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form3') }<span class="req">*</span></label>
                    <input type="text" name="email">
                    <span class="form-error email-error"></span>
                  </div>
                </div>
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form4') }<span class="req">*</span></label>
                    <select name="subject">
                      <option value="">---</option>
                      ${ renderSubjectOptions() }
                    </select>
                    <span class="form-error subject-error"></span>
                  </div>
                </div>
              </div>
              <div class="form-item">
                <label>${ $.t('index_kontakt_form5') }</label>
                <textarea rows="6" name="message"></textarea>
                <span class="form-error message-error"></span>
              </div>
              <div class="form-item">
                <button class="w100 button-style">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <script>${ sendEmail };${ clearField }</script>
  `
}