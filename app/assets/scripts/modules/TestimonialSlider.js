import Glide from '@glidejs/glide'

class TestimonialSlider{

  constructor(){

    let sliders = document.querySelectorAll('.testimonial .glide');
  
    for (let i = 0; i < sliders.length; i++) {

      let glide = new Glide(sliders[i], {
        type: "carousel",
        startAt: 0,
        perView: 1,
        autoplay: 6000,
        hoverpause: false,
        swipeThreshold: false,
        dragThreshold: false,
      });
    
      glide.mount()
    }
    
  }

}


export default TestimonialSlider