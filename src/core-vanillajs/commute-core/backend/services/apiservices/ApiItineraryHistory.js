'use strict';

import FetchPromiseApi from './helpers/FetchPromiseApi';
import Router from '../../../core/Router';
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import MessageBoard from '../../../core/MessageBoard';

let activeUrl = getOnlineUrlConnection();
function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
}

function searchTable(tbId="#foo-table-input2") {


  // $(document).ready(function(){

  // Search all columns
  $(tbId).keyup(function(){
    // Search Text
    var search = $(this).val();

    // Hide all table tbody rows
    $('table tbody tr').hide();

    // Count total search result
    var len = $('table tbody tr:not(.notfound) td:contains("'+search+'")').length;

    if(len > 0){
      // Searching text in columns and show match row
      $('table tbody tr:not(.notfound) td:contains("'+search+'")').each(function(){
        $(this).closest('tr').show();
      });
    }else{
      //$('.notfound').show();
    }

  });

  
// // });

// // Case-insensitive searching (Note - remove the below script for Case sensitive search )
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
   return function( elem ) {
     return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
   };
});
}

function ApiItineraryHistory() {
  if(document.getElementById("itinerary-history")){

    if(localStorage.getItem('userToken')){
         const user = JSON.parse(localStorage.getItem('userToken'));
    //window.addEventListener('DOMContentLoaded', event => {
      // event.preventDefault();
      const urls = [activeUrl + `/itinerary/${user.user.email}/user`,
        
      ];


      if(document.getElementById("itinerary-history")){

        document.getElementById("foo-table-input2").addEventListener("keyup",(e)=>{
                 searchTable("#foo-table-input2");
               })

        }
      

      const promises = urls.map(url =>
        fetch(url, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': user.token,
          },
           mode: 'cors',
        }).then(response => response.json()),
      );
      

      Promise.all(promises)
        .then(datas => {









              const tablebody1 = document.getElementById('tablebodyA');

               let x =datas[0].data[0].itinerary
               if(x.length<= 0){
              // alert('no itin'+ datas[0].error)
              document.getElementById('tableviewItins').style.display="none"
              document.getElementById('svgItins').style.display="block"
            
             }else{
              
              if( document.getElementById('svgItins')){
                document.getElementById('svgItins').style.display="none"
              }
              

               //console.log(datas)
                    const itinerary = [... new Set(datas[0].data[0].itinerary)];
                    
                  let eachRecord=``;
                  let className='';
                  itinerary.map((item, i) => {
                      if(item.status=="Completed" || item.status=="Paid"){
                         className=`label-success`;
                       }else if(item.status=='Pending'){
                        className= `label-warning`;
                       }else{
                        className= `label-danger`;
                       }
                      
                      eachRecord = `
                      <tr key={i}>
                          <td> ${formatDate(new Date(item.created_at))} </td>
                          <td>${item.plan_category}</td>
                          <td>${item.start_location} </td>
                          <td>${item.destination}</td>
                          <td> ${formatDate(new Date(item.start_time))}</td>
                          <td>${item.drive_option}</td>
                           <td>${item.no_hours}</td>  
                            <td><span class="label label-table ${className}">${item.status}</span></td>
                     </tr>`; 
                     if( tablebody1){
                       tablebody1.insertAdjacentHTML('beforeend', eachRecord);
                     }
                       
                  });
                 

             }
                    
          // }

        })
        .catch(error => {
          throw error;
        });
        
    }
    
    

  }
}

export default ApiItineraryHistory;
  