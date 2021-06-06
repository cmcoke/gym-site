class MobileMenu{

  constructor(){
    this.body = document.querySelector("body");
    this.header = document.querySelector(".header");
    this.menuIcon = document.querySelector(".header__mobile-menu-icon")
    this.menuContent = document.querySelector(".header__menu-content")
    this.logo = document.querySelector(".header__logo a img");
    this.search = document.querySelector(".header__search img");
    this.login = document.querySelector(".header__login img");
    this.menuLinks = document.querySelectorAll(".main-nav__link");
    this.menuLists = document.querySelectorAll('.main-nav__item');
    this.events()
  }

  events() {
    this.menuIcon.addEventListener("click", () => this.toggleTheMenu())
  }

  toggleTheMenu(){

     // if the div element with the 'header__menu-content' class does not have the 'header__menu-content--open'  
    // class perform the following
    if(!this.menuContent.classList.contains("header__menu-content--is-open")){

      // prevents the scrolling when the mobile & tablet menu is open
      this.body.classList.add("noscroll")

      // shows the site' main navigation
      this.menuContent.classList.add("header__menu-content--is-open");

      // remove the fade out animation effect
      this.menuContent.classList.remove("fade-out");

      // add the fade in animation effect
      this.menuContent.classList.add("fade-in");

      // change the company logo to the black version
      this.logo.src = "./assets/images/icons/logo--black.png";

      // change the search logo to the black version
      this.search.src = "./assets/images/icons/search--black.png";

      // change the login logo to the black version
      this.login.src = "./assets/images/icons/profile--black.png";

      // shows the X button
      this.menuIcon.classList.add("header__mobile-menu-icon--close");

      // changes the color of each link to black
      this.menuLinks.forEach(el => {
        el.classList.add("change-to-black")
      })

    }else{  // if the div element with the 'header__menu-content' class have the 'header__menu-content--open' 
           // class perform the following

      // allows scrolling when the mobile & tablet menu is closed.
      this.body.classList.remove("noscroll")

      // hides the site' main navigation
      this.menuContent.classList.remove("header__menu-content--is-open");

      // add the fade out animation effect
      this.menuContent.classList.add("fade-out");

       // remove the fade in animation effect
      this.menuContent.classList.remove("fade-in");

      // change the company logo to the white version
      this.logo.src = "./assets/images/icons/logo--white.png";

      // change the search logo to the white version
      this.search.src = "./assets/images/icons/search--white.png";

      // change the login logo to the white version
      this.login.src = "./assets/images/icons/profile--white.png";
      
      // hides the X button
      this.menuIcon.classList.remove("header__mobile-menu-icon--close");

      // changes the color of each link to white
      this.menuLinks.forEach(el => {
        el.classList.remove("change-to-black")
      })

    }

    // animate links when the mobile menu icon is clicked
    this.menuLists.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.style.animation = `navLinkFadeIn 0.6s ease forwards ${index / 5 + 0.2}s`;
      }
    })

  }


}

export default MobileMenu
