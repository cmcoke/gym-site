import Glide from '@glidejs/glide'

class TeamSlider{

  constructor(){

    let sliders = document.querySelectorAll('.team .glide');
    let nextSlide = document.querySelector('#next');
    let previousSlide = document.querySelector('#prev');

    for (let i = 0; i < sliders.length; i++) {
      let glide = new Glide(sliders[i], {
        type: 'carousel',
        startAt: 0,
        perView: 4,
        autoplay: false,
        animationTimingFunc: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        swipeThreshold: false,
        dragThreshold: false,
        breakpoints: {
          1100: {
            perView: 3,
            autoplay: false,
            swipeThreshold: false,
            dragThreshold: false,
          },
          1024: {
            perView: 3,
            autoplay: false,
            swipeThreshold: false,
            dragThreshold: false,
          },
          991: {
            perView: 2,
            autoplay: 5000,
            animationTimingFunc: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
            swipeThreshold: true,
            dragThreshold: true,
          },
          768:{
            perView: 2,
            autoplay: 5000,
            animationTimingFunc: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
            swipeThreshold: true,
            dragThreshold: true,
          },
          600: {
            perView: 1,
            autoplay: 5000,
            animationTimingFunc: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
            swipeThreshold: true,
            dragThreshold: true,
          }
        }
      });

      nextSlide.addEventListener('click', function () {
        glide.go('>')
      })
      
      previousSlide.addEventListener('click', function () {
        glide.go('<')
      })
    
      glide.mount()
    }
    
  }

}


export default TeamSlider