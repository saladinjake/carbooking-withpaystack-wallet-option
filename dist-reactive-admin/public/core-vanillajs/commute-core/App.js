'use strict';
import '../../css/mainstyles.css';
import frontendControllers from './frontend/Bootstrap';
import Loader from './core/Loading';



function removeClass(e, c) {
  elm = document.querySelectorAll(mClass);
  for (var i = 0; i < elm.length; i++) {
    if (c == 'active') {
      elm[i].classList.remove('active');
    } else {
      if (!elm[i].classList.contains('active')) elm[i].querySelector('.list').classList.remove('show');
    }
  }
}


class FrontEndApp {
  constructor() {
    this.coreClasses = frontendControllers;
    this.parallaxEffects;
    this.dialogBoxes;
  }

  bootstrap() {
    //new Loader().attachEvents()
    var mClass = '.has_sub'
var menu = document.querySelectorAll(mClass);
menu.forEach(function(o) {
  o.addEventListener('click', function(e) {
    e.preventDefault();
    removeClass(o, 'active');
    this.classList.add('active');
    removeClass(o);
    this.querySelector('.list-unstyled').classList.toggle('show');
  });
});

    const keys = Object.values(this.coreClasses).map(function(item) {
      let classInstance = item;
      classInstance.attachEvents();
    });
  }

  run() {
    this.bootstrap();
  }
}





export default FrontEndApp;
