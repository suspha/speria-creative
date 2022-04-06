module.exports = async function($) {

  return /* html */`
    <div class="full-width border-row light-background">
      <div class="inner-width-wide">
        <div class="portfolio">
          <h2 id="prosjekter">${ $.t('index_prosjekter') }</h2>
          <hr style="width:5%; margin-top: -12px; margin-left: 3em;">
        </div>
        <div class="projects">
          <a class="project-item" href="https://asylet.no/" target="_blank">
            <img src="/img/asylet-logo.svg" alt="Asylet logo">
          </a>
          <a class="project-item" href="https://asylet.no/" target="_blank">
            <img src="/img/asylet-logo.svg" alt="Asylet logo">
          </a>
          <a class="project-item" href="https://asylet.no/" target="_blank">
            <img src="/img/asylet-logo.svg" alt="Asylet logo">
          </a>
        </div>
        <div class="projects">
          <a class="project-item" href="https://asylet.no/" target="_blank">
            <img src="/img/asylet-logo.svg" alt="Asylet logo">
          </a>
          <a class="project-item" href="https://asylet.no/" target="_blank">
            <img src="/img/asylet-logo.svg" alt="Asylet logo">
          </a>
          <a class="project-item" href="https://asylet.no/" target="_blank">
            <img src="/img/asylet-logo.svg" alt="Asylet logo">
          </a>
        </div>
      </div>
    </div>
    <div class="go-top">
      <a id="arrow-up" href="javascript:void(0)"><img src="/img/arrow-up.svg" alt="arrow_up" title="Scroll to the top"></a>
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
