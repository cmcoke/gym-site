class InstagramButton{

  constructor(){
    this.button = document.querySelector(".instagram__icon");
    this.icon = document.querySelector(".instagram__img");
    this.events()
  }

  events() {
    // this.button.addEventListener("mouseover", () => this.toggleWhiteLogo());
    // this.button.addEventListener("mouseout", () => this.toggleBlackLogo());
  }

  // changes the instagram logo to white whenever the 'follow us' link is hover over.
  toggleWhiteLogo(){
    
    // if(this.icon.src = './assets/images/icons/instagram--black.png'){
    //   this.icon.src = './assets/images/icons/instagram--white.png';
    // }

  }

  // changes the instagram logo to black whenever the 'follow us' link is no longer being hover over.
  toggleBlackLogo(){
    
    // if(this.icon.src = './assets/images/icons/instagram--white.png'){
    //   this.icon.src = './assets/images/icons/instagram--black.png';
    // }

  }


}

export default InstagramButton
