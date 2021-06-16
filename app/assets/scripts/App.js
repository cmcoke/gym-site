import '../styles/styles.css'
import 'lazysizes'
import 'picturefill'
import 'flickity'
import 'flickity-imagesloaded'
import 'flickity-fade'
import MobileMenu from './modules/MobileMenu'
import Testimonials from './modules/Testimonials'
import Team from './modules/Team'
import Gallery from './modules/Gallery'

let mobileMenu = new MobileMenu();
let testimonials = new Testimonials();
let team = new Team();
let gallery = new Gallery();












// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
