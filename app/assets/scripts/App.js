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



// code splitting script for the 'SmoothScroll.js'
let smoothScroll

document.querySelectorAll('.hero__more-content').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault()
     if(typeof smoothScroll == 'undefined') {
        import(/* webpackChunkName: 'smoothScroll' */ './modules/SmoothScroll').then(x => {
          smoothScroll = new x.default()
          setTimeout( () => smoothScroll.scroll(), 20)
        }).catch(() => console.log('There was a problem.'))
     } else {
        smoothScroll.scroll()
     }
  })
})










// allows webpack-dev-server to be executed by allowing hot module replacements and accepts updates on the fly
if(module.hot) {
  module.hot.accept()
}
