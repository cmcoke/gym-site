import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import MobileMenu from './modules/MobileMenu'
import TestimonialSlider from './modules/TestimonialSlider'
import InstagramButton from './modules/InstagramButton'

let mobileMenu = new MobileMenu();
let testimonialSlider = new TestimonialSlider();
let instagramButton = new InstagramButton();













// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
