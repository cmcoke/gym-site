import Flickity from 'flickity'

class Gallery{

  constructor(){
    let carousels = document.querySelectorAll('.gallery .main-carousel');
    let nextSlide = document.querySelector('#next');
    let previousSlide = document.querySelector('#prev');
    let currentSlide = document.querySelector('.gallery__current-slide-number');
    let totalSlides = document.querySelector('.gallery__total-slides-number');

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
        friction: 0.5
      });

      // allows the carousel to move to the next item by cliking the right arrow.
      nextSlide.addEventListener('click', () => {
        flkty.next();
      })

      // allows the carousel to move to the previous item by cliking the left arrow.
      previousSlide.addEventListener('click', () => {
        flkty.previous();
      })

      // gets the current & total number of slides.
      let updatesCarousel = () => {

        // gets the current slide number.
        currentSlide.innerHTML = "0" + (flkty.selectedIndex + 1);

        // gets the total number of slides in a carousel.
        totalSlides.innerHTML =  '/' + '0' + flkty.slides.length;
      } 

      // updates the numbers for the current & total slides
      flkty.on( 'select', updatesCarousel );

    });
  

  } 

}


export default Gallery

