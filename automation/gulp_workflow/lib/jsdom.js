var localStorageMine = require('./localStorage');
global.localStorage = localStorageMine;
global.sessionStorage = localStorageMine;

let TEST_SCRIPTS_PATH = ['./UI/js/**/*.js','./UI/js/tests/**/*.js'];
const jsdom = require("jsdom");
const { JSDOM } = jsdom;




/**
 * Borrowed from: https://github.com/tmpvar/jsdom/issues/135#issuecomment-68191941
 */
function applyJsdomWorkaround(window) {
  Object.defineProperties(window.HTMLElement.prototype, {
    offsetLeft: {
      get: function() {
        return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
      }
    },
    offsetTop: {
      get: function() {
        return parseFloat(window.getComputedStyle(this).marginTop) || 0;
      }
    },
    offsetHeight: {
      get: function() {
        return parseFloat(window.getComputedStyle(this).height) || 0;
      }
    },
    offsetWidth: {
      get: function() {
        return parseFloat(window.getComputedStyle(this).width) || 0;
      }
    }
  });
}

function setupDom() {
  var baseMarkup = '<!DOCTYPE html><html><head><title></title></head><body></body></html>';
  //var window = jsdom.jsdom(baseMarkup).defaultView;

  const url = 'http://localhost';
  const doc = new JSDOM(baseMarkup, {url});
  const window = doc.defaultView ||   doc.window;
  // const document = dom.window.document;
  // GOSH I MISS JQUERY!!! SALADIN JAKE
  //global.document = doc;
  global.window = window;
  //global.localStorage = window.localStorage;
  Object.keys(window).forEach((key) => {
      if (!(key in global)) {
        global[key] = window[key];
      }
  });

  

  
  // global.document = window.document;
  global.document = doc;
  global.document.querySelector = function(){
    return document.documentElement;
  }
   global.document.getElementById = function(){
    return document.documentElement;
  }
   global.document.getElementsByClassName = function(){
    return document.documentElement;
  }
   global.document.createElement = function(){
    return document.documentElement;
  }

  global.document.querySelectorAll = function(){
    return document.documentElement;
  }
  global.document.addEventListener = function(){
   
  }
  

  Object.keys(document).forEach((key) => {
      if (!(key in global)) {
        global[key] =document[key];
      }
  });
  //global.navigator = window.navigator;
  global.navigator = { userAgent: 'node.js' };
  applyJsdomWorkaround(window);
}

setupDom();