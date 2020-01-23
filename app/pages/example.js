module.exports = async function($) {
  $.page.title = $.t('pages.home.title')
  return /* html */`
    <script>document.body.classList.add('home')</script>
    <style>
      div.intro {
        padding: 2rem 0;
      }
      img.waveorb-logo {
        width: 341px;
        height: 174px;
      }
      h1.tagline {
        text-shadow: 2px 1px rgba(0, 0, 0, 0.2);
      }
      div.signature {
        padding: 3rem 0 2rem;
        font-size: 80%;
        text-align: center;
        color: #666;
      }
    </style>
    <div class="intro">
      <img class="waveorb-logo" src="/img/waveorb-logo-full.svg" alt="waveorb-logo">
      <h1 class="tagline">${ $.t('pages.home.tagline') }</h1>
      <p>
        ${ $.t('pages.home.welcome') }
      </p>
    </div>
    <p>
      <a href="https://waveorb.com/docs.html">
        ${ $.t('pages.home.docs') }
      </a>
    </p>
    <p>
      <a href="https://github.com/eldoy/waveorb/issues">
        ${ $.t('pages.home.issues') }
      </a>
    </p>
    <div class="signature">
      ${ $.t('pages.home.signature') }
      <a href="https://eldoy.com" title="Eldøy Projects home page">
        Eldøy Projects
      </a>
    </div>
  `
}
