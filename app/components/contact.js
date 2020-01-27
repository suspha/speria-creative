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
    var button =  q('.form-button')
    button.disabled = true

    // Sleep
    // await new Promise(r => setTimeout(r, 1000))

    const result = await api.fetch({ action: 'sendEmail', data: serialize(form) })

    if (result.error) {
      css('.message.error', 'opacity: 1')
      window.location = '#kontakt'
      Object.keys(result.data).forEach(function(key) {
        text(`.${key}-error`, result.data[key].join(', '))
      })
      button.disabled = false
    } else {
      form.reset()
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
                    <input type="text" name="name" placeholder="Hans Hansen" onfocus="clearField(this)">
                    <span class="form-error name-error error-message"></span>
                  </div>
                </div>
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form2') }</label>
                    <input type="text" name="phone" placeholder="22222222" onfocus="clearField(this)">
                    <span class="form-error phone-error error-message"></span>
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form3') }<span class="req">*</span></label>
                    <input type="text" name="email" placeholder="mail@example.com" onfocus="clearField(this)">
                    <span class="form-error email-error error-message"></span>
                  </div>
                </div>
                <div class="col col-6">
                  <div class="form-item">
                    <label>${ $.t('index_kontakt_form4') }<span class="req">*</span></label>
                    <select name="subject" onfocus="clearField(this)">
                      <option value="">---</option>
                      ${ renderSubjectOptions() }
                    </select>
                    <span class="form-error subject-error error-message"></span>
                  </div>
                </div>
              </div>
              <div class="form-item">
                <label>${ $.t('index_kontakt_form5') }</label>
                <textarea rows="6" name="message" placeholder="Skriv beskjed her" onfocus="clearField(this)"></textarea>
                <span class="form-error message-error error-message"></span>
              </div>
              <div class="form-item">
                <button class="form-button w100 button-style">
                  <span>Send</span>
                  <img class="loader" src="/images/loader.svg">
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <script>${ sendEmail };${ clearField }</script>
  `
}