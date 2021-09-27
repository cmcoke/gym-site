import Flickity from 'flickity'

class Team{

  constructor(){
    let carousels = document.querySelectorAll('.team .main-carousel');
    let nextSlide = document.querySelector('#next');
    let previousSlide = document.querySelector('#prev');

    // initialize flickity
    carousels.forEach(carousel => {
      let flkty = new Flickity(carousel, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        adaptiveHeight: true,
        imagesLoaded: true,
        selectedAttraction: 0.03,
        friction: 0.5,
        lazyLoad: true
      });

      // allows the carousel to move to the next item by cliking the right arrow.
      nextSlide.addEventListener('click', () => {
        flkty.next();
      })

      // allows the carousel to move to the previous item by cliking the left arrow.
      previousSlide.addEventListener('click', () => {
        flkty.previous();
      })


    });
  }

}


export default Team