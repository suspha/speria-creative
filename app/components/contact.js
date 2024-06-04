const subjects = ['price', 'questions', 'design', 'development', 'other']

module.exports = async function ($) {
  // Methods
  function clearField(el) {
    var field = q('span.form-error', el.parentNode)
    text(field, '')
  }

  async function sendEmail(form) {
    var button = q('.form-button')
    button.disabled = true

    // Sleep:
    await new Promise((r) => setTimeout(r, 500))
    var values = serialize(form)
    const result = await api({ action: 'contact/create', values })

    if (result.error) {
      css('.message.error', 'opacity: 1')
      window.location = '#kontakt'
      if (result.values) {
        Object.keys(result.values).forEach(function (key) {
          text(`.${key}-error`, result.values[key].join(', '))
        })
      }
      button.disabled = false
    } else {
      form.reset()
      window.location = $.link('bekreftelse')
    }
  }

  // Components
  function renderSubjectOptions() {
    return subjects
      .map(function (subject) {
        var value = $.t(`subjects_${subject}`)
        var selected =
          $.query.subject && subject === $.query.subject ? 'selected' : ''
        return `<option value="${subject}" ${selected}>${value}</option>`
      })
      .join('')
  }

  return /* HTML */ `
    <div class="full-width border-row beige-background">
      <div class="contact-form inner-width-wide">
        <div class="row gutters">
          <div class="col col-4 ta-kontakt" id="kontakt">
            <h2>${$.t('index_kontakt_tittel')}</h2>
            <p>${$.t('index_kontakt1')}</p>

            ${
              '' /*
            <p>
              <img class="icon" src="/img/envelope.svg" width=30  alt="Email icon"><a href="mailto:post@speria.no">post@speria.no</a>
            </p>
            <p>
              <img class="icon" src="/img/location.svg" width=30 alt="Address icon"> Norge ${$.t(
                'index_nor'
              )}
            </p>
             */
            }
          </div>

          <div class="col col-8 contact">
            <div class="message error">
              ${$.t('correct_errors')}
              <span
                class="close small"
                onclick="this.parentNode.style.display='none'"
              ></span>
            </div>
            <form
              action="${$.link('index')}"
              method="post"
              class="form"
              autocomplete="off"
              onsubmit="sendEmail(this); return false"
            >
              <div class="row gutters">
                <div class="col col-6">
                  <div class="form-item">
                    <label for="input-name"
                      >${$.t('index_kontakt_form1')}<span class="req"
                        >*</span
                      ></label
                    >
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      placeholder="Hans Hansen"
                      onfocus="clearField(this)"
                    />
                    <span class="form-error name-error error-message"></span>
                  </div>
                </div>
                <div class="col col-6">
                  <div class="form-item">
                    <label for="input-phone"
                      >${$.t('index_kontakt_form2')}</label
                    >
                    <input
                      id="input-phone"
                      type="text"
                      name="phone"
                      placeholder="22222222"
                      onfocus="clearField(this)"
                    />
                    <span class="form-error phone-error error-message"></span>
                  </div>
                </div>
              </div>
              <div class="row gutters">
                <div class="col col-6">
                  <div class="form-item">
                    <label for="input-email"
                      >${$.t('index_kontakt_form3')}<span class="req"
                        >*</span
                      ></label
                    >
                    <input
                      id="input-email"
                      type="text"
                      name="email"
                      placeholder="mail@example.com"
                      onfocus="clearField(this)"
                    />
                    <span class="form-error email-error error-message"></span>
                  </div>
                </div>
                <div class="col col-6">
                  <div class="form-item">
                    <label for="input-option"
                      >${$.t('index_kontakt_form4')}<span class="req"
                        >*</span
                      ></label
                    >
                    <select
                      id="input-option"
                      name="subject"
                      onfocus="clearField(this)"
                    >
                      <option value="">---</option>
                      ${renderSubjectOptions()}
                    </select>
                    <span class="form-error subject-error error-message"></span>
                  </div>
                </div>
              </div>
              <div class="form-item">
                <label for="input-message">${$.t('index_kontakt_form5')}</label>
                <textarea
                  id="input-message"
                  rows="6"
                  name="message"
                  placeholder="${$.t('index_kontakt_form_write')}"
                  onfocus="clearField(this)"
                ></textarea>
                <span class="form-error message-error error-message"></span>
              </div>
              <div class="form-item" style="text-align:right;">
                <button class="form-button button-style">
                  <span>Send</span>
                  <img class="loader" src="/img/loader.svg" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <script>
      ${sendEmail}
      ${clearField}
    </script>
  `
}
