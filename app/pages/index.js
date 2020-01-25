module.exports = async function($) {
  $.page.description = $.t('index_meta')
  $.page.title = $.t('index_title')

  return /* html */`
    <div class="head-image">
      <div class="head-image-speria">
        <img src="/images/speria_creative_frontpage.svg" alt="image">
      </div>
      <hr style="width:6%; margin-left: 42%;">
      <blockquote><p>"${ $.t('index_undertittel_bilde') }"</p></blockquote>
      <hr style="width:5%; margin-left: 28%;"><hr style="width:3%; margin-left: 62%;">
    </div>
    <div class="full-width border-row light-background">
      <div class="about-us inner-width">
        <div class="row gutters">
          <div class="col col-6 about-us-intro">
            <h2>${ $.t('index_om_oss_tittel') }</h2>
            <hr style="width:6%; margin-top: -12px;">
            <p>${ $.t('index_om_oss1') }</p>
            <p>${ $.t('index_om_oss2') }</p>
            <a href="${ $.link('om_oss') }">${ $.t('index_les_mer') }</a>
          </div>
          <div class="col col-6 about-us-image">
            <img src="/images/screen_tabibito.jpeg" alt="image">
          </div>
        </div>
      </div>
    </div>

    <div class="full-width border-row dark-background">
      <div class="tjenester inner-width">
        <div class="row">
          <div class="col col-12 title-space">
            <h2>${ $.t('index_tjenester_tittel') }</h2>
            <hr style="width:4%; margin-top: -12px; margin-left: 4em;">
            <p>${ $.t('index_tjenester') }</p>
          </div>
        </div>

        <div class="row gutters paragraph">
          <div class="col col-4 space-between">
            <div class="circle">
              <img class="img-circle" src="/images/design_icon.png" alt="icon">
            </div>
            <div class="vertical-line">
            <h3>${ $.t('index_design_tittel') }</h3>
            <p>${ $.t('index_design') }</p>
            <a href="${ $.link('design_utvikling') }">${ $.t('index_les_mer') }</a>
            </div>
          </div>

          <div class="col col-4 space-between">
            <div class="circle">
              <img class="img-circle" src="/images/seo_icon.png" alt="icon">
            </div>
            <div class="vertical-line">
            <h3>${ $.t('index_seo_tittel') }</h3>
            <p>${ $.t('index_seo') }</p>
            <a href="${ $.link('seo_marketing') }">${ $.t('index_les_mer') }</a>
            </div>
          </div>

          <div class="col col-4 space-between">
            <div class="circle">
              <img class="img-circle" src="/images/hosting_icon.png" alt="icon">
            </div>
            <h3>${ $.t('index_hosting_tittel') }</h3>
            <p>${ $.t('index_hosting') }</p>
            <a href="${ $.link('hosting_drift') }">${ $.t('index_les_mer') }</a>
          </div>
        </div>
      </div>
    </div>

    <div class="full-width border-row light-background">
      <div class="inner-width">
        <div class="portfolio">
          <h2 id="prosjekter">${ $.t('index_prosjekter') }</h2>
          <hr style="width:5%; margin-top: -12px; margin-left: 3em;">
        </div>
      </div>
      <div class="inner-width fade">
        <figure>
          <div class="slideshow-container">
            <div class="mySlides fade">
              <img src="/images/asylet.png" alt="portfolie_asylet">
              <div class="text-slider"><h4><a href="https://asylet.no" target="_blank">Kafé Asylet</a></h4></div>
            </div>

            <div class="mySlides fade">
              <img src="/images/vdb-autoshine.png" alt="portfolie_VDB Autoshine">
              <div class="text-slider"><h4><a href=" https://vdbautoshine.no" target="_blank">VDB Autoshine nettbutikk</a></h4></div>
            </div>

            <div class="mySlides fade">
              <img src="/images/tabibito.jpg" alt="portfolie_tabibito">
              <div class="text-slider"><h4><a href="http://tabibito.no" target="_blank">Tabibito Asian Fusion Restaurant</a></h4></div>
            </div>

            <div class="mySlides fade">
              <img src="/images/crowdfundhq.jpeg" alt="portfolie_crowdfundhq">
              <div class="text-slider"><h4><a href="https://crowdfundhq.com" target="_blank">CrowdfundHQ - Create your own site</a></h4></div>
            </div>

            <div class="mySlides fade">
              <img src="/images/waveorb.jpeg" alt="portfolie_waveorb">
              <div class="text-slider"><h4><a href="https://waveorb.com" target="_blank">Waveorb - Personal, marketing and support emails</a></h4></div>
            </div>

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
          </div>
        </figure>
      </div>
    </div>
    <div class="go-top">
      <a id="arrow-up" href="#navi"><img src="/images/arrow_up.png" alt="arrow_up"></a>
    </div>

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
            <form action="${ $.link('index') }" method="post" class="form">
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
    <script>
      // window.location = '#kontakt';
      var index = 0, tick = 5000, timer, i
        , slides = document.getElementsByClassName('mySlides');


      document.addEventListener('DOMContentLoaded', function(){
        for(i = 0; i < slides.length; i++) {
          slides[i].addEventListener('mouseenter', function(event){
            var t = event.srcElement.querySelector('.text-slider');
            $(t).fadeIn();
            clearTimeout(timer);
          });

          slides[i].addEventListener('mouseleave', function(event){
            var t = event.srcElement.querySelector('.text-slider');
            $(t).fadeOut();
            restartTimer();
          });
        }
      });

      function restartTimer() {
        clearTimeout(timer);
        timer = setTimeout(carousel, tick);
      }

      function plusSlides(n) {
        showSlides(index += n);
      }

      function currentSlide(n) {
        showSlides(index = n);
      }

      function carousel() {
        showSlides(index += 1);
      }

      function showSlides(n) {
        if (n > slides.length){ index = 1;}
        if (n < 1){ index = slides.length;}
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = 'none';
        }
        slides[index-1].style.display = 'block';

        restartTimer();
      }

      carousel();

    </script>
  `
}

