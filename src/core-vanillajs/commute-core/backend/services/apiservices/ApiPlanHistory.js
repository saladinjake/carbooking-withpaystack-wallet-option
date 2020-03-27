'use strict';

import FetchPromiseApi from './helpers/FetchPromiseApi';
import Router from '../../../core/Router';
import GateKeepersForUser from './helpers/whois';
import getOnlineUrlConnection from './helpers/getOnlineUrlConnection';
import MessageBoard from '../../../core/MessageBoard';

let activeUrl = getOnlineUrlConnection();



window.getPlanId = (item) =>{
  localStorage.setItem("setPlan",item.dataset.plan_id);

  window.location.replace("http://localhost:4000/plan-detail")
}

function searchTable() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("foo-table-input");
  filter = input.value.toUpperCase();
  table = document.getElementById("demo-foo-pagination");
  tr = table.getElementsByTagName("tr");

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

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " //+ strTime;
}


window.getPlanId = (item) =>{
  localStorage.setItem("setPlan",item.dataset.plan_id);
  
  window.location.replace("http://localhost:4000/plan-detail")
}


let planClicked;

function ApiPlanHistory() {
  if(document.getElementById("plan-history")){
    const user = JSON.parse(localStorage.getItem('userToken'));
    //window.addEventListener('DOMContentLoaded', event => {
      event.preventDefault();
      const urls = [
                    activeUrl + `/plans/${user.user.email}/user`
      ];


      

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
             
              const tablebody2 = document.getElementById('tablebody1');

              // if(datas.status="404"){
              //   let Notemplate2='', Notemplate3;
              //   Notemplate2 =`<tr>
              //                 <td><a href="#"></a></td>
              //                     <td></td>
              //                     <td></td>
              //                     <td></td>
              //                     <td></td>
              //                       <td>
                                        
              //                       </td>
              //       </tr>`;
              //       tablebody2.insertAdjacentHTML('beforeend', Notemplate2);

                    

              //  }else{
               
                     console.log(datas)
                    const plans = datas[0].data[0].plans;
                    
                    let template2;
                    let planAction ='';
                    let classFor=``;
                    plans.map((item, i) => {
                       let old_id = item._id;
                       item._id = item._id.substring(0,7);
                        if(item.has_updated=="Yes"){ //if quotation has been sent
                             //item.price= `Quote not yet sent.`;
                             //item.payment_status=`<span class="label label-table label-danger">${item.payment_status}</span>`;
                             

                            if(item.status=="Paid"){
                                classFor =`label-success`;
                                item.price= `₦ ${item.price}`;
                                planAction = ` <td class="">
                                                       <a onclick="getPlanId(this)" id="plan-current-${item.plan_id}" href="#" data-plan_id="${item.plan_id}" data-id="${item.plan_id}" href="#" class="table-action-btn  btn-purple"><i class="glyphicon glyphicon-ok"></i></a>
                                                  </td>`
                            //item.payment_status= `<span class="label label-table label-success">${item.payment_status}</span>`+ `₦ ${item.price}`;
                            }else{
                               classFor =`label-danger`;
                             planAction = ` <td class="">
                                                   <a onclick="getPlanId(this)" id="plan-current-${item.plan_id}" href="#" data-plan_id="${item.plan_id}" data-id="${item.plan_id}" class="table-action-btn btn-custom btn-purple"><i class="md md-chevron-right"></i></a>
                                              </td>`
                            }
                          }else if(item.has_updated=="No"){
                            classFor="label-warning"
                            item.price= `Quote not yet sent.`;
                             //item.payment_status=`<span class="label label-table label-danger">${item.payment_status}</span>`;
                             planAction = ` <td class="">
                                                   <a id="plan-current-${item.plan_id}" onclick="getPlanId(this)" data-plan_id="${item.plan_id}" data-id="${item.plan_id}" href="#" class="table-action-btn btn-custom btn-purple"><i class="md md-chevron-right"></i></a>
                                              </td>`
                            //item.price= `₦ ${item.price}`;
                            //item.payment_status=`<span class="label label-table label-warning">${item.payment_status}</span>`;
                          }
                      template2 =`<tr>
                                    <td class=""><a href="#">PLANID-${item._id}</a></td>
                                        <td class="">${item.plan_category_name}   </td>
                                      
                                        <td class="">${formatDate(new Date(item.created_at))+ " " }</td>
                                         <td class="">${item.itineries.length}</td>
                                         <td class=""><span class="label label-warning">Charges:</span> ${item.price}</td>
                                          <td class="">  ${planAction}</td>
                          </tr>`;
                          tablebody2.insertAdjacentHTML('beforeend', template2);
                  });

              document.getElementById("foo-table-input").addEventListener("keyup",(e)=>{
                 searchTable();
               })
                   

            //}
            

        })
        .catch(error => {
          throw error;
        });
    //});

  }
}

export default ApiPlanHistory;
  