/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router';
import Header from './components/User/Header/Header';
import Footer from './components/User/Footer/Footer';
import FrontEndApp from './core-vanillajs/commute-core/App'
import BackEndApp from './core-vanillajs/commute-core/backend/App'
import '../public/css/mainstyles.css'
import $ from 'jquery';


class App extends React.Component{
  constructor(props){
    super(props)
  
  }

  render(){
    return (
      <div>
       <Header />
       <Router />
       <Footer />
      </div>
    );

  }

  componentDidMount(){
  

     

    
  }
}


let frontRunner, backRunner;
const loadingAction = () => {
  document.onreadystatechange = function(e) { 
            e.preventDefault();
            if (document.readyState !== "complete") { 
               

            } else { 
                

                 if (!document.getElementById('admin')) {
                          console.log('frontend');
                          new FrontEndApp().run();
    } else {
                          console.log('backend');
                          new BackEndApp().run()                     
    }
               

                 
            } 

        
  }

}


document.addEventListener('load', ()=>{
 $("#loader").animate({
        top: -3500
      }, 2500);
      
  setTimeout(()=>{
       

      document.querySelector("#gtd").style.visibility = "hidden";
                document.querySelector("#gtd").style.opacity = 0; 
                document.querySelector("#loader").style.visibility = "visible";

    },2000)

    

})
  



$(document).ready(function(){
       
 if (!document.getElementById('admin')) {
   
      setTimeout(()=>{

       $("#loader").animate({
        top: -3500
      }, 2500);



      },3400)

      document.querySelector("#gtd").style.visibility = "visible"; 
        document.querySelector("#gtd").style.opacity = 1;

    setTimeout(()=>{

    
      
      document.querySelector("#gtd").style.visibility = "visible"; 
        document.querySelector("#gtd").style.opacity = 1;
      }
         
      ,3500)



     
       










}else{
  
  
}





      

   
     
});


 document.addEventListener('DOMContentLoaded',()=>{

 

   loadingAction()
 })
    






export default App;
