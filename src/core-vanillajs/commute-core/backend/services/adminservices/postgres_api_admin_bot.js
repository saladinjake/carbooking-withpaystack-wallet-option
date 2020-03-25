'use strict';
import ApiBotService from '../postgres_api_bot';
import GateKeepersForAdmin from '../apiservices/helpers/whoisAdmin';
import getOnlineUrlConnection from '../apiservices/helpers/getOnlineUrlConnection';
import $ from 'jquery';
//import carsInfo from "./helpers/cars_info";
import Validator from "./helpers/validator";


let datapromise;



let usersFoundId;
 


function createUserDriveTestDetail(url, data){
  const user = JSON.parse(localStorage.getItem('userToken'));
  fetch(url, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': user.token,
              },
              body: JSON.stringify(data),
              mode:"cors",
            })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                if (data.status == 201) {
                  
                  var notification = alertify.notify('Successfully created drive test ', 'success', 5, function(){  console.log('dismissed'); });
                      
                  // setTimeout(()=>{
                  //   window.location.reload();
                  // },2000)
                      

                 // ApiDeleteOneStatusRecord.redirect(recordOfType);
                } else {
                  
                  var notification = alertify.notify('Could not perform update operation.', 'error', 5, function(){  console.log('dismissed'); });

                }
              }).catch(e=> console.log(e));

}



function noReadWrite(perms){
  
 


    $( document ).ready(function() {
    
      let perm = JSON.parse(localStorage.getItem('previledges'));
      perm = perm[perms]

     // alert(perm)

       if(perm=='no'){
      $("a.btn").hide()
      $("a.table-action-btn i.md-close").hide()
       $(":input[type='file']").hide()

       $('#close-id').attr('disabled',false)

      var inputs = document.getElementsByTagName("input"); 
        for (var i = 0; i < inputs.length; i++) { 
            inputs[i].disabled = true;
        } 
        var selects = document.getElementsByTagName("select");
        for (var i = 0; i < selects.length; i++) {
            selects[i].disabled = true;
        }
        var textareas = document.getElementsByTagName("textarea"); 
        for (var i = 0; i < textareas.length; i++) { 
            textareas[i].disabled = true;
        }
        var buttons = document.getElementsByTagName("button");
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        }
    })


    


}



function setUserdetail(email,o,wallet=false){
  let linkOfApi = 'http://localhost:12000/api/v1'+ '/fetchuserinfo/'+ email;
  

  if(localStorage.getItem('userToken')){

   const user = JSON.parse(localStorage.getItem('userToken'))
  fetch(linkOfApi, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      
    })
      .then(response => response.json())
      .then(data => {
     
        if (data) {
          let userRecord = data.data[0].userInfo[0];
          
          
          //document.getElementById('email').value = userRecord.email;
          document.getElementById('phone_number'+o.dataset.id).value = userRecord.phone_number;

          if(o.dataset.quotation_id=='Not Set'){
            document.getElementById('plan_id'+o.dataset.id).value = userRecord.old_balance;
             document.getElementById('quotation_id'+o.dataset.id).value = userRecord.balance;
          }

          
          
        } else {
          var notification = alertify.notify('Could not perform Update location operation', 'error', 5, function(){  console.log('dismissed'); });
      
        }
      }).catch(e => {
        // var notification = alertify.notify(e, 'error', 5, function(){  console.log('dismissed'); });
      
        // return MessageBoard.displayMsg(e);
      })

     }
}



function getUserdetail(email){
  let linkOfApi = 'http://localhost:12000/api/v1/'+ 'fetchuserinfo/'+ email;
   if(localStorage.getItem('userToken')){
  const user = JSON.parse(localStorage.getItem('userToken'))
  return fetch(linkOfApi, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      
    })
      .then(response => response.json())
      .then(data => {
     
        if (data) {
          let userRecord = data.data[0].userInfo[0];
          console.log(userRecord)

          if(userRecord.id){
             localStorage.setItem('user_to_book',userRecord.id)
          }

         
          
          //document.getElementById('email').value = userRecord.email;
         return userRecord;
          
          
        } else {
          var notification = alertify.notify('Could not perform Update location operation', 'error', 5, function(){  console.log('dismissed'); });
      
        }
      }).catch(e => {
        // var notification = alertify.notify(e, 'error', 5, function(){  console.log('dismissed'); });
      
        // return MessageBoard.displayMsg(e);
      })

       }
}



window.autofill =(o)=>{
  //alert(o.options[o.selectedIndex].value)
  document.getElementById('username'+o.dataset.id).value = o.options[o.selectedIndex].value
  document.getElementById('phone_number'+o.dataset.id).value = o.options[o.selectedIndex].dataset.with

  if(!document.getElementById('ticket_id'+o.dataset.id).value){
    document.getElementById('ticket_id'+o.dataset.id).value = 'CMT-REPORT-'+ guidGenerator()
  }

  document.getElementById('comment'+o.dataset.id).disabled=false

  
}


function updateUsersTestCenter(url, prePostData){

  let {test_center,test_center_address} = prePostData;

  if(!test_center.length){
    var notification = alertify.notify('test center field required.', 'error', 5, function(){  console.log('dismissed'); });

    return false
  }

  if(!test_center_address.length){
    var notification = alertify.notify('Address required.', 'error', 5, function(){  console.log('dismissed'); });

    return false
  }


   const user =JSON.parse(localStorage.getItem("userToken"));

          
          fetch(url, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': user.token,
              },
              body: JSON.stringify(prePostData),
              mode:"cors",
            })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                if (data.status == 200) {
                  
                  var notification = alertify.notify('Successfully update of users test location', 'success', 5, function(){  console.log('dismissed'); });
                      
                  setTimeout(()=>{
                    window.location.reload();
                  },2000)
                      

                 // ApiDeleteOneStatusRecord.redirect(recordOfType);
                } else {
                  
                  var notification = alertify.notify('Could not perform update operation for users test location.', 'error', 5, function(){  console.log('dismissed'); });

                }
              }).catch(e=> console.log(e));


}


    
window.addEventListener('load', (event) => {
    //   const loader = document.getElementById("loader");
    // loader.style.display = 'block';
    // loader.style.zIndex="9999999";

      if(localStorage.getItem('userToken')){
        datapromise =getUserRights()

        if(datapromise){
          //loader.style.display = 'none';

       datapromise.then(data=> { 
          localStorage.setItem('previledges', JSON.stringify(data))

        }) 
      }else{
         var notification = alertify.notify('Login has Expiried or probably a slow network Connectivity issue.', 'error', 5, function(){  console.log('dismissed'); });
        localStorage.clear()
        // localStorage.clearItem()
         //loader.style.display = 'none';

         setTimeout(()=>{
             window.location.href="./"
         },2000)
        
      }

      }
})

function guidGenerator() {
          var S4 = function() {
             return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
          };
          return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}


window.genCert = (o) =>{

  document.getElementById('certificate'+ o.dataset.id).value='CMT-DRIV-CERT-' + guidGenerator().substring(0,20);
}

function getUserRights(){

//window.onload = function(){
  if(localStorage.getItem('userToken')){

    const user = JSON.parse(localStorage.getItem('userToken'));
     let linkOfApi = 'http://localhost:12000/api/v1/profile-admin-rights/update/'+ user.user._id;
     
 return fetch(linkOfApi, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      
    })
      .then(response => response.json())
      .then(data => {
     
        if (data) {
          console.log(JSON.stringify(data.data[0].userInfo[0]))
          let userRecord = data.data[0].userInfo[0];
          console.log(userRecord)
          //userRights.push(userRecord)
   
          return  userRecord;

          
        } else {
          var notification = alertify.notify('Could not perform Update location operation', 'error', 5, function(){  console.log('dismissed'); });
      
        }
      }).catch(e => {
         var notification = alertify.notify('Slow network....please reload the webpage or restart the service.', 'error', 5, function(){  console.log('dismissed'); });
          
         // localStorage.clear()
         // window.location.href='/'
        // return MessageBoard.displayMsg(e);
      })

    }
//}

}






function WarLockAdmin(roleName,permName){

// window.addEventListener('load',()=>{
  document.getElementById('gtd').style.display='none';

  if(localStorage.getItem('userToken')){
     // if(typeof(localStorage.getItem('previledges')=='undefined')){
     //    localStorage.clear();
     //    return window.location.href="./"

     // }

      if(localStorage.getItem('previledges')){
      
      let previledges = JSON.parse(localStorage.getItem('previledges'));

      console.log(previledges[roleName])

      //alert(previledges[roleName])
      

      if(previledges[roleName]!='yes'){

        window.location.href="/previledges-denied"
        document.getElementById('gtd').style.display='block'
       // return "no"
      }else{
        document.getElementById('gtd').style.display='block'
        //return "yes"
      }


      if(previledges[permName]!='yes'){
        // alert('cant manage')
        // // disable all buttons


        
          //var notification = alertify.notify('Read only mode. You can only read informations in this module.Configure the previledges to be able to perform otheractions.', 'error', 45, function(){  console.log('dismissed'); });
          

       
        
      

      //document.addEventListener('DOMContentLoaded', ()=>{



    $("a.btn").hide()



        //})
        

      
      }

      if(previledges.status!='Active'){
        window.location.href="/previledges-denied"
        document.getElementById('gtd').style.display='block';

        setTimeout(()=>{
           localStorage.clear();
        },2000)
       


      }

    }

    // })
      
  }

}







window.update_value_checked_previledges= (chk_bx) =>{
  // chk_bx.value ="false";

  //       if(chk_bx.checked)
  //       {
  //          chk_bx.value="true";
  //       }
  //       else{
  //          chk_bx.value="false";
  //       }
        
     //removed this code functionality and replaced it    

}


window.updateInspectionAction = (o) =>{
        let view_id = o.dataset.id
        let linkOfApi = "http://localhost:12000/api/v1" + o.dataset.url + '/' + o.dataset.id

        const email_x = document.getElementById("email"+view_id)

        
       const username_x = document.getElementById("username"+view_id) ;

   const description=      document.getElementById("description"+view_id).value 
        
       const date = document.getElementById("date"+view_id).value 

        const phone_number = document.getElementById("phone_number"+view_id).value 


  const time =        document.getElementById("time"+view_id).value 

     const car_id =   document.getElementById("car_id"+view_id).value 
        
      const  status_x = document.getElementById("status"+view_id)





     


      if( !date){
        var notification = alertify.notify('Date required.', 'error', 5, function(){  console.log('dismissed'); });

         return false;
      }

      if(!car_id){
        var notification = alertify.notify('car id/plate number required.', 'error', 5, function(){  console.log('dismissed'); });

         return false;


      }


          const prePostData = {
            username: username_x.value,
            email: email_x.value,
            phone_number: phone_number,
            description: description,
            createdDate: date,
            time: time,
            status: status_x.options[status_x.selectedIndex].text,
            car_id,
          };





         

          const user =JSON.parse(localStorage.getItem("userToken"));

          
          fetch(linkOfApi, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': user.token,
              },
              body: JSON.stringify(prePostData),
              mode:"cors",
            })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                if (data.status == 200) {
                  
                  var notification = alertify.notify('Successfully created inspection ', 'success', 5, function(){  console.log('dismissed'); });
                      
                  setTimeout(()=>{
                    window.location.reload();
                  },2000)
                      

                 // ApiDeleteOneStatusRecord.redirect(recordOfType);
                } else {
                  
                  var notification = alertify.notify('Could not perform update operation.', 'error', 5, function(){  console.log('dismissed'); });

                }
              }).catch(e=> console.log(e));

}


window.viewPreviledges = (el) =>{

  console.log(el.dataset)

  let view_id = el.dataset.id;
  console.log(view_id+ "dsjdjjs")
  let modal_view_id = document.getElementById("con-close-modala-"+ view_id);
  modal_view_id.style.display="block";

  let showme ="#con-close-modala-"+ view_id
  let notme ='#con-close-modalla'+ view_id

  let form_previledge = document.getElementById('con-close-modalla'+ view_id)
  form_previledge.style.display='block'

   // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

   $('.form-horizontal').not(notme).hide();






    document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="none";
    document.getElementById("third-view").style.display="block";


    if(el.dataset.payments=="yes"){
      
        var element = document.getElementById("payments"+el.dataset.id);
        element.checked = 1;


        
    }


    if(el.dataset.transactions=="yes"){
      
        var element = document.getElementById("transactions"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.partners=="yes"){
      
        var element = document.getElementById("partners"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.sos=="yes"){
      
        var element = document.getElementById("sos"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.bookings=="yes"){
      
        var element = document.getElementById("bookings"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.drivers=="yes"){
      
        var element = document.getElementById("drivers"+el.dataset.id);
        element.checked = 1;
        
    }



    if(el.dataset.quotations=="yes"){
      
        var element = document.getElementById("quotations"+el.dataset.id);
        element.checked = 1;
        
    }



    if(el.dataset.packages=="yes"){
      
        var element = document.getElementById("packages"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.cars=="yes"){
      
        var element = document.getElementById("cars"+el.dataset.id);
        element.checked = 1;
        
    }




    if(el.dataset.users=="yes"){
      
        var element = document.getElementById("users"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.admins=="yes"){
      
        var element = document.getElementById("admins"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.settings=="yes"){
      
        var element = document.getElementById("settings"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.faqs=="yes"){
      
        var element = document.getElementById("faqs"+el.dataset.id);
        element.checked = 1;
        
    }
    if(el.dataset.tickets=="yes"){
      
        var element = document.getElementById("tickets"+el.dataset.id);
        element.checked = 1;
        
    }










    //managements



    if(el.dataset.mpayments=="yes"){
      
        var element = document.getElementById("mpayments"+el.dataset.id);
        element.checked = 1;


        
    }


    if(el.dataset.mtransactions=="yes"){
      
        var element = document.getElementById("mtransactions"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.mpartners=="yes"){
      
        var element = document.getElementById("mpartners"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.msos=="yes"){
      
        var element = document.getElementById("msos"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.mbookings=="yes"){
      
        var element = document.getElementById("mbookings"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.mdrivers=="yes"){
      
        var element = document.getElementById("mdrivers"+el.dataset.id);
        element.checked = 1;
        
    }



    if(el.dataset.mquotations=="yes"){
      
        var element = document.getElementById("mquotations"+el.dataset.id);
        element.checked = 1;
        
    }



    if(el.dataset.mpackages=="yes"){
      
        var element = document.getElementById("mpackages"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.mcars=="yes"){
      
        var element = document.getElementById("mcars"+el.dataset.id);
        element.checked = 1;
        
    }




    if(el.dataset.musers=="yes"){
      
        var element = document.getElementById("musers"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.madmins=="yes"){
      
        var element = document.getElementById("madmins"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.msettings=="yes"){
      
        var element = document.getElementById("msettings"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.mfaqs=="yes"){
      
        var element = document.getElementById("mfaqs"+el.dataset.id);
        element.checked = 1;
        
    }
    if(el.dataset.mtickets=="yes"){
      
        var element = document.getElementById("mtickets"+el.dataset.id);
        element.checked = 1;
        
    }





     var save = document.getElementById("saveChanges"+el.dataset.id);


     save.addEventListener('click', function(e){
      e.preventDefault()
        let view_bookings,
          view_quotations,
          view_payments,
          view_drivers,
          view_sos,
          view_partners,
          view_package,
          view_transactions,
          view_cars,
          view_tickets,
          view_faqs,
          view_settings,
          view_users,
          view_admins,

          manage_bookings,
          manage_quotations,
          manage_payments,
          manage_drivers,
          manage_sos,
         manage_partners,
          manage_package,
         manage_transactions,
          manage_cars,
          manage_tickets,
          manage_faqs,
          manage_settings,
          manage_users,
          manage_admins;

        let payments = document.getElementById("payments"+el.dataset.id),
            transactions = document.getElementById("transactions"+el.dataset.id),
            quotations = document.getElementById("quotations"+el.dataset.id),
            drivers =document.getElementById("drivers"+el.dataset.id),
            partners =document.getElementById("partners"+el.dataset.id),
            sos =document.getElementById("sos"+el.dataset.id),
            packages =document.getElementById("packages"+el.dataset.id),
            bookings =document.getElementById("bookings"+el.dataset.id),
        cars =document.getElementById("cars"+el.dataset.id),

         users =document.getElementById("users"+el.dataset.id),
         admins =document.getElementById("admins"+el.dataset.id),
         tickets =document.getElementById("tickets"+el.dataset.id),
         settings =document.getElementById("settings"+el.dataset.id),
         faqs =document.getElementById("faqs"+el.dataset.id);



         let mpayments = document.getElementById("mpayments"+el.dataset.id),
            mtransactions = document.getElementById("mtransactions"+el.dataset.id),
            mquotations = document.getElementById("mquotations"+el.dataset.id),
            mdrivers =document.getElementById("mdrivers"+el.dataset.id),
            mpartners =document.getElementById("mpartners"+el.dataset.id),
            msos =document.getElementById("msos"+el.dataset.id),
            mpackages =document.getElementById("mpackages"+el.dataset.id),
            mbookings =document.getElementById("mbookings"+el.dataset.id),
        mcars =document.getElementById("mcars"+el.dataset.id),

         musers =document.getElementById("musers"+el.dataset.id),
         madmins =document.getElementById("madmins"+el.dataset.id),
         mtickets =document.getElementById("mtickets"+el.dataset.id),
         msettings =document.getElementById("msettings"+el.dataset.id),
         mfaqs =document.getElementById("mfaqs"+el.dataset.id);

  

        if(cars.checked)
        {
           view_cars="yes";
        }
        else{
           view_cars="no";
        }


        if(bookings.checked)
        {
           view_bookings="yes";
        }
        else{
           view_bookings="no";
        }

        if(packages.checked)
        {
           view_package="yes";
        }
        else{
           view_package="no";
        }

        if(partners.checked)
        {
           view_partners="yes";
        }
        else{
           view_partners="no";
        }

        if(sos.checked)
        {
           view_sos="yes";
        }
        else{
           view_sos="no";
        }

        if(quotations.checked)
        {
           view_quotations="yes";
        }
        else{
           view_quotations="no";
        }

        if(transactions.checked)
        {
           view_transactions="yes";
        }
        else{
           view_transactions="no";
        }

        if(payments.checked){
          view_payments= 'yes'
        }else{
          view_payments='no'
        }


        if(drivers.checked)
        {
           view_drivers="yes";
        }
        else{
           view_drivers="no";
        }




        if(users.checked)
        {
           view_users="yes";
        }
        else{
           view_users="no";
        }

        if(admins.checked)
        {
           view_admins="yes";
        }
        else{
           view_admins="no";
        }

        if(faqs.checked)
        {
           view_faqs="yes";
        }
        else{
           view_faqs="no";
        }

        if(tickets.checked)
        {
           view_tickets="yes";
        }
        else{
           view_tickets="no";
        }

        if(settings.checked)
        {
           view_settings="yes";
        }
        else{
           view_settings="no";
        }






        //manager


        if(mcars.checked)
        {
           manage_cars="yes";
        }
        else{
           manage_cars="no";
        }


        if(mbookings.checked)
        {
           manage_bookings="yes";
        }
        else{
           manage_bookings="no";
        }

        if(mpackages.checked)
        {
           manage_package="yes";
        }
        else{
           manage_package="no";
        }

        if(mpartners.checked)
        {
           manage_partners="yes";
        }
        else{
           manage_partners="no";
        }

        if(msos.checked)
        {
           manage_sos="yes";
        }
        else{
           manage_sos="no";
        }

        if(mquotations.checked)
        {
           manage_quotations="yes";
        }
        else{
           manage_quotations="no";
        }

        if(mtransactions.checked)
        {
           manage_transactions="yes";
        }
        else{
           manage_transactions="no";
        }

        if(mpayments.checked){
          manage_payments= 'yes'
        }else{
          manage_payments='no'
        }


        if(mdrivers.checked)
        {
           manage_drivers="yes";
        }
        else{
           manage_drivers="no";
        }




        if(musers.checked)
        {
           manage_users="yes";
        }
        else{
           manage_users="no";
        }

        if(madmins.checked)
        {
           manage_admins="yes";
        }
        else{
           manage_admins="no";
        }

        if(mfaqs.checked)
        {
           manage_faqs="yes";
        }
        else{
           manage_faqs="no";
        }

        if(mtickets.checked)
        {
           manage_tickets="yes";
        }
        else{
           manage_tickets="no";
        }

        if(msettings.checked)
        {
           manage_settings="yes";
        }
        else{
           manage_settings="no";
        }



        const user =JSON.parse(localStorage.getItem("userToken"));
        let linkOfApi = 'http://localhost:12000/api/v1/admin-previledges-update/'+ el.dataset.id  ;


        let status_x = document.getElementById('status'+ el.dataset.id);
        let status =status_x.options[status_x.selectedIndex].text;

        let previledges_info = el.dataset.role;

        // alert(chk_bx.value)

      

  

       let  prePostData ={
          view_bookings,
          view_quotations,
          view_transactions,
          view_payments,
          view_drivers,
          view_sos,
          view_partners,
          view_package,
          view_cars,
          previledges_info,
          view_settings,
          view_faqs,
          view_admins,
          view_users,
          view_tickets,
          status,

          manage_bookings,
          manage_quotations,
          manage_payments,
          manage_drivers,
          manage_sos,
         manage_partners,
          manage_package,
         manage_transactions,
          manage_cars,
          manage_tickets,
          manage_faqs,
          manage_settings,
          manage_users,
          manage_admins
        };

        console.log(prePostData)

        localStorage.setItem('usergroup',previledges_info)




        




        fetch(linkOfApi, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': user.token,
        },
        body: JSON.stringify(prePostData),
        mode:"cors",
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.status ===200) {
           // let modal_view_id = document.getElementsByClassName("mebox");
           // modal_view_id[0].style.display="none";
            //document.getElementById("gtd").classList.remove("overlay")

            localStorage.setItem('previledges',JSON.stringify(prePostData))

             var notification = alertify.notify('Successful updated of user previledges', 'success', 5, function(){  console.log('dismissed'); });
               
               var notification = alertify.notify('All users for this roles has been modified successfully.', 'success', 5, function(){  console.log('dismissed'); });
             
             // setTimeout(()=>{
             //  window.location.reload()
             // },2000)
           // ApiDeleteOneStatusRecord.redirect(recordOfType);
          } else {
            
            var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

          }
        }).catch(e=> console.log(e));

     })




}


window.RolesUpdate =(el) =>{


  let view_id = el.dataset.id;
  console.log(view_id+ "dsjdjjs")
  let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
  modal_view_id.style.display="block";

  let showme ="#con-close-modal-"+ view_id

  $('.mebox').not(showme).hide();

  document.getElementById("first-view").style.display="none";
  document.getElementById("second-view").style.display="block";


  document.getElementById("role"+view_id).value= el.dataset.info
        
  document.getElementById("description"+view_id).value = el.dataset.description;




    if(el.dataset.payments=="yes"){
      
        var element = document.getElementById("payments"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.transactions=="yes"){
      
        var element = document.getElementById("transactions"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.sos=="yes"){
      
        var element = document.getElementById("sos"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.bookings=="yes"){
      
        var element = document.getElementById("bookings"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.drivers=="yes"){
      
        var element = document.getElementById("drivers"+el.dataset.id);
        element.checked = 1;
        
    }



    if(el.dataset.quotations=="yes"){
      
        var element = document.getElementById("quotations"+el.dataset.id);
        element.checked = 1;
        
    }



    if(el.dataset.packages=="yes"){
      
        var element = document.getElementById("packages"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.cars=="yes"){
      
        var element = document.getElementById("cars"+el.dataset.id);
        element.checked = 1;
        
    }

    // if(el.dataset.transactions=="yes"){
      
    //     var element = document.getElementById("transactions"+el.dataset.id);
    //     element.checked = 1;
        
    // }


    if(el.dataset.users=="yes"){
      
        var element = document.getElementById("users"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.admins=="yes"){
      
        var element = document.getElementById("admins"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.settings=="yes"){
      
        var element = document.getElementById("settings"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.faqs=="yes"){
      
        var element = document.getElementById("faqs"+el.dataset.id);
        element.checked = 1;
        
    }
    if(el.dataset.tickets=="yes"){
      
        var element = document.getElementById("tickets"+el.dataset.id);
        element.checked = 1;
        
    }










    //managements



    if(el.dataset.mpayments=="yes"){
      
        var element = document.getElementById("mpayments"+el.dataset.id);
        element.checked = 1;


        
    }


    if(el.dataset.mtransactions=="yes"){
      
        var element = document.getElementById("mtransactions"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.mpartners=="yes"){
      
        var element = document.getElementById("mpartners"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.msos=="yes"){
      
        var element = document.getElementById("msos"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.mbookings=="yes"){
      
        var element = document.getElementById("mbookings"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.mdrivers=="yes"){
      
        var element = document.getElementById("mdrivers"+el.dataset.id);
        element.checked = 1;
        
    }



    if(el.dataset.mquotations=="yes"){
      
        var element = document.getElementById("mquotations"+el.dataset.id);
        element.checked = 1;
        
    }



    if(el.dataset.mpackages=="yes"){
      
        var element = document.getElementById("mpackages"+el.dataset.id);
        element.checked = 1;
        
    }


    if(el.dataset.mcars=="yes"){
      
        var element = document.getElementById("mcars"+el.dataset.id);
        element.checked = 1;
        
    }




    if(el.dataset.musers=="yes"){
      
        var element = document.getElementById("musers"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.madmins=="yes"){
      
        var element = document.getElementById("madmins"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.msettings=="yes"){
      
        var element = document.getElementById("msettings"+el.dataset.id);
        element.checked = 1;
        
    }

    if(el.dataset.mfaqs=="yes"){
      
        var element = document.getElementById("mfaqs"+el.dataset.id);
        element.checked = 1;
        
    }
    if(el.dataset.mtickets=="yes"){
      
        var element = document.getElementById("mtickets"+el.dataset.id);
        element.checked = 1;
        
    }






}

window.RolesAddAction = (t) =>{


  let view_id = t.dataset.id;

   
 let linkOfApi ='http://localhost:12000/api/v1/' + t.dataset.url ;

 let usergroups_old =document.getElementById("role"+view_id).dataset.usergroups_old
 usergroups_old = usergroups_old.split(',')
 
 //alert(typeof(usergroups_old))


  let previledges_info =document.getElementById("role"+view_id).value;
        
 let previledges_description = document.getElementById("description"+view_id).value ;


 if(!previledges_description.length){

   var notification = alertify.notify('Description required. .', 'error', 5, function(){  console.log('dismissed'); });
 
 }


 if(!previledges_info.length){

   var notification = alertify.notify('Role title required. .', 'error', 5, function(){  console.log('dismissed'); });
   return false;

 }

 let prePostData ={
  previledges_info,
  previledges_description,
  usergroups_old: usergroups_old
 }


  const user =JSON.parse(localStorage.getItem("userToken"));

  fetch(linkOfApi, {
              method: 'Post',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': user.token,
              },
              body: JSON.stringify(prePostData),
              mode:"cors",
            })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                if (data.status === 201) {
                  
                  var notification = alertify.notify('Successfully created user role.', 'success', 5, function(){  console.log('dismissed'); });
                      
                  setTimeout(()=>{
                    window.location.href="./admin-previledges"
                  },2000)
                      

                 // ApiDeleteOneStatusRecord.redirect(recordOfType);
                } else {
                  
                  var notification = alertify.notify('Could not perform update operation. Ensure the fields are filled in correctly.', 'error', 5, function(){  console.log('dismissed'); });

                }
              }).catch(e=> console.log(e));


}


window.RolesUpdateAction =(t) =>{



  let view_id = t.dataset.id;


 let linkOfApi ='http://localhost:12000/api/v1/' + t.dataset.url + '/' + t.dataset.id


  let previledges_info =document.getElementById("role"+view_id).value
        
 let previledges_description = document.getElementById("description"+view_id).value ;


 if(!previledges_description.length){

  var notification = alertify.notify('Description required. .', 'error', 5, function(){  console.log('dismissed'); });
  return false;

 }


 if(!previledges_info.length){

  var notification = alertify.notify('Role title required. .', 'error', 5, function(){  console.log('dismissed'); });
   return false;

 }

 let prePostData ={
  previledges_info,
  previledges_description
 }


  const user =JSON.parse(localStorage.getItem("userToken"));

          
          fetch(linkOfApi, {
              method: 'PUT',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': user.token,
              },
              body: JSON.stringify(prePostData),
              mode:"cors",
            })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                if (data.success === 'ok') {
                  
                  var notification = alertify.notify('Successfully updated roles.', 'success', 5, function(){  console.log('dismissed'); });
                      
                  setTimeout(()=>{
                    window.history.back();
                  },2000)
                      

                 // ApiDeleteOneStatusRecord.redirect(recordOfType);
                } else {
                  
                  var notification = alertify.notify('Could not perform update operation. Ensure the fields are filled in correctly.', 'error', 5, function(){  console.log('dismissed'); });

                }
              }).catch(e=> {alert(e)});



}


window.viewInspectionUpdate = (el) =>{


  let view_id = el.dataset.id;
  console.log(view_id+ "dsjdjjs")
  let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
  modal_view_id.style.display="block";

  let showme ="#con-close-modal-"+ view_id

   // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

   $('.mebox').not(showme).hide();


    document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";


 


          

        
        document.getElementById("email"+view_id).value= el.dataset.email
        
        document.getElementById("username"+view_id).value = el.dataset.username;

        document.getElementById("description"+view_id).value = el.dataset.description
        
        document.getElementById("date"+view_id).value = el.dataset.date

        document.getElementById("phone_number"+view_id).value = el.dataset.phone


        document.getElementById("time"+view_id).value = el.dataset.time

        document.getElementById("car_id"+view_id).value = el.dataset.car_id
        
       


          // const prePostData = {
          //   username: username,
          //   email: email,
          //   phone_number: phone_number,
          //   description: description,
          //   createdDate: createdDate,
          //   time: time,
          //   status,
          //   car_id,
          // };





         

          // const user =JSON.parse(localStorage.getItem("userToken"));

          
          // fetch(linkOfApi, {
          //     method: 'POST',
          //     headers: {
          //       'Accept': 'application/json',
          //       'Content-Type': 'application/json',
          //       'x-access-token': user.token,
          //     },
          //     body: JSON.stringify(prePostData),
          //     mode:"cors",
          //   })
          //     .then(response => response.json())
          //     .then(data => {
          //       console.log(data)
          //       if (data.status === 201) {
                  
          //         var notification = alertify.notify('Successfully created inspection ', 'success', 5, function(){  console.log('dismissed'); });
                      
          //         setTimeout(()=>{
          //           window.history.back();
          //         },2000)
                      

          //        // ApiDeleteOneStatusRecord.redirect(recordOfType);
          //       } else {
                  
          //         var notification = alertify.notify('Could not perform update operation. Ensure the plan selected is correct.', 'error', 5, function(){  console.log('dismissed'); });

          //       }
          //     }).catch(e=> console.log(e));
         

}


window.addInspection = () =>{

  document.getElementById("add-new").addEventListener("click",(e)=>{
      
     
  })



}


function sanitize(strings, ...values) {
    const dirty = strings.reduce((prev, next, i) => `${prev}${next}${values[i]} || ''}`, '');
    return DomPurify.sanitize(dirty);
}

function createBookingSet(postUrl, userPlanItineries){
  let user = JSON.parse(localStorage.getItem('userToken'))
  

  fetch(postUrl, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'x-access-token',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      body: JSON.stringify(userPlanItineries),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 201) {
          //MessageBoard.displayMsg('Form submitted succesfully');
          var notification = alertify.notify('succesfully created itinerary.', 'success', 5, function(){  console.log('dismissed'); });

       
        } else if (data.status === 401 || data.status === 403) {
          window.location.href = './';
        } else {
          //MessageBoard.displayMsg(data.error);
          var notification = alertify.notify('Error in posting data.', 'error', 5, function(){  console.log('dismissed'); });

        }
      })
      .catch(error => {
        throw error;
      });
}



function createQuotations(postUrl, userqUOTA){
  let user = JSON.parse(localStorage.getItem('userToken'))
  

  fetch(postUrl, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'x-access-token',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      body: JSON.stringify(userqUOTA),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 201) {
          //MessageBoard.displayMsg('Form submitted succesfully');
          var notification = alertify.notify('succesfully created quotation.', 'success', 5, function(){  console.log('dismissed'); });

       
        } else if (data.status === 401 || data.status === 403) {
          window.location.href = './';
        } else {
          //MessageBoard.displayMsg(data.error);
          var notification = alertify.notify('Error in posting quotation.', 'error', 5, function(){  console.log('dismissed'); });

        }
      })
      .catch(error => {
        throw error;
      });
}


function BookingValidationFails(planItineries){
  let validationFails = false;

    const {
              
              plan_category,
              plan_name,
              status,
               certificate_id,
               start_location,
               destination ,
               no_hours,
               start_time,
               end_time , 
               drive_option,
               user_id,
               travel_option,
              carsSelected,
               drivingschool,
               username,
               email,
               phone_number
            } = planItineries;

      if(start_location.length<= 0){
         validationFails = true;
         console.log("location err")
         var notification = alertify.notify('location is required', 'error', 5, function(){  console.log('dismissed'); });
       
      }

      if(username.length<= 0){
         validationFails = true;
         console.log("location err")
         var notification = alertify.notify('username is required', 'error', 5, function(){  console.log('dismissed'); });
       
      }

      if(email.length<= 0){
         validationFails = true;
         console.log("location err")
         var notification = alertify.notify('email is required', 'error', 5, function(){  console.log('dismissed'); });
       
      }

      if(phone_number.length<= 0){
         validationFails = true;
         console.log("location err")
         var notification = alertify.notify('phone is required', 'error', 5, function(){  console.log('dismissed'); });
       
      }

      if(destination.length<=0){
        validationFails = true;
        console.log("dest err")
         var notification = alertify.notify('destination is required', 'error', 5, function(){  console.log('dismissed'); });
        
      }

      if(start_time.length<=0){
        validationFails = true;
       // document.getElementById("msg").innerHTML="start date required"
        console.log("startdate err")
        var notification = alertify.notify('start date required', 'error', 5, function(){  console.log('dismissed'); });
      
      }

      if(end_time.length<=0){
        validationFails = true;
        console.log("enddate err")
        //document.getElementById("msg").innerHTML="end date is required"
        var notification = alertify.notify('end date is required', 'error', 5, function(){  console.log('dismissed'); });
       
      }

      if(drive_option.length<=0){
        validationFails = true;
        console.log("optD err")

         var notification = alertify.notify('drive option is required', 'error', 5, function(){  console.log('dismissed'); });
    
      }

      if(no_hours.length<=0){
         validationFails = true;
           var notification = alertify.notify('Duration required', 'error', 5, function(){  console.log('dismissed'); });
    
       }



      if(travel_option.length<=0){
        validationFails = true;
        console.log("optT err")
         var notification = alertify.notify('travel option required', 'error', 5, function(){  console.log('dismissed'); });
        
      }

      if(travel_option=="Select City Option"){
        validationFails =true;
        var notification = alertify.notify('Select a travel option plan', 'error', 5, function(){  console.log('dismissed'); });
        
      }

      if(plan_name.length<=0){
        validationFails = true
        console.log("planname err")
       var notification = alertify.notify('Select a travel option plan', 'error', 5, function(){  console.log('dismissed'); });
        
      }

      // if( price.length<=0){
      //   validationFails = true
      //   console.log("price err")
      //  var notification = alertify.notify('Select a travel option plan', 'error', 5, function(){  console.log('dismissed'); });
        
      // }

      // if(carsSelected.length<=0){
      //   validationFails =true;
      //    var notification = alertify.notify('You did not choose atleast one  of the 3 cars requested for you to create this plan.', 'error', 5, function(){  console.log('dismissed'); });
       
      // }
      return validationFails;

  

}


function postNotification(postUrl,prePostData){
	let user = JSON.parse(localStorage.getItem('userToken'))
    fetch(postUrl, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'x-access-token',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      body: JSON.stringify(prePostData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 201) {
        	console.log(data)
          //MessageBoard.displayMsg('Form submitted succesfully');
          var notification = alertify.notify('Successful transaction.', 'success', 5, function(){  console.log('dismissed'); });
			           

          localStorage.setItem('urlType', postUrl);
        } else if (data.status === 401 || data.status === 403) {
          window.location.href = './';
        } else {
          //MessageBoard.displayMsg(data.error);
          var notification = alertify.notify('Failed to send quotation to user', 'error', 5, function(){  console.log('dismissed'); });
			           
        }
      })
      .catch(error => {
        throw error;
      });
}

function updateStatus(linkOfApi, statusData){
   let user = JSON.parse(localStorage.getItem('userToken'))

	fetch(linkOfApi, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      body: JSON.stringify(statusData),
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
         var notification = alertify.notify('Successful transaction.', 'success', 5, function(){  console.log('dismissed'); });
			           

          console.log(data);
          //document.getElementById('selectStatus').options[select.selectedIndex].value = newStatus;
        } else {
          //  //MessageBoard.displayMsg(data.error);
          var notification = alertify.notify('Failed to update paymentstatus', 'error', 5, function(){  console.log('dismissed'); });
			
        }
      });
}





var divState = {};
function showhide(id) {
    if (document.getElementById) {
        var divid = document.getElementById(id);
        divState[id] = (divState[id]) ? false : true;
        //close others
        for (var div in divState){
            if (divState[div] && div != id){
                document.getElementById(div).style.display = 'none';
                divState[div] = false;
            }
        }
        divid.style.display = (divid.style.display == 'block' ? 'none' : 'block');
    }
}


let activeUrl = getOnlineUrlConnection();

alertify.set('notifier','position', 'top-left');

window.addMethodTrigger = false;

window.getBookingId= (o) =>{
	localStorage.setItem('bookingId', o.dataset.id);
	window.location.href="./admin-booking-detail"
}


window.changeView = (pageView, data) =>{
	localStorage.setItem('data', data);

	window.location.href= "/"+ pageView;

}

console.log(new Date() + "our new date of transaction")
function getExtension(filename) {
  var parts = filename.split('.');
  return parts[parts.length - 1];
}

function isImage(filename) {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case 'jpg':
    case 'gif':
    case 'bmp':
    case 'png':
      //etc
      return true;
  }
  return false;
}

function isVideo(filename) {
  var ext = getExtension(filename);
  switch (ext.toLowerCase()) {
    case 'm4v':
    case 'avi':
    case 'mpg':
    case 'mp4':
      // etc
      return true;
  }
  return false;
}

window.showModalVideo = function(el){
	//modal video on click effect
			// Gets the video src from the data-src on each button
       	  	var $videoSrc;  
			// $('.video-btn').click(function() {
			// 	console.log(el.dataset.src+"is the video")
			//     $videoSrc =  el.dataset.src; //$(this).data( "src" );

			//     document.getElementById("video").src =$videoSrc;


			// });

			document.getElementById(el.dataset.id).addEventListener('click', function() {
                 document.getElementById("modvideo").innerHTML =`<video class="embed-responsive-item" id="demoVideo"    controls>
                                                                         <source src="${el.dataset.src}" type="video/webm" id="video" ></source>
                                                                            Your browser does not support the video tag.
                                                                  </video>`

                 
            });
			
			  $('#myModal').on('shown.bs.modal', function (e) {
			      
			   })


			   

			  
			// when the modal is opened autoplay it  
			
			  
			// stop playing the youtube video when I close the modal
			$('#myModal').on('hide.bs.modal', function (e) {
			    // a poor man's stop video
			    // $("#video").attr('src',); 
			    document.getElementById("demoVideo").pause()

			}) 
		

}

function getLast3Months() {

  var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  var today = new Date();
  var last3Months = []

  for (i = 0; i < 3; i++) {
    last3Months.push(monthNames[(today.getMonth() - i)] + ' - ' +today.getFullYear()  );
  }
  return last3Months;
}



      
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " "  //+ strTime;
}

window.addCloseEffect= (el)=>{
  let view_id = el.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	modal_view_id.style.display="none";
	//document.getElementById("gtd").classList.remove("overlay")

    let shown_id = "con-close-modal-"+ view_id
	

  

	const loader = document.getElementById("loader");
    loader.style.display = 'block';
    loader.style.zIndex="9999999";


    setTimeout(()=>{
      loader.style.display = 'none';
       document.getElementById("first-view").style.display="block";
    },2000)


     $('.mebox').hide();
   
    
    document.getElementById("second-view").style.display="none";


	
}


window.addCloseEffect2= (el)=>{
  let view_id = el.dataset.id;
  let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
  modal_view_id.style.display="none";
  //document.getElementById("gtd").classList.remove("overlay")

    let shown_id = "con-close-modala-"+ view_id
  

  

  const loader = document.getElementById("loader");
    loader.style.display = 'block';
    loader.style.zIndex="9999999";


    setTimeout(()=>{
      loader.style.display = 'none';
       document.getElementById("first-view").style.display="block";
    },2000)


     $('.mebox').hide();
   
    
    document.getElementById("third-view").style.display="none";


  
}

const addClick = () =>{

	


	 addMethodTrigger = true;

   if(document.getElementById("user-id")){
      document.getElementById("user-id").innerHTML="";
    
    
  //if(document.getElementById("user-id")){
  document.getElementById("user-id").innerHTML='';
   }
	 
    


   //}
	document.getElementById("add-new").addEventListener("click",(e)=>{
	 $('.mebox').hide();
       document.getElementById("create").style.visibility="visible";
       document.getElementById("create").style.display="block";
	   document.getElementById("update").style.visibility="hidden";
	   //document.getElementById("delete").style.visibility="hidden";
	   document.getElementById("cancle").style.visibility="hidden";

	   let modal_view_id = document.getElementsByClassName("mebox");
	   modal_view_id[0].style.display="block";

     if(modal_view_id[0].querySelector('img')){ //car image on add should not show
      let img = modal_view_id[0].querySelector('img') 
       if(img.getAttribute('title') && img.dataset.carinfo){
         img.style.display='none';
         document.getElementById('oldcar').style.display="none"
       }
     }
	   //document.getElementById("gtd").classList.add("overlay")

	   var elements = document.getElementsByTagName("input");
		for (var ii=0; ii < elements.length; ii++) {
		  if (elements[ii].type == "text") {
		    elements[ii].value = "";
		  }
		}

	   document.getElementById("first-view").style.display="none";
       document.getElementById("second-view").style.display="block";


	})

	
}


window.update_value_checked = (chk_bx) =>{
	chk_bx.value ="false";

        if(chk_bx.checked)
        {
           chk_bx.value="true";
        }
        else{
           chk_bx.value="false";
        }
        
        const user =JSON.parse(localStorage.getItem("userToken"));
        let linkOfApi = activeUrl + chk_bx.dataset.url +"/"+ chk_bx.dataset.id  ;

       let prePostData = {
       	 isVerified: chk_bx.value
       }

        fetch(linkOfApi, {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	      	console.log(data)
	        if (data.success === "ok") {
	         // let modal_view_id = document.getElementsByClassName("mebox");
	         // modal_view_id[0].style.display="none";
	          //document.getElementById("gtd").classList.remove("overlay")

	          var notification = alertify.notify('Successful updated of user verification ', 'success', 5, function(){  console.log('dismissed'); });
	              
	         // ApiDeleteOneStatusRecord.redirect(recordOfType);
	        } else {
	          
	          var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      }).catch(e=> console.log(e));
	

}

window.addEvent = (o) =>{
	let linkOfApi = activeUrl + o.dataset.url ;
	const user =JSON.parse(localStorage.getItem("userToken"));
    let firstname = document.getElementById("firstname"+ o.dataset.id).value,
    lastname =document.getElementById("lastname"+ o.dataset.id).value,
    username=document.getElementById("username"+ o.dataset.id).value,
    password=document.getElementById("password"+ o.dataset.id).value,
      //passwordConfirm =document.getElementById("confirmpassword"+ o.dataset.id).value,
    phoneNumber= document.getElementById("phone"+ o.dataset.id).value;
    let avatar = document.getElementById('file-input').value ;
    console.log("avatar:" + avatar)

    // 
     var fullPath = avatar;
     var filename = fullPath.replace(/^.*[\\\/]/, '');
     avatar = filename;

     console.log("this pic:" + avatar)

 
           

     if(avatar){

       user.user.profile = avatar;
       document.getElementById("user-profile").src=  user.user.profile;
     }
     var oldProfile = document.getElementById("user-profile").src;
     if(!avatar){
       fullPath = oldProfile;
       filename = fullPath.replace(/^.*[\\\/]/, '');
       avatar = filename;
       user.user.profile =  avatar;  //'https://commute-bucket.s3.amazonaws.com/'+ avatar;
       // avatar = oldProfile;
     }
    
     localStorage.setItem('userToken', JSON.stringify(user));
    
    let is_verified = false;
    let isVerified = document.getElementById("is_verified"+o.dataset.id).value;
    is_verified = isVerified;
    console.log(is_verified+ "ddsds")
    

    
   
    const certificate = document.getElementById("certificate"+ o.dataset.id).value;
    var user_typeSelect = document.getElementById('type'+ o.dataset.id);
    const user_type = user_typeSelect.options[user_typeSelect.selectedIndex].text;
    const email = document.getElementById("email"+ o.dataset.id).value;
    const status_x = document.getElementById("status"+ o.dataset.id);
    const status = status_x.options[status_x.selectedIndex].text;
    let address='';
    let prePostData =null;
    if(document.getElementById("address"+ o.dataset.id)){
      address = document.getElementById("address"+ o.dataset.id).value;

      prePostData ={
      	  firstname,
	      lastname,
	      username,
	      email,
	      password,
	      phoneNumber,
	      avatar,
	      certificate,
	      user_type,
	      status,
	      address,
	      is_verified
      };
    }else{
     prePostData ={
      	  firstname,
	      lastname,
	      username,
	      email,
	      password,
	      phoneNumber,
	      avatar,
	      certificate,
	      user_type,
	      status,
	      is_verified
      };

    }


	let view_id = o.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	
    const validResult = Validator.validateSignup({...prePostData});

    if(validResult){
		fetch(linkOfApi, {
	      method: 'POST',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	        if (data.status === 201) {
	          modal_view_id.style.display="none";
	          var notification = alertify.notify('Successfully created  user.', 'success', 5, function(){  console.log('dismissed'); });
	     //     window.location.reload();
	         // ApiDeleteOneStatusRecord.redirect(recordOfType);
	        } else {
	          
	          var notification = alertify.notify('Could not perform add operation.', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      });
	}else{
		var notification = alertify.notify('unsuccessful add operation.', 'error', 5, function(){  console.log('dismissed'); });

	}

}


window.viewRecordItinsDetail = (el) =>{

	let view_id = el.dataset.id;
	//console.log(view_id+ "dsjdjjs")
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	modal_view_id.style.display="block";

	let showme ="#con-close-modal-"+ view_id

	 // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

	 $('.mebox').not(showme).hide();


	  document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";


    document.getElementById("username"+view_id).value=el.dataset.username;
	document.getElementById("drive_option"+view_id).value=el.dataset.drive_option;
	document.getElementById("email"+view_id).value=el.dataset.email;
	document.getElementById("phone_number"+view_id).value=el.dataset.phone_number;
	document.getElementById("travel_option"+view_id).value= el.dataset.travel_option;
	document.getElementById("no_hours"+view_id).value= el.dataset.no_hours;
	document.getElementById("start_location"+view_id).value= el.dataset.start_location;
	document.getElementById("destination"+view_id).value= el.dataset.destination;
	document.getElementById("start_time"+view_id).value= el.dataset.start_time;
	document.getElementById("end_time"+view_id).value= el.dataset.end_time;

  //let chosenDriver =






    let id= "#status"+ view_id;
    $( id + " option").each(function () {
        if ($(this).html() == el.dataset.status) {
            $(this).attr("selected", "selected");
            return;
        }
    });



  


    let idz='#assigned_driver'+ view_id;
    $( idz + " option").each(function () {
        
       // alert('hello')
        let checkmate = el.dataset.checkmate
        // console.log(checkmate)
       //alert(checkmate)
       //alert($(this).html())
        if ($(this).html() == checkmate ) {
          // alert('yes check mate'+ $(this).html() )
            $(this).attr("selected", "selected");
            return;
        }
    });

}

window.updateRecordItins = (o) =>{

		let linkOfApi = activeUrl + o.dataset.url  +"/"+ o.dataset.id;
    const view_id = o.dataset.id;


    let id= "#status"+ view_id;
    $( id + " option").each(function () {
        if ($(this).html() == o.dataset.status) {
            $(this).attr("selected", "selected");
            return;
        }
    });


   let idz= "#assigned_driver"+ view_id;
    $( idz + " option").each(function () {
        
        
        let checkmate = $(this).data("username") + '- '+ $(this).data("email") 
        // console.log(checkmate)
        // alert(checkmate)
        if ($(this).html() == checkmate) {
            $(this).attr("selected", "selected");
            return;
        }
    });



    
	
	const status_x = document.getElementById("status"+ view_id);
    const status = status_x.options[status_x.selectedIndex].text;


    let drivers = document.getElementById('assigned_driver'+ view_id);
    let driv = drivers.options[drivers.selectedIndex].text.split('-')
    


    const prePostData = {
    	
    	status,

      assigned_driver_id: drivers.options[drivers.selectedIndex].getAttribute('id'),
     assigned_driver_name: driv[0],
      assigned_driver_email: driv[1],
      assigned_driver_phone: drivers.options[drivers.selectedIndex].value,
    };





    if(drivers.options[drivers.selectedIndex].text=='--Please select a driver--'){
      var notification = alertify.notify('Select a driver', 'error', 5, function(){  console.log('dismissed'); });
             
     return false;
    }





   

    const user =JSON.parse(localStorage.getItem("userToken"));


   

       
		fetch(linkOfApi, {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	      	console.log(data)
	        if (data.status) {
	          let modal_view_id = document.getElementsByClassName("mebox");
	          modal_view_id[0].style.display="none";
	          //document.getElementById("gtd").classList.remove("overlay")

	          var notification = alertify.notify('Successfully updated plan ', 'success', 5, function(){  console.log('dismissed'); });
	              window.location.reload();

	         // ApiDeleteOneStatusRecord.redirect(recordOfType);
	        } else {
	          
	          var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      }).catch(e=> console.log(e));
	 

}

window.viewRecordWalletTransactions = (el)=>{

	console.log("was clicked")


  //fetch the user profile by email

  //set the old balance
  setUserdetail(el.dataset.email,el,true);
	let view_id = el.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	modal_view_id.style.display="block";

	let showme ="#con-close-modal-"+ view_id

	 // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

	 $('.mebox').not(showme).hide();
    

	  document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";
	

	document.getElementById("username"+view_id).value=el.dataset.username;
	document.getElementById("reference"+view_id).value=el.dataset.reference;
	document.getElementById("email"+view_id).value=el.dataset.email;
	// document.getElementById("phone_number"+view_id).value=el.dataset.phone_number;
	document.getElementById("quotation_id"+view_id).value= el.dataset.quotation_id;

	document.getElementById("plan_id"+view_id).value= el.dataset.plan_id;
	if(document.getElementById("date"+view_id)){
		document.getElementById("date"+view_id).value= el.dataset.date;
	}
	

	if(document.getElementById("username"+view_id)){
		document.getElementById("username"+view_id).value= el.dataset.username;
	}


	if(document.getElementById("amount"+view_id)){
		document.getElementById("amount"+view_id).value= el.dataset.amount;
	}
	

	if(true){//wallet

	}


	let id= "#status"+ el.dataset.id;
    $( id + " option").each(function () {
        if ($(this).html() == el.dataset.status) {
            $(this).attr("selected", "selected");
            return;
        }
    });


}


window.updateRecordView = (el)=>{

	window.addMethodTrigger = false;

	let view_id = el.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	modal_view_id.style.display="block";
	//document.getElementById("gtd").classList.add("overlay")
	let showme ="#con-close-modal-"+ view_id

	 // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

	 $('.mebox').not(showme).hide();

	   document.getElementById("create").style.visibility="hidden";
	document.getElementById("update").style.visibility="visible";
	//document.getElementById("delete").style.visibility="visible";
	document.getElementById("cancle").style.visibility="visible";

	document.getElementById("firstname"+view_id).value=el.dataset.firstname;
	document.getElementById("lastname"+view_id).value=el.dataset.lastname;
	document.getElementById("email"+view_id).value=el.dataset.email;
	document.getElementById("phone"+view_id).value=el.dataset.phone;
	document.getElementById("certificate"+view_id).value= el.dataset.certificate;
  document.getElementById("certificate"+view_id).style.disabled=true
	document.getElementById("username"+view_id).value= el.dataset.username;


	document.getElementById("preview").src = el.dataset.avatar;

	let is_verified = false;
    let isVerified = document.getElementById("is_verified"+el.dataset.id).value;
    is_verified = isVerified;
    //console.log(el.dataset.isverified)

    let me = JSON.parse(localStorage.getItem('userToken'))
       if(me.user.roles=='Super Admin'){
          
        document.getElementById("is_verified"+el.dataset.id).disabled=false
      }else{
        document.getElementById("is_verified"+el.dataset.id).disabled=true
      }

    if(el.dataset.isverified=="true"){
    	console.log(el.dataset.isverified)
        var element = document.getElementById("is_verified"+el.dataset.id);
        element.checked = 1;
        
    }

    let id= "#status"+ el.dataset.id;
    $( id + " option").each(function () {
        if ($(this).html() == el.dataset.status) {
            $(this).attr("selected", "selected");
            return;
        }
    });


    if(document.getElementById("type"+ el.dataset.id)){
   



        let idz= "#type"+ el.dataset.id;
        $( idz + " option").each(function () {
            if ($(this).html() == el.dataset.roles) {
                $(this).attr("selected", "selected");
                return;
            }
        });

         if(me.user.roles=='Super Admin'){

        document.getElementById("type"+ el.dataset.id).disabled=false
      }else{
        document.getElementById("type"+ el.dataset.id).disabled=true
      }

  }
    

    let totalCars=0;
	if(document.getElementById("address"+view_id)){
      document.getElementById("address"+ view_id).value= el.dataset.address;
    }

    if( document.getElementById("totalCars"+ view_id)){
      document.getElementById("totalCars"+ view_id).value = el.dataset.totalcars;
    }
    
    document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";

    if(addMethodTrigger==false){
       document.getElementById("user-id").innerHTML="CMT-USER-"+ view_id.substring(-12,view_id.length);
    	
    }else{
    	document.getElementById("user-id").innerHTML="";
    
    }
    
 
}




window.viewPlan = (el)=>{
	let view_id = el.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	modal_view_id.style.display="block";
	//document.getElementById("gtd").classList.add("overlay")

	let showme ="#con-close-modal-"+ view_id

	 // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

	 $('.mebox').not(showme).hide();

	document.getElementById("create").style.visibility="hidden";
	document.getElementById("update").style.visibility="visible";
	document.getElementById("delete").style.visibility="visible";
	document.getElementById("cancle").style.visibility="visible";

	// const plan =document.getElementById("plan"+view_id);
	// plan.value =el.dataset.plan;

	const plan_select =document.getElementById("plan"+view_id);

    const plan =plan_select.options[plan_select.selectedIndex].text;
	const category =document.getElementById("category"+view_id)
	category.value=el.dataset.category;
	const price =document.getElementById("price"+view_id);
	price.value=el.dataset.price;
	const description =document.getElementById("description"+view_id)
	description.value=el.dataset.description;
	const max_cars =document.getElementById("max_car"+view_id)
	max_cars.value= el.dataset.max_car;
	//const status_x = document.getElementById("status"+ view_id);
    //const status = status_x.options[status_x.selectedIndex].text;
      

    let id= "#status"+ view_id;
    $( id + " option").each(function () {
        if ($(this).html() == el.dataset.status) {
            $(this).attr("selected", "selected");
            return;
        }
    });


    let idz= "#plan"+ view_id;
    $( idz + " option").each(function () {
        if ($(this).html() == el.dataset.plan) {
            $(this).attr("selected", "selected");
            return;
        }
    });

    


    // $("#plan"+view_id).on('change', function(e) {
		  //     let selector = $(this).val();
		  //     $("#changelings > option").hide();
		  //     $("#changelings > option").filter(function(){return $(this).data('pub') == selector}).show();
    //   });



    document.getElementById("user-id").innerHTML="CMT-PLAN-"+ view_id.substring(-5,view_id.length);
 

    

     document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";



	

	
 
}

window.updatePlanData = (o) =>{
	let linkOfApi = activeUrl + o.dataset.url  +"/"+ o.dataset.id;
    const view_id = o.dataset.id;


    const plan_select =document.getElementById("plan"+view_id);

	const plan =plan_select.options[plan_select.selectedIndex].text;
    
	
	const category =document.getElementById("category"+view_id).value
	
	const price =document.getElementById("price"+view_id).value;

	const description =document.getElementById("description"+view_id).value
	
	const max_cars =document.getElementById("max_car"+view_id).value
	
	const status_x = document.getElementById("status"+ view_id);
    const status = status_x.options[status_x.selectedIndex].text;


    const prePostData = {
    	plan_name: plan,
    	plan_categories: category,
    	price: price,
    	description: description,
    	max_car: max_cars,
    	status
    };





   

    const user =JSON.parse(localStorage.getItem("userToken"));

    const validResult = Validator.validatePlanPost({...prePostData});

    console.log(validResult+ "update error")

        if(validResult){
		fetch(linkOfApi, {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	      	console.log(data)
	        if (data.success === "ok") {
	          let modal_view_id = document.getElementsByClassName("mebox");
	          modal_view_id[0].style.display="none";
	          //document.getElementById("gtd").classList.remove("overlay")

	          var notification = alertify.notify('Successfully updated plan ', 'success', 5, function(){  console.log('dismissed'); });
	              window.location.reload();

	         // ApiDeleteOneStatusRecord.redirect(recordOfType);
	        } else {
	          
	          var notification = alertify.notify('Could not perform update operation. Ensure the plan selected is correct.', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      }).catch(e=> console.log(e));
	 }else{
	 	var notification = alertify.notify('unsuccessful update operation', 'error', 5, function(){  console.log('dismissed'); });

	 }
}


window.viewRecordSettings = (el)=>{
	let view_id = el.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	modal_view_id.style.display="block";
	//document.getElementById("gtd").classList.add("overlay")


	let showme ="#con-close-modal-"+ view_id

	 // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

	 $('.mebox').not(showme).hide();

	document.getElementById("create").style.visibility="hidden";
	document.getElementById("update").style.visibility="visible";
	document.getElementById("delete").style.visibility="visible";
	document.getElementById("cancle").style.visibility="visible";
	// const plan =document.getElementById("plan"+view_id);
    //    const plan =plan_select.options[plan_select.selectedIndex].text;
     
    
    document.getElementById("api_mode"+view_id).value=el.dataset.app_mode;
	document.getElementById("test_secret_key"+view_id).value=el.dataset.test_secret_key;
	document.getElementById("test_public_key"+view_id).value=el.dataset.test_public_key;
	document.getElementById("live_secret_key"+view_id).value= el.dataset.live_secret_key;
	document.getElementById("live_public_key"+view_id).value= el.dataset.live_public_key;
    
      
    document.getElementById("user-id").innerHTML="CMT-API-"+ view_id.substring(-5,view_id.length);

     document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";
}

window.updateRecordSettings = (o) =>{

	let linkOfApi = activeUrl + o.dataset.url  +"/"+ o.dataset.id  ;
    const view_id = o.dataset.id;
    const type = o.dataset.type;
    let prePostData = null;
	
	const status_x = document.getElementById("api_mode"+ view_id);
    const api_mode = status_x.options[status_x.selectedIndex].text;


    const test_secret_key = document.getElementById("test_secret_key"+view_id).value;
	const test_public_key = document.getElementById("test_public_key"+view_id).value;
	const live_secret_key = document.getElementById("live_secret_key"+view_id).value;
	const live_public_key = document.getElementById("live_public_key"+view_id).value;
   

    const user =JSON.parse(localStorage.getItem("userToken"));

    prePostData = {
    	test_secret_key,
    	test_public_key,
    	live_public_key,
    	live_secret_key,
    	api_mode,
    	type

    }

   
     
		fetch(linkOfApi, {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	      	console.log(data)
	        if (data.success === "ok") {
	          let modal_view_id = document.getElementsByClassName("mebox");
	          modal_view_id[0].style.display="none";
	          //document.getElementById("gtd").classList.remove("overlay")

	          var notification = alertify.notify('Successful updated ', 'success', 5, function(){  console.log('dismissed'); });
	              window.location.reload();
	         // ApiDeleteOneStatusRecord.redirect(recordOfType);
	        } else {
	          
	          var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      }).catch(e=> console.log(e));
	

}



window.viewCarRecordTemplate = (el)=>{
	let view_id = el.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	modal_view_id.style.display="block";

  localStorage.setItem('carId',el.dataset.id)
	//document.getElementById("gtd").classList.add("overlay")

	let showme ="#con-close-modal-"+ view_id

	 // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

	 $('.mebox').not(showme).hide();

	document.getElementById("create").style.visibility="hidden";
	document.getElementById("update").style.visibility="visible";
	document.getElementById("delete").style.visibility="visible";
	document.getElementById("cancle").style.visibility="visible";


	
	
    // document.getElementById("model"+view_id).value=el.dataset.model;


	document.getElementById("plate_number"+view_id).value=el.dataset.plate_number;
	document.getElementById("car_year"+view_id).value=el.dataset.car_year;
	// document.getElementById("car_type"+view_id).value= el.dataset.car_type;
	document.getElementById("color"+view_id).value= el.dataset.color;

	document.getElementById("description"+view_id).value= el.dataset.description;
	document.getElementById("inspection_detail"+view_id).value= el.dataset.inspection_detail;
    document.getElementById("partner_id"+view_id).value= el.dataset.partner_id;

 document.getElementById("inputLicense"+view_id).value= el.dataset.license;
    //document.getElementById("user-id").innerHTML="CMT-CAR-"+ view_id.substring(-5,view_id.length);
    

    let id= "#status"+ el.dataset.id;
    $( id + " option").each(function () {
        if ($(this).html() == el.dataset.status) {
            $(this).attr("selected", "selected");
            return;
        }
    });

     let id2= "#car_model"+ view_id;
    $( id2 + " option").each(function () {
        if ($(this).html() == el.dataset.model) {
            $(this).attr("selected", "selected");
            return;
        }
    });

     let id4= "#car_model_make"+ view_id;
    $( id4 + " option").each(function () {
        if ($(this).html() == el.dataset.model_make_id) {
            $(this).attr("selected", "selected");
            return;
        }
    });

     let id3= "#car_type"+ view_id;
    $( id3 + " option").each(function () {
        if ($(this).html() == el.dataset.car_type) {
            $(this).attr("selected", "selected");
            return;
        }
    });

    let idz='#drivers'+ view_id;
    $( idz + " option").each(function () {
        
        
        let checkmate = el.dataset.checkmate
        // console.log(checkmate)
       //alert(checkmate)
       //alert($(this).html())
        if ($(this).html() == checkmate ) {
           // alert('yes check mate'+ $(this).html() )
            $(this).attr("selected", "selected");
            return;
        }
    });

     document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";
}

window.updateCarRecordTemplate = (o) =>{

	let linkOfApi = activeUrl + o.dataset.url  +"/"+ o.dataset.id  ;
  const view_id = o.dataset.id;
  const type = o.dataset.type;

  const oldcar = o.dataset.old_car

  console.log(oldcar+ 'heello')

  // alert(oldcar)
  
	
	

	const user =JSON.parse(localStorage.getItem("userToken"));



  const status_x = document.getElementById("status"+ o.dataset.id);

  const model_make = document.getElementById("car_model_make" + o.dataset.id);

  const car_model = document.getElementById("car_model" + o.dataset.id)

   const model_make_id = document.getElementById("car_model_make" + o.dataset.id)

  const color = document.getElementById("color" + o.dataset.id)

   const plate_number = document.getElementById("plate_number" + o.dataset.id)

   const car_year = document.getElementById("car_year" + o.dataset.id)

   const drivers = document.getElementById("drivers" + o.dataset.id)

   const description = document.getElementById("description" + o.dataset.id)

   const license = document.getElementById("inputLicense" + o.dataset.id)

   const partner_id = document.getElementById("partner_id" + o.dataset.id)
      const inspection_detail = document.getElementById("inspection_detail" + o.dataset.id)
      let driv = drivers.options[drivers.selectedIndex].text.split('-')


       let avatar = document.getElementById('image-file'+ o.dataset.id).value ;
   
     
       var fullPath = avatar;
       var filename = fullPath.replace(/^.*[\\\/]/, '');
      

       
 
           
     let images =''
     if(filename.length>0){
       avatar ='https://commute-bucket.s3.amazonaws.com/'+ filename;

       images = avatar;
    
     }
     
     if(avatar.length<=0){
       images = oldcar;
      
     }

    const prePostData = {
      color: color.value,
      model: car_model.options[car_model.selectedIndex].text,
      status: status_x.options[status_x.selectedIndex].text,
      car_type: model_make.options[model_make.selectedIndex].text,
      car_model: car_model.options[car_model.selectedIndex].text,
      model_make_id: model_make_id.options[model_make_id.selectedIndex].text,
      description: description.value,
      car_year: car_year.value,
      assigned_driver_name: driv[0],
      assigned_driver_email: driv[1],
      assigned_driver_phone: drivers.options[drivers.selectedIndex].value,
      partner_id: partner_id.value,
      inspection_detail: inspection_detail.value,
      plate_number: plate_number.value,
      license: license.value,
      assigned_driver_id: drivers.options[drivers.selectedIndex].getAttribute('id'),
      images:images,

    };



    console.log(prePostData)

    


   
     
		fetch(linkOfApi, {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	      	console.log(data)
	        if (data.status==200) {
	          let modal_view_id = document.getElementsByClassName("mebox");
	          modal_view_id[0].style.display="none";
	          //document.getElementById("gtd").classList.remove("overlay")

	          var notification = alertify.notify('Successful updated ', 'success', 5, function(){  console.log('dismissed'); });
	              setTimeout(()=>{
                    window.location.reload();
                },4000)
              
	         // ApiDeleteOneStatusRecord.redirect(recordOfType);
	        } else {
	          
	          var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      }).catch(e=> console.log(e));
	

}



window.viewRecordTemplate = (el)=>{
	window.addMethodTrigger = false;
	let view_id = el.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	modal_view_id.style.display="block";
	//document.getElementById("gtd").classList.add("overlay")

	let showme ="#con-close-modal-"+ view_id

	 // $('.mebox').not($(showme).closest('.mebox')).addClass('noOpacity');

	 $('.mebox').not(showme).hide();



	document.getElementById("create").style.visibility="hidden";
	document.getElementById("update").style.visibility="visible";
	document.getElementById("delete").style.visibility="visible";
	document.getElementById("cancle").style.visibility="visible";
	// const plan =document.getElementById("plan"+view_id);
    //    const plan =plan_select.options[plan_select.selectedIndex].text;
     
    if(document.getElementById("subject"+view_id)){ //tickets

    document.getElementById("date"+view_id).value=el.dataset.date;
    

	document.getElementById("user_id"+view_id).value=el.dataset.username;
	document.getElementById("ticket_id"+view_id).value='CMT-RECORD-'+view_id.substring(-12,view_id.length);
	document.getElementById("subject"+view_id).value=el.dataset.subject;
	document.getElementById("comment"+view_id).value= el.dataset.comment;
	document.getElementById("username"+view_id).value=el.dataset.username;
	//document.getElementById("email"+view_id).value=el.dataset.email;

  let idz2= "#email"+ view_id;
   $(idz2).empty()
  $(idz2).append(`<option>${el.dataset.email}</option>`)
  document.getElementById("email"+view_id).disabled=true



        let id= "#status"+ view_id;
        $( id + " option").each(function () {
            if ($(this).html() == el.dataset.status) {
                $(this).attr("selected", "selected");
                return;
            }
        });


   let idz= "#assigned_to"+ view_id;
        $( idz + " option").each(function () {
            if ($(this).html() == el.dataset.assigned_to) {
                $(this).attr("selected", "selected");
                return;
            }
        });
        

	document.getElementById("phone_number"+view_id).value=el.dataset.phone_number;
	document.getElementById("response"+view_id).value= el.dataset.response;
    }else if(document.getElementById("plate_number"+view_id)){ //sos
    	 document.getElementById("date"+view_id).value=el.dataset.date;
    	 document.getElementById("user_id"+view_id).value= 'CMT-USER-'+el.dataset.user_id;
         document.getElementById("plate_number"+view_id).value=el.dataset.plate_number;
         document.getElementById("media"+view_id).value=el.dataset.media;
         document.getElementById("location"+view_id).value=el.dataset.location;

         document.getElementById("username"+view_id).value=el.dataset.username;
	      document.getElementById("email"+view_id).value=el.dataset.email;
	      document.getElementById("phone_number"+view_id).value=el.dataset.phone_number;

        //alert(el.dataset.media)

	       const right_side_modal_video =`<video style="height:400px; width:100%" id="video-${view_id}" controls><source src="${el.dataset.media}" type="video/webm"></video>`;
	       document.getElementById("video1").innerHTML = right_side_modal_video;

    //      var elements = document.getElementsByTagName("input");
    // for (var ii=0; ii < elements.length; ii++) {
    //   if (elements[ii].type == "text") {
    //     elements[ii].value = "";
    //   }
    // }

	      let id= "#status"+ view_id;
		    $( id + " option").each(function () {
		        if ($(this).html() == el.dataset.status) {
		            $(this).attr("selected", "selected");
		            return;
		        }
		    });

		 let idz= "#assigned_to"+ view_id;
		    $( idz + " option").each(function () {
		        if ($(this).html() == el.dataset.assigned_to) {
		            $(this).attr("selected", "selected");
		            return;
		        }
		    });



     

	
    }else { //faq
       document.getElementById("question"+el.dataset.id).value= el.dataset.question;
       document.getElementById("answers"+el.dataset.id).value= el.dataset.answer;

       let id= "#status"+ view_id;
        $( id + " option").each(function () {
            if ($(this).html() == el.dataset.status) {
                $(this).attr("selected", "selected");
                return;
            }
        });

    }

    document.getElementById("user-id").innerHTML="CMT-RECORD-"+ view_id.substring(-5,view_id.length);

     document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";
}


window.addRecordEvent = (o) =>{
 
  let linkOfApi = activeUrl + o.dataset.url  
   //alert(o.dataset.url)
    const view_id = o.dataset.id;
    let prePostData = null;
    let tickets = false;
    let user_email ='';

    let status =null;
    let status_x = null;
    let response;
  
  const user =JSON.parse(localStorage.getItem("userToken"));
   
   if( document.getElementById("category"+ view_id)){ //tickets


      //create tickets by admin and sen notification







      tickets =true;
      status_x = document.getElementById("status"+ view_id);
      status = status_x.options[status_x.selectedIndex].text;

      const category_x = document.getElementById("category"+ view_id);
      const category = category_x.options[category_x.selectedIndex].text;


      const assigned_to_x = document.getElementById("assigned_to"+ view_id);
      const assigned_to = assigned_to_x.options[assigned_to_x.selectedIndex].text;

       let em = document.getElementById('email'+view_id)

      user_email =  em.options[em.selectedIndex].text 

      if(user_email=='--Select an email user--'){
       var notification = alertify.notify('Select an email', 'error', 5, function(){  console.log('dismissed'); });
       return false
   }     
   response =document.getElementById("response"+view_id).value;                        //document.getElementById("email"+ view_id).value;
      prePostData = {
        subject: document.getElementById('subject'+view_id).value,

      username: document.getElementById("username"+ view_id).value,
      phone_number: document.getElementById("phone_number"+ view_id).value,
      email: em.options[em.selectedIndex].text ,
      status,
      category,
      assigned_to,
      comment: document.getElementById("comment"+ view_id).value,
      createdDate: document.getElementById("date"+ view_id).value,
      response:response,
      };



    }else if(document.getElementById("plate_number"+view_id)){ //sos
      status_x = document.getElementById("status"+ view_id);
      status = status_x.options[status_x.selectedIndex].text;

      prePostData = {
        username: document.getElementById("username"+ view_id).value,
      phone_number: document.getElementById("phone_number"+ view_id).value,
      email: document.getElementById("email"+ view_id).value,
      
      status
      };

    }else{ //faq

    const question =document.getElementById("question"+view_id).value;
       const answer =document.getElementById("answers"+view_id).value
       let status_xx = document.getElementById("status"+ view_id);
      status = status_xx.options[status_xx.selectedIndex].text;
      prePostData = {
      
      question,
      answer,
      status
    
      };

    }

   
   
     
    fetch(linkOfApi, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'x-access-token': user.token,
        },
        body: JSON.stringify(prePostData),
        mode:"cors",
      })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.status === 201) {
            // let modal_view_id = document.getElementsByClassName("mebox");
            // modal_view_id[0].style.display="none";
            //document.getElementById("gtd").classList.remove("overlay")

            var notification = alertify.notify('Successful created.', 'success', 5, function(){  console.log('dismissed'); });
            
               

             if(document.getElementById("category"+ view_id)){



                  let data_msg ="Dear " + user.user.username + " "; 
                 data_msg+=" A Ticket has been created  for you. Your TICKET ID:"+ document.getElementById("ticket_id"+ view_id).value  + "on our platform  and is currently being reviewed by our support team. The status of this ticket is of now" +status; 
                

              
                //console.log("clicked me..." +user_name[0])

                
                  
                  let notification_url ="http://localhost:12000/api/v1/notification"; 
                  
                  let dataNotification = {
                    user_id: user_email,
                    type: 'ticket',
                    description: data_msg,
                   
                    
                  };

                  

                 //craete notification and update status to ongoing
                 postNotification(notification_url,dataNotification);
                     var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
                        snd.play();

                 if(response){

                   let data_msg ="Dear " + user.user.username + " "; 
                 data_msg+=" Following with the reviews of the ticket created initially for the TICKET ID:"+ document.getElementById("ticket_id"+ view_id).value  + "on our platform  and is currently being reviewed by our support team. The status of this ticket is of now" +status; 
                


                  let notification_url ="http://localhost:12000/api/v1/notification"; 
                  
                  let dataNotification = {
                    user_id: user_email,
                    type: 'information',
                    description: data_msg,
                   
                    
                  };

                  

                 //craete notification and update status to ongoing
                 postNotification(notification_url,dataNotification);
                     var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
                        snd.play();

                 }



                 setTimeout(()=>{
                              window.location.reload();
                         },4000)


                



                  


             }
           
              



          } else {
            
            var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

          }
        }).catch(e=> console.log(e));
   


}

window.updateRecordTemplate = (o) =>{
	let linkOfApi = activeUrl + o.dataset.url  +"/"+ o.dataset.id;
    const view_id = o.dataset.id;
    let prePostData = null;
    let tickets = false;

    let status =null;
    let status_x = null;



      //document.getElementById("username").innerHTML= selectOptions_users



     // Map your choices to your option value
        

	
	const user =JSON.parse(localStorage.getItem("userToken"));
   
   if( document.getElementById("category"+ view_id)){ //tickets
   	  tickets =true;
   	  


      status_x = document.getElementById("status"+ view_id);
      status = status_x.options[status_x.selectedIndex].text;


    //   let id= "#email"+ view_id;
    // $( id + " option").each(function () {
    //     if ($(this).html() == el.dataset.email) {
    //         $(this).attr("selected", "selected");
    //         return;
    //     }
    // });

      const category_x = document.getElementById("category"+ view_id);
      const category = category_x.options[category_x.selectedIndex].text;


      const assigned_to_x = document.getElementById("assigned_to"+ view_id);
      const assigned_to = assigned_to_x.options[assigned_to_x.selectedIndex].text;
      let em = document.getElementById('email'+view_id)

      let user_email =  em.options[em.selectedIndex].text 

      if(user_email=='--Select an email user--'){
       var notification = alertify.notify('Select an email', 'error', 5, function(){  console.log('dismissed'); });
       return false
   }                             //document.getElementById("email"+ view_id).value;
      let response =document.getElementById("response"+view_id).value;                        //document.getElementById("email"+ view_id).value;
      prePostData = {
        subject: document.getElementById('subject'+view_id).value,

      username: document.getElementById("username"+ view_id).value,
      phone_number: document.getElementById("phone_number"+ view_id).value,
      email: em.options[em.selectedIndex].text ,
      status,
      category,
      assigned_to,
      comment: document.getElementById("comment"+ view_id).value,
      createdDate: document.getElementById("date"+ view_id).value,
      response:response,
      };
    }else if(document.getElementById("plate_number"+view_id)){ //sos
    	status_x = document.getElementById("status"+ view_id);
      status = status_x.options[status_x.selectedIndex].text;

      prePostData = {
      	username: document.getElementById("username"+ view_id).value,
    	phone_number: document.getElementById("phone_number"+ view_id).value,
    	email: document.getElementById("email"+ view_id).value,
    	
    	status
      };

    }else{ //faq

    const question =document.getElementById("question"+view_id).value;
       const answer =document.getElementById("answers"+view_id).value

       status_x = document.getElementById("status"+ view_id);
      status = status_x.options[status_x.selectedIndex].text;

    	prePostData = {
    	
    	question,
    	answer,
      status
    
      };

    }

   

     
		fetch(linkOfApi, {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	      	console.log(data)
	        if (data.status === 201) {
	          // let modal_view_id = document.getElementsByClassName("mebox");
	          // modal_view_id[0].style.display="none";
	          //document.getElementById("gtd").classList.remove("overlay")

	          var notification = alertify.notify('Successful updated ', 'success', 5, function(){  console.log('dismissed'); });
	          
               

             if(tickets==true){


		              let notification_template = `<div class="media-body">
		                                                    <h5 class="media-heading">Dear ${user.username}, your  ticket with the given id  CMT-RECORD-${view_id.substring(-12,view_id.length)} has been placed.</h5>
		                                                    <p class="m-0">
		                                                        <small>${document.getElementById("response"+view_id).value}</small>
		                                                    </p>
		                                                 </div>` ;
		              let notification_counter = document.getElementById("notifyCount");
		              let notice_board = document.getElementById("notice_board");

		              $("#parent-div").prepend(notification_template);
		       
		              //notification_counter.innerHTML = Number(user.user.notification_count) + 1;

		          
		              //update user notification
		              let linkOfApi2 =  activeUrl + '/notification-update/'+ document.getElementById("email"+ view_id).value;
		              fetch(linkOfApi2, {
					      method: 'PUT',
					      headers: {
					        'Accept': 'application/json',
					        'Content-Type': 'application/json',
					        'x-access-token': user.token,
					      },
					      body: JSON.stringify(prePostData),
					      mode:"cors",
					  }).then(response => response.json())
					    .then(data => {

					    	var snd = new Audio("data:audio/wav;base64,//uQRAAAAWMSLwUIYAAsYkXgoQwAEaYLWfkWgAI0wWs/ItAAAGDgYtAgAyN+QWaAAihwMWm4G8QQRDiMcCBcH3Cc+CDv/7xA4Tvh9Rz/y8QADBwMWgQAZG/ILNAARQ4GLTcDeIIIhxGOBAuD7hOfBB3/94gcJ3w+o5/5eIAIAAAVwWgQAVQ2ORaIQwEMAJiDg95G4nQL7mQVWI6GwRcfsZAcsKkJvxgxEjzFUgfHoSQ9Qq7KNwqHwuB13MA4a1q/DmBrHgPcmjiGoh//EwC5nGPEmS4RcfkVKOhJf+WOgoxJclFz3kgn//dBA+ya1GhurNn8zb//9NNutNuhz31f////9vt///z+IdAEAAAK4LQIAKobHItEIYCGAExBwe8jcToF9zIKrEdDYIuP2MgOWFSE34wYiR5iqQPj0JIeoVdlG4VD4XA67mAcNa1fhzA1jwHuTRxDUQ//iYBczjHiTJcIuPyKlHQkv/LHQUYkuSi57yQT//uggfZNajQ3Vmz+Zt//+mm3Wm3Q576v////+32///5/EOgAAADVghQAAAAA//uQZAUAB1WI0PZugAAAAAoQwAAAEk3nRd2qAAAAACiDgAAAAAAABCqEEQRLCgwpBGMlJkIz8jKhGvj4k6jzRnqasNKIeoh5gI7BJaC1A1AoNBjJgbyApVS4IDlZgDU5WUAxEKDNmmALHzZp0Fkz1FMTmGFl1FMEyodIavcCAUHDWrKAIA4aa2oCgILEBupZgHvAhEBcZ6joQBxS76AgccrFlczBvKLC0QI2cBoCFvfTDAo7eoOQInqDPBtvrDEZBNYN5xwNwxQRfw8ZQ5wQVLvO8OYU+mHvFLlDh05Mdg7BT6YrRPpCBznMB2r//xKJjyyOh+cImr2/4doscwD6neZjuZR4AgAABYAAAABy1xcdQtxYBYYZdifkUDgzzXaXn98Z0oi9ILU5mBjFANmRwlVJ3/6jYDAmxaiDG3/6xjQQCCKkRb/6kg/wW+kSJ5//rLobkLSiKmqP/0ikJuDaSaSf/6JiLYLEYnW/+kXg1WRVJL/9EmQ1YZIsv/6Qzwy5qk7/+tEU0nkls3/zIUMPKNX/6yZLf+kFgAfgGyLFAUwY//uQZAUABcd5UiNPVXAAAApAAAAAE0VZQKw9ISAAACgAAAAAVQIygIElVrFkBS+Jhi+EAuu+lKAkYUEIsmEAEoMeDmCETMvfSHTGkF5RWH7kz/ESHWPAq/kcCRhqBtMdokPdM7vil7RG98A2sc7zO6ZvTdM7pmOUAZTnJW+NXxqmd41dqJ6mLTXxrPpnV8avaIf5SvL7pndPvPpndJR9Kuu8fePvuiuhorgWjp7Mf/PRjxcFCPDkW31srioCExivv9lcwKEaHsf/7ow2Fl1T/9RkXgEhYElAoCLFtMArxwivDJJ+bR1HTKJdlEoTELCIqgEwVGSQ+hIm0NbK8WXcTEI0UPoa2NbG4y2K00JEWbZavJXkYaqo9CRHS55FcZTjKEk3NKoCYUnSQ0rWxrZbFKbKIhOKPZe1cJKzZSaQrIyULHDZmV5K4xySsDRKWOruanGtjLJXFEmwaIbDLX0hIPBUQPVFVkQkDoUNfSoDgQGKPekoxeGzA4DUvnn4bxzcZrtJyipKfPNy5w+9lnXwgqsiyHNeSVpemw4bWb9psYeq//uQZBoABQt4yMVxYAIAAAkQoAAAHvYpL5m6AAgAACXDAAAAD59jblTirQe9upFsmZbpMudy7Lz1X1DYsxOOSWpfPqNX2WqktK0DMvuGwlbNj44TleLPQ+Gsfb+GOWOKJoIrWb3cIMeeON6lz2umTqMXV8Mj30yWPpjoSa9ujK8SyeJP5y5mOW1D6hvLepeveEAEDo0mgCRClOEgANv3B9a6fikgUSu/DmAMATrGx7nng5p5iimPNZsfQLYB2sDLIkzRKZOHGAaUyDcpFBSLG9MCQALgAIgQs2YunOszLSAyQYPVC2YdGGeHD2dTdJk1pAHGAWDjnkcLKFymS3RQZTInzySoBwMG0QueC3gMsCEYxUqlrcxK6k1LQQcsmyYeQPdC2YfuGPASCBkcVMQQqpVJshui1tkXQJQV0OXGAZMXSOEEBRirXbVRQW7ugq7IM7rPWSZyDlM3IuNEkxzCOJ0ny2ThNkyRai1b6ev//3dzNGzNb//4uAvHT5sURcZCFcuKLhOFs8mLAAEAt4UWAAIABAAAAAB4qbHo0tIjVkUU//uQZAwABfSFz3ZqQAAAAAngwAAAE1HjMp2qAAAAACZDgAAAD5UkTE1UgZEUExqYynN1qZvqIOREEFmBcJQkwdxiFtw0qEOkGYfRDifBui9MQg4QAHAqWtAWHoCxu1Yf4VfWLPIM2mHDFsbQEVGwyqQoQcwnfHeIkNt9YnkiaS1oizycqJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
		                    snd.play();

		                    var notification = alertify.notify('Successful notification update', 'success', 5, function(){  console.log('dismissed'); });

		                        
		                     setTimeout(()=>{
		                          window.location.reload();
		                     },3000)
		                      

		                      

					    }).catch(e =>{
		                    var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

					    })


		              


             }
           
              
setTimeout(()=>{
                              window.location.reload();
                         },3000)


	        } else {
	          
	          var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      }).catch(e=> console.log(e));
	 
}




window.addCarRecordEvent = (o) =>{
    let linkOfApi = activeUrl + o.dataset.url ;
    const user =JSON.parse(localStorage.getItem("userToken"));

 
  
    const status_x = document.getElementById("status"+ o.dataset.id);

    const model_make = document.getElementById("car_model_make" + o.dataset.id);

    const car_model = document.getElementById("car_model" + o.dataset.id)

    const color = document.getElementById("color" + o.dataset.id)

    const plate_number = document.getElementById("plate_number" + o.dataset.id)

    const car_year = document.getElementById("car_year" + o.dataset.id)

    const drivers = document.getElementById("drivers" + o.dataset.id)

    const description = document.getElementById("description" + o.dataset.id)

    const license = document.getElementById("inputLicense" + o.dataset.id)

    const partner_id = document.getElementById("partner_id" + o.dataset.id)
    const inspection_detail = document.getElementById("inspection_detail" + o.dataset.id)
    let driv = drivers.options[drivers.selectedIndex].text.split('-')


    let avatar = document.getElementById('image-file'+ o.dataset.id).value ;
   
     
    var fullPath = avatar;
    var filename = fullPath.replace(/^.*[\\\/]/, '');
      

       
 
           
     let images =''
     if(filename.length>0){
       avatar ='https://commute-bucket.s3.amazonaws.com/'+ filename;

       images = avatar;
    
     }
     
     if(avatar.length<=0){
       images = 'https://commute-bucket.s3.amazonaws.com/car1.jpg';
      
     }


    const prePostData = {
      color: color.value,
      model: car_model.options[car_model.selectedIndex].text,
      status: status_x.options[status_x.selectedIndex].text,
      car_type: model_make.options[model_make.selectedIndex].text,
      car_model: car_model.options[car_model.selectedIndex].text,
      description: description.value,
      car_year: car_year.value,
      assigned_driver_name: driv[0],
      assigned_driver_email: driv[1],
      assigned_driver_phone: drivers.options[drivers.selectedIndex].value,
      partner_id: partner_id.value,
      inspection_detail: inspection_detail.value,
      plate_number: plate_number.value,
      license: license.value,
      assigned_driver_id: drivers.options[drivers.selectedIndex].getAttribute('id'),
      images:images

    };



    console.log(prePostData)

  
        fetch(linkOfApi, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': user.token,
            },
            body: JSON.stringify(prePostData),
            mode:"cors",
          })
            .then(response => response.json())
            .then(data => {
              if (data.status === 201) {
                let modal_view_id = document.getElementsByClassName("mebox");
                modal_view_id[0].style.display="none";
                //document.getElementById("gtd").classList.remove("overlay")
                var notification = alertify.notify('Successfully created  user.', 'success', 5, function(){  console.log('dismissed'); });
                    window.location.reload();
               // ApiDeleteOneStatusRecord.redirect(recordOfType);
              } else {
                
                var notification = alertify.notify('Could not perform add operation.', 'error', 5, function(){  console.log('dismissed'); });

              }
            });
 
}



window.addPlanEvent = (o) => {
	let linkOfApi = activeUrl + o.dataset.url ;
	const user =JSON.parse(localStorage.getItem("userToken"));
	const plan =document.getElementById("plan"+o.dataset.id);
	const category =document.getElementById("category"+o.dataset.id)
	const price =document.getElementById("price"+o.dataset.id);
	const description =document.getElementById("description"+o.dataset.id)
	const max_cars =document.getElementById("max_car"+o.dataset.id)
	const status_x = document.getElementById("status"+ o.dataset.id);
 

    const prePostData = {
    	plan_name: plan.options[plan.selectedIndex].text,
    	plan_categories: category.value,
    	price: price.value,
    	description: description.value,
    	max_car: max_cars.value,
    	status: status_x.options[status_x.selectedIndex].text
    };

	const validResult = Validator.validatePlanPost({...prePostData});

    if(validResult){
		fetch(linkOfApi, {
	      method: 'POST',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	        if (data.status === 201) {
	          let modal_view_id = document.getElementsByClassName("mebox");
	          modal_view_id[0].style.display="none";
	          //document.getElementById("gtd").classList.remove("overlay")
	          var notification = alertify.notify('Successfully created  user.', 'success', 5, function(){  console.log('dismissed'); });
	              window.location.reload();
	         // ApiDeleteOneStatusRecord.redirect(recordOfType);
	        } else {
	          
	          var notification = alertify.notify('Could not perform add operation.', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      });
	}else{
		var notification = alertify.notify('unsuccessful add operation.', 'error', 5, function(){  console.log('dismissed'); });

	}

}

window.addPlan = () =>{

	document.getElementById("add-new").addEventListener("click",(e)=>{
      
       document.getElementById("create").style.display="block";
	   document.getElementById("update").style.visibility="hidden";
	   document.getElementById("delete").style.visibility="hidden";
	   document.getElementById("cancle").style.visibility="hidden";

	   $('.mebox').hide();

	   let modal_view_id = document.getElementsByClassName("mebox");
	   modal_view_id[0].style.display="block";
	   //document.getElementById("gtd").classList.add("overlay")

	   var elements = document.getElementsByTagName("input");
		for (var ii=0; ii < elements.length; ii++) {
		  if (elements[ii].type == "text") {
		    elements[ii].value = "";
		  }
		}

	   document.getElementById("first-view").style.display="none";
    document.getElementById("second-view").style.display="block";
	})



}

window.updateData = (o) =>{
    let linkOfApi = activeUrl + o.dataset.url +"/"+ o.dataset.id;
    const user =JSON.parse(localStorage.getItem("userToken"));


   let firstname = document.getElementById("firstname"+ o.dataset.id).value,
      lastname =document.getElementById("lastname"+ o.dataset.id).value,
      username=document.getElementById("username"+ o.dataset.id).value,
      password=document.getElementById("password"+ o.dataset.id).value,
      //passwordConfirm =document.getElementById("confirmpassword"+ o.dataset.id).value,
      phoneNumber= document.getElementById("phone"+ o.dataset.id).value;
   
    const certificate = document.getElementById("certificate"+ o.dataset.id).value;
    var user_typeSelect = document.getElementById('type'+ o.dataset.id);

    //let usergroups_old =  user_typeSelect.dataset.usergroup
    const user_type = user_typeSelect.options[user_typeSelect.selectedIndex].text;
    const email = document.getElementById("email"+ o.dataset.id).value;
    const status_x = document.getElementById("status"+ o.dataset.id);

    let is_verified = false;

    let avatar = document.getElementById('file-input').value ;
    console.log("avatar:" + avatar)

    // 
     var fullPath = avatar;
     var filename = fullPath.replace(/^.*[\\\/]/, '');
     avatar = filename;

     console.log("this pic:" + avatar)

 
           

     if(avatar){

       user.user.profile = avatar;
       document.getElementById("user-profile").src=  user.user.profile;
     }
     var oldProfile = document.getElementById("user-profile").src;
     if(!avatar){
       fullPath = oldProfile;
       filename = fullPath.replace(/^.*[\\\/]/, '');
       avatar = filename;
       user.user.profile =  avatar;  //'https://commute-bucket.s3.amazonaws.com/'+ avatar;
       // avatar = oldProfile;
     }
      

    let isVerified = document.getElementById("is_verified"+o.dataset.id).value;
    is_verified = isVerified;

    const status = status_x.options[status_x.selectedIndex].text;
    let address='';
    let prePostData =null;
    if(document.getElementById("address"+ o.dataset.id)){ //partners
      address = document.getElementById("address"+ o.dataset.id).value;
      let totalCars = document.getElementById("totalCars"+ o.dataset.id).value;

      prePostData ={
      	  firstname,
	      lastname,
	      username,
	      email,
	      password,
	      phoneNumber,
	      avatar,
	      certificate,
	      user_type,
	      status,
	      address,
	      is_verified,
	      totalCars
      };
    }else{
     prePostData ={
      	  firstname,
	      lastname,
	      username,
	      email,
	      password,
	      phoneNumber,
	      avatar,
	      certificate,
	      user_type,
	      status,
	      is_verified
      };

    }

	let view_id = o.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	

    const validResult = Validator.validateSignup({...prePostData});

    if(validResult){
		fetch(linkOfApi, {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	      	console.log(data)
	        if (data.success === "ok") {
	          modal_view_id.style.display="none";
	          var notification = alertify.notify('Successfully updated user ', 'success', 5, function(){  console.log('dismissed'); });
	              window.location.reload();
	         // ApiDeleteOneStatusRecord.redirect(recordOfType);
	        } else {
	          
	          var notification = alertify.notify('Could not perform update operation', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      });
	 }else{
	 	var notification = alertify.notify('unsuccessful update operation', 'error', 5, function(){  console.log('dismissed'); });

	 }


}



//for delete show confirm box first

const ui = {
  confirm: async (message) => createConfirm(message)
}

const createConfirm = (message) => {
  return new Promise((complete, failed)=>{
    $('#confirmMessage').text(message)

    $('#confirmYes').off('click');
    $('#confirmNo').off('click');
    
    $('#confirmYes').on('click', ()=> { $('.confirm').hide(); complete(true); });
    $('#confirmNo').on('click', ()=> { $('.confirm').hide(); complete(false); });
    
    $('.confirm').show();
  });
}

const deleteOperation = async (o) => {
  const confirm = await ui.confirm('Are you sure you want to do this?');
  
  if(confirm){
    deleteData(o)
  } else{
    var notification = alertify.notify('Delete Operation was canceled', 'warning', 5, function(){  console.log('dismissed'); });
    setTimeout(()=>{
    	window.location.reload() 
    },1000)
         
  }
}


window.deleteData = (o)=>{

	
    $('.confirm').hide();
    let linkOfApi;
	if(o.dataset.delete_type){
		linkOfApi = activeUrl + o.dataset.url +"/"+ o.dataset.id+ "/delete" + "/"+ o.dataset.delete_type;
	}else{
		linkOfApi = activeUrl + o.dataset.url +"/"+ o.dataset.id+ "/delete";
	}
	
    const user =JSON.parse(localStorage.getItem("userToken"));
    let view_id = o.dataset.id;
	let modal_view_id = document.getElementById("con-close-modal-"+ view_id);
	

    fetch(linkOfApi, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode:"cors",
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 202) {
          modal_view_id.style.display="none";
          //document.getElementById("gtd").classList.remove("overlay")
          var notification = alertify.notify('Successful delete operation', 'success', 5, function(){  console.log('dismissed'); });
          
              window.location.reload();
        } else {
          var notification = alertify.notify('Could not perform delete operation', 'error', 5, function(){  console.log('dismissed'); });
        }
      });

    

}

window.deleteRecord = (o) =>{
    var p=o.parentNode.parentNode;
    p.parentNode.removeChild(p);
    //deleteData(o);
    deleteOperation(o)

}


const profileUpdate = (o)=>{
	const {prePostData, url, id} = o.dataset;
   let linkOfApi = activeUrl + url +"/"+ id;
    const user =JSON.parse(localStorage.getItem("userToken"));
    
    const validResult = Validator.validateSignup({...prePostData});

    if(validResult){
		fetch(linkOfApi, {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	        'x-access-token': user.token,
	      },
	      body: JSON.stringify(prePostData),
	      mode:"cors",
	    })
	      .then(response => response.json())
	      .then(data => {
	      	console.log(data)
	        if (data.success === "ok") {
	         
	          var notification = alertify.notify('Successfully updated user profile ', 'success', 5, function(){  console.log('dismissed'); });
	 
	         // ApiDeleteOneStatusRecord.redirect(recordOfType);

	         
    window.location.reload();
	        } else {
	          
	          var notification = alertify.notify('Could not perform update profile operation', 'error', 5, function(){  console.log('dismissed'); });

	        }
	      });
	 }else{
	 	var notification = alertify.notify('unsuccessful update operation', 'error', 5, function(){  console.log('dismissed'); });

	 }
}

function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  table = document.getElementById("tablebody1");
  tr = table.getElementsByTagName("tr");
  console.log("working")
  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}



class ApiAdminBotService  {

  static goBackFor(){

  	let documentDom = document;
  	 $('.mebox').hide();
    documentDom.addEventListener(
      'click',
      e => {
        if (e.target.classList.contains("gobackFor")) {
          window.history.back()

    	  //hide all other modal
        }
      },
      false,
    );

  }
  static goBack(){
  	let documentDom = document;
  	 $('.mebox').hide();
    documentDom.addEventListener(
      'click',
      e => {
        if (e.target.classList.contains("goback")) {
          console.log('we are here')
          document.getElementById("first-view").style.display="block";
    	  document.getElementById("second-view").style.display="none";

    	  //hide all other modal
        }
      },
      false,
    );
  }
  static changeView(){
    document.getElementById("close-id").addEventListener("click", (e)=>{
    	document.getElementById("first-view").style.display="block";
    	document.getElementById("second-view").style.display="none";
    });

  }
  constructor() {
  	
  
  }

  static getBothRecord() {}



  static runDashboard(users,partners,drivers,cars,tickets, itineraries, todaySales,yesterdaysSales,weeklySales,lastMonth){
    
    // WarLockAdmin('view_dashboard')
    GateKeepersForAdmin();

    console.log(todaySales)
//    alert(todaySales)
   

    

    document.getElementById("total-sales").innerHTML='₦'+ todaySales;
    document.getElementById("yesterday").innerHTML='₦'+ yesterdaysSales;
    document.getElementById("last-week").innerHTML='view payments'
    document.getElementById("last-mth").innerHTML='view wallet transactions'


  	
  	
  	const totalUsers = [...new Set(users)].length;
  	document.getElementById("user-total").innerHTML = totalUsers;
  	const totalPartners = [...new Set(partners)].length;
  	document.getElementById("partners-total").innerHTML = totalPartners;
  	const totalDrivers = [...new Set(drivers)].length;
  	document.getElementById("drivers-total").innerHTML = totalDrivers;
  	const totalCars = [...new Set(cars)].length;
  	document.getElementById("cars-total").innerHTML = totalCars;
  	const ticketList = [...new Set(tickets)];
  	const totalItineraries = [...new Set(itineraries)];


  	console.log(JSON.stringify(todaySales)+ "sales of today");

  	//let today = document.getElementById("todays-sales")



 //  	console.log(totalItineraries)
    
 //    //todays date
 //    var today = new Date();
	// var dd = String(today.getDate()).padStart(2, '0');
	// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	// var yyyy = today.getFullYear();

	// today = mm + '/' + dd + '/' + yyyy;
	// //document.write(today);


 //    //yesterdays date
 //  	let yesterdaysDate = new Date(new Date().setDate(new Date().getDate() - 1));
  	

 //  	//lastWeeksDate
 //  	var d = new Date();           // <- Get the current date
 //    d.setDate(d.getDate() - 7);   // <- Substract 7 days

 //    var year = d.getFullYear(),
 //    month = ('00' + (d.getMonth() + 1)).slice(-2),
 //    day = ('00' + d.getDate()).slice(-2);

 //    var formattedDate = year + '/' + month + '/' + day;



  	// const totalRevenues = datas;
  	// const yesterdaySales = datas;
  	// const lastWeekSales = datas;
  	// const lastMonthSales = datas;
  	

  	const tablebody1 = document.getElementById('tablebody1');
  	const tablebody2 = document.getElementById('tablebody2');
  	let viewModals ='';
  	let eachRecord ='';
  	// const tablebody3 = document.getElementById('total');

  	let template1 ='', template2 ='', template3 ='';

  	totalItineraries.map((item, i) => {            
        
    
        let className='';

        if(item.status=="Ongoing"){
                             
                className=`label-danger`;
         }else if(item.status=="Completed"){
                          
                className= `label-success`;
        }else{
                            
              className=`label-warning`;
         }
        eachRecord = `
                          <tr id="${i}">
                                <td>${formatDate(new Date(item.created_at))} </td>
                                 <td>${item.username}</td>
                                  <td>${item.email}</td>
                          <td>${item.plan_category}</td>
                          <td>${item.start_location} </td>
                          <td>${item.destination}</td>
                            
                            <td><span class="label label-table ${className}" >${item.status}</span></td>
                                                                               
                         </tr>`; 
        tablebody1.insertAdjacentHTML('beforeend', eachRecord); 
   });
       
    //const modalbody1 = document.getElementById("modalbody1");
    
    

  	ticketList.map((item, i) => { 
  		let className = "label-success"
  	    if(item.status=="Active"){
           className = "label-success"
  	    }else{
           className = "label-warning"
  	    }           
        template2 =`<tr>
                         <td><a onclick="viewPlan(this)" href="#" id="plancat${item._id}" data-id="${item._id}" data-url="/admin-ticket-detail" class=""><b>${formatDate(new Date(item.created_at))} </b></a> </td>
                          
                          <td>CMT-USER- ${item.user_id}</td>
                           <td>${item.category}</td>
 
                           <td class="">${item.comment}</td>
                           <td class="">${item.subject}</td>
                           <td class="">CMT-RECORD-${item._id.substring(-12,item._id.length)}</td>
                           <td><span class="label ${className}">${item.status}</span></td>
                           
                   </tr>`;

      

        tablebody2.insertAdjacentHTML('beforeend', template2);
    });

    //modalbody1.innerHTML=viewModals;
  

  }
   
  static runAdminUsers(datas){
    //
    WarLockAdmin('view_users','manage_users')
    noReadWrite('manage_users')
    GateKeepersForAdmin();
    addClick() 

    
    document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })
    
    	console.log("loading users page")

    let template2 ='';
    let viewModals = '';
    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");

  	if(datas.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }
  	

  	datas.map((item, i) => { 
  	    let className = "label-success"
  	    if(item.status=="Active"){
           className = "label-success"
  	    }else if(item.status=="Disabled"){
           className = "label-warning"
  	    } else if(item.status=="Suspended"){
  	    	className = "label-danger"
  	    } else{
  	    	className="label-pink"
  	    }         
        template2 +=`<tr>
                    <td class="">${item.firstname}</td>
                    <td class="">${item.lastname}</td>
                    <td class="">${item.email}</td>
                    <td class="">${item.phone_number}</td>
                    <td class="">${item.test_certificate}</td>
                    <td class=""><span class="label ${className}">${item.status}</span></td>
                    
                    
                    <td class=""><a href="#" data-roles="${item.roles}" onclick="updateRecordView(this)" data-isVerified="${item.isVerified}" data-avatar="https://commute-bucket.s3.amazonaws.com/${item.avatar}"  data-id="${item._id}" data-firstname="${item.firstname}" data-username="${item.username}" data-lastname="${item.lastname}" data-email="${item.email}" data-phone="${item.phone_number}" data-status="${item.status}" data-certificate="${item.test_certificate}"  class="table-action-btn"><i class="md md-edit"></i></a>
                    <a href="#" onclick="deleteRecord(this)" data-id="${item._id}" data-url="/users"  class="table-action-btn "><i class="md md-close"></i></a></td>
                </tr>`;
        

         viewModals += `

        <div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar" > 
                                            <div class=""> 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">User Detail</h4> 
                                                </div> 
                                                <div class=""> 
                                                    <div class="row"> 


                                                    <div class="form-group" style="">
                                        <label for="profileImage" class="col-sm-4 control-label"></label>
                                        <div class="col-sm-7">
                                           <input type="hidden" id="avatar-url" name="avatar-url" defaultValue="./public/assets/images/avatar.png"  />
                                            <img  id="preview" style="border:1px solid gray;width:100px" src="./public/assets/images/avatar.png" alt="Avatar" class="avatar" />
                                             <p id="status">Please select a file</p>  

                                               
                                             

                                                  <div class="upload-btn-wrapper">

                                                      <input onchange="initUpload()" type="file" name="myfile" id="file-input"  />
                                                       <label htmlFor="myfile"><img src="/public/assets/images/camera.png"  style="width:50px;height:50px" id="clickme" />
                                                       </label>
                                                      
                                                    </div>

                                            <ul  id="displayImages"></ul>

                                        </div>
                                    </div>  </div>
                                    <br/>

                                        



                                    
                                   
                                                       
                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 

                                                            <div class="form-group ">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Active</option>
									                            <option>Disabled</option>
									                            <option>Suspended</option>
									                            <option>Dormant</option>
									                        </select>
									                        </div>


									                        <div class="form-group"> 
                                                                <label for="field-1" class="control-label">First Name</label> 
                                                                <input type="text" class="form-control" id="firstname${item._id}" placeholder="Doe">
                                                            </div> 

									                        <div class="form-group"> 
                                                                <label for="field-2" class="control-label">Last Name</label> 
                                                                <input type="text" class="form-control" id="lastname${item._id}" placeholder="Doe"> 
                                                            </div> 


                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Email</label> 
                                                                <input type="text" class="form-control" id="email${item._id}" placeholder="Address"> 
                                                            </div> 

                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Username</label> 
                                                                <input type="text" class="form-control" id="username${item._id}" placeholder="Address"> 
                                                            </div> 

                                                            


                                                          
                                                           
									                   
                                                           
                                                            <div class="form-group ">
									                        <label for="position">User Type</label>
									                        <select id="type${item._id}" class="form-control" data-style="btn-white">
									                            <option>Individual</option>
									                            <option>Corporate</option>
									                            
									                        </select>
									                        </div>


									                        
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">User certificate</label> 
                                                                <input type="text" class="form-control" id="certificate${item._id}" placeholder="Boston"> 
                                                                  <div><a href="#" onclick="genCert(this)" data-id="${item._id}"  >Generate Test Certificate</a></div>
                                                            </div> 
                                                         

                                                         
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Phone</label> 
                                                                <input type="text" class="form-control" id="phone${item._id}" placeholder="United States"> 
                                                            </div> 
                                                     

                                                        
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Password</label> 
                                                                <input value="unchanged" type="password" class="form-control" id="password${item._id}" placeholder="United States"> 
                                                            </div> 
                                                      
                                                        
                                                        
                                                        
                                                             <div class="checkbox checkbox-primary"> 
                                                                 
                                                                <input data-id="${item._id}" onchange="update_value_checked(this)" data-url="/admin-users-detail-verification" type="checkbox" class="" id="is_verified${item._id}" value="false"> 
                                                                <label for="field-3" class="control-label">User Verification  </label>
                                                            </div> 
                                                       
                                                        

                                                        </div> 
                                                    </div> 
                                                    <div class="row"> 
                                                        
                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button onclick="addEvent(this)" data-id="${item._id}" data-url="/admin-add-user" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateData(this)" data-id="${item._id}" data-url="/admin-users-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;
    });

    modalbody1.innerHTML=viewModals;
    tablebody1.insertAdjacentHTML('beforeend', template2);
    

    
  }

  static runAdminAdmins(datas){

  WarLockAdmin('view_admins','manage_admins')
      noReadWrite('manage_admins')
   GateKeepersForAdmin();
   addClick() 
   document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })

   let new_rolesSet = datas[0].usergroup_set;

   let roles_option = ``;

   new_rolesSet.map((item)=>{
     roles_option+=`<option>${item}</item>`
   })
    
    	console.log("loading users page")

    let template2 ='';
    let viewModals = '';
    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");

  	if(datas.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }
  	
    
    
  	datas.map((item, i) => { 
  		let className = "Active";
  	if(item.status=="Active"){
           className = "label-success"
  	    }else if(item.status=="Disabled"){
           className = "label-warning"
  	    } else if(item.status=="Suspended"){
  	    	className = "label-danger"
  	    } else{
  	    	className="label-pink"
  	    }            
        template2 +=`<tr class="notification">
                    <td class="">${item.firstname}</td>
                    <td class="">${item.lastname}</td>
                    <td class="">${item.email}</td>
                    <td class="">${item.phone_number}</td>
                  
                    <td class=""><span class="label ${className}">${item.status}</span></td>
                                       
                    <td class=""><a onclick="updateRecordView(this)" data-roles="${item.roles}" data-toggle="modal" data-isVerified="${item.isVerified}" data-avatar="https://commute-bucket.s3.amazonaws.com/${item.avatar}"  data-id="${item._id}" data-username="${item.username}" data-firstname="${item.firstname}" data-lastname="${item.lastname}" data-username="${item.username}" data-email="${item.email}" data-phone="${item.phone_number}" data-status="${item.status}" data-certificate="${item.test_certificate}"  class="table-action-btn"><i class="md md-edit"></i></a>
                    <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/admins"  class="table-action-btn "><i class="md md-close"></i></a></td>
                </tr>`;
        

         viewModals += `

        <div style="display:none"  id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class=" slimScrollBar" > 
                                            <div class=""> 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Admin User Detail</h4> 
                                                </div> 
                                               <div class=""> 
                                                    <div class="row"> 


                                                    <div class="form-group" style="">
                                        <label for="profileImage" class="col-sm-4 control-label"></label>
                                        <div class="col-sm-7">
                                           <input type="hidden" id="avatar-url" name="avatar-url" defaultValue="./public/assets/images/avatar.png"  />
                                            <img  id="preview" style="border:1px solid gray;width:100px" src="./public/assets/images/avatar.png" alt="Avatar" class="avatar" />
                                             <p id="status">Please select a file</p>  

                                               
                                             

                                                  <div class="upload-btn-wrapper">

                                                      <input onchange="initUpload()" type="file" name="myfile" id="file-input"  />
                                                       <label htmlFor="myfile"><img src="/public/assets/images/camera.png"  style="width:50px;height:50px" id="clickme" />
                                                       </label>
                                                      
                                                    </div>

                                            <ul  id="displayImages"></ul>

                                        </div>
                                    </div>  </div>
                                    <br/>


                                    
                                                         
                                                            <div class="form-group"> 
                                                                <label for="field-1" class="control-label">Name</label> 
                                                                <input type="text" class="form-control" id="firstname${item._id}" placeholder="Doe">
                                                            </div> 
                                                        
                                                        
                                                            <div class="form-group"> 
                                                                <label for="field-2" class="control-label">Surname</label> 
                                                                <input type="text" class="form-control" id="lastname${item._id}" placeholder="Doe"> 
                                                            </div> 
                                                     
                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 
                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Email</label> 
                                                                <input type="text" class="form-control" id="email${item._id}" placeholder="Address"> 
                                                            </div> 

                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Username</label> 
                                                                <input type="text" class="form-control" id="username${item._id}" placeholder="Address"> 
                                                            </div> 


                                                          
                                                           <div class="form-group ">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Active</option>
									                            <option>Disabled</option>
									                            <option>Suspended</option>
									                             <option>Dormant</option>
									                        </select>
									                        </div>
									                   
                                                           
                                                             <div class="form-group ">
									                        <label for="position">User Role</label>
									                        <select id="type${item._id}" class="form-control" data-style="btn-white" data-usergroups="${new_rolesSet}">
									                            ${roles_option}
									                        </select>
									                        </div>

                                                        </div> 
                                                    </div> 
                                                    <div class="row"> 
                                                        

                                                         
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Phone</label> 
                                                                <input type="text" class="form-control" id="phone${item._id}" placeholder="United States"> 
                                                            </div> 
                                                    

                                                     
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Password</label> 
                                                                <input value="unchanged" type="password" class="form-control" id="password${item._id}" placeholder="United States"> 
                                                            </div> 
                                                   

                                                           

                                                               <div class="checkbox checkbox-primary"> 
                                                                 
                                                                <input data-id="${item._id}" onchange="update_value_checked(this)" data-url="/admin-admins-detail-verification" type="checkbox" class="" id="is_verified${item._id}" value="false"> 
                                                                <label for="field-3" class="control-label">User Verification  </label>
                                                            </div> 
                                                         
                                                         
                                                        
                                                        

                                                     
                                                            <div class="form-group"> 
                                                                 
                                                                <input type="hidden" class="form-control" id="certificate${item._id}" placeholder="Boston"> 
                                                            </div> 
                                                       
                                                             



                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                
                                                <div class="modal-footer">
                                                <button id="create" onclick="addEvent(this)" data-id="${item._id}" data-url="/add-admin" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateData(this)" data-id="${item._id}" data-url="/admin-admins-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;
    });

    modalbody1.innerHTML=viewModals;
    tablebody1.insertAdjacentHTML('beforeend', template2);
    

   
  }

   

  static runAdminDrivers(datas,carsAvailable){
   GateKeepersForAdmin();
   WarLockAdmin('view_drivers','manage_drivers')
       noReadWrite('manage_drivers')
   addClick()
   document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })
    
    	console.log("loading users page")

    let template2 ='';
    let viewModals = '';
    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");

  	if(datas.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }
  	
    
    let className = null;
  	datas.map((item, i) => {   
  	   if(item.status=="Active"){
           className = "label-success"
  	    }else if(item.status=="Disabled"){
           className = "label-warning"
  	    } else if(item.status=="Suspended"){
  	    	className = "label-danger"
  	    } else{
  	    	className="label-pink"
  	    }          
        template2 +=`<tr class="notification">
                    <td class="">${item.firstname}</td>
                    <td class="">${item.lastname}</td>
                    <td class="">${item.email}</td>
                    <td class="">${item.phone_number}</td>
                    <td class="">${item.test_certificate}</td>
                    <td class=""><span class="label ${className}">${item.status}</span></td>
                                                        
                    <td class=""><a data-roles="${item.roles}" onclick="updateRecordView(this)" data-toggle="modal" data-isVerified="${item.isVerified}" data-avatar="https://commute-bucket.s3.amazonaws.com/${item.avatar}"  data-id="${item._id}"  data-username="${item.username}" data-firstname="${item.firstname}" data-lastname="${item.lastname}" data-email="${item.email}" data-phone="${item.phone_number}" data-status="${item.status}" data-certificate="${item.test_certificate}"  class="table-action-btn"><i class="md md-edit"></i></a>
                    <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/drivers"  class="table-action-btn "><i class="md md-close"></i></a></td>
                </tr>`;
        

         viewModals += `

        <div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar"> 
                                            <div class=""> 
                                                <div class="modal-header"> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Driver User Detail</h4> 
                                                </div> 
                                                <div class=""> 
                                                    <div class="row"> 

                                                     <br/><br/>
                                                    <div class="form-group" style="">
                                        <label for="profileImage" class="col-sm-4 control-label"></label>
                                        <div class="col-sm-7">
                                           <input type="hidden" id="avatar-url" name="avatar-url" defaultValue="./public/assets/images/avatar.png"  />
                                            <img  id="preview" style="border:1px solid gray;width:100px" src="./public/assets/images/avatar.png" alt="Avatar" class="avatar" />
                                             <p id="status">Please select a file</p>  

                                               
                                             

                                                  <div class="upload-btn-wrapper">

                                                      <input onchange="initUpload()" type="file" name="myfile" id="file-input"  />
                                                       <label htmlFor="myfile"><img src="/public/assets/images/camera.png"  style="width:50px;height:50px" id="clickme" />
                                                       </label>
                                                      
                                                    </div>

                                            <ul  id="displayImages"></ul>

                                        </div>
                                    </div>  </div>
                                    <br/>
                                                        
                                                            <div class="form-group"> 
                                                                <label for="field-1" class="control-label">Name</label> 
                                                                <input type="text" class="form-control" id="firstname${item._id}" placeholder="Doe">
                                                            </div> 
                                                  
                                                       
                                                            <div class="form-group"> 
                                                                <label for="field-2" class="control-label">Last Name</label> 
                                                                <input type="text" class="form-control" id="lastname${item._id}" placeholder="Doe"> 
                                                           
                                                        </div> 
                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 
                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Email</label> 
                                                                <input type="text" class="form-control" id="email${item._id}" placeholder="Address"> 
                                                            </div> 

                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Username</label> 
                                                                <input type="text" class="form-control" id="username${item._id}" placeholder="Address"> 
                                                            </div> 


                                                          
                                                           <div class="form-group ">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Active</option>
									                            <option>Disabled</option>
									                            <option>Suspended</option>
									                            <option>Dormant</option>
									                        </select>
									                        </div>
									                   
                                                           
                                                            <div class="form-group ">
									                        <label for="position">User Type</label>
									                        <select id="type${item._id}" class="form-control" data-style="btn-white">
									                            <option>Commute Driver</option>
									                            <option>Individual Driver</option>
									                            <option>Other Organization Driver</option>
									                        </select>
									                        </div>


									                             <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Assigned Cars/Plate No</label> 
                                                                <input type="text" class="form-control" id="certificate${item._id}" placeholder="Boston"> 
                                                            </div> 
                                                       

                                                       
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Phone</label> 
                                                                <input type="text" class="form-control" id="phone${item._id}" placeholder="United States"> 
                                                            </div> 
                                                       

                                                        
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Password</label> 
                                                                <input value="unchanged" type="password" class="form-control" id="password${item._id}" placeholder="United States"> 
                                                            </div> 
                                                      

                                                        
                                                             <div class="checkbox checkbox-primary"> 
                                                                 
                                                                <input data-id="${item._id}" data-url="/admin-drivers-detail-verification" onchange="update_value_checked(this)" type="checkbox" class="" id="is_verified${item._id}" value="false"> 
                                                                <label for="field-3" class="control-label">User Verification  </label>
                                                            </div> 
                                                       
                                                        


                                                        </div> 
                                                    </div> 
                                                    <div class="row"> 
                                                        
                                                       

                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button id="create" onclick="addEvent(this)" data-id="${item._id}" data-url="/add-driver" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateData(this)" data-id="${item._id}" data-url="/admin-drivers-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;
    });

    modalbody1.innerHTML=viewModals;
    tablebody1.insertAdjacentHTML('beforeend', template2);
    
    
  }

  static runAdminPartners(datas){

WarLockAdmin('view_partners','manage_partners')
    noReadWrite('manage_partners')

    GateKeepersForAdmin();
    addClick()
   document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })
    
    
    	console.log("loading users page")

    let template2 ='';
    let viewModals = '';
    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");

  	if(datas.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }
  	
    let className = null;
  	datas.map((item, i) => {    
  	    if(item.status=="Active"){
           className = "label-success"
  	    }else if(item.status=="Disabled"){
           className = "label-warning"
  	    } else if(item.status=="Suspended"){
  	    	className = "label-danger"
  	    } else{
  	    	className="label-pink"
  	    }         
        template2 +=`<tr class="notification">
                    <td class="">${item.firstName}</td>
                    <td class="">${item.lastName}</td>
                    <td class="">${item.email}</td>
                    <td class="">${item.phoneNumber}</td>
                    <td class="">${item.totalCars}</td>
                    <td class=""><span class="label ${className}">${item.status}</span></td>
                    
                    <td class=""><a onclick="updateRecordView(this)" data-toggle="modal" data-isVerified="${item.isVerified}" data-totalCars="${item.totalCars}"  data-avatar="https://commute-bucket.s3.amazonaws.com/${item.avatar}"   data-id="${item._id}" data-totalCars="${item.totalCars}" data-firstname="${item.firstName}" data-lastname="${item.lastName}" data-email="${item.email}" data-phone="${item.phoneNumber}" data-username="${item.userName}" data-address="${item.address}" data-status="${item.status}" data-certificate="${item.businessName}"  class="table-action-btn"><i class="md md-edit"></i></a>
                    <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/partners"  class="table-action-btn "><i class="md md-close"></i></a></td>
                </tr>`;
        

         viewModals += `

        <div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class=" slimScrollBar" > 
                                            <div class=""> 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Partners Detail</h4> 
                                                </div> 
                                                <div class=""> 
                                                    <div class="row"> 


                                                    <div class="form-group" style="">
                                        <label for="profileImage" class="col-sm-4 control-label"></label>
                                        <div class="col-sm-7">
                                           <input type="hidden" id="avatar-url" name="avatar-url" defaultValue="./public/assets/images/avatar.png"  />
                                            <img  id="preview" style="border:1px solid gray;width:100px" src="./public/assets/images/avatar.png" alt="Avatar" class="avatar" />
                                             <p id="status">Please select a file</p>  

                                               
                                             

                                                  <div class="upload-btn-wrapper">

                                                      <input onchange="initUpload()" type="file" name="myfile" id="file-input"  />
                                                       <label htmlFor="myfile"><img src="/public/assets/images/camera.png"  style="width:50px;height:50px" id="clickme" />
                                                       </label>
                                                      
                                                    </div>

                                            <ul  id="displayImages"></ul>

                                        </div>
                                    </div>  </div>
                                    <br/>
                                                     <div class="col-md-12"> 
                                                           <div class="form-group ">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Active</option>
									                            <option>Disabled</option>
									                            <option>Suspended</option>
									                             <option>Dormant</option>
									                        </select>
									                        </div>
									                   

                                                            <div class="form-group"> 
                                                                <label for="field-1" class="control-label">Name</label> 
                                                                <input type="text" class="form-control" id="firstname${item._id}" placeholder="Doe">
                                                            </div> 
                                                        
                                                         
                                                            <div class="form-group"> 
                                                                <label for="field-2" class="control-label">Surname</label> 
                                                                <input type="text" class="form-control" id="lastname${item._id}" placeholder="Doe"> 
                                                            </div>

                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Business Name</label> 
                                                                <input type="text" class="form-control" id="certificate${item._id}" placeholder="Boston"> 
                                                            </div> 
                                                        
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Phone</label> 
                                                                <input type="text" class="form-control" id="phone${item._id}" placeholder="United States"> 
                                                            </div> 
                                                        
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Password</label> 
                                                                <input value="unchanged" type="text" class="form-control" id="password${item._id}" placeholder="United States"> 
                                                            </div> 
                                                        
                                                             <div class="checkbox checkbox-primary"> 
                                                                 
                                                                <input data-id="${item._id}" data-url="/admin-partners-detail-verification"  onchange="update_value_checked(this)" type="checkbox" class="" id="is_verified${item._id}" value="false"> 
                                                                <label for="field-3" class="control-label">User Verification  </label>
                                                            </div> 


                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Email</label> 
                                                                <input type="text" class="form-control" id="email${item._id}" placeholder="email"> 
                                                            </div> 

                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Username</label> 
                                                                <input type="text" class="form-control" id="username${item._id}" placeholder="username"> 
                                                            </div> 

                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Address</label> 
                                                                

                                                            <textarea class="form-control autogrow" id="address${item._id}" placeholder="Give an office address" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 


                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Number of Cars</label> 
                                                                <input type="number" class="form-control" id="totalCars${item._id}" placeholder="0"> 
                                                            </div>
                                                          
                                                           
                                                           
                                                            <div class="form-group " style="display:none">
									                        <label for="position">User Role</label>
									                        <select id="type${item._id}" class="form-control" data-style="btn-white">
									                            <option> Individual Partner</option>
									                            <option>Organizational Partner</option>
									                            
									                        </select>
									                        </div>

                                                        
                                                         
                                                          </div> 
                                                    </div> 

                                                     
                                                     
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button onclick="addEvent(this)" data-id="${item._id}" data-url="/add-partner" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                      <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateData(this)" data-id="${item._id}" data-url="/admin-partners-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;
    });

    modalbody1.innerHTML=viewModals;
    tablebody1.insertAdjacentHTML('beforeend', template2);
    
   
  }

  static runAdminProfile(datas){
  	GateKeepersForAdmin();
    let viewModals ="";
  	const user = JSON.parse(localStorage.getItem("userToken"))
    const modalbody1 = document.getElementById("modalbody1");
  	console.log(datas[0]);

    datas.map((item,i) =>{


  	         viewModals += `

        <div  id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class=" slimScrollBar" > 
                                            <div class=""> 
                                                <div class=""> 
                                                    
                                                    <h4 class="modal-title">Admin Profile Detail</h4> 
                                                </div> 
                                               <div class=""> 
                                                    <div class="row"> 

                                                    <div class="form-group" style="">
                                        <label for="profileImage" class="col-sm-4 control-label"></label>
                                        <div class="col-sm-7">
                                           <input type="hidden" id="avatar-url" name="avatar-url" defaultValue="./public/assets/images/avatar.png"  />
                                            <img  id="preview" style="border:1px solid gray;width:100px" src="./public/assets/images/avatar.png" alt="Avatar" class="avatar" />
                                             <p id="status">Please select a file</p>  

                                               
                                             

                                                  <div class="upload-btn-wrapper">

                                                      <input onchange="initUpload()" type="file" name="myfile" id="file-input"  />
                                                       <label htmlFor="myfile"><img src="/public/assets/images/camera.png"  style="width:50px;height:50px" id="clickme" />
                                                       </label>
                                                      
                                                    </div>

                                            <ul  id="displayImages"></ul>

                                        </div>
                                    </div>  </div>
                                    <br/>
                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-1" class="control-label">Name</label> 
                                                                <input type="text" class="form-control" id="firstname" placeholder="Doe">
                                                            </div> 
                                                        </div> 
                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-2" class="control-label">Surname</label> 
                                                                <input type="text" class="form-control" id="lastname" placeholder="Doe"> 
                                                            </div> 
                                                        </div> 
                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 
                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Email</label> 
                                                                <input type="text" class="form-control" id="email" placeholder="Address"> 
                                                            </div> 

                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Username</label> 
                                                                <input type="text" class="form-control" id="username" placeholder="Address"> 
                                                            </div> 


                                                          
                                            
                                                           
                                                             <div class="form-group ">
									                        <label for="position">User Role</label>
									                        <select id="type" class="form-control" data-style="btn-white">
									                            <option>Simple Admin</option>
									                            <option>Moderator Admin</option>
									                            <option>Super Admin</option>
									                        </select>
									                        </div>

                                                        </div> 
                                                    </div> 
                                                    <div class="row"> 
                                                        

                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Phone</label> 
                                                                <input type="text" class="form-control" id="phone" placeholder="United States"> 
                                                            </div> 
                                                        </div>

                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Password</label> 
                                                                <input value="unchanged" type="password" class="form-control" id="password" placeholder="United States"> 
                                                            </div> 
                                                        </div> 


                                                         <div class=""> 
                                                             <div class="checkbox checkbox-primary"> 
                                                                 
                                                                <input data-id="${item._id}" data-url="/admin-profile-detail-verification"  onchange="update_value_checked(this)" type="checkbox" class="" id="is_verified${item._id}" value="false"> 
                                                                <label for="field-3" class="control-label">User Verification  </label>
                                                            </div> 
                                                         </div> 
                                                        
                                                        

                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                 
                                                                <input type="hidden" class="form-control" id="certificate" placeholder="Boston"> 
                                                            </div> 
                                                        </div> 


                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                
                                                <div class="modal-footer">
                                                <button disabled id="create" onclick="addEvent(this)" data-id="${item._id}" data-url="/add-profile" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button disabled onclick="deleteData(this)" data-id="${item._id}" data-url="/admins-profile" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button id="update-profile"  data-id="${item._id}" data-url="/admin-profile-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;
    
    })
    modalbody1.innerHTML=viewModals;


     let firstname = document.getElementById("firstname"),
      lastname =document.getElementById("lastname"),
      username=document.getElementById("username"),
      password=document.getElementById("password"),
      
      phoneNumber= document.getElementById("phone");
   
    const certificate = document.getElementById("certificate");
    var user_typeSelect = document.getElementById('type');
    const user_type = user_typeSelect.options[user_typeSelect.selectedIndex].text;
    const email = document.getElementById("email");

    let idz= "#status";
    $( idz + " option").each(function () {
        if ($(this).html() == datas[0].status) {
            $(this).attr("selected", "selected");
            return;
        }
    });



    const data = datas[0];
    firstname.value =data.firstname;
    lastname.value = data.lastname;
    username.value= data.username;
    email.value= data.email;
    phoneNumber.value= data.phone_number
    password.value="unchanged";

  	
     
     const triggerUpdate = document.getElementById("update-profile");
     triggerUpdate.addEventListener("click", (e)=>{

     
    
       // const status_xa = document.getElementById("status");
       // const status = status_xa.options[status_xa.selectedIndex].text;
    
   

    
   
    



     let routeLink = {
          dataset:{
            url:"/admin-profile-detail",
            id: user.user._id,
            prePostData :{
              firstname: firstname.value,
            lastname:lastname.value,
            username: username.value,
            email: email.value,
            password: password.value,
            phoneNumber:phoneNumber.value,
            //avatar,
            certificate: certificate.value,
            user_type,
            //status: status,
        }
          }
     };
       e.preventDefault();
       profileUpdate(routeLink);
     });

  }

  static runPlanPackage(individualPlans,corporatePlans){



 WarLockAdmin('view_package','manage_package')
     noReadWrite('manage_package')
  	GateKeepersForAdmin();
  	addPlan()
  	document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })



  	let data = [...individualPlans, ...corporatePlans]
  	
  	
        let template2 ='';
    let viewModals = '';
    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");

  	if(data.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }


  	data.map((item, i) => { 
  		let className = "label-success"
 
  	if(item.status=="Active"){
           className = "label-success"
  	    }else if(item.status=="Disabled"){
           className = "label-warning"
  	    } else if(item.status=="Suspended"){
  	    	className = "label-danger"
  	    } else{
  	    	className="label-pink"
  	    }            
        template2 =`<tr>
                         <td class=""><a onclick="viewPlan(this)" href="#" id="plancat${item._id}" data-id="${item._id}" data-url="/admin-plan-package-detail" class=""><b>${item.plan_name} </b></a> </td>
                          <td class="">${item.plan_categories}</td>
                          <td class="">NGN ${item.price}</td>
                           <td class="">${item.description}</td>
                           <td class="">${item.car_max}</td>
                           <td class=""><span class="label ${className}">${item.status}</span></td>
                           <td class="">
                               <a  onclick="viewPlan(this)" href="#" data-plan="${item.plan_name}" data-category="${item.plan_categories}" data-price="${item.price}" data-description="${item.description}" data-max_car="${item.car_max}" data-status="${item.status}"  id="plancat${item._id}" data-id="${item._id}" data-url="/admin-plan-package-detail" class="table-action-btn"><i class="md md-edit"></i></a>
                               
                               <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/plan-package" data-delete_type="${item.plan_name}" id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           </td>
                   </tr>`;

      viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class=" slimScrollBar" > 
                                            <div > 
                                                <div > 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Plan Detail</h4> 
                                                </div> 
                                                <br/>
                                                <div > 
                                                    <div class="row"> 
                                                         <div class="form-group">
									                        <label for="position">Plan</label>
									                        <select id="plan${item._id}" class="form-control" data-style="btn-white">
									                            <option value="Individual">Individual</option>
									                            <option value="Corporate">Corporate</option>
									                           
									                        </select>
									                        </div> 
                                                        

                                                        <div class=""> 
                                                            <div class="form-group">  
                                                                <label for="field-4" class="control-label">Category</label> 
                                                                <input type="text" class="form-control" id="category${item._id}" placeholder="New or old category type"> 
                                                            </div> 
                                                            </div>

									                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Price</label> 
                                                                <input type="text" class="form-control" id="price${item._id}" placeholder="9000"> 
                                                            </div> 
                                                        </div>
                                                    </div> 

                                                    <div class="row"> 
                                                       


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Max Cars</label> 
                                                                <input  type="text" class="form-control" id="max_car${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                         <div class="form-group">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Active</option>
									                            <option>Disabled</option>
									                            <option>Suspended</option>
									                             <option>Dormant</option>
									                        </select>
									                        </div>


									                         <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Description</label> 
                                                                

                                                            <textarea class="form-control autogrow" id="description${item._id}" placeholder="description" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 
									                    
                                                        


                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 
                                                            
                                                           
                                                          
                                                          
                                                           
                                                            

                                                        </div> 
                                                    </div> 
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button onclick="addPlanEvent(this)" data-id="${item._id}" data-url="/add-plan" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none;opacity:0" onclick="deleteData(this)" data-id="${item._id}" data-url="/plan-package" data-delete_type="${item.plan_name}" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updatePlanData(this)" data-id="${item._id}" data-url="/admin-plan-package-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>        

		      `;

        tablebody1.insertAdjacentHTML('beforeend', template2);
    });

    modalbody1.innerHTML=viewModals;
    	
   

  }

  static runAdminSOS(datas){
    WarLockAdmin('view_sos','manage_sos')
        noReadWrite('manage_sos')

  	GateKeepersForAdmin();
  	//addSOS()
  	document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })
  	
  		

	  	let data = [...datas]



	            let template2 ='';
    let viewModals = '';
    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");
  	if(data.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }

    console.log(data)

    let media ="";
  	data.map((item, i) => { 
  		let className='';

        if(item.status=="Ongoing"){
                             
                className=`label-danger`;
         }else if(item.status=="Completed"){
                          
                className= `label-success`;
        }else{
                            
              className=`label-warning`;
         }

  	    // if(isVideo(item.media)){
       //    media ="video_viewer"
  	    // } else if(isImage(item.media)){
  	    // 	media ="image_viewer"
  	    // }       

        // <td class="">
        //                        <button id="${item._id}" onclick="showModalVideo(this)" data-id="${item._id}" type="button" class="btn btn-primary video-btn" data-toggle="modal" data-src="https://commute-bucket.s3.amazonaws.com/${item.media[0]}" data-target="#myModal">
        //                          View media
        //                        </button>
        //                    </td>  
        template2 =`<tr>
                         <td class=""><a onclick="viewRecordTemplate(this)" href="#" id="plancat${item._id}" data-id="${item._id}" data-url="/admin-sos-detail" class=""><b>${formatDate(new Date(item.created_at))} </b></a> </td>
                          
                          <td class="">CMT-USER- ${item.username}</td>
                           <td class="">${item.plate_number}</td>
                           
                           <td class="">${item.location}</td>
                           <td class=""><span class="label ${className}">${item.status}</span></td>
                           <td class="">
                               <a onclick="viewRecordTemplate(this)" href="#" data-plate_number="${item.plate_number}" data-date="${formatDate(new Date(item.created_at))}" data-user_id="${item.user_id}"  data-media="https://commute-bucket.s3.amazonaws.com/${item.media[0]}" data-location="${item.location}" data-status="${item.status}"  id="plancat${item._id}" data-id="${item._id}" data-username="${item.username}" data-email="${item.email}" data-phone_number="${item.phone_number}" data-url="/admin-sos-detail" class="table-action-btn"><i class="md md-edit"></i></a>
                               <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/redflag-sos"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                   </tr>`;

      viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar" > 
                                            <div> 
                                                <div> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                   
                                                </div> 
                                                <div> 
                                                    <div class="row"> 
                                                         <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Created Date</label> 
                                                                <input  type="text" disabled class="form-control" id="date${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        

                                                        <div class=""> 
                                                            <div class="form-group">  
                                                                <label for="field-4" class="control-label">User ID</label> 
                                                                <input type="text" disabled class="form-control" id="user_id${item._id}" placeholder="saladin"> 
                                                            </div> 
                                                            </div>


                                                            <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Username</label> 
                                                                <input  type="text" disabled class="form-control" id="username${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Email</label> 
                                                                <input  type="text" disabled class="form-control" id="email${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Phone Number</label> 
                                                                <input  type="text" disabled class="form-control" id="phone_number${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>

									                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Plate Number</label> 
                                                                <input type="text" disabled class="form-control" id="plate_number${item._id}" placeholder="AE-GX-2211"> 
                                                            </div> 
                                                        </div>
                                                    </div> 

                                                    <div class="row"> 

                                                        


                                                        
                                                       


                                                        


                                                         <div class="form-group ">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Pending</option>
									                            <option>Ongoing</option>
									                            <option>Completed</option>
									                             
									                        </select>
									                        </div>
									                    
                                                        


                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 
                                                            
                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Location</label> 
                                                                

                                                            <textarea disabled class="form-control autogrow" id="location${item._id}" placeholder="Address location" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 
                                                          
                                                          
                                                           
                                                            

                                                        </div> 
                                                    </div> 
                                                    
                                                    <div class="row"> 
                                                         <div class=""> 
                                                        <label for="field-4" class="control-label">Record Link</label> 
                                                          <button id="${item._id}" onclick="showModalVideo(this)" data-media="${item.media[0]}" data-id="${item._id}" type="button" class="btn " data-toggle="modal" data-src="${item.media[0]}" data-target="#myModal">
                                                          View media
                                                          </button>                         
                                                          <input style="visibility:hidden" type="hidden" disabled class="form-control" id="media${item._id}" placeholder="s3://aws.console...."> 
                                                             
                                                            
                                                          
                                                        </div>
                                                    </div> 
                                                </div> 
                                                <br/>
                                                <div class="modal-footer">
                                                <button onclick="addRecordEvent(this)" data-id="${item._id}" data-url="/add-sos" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    
                                                    <button onclick="updateRecordTemplate(this)" data-id="${item._id}" data-url="/admin-sos-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                    <button style="display:none; opacity:0" onclick="deleteData(this)" data-id="${item._id}" data-url="/redflag-sos"  id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;



        tablebody1.insertAdjacentHTML('beforeend', template2);

    });

    modalbody1.innerHTML=viewModals;



    



    	

    	
    

  }


  static runAdminTickets(datas, admins, users){
   
    WarLockAdmin('view_tickets','manage_tickets')
        noReadWrite('manage_tickets')


    document.getElementById('add-new').addEventListener('click',(e)=>{
      //$('.mebox').show()

       document.getElementById("create").style.visibility="visible";
       document.getElementById("create").style.display="block";
     document.getElementById("update").style.visibility="hidden";
     //document.getElementById("delete").style.visibility="hidden";
     document.getElementById("cancle").style.visibility="hidden";

     let modal_view_id = document.getElementsByClassName("mebox");
     modal_view_id[0].style.display="block";

     
     var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].type == "text") {
        elements[ii].value = "";

        elements[ii].disabled=false
      }
    }

    if(document.getElementsByTagName("textarea")){

    var elements = document.getElementsByTagName("textarea");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].type == "text") {
        elements[ii].value = "";

        elements[ii].disabled=false
      }

    }
    }



     document.getElementById("first-view").style.display="none";
       document.getElementById("second-view").style.display="block";

    })


  	GateKeepersForAdmin();
  	//addSOS()
  	document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })
  	
  		

	let data = [...datas];

	let adminUsers = [...admins];
	let selectOptions = ``;


	adminUsers.map((item, i) => { 
      selectOptions+=`<option>${item.username}</option>`; 
          
    });


  //the users for the ticket


      let selectboxData = users;
    

    let usernames = [];

    let this_user_names = [...new Set(selectboxData)].filter((item)=>usernames.push(item.username) )
    


      let selectOptions_users = ``;

    
    
    

      [...new Set(selectboxData)].map((item, i) => { 
          selectOptions_users+=`<option data-with="${item.phone_number}" data-id="${item.username}"  value="${item.username}">${item.email}</option>`; 
          
              
      });


      
  	


	let template2 ='';
    let viewModals = '';
    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");
    
    if(data.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }

  	data.map((item, i) => { 
  		let className='';

        if(item.status=="Ongoing"){
                             
                className=`label-danger`;
         }else if(item.status=="Completed"){
                          
                className= `label-success`;
        }else{
                            
              className=`label-warning`;
         }  
          console.log(item)
        template2 =`<tr>
                         <td class=""><a  href="#" id="plancat${item._id}" data-id="${item._id}" data-url="/admin-ticket-detail" class=""><b>${formatDate(new Date(item.created_at))} </b></a> </td>
                          
                          <td class=""> ${item.email}</td>
                           <td class="">${item.category}</td>
 
                           <td class="">${item.subject}</td>
                           <td class="">CMT-RECORD-${item._id.substring(-12,item._id.length)}</td>
                           <td class=""><span class="label ${className}">${item.status}</span></td>
                           <td class="">
                               <a onclick="viewRecordTemplate(this)" href="#" data-assigned_to="${item.assigned_to}" data-username="${item.username}" data-response="${item.response}" data-email="${item.email}" data-phone_number="${item.phone_number}" data-ticket_id="${item.ticket_id}" data-date="${formatDate(new Date(item.created_at))}" data-user_id="${item.user_id}" data-category="${item.category}"  data-comment="${item.comment}" data-subject="${item.subject}" data-status="${item.status}"  id="plancat${item._id}" data-id="${item._id}" data-url="/admin-ticket-detail" class="table-action-btn"><i class="md md-edit"></i></a>
                               <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/tickets"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                   </tr>`;



      viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar"> 
                                            <div > 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                   
                                                </div> 
                                                <div class=""> 
                                                    <div class="row"> 


                                                             <div class="form-group">
                                          <label for="position">Email</label>
                                          <select data-id="${item._id}" onchange="autofill(this)" id="email${item._id}" class="form-control" data-style="btn-white">
                                              <option>--Select an email user--</option>
                                              ${selectOptions_users}
                                               
                                          </select>
                                          </div>

                                                       <div class="form-group">
                                          <label for="position">Username</label>
                                          <input  type="text" disabled class="form-control" id="username${item._id}" placeholder="unlimited"> 
                                          </div>

                                          <div class=""> 
                                                              <div class="form-group"> 
                                                                  <label for="field-4" class="control-label">Phone</label> 
                                                                  <input type="text" disabled class="form-control" id="phone_number${item._id}" placeholder="AE-GX-2211"> 
                                                              </div> 
                                                            </div>


                                          <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Ticket ID</label> 
                                                                <input  type="text" disabled class="form-control" id="ticket_id${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>

                                                         
                                          <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Created Date</label> 
                                                                <input  type="date"  class="form-control" id="date${item._id}" placeholder="unlimited"> 
                                          </div> 


                                           <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Subject</label> 
                                                                <input type="text" disabled class="form-control" id="subject${item._id}" placeholder="AE-GX-2211"> 
                                                            </div> 
                                            
                                                        

                                                         
                                                            <div class="form-group" style="display:none">  
                                                                <label for="field-4" class="control-label">User ID</label> 
                                                                <input type="text" disabled class="form-control" id="user_id${item._id}" placeholder="saladin"> 
                                                            </div> 
                                                      

									                        
                                                           
                                                        </div>
                                             

                                                    <div class="row"> 

                                                        

                                                       
                                                        
                                                       



									                    
                                                        


                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 


                                                           

                                                            

                                                            

                                                            <br/>


                                                         <div class="form-group">
									                        <label for="position">Category</label>
									                        <select id="category${item._id}" class="form-control" data-style="btn-white">
									                            <option>General Enquiries</option>
									                            <option>Technical Support</option>
									                            <option>Feedback</option>
									                             
									                        </select>
									                        </div>

                                                         <div class="form-group">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Pending</option>
									                            <option>Ongoing</option>
									                            <option>Completed</option>
									                             
									                        </select>
									                        </div>


									                        <div class="form-group">
									                        <label for="position">Assigned Admin</label>
									                        <select id="assigned_to${item._id}" class="form-control" data-style="btn-white">
									                            ${selectOptions}
									                             
									                        </select>
									                        </div>

									                        <br/>

									                        <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Response</label> 
                                                                

                                                            <textarea  class="form-control autogrow" id="response${item._id}" placeholder="Response" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 

                                                            
                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Ticket Complaints</label> 
                                                                

                                                            <textarea disabled class="form-control autogrow" id="comment${item._id}" placeholder="Description" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 



                                                            
                                                          
                                                          
                                                           
                                                            

                                                        </div> 
                                                    </div> 
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button onclick="addRecordEvent(this)" data-id="${item._id}" data-url="/add-ticket" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none; opacity:0" onclick="deleteData(this)" data-id="${item._id}" data-url="/tickets" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateRecordTemplate(this)" data-id="${item._id}" data-url="/admin-ticket-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;

        tablebody1.insertAdjacentHTML('beforeend', template2);
    });

    modalbody1.innerHTML=viewModals;


  }


   static runAdminFaqs(datas){

     WarLockAdmin('view_faqs','manage_faqs')
         noReadWrite('manage_faqs')
  	GateKeepersForAdmin();
    document.getElementById('add-new').addEventListener('click',(e)=>{
      //$('.mebox').show()

       document.getElementById("create").style.visibility="visible";
       document.getElementById("create").style.display="block";
     document.getElementById("update").style.visibility="hidden";
     //document.getElementById("delete").style.visibility="hidden";
     document.getElementById("cancle").style.visibility="hidden";

     let modal_view_id = document.getElementsByClassName("mebox");
     modal_view_id[0].style.display="block";

     
     var elements = document.getElementsByTagName("input");
    for (var ii=0; ii < elements.length; ii++) {
      if (elements[ii].type == "text") {
        elements[ii].value = "";
      }
    }

     document.getElementById("first-view").style.display="none";
       document.getElementById("second-view").style.display="block";

    })
  	//addSOS()
  	document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })
  	
  		

	  	let data = [...datas]



	            let template2 ='';
    let viewModals = '';
    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");
    
    if(data.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }

  	data.map((item, i) => { 
      let className = "label-success"
        if(item.status=="Active"){
             className ='label-success';
          }else if(item.status=="Disabled"){
             className ='label-danger';
          }else{
            className="label-warning"
          } 
  		template2 =`<tr>
                         <td class=""><a onclick="viewRecordTemplate(this)" href="#" id="plancat${item._id}" data-id="${item._id}" data-url="/admin-faq-detail" class=""><b>${formatDate(new Date(item.created_at))} </b></a> </td>
                          
                          <td class=""> ${item.question}</td>
                           <td ><span class="label ${className}" >${item.status}</span></td>
 
                           
                           <td class="">
                               <a onclick="viewRecordTemplate(this)" href="#" data-status="${item.status}"  data-question="${item.question}"  data-answer="${item.answer}" id="plancat${item._id}" data-id="${item._id}" data-url="/admin-faq-detail" class="table-action-btn"><i class="md md-edit"></i></a>
                               <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/faqs"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                   </tr>`;

      viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar" > 
                                            <div class=""> 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                   
                                                </div> 
                                                <div class=""> 
                                                   
                                                         
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 


                                                        <div class="form-group">
                                          <label for="position">Status</label>
                                          <select id="status${item._id}" class="form-control" data-style="btn-white">
                                              <option>Active</option>
                                              <option>Disabled</option>
                                              
                                               
                                          </select>
                                          </div>
                                                            
                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Question</label> 
                                                                

                                                            <textarea  class="form-control autogrow" id="question${item._id}" placeholder="Questions" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 


                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Answers</label> 
                                                                

                                                            <textarea class="form-control autogrow" id="answers${item._id}" placeholder="Answers" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 
                                                          
                                                          
                                                           
                                                            

                                                        </div> 
                                                    </div> 
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button onclick="addRecordEvent(this)" data-id="${item._id}" data-url="/add-faq" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none;opacity:0" onclick="deleteData(this)" data-id="${item._id}" data-url="/faqs" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateRecordTemplate(this)" data-id="${item._id}" data-url="/admin-faqs-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;

        tablebody1.insertAdjacentHTML('beforeend', template2);
    });

    modalbody1.innerHTML=viewModals;



    //add tiny mice to faq

    $(document).ready(function () {
			    if($("#elm1").length > 0){
			        tinymce.init({
			            selector: "textarea",
			            theme: "modern",
			            height:300,
			            plugins: [
			                "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
			                "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
			                "save table contextmenu directionality emoticons template paste textcolor"
			            ],
			            toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons", 
			            style_formats: [
			                {title: 'Bold text', inline: 'b'},
			                {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
			                {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
			                {title: 'Example 1', inline: 'span', classes: 'example1'},
			                {title: 'Example 2', inline: 'span', classes: 'example2'},
			                {title: 'Table styles'},
			                {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
			            ]
			        });    
			    }  
			});


  }


  static runAdminCarsMgt(datas,carsInfo,drivers){

WarLockAdmin('view_cars','manage_cars')

noReadWrite('manage_cars')

     GateKeepersForAdmin();
  		console.log("loading plan page")
  	document.getElementById("search").addEventListener("keyup",(e)=>{
   	  searchTable() 
    })
    addClick()

     let selectOptionsDrivers = ``;
  let driv = [...new Set(drivers)]
  

  console.log(drivers)

  driv.map((item, i) => { 
      selectOptionsDrivers+=`<option data-username="${item.username}" data-email="${item.email}" id="${item._id}" value="${item.phone_number}">${item.username}-${item.email}</option>`; 
          
    });


    console.log(carsInfo)

    let carCategory = []; 
    let modelNameOptionX = []; 
    let car_year = [];

   carsInfo.map((item)=>{
     carCategory.push(item.model_make_id)
   });
   carCategory = [...new Set(carCategory)];

  let modelOption=``;

  carCategory.map((item)=>{
     modelOption+=`<option>${item}</option>`

  })



  carsInfo.map((item)=>{
     modelNameOptionX.push(item.model_name)
   });

  modelNameOptionX = [...new Set(modelNameOptionX)];

  console.log(modelNameOptionX)


  let modelNameOption=``;

  modelNameOptionX.map((item)=>{
     modelNameOption+=`<option>${item}</option>`

  });



  carsInfo.map((item)=>{
     car_year.push(item.model_year)
   });

  //car_year = [new Set(car_year)];


  let model_year=``;

  car_year.map((item)=>{
     model_year+=`<option>${item}</option>`

  });








  	
	let data = [...datas]
	let template2 ='';
    let viewModals = '';


   // let driversC = [...drivers];
  

    
  	const tablebody1 = document.getElementById('tablebody1');
  	const modalbody1 = document.getElementById("modalbody1");
    
    if(data.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }

  	data.map((item, i) => { 
  		let className = "label-success"
  	    if(item.status=="Booked"){
           className = "label-danger"
  	    }else if(item.status=="Available"){
           className = "label-success"
  	    } else{
           className = "label-warning"
        }          
        template2 =`<tr>
                         <td class=""><a  href="#" id="plancat${item._id}" data-id="${item._id}" data-url="/admin-car-mgt-detail" class=""><b>${formatDate(new Date(item.created_at))} </b></a> </td>
                          <td class="">CMT-CAR-${item._id}</td>
                          <td class="">${item.car_type}</td>
                          <td class="">${item.model_make_id}</td>
                          <td class="">${item.plate_number}</td>

                           <td class="">${item.car_year}</td>
                           <td class="">${item.color}</td>
 
                           <td class=""><span class="label ${className}">${item.status}</span></td>
                           <td><img  style="width:100px;height:100px" src="${item.images}" /></td>
                           <td class="">
                               <a onclick="viewCarRecordTemplate(this)" data-model_make_id="${item.model_make_id}" data-old_car="${item.images}" href="#" data-model="${item.model}" data-car_type="${item.car_type}" data-car_id="${item._id}" data-assigned_driver_name="${item.assigned_driver_name}" data-assigned_driver_email="${item.assigned_driver_email}" data-checkmate="${item.assigned_driver_name}-${item.assigned_driver_email}" data-date="${formatDate(new Date(item.created_at))}"  data-partner_id="${item.partner_id}" data-model="${item.model}"  data-car_year="${item.car_year}" data-color="${item.color}"  data-status="${item.status}" data-plate_number="${item.plate_number}" data-inspection_detail="${item.inspection_detail}" data-description="${item.description}"  id="plancat${item._id}" data-id="${item._id}" data-license="${item.license}" data-url="/admin-car-mgt-detail" class="table-action-btn"><i class="md md-edit"></i></a>
                                <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/cars"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                   </tr>`;

      viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar" style=""> 
                                            <div class=""> 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    
                                                </div> 
                                                
                                                <div class=" text-left">
								                        
								                        <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Car Status</label>
                                                    <div>
                                                    <select id="status${item._id}" class="selectpicker form-control" data-style="btn-white" tabindex="-98">
                                                       <option>Booked</option>
                                                       <option>Available</option>
                                                       <option>UnAvailable</option>

                                                       
                                                    </select></div>
                                            </div>
                                        </div>
								                  
								                        <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Car Make</label>
                                                    <div>
                                                    <select id="car_model_make${item._id}" class="selectpicker form-control" data-style="btn-white" >
                                                        ${modelOption}
                                                    </select></div>
                                            </div>
                                        </div>


                                        <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Car Model</label>
                                                    <div>
                                                    <select id="car_model${item._id}" class="selectpicker form-control" data-style="btn-white" >
                                                        ${modelNameOption}
                                                    </select></div>
                                            </div>
                                        </div>


								    
								                        <div class="form-group">
								                            <label for="inputColor">Color</label>
								                            <input id="color${item._id}" type="text" class="form-control"  value="Blue">
								                        </div>

								                        <div class="form-group ">
								                            <label for="inputColor">Plate Number</label>
								                            <input id="plate_number${item._id}" type="text" class="form-control"  >
								                        </div>
								                        
								                        <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Car Year</label>
                                                    <div>

                                                    <input id="car_year${item._id}" type="text" class="form-control"  >
                                        
                                                    
                                                    </div>
                                            </div>
                                        </div>

                                                       


                                      <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Driver Assigned</label>
                                                    <div >
                                                    <select id="drivers${item._id}" class="selectpicker form-control" data-style="btn-white">
                                                        <option>--Select Driver--</option>
                                                        ${selectOptionsDrivers}
                                                    </select></div>
                                            </div>
                                        </div>
                                        <br/><br/>
								    
								                        <div class="">
								                        <div class="form-group">
								                            <label for="inputCarDescription">Car Description</label>
								                            <textarea id="description${item._id}" class="form-control autogrow" id="inputCarDescription" placeholder="The car is neat and the engine is working properly." style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>
								                        </div>

                                        <br/>
								                        <div class="form-group" style="display:none">
								                            <label for="inputLicense">License Plate Number</label>
								                            <input type="text" class="form-control" id="inputLicense${item._id}" >
								                            
								                        </div>
														</div>
														
														<div class="form-group">
																<label for="inputColor">Partner Id</label>
																<input id="partner_id${item._id}" type="text" class="form-control" id="" >
															</div>
															
															<div class="form-group">
																	<label for="">Car Inspection Details</label>
																	<input id="inspection_detail${item._id}" type="text" class="form-control" id="" >
															</div>



                              <div class="form-group">
                              <label class="control-label">Upload Image</label>
                              <input onchange="initCarUpload(this)" data-id="${item._id}" type="file" class="filestyle" data-placeholder="No file" id="image-file${item._id}">
                              </div>


                              <img src="${item.images}" id="img${item._id}" title="cars are here" data-carinfo="hello car"  style="width:100px;height:100px" /><span id="oldcar">old car profile</span>
								    
								                        
								                        
								                        
								                </div> 
                                                <div style="clear:both;display:table;margin-right:0px">
                                                <button style="display:none" style="margin-right:5px;display:none" onclick="addCarRecordEvent(this)" data-id="${item._id}" data-url="/add-cars" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none" style="margin-right:5px;" onclick="deleteData(this)" data-id="${item._id}" data-url="/faqs" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button style="margin-right:5px;" id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button style="margin-right:5px;" data-old_car="${item.images}" onclick="updateCarRecordTemplate(this)" data-id="${item._id}" data-url="/admin-cars-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;

        tablebody1.insertAdjacentHTML('beforeend', template2);
    });

    $('#publisher').on('change', function(e) {
      let selector = $(this).val();
      $("#site > option").hide();
      $("#site > option").filter(function(){return $(this).data('pub') == selector}).show();
    });

    modalbody1.innerHTML=viewModals;

  }

  static runAdminInspectionAdd(url='add-inspection', users, partners){
    WarLockAdmin('view_cars','manage_cars')
   // WarLockAdmin('view_users','manage_users')
        noReadWrite('manage_cars')
    let selectboxData = users;
    if(url='add-inspection'){
      selectboxData = partners;

    }

     WarLockAdmin('view_cars')


     function hasClass(el, classname) {
       return el.classList.contains(classname);
    }

    console.log('this was called')
    let usernames = [];

    let this_user_names = [...new Set(selectboxData)].filter((item)=>usernames.push(item.username) )
    


      let selectOptions_users = ``;

    
     if(url!='add-inspection'){//for drive test

      [...new Set(selectboxData)].map((item, i) => { 
          selectOptions_users+=`<option data-with="${item.test_certificate}" id="${item.username}-${i}"  value="${item.username}">${item.email}</option>`; 
          
              
      });

    }else{


      [...new Set(selectboxData)].map((item, i) => { 
          selectOptions_users+=`<option data-with="${item.test_certificate}" id="${item.userName}-${i}"  value="${item.userName}">${item.email}</option>`; 
          
              
      });


    }

      $('#email').append(selectOptions_users);

      //document.getElementById("username").innerHTML= selectOptions_users



     // Map your choices to your option value
        
       let me;
        // When an option is changed, search the above for matching choices
        $('#email').on('change', function() {
           // Set selected option as variable
           var selectValue = $(this).text();




           // Empty the target field
           $('#username').empty();


          

           if(url!='add-inspection'){

              me =this_user_names.filter((item)=>item.username== $(this).val())
           console.log(me)
             if(me[0].phone_number){
                document.getElementById("phone_number").value =me[0].phone_number;
             }

             if(me[0].test_center){
               document.getElementById("time").value =me[0].test_center
              document.getElementById("description").value =me[0].test_center_address
             }
          }else{

            me =this_user_names.filter((item)=>item.userName== $(this).val())
             console.log(me)

            if(me[0].phoneNumber){
               document.getElementById("phone_number").value =me[0].phoneNumber;
             }

          }
           
            
           
           
           // For each chocie in the selected option
          // for (i = 0; i <  magicalLookup[selectValue].length; i++) {
              // Output choice in the target field
            $('#username').append(`<option>` +  $(this).val() + "</option>");

            

           //}
        });


     document.getElementById("savemesa").addEventListener('click', (e) =>{
       
       
       e.preventDefault()


        let linkOfApi = 'http://localhost:12000/api/v1/'+ url ;




        const email_x = document.getElementById("email")

        
       const username_x = document.getElementById("username") ;

   const description=      document.getElementById("description").value 
        
       const date = document.getElementById("created_date").value 

        const phone_number = document.getElementById("phone_number").value 


  const time =        document.getElementById("time").value 

     const car_id =   document.getElementById("car_id").value 
        
      const  status_x = document.getElementById("status")



      if( email_x.options[email_x.selectedIndex].text =='--Select an email user--'){
        var notification = alertify.notify('Select an email user.', 'error', 5, function(){  console.log('dismissed'); });

         return false;
      }


      if( !date){
        var notification = alertify.notify('Date required.', 'error', 5, function(){  console.log('dismissed'); });

         return false;
      }

      if(!car_id){
        var notification = alertify.notify('car id/plate number required.', 'error', 5, function(){  console.log('dismissed'); });

         return false;


      }


      if(url!='add-inspection'){

        if(!time){
        var notification = alertify.notify('Time required.', 'error', 5, function(){  console.log('dismissed'); });

         return false;


        }


        if(!description){
        var notification = alertify.notify('Remarks/Comment about the car inspected is required.', 'error', 5, function(){  console.log('dismissed'); });

         return false;


      }


      }


         
          


         






        
       


          const prePostData = {

             username: username_x.options[username_x.selectedIndex].text,
            email: email_x.options[email_x.selectedIndex].text,
            phone_number: phone_number,
            description: description,
            createdDate: date,
            time: time,
            status: status_x.options[status_x.selectedIndex].text,
            car_id,


            // username: username,
            // email: email,
            // phone_number: phone_number,
            // description: description,
            // createdDate: createdDate,
            // time: time,
            // status,
            // car_id,
          };





         

          const user =JSON.parse(localStorage.getItem("userToken"));

          // const validResult = Validator.validatePlanPost({...prePostData});

         // console.log(validResult+ "update error")

              // if(validResult){
          fetch(linkOfApi, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': user.token,
              },
              body: JSON.stringify(prePostData),
              mode:"cors",
            })
              .then(response => response.json())
              .then(data => {
                console.log(data)
                if (data.status === 201) {
                  
                  var notification = alertify.notify('Successfully created inspection ', 'success', 5, function(){  console.log('dismissed'); });
                      
                  setTimeout(()=>{
                    window.location.href="./admin-drive-test"
                  },2000)
                      

                 // ApiDeleteOneStatusRecord.redirect(recordOfType);
                } else {
                  
                  var notification = alertify.notify('Could not perform update operation. Ensure the plan selected is correct.', 'error', 5, function(){  console.log('dismissed'); });

                }
              }).catch(e=> console.log(e));
         // }else{
         //  var notification = alertify.notify('unsuccessful update operation', 'error', 5, function(){  console.log('dismissed'); });

         // }


         if(url!='add-inspection'){
          let link="http://localhost:12000/api/v1/update-testcenter/"+me[0]._id
         updateUsersTestCenter(link, {test_center:me[0].test_center, test_center_address: me[0].test_center_address})

         }


         // update user test center
         

     })

  }

  static runAdminInspection(datas){

     WarLockAdmin('view_cars','manage_cars')
         noReadWrite('manage_cars')
    GateKeepersForAdmin();
      console.log("loading plan page")
    document.getElementById("search").addEventListener("keyup",(e)=>{
      searchTable() 
    })
      


    
  let data = [...datas]
  let template2 ='';
    let viewModals = '';



    
    const tablebody1 = document.getElementById('tablebody1');
    const modalbody1 = document.getElementById("modalbody1");
    
    // if(data.length<=0){
    //   return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    // }

    data.map((item, i) => { 
     let className='';

        if(item.status=="Ongoing"){
                             
                className=`label-danger`;
         }else if(item.status=="Completed"){
                          
                className= `label-success`;
        }else{
                            
              className=`label-warning`;
         }      
        template2 =`<tr>
                         
                          <td class="">${item.car_id}</td>
                          <td class="">${item.createdDate}</td>
                          <td class="">${item.email}</td>
                          <td class="">${item.username}</td>
                           <td class="">${item.phone_number}</td>
                           <td class="">${item.time}</td>
 
                           <td class=""><span class="label ${className}">${item.status}</span></td>
                           <td class="">
                               <a onclick="viewInspectionUpdate(this)" href="#" data-car_id="${item.car_id}" data-username="${item.username}" data-phone="${item.phone_number}" data-email="${item.email}" data-date="${formatDate(new Date(item.createdDate))}"  data-description="${item.description}"  data-status="${item.status}" id="plancat${item._id}" data-time="${item.time}" data-id="${item._id}" data-url="/admin-inspection-detail" class="table-action-btn"><i class="md md-edit"></i></a>
                                <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/inspection"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                   </tr>`;

      viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar" style=""> 
                                            <div class=""> 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    
                                                </div> 
                                                
                                                <div class=" text-left">
                                        
                                        <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Car Status</label>
                                                    <div>
                                                    <select id="status${item._id}" class="selectpicker form-control" data-style="btn-white" tabindex="-98">
                                                       <option>Pending</option>
                                                       <option>Completed</option>
                                                      

                                                       
                                                    </select></div>
                                            </div>
                                        </div>
                                  
                                        
                                           <div class="form-group">
                                            <label for="inputColor">Car ID</label>
                                            <input disabled id="car_id${item._id}" type="text" class="form-control"  value="Blue">
                                        </div>

                    
                                        <div class="form-group">
                                            <label for="inputColor">Partner Name</label>
                                            <input disabled id="username${item._id}" type="text" class="form-control"  value="Blue">
                                        </div>

                                        <div class="form-group ">
                                            <label for="inputColor">Partner Email</label>
                                            <input disabled id="email${item._id}" type="text" class="form-control"  value="Blue">
                                        </div>
                                        
                                        <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Partner Phone</label>
                                                    <div>

                                                    <input disabled id="phone_number${item._id}" type="text" class="form-control"  value="Blue">
                                        
                                                    
                                                    </div>
                                            </div>
                                        </div>

                                                       

                                       
                                      
                    
                                        <div class="">
                                        <div class="form-group">
                                            <label for="inputCarDescription">Description</label>
                                            <textarea disabled id="description${item._id}" class="form-control autogrow" id="inputCarDescription" placeholder="The car is neat and the engine is working properly." style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>
                                        </div>

                                        <br/>
                                        <div class="form-group">
                                            <label for="inputLicense">Time</label>
                                            <input type="time" disabled class="form-control" id="time${item._id}" value="AB 294 XD">
                                            
                                        </div>

                                         <div class="form-group">
                                            <label for="inputLicense">Date</label>
                                            <input type="text" disabled class="form-control" id="date${item._id}" value="AB 294 XD">
                                            
                                        </div>
                            </div>
                            
                           
                    
                                        
                                        
                                        
                                </div> 
                                                <div style="clear:both;display:table;margin-right:0px">
                                                <button style="display:none" style="margin-right:5px;display:none" onclick="addCarRecordEvent(this)" data-id="${item._id}" data-url="/add-cars" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none" style="margin-right:5px;" onclick="deleteData(this)" data-id="${item._id}" data-url="/faqs" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button style="margin-right:5px;" id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button style="margin-right:5px;" onclick="updateInspectionAction(this)" data-id="${item._id}" data-url="/admin-inspection-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

          `;

        tablebody1.insertAdjacentHTML('beforeend', template2);
    });

    $('#publisher').on('change', function(e) {
      let selector = $(this).val();
      $("#site > option").hide();
      $("#site > option").filter(function(){return $(this).data('pub') == selector}).show();
    });

    modalbody1.innerHTML=viewModals;

    	
  
  }

  static runSettings(datas){
   
    WarLockAdmin('view_settings','manage_settings')
        noReadWrite('manage_settings')
  	GateKeepersForAdmin();
  
  	
	let data = [...datas];
	let template2 ='';
    let viewModals = '';
   
    console.log(JSON.stringify(data)+ "from settings...");


    data.map((item,i) => {

    	template2 =`<tr>
	                    <td class="">${item.api_mode}</td>
	                    <td class="">${item.test_secret_key}</td>
	                    <td class="">${item.test_public_key}</td>
	                    <td class="">${item.live_secret_key}</td>
	                    <td class="">${item.live_public_key}</td>
	                     <td class="">
                               <a onclick="viewRecordSettings(this)" href="#" data-ticket_id="${item._id}" data-app_mode="${item.api_mode}" data-test_secret_key="${item.test_secret_key}" data-test_public_key="${item.test_public_key}"  data-live_secret_key="${item.live_secret_key}"  data-live_public_key="${item.live_public_key}"  id="plancat${item._id}" data-id="${item._id}" data-url="/admin-settings-detail" class="table-action-btn"><i class="md md-edit"></i></a>
                                
                           </td>
	                    
	                </tr>`;
	        tablebody1.insertAdjacentHTML('beforeend', template2);

    	viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar"> 
                                            <div > 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Settings Detail</h4> 
                                                </div> 
                                                <br/>
                                                <div class=""> 
                                                    <div class="row"> 
                                                         <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Test Secret Key</label> 
                                                                <input  type="text" class="form-control" id="test_secret_key${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        

                                                        <div class=""> 
                                                            <div class="form-group">  
                                                                <label for="field-4" class="control-label">Test Public Key</label> 
                                                                <input type="text"  class="form-control" id="test_public_key${item._id}" placeholder="saladin"> 
                                                            </div> 
                                                            </div>

									                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Live Secret Key</label> 
                                                                <input type="text"  class="form-control" id="live_secret_key${item._id}" placeholder="AE-GX-2211"> 
                                                            </div> 
                                                        </div>
                                                    </div> 

                                                    <div class="row"> 

                                                        

                                                       <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Live Public Key</label> 
                                                                <input  type="text"  class="form-control" id="live_public_key${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        
                                                       


                                                        


                                                         <div class="form-group">
									                        <label for="position">Api Mode</label>
									                        <select id="api_mode${item._id}" class="form-control" data-style="btn-white">
									                            <option>test</option>
									                            <option>live</option>
									                            
									                             
									                        </select>
									                        </div>
									                    
                                                       


                                                        

                                                    </div> 
                                                    
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button disabled onclick="addRecordSettings(this)" data-id="${item._id}" data-url="/add-ticket" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none;opacity:0" disabled onclick="deleteData(this)" data-id="${item._id}" data-url="/tickets" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateRecordSettings(this)" data-id="${item._id}" data-type="${item.settings_type}" data-url="/admin-settings-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;



    });

    modalbody1.innerHTML=viewModals;



  	
    



  }

  static runAdminItineraries(itineraries, drivers){
    WarLockAdmin('view_bookings','manage_bookings')
        noReadWrite('manage_bookings')
    let itinerary =[...new Set(itineraries)] || [];
    console.log(itinerary)


    let selectOptionsDrivers = ``;
  let driv = [...new Set(drivers)]
  

  console.log(drivers)

  driv.map((item, i) => { 
      selectOptionsDrivers+=`<option data-username="${item.username}" data-email="${item.email}" id="${item._id}" value="${item.phone_number}">${item.username}-${item.email}</option>`; 
          
    });

    document.getElementById("search").addEventListener("keyup",(e)=>{
   	  searchTable() 
    })

        let tablebody = document.getElementById('tablebody1');
        let modalbody1 = document.getElementById('modalbody1');
              
        let viewModals='';
        let eachRecord=``;
        let className="label-success"
        itinerary.map((item, i) => {
            if(item.status=="Ongoing"){
            	className="label-danger"
                             
               
            }else if(item.status=="Completed"){
            	className="label-success"
                          
                
            }else{
                className="label-warning"
               
            }

            // alert(item.assigned_driver_name)
            eachRecord = `
                          <tr id="${i}">
                                <td>${formatDate(new Date(item.created_at))} </td>
                          <td class="">${item.plan_category}</td>
                          <td class="">${item.start_location} </td>
                          <td class="">${item.destination}</td>
                            
                            <td class=""><span class="label label-table ${className}">${item.status}</span></td>

                            <td class="">
                               <a onclick="viewRecordItinsDetail(this)" href="#" data-checkmate="${item.assigned_driver_name}-${item.assigned_driver_email}"  data-id="${item._id}" data-start_time="${formatDate(new Date(item.start_time))}" data-end_time="${formatDate(new Date(item.end_time))}" data-id="${item._id}" data-no_hours="${item.no_hours}" data-start_location="${item.start_location}" data-destination="${item.destination}" data-drive_option="${item.drive_option}"  data-travel_option="${item.travel_option}"  data-username="${item.username}"  data-email="${item.email}"  data-phone_number="${item.phone_number}"  id="plancat${item._id}" data-assigned_driver_name="${item.assigned_driver_name}" data-status="${item.status}" data-id="${item._id}" data-url="/admin-itinerary-details" class="table-action-btn"><i class="md md-edit"></i></a>
                                
                           </td>
                                                                               
                         </tr>`; 
             tablebody.insertAdjacentHTML('beforeend', eachRecord); 


             viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar"> 
                                            <div > 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                   
                                                </div> 
                                                <div class=""> 
                                                    <div class="row"> 
                                                         <div class="form-group">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Pending</option>
									                            <option>Ongoing</option>
									                            <option>Completed</option>
									                             
									                        </select>
									                        </div>

                                          <div class="form-group">
                                                                  <label for="position">Assigned Drivers</label>
                                                                  <select id="assigned_driver${item._id}" class="form-control" data-style="btn-white">
                                                                      <option>--Please select a driver--</option>
                                                                      ${selectOptionsDrivers}
                                                                       
                                                                  </select>
                                                                  </div>


                                                         <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Start Time</label> 
                                                                <input  type="text" disabled class="form-control" id="start_time${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        


									                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Drive Option</label> 
                                                                <input type="text" disabled class="form-control" id="drive_option${item._id}" placeholder="AE-GX-2211"> 
                                                            </div> 
                                                        </div>
                                                    </div> 

                                                    <div class="row"> 

                                                        

                                                       <div > 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Travel Option</label> 
                                                                <input  type="text" disabled class="form-control" id="travel_option${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">No of hours</label> 
                                                                <input  type="text" disabled class="form-control" id="no_hours${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                                
                                                        
                                                       


                                                        

                                                     
                                                        <div class="" style="display:none"> 
                                                            <div class="form-group">  
                                                                <label for="field-4" class="control-label">End Time</label> 
                                                                <input type="text" disabled class="form-control" id="end_time${item._id}" placeholder="saladin"> 
                                                            </div> 
                                                            </div>
                                                         
									                    
                                                        


                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 


                                                            <div class=""> 
	                                                            <div class="form-group">  
	                                                                <label for="field-4" class="control-label">Username</label> 
	                                                                <input type="text" disabled class="form-control" id="username${item._id}" placeholder="saladin"> 
	                                                            </div> 
                                                            </div>

									                        <div class=""> 
	                                                            <div class="form-group"> 
	                                                                <label for="field-4" class="control-label">Email</label> 
	                                                                <input type="text" disabled class="form-control" id="email${item._id}" placeholder="AE-GX-2211"> 
	                                                            </div> 
                                                            </div>

                                                            <div class=""> 
	                                                            <div class="form-group"> 
	                                                                <label for="field-4" class="control-label">Phone</label> 
	                                                                <input type="text" disabled class="form-control" id="phone_number${item._id}" placeholder="AE-GX-2211"> 
	                                                            </div> 
                                                            </div>

                                                            

                                                            <br/>
                                                            
                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Start Location</label> 
                                                                

                                                            <textarea disabled class="form-control autogrow" id="start_location${item._id}" placeholder="Description" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 



                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Destination</label> 
                                                                

                                                            <textarea disabled class="form-control autogrow" id="destination${item._id}" placeholder="Response" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 
                                                          
                                                          
                                                           
                                                            

                                                        </div> 
                                                    </div> 
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button style="display:none; opacity:0" onclick="addRecordEvent(this)" data-id="${item._id}" data-url="/add-ticket" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none; opacity:0" onclick="deleteData(this)" data-id="${item._id}" data-url="/tickets" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateRecordItins(this)" data-id="${item._id}" data-url="/admin-itinerary-details" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;

            });

           modalbody1.innerHTML= viewModals;
               
        
  }


  runAdminPlanDetails(usersPlan){
  	
                  
              
              

  }



  static runAdminPlans(usersPlan){
    WarLockAdmin('view_bookings','manage_bookings')
        noReadWrite('manage_bookings')

  	
    let plans = [...new Set(usersPlan)] || [];

    console.log(plans)
            //console.log(JSON.stringify(plans)+"main plan")
    let currentPlan = plans[plans.length -1] || []; // last plan user embarked on
            
    
            // console.log(datas)
    
        
      
    let tablebody1 = document.getElementById('tablebody1');
    let modalbody1 = document.getElementById('modalbody1');
    let viewModals ='';
    let template2;
    let className=``;
    plans.map((item, i) => {
                           //console.log(item)
                           if(item.status=="Unpaid"){
                             className =`label label-table label-warning`
                            //item.payment_status=`<span class="label label-table label-danger">${item.payment_status}</span>`;
                          }else if(item.status=="Paid"){
                            item.price= `₦ ${item.price}`;
                              className =`label label-table label-success`
                            //item.payment_status= `<span class="label label-table label-success">${item.payment_status}</span>`+ `₦ ${item.price}`;
                          }else{
                              className =`label label-table label-danger`
                            //item.price= `₦ ${item.price}`;
                            //item.payment_status=`<span class="label label-table label-warning">${item.payment_status}</span>`;
                          }
                          template2 =`<tr>
                                        <td class="">   ${formatDate(new Date(item.created_at))} </td>
                                        <td class=""><a onclick="getPlanId(this)" data-id="${item._id}" href="plan-detail">PLANID-${item.plan_id}</a></td>
                                            <td class="">   ${item.username} </td>
                                          
                                            <td class="">${item.email}</td>
                                            <td class="">${item.plan_name}</td>
                                            <td class="text-center "><span class="${className}">${item.status}</span></td>
                                            <td class="">  ${item.price}</td>
                                              <td class="">
                                                   <a id="plan-current-${item._id}" onclick="getBookingId(this)"  data-id="${item._id}" href="#" class="table-action-btn btn-custom btn-purple"><i class="md md-chevron-right"></i></a>
                                              </td>
                              </tr>`;
                              tablebody1.insertAdjacentHTML('beforeend', template2);

      



    });

   
                      
          
            
  }



  static runAdminPlansDetail(usersPlan){
        WarLockAdmin('view_bookings','manage_bookings')
            noReadWrite('manage_bookings')


    
  	console.log(usersPlan)
  	let modalbody1 = document.getElementById("modalbody1");
  	 let viewModals='';

      if(localStorage.getItem("bookingId")){
      
      }else{
        window.location.href='./admin-bookings'
      }

  	let clickedPlan = localStorage.getItem("bookingId");


  	console.log(clickedPlan);

  	setTimeout(()=>{

  	let planToView = usersPlan.filter((item,i)=> item._id== clickedPlan);
    let q_id, p_id;
    let planId = planToView[0].plan_id;
  	let has_been_updated = planToView[0].has_updated;
  	console.log(has_been_updated)
    if(has_been_updated=='Yes'){
      q_id ='CMT-QUOTE'+ planId;
       p_id='CMT-REF-'+ planId;

    }
    console.log(planToView[0])
   document.getElementById("quote-date").disabled=true

  	

  	if(has_been_updated=="No"){
       document.getElementById("quote-amount").disabled=false;
  	}else{
        document.getElementById("quote-amount").disabled=true;  
        document.getElementById("quote-amount").value = planToView[0].price;
        //document.getElementById("quote-date").value = formatDate(new Date(planToView[0].created_at)) ;

        let id= "#quote-status";
	    $( id + " option").each(function () {
	        if ($(this).html() == planToView[0].status) {
	            $(this).attr("selected", "selected");
	            return;
	        }
	    });	
	     //document.getElementById("quote-status").disabled=true;		        
     }
  	var selectedCars = [...new Set(planToView[0].cars_on_plan)];

  	console.log(planToView)

  	let itinerary = [...new Set(planToView[0].itineries)];
  	console.log(itinerary)
    let plans = usersPlan || [];

    let price_of_plan = planToView[0].price;
     let quote_date;
     console.log(planToView[0])
    if(planToView[0].createdDateOfQuotation){
        //alert(planToView[0].createdDateOfQuotation)
         quote_date =planToView[0].createdDateOfQuotation
    }




        let createdDateOfQuotation = quote_date
        if(createdDateOfQuotation){
           document.getElementById("quote-date").value=  formatDate(new Date(createdDateOfQuotation)); 
        }
    
           
    document.getElementById("plan-id").innerHTML= planToView[0].plan_id    //"PLANID-"+clickedPlan.substring(-12,clickedPlan.length);
    let plan_ids = "PLANID-"+clickedPlan.substring(-12,clickedPlan.length);

    let id= "#status";
    $( id + " option").each(function () {
        if ($(this).html() == planToView[0].status) {
            $(this).attr("selected", "selected");
            return;
        }
    });

     let userPhone = [];          
    
    
               


    let tablebody = document.getElementById('tablebody');
    
    let eachRecord=``;
    let user_name = [];

    let className ="label-success"
    itinerary.map((item, i) => {
        if(item.status=="Ongoing"){
            className="label-danger"
                             
        }else if(item.status=="Completed"){
                          
            className="label-success"
        }else{
                            
            className="label-warning"
        }
      
        document.getElementById("username").value=item.username;
    document.getElementById("email").value=item.email;
    user_name.push(item.email)
    document.getElementById("date").value=formatDate(new Date(item.start_time));
    document.getElementById("id").value= planToView[0].plan_id //'CMPAYSTK-'+clickedPlan;
   
    document.getElementById("category").value=item.plan_category;

    //userPhone.push(item.phone_number)




        eachRecord = `
                          <tr id="${i}">
                                <td>${formatDate(new Date(item.start_time))} </td>
                          
                          <td class="">${item.start_location} </td>
                          <td class="">${item.destination}</td>
                          <td class="">${item.plan_category}</td>
                             <td class="">${item.drive_option}</td>
                              <td class="">${item.travel_option}</td>
                               <td class="">${item.no_hours}</td>
                                <td class=""><span class="label ${className}">${item.status}</span></td>
                               <td class="">${item.plan_id}</td>
                                <td class="">
                               <a onclick="viewRecordItinsDetail(this)" href="#" data-id="${item._id}" data-start_time="${formatDate(new Date(item.start_time))}" data-end_time="${formatDate(new Date(item.end_time))}" data-id="${item._id}" data-no_hours="${item.no_hours}" data-start_location="${item.start_location}" data-destination="${item.destination}" data-drive_option="${item.drive_option}"  data-travel_option="${item.travel_option}"  data-username="${item.username}"  data-email="${item.email}"  data-phone_number="${item.phone_number}"  id="plancat${item._id}" data-status="${item.status}" data-id="${item._id}" data-url="/admin-itinerary-details" class="table-action-btn"><i class="md md-edit"></i></a>
                               <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/itins-delete-from-plan"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>                                               
                         </tr>`; 
        tablebody.insertAdjacentHTML('beforeend', eachRecord); 


        viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar"> 
                                            <div > 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                  
                                                </div> 
                                                <div class=""> 
                                                    <div class="row"> 
                                                         <div class="form-group">
									                        <label for="position">Status</label>
									                        <select id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Pending</option>
									                            <option>Ongoing</option>
									                            <option>Completed</option>
									                             
									                        </select>
									                        </div>


                                                         <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Start Time</label> 
                                                                <input  type="text" disabled class="form-control" id="start_time${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        

                                                        <div class=""> 
                                                            <div class="form-group">  
                                                                <label for="field-4" class="control-label">End Time</label> 
                                                                <input type="text" disabled class="form-control" id="end_time${item._id}" placeholder="saladin"> 
                                                            </div> 
                                                            </div>

									                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Drive Option</label> 
                                                                <input type="text" disabled class="form-control" id="drive_option${item._id}" placeholder="AE-GX-2211"> 
                                                            </div> 
                                                        </div>
                                                    </div> 

                                                    <div class="row"> 

                                                        

                                                       <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Travel Option</label> 
                                                                <input  type="text" disabled class="form-control" id="travel_option${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">No of hours</label> 
                                                                <input  type="text" disabled class="form-control" id="no_hours${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        
                                                       


                                                        


                                                         
									                    
                                                        


                                                        

                                                    </div> 
                                                    <div class="row"> 
                                                        <div class="col-md-12"> 


                                                            <div class=""> 
	                                                            <div class="form-group">  
	                                                                <label for="field-4" class="control-label">Username</label> 
	                                                                <input type="text" disabled class="form-control" id="username${item._id}" placeholder="saladin"> 
	                                                            </div> 
                                                            </div>

									                        <div class=""> 
	                                                            <div class="form-group"> 
	                                                                <label for="field-4" class="control-label">Email</label> 
	                                                                <input type="text" disabled class="form-control" id="email${item._id}" placeholder="AE-GX-2211"> 
	                                                            </div> 
                                                            </div>

                                                            <div class=""> 
	                                                            <div class="form-group"> 
	                                                                <label for="field-4" class="control-label">Phone</label> 
	                                                                <input type="text" disabled class="form-control" id="phone_number${item._id}" placeholder="AE-GX-2211"> 
	                                                            </div> 
                                                            </div>

                                                            

                                                            <br/>
                                                            
                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Start Location</label> 
                                                                

                                                            <textarea disabled class="form-control autogrow" id="start_location${item._id}" placeholder="Description" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 



                                                            <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Destination</label> 
                                                                

                                                            <textarea disabled class="form-control autogrow" id="destination${item._id}" placeholder="Response" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 
                                                          
                                                          
                                                           
                                                            

                                                        </div> 
                                                    </div> 
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button style="display:none; opacity:0" onclick="addRecordEvent(this)" data-id="${item._id}" data-url="/add-ticket" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none; opacity:0" onclick="deleteData(this)" data-id="${item._id}" data-url="/tickets" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="updateRecordItins(this)" data-id="${item._id}" data-url="/admin-itinerary-details" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;

            });

           modalbody1.innerHTML= viewModals;
             
               
                         
                      
    
                        
                       
                 



                  planClicked = planToView ;
                  
                  let carbounds = document.getElementById("carlist");
                  
                  let car_record='';

                  //console.log(JSON.stringify(selectedCars)+"all cars for this guy")
                  selectedCars.map((item, i) => {
                          car_record += `
                           <a href="#"><div class="col-sm-6  col-md-6 col-lg-4" >
                                <div class="widget-bg-color-icon card-box">
                                    <div class="bg-icon bg-icon-info pull-left" >
                                        <img src="${item.image|| item.images}" style="height:90px"/>
                                    </div>
                                    <div class="col-lg-6 pull-right text-right">
                                        <h3 class="text-dark"><b className="">${item.car_type} ${item.model} ${item.car_year}</b></h3>
                                        <p class="text-muted"></p>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </div></a>`; 
                         
                });
                carbounds.innerHTML=car_record; 



        //quotations and update quote notifications


        let this_user = user_name[0]
        document.getElementById("quote-id").value="CMT-QT-"+ clickedPlan;

        if(has_been_updated=="Yes"){
          document.getElementById("quote-payment-id").value='CMT-PAY-'+clickedPlan;
          document.getElementById("paystack-reference").value='CMT-REF-'+clickedPlan;

      }
        let plan_ref= 'CMPAYREF-'+clickedPlan;
        document.getElementById("quote-payment-amount").value= price_of_plan;


        if(has_been_updated=="No"){
          document.getElementById("quote-payment-id").value='NOT SET';
        document.getElementById("paystack-reference").value='NOT SET';
        }

        

         
       




		var input = document.getElementById("quote-amount");
        input.onkeyup = input.onchange = enforceFloat;

        //enforce that only a float can be inputed
function enforceFloat() {
  var valid = /^\-?\d+\.\d*$|^\-?[\d]*$/;
  var number = /\-\d+\.\d*|\-[\d]*|[\d]+\.[\d]*|[\d]+/;
  if (!valid.test(this.value)) {
    var n = this.value.match(number);
    this.value = n ? n[0] : '';
  }
}


		
        document.getElementById("send-quote").addEventListener("click", (e)=>{
          e.preventDefault();
         
          //document.getElementById("send-quote").disabled=true;

           //disable the submit button
            var btn = document.getElementById('send-quote');
        btn.disabled = true;
        btn.innerText = 'Posting...'
      


          
		  let amt = document.getElementById("quote-amount").value;

		  var status_xi = document.getElementById('quote-status');
          const status = status_xi.options[status_xi.selectedIndex].text;

          let value_text = document.getElementById("quote-amount").value;

          if(status=="--choose--"){
             var notification = alertify.notify('Choose a status', 'error', 5, function(){  console.log('dismissed'); });
			  return false;        
          }
		        
		  if(amt && amt.length){
		                  

		        		let data_msg ="Dear " + this_user + " "; 
		        		 data_msg+=" You have subscribed to the plan " + plan_ids + "on our platform  and the cumulated charges for the plan chosen is slated below."; 
		        		 data_msg+="The total cost for this package including fare charges and other"; 
		        		 data_msg+=" related charges for this plan has been reviewed and slated at NGN "+ value_text;  
		        		 data_msg+=". To proceed with this process, you are to make payments via the commute platform. "; 
		        		 data_msg+="If this message was sent to you via email you can login via the link below and proceed ";
		        		 data_msg+="to make payments."; 

		        	
			        	//console.log("clicked me..." +user_name[0])

			        	
			            let userplan_url ="http://localhost:12000/api/v1/userplan-status-update/"+ planId ;
			            let itins_url ="http://localhost:12000/api/v1/user-itinerary-status-update/"+ planId;
			            let notification_url ="http://localhost:12000/api/v1/notification"; 
			            
			            let dataNotification = {
			              user_id: this_user,
			              type: 'information',
			              description: data_msg,
			             
			              
			            };

			            

		        	   //craete notification and update status to ongoing
		        	   postNotification(notification_url,dataNotification);


		        	let dataPlan = {
			              status:status,
			              payment_status: status,
			              email: this_user,
			               has_updated: "Yes",
			               plan_id: planId,
			               price:amt,
                     createdDateOfQuotation: new Date()
			            };

			          let dataItins ={
			          	
			               //price:amt,
			                status:status,
			              user_plan_id:planId,
			              plan_id:planId

			          } 

                let dataQuotations = {
                   plan_id: planId,
                  amount:amt,
                  status: status,
                  full_name: this_user,
                  quotation_id: 'CMT-QUOTE-'+ planId,
                  email: this_user,
                  reference: 'CMT-REF-'+ planId,
                  phone_number: usersPlan[0],
                  createdDateOfQuotation: new Date()

                } 



               
    

               let quot_url = 'http://localhost:12000/api/v1/make-quotation'
               createQuotations(quot_url, dataQuotations) 

		        	 updateStatus(userplan_url, dataPlan)
		        	 updateStatus(itins_url, dataItins)
               



               setTimeout(() =>{
                  btn.disabled = false;
                window.location.reload()
               },3000)
		              
		          }
		          else{

                $("#send-quote").attr("disabled", false);
                 //document.getElementById("send-quote").disabled=false;
                   btn.disabled = false;
		            //alert('Could not upload file.');
                
		            var notification = alertify.notify('Error occured while processing update. Please ensure to update the fields on the quotation section ', 'error', 5, function(){  console.log('dismissed'); });
			         return false  
		          }
            
        });


            
  	
    }, 4000)
                      
          
            
  }


  static runAdminWallets(data){

WarLockAdmin('view_transactions','manage_transactions')
    noReadWrite('manage_transactions')

  	let datas =[...new Set(data)] || [];

        
      
    let tablebody = document.getElementById('tablebody1');
    let modalbody1 = document.getElementById('modalbody1');
    let viewModals ='';
    let template2;
    let eachRecord=``;

    let className="label-success";

  	datas.map((item,i)=>{
            console.log(item.createdDate)
            if(item.status=="Successful"){
               className="label-success"
            }else{
              className="label-warning"
            }
            eachRecord =`
                      <tr>
                          <td class=""> ${formatDate(new Date(item.createdDate))} </td>
                          <td class="">${item.reference}</td>
                          <td class="">${item.full_name}</td>
                          <td class="">${item.amount} </td>
                          <td class="">${item.email}</td>
                          <td class=""><span class="label ${className}">${item.status}</span></td>

                          <td class="">
                               <a onclick="viewRecordWalletTransactions(this)" data-url="/admin-wallet-detail" href="#" data-username="${item.full_name}" data-email="${item.email}" data-phone_number="${item.phone_number}" data-reference="${item.reference}" data-date="${formatDate(new Date(item.created_at))}" data-amount="${item.amount}" data-plan_id="${item.plan_id}"  data-quotation_id="${item.quotation_id}"  data-status="${item.status}"  id="plancat${item._id}" data-id="${item._id}"  class="table-action-btn"><i class="md md-edit"></i></a>
                               <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/wallet"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                          
                     </tr>`; 
             tablebody.insertAdjacentHTML('beforeend', eachRecord); 


             viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar"> 
                                            <div > 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Transaction Detail</h4> 
                                                </div> 
                                                <br/>
                                                <div class=""> 
                                                    <div class="row"> 
                                                         <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Created Date</label> 
                                                                <input disabled type="text" class="form-control" id="date${item._id}" placeholder="12/12/0000"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Email</label> 
                                                                <input disabled type="text" class="form-control" id="email${item._id}" placeholder="email@email.com"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Username</label> 
                                                                <input disabled  type="text" class="form-control" id="username${item._id}" placeholder="abdulrazak"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Mobile</label> 
                                                                <input disabled  type="text" class="form-control" id="phone_number${item._id}" placeholder="abdulrazak"> 
                                                            </div> 
                                                        </div>
                                                        

                                                        <div class=""> 
                                                            <div class="form-group">  
                                                                <label for="field-4" class="control-label">Amount</label> 
                                                                <input disabled type="text"  class="form-control" id="amount${item._id}" placeholder="40000"> 
                                                            </div> 
                                                            </div>

									                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Reference</label> 
                                                                <input disabled type="text"  class="form-control" id="reference${item._id}" placeholder="PAYSTACK-GX-2211"> 
                                                            </div> 
                                                        </div>
                                                    </div> 

                                                    <div class="row"> 

                                                        

                                                       <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Balance Before</label> 
                                                                <input disabled  type="text"  class="form-control" id="plan_id${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Balance After</label> 
                                                                <input disabled type="text"  class="form-control" id="quotation_id${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        
                                                       


                                                        


                                                         <div class="form-group">
									                        <label for="position">Status</label>
									                        <select disabled id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Successful</option>
									                            <option>Unpaid</option>
									                            <option>Failed</option>
									                             
									                        </select>
									                        </div>
									                    
                                                       


                                                        

                                                    </div> 
                                                    
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">

                                                <button "display:none;opacity:0"   data-id="${item._id}" data-url="/add-wallets" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                      <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button style="display:none;opacity:0"   id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                    <button  style="display:none;opacity:0" disabled onclick="deleteData(this)" data-id="${item._id}" data-url="/wallets" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                   
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;



          });
          modalbody1.innerHTML= viewModals;




  }


  static runAdminPlansManualBookings(dataCars, users){
  	//ApiAdminBotService.gobackFor()
    
     WarLockAdmin('view_bookings','manage_bookings')
         noReadWrite('manage_bookings')
  	 console.log('this page rocks...')


      
    document.getElementById("drive-test-certificate").disabled=true;


     let id = guidGenerator();
     var noHrs =0;

     
     let usernames = [];
     let useremails =[];
     let this_user_names = [...new Set(users)].filter((item)=>usernames.push(item.username) )
    


      let selectOptions_users = ``;

    


      [...new Set(users)].map((item, i) => { 
          selectOptions_users+=`<option data-with="${item.test_certificate}" id="${item.username}-${i}"  value="${item.username}">${item.email}</option>`; 
          
              
      });

      $('#email').append(selectOptions_users);

      //document.getElementById("username").innerHTML= selectOptions_users



     // Map your choices to your option value
        

        // When an option is changed, search the above for matching choices
        $('#email').on('change', function() {
           // Set selected option as variable
           var selectValue = $(this).text();




           // Empty the target field
           $('#username').empty();


           let me =this_user_names.filter((item)=>item.username== $(this).val())
           console.log(me)
           document.getElementById("drive-test-certificate").value =me[0].test_certificate;
           document.getElementById("phone_number").value =me[0].phone_number;
           
           
           // For each chocie in the selected option
          // for (i = 0; i <  magicalLookup[selectValue].length; i++) {
              // Output choice in the target field
            $('#username').append(`<option>` +  $(this).val() + "</option>");

            

           //}
        });


      var location = document.getElementById("location");
    //location.value= item.dataset.start_location;
    var destination = document.getElementById("destination");
    //destination.value = item.dataset.destination;
    var options = {
      types: ['geocode'],
      // types: [
      // '(address)'
      // ],
      componentRestrictions: {country: "NG"}
     };
    var autocomplete3 = new google.maps.places.Autocomplete(location,options);
        google.maps.event.addListener(autocomplete3, 'place_changed', function () {
            //startLoc = autocomplete3.getPlace();
            //startLoc = startLoc.formatted_address;
           
            
           
        });


         var autocomplete4 = new google.maps.places.Autocomplete(destination,options);
        google.maps.event.addListener(autocomplete4, 'place_changed', function () {
            //destination = autocomplete4.getPlace();
            
        });


      let cars_on_plan = [...new Set(dataCars)];

      let selectOptions = ``;


      cars_on_plan.map((item, i) => { 
          selectOptions+=`<option data-item="${item}">${item.car_type}</option>`; 
              
      });


      function guidGenerator() {
          var S4 = function() {
             return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
          };
          return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
      }



      // Map your choices to your option value
        var lookup = {
           'Option 1': ['Commute Saver', 'Commute Richly', 'Commute Weekend'],
           'Option 2': ['Corporate Plus', 'Corporate Lite'],
           //'Option 3': ['Option 3 - Choice 1'],
        };

        // When an option is changed, search the above for matching choices
        $('#plan_name').on('change', function() {
           // Set selected option as variable
           var selectValue = $(this).val();

           // Empty the target field
           $('#plan_categories').empty();
           
           // For each chocie in the selected option
           for (i = 0; i < lookup[selectValue].length; i++) {
              // Output choice in the target field
              $('#plan_categories').append("<option value='" + lookup[selectValue][i] + "'>" + lookup[selectValue][i] + "</option>");
           }
        });



    


  	

     document.getElementById('plan_id').value = 'CMT-PLAN-'+ id;
     let first_car = document.getElementById("car1");
     first_car.innerHTML= selectOptions;
     let second_car = document.getElementById("car2")
     second_car.innerHTML= selectOptions;
      

     let third_car = document.getElementById("car3")
     third_car.innerHTML= selectOptions;
     let uid = 'CMT-USER-'+ guidGenerator()
     //fetch the drivers assigned to these cars then push to the car lists
     let itinsData ={};
     let allItins = [];
     let  ItineraryList = [];
     let userPlanData = {};
     let cars_data = [];
     let planList = [];
     var carsSelected =[];


      
     document.body.addEventListener('click', function(e){
        if(e.target.id=="submitItinerary"){
          
           e.preventDefault();

           let emailsUser = document.getElementById('email');
            
            let emalMan = emailsUser.options[emailsUser.selectedIndex].text

            getUserdetail(emalMan);
            
          

           var notification = alertify.notify('The Plan and cars selected for these itineraries cant be modified on submit.', 'success', 5, function(){  console.log('dismissed'); });
       
            var location2a =  document.getElementById("location").value;
            var destination =  document.getElementById("destination").value;
            var testCert = document.getElementById("drive-test-certificate").value;
            var startDate = document.getElementById("start").value;
            var endDate = document.getElementById("end").value;
            var driverOpt = document.getElementById("driver-option");
            const optDriver = driverOpt.options[driverOpt.selectedIndex].text;
            var certDate = document.getElementById("testdate").value;
            var travelOpt = document.getElementById("traveloption")
            const optTraveler = travelOpt.options[travelOpt.selectedIndex].text;
            noHrs = document.getElementById("no_hrs").value;
            var plan_name = document.getElementById("plan_name").value ;
            var plancategory = document.getElementById("plan_category").value;

            var driverSchOpt = document.getElementById("driving-school");
            const driving_school = driverSchOpt.options[driverSchOpt.selectedIndex].text;

            let status_xi = document.getElementById('status');
           const status = status_xi.options[status_xi.selectedIndex].text;

            if(driverOpt=="i would like a driver"){
              certDate="";
            }

            noHrs = noHrs || 2;


            



            let car_1 = first_car.options[first_car.selectedIndex].text;
            let car_2 = second_car.options[second_car.selectedIndex].text;
            let car_3 = third_car.options[third_car.selectedIndex].text;

           
            if(plan_name =='--Kindly select a plan --'){
              var notification = alertify.notify('Select a plan name', 'error', 5, function(){  console.log('dismissed'); });
       
              return false;
            }

            if(plancategory =='--Kindly select a category --'){
               var notification = alertify.notify('Select a category for this plan', 'error', 5, function(){  console.log('dismissed'); });
       
              return false;
            }

            if(car_3 =='--Kindly select a car --'){
               var notification = alertify.notify('Select a car for this plan', 'error', 5, function(){  console.log('dismissed'); });
       
              return false;
            }
            let car_detail1 =cars_on_plan.filter(item => item.car_type == car_1);
            let car_detail2 =cars_on_plan.filter(item => item.car_type == car_2);
            let car_detail3 =cars_on_plan.filter(item => item.car_type == car_3);
        

            carsSelected = [...car_detail1,...car_detail2, ...car_detail3];

            console.log(carsSelected)
            


            //localStorage.setItem('plan',JSON.stringify(planList));
            //localStorage.setItem('cars',JSON.stringify(carsSelected));
            // localStorage.setItem('duration',noHrs);

            //var plansetIt = JSON.parse(localStorage.getItem('plan'));
            let plan_name1 = document.getElementById('plan_name')
            let plan_categories1 = document.getElementById("plan_categories");
            let itinStatus ='Pending';
            if(status=="Paid"){
              itinStatus = 'Completed'
            }else{
              itinStatus = 'Ongoing'
            }



            //valdate username and email
            let usernames = document.getElementById('username');
            let emails = document.getElementById('email');
            let usr = usernames.options[usernames.selectedIndex].text;
            let emal = emails.options[emails.selectedIndex].text
            if(emal=='--Select an email--'){
                var notification = alertify.notify('Select an email', 'error', 5, function(){  console.log('dismissed'); });
                 return false

            }
            

             if(usr=='--Select user--'){
                var notification = alertify.notify('Select a username', 'error', 5, function(){  console.log('dismissed'); });
                return false

            }

            if(localStorage.getItem('user_to_book')){
              usersFoundId = localStorage.getItem('user_to_book');
            }
           

            
             var start_location =location2a;
            let userPlanItineries = {
              plan_id: document.getElementById('plan_id').value,
              plan_category: plan_categories1.options[plan_categories1.selectedIndex].text ,//plan_categories1.value,
              plan_name:   plan_name1.options[plan_name1.selectedIndex].text ,//plan_name1.value,
              //price:
              status:status,
               certificate_id: document.getElementById("drive-test-certificate").value,
               certificate_date: document.getElementById("testdate").value,
               start_location : location2a,
               destination :destination,
               no_hours:noHrs,
               start_time :startDate,
               end_time :endDate, 
               pickup_time: endDate,
               drive_option: optDriver,
               user_id: usersFoundId,  //document.getElementById("email").value,
               travel_option:optTraveler,
               drivingschool: driving_school,
               carsSelected,
               //planChosen,
               username: usr,
               email: emal,
               phone_number: document.getElementById("phone_number").value,
        };

            
            console.log(userPlanItineries)

            ItineraryList.push(userPlanItineries)

            if(BookingValidationFails(userPlanItineries) == true){
              return false;
            }

            


            //localStorage.setItem('itins',JSON.stringify(ItineraryList));

            let allNewItineraries = userPlanItineries;  //JSON.parse(localStorage.getItem('itins'));

            var _tr;
             var dated = new Date(startDate)
            _tr = `<tr> 
                <td class="">${formatDate(dated) + " "+ endDate}</td>
                <td class="">${start_location}</td>
                <td class="">${destination}</td>
                <td class="">${optDriver}</td>
                <td class="">
                  <a href="#" id="" data-id=""  data-driver_option="${optDriver}"  data-start_time="" data-start_location="${start_location}" data-destination="${destination}" class="table-action-btn md-trigger" data-toggle="modal" data-target="#con-close-modal"><i class="md md-edit"></i></a>    
                  </td>
                </tr>`;
                $(_tr).hide().insertAfter("#startPoint").fadeIn('slow');
            

              let postUrl = 'http://localhost:12000/api/v1/admin-itinerary-add';
              createBookingSet(postUrl ,userPlanItineries)    
 
        


               if(driverOpt!="i would like a driver"){
                       let user = JSON.parse(localStorage.getItem('userToken'))

                        const userDriveTestData = {
                              username: user.user.username,
                              email: user.user.email,
                              phone_number: user.user.phoneNumber,
                              car_id:carsSelected[0].plate_number,
                              status:"Pending",
                              description:driving_school,
                              time: driving_school,
                              createdDate: formatDate(new Date()),

                             }



                        let drvUrl ='http://localhost:12000/api/v1/add-drive-test-for-user'

                        createUserDriveTestDetail(drvUrl, userDriveTestData)

                    } 

      }

    });



      document.getElementById("quote-id").value="CMT-QT-"+ id;
        document.getElementById("quote-payment-id").value='NOT SET';
        document.getElementById("paystack-reference").value='NOT SET';
        let plan_ref= 'CMPAYREF-'+id;
       // document.getElementById("quote-payment-amount").value= price_of_plan;
       




    var input = document.getElementById("quote-amount");
        input.onkeyup = input.onchange = enforceFloatEntered;

        //enforce that only a float can be inputed
    function enforceFloatEntered() {
      var valid = /^\-?\d+\.\d*$|^\-?[\d]*$/;
      var number = /\-\d+\.\d*|\-[\d]*|[\d]+\.[\d]*|[\d]+/;
      if (!valid.test(this.value)) {
        var n = this.value.match(number);
        this.value = n ? n[0] : '';
      }
    }


    





     document.getElementById("submitPlan").addEventListener('click', (e)=>{
          
        e.preventDefault()

        let plan_id  = document.getElementById('plan_id');
        let createdDate = document.getElementById("date");
        let status_xi = document.getElementById('quote-status');
        const status = status_xi.options[status_xi.selectedIndex].text;
        let username =  document.getElementById("username");
        let email = document.getElementById("email")
        let plan_name = document.getElementById('plan_name')
        let plan_categories = document.getElementById("plan_categories")
        plan_categories = plan_categories.options[plan_categories.selectedIndex].text;


        if(ItineraryList.length<= 0){
            var notification = alertify.notify('You did not add any itinerary for this plan.', 'error', 5, function(){  console.log('dismissed'); });
       
            return false
        }else{




                
                  let amt = document.getElementById("quote-amount").value;

                  var status_xis = document.getElementById('quote-status');
                  let status_QUOTE = status_xis.options[status_xis.selectedIndex].text;

                  let value_text = document.getElementById("quote-amount").value;


                   let e = document.getElementById('email')
                   let em =e.options[e.selectedIndex].text;

                   //alert(em)

                  if(status_QUOTE=="--choose--"){
                     var notification = alertify.notify('Choose a status', 'error', 5, function(){  console.log('dismissed'); });
                     return false;        
                  }
                  
                 if(amt && amt.length){
                            

                      let data_msg ="Dear " + username.value + " "; 
                       data_msg+=" You have subscribed to the plan " + plan_id.value + " referenced on " + createdDate.value+ "  and "; 
                       data_msg+="the total cost for this package including fare charges and other"; 
                       data_msg+=" related charges for this plan is slated at NGN "+ value_text;  
                       data_msg+=". To proceed with this process, you are to make payments via the commute platform. "; 
                       data_msg+="If this message was sent to you via email you can login via the link below and proceed ";
                       data_msg+="to make payments "; 

                    
                      //console.log("clicked me..." +user_name[0])

                      
                        //let userplan_url ="http://localhost:12000/api/v1/userplan-status-update/"+ planId ;
                  
                        let notification_url ="http://localhost:12000/api/v1/notification"; 
                        
                        let dataNotification = {
                          user_id: em,
                          type: 'information',
                          description: data_msg,
                         
                          
                        };

                        

                       //craete notification and update status to ongoing
                       postNotification(notification_url,dataNotification)


                     
                       let plan_name1 = document.getElementById('plan_name')
            let plan_categories1 = document.getElementById("plan_categories");

                   var usersPlan = {
                     plan_id:  plan_id.value,
                     createdDate: createdDate.value,
                    itineraries: ItineraryList ,
                    user_id: usersFoundId, 
                    carsSelected: carsSelected,
                    // plan_name:  plan_name.options[plan_name.selectedIndex].text,   //plan_name.value,
                    price: document.getElementById("quote-amount").value ,
                    // plan_categories: plan_categories,
                    status:status_QUOTE,
                    no_hours:noHrs ,
                    duration: noHrs,

                     plan_category: plan_categories1.options[plan_categories1.selectedIndex].text ,//plan_categories1.value,
              plan_name:   plan_name1.options[plan_name1.selectedIndex].text ,//plan_name1.value,

                    username: username.value,
                    email: em,
                    phone_number: document.getElementById("phone_number").value,
                  };

                  console.log(usersPlan)



                  let postUrl = 'http://localhost:12000/api/v1/admin-plan-add';
                  createBookingSet(postUrl ,usersPlan)


                
                  
              }
              else{
                //alert('Could not upload file.');

                var notification = alertify.notify('Error occured while processing update. Please ensure to update the fields on the quotation section ', 'error', 5, function(){  console.log('dismissed'); });
               return false  
              }

              
        }   
        
        

        
     })

  }

  static runAdminPayments(data){
  
WarLockAdmin('view_payments','manage_payments')
    noReadWrite('manage_payments')


     let datas =[...new Set(data)] || [];
let className="label-success";

document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })
        
      
    let tablebody= document.getElementById('tablebody1');
    //let modalbody1 = document.getElementById('modalbody1');
    let viewModals ='';
    let template2;
    let eachRecord=``;


          datas.map((item,i)=>{
            console.log(item.createdDate)
            if(item.status=="Paid"){
               className="label-success"
            }else if(item.status=='Unpaid'){
              className="label-warning"
            }else{
              className='label-danger'
            }
            eachRecord =`
                      <tr>
                          <td class=""> ${formatDate(new Date(item.createdDate))} </td>
                          <td class="">${item.reference}</td>
                          <td class="">${item.plan_id}</td>
                          <td class="">${item.amount} </td>
                          <td class="">${item.quotation_id}</td>
                          <td class=""><span class="label ${className}">${item.status}</span></td>

                          <td class="">
                               <a onclick="viewRecordWalletTransactions(this)"  data-url="/admin-payments-detail" href="#" data-username="${item.full_name}" data-email="${item.email}" data-phone_number="${item.phone_number}" data-reference="${item.reference}" data-date="${formatDate(new Date(item.createdDate))}" data-amount="${item.amount}" data-plan_id="${item.plan_id}"  data-quotation_id="${item.quotation_id}"  data-status="${item.status}"  id="plancat${item._id}" data-id="${item._id}"  class="table-action-btn"><i class="md md-edit"></i></a>
                               <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/payment"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                          
                     </tr>`; 


             tablebody.insertAdjacentHTML('beforeend', eachRecord); 



             viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar"> 
                                            <div > 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Transaction Detail</h4> 
                                                </div> 
                                                <br/>
                                                <div class=""> 
                                                    <div class="row"> 
                                                         <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Created Date</label> 
                                                                <input disabled type="text" class="form-control" id="date${item._id}" placeholder="12/12/0000"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Email</label> 
                                                                <input disabled type="text" class="form-control" id="email${item._id}" placeholder="email@email.com"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Username</label> 
                                                                <input disabled  type="text" class="form-control" id="username${item._id}" placeholder="abdulrazak"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Mobile</label> 
                                                                <input disabled  type="text" class="form-control" id="phone_number${item._id}" placeholder="abdulrazak"> 
                                                            </div> 
                                                        </div>
                                                        

                                                        <div class=""> 
                                                            <div class="form-group">  
                                                                <label for="field-4" class="control-label">Amount</label> 
                                                                <input disabled type="text"  class="form-control" id="amount${item._id}" placeholder="40000"> 
                                                            </div> 
                                                            </div>

									                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Reference</label> 
                                                                <input disabled type="text"  class="form-control" id="reference${item._id}" placeholder="PAYSTACK-GX-2211"> 
                                                            </div> 
                                                        </div>
                                                    </div> 

                                                    <div class="row"> 

                                                        

                                                       <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Plan ID</label> 
                                                                <input disabled  type="text"  class="form-control" id="plan_id${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Quotation ID</label> 
                                                                <input disabled type="text"  class="form-control" id="quotation_id${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        
                                                       


                                                        


                                                         <div class="form-group">
									                        <label for="position">Status</label>
									                        <select disabled id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Successful</option>
									                            <option>Unpaid</option>
									                            <option>Failed</option>
									                             
									                        </select>
									                        </div>
									                    
                                                       


                                                        

                                                    </div> 
                                                    
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">

                                                <button "display:none;opacity:0"   data-id="${item._id}" data-url="/add-wallets" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                      <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button style="display:none;opacity:0"   id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                    <button  style="display:none;opacity:0" disabled onclick="deleteData(this)" data-id="${item._id}" data-url="/wallets" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                   
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;

          });
modalbody1.innerHTML= viewModals;



  }


  static runAdminQuotations(data){
     WarLockAdmin('view_quotations', 'manage_quotations')
         noReadWrite('manage_quotations')
// WarLockAdmin('view_payments','manage_payments')
// WarLockAdmin('view_transactions','manage_transactions')
  	let datas =[...new Set(data)] || [];

  	document.getElementById("search").addEventListener("keyup",(e)=>{
   	 searchTable() 
   })

        
      
    let tablebody = document.getElementById('tablebody1');
    //let modalbody1 = document.getElementById('modalbody1');
    let viewModals ='';
    let template2;
    let eachRecord=``;
    let className="label-success";
    let payNow='';
  	datas.map((item,i)=>{
            console.log(item.createdDate)
            if(item.status=="Paid"){
               className="label-success"
            }else if(item.status=='Unpaid'){
              className="label-warning"
            }else{
              className='label-danger'
            }
            eachRecord =`
                      <tr>
                          <td class=""> ${formatDate(new Date(item.createdDate))} </td>
                          <td class="">${item.reference}</td>
                          <td class="">${item.plan_id}</td>
                          <td class="">${item.amount} </td>
                          <td class="">${item.quotation_id}</td>
                          <td class=""><span class="label ${className}">${item.status} </span> ${payNow}</td>
                          

                          <td class="">
                               <a onclick="viewRecordWalletTransactions(this)" data-url="/admin-quotations-detail" href="#" data-username="${item.full_name}" data-email="${item.email}" data-phone_number="${item.phone_number}" data-reference="${item.reference}" data-date="${formatDate(new Date(item.created_at))}" data-amount="${item.amount}" data-plan_id="${item.plan_id}"  data-quotation_id="${item.quotation_id}"  data-status="${item.status}"  id="plancat${item._id}" data-id="${item._id}"  class="table-action-btn"><i class="md md-edit"></i></a>
                               <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/quotation"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                     </tr>`; 
             tablebody.insertAdjacentHTML('beforeend', eachRecord); 


             viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar"> 
                                            <div > 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Transaction Detail</h4> 
                                                </div> 
                                                <br/>
                                                <div class=""> 
                                                    <div class="row"> 
                                                         <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Created Date</label> 
                                                                <input disabled type="text" class="form-control" id="date${item._id}" placeholder="12/12/0000"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Email</label> 
                                                                <input disabled type="text" class="form-control" id="email${item._id}" placeholder="email@email.com"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Username</label> 
                                                                <input disabled  type="text" class="form-control" id="username${item._id}" placeholder="abdulrazak"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Mobile</label> 
                                                                <input disabled  type="text" class="form-control" id="phone_number${item._id}" placeholder="abdulrazak"> 
                                                            </div> 
                                                        </div>
                                                        

                                                        <div class=""> 
                                                            <div class="form-group">  
                                                                <label for="field-4" class="control-label">Amount</label> 
                                                                <input disabled type="text"  class="form-control" id="amount${item._id}" placeholder="40000"> 
                                                            </div> 
                                                            </div>

									                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Reference</label> 
                                                                <input disabled type="text"  class="form-control" id="reference${item._id}" placeholder="PAYSTACK-GX-2211"> 
                                                            </div> 
                                                        </div>
                                                    </div> 

                                                    <div class="row"> 

                                                        

                                                       <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Plan ID</label> 
                                                                <input disabled  type="text"  class="form-control" id="plan_id${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>


                                                        <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-5" class="control-label">Quotation ID</label> 
                                                                <input disabled type="text"  class="form-control" id="quotation_id${item._id}" placeholder="unlimited"> 
                                                            </div> 
                                                        </div>
                                                        
                                                       


                                                        


                                                         <div class="form-group ">
									                        <label for="position">Status</label>
									                        <select disabled id="status${item._id}" class="form-control" data-style="btn-white">
									                            <option>Successful</option>
									                            <option>Unpaid</option>
									                            <option>Failed</option>
									                             
									                        </select>
									                        </div>
									                    
                                                       


                                                        

                                                    </div> 
                                                    
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">

                                                <button "display:none;opacity:0"   data-id="${item._id}" data-url="/add-wallets" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                      <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button style="display:none;opacity:0"   id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                    <button  style="display:none;opacity:0" disabled onclick="deleteData(this)" data-id="${item._id}" data-url="/wallets" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                   
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

		      `;

          });
modalbody1.innerHTML= viewModals;


  }



 



  static runAdminDriveTest(driveTest,users){
    WarLockAdmin('view_cars','manage_cars')
    WarLockAdmin('view_users','manage_users')
        noReadWrite('manage_users')
            noReadWrite('manage_cars')
     GateKeepersForAdmin();
      console.log("loading plan page")
    document.getElementById("search").addEventListener("keyup",(e)=>{
      searchTable() 
    })
      


    
  let data = [...driveTest]
  let template2 ='';
    let viewModals = '';



    
    const tablebody1 = document.getElementById('tablebody1');
    const modalbody1 = document.getElementById("modalbody1");



    
    // if(data.length<=0){
    //   return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    // }

    data.map((item, i) => { 
      let className='';

        if(item.status=="Ongoing"){
                             
                className=`label-danger`;
         }else if(item.status=="Completed"){
                          
                className= `label-success`;
        }else{
                            
              className=`label-warning`;
         }      
        template2 =`<tr>
                         
                          
                          <td>${item.createdDate}</td>
                          <td>${item.email}</td>
                          <td >${item.username}</td>
                           <td >${item.phone_number}</td>
                           <td >${item.description}</td>
 
                           <td><span class="label ${className}">${item.status}</span></td>
                           <td >
                               <a onclick="viewInspectionUpdate(this)" href="#" data-car_id="${item.car_id}" data-username="${item.username}" data-phone="${item.phone_number}" data-email="${item.email}" data-date="${formatDate(new Date(item.createdDate))}"  data-description="${item.description}"  data-status="${item.status}" id="plancat${item._id}" data-time="${item.time}" data-id="${item._id}" data-url="/admin-inspection-detail" class="table-action-btn"><i class="md md-edit"></i></a>
                                <a onclick="deleteRecord(this)" data-id="${item._id}" data-url="/drive-test"  id="delete" class="table-action-btn "><i class="md md-close"></i></a></td>
                           
                           </td>
                   </tr>`;

      viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class="slimScrollBar" style=""> 
                                            <div class=""> 
                                                <div class=""> 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect2(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    
                                                </div> 
                                                
                                                <div class=" text-left">
                                        
                                        <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Car Status</label>
                                                    <div>
                                                    <select id="status${item._id}" class="selectpicker form-control" data-style="btn-white" tabindex="-98">
                                                       <option>Pending</option>
                                                       <option>Completed</option>
                                                      

                                                       
                                                    </select></div>
                                            </div>
                                        </div>
                                  
                                        
                                           <div class="form-group">
                                            <label for="inputColor">Car ID</label>
                                            <input disabled id="car_id${item._id}" type="text" class="form-control"  value="Blue">
                                        </div>

                    
                                        <div class="form-group">
                                            <label for="inputColor"> Name</label>
                                            <input disabled id="username${item._id}" type="text" class="form-control"  value="Blue">
                                        </div>

                                        <div class="form-group ">
                                            <label for="inputColor">Email</label>
                                            <input disabled id="email${item._id}" type="text" class="form-control"  value="Blue">
                                        </div>
                                        
                                        <div class="form-group">
                                        <div class="m-t-20">
                                                    <label for="position">Phone</label>
                                                    <div>

                                                    <input disabled id="phone_number${item._id}" type="text" class="form-control"  value="Blue">
                                        
                                                    
                                                    </div>
                                            </div>
                                        </div>

                                                       

                                        <div class="form-group">
                                            <label for="inputLicense">Test Center</label>
                                            <input type="text" disabled class="form-control" id="time${item._id}" value="AB 294 XD">
                                            
                                        </div>
                                      
                    
                                        <div class="">
                                        <div class="form-group">
                                            <label for="inputCarDescription">Description</label>
                                            <textarea disabled id="description${item._id}" class="form-control autogrow" id="inputCarDescription" placeholder="The car is neat and the engine is working properly." style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>
                                        </div>

                                        <br/>
                                       

                                         <div class="form-group">
                                            <label for="inputLicense">Date</label>
                                            <input type="text" disabled class="form-control" id="date${item._id}" value="AB 294 XD">
                                            
                                        </div>
                            </div>
                            
                           
                    
                                        
                                        
                                        
                                </div> 
                                                <div style="clear:both;display:table;margin-right:0px">
                                                <button style="display:none" style="margin-right:5px;display:none" onclick="addCarRecordEvent(this)" data-id="${item._id}" data-url="/add-cars" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none" style="margin-right:5px;" onclick="deleteData(this)" data-id="${item._id}" data-url="/faqs" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button style="margin-right:5px;" id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button style="margin-right:5px;" onclick="updateInspectionAction(this)" data-id="${item._id}" data-url="/admin-drive-test-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>



        

          `;

        tablebody1.insertAdjacentHTML('beforeend', template2);
    });

    $('#publisher').on('change', function(e) {
      let selector = $(this).val();
      $("#site > option").hide();
      $("#site > option").filter(function(){return $(this).data('pub') == selector}).show();
    });

    modalbody1.innerHTML=viewModals;
  
   

  }




  static runAdminPreviledges(previledges){

    GateKeepersForAdmin();

    WarLockAdmin('view_settings','manage_settings')
        noReadWrite('manage_settings')
  
    document.getElementById("search").addEventListener("keyup",(e)=>{
     searchTable() 
   });

    addClick()



    let data = [...previledges]

    console.log(previledges)
    
    
        let template2 ='';
    let viewModals = '';
    
    const tablebody1 = document.getElementById('tablebody1');
    const modalbody1 = document.getElementById("modalbody1");
    let previledgesModal = document.getElementById("modalbody2");

    if(data.length<=0){
      return tablebody1.innerHTML = `<h6 style="text-align:center">No records Yet</h6>`;
    }

    let actionableRoles =``;
    let usergroups_old = data[0].usergroup_set;

    let allroles =``;

    usergroups_old.forEach(item=> allroles+=item +',')


    data.map((item, i) => { 
      let className = "label-success"
           



        template2 =`<tr>

        <td>${item.previledges_info}</td>
        <td>${item.previledges_description}</td>
                        
         <td>
               
              <a onclick="RolesUpdate(this)" href="#" data-id="${item._id}" data-info="${item.previledges_info}" data-description="${item.previledges_description}"  id="plancat${item._id}"  data-url="/admin-role-detail" class="table-action-btn"><i class="md md-edit"></i></a>
        
          </td>

          <td>
            <a onclick="viewPreviledges(this)" data-madmins="${item.manage_admins}" data-admins="${item.view_admins}" data-msettings="${item.manage_settings}" data-settings="${item.view_settings}" data-musers="${item.manage_settings}" data-users="${item.view_users}" data-mfaqs="${item.manage_faqs}" data-faqs="${item.view_faqs}" data-mtickets="${item.manage_tickets}" data-tickets="${item.view_tickets}" data-mtransactions="${item.manage_transactions}" data-transactions="${item.view_transactions}" data-mquotations="${item.manage_quotations}"  data-quotations="${item.view_quotations}"  data-mpayments="${item.manage_payments}" data-payments="${item.view_payments}" data-mpartners="${item.manage_partners}" data-partners="${item.view_partners}" data-mdrivers="${item.manage_drivers}" data-drivers="${item.view_drivers}" data-mcars="${item.manage_cars}"  data-cars="${item.view_cars}" data-msos="${item.manage_sos}" data-sos="${item.view_sos}"  data-mpackages="${item.manage_package}" data-packages="${item.view_package}" data-mbookings="${item.manage_bookings}" data-bookings="${item.view_bookings}" data-id="${item._id}" data-role="${item.previledges_info}" data-url="/admin-role-previledges"  id="delete" class="table-action-btn "><i class="glyphicon glyphicon-eye-open"></i></a>
                           
         
          </td>

          
      </tr>`;

      viewModals+=  `<div style="display:none" id="con-close-modal-${item._id}" class="fade in mebox" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true" >
                                        <div class=" slimScrollBar" > 
                                            <div > 
                                                <div > 
                                                    <button id="close-id" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    <h4 class="modal-title">Roles Detail</h4> 
                                                </div> 
                                                <br/>
                                                <div > 
                                           
                                                        

                                                       

                                          <div class=""> 
                                                            <div class="form-group"> 
                                                                <label for="field-4" class="control-label">Role</label> 
                                                                <input type="text" data-usergroups_old="${allroles}" class="form-control" id="role${item._id}" placeholder="9000"> 
                                                            </div> 
                                                        </div>
                                    



                                           <div class="form-group"> 
                                                                <label for="field-3" class="control-label">Description</label> 
                                                                

                                                            <textarea class="form-control autogrow" id="description${item._id}" placeholder="description" style="overflow: hidden; word-wrap: break-word; resize: horizontal; height: 104px;"></textarea>

                                                            </div> 
                                      
                                                        


                                                        

                                                    </div> 
                                                   
                                                    
                                                    <div class="row"> 
                                                        

                                                    </div> 
                                                </div> 
                                                <div class="modal-footer">
                                                <button onclick="RolesAddAction(this)" data-id="${item._id}" data-url="/add-roles" id="create" style="display:none" type="button" class="btn btn-success waves-effect" data-dismiss="modal">Create</button> 
                                                     <button style="display:none;opacity:0" onclick="deleteData(this)" data-id="${item._id}" data-url="/plan-package" data-delete_type="${item.plan_name}" id="delete" type="button" class="btn btn-danger waves-effect" data-dismiss="modal">Delete</button> 
                                                    <button id="cancle" data-id="${item._id}" onclick="addCloseEffect(this)" type="button" class="btn btn-default waves-effect" data-dismiss="modal">Close</button> 
                                                    <button onclick="RolesUpdateAction(this)" data-id="${item._id}" data-url="/admin-role-detail" id="update" type="button" class="btn btn-info waves-effect waves-light">Save Changes</button> 
                                                </div> 
                                            </div> 
                                        </div>
                                    </div>        

          `;

        actionableRoles+=`<div style="display:none"  id="con-close-modala-${item._id}" class="" tabindex="-1"  aria-hidden="true" >
                     
                                <button id="close-id" data-id="${item._id}" onclick="addCloseEffect2(this)" type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> 
                                                    
<form class="form-horizontal" role="form" data-parsley-validate="" novalidate="" style="display:none"  id="con-close-modalla${item._id}">
                
                    <div class="form-group col-sm-6">
                      <label for="" class="col-sm-2 control-label">Role Title</label>
                      <div class="col-sm-9">
                        <input type="text" required=""  disabled parsley-type="text" class="form-control" id="userrole-${item._id}" value="${item.previledges_info}">
                      </div>
                    </div>
                    
                    <div class="form-group col-sm-6">
                        <label for="" class="col-sm-4 control-label">Status</label>
                        <div class="col-sm-7">
                          <select class="form-control" data-status="${item.status}" id="status${item._id}">
                            <option>Active</option>
                            <option>Disabled</option>
                            <option>Suspended</option>
                          </select>
                        </div>
                    </div>
  
                    
                    
                    <div class="clearfix"></div>


      
      

                    <h4 class="m-t-10">Roles and Permission</h4>
                    <div class="m-t-10 m-b-30" style="border:0.5px solid #4c3392;"></div>
                    <div class="clearfix"></div>

                    <div >
                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6 ">
                          <input id="payments${item._id}" data-info="${item.previledges_info}" data-payments="${item.view_payments}" type="checkbox" data-field="view_payments"   data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="payments" class=""  >View Payments </label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6 ">
                          <input id="mpayments${item._id}" data-info="${item.previledges_info}" data-payments="${item.manage_payments}" type="checkbox" data-field="manage_payments"   data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="payments" class=""  >Manage Payments </label>
                        </div>
                        <br/>

                      </div>
                          <br/>
                      <div class="form-group col-sm-12 ">
                        <div class="checkbox checkbox-primary col-sm-6 ">
                          <input id="transactions${item._id}" data-transactions="${item.view_transactions}" data-info="${item.previledges_info}" type="checkbox" data-field="view_transactions"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="topup-transactions" class="">View Wallet</label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6 ">
                          <input id="mtransactions${item._id}" data-transactions="${item.manage_transactions}" data-info="${item.previledges_info}" type="checkbox" data-field="manage_transactions"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="topup-transactions" class="">Manage Wallet </label>
                        </div>


                      </div>
                          <br/>
                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="quotations${item._id}"data-info="${item.previledges_info}"  data-quotations="${item.view_quotations}" data-field="view_quotations" type="checkbox"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="quotations" class="">View Quotations </label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="mquotations${item._id}"data-info="${item.previledges_info}"  data-quotations="${item.manage_quotations}" data-field="view_quotations" type="checkbox"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="quotations" class="">Manage Quotations </label>
                        </div>


                      </div>
                    </div>

                    <div >
                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="cars${item._id}" data-info="${item.previledges_info}" data-cars="${item.view_cars} type="checkbox" data-field="view_cars"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="cars" class="">View Cars </label>
                        </div>

                         <div class="checkbox checkbox-primary col-sm-6">
                          <input id="mcars${item._id}" data-info="${item.previledges_info}" data-cars="${item.manage_cars} type="checkbox" data-field="view_cars"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="cars" class="">Manage Cars </label>
                        </div>

                      </div>
                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="drivers${item._id}" data-info="${item.previledges_info}" data-drivers="${item.view_drivers}" type="checkbox" data-field="view_drivers" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="drivers" class="">View Drivers </label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="mdrivers${item._id}" data-info="${item.previledges_info}" data-drivers="${item.manage_drivers}" type="checkbox" data-field="view_drivers" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="drivers" class="">Manage Drivers </label>
                        </div>


                      </div>
                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="partners${item._id}" data-info="${item.previledges_info}" data-partners="${item.view_partners}" type="checkbox" data-field="view_partners"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="partners" class="">View Partners </label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="mpartners${item._id}" data-info="${item.previledges_info}" data-partners="${item.manage_partners}" type="checkbox" data-field="view_partners"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="partners" class="">Manage Partners </label>
                        </div>


                      </div>
                    </div>

                    <div >
                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="sos${item._id}" type="checkbox" data-info="${item.previledges_info}" data-sos="${item.view_sos}" data-field="view_sos" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="sos" class="">View SOS </label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="msos${item._id}" type="checkbox" data-info="${item.previledges_info}" data-sos="${item.manage_sos}" data-field="view_sos" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="sos" class="">Manage SOS </label>
                        </div>


                      </div>
                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="packages${item._id}" data-info="${item.previledges_info}" data-packages="${item.view_package}" type="checkbox" data-field="view_package"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-packages" class="">Manage Packages </label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="mpackages${item._id}" data-info="${item.previledges_info}" data-packages="${item.manage_package}" type="checkbox" data-field="view_package"  data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-packages" class="">Manage Packages </label>
                        </div>

                      </div>
                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="bookings${item._id}" data-info="${item.previledges_info}" data-bookings="${item.view_bookings}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">View Bookings </label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="mbookings${item._id}" data-info="${item.previledges_info}" data-bookings="${item.manage_bookings}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">Manage Bookings </label>
                        </div>

                      </div>

                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="tickets${item._id}" data-info="${item.previledges_info}" data-bookings="${item.view_tickets}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">View Tickets</label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="mtickets${item._id}" data-info="${item.previledges_info}" data-bookings="${item.manage_tickets}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">Manage Tickets</label>
                        </div>

                      </div>

                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="faqs${item._id}" data-info="${item.previledges_info}" data-faqs="${item.view_faqs}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">View Faqs </label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="mfaqs${item._id}" data-info="${item.previledges_info}" data-faqs="${item.manage_faqs}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">Manage Faqs </label>
                        </div>

                      </div>

                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="users${item._id}" data-info="${item.previledges_info}" data-bookings="${item.view_users}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">View Users</label>
                        </div>

                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="musers${item._id}" data-info="${item.previledges_info}" data-bookings="${item.manage_users}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">View Users</label>
                        </div>


                      </div>


                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary  col-sm-6">
                          <input id="admins${item._id}" data-info="${item.previledges_info}" data-users="${item.view_admins}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">View Admins </label>
                        </div>

                        <div class="checkbox checkbox-primary  col-sm-6">
                          <input id="madmins${item._id}" data-info="${item.previledges_info}" data-users="${item.manage_admins}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">Manage Admins </label>
                        </div>

                      </div>

                      <div class="form-group col-sm-12">
                        <div class="checkbox checkbox-primary col-sm-6">
                          <input id="settings${item._id}" data-info="${item.previledges_info}" data-settings="${item.view_settings}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">View Settings </label>
                        </div>


                         <div class="checkbox checkbox-primary col-sm-6">
                          <input id="msettings${item._id}" data-info="${item.previledges_info}" data-settings="${item.manage_settings}" type="checkbox"  data-field="view_bookings" data-id="${item._id}" onchange="update_value_checked_previledges(this)" data-url="/admin-previledges-update" type="checkbox" class=""  value="false">
                          <label for="plan-bookings" class="">Manage Settings </label>
                        </div>


                      </div>
                    </div>

                    <div class="form-group col-sm-12">
                       <button id="saveChanges${item._id}" type="button" class="btn btn-primary btn-custom btn-rounded waves-effect waves-light pull-right">Save</button>
                      
                    </div>
                  </form>

</div>`

        tablebody1.insertAdjacentHTML('beforeend', template2);
    });

    modalbody1.innerHTML=viewModals;
    previledgesModal.innerHTML=actionableRoles;
      
   

  }





  static runEndpoints(){
  	GateKeepersForAdmin();


    if(document.getElementById("add-new")){
	  	document.getElementById("add-new").addEventListener("click",(e)=>{

        if(document.getElementById('user-id')){
          document.getElementById('user-id').innerHTML="";
        }
	      

	      document.getElementById("first-view").style.display="none";


	      const loader = document.getElementById("loader");
          loader.style.display = 'block';
           loader.style.zIndex="9999999";


		    setTimeout(()=>{
		      loader.style.display = 'none';
		      document.getElementById("second-view").style.display="block";
		    },2000)
		     
   
    
    



	    })
	 }
   let app =document.getElementById('app')
   app.style.display="none"
    ApiAdminBotService.goBack()
    const loader = document.getElementById("loader");
    loader.style.display = 'block';
    loader.style.zIndex="9999999";
  	
		window.addEventListener('load', (event) => {
		  //event.preventDefault();
		  const user = JSON.parse(localStorage.getItem('userToken'));
		  if (!user) {
		    window.location.href = '/';
		  }

      if(user.user.roles!='user'){
            

                if(document.getElementById("balance")){
                      document.getElementById("balance").style.display="none"
                }

                if(document.getElementById("new-balance")){
                document.getElementById("new-balance").style.display="none"
              }
          

          }else{
                    if(document.getElementById("balance")){
                      document.getElementById("balance").style.display="block"
                }

                if(document.getElementById("new-balance")){
                document.getElementById("new-balance").style.display="block"
                 }

          }
		  const urls = [
	         activeUrl + `/admin-users`,
	     	 activeUrl + `/admin-admins`,
	     	 activeUrl+ `/admin-drivers`,
	     	 activeUrl+ `/admin-partners`,
	     	 activeUrl+`/admin-profile/`+ user.user._id,
	     	 activeUrl+ `/admin-plan-package`,
	     	 activeUrl+ `/admin-plan-package-corporate`,
	     	 activeUrl+`/admin-sos`,
	     	 activeUrl+ `/admin-tickets`,
	     	 activeUrl+`/admin-faqs`,
	     	 activeUrl+`/admin-settings-google`,
	     	 activeUrl+ `/admin-settings-facebook`,
	     	 activeUrl+`/admin-settings-paystack`,
	     	 activeUrl+`/admin-settings-email`,
	     	 activeUrl+`/admin-settings-bucket`,
	     	 activeUrl+`/admin-settings-instagram`,
	     	 activeUrl+`/admin-cars-mgt`,	     	 
	     	 activeUrl+ `/admin-itineraries`,
	     	 activeUrl+ `/admin-users-plan`,
             

	     	 activeUrl+ `/admin-sales-today`,
	     	 activeUrl+ `/payment-history`,
	     	 activeUrl+ `/payment-payments`,
	     	 activeUrl+ `/payment-quotations`,
	     	 activeUrl+ `/get-cars-info`,
          activeUrl+`/admin-inspection`,
         activeUrl+`/admin-drive-test`,
          activeUrl+`/admin-previledges`,
			   activeUrl+ `/admin-sales-yesterday`,
         activeUrl+ `/admin-sales-lastweek`,
         activeUrl+ `/admin-users-month-ago`,




	     	 
	     	
	     	
	     	
	     	
	     	 
	     	 
		  ];

		   const page_id_attribute = document.getElementById("admin").getAttribute("data-pageid")
           const pageId=page_id_attribute;
           console.log("my id:"+ pageId)
		   

		  const promises = urls.map(url => fetch(url, {
		    method: 'GET',
            headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json',
              'x-access-token': user.token,
           },
           mode: 'cors',
		  }).then(response => response.json()));

		  Promise.all(promises).then((datas) => {
		     loader.style.display = 'none';
		    
		     console.log(datas)
		    switch(pageId){
		    	 //switches for views
		    	case "admin-dashboard":
		    	   ApiAdminBotService.runDashboard(
		    	   	datas[0].data[0].users,
		    	   	datas[3].data[0].partners,
		    	   	datas[2].data[0].drivers,
		    	   	datas[16].data[0].carsAvailable,
		    	   	datas[8].data[0].intervention,
		    	   	datas[17].data[0].itineraries,
		    	   	//today
		    	   	datas[19].data[0].todaySales,

		    	   	//yesterday
              datas[27].data[0].yesterdaysSales,

		    	   	//lastweek
              datas[28].data.weeklySales,

		    	   	//lastMonth

               datas[29].data.lastMonth,
		    	   	);
             app.style.display="block"
   
		    	   break;
		    	case "admin-users":
		    	  ApiAdminBotService.runAdminUsers(datas[0].data[0].users);
              app.style.display="block"
		    	  break;
		    	case "admin-admins":
		    	  ApiAdminBotService.runAdminAdmins(datas[1].data[0].admins)
              app.style.display="block"
		    	  break;
		    	case "admin-drivers":
		    	  ApiAdminBotService.runAdminDrivers(datas[2].data[0].drivers,datas[16].data[0].carsAvailable)
              app.style.display="block"
		    	  break;
		    	case "admin-partners":
		    	  ApiAdminBotService.runAdminPartners(datas[3].data[0].partners)
              app.style.display="block"
		    	  break;
		    	case "admin-profile":
		    	  ApiAdminBotService.runAdminProfile(datas[4].data[0].profile)
              app.style.display="block"
		    	  break;  
		    	case "admin-plan-package":
		    	  ApiAdminBotService.runPlanPackage(datas[5].data[0].individualPlans, datas[6].data[0].corporatePlans );
              app.style.display="block"
		    	  break;
		    	case "admin-sos":
		    	console.log(datas[7].data[0].redFlag)
		    	 ApiAdminBotService.runAdminSOS(datas[7].data[0].redFlag);
             app.style.display="block"
		    	 break;
		    	case "admin-tickets":
		    	 ApiAdminBotService.runAdminTickets(datas[8].data[0].intervention, datas[1].data[0].admins,datas[0].data[0].users);
             app.style.display="block"
		    	  break;
		    	 
		    	case "admin-enquiries":
		    	 let ticket = datas[8].data[0].intervention;
		    	 const enquiries = ticket.filter((item)=>item.category==="General Enquiries")
		    	 console.log("here in enquiries"+ enquiries)
		    	 ApiAdminBotService.runAdminTickets(enquiries, datas[1].data[0].admins,datas[0].data[0].users);
             app.style.display="block"
		    	  break;
		    	 

		    	case "admin-feedback":
		    	 let ticketFeed = datas[8].data[0].intervention;
		    	 const feedback = ticketFeed.filter((item)=>item.category==="Feedback")
		    	 ApiAdminBotService.runAdminTickets(feedback, datas[1].data[0].admins,datas[0].data[0].users);
             app.style.display="block"
		    	  
		    	 break;

		    	 case "admin-technical-support":
		    	  let ticketTech =  datas[8].data[0].intervention;
                  const technicalSupport = ticketTech.filter((item)=>item.category=="Feedback");
		    	  ApiAdminBotService.runAdminTickets(technicalSupport, datas[1].data[0].admins,datas[0].data[0].users);
              app.style.display="block"
		    	  break;
		    	case "admin-faqs":
		    	  ApiAdminBotService.runAdminFaqs(datas[9].data[0].faqs);
              app.style.display="block"
		    	  break;

		    	case "admin-settings-google":
		    	  ApiAdminBotService.runSettings(datas[10].data[0].googleSettings);
              app.style.display="block"
		    	  break;
                case "admin-settings-facebook":
		    	  ApiAdminBotService.runSettings(datas[11].data[0].facebookSettings);
              app.style.display="block"
		    	  break;

                case "admin-settings-paystack":
		    	  ApiAdminBotService.runSettings(datas[12].data[0].paystackSettings);
              app.style.display="block"
		    	  break;
		    	case "admin-settings-email":
		    	  ApiAdminBotService.runSettings(datas[13].data[0].sendgridSettings);
              app.style.display="block"
		    	  break;

                case "admin-settings-bucket":
		    	  ApiAdminBotService.runSettings(datas[14].data[0].awsSettings);
              app.style.display="block"
		    	  break;

                case "admin-settings-instagram":
		    	  ApiAdminBotService.runSettings(datas[15].data[0].instagramSettings);
              app.style.display="block"
		    	  break;

		    	case "admin-cars-mgt" :
		    	 ApiAdminBotService.runAdminCarsMgt(datas[16].data[0].carsAvailable, 
		    	 	datas[23].data[0].carInfo,
            datas[2].data[0].drivers

		    	 	)
             app.style.display="block"
		    	 break;
		    	case "admin-bookings" :
		    	 ApiAdminBotService.runAdminPlans( datas[18].data[0].usersPlan)
             app.style.display="block"
		    	 break;

		    	case "plan-detail-admin":
		    	  ApiAdminBotService.runAdminPlansDetail(datas[18].data[0].usersPlan);
              app.style.display="block"
		    	   break;

		    	case "plan-manual-bookings-admin":
		    	  ApiAdminBotService.runAdminPlansManualBookings(datas[16].data[0].carsAvailable, datas[0].data[0].users);
              app.style.display="block"
		    	   break;

		    	case "admin-itineraries":
                   ApiAdminBotService.runAdminItineraries(datas[17].data[0].itineraries, datas[2].data[0].drivers)
                     app.style.display="block"
		    	   break;
		    	case "admin-wallets":
		    	 ApiAdminBotService.runAdminWallets(datas[20].data[0].wallets)
             app.style.display="block"
		    	   break;
		    	case "admin-payments":
		    	 ApiAdminBotService.runAdminPayments(datas[21].data[0].payments)
             app.style.display="block"
		    	   break;
		    	case "admin-quotations":
		    	 ApiAdminBotService.runAdminQuotations(datas[22].data[0].quotations)
             app.style.display="block"
		    	  break;
		    	case "admin-redo-inspection":
		    	 ApiAdminBotService.runAdminInspection(datas[24].data[0].inspections) //24
             app.style.display="block"
		    	 break;
          case "admin-inspection-add":
           ApiAdminBotService.runAdminInspectionAdd( 'add-inspection' , datas[0].data[0].users, datas[3].data[0].partners) //24
             app.style.display="block"
           break;
           case "admin-drive-test-add":
           ApiAdminBotService.runAdminInspectionAdd('add-drive-test', datas[0].data[0].users, datas[3].data[0].partners) //24
             app.style.display="block"
           break; 
		    	case "admin-drive-test":
		    	 ApiAdminBotService.runAdminDriveTest(datas[25].data[0].testDrive, datas[0].data[0].users)//25
             app.style.display="block"
		    	 break;
         case "admin-previledges":
           ApiAdminBotService.runAdminPreviledges(datas[26].data[0].previledges)
             app.style.display="block"
           break;  
		    	default:
            app.style.display="block"
             window.location.href='./admin'
		    	   // ApiAdminBotService.runDashboard(datas[0].data[0].users,
              // datas[3].data[0].partners,
              // datas[2].data[0].drivers,
              // datas[16].data[0].carsAvailable,
              // datas[8].data[0].intervention,
              // datas[17].data[0].itineraries,
              // //today
              // datas[19].data[0].todaySales,

              //yesterday

              //lastweek

              //lastMonth);
		    	    break;


		    }

		  }).catch((error) => {
		    throw error;
		  });
	});

  }


   
}









 /*
      Function to carry out the actual PUT request to S3 using the signed request from the app.
    */
 window.uploadFile = (file, signedRequest, url) =>{
    if(document.getElementById('preview')){
      document.getElementById('preview').src = url;
            document.getElementById('avatar-url').value = url;
      }
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){

            if( document.getElementById('preview')){
              document.getElementById('preview').src = url;
            document.getElementById('avatar-url').value = url;
            }
            

            var notification = alertify.notify('Successfully uploaded avatar.', 'success', 5, function(){  console.log('dismissed'); });
	           
          }
          else{
            //alert('Could not upload file.');

            var notification = alertify.notify('Could not perform upload. ', 'error', 5, function(){  console.log('dismissed'); });
	           
          }
        }
      };
      xhr.send(file);
    }

    /*
      Function to get the temporary signed request from the app.
      If request successful, continue to upload the file using this signed
      request.
    */
window.getSignedRequest = (file) =>{
      const xhr = new XMLHttpRequest();
    
      xhr.open('GET', `http://localhost:12000/api/v1/sign-s3?file-name=${file.name}&file-type=${file.type}`);
        xhr.setRequestHeader('Access-Control-Allow-Headers', '*');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            uploadFile(file, response.signedRequest, response.url);
          }
          else{
            alert('Could not get signed URL.');
          }
        }
      };
      xhr.send();
    }

    /*
     Function called when file input updated. If there is a file selected, then
     start upload procedure by asking for a signed request from the app.
    */
window.initUpload =() =>{
	console.log("upload magic..")
      const files = document.getElementById('file-input').files;
      const file = files[0];
      if(file == null){
        return alert('No file selected.');
      }
      getSignedRequest(file);
    }

    /*
     Bind listeners when the page loads.
    */


    if (document.getElementById('preview')) {
    document.addEventListener('DOMContentLoaded',() => {

	     document.body.addEventListener('change', (e)=>{
	  	 	if(e.target.id=='file-input'){
	  	 		console.log('upload to start...')
	  	 		initUpload();
	  	 	}
	  	 })

      
     

    //     document.getElementById('file-input').onchange = initUpload;
     });

  }


    /*
     Function called when file input updated. If there is a file selected, then
     start upload procedure by asking for a signed request from the app.
    */
window.initCarUpload = (o) =>{
      console.log(o.dataset.id + '--this is th id for thecar')
      
      const files = document.getElementById('image-file'+ o.dataset.id).files;
      const file = files[0];
      if(file == null){
        return alert('No file selected.');
      }
      getSignedRequest(file);
}

    
//      Bind listeners when the page loads.
    


if (document.getElementById('admin-cars-mgt')) {
    document.addEventListener('DOMContentLoaded',() => {
      
        document.getElementById('image-file'+localStorage.getItem('carId')).onchange = initCarUpload;
    });

}


export default ApiAdminBotService;
