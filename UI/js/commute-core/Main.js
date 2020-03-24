/* eslint-disable func-names */

//to do use higher ordder func to ensure user
'use strict';
import FrontEndApp from './App';
import BackendApp from './backend/App';




const loadingAction = () => {
  document.onreadystatechange = function() { 
            
            if (document.readyState !== "complete") { 
                document.querySelector("#gtd").style.visibility = "hidden";
                document.querySelector("#gtd").style.opacity = 0; 
                document.querySelector("#loader").style.visibility = "visible"; 
            } else { 
                document.querySelector("#loader").style.display = "none"; 
                document.querySelector("#gtd").style.visibility = "visible"; 
                document.querySelector("#gtd").style.opacity = 1
            } 
  }

 }

 loadingAction();


(function() {
  if (!document.getElementById('admin')) {
    console.log('frontend');
    new FrontEndApp().run();
  } else {
    console.log('backend');
    //new BackendApp().run();
  }
})();








