const contact= require('../components/contact.js')
const projects = require('../components/projects.js')
const services = require('../components/services.js')
const about = require('../components/about.js')

module.exports = async function($) {
  $.page.description = $.t('index_meta')
  $.page.title = $.t('index_title')

  return /* html */`
    <div class="top-wrapper">
      <div class="top-row">
        <div class="top-column image">
          <div class="top-image">
            <img src="/images/main-speria.jpg" alt="image">
          </div>
        </div>
        <div class="top-column text">
          <div class="top-text">
            <h1>Speria Creative</h1>
            <hr style="width:3%;margin-left:62%">
            <hr style="width:6%;margin-left:42%">
            <p>&rdquo; ${ $.t('index_undertittel_bilde') } &rdquo;</p>
            <hr style="width:5%;margin-left:28%">
          </div>
        </div>
      </div>
    </div>

    ${ await about($) }
    ${ await services($) }
    ${ await projects($) }
    ${ await contact($) }
  `
}

