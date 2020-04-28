'use strict';
import '../../../public/css/mainstyles.css';
import frontendControllers from './frontend/Bootstrap';
import Loader from './core/Loading';
import $ from 'jquery';
import MobileAppFeelAlike from './MobileAnimation'




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
              Accept: 'application/json',
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

            if(userNotifications.length>0){
                 userNotifications.map((item,i)=>{

                


                if(item.for_users==true && item.type!="payment"){
                  counter+=1;

                  let markup =`   <div class="pull-left p-r-10" style="">
                                                    <em class="fa fa-diamond noti-primary"></em>
                                                 </div>
                                                 <div class="media-body">
                                                    <h5 class="media-heading">Quotation Notification</h5>
                                                    <hr/>
                                                    <p class="m-0">
                                                        <small>${item.description.substring(0,100)}...</small>
                                                    </p>
                                                 </div><hr/>`;

                 $( "#notice_board" ).append( $( markup ) ) 

                }
                
              })
            }

           
            let value = datas[0].data[0].accountBalance ||  '0.00'
            document.getElementById('balance-seen').innerHTML = '₦ '+ value;
          
            let count = document.getElementById("notifyCount");
            count.innerHTML =  counter; //userNotifications.length;
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
