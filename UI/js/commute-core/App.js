'use strict';
import '../../../public/css/mainstyles.css';
import frontendControllers from './frontend/Bootstrap';
import Loader from './core/Loading';
// import $ from 'jquery';
// require('./js/jquery.min.js');
// require("./js/bootstrap.min.js")
// require("./js/detect.js")
// require("./js/fastclick.js")


class FrontEndApp {
  constructor() {
    this.coreClasses = frontendControllers;
    this.parallaxEffects;
    this.dialogBoxes;
  }

  bootstrap() {
    //new Loader().attachEvents()
    const keys = Object.values(this.coreClasses).map(function(item) {
      let classInstance = item;
      classInstance.attachEvents();
    });
  }

  run() {
    this.bootstrap();
  }
}












//Exelent little functions to use any time when class modification is needed
function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

//Add event from js the keep the marup clean
function init() {
    document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
}

//The actual fuction
function toggleMenu() {
    console.log('click')
    var ele = document.getElementsByTagName('body')[0];
    if (!hasClass(ele, "open")) {
        addClass(ele, "open");
    } else {
        removeClass(ele, "open");
    }
}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") {
        init();
    }
});





export default FrontEndApp;
