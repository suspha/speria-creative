const contact = require('../components/contact.js')
const tags = require('../components/tags.js')
// const projects = require('../components/projects.js')
const customers = require('../components/customers.js')
const services = require('../components/services.js')
const about = require('../components/about.js')
const work = require('../components/work.js')

module.exports = async function ($) {
  $.page.description = $.t('index_meta')
  $.page.title = $.t('index_title')

  return /* HTML */ `
    <div class="top-wrapper dark-background">
      <div class="top-text main">
        <h1>Speria Creative</h1>
        <h2>${$.t('index_undertittel_bilde')}</h2>
      </div>
    </div>

    ${await about($)} ${await work($)} ${await services($)}
    ${await customers($)} ${await tags($)} ${await contact($)}
  `
}
