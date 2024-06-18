module.exports = async function ($) {
  const host =
    process.env.NODE_ENV == 'production'
      ? 'https://speria.no/api'
      : 'http://speria.test'

  function init() {
    var links = document.querySelectorAll('a.langlink')
    links.forEach(function (a) {
      if (a.pathname == location.pathname) {
        a.classList.add('active-link')
      }
    })
  }

  return /* HTML */ `
    <!DOCTYPE html>
    <html lang="${$.lang}">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msvalidate.01" content="4ABA947BA0D78F4F16C67C0B46BB917E" />
        <meta
          name="description"
          content="UX-design, Webdesign og webutvikling i Norge"
        />
        <title>${$.page.title || 'Speria Creative'}</title>
        ${$.style('/bundle.css')}
        <link href="/img/favicon.png" rel="shortcut icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        ${$.script('/bundle.js')}
        <script>
          window.api = waveorb('${host}')
        </script>
        <script
          async
          defer
          data-domain="speria.no"
          src="https://plausible.io/js/plausible.js"
        ></script>
        <script
          defer
          data-domain="speria.no"
          src="https://tactility.no/js/tactility.js"
        ></script>
        ${process.env.NODE_ENV == 'development' ? $.script('/js/dev.js') : ''}
      </head>
      <body>
        <div class="top-nav">
          <a href="${$.link('index')}">
            <img
              class="speria-logo"
              src="/img/speria-short-light.svg"
              alt="logo"
            />
          </a>

          <nav id="navi-mob">
            <div class="langlink-mob">
              <a
                class="langlink m-l-24"
                href="${$.link(`en@${$.page.name}`)}"
                onclick="window.cookie('lang', 'en')"
                >EN</a
              >
              <a
                class="langlink"
                style="color:#fbfada;"
                href="${$.link(`no@${$.page.name}`)}"
                onclick="window.cookie('lang', 'no')"
                >NO</a
              >
            </div>
            <a
              href="#"
              aria-label="menu"
              onclick="toggleMenu(this); return false"
              ><i class="kube-menu active"></i
            ></a>
            <ul id="menu">
              <li>
                <a href="${$.link('index')}">
                  <img
                    class="speria-logo-dark"
                    width="34"
                    height="34"
                    src="/img/speria-short-dark.svg"
                    alt="logo"
                  />
                </a>
              </li>
              <li>
                <a href="${$.link('index')}">
                  <img
                    class="exit-icon float-right"
                    width="40"
                    height="40"
                    src="/img/exit.svg"
                    alt="exit"
                  />
                </a>
              </li>
              <li>
                <a href="${$.link('ux-design')}">${$.t('nav_tjenester1')}</a>
              </li>
              <li>
                <a href="${$.link('frontend')}">${$.t('nav_tjenester4')}</a>
              </li>
              <li><a href="${$.link('om-meg')}">${$.t('nav3')}</a></li>
              <li><a href="${$.link('index')}#kontakt">${$.t('nav4')}</a></li>
            </ul>
          </nav>
          <script>
            function toggleMenu(a) {
              var menu = $('#menu'),
                timer = 500,
                icon = a.querySelector('i')
              $(icon).toggleClass('active')

              // Toggle menu
              if (menu.is(':visible')) {
                menu.animate(
                  { right: '-200px', opacity: 0 },
                  timer,
                  function () {
                    $(this).hide()
                  }
                )
              } else {
                menu.show()
                menu.animate({ right: '0', opacity: 0.95 }, timer)
              }
            }
          </script>
          <nav class="tabs" id="navi">
            <ul>
              <li>
                <a href="${$.link('index')}">${$.t('nav1')}</a>
              </li>
              <li>
                <a
                  href=""
                  data-component="dropdown"
                  data-target="#dropdown-fixed"
                >
                  ${$.t('nav2')}
                  <span class="caret down"></span>
                </a>
              </li>
              <li>
                <a href="${$.link('om-meg')}">${$.t('nav3')}</a>
              </li>
              <li>
                <a id="kontakt-link" href="${$.link('index')}#kontakt"
                  >${$.t('nav4')}</a
                >
              </li>
              <li
                style="display:flex;align-items:center;justify-content: center;"
              >
                <a
                  class="langlink m-l-24"
                  href="${$.link(`en@${$.page.name}`)}"
                  onclick="window.cookie('lang', 'en')"
                  >EN</a
                >
              </li>
              <li
                style="display:flex;align-items:center;justify-content:center;"
              >
                <a
                  class="langlink"
                  href="${$.link(`no@${$.page.name}`)}"
                  onclick="window.cookie('lang', 'no')"
                  >NO</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <script>
          ${init}
          init()
        </script>
        <div class="dropdown hide" id="dropdown-fixed">
          <ul>
            <li>
              <a href="${$.link('ux-design')}">${$.t('nav_tjenester1')}</a>
            </li>
            <li>
              <a href="${$.link('frontend')}">${$.t('nav_tjenester4')}</a>
            </li>
          </ul>
        </div>

        ${$.page.content}
        <footer>
          <img
            class="speria-small"
            src="/img/speria-short-dark.svg"
            width="30"
            alt="logo"
          />
          <div>2024 Design and code by Speria Creative</div>
          <span></span>
        </footer>
        <script>
          cookie('lang', '${$.lang}')
        </script>
      </body>
    </html>
  `
}
