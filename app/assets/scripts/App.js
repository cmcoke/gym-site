import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import MobileMenu from './modules/MobileMenu'
import TestimonialSlider from './modules/TestimonialSlider'
import TeamSlider from './modules/TeamSlider'

let mobileMenu = new MobileMenu();
let testimonialSlider = new TestimonialSlider();
let teamSlider = new TeamSlider();












// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
