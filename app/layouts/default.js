module.exports = async function($) {
  const host = process.env.NODE_ENV == 'production'
    ? 'https://speria.no/api'
    : 'http://localhost:5000'

  function init() {
    var links = document.querySelectorAll('a.langlink')
    links.forEach(function(a) {
      if (a.pathname == location.pathname) {
        a.classList.add('active-link')
      }
    })
  }

  return /* html */`
    <!doctype html>
    <html lang="${ $.lang }">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="msvalidate.01" content="4ABA947BA0D78F4F16C67C0B46BB917E">
        <meta name="description" content="Profesjonell Webdesign og webutvikling, SEO Søkemotoroptimalisering og Markedsføring, billig og rimelig Hosting og Drift">
        <title>${ $.page.title || 'Speria Creative' }</title>
        ${ $.style('/bundle.css') }
        <link href="/img/favicon.png" rel="shortcut icon">
        <link href="https://fonts.googleapis.com/css?family=Monoton|Raleway:200,300,400" rel="stylesheet">
        ${ $.script('/bundle.js') }
        <script>window.api = waveorb('${ host }')</script>
        <script async defer data-domain="speria.no" src="https://plausible.io/js/plausible.js"></script>
      </head>
      <body>
        <div class="top-nav">
          <div class="speria-logo">
            <a href="${ $.link('index') }">
              <img class="speria-logo" src="/img/speria-logo.svg" alt="logo">
            </a>
          </div>

          <nav id="navi-mob">
            <a href="#" aria-label="menu" onclick="toggleMenu(this); return false"><i class="kube-menu active"></i></a>
            <ul id="menu">
              <li><a href="${ $.link('index') }">${ $.t('nav1') }</a></li>
              <li><a href="${ $.link('design-utvikling') }">${ $.t('nav_tjenester1') }</a></li>
              <li><a href="${ $.link('seo-marketing') }">${ $.t('nav_tjenester2') }</a></li>
              <li><a href="${ $.link('hosting-drift') }">${ $.t('nav_tjenester3') }</a></li>
              <li><a href="${ $.link('om-oss') }">${ $.t('nav3') }</a></li>
              <li><a href="${ $.link('index') }#prosjekter">${ $.t('nav4') }</a></li>
              <li><a href="${ $.link('index') }#kontakt">${ $.t('nav5') }</a></li>
            </ul>
          </nav>

          <script>
            function toggleMenu(a) {
              var menu = $('#menu'), timer = 500, icon = a.querySelector('i');
              $(icon).toggleClass('active');

              // Toggle menu
              if(menu.is(':visible')) {
                menu.animate({ right: '-200px', opacity: 0} , timer, function(){
                  $(this).hide();
                });
              } else {
                menu.show();
                menu.animate({ right: '0', opacity: 0.95} , timer);
              }
            }
          </script>

          <div class="lang-switch">
            <a class="langlink" href="${ $.link(`en@${ $.page.name }`) }" onclick="window.cookie('lang', 'en')">EN</a>
            <span class="split">/</span>
            <a class="langlink" href="${ $.link(`no@${ $.page.name }`) }" onclick="window.cookie('lang', 'no')">NO</a>
          </div>
          <nav class="tabs" id="navi">
            <ul>
              <li>
                <a href="${ $.link('index') }">${ $.t('nav1') } &nbsp; &vert;</a>
              </li>
              <li>
                <a href="" data-component="dropdown" data-target="#dropdown-fixed">
                  ${ $.t('nav2') }
                  <span class="caret down">&nbsp; &vert;</span>
                </a>
              </li>
              <li>
                <a href="${ $.link('om-oss') }">${ $.t('nav3') } &nbsp; &vert;</a>
              </li>
              <li><a id="prosjekt-link" href="${ $.link('index') }#prosjekter">${ $.t('nav4') } &nbsp; &vert;</a></li>
              <li><a id="kontakt-link" href="${ $.link('index') }#kontakt">${ $.t('nav5') }</a></li>
            </ul>
          </nav>
          <script>${init}; init();</script>
          <div class="dropdown hide" id="dropdown-fixed">
            <ul>
              <li><a href="${ $.link('design-utvikling') }">${ $.t('nav_tjenester1') }</a></li>
              <li><a href="${ $.link('seo-marketing') }">${ $.t('nav_tjenester2') }</a></li>
              <li><a href="${ $.link('hosting-drift') }">${ $.t('nav_tjenester3') }</a></li>
            </ul>
          </div>
        </div>

        ${ $.page.content }

        <footer>
          <p>2020 Design and code by Speria Creative</p>
        </footer>
        <script>cookie('lang', '${ $.lang }')</script>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-100485356-1', 'auto');
          ga('send', 'pageview');
        </script>
      </body>
    </html>

  `
}


