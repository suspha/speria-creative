const contact= require('../components/contact.js')
const projects = require('../components/projects.js')
const services = require('../components/services.js')
const about = require('../components/about.js')

module.exports = async function($) {
  $.page.description = $.t('index_meta')
  $.page.title = $.t('index_title')

  return /* html */`
    <div class="head-image">
      <div class="head-image-speria">
        <img src="/images/speria_creative_frontpage.svg" alt="image">
      </div>
      <hr style="width:6%; margin-left: 42%;">
      <blockquote>&rdquo; ${ $.t('index_undertittel_bilde') } &rdquo;</blockquote>
      <hr style="width:5%; margin-left: 28%;"><hr style="width:3%; margin-left: 62%;">
    </div>

    ${ await about($) }
    ${ await services($) }
    ${ await projects($) }
    ${ await contact($) }

  `
}

