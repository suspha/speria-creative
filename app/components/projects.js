module.exports = async function($) {

  return /* html */`
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

  <script>
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