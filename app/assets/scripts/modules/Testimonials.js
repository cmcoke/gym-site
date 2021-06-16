import Flickity from 'flickity'

class Testimonials{

  constructor(){
    let carousels = document.querySelectorAll('.testimonial .main-carousel');

    // initialize flickity
    carousels.forEach(carousel => {
      let flkty = new Flickity(carousel, {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: true,
        autoPlay: 6000,
        fade: true,
        draggable: false,
        pauseAutoPlayOnHover: false
      });
    });

    
  }

}


export default Testimonials