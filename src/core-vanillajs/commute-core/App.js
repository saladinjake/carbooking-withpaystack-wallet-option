'use strict';
import '../../../public/css/mainstyles.css';
import frontendControllers from './frontend/Bootstrap';
import Loader from './core/Loading';
import $ from 'jquery';
import MobileAppFeelAlike from './MobileAnimation'


function pageTransitionEffectClose(){
  $(document).ready(function(event){
  var isAnimating = false,
    newLocation = '';
    
    var firstLoad = false;
  
  //trigger smooth transition from the actual page to the new one 
  $('main').on('click', 'a', function(event){
    event.preventDefault();
    //detect which page has been selected
    var newPage = $(this).attr('href') || '#';
    //if the page is not already being animated - trigger animation
    if( !isAnimating ) changePage(newPage, true);
    firstLoad = true;
  });

  //detect the 'popstate' event - e.g. user clicking the back button
  // $(window).on('popstate', function() {
    if( firstLoad ) {
      /*
      Safari emits a popstate event on page load - check if firstLoad is true before animating
      if it's false - the page has just been loaded 
      */
      var newPageArray = location.pathname.split('/'),
        //this is the url of the page to be loaded 
        newPage = newPageArray[newPageArray.length - 1];

      if( !isAnimating  &&  newLocation != newPage ) changePage(newPage, false);
    }
    firstLoad = true;
  // });

  function changePage(url, bool) {
    isAnimating = true;
    // trigger page animation
    $('body').addClass('page-is-changing');
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
      loadNewContent(url, bool);
      newLocation = url;
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    //if browser doesn't support CSS transitions
    if( !transitionsSupported() ) {
      //loadNewContent(url, bool);
      newLocation = url;
    }
  }

  function loadNewContent(url, bool) {
    url = ('' == url) ? 'index.html' : url;
    var newSection = 'cd-'+url.replace('.html', '');
    var section = $('<div class="cd-main-content '+newSection+'"></div>');
      
    // section.load(url+' .cd-main-content > *', function(event){
      // load new content and replace <main> content with the new one
      // $('main').html(section);
      //if browser doesn't support CSS transitions - dont wait for the end of transitions
      var delay = ( transitionsSupported() ) ? 3200 : 0;
      setTimeout(function(){
        //wait for the end of the transition on the loading bar before revealing the new content
        // ( section.hasClass('cd-about') ) ? $('body').addClass('cd-about') : $('body').removeClass('cd-about');
        $('body').removeClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
          isAnimating = false;
          $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });

        if( !transitionsSupported() ) isAnimating = false;
      }, delay);
      
      if(url!=window.location && bool){
        // document.getElementById('app').style.display="none"
        if(url!='#'){
          //add the new page to the window.history
        //if the new page was triggered by a 'popstate' event, don't add it
        // window.history.pushState({path: url},'',url);
        setTimeout(()=>{
          // document.getElementById('app').style.display="block"
                window.location.href=url;
        },1500)
       
        }else{
          window.history.pushState({path: url},'',url);
        }
        
      }
    // });
  }

  function transitionsSupported() {
    return $('html').hasClass('csstransitions');
  }
});
}




function formatAmount(x) {
    if(typeof(x)=='string'){
       var parts = x.split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }else{
      var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
    }
    
    
}

const isToday = (someDate) => {
  const today = formatDate(new Date()) 
  return someDate == today
   
}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() ;
}



class FrontEndApp {
  constructor() {
    this.coreClasses = frontendControllers;
    this.parallaxEffects;
    this.dialogBoxes;
  }

  r403(){
   //  if(document.getElementById('httpresponse')){
   //  TweenMax.set('#policeman',{xPercent:-50, yPercent:0, left:"50%", bottom:"0%"});
   //  TweenMax.set('#hand',{transformOrigin:"center bottom",y:50});
   //  TweenMax.fromTo('#hand',0.3,{rotation:-10},{rotation:10,yoyo:true,repeat:-1,ease:Power1.easeInOut});



   // }
  }

  bootstrap() {
     //MobileAppFeelAlike.runAnimation()

     pageTransitionEffectClose()
   
    //new Loader().attachEvents()
    const keys = Object.values(this.coreClasses).map(function(item) {
      let classInstance = item;
      classInstance.attachEvents();
    });
    
    if(localStorage.getItem("userToken")){
      const user = JSON.parse(localStorage.getItem("userToken"));
      if(document.getElementById("create-plan-id")){
        document.getElementById("create-plan-id").addEventListener("click", (e)=>{
         e.preventDefault();
         if(localStorage.getItem("itins")){
           localStorage.removeItem("itins");
      
         }
         window.location.replace("/create-plan")
       })
      }


      //get user balance and users notification
      window.onload= function(){


    
    

        


        const urls = [process.env.DEPLOY_BACK_URL+"/balance/"+ user.user.email, 
                      process.env.DEPLOY_BACK_URL+"/notification/"+ user.user.email
                      ];
    //console.log('Token:  ' + ApiGetBothRecord.getLoggedInUser().token);
        const promises = urls.map(url =>
          fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': user.token,
            },
          }).then(response => response.json()),
        );
        
        let noticeBoard = document.getElementById("notice_board")
        Promise.all(promises)
        .then(datas => {
          console.log(datas)
            let userDetail = datas[0].data[0].accountBalance
            let userNotifications = datas[1].data[0].tranx
            console.log(userNotifications )


            let counter =0;
             let subNotifications
             if(!document.getElementById('notice')){

              if(userNotifications.length>0){
               //show just one
                 subNotifications = [userNotifications[userNotifications.length -1]]
                 userNotifications.map((item,i)=>{

                


                if(item.for_users==true && item.type!="payment"){
                  

                  if(item.status=="new"){
                    counter+=1;

                    let markup =`   <div  class="pull-left p-r-10" style="">
                                                    <em class="noti-primary"></em>
                                                     
                                                 </div>
                                                 <div class="media-body" data-id="${item._id}" onclick="updateNotificationStatus(this)" data-status="${item.status}">
                                                    <h5 class="media-heading">Quotation Notification <span class="label label-default pull-right">New</span></h5>
                                                    <hr/>
                                                    <p class="m-0">
                                                        <small>${item.description.substring(0,100)}...</small>
                                                    </p>
                                                 </div><hr/>`;

                    $( "#notice_board" ).append( $( markup ) ) 

                  }

                  

                }
                
              })
            }

           
            let value = datas[0].data[0].accountBalance ||  '0.00'
            document.getElementById('balance-seen').innerHTML = '₦ '+ value;
          
            let count = document.getElementById("notifyCount");
            count.innerHTML =  counter; //userNotifications.length;

             }
            
        })

      


      }



      

    }



    
    
  }

  run() {
    // $('#gtd').animate({'margin-top': '-25px'}, 3000);
      // $("#content").effect("bounce", { times:4, distance:200 }, 400);
      //   $("form").effect("bounce", { times:4, distance:200 }, 400);
    this.bootstrap();
    //this.r403()





  }
}








window.updateNotificationStatus = (el) =>{

  
  const user = JSON.parse(localStorage.getItem("userToken"));
  let url = process.env.DEPLOY_BACK_URL+"/notification/"+ el.dataset.id
   
  let dataStatus = {
    status:"old",
  }
  return fetch(url, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': user.token,
            },
            body: JSON.stringify(dataStatus)
          }).then(response => response.json())
        .then(data => {
        if (data.status === 200) {
          var element = el;
          element.remove();
          let counter = document.getElementById("notifyCount").innerHTML;
          let count = parseInt(counter,10);
          if(count > 0){
            document.getElementById("notifyCount").innerHTML = count -1
          }else{
             document.getElementById("notifyCount").innerHTML = 0;
          }
          
          setTimeout(()=>{window.location.href="./notification"},2000)
          
          // document.getElementById('selectStatus').options[select.selectedIndex].value = newStatus;
        } else {
          console.log('error updating status')
          var notification = alertify.notify('Notification update failed', 'error', 5, function(){  console.log('dismissed'); });

        }
      });



  

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





// class SideMenux{
//   constructor(){
//     this.$body = $("body");
//         this.$openLeftBtn = $(".open-left");
//         this.$menuItem = $("#sidebar-menu a");
//   }

//   openLeftBar(){
//     $("#wrapper").toggleClass("enlarged");
//       $("#wrapper").addClass("forced");

//       if($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
//         $("body").removeClass("fixed-left").addClass("fixed-left-void");
//       } else if(!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
//         $("body").removeClass("fixed-left-void").addClass("fixed-left");
//       }
      
//       if($("#wrapper").hasClass("enlarged")) {
//         $(".left ul").removeAttr("style");
//       } else {
//         $(".subdrop").siblings("ul:first").show();
//       }
      
//       toggle_slimscroll(".slimscrollleft");
//       $("body").trigger("resize");

//   }

//   menuItemClick(e){
//      if(!$("#wrapper").hasClass("enlarged")){
//         if($(this).parent().hasClass("has_sub")) {

//         }   
//         if(!$(this).hasClass("subdrop")) {
//           // hide any open menus and remove all other classes
//           $("ul",$(this).parents("ul:first")).slideUp(350);
//           $("a",$(this).parents("ul:first")).removeClass("subdrop");
//           $("#sidebar-menu .pull-right i").removeClass("md-remove").addClass("md-add");
          
//           // open our new menu and add the open class
//           $(this).next("ul").slideDown(350);
//           $(this).addClass("subdrop");
//           $(".pull-right i",$(this).parents(".has_sub:last")).removeClass("md-add").addClass("md-remove");
//           $(".pull-right i",$(this).siblings("ul")).removeClass("md-remove").addClass("md-add");
//         }else if($(this).hasClass("subdrop")) {
//           $(this).removeClass("subdrop");
//           $(this).next("ul").slideUp(350);
//           $(".pull-right i",$(this).parent()).removeClass("md-remove").addClass("md-add");
//         }
//       }

//   }

//   attachEvents(){
//     var $this  = this;

       
//       var ua = navigator.userAgent,
//         event = (ua.match(/iP/i)) ? "touchstart" : "click";
      
//       //bind on click
//       this.$openLeftBtn.on(event, function(e) {
//         e.stopPropagation();
//         $this.openLeftBar();
//       });

//       // LEFT SIDE MAIN NAVIGATION
//       $this.$menuItem.on(event, $this.menuItemClick);

//       // NAVIGATION HIGHLIGHT & OPEN PARENT
//       $("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
    
//   }
// }


// setTimeout(()=>{
// new SideMenux().attachEvents()

// },1000)

export default FrontEndApp;
