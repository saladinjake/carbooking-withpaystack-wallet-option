let accountBalance; 
const postUrl=process.env.DEPLOY_BACK_URL+"/paystack/pay"
    alertify.set('notifier','position', 'top-left');
'use strict';
import QuotationModel from '../models/QuotationModel';


window.setItem = (t) =>{
  let paymentDetail = {
    amount:t.dataset.amount,
    reference: t.dataset.reference,
    email: t.dataset.email,
    quotation_id: t.dataset.quotation_id,
    plan_id: t.dataset.plan_id,
    phone: t.dataset.phone,
    firstname: t.dataset.firstname,
    balance : t.dataset.userbalance
  };
 localStorage.setItem('quoteToPay', JSON.stringify(paymentDetail))
}
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

function numberWithCommas(x) {
    // var parts = x.toString().split(".");
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // return parts.join(".");
    return x
}
class QuotationHistory {
  constructor() {   
  }

  static render(items) {
    const user = JSON.parse(localStorage.getItem('userToken'))
    const recordItems = document.getElementById('fetched-data-transactions');
    
    
    
  }

  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }

  
  attachEvents() {

   //  document.getElementById("demo-foo-search").addEventListener("keyup",(e)=>{
   //   searchTable() 
   // })
   if(localStorage.getItem('userToken')){
    
    const user = JSON.parse(localStorage.getItem('userToken'))
    if((!document.getElementById('signup_page') && !document.getElementById('loginpage') && !document.getElementById('pass_forgot_page') )){
      
      document.getElementById("balance").innerHTML ="₦ "+ numberWithCommas(user.user.balance) ;
    }
    
    if (document.getElementById('quote-page') ) {
      //document.getElementById("new-balance").innerHTML ="₦ "+ numberWithCommas(user.user.balance) ; 
       
       
       document.getElementById("balance").innerHTML ="₦ "+ numberWithCommas(user.user.balance) ;
       

    const tablebody = document.getElementById("tablebody1");
    let eachRecord ='';

    let that = this;
    let dataPromise = QuotationModel.getUsersQuotationTrnx();

    
    dataPromise
      .then(data => {
        console.log(data)
        let className="label-success";
        let actionBtn= ``;


          data.map((item,i)=>{
            //alert(item.has_updated)
           if(item.status=="Unpaid" ||  item.status=='Paid'){
                             //item.price=`<span class="label label-table label-danger">${item.payment_status}</span>`;
                             if(item.has_updated=='Yes'){

                                if(item.status=='Paid'){
                                 let className="label-success";
                                 actionBtn = `<td class="">
                                       <a    data-amount="${item.price}"    data-reference="${item.reference}"   data-quotation_id="${item.quotation_id}" data-plan_id="${item.plan_id}" data-userbalance="${user.user.balance}" data-phone="${user.user.phoneNumber}" data-firstname="${user.user.firstname}" data-email="${user.user.email}" href="#"  class="label label-success" >Successful Payment</a>
                                 </td>`
                               }else if(item.status=="Unpaid"){
                                let className="label-warning";
                                 actionBtn = `<td class="">
                                       <a onclick="setItem(this)"   data-amount="${item.price}"    data-reference="${item.reference}"   data-quotation_id="${item.quotation_id}" data-plan_id="${item.plan_id}" data-userbalance="${user.user.balance}" data-phone="${user.user.phoneNumber}" data-firstname="${user.user.firstname}" data-email="${user.user.email}" href="./pay-action"  class="btn btn-primary" >Make payment</a>
                                 </td>`

                               }
                             }else{
                              let className="label-warning";
                                actionBtn = `<td class="">
                                       <a onclick="setItem(this)"   data-amount="0"    data-reference=""   data-quotation_id="" data-plan_id="" data-userbalance="${user.user.balance}" data-phone="${user.user.phoneNumber}" data-firstname="${user.user.firstname}" data-email="${user.user.email}" href="#" disabled  class="btn btn-primary" >Awaiting Quotation</a>
                                 </td>`
                             }
                             
                           }else{

                             item.price= ` ${item.price}`;
                            actionBtn =`<td class="">
                                        ${item.price}  <span class="label label-success">${item.status}</span>                          
                                        </td>`

                             let className="label-warning";
                           }
            eachRecord =`
                      <tr>
                          <td> ${formatDate(new Date(item.createdDate))} </td>
                          <td>${item.reference}</td>
                          <td>${item.plan_id}</td>
                          <td>${item.amount} </td>
                          <td>${item.quotation_id}</td>
                        <td><span class="label ${className}">${item.status}</span></td>
                          
                     </tr>`; 
             tablebody.insertAdjacentHTML('beforeend', eachRecord); 
          });


          
      })
      .catch(err => console.log(err.msg));
    }
 }

}

  indexPageController() {
    if(localStorage.getItem('userToken')){
    //return WalletModel.topUp() 
      const user = JSON.parse(localStorage.getItem('userToken'))


    
    

    const fullname = document.getElementById("field-1").value;
    const email = document.getElementById("field-2").value;
    const amount = document.getElementById("field-3").value;

    if(!fullname){
      console.log('Fullname required');
      var notification = alertify.notify('Fullname required', 'error', 5, function(){  console.log('dismissed'); });

      return false
    }
    


    if(!email){
      console.log('email required');
      var notification = alertify.notify('email required', 'error', 5, function(){  console.log('dismissed'); });

      return false
    }

    if(!amount){
      console.log('enter an amount');
      var notification = alertify.notify('Amount required', 'error', 5, function(){  console.log('dismissed'); });

      return false
    }

    if(isNaN(amount)){
      var notification = alertify.notify('Enter a valid amount:hint remove comma from the amount entered', 'error', 5, function(){  console.log('dismissed'); });

      return false
    }

    const prePostData ={
      fullname,
      email,
      amount
    }

    user.user.fullname=fullname;

    localStorage.setItem("userToken", JSON.stringify(user))
  
    fetch(postUrl, {
      method: 'POST',
      headers: {
        // 'Access-Control-Allow-Credentials':true,
         'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers': 'X-Requested-With,content-type, Authorization',
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
          console.log('Form submitted succesfully');
          var notification = alertify.notify('Form submitted succesfully', 'success', 5, function(){  console.log('dismissed'); });
          document.getElementById("relink").innerHTML=data.message;
          document.getElementById("tou_up").style.display="none"
          localStorage.setItem('urlType', postUrl);
        } else if (data.status === 401 || data.status === 403) {
          window.location.href = './';
          document.getElementById("tou_up").style.display="block"
        } else {
          //MessageBoard.displayMsg(data.error);
          document.getElementById("tou_up").style.display="block"
          var notification = alertify.notify(data.error, 'error', 5, function(){  console.log('dismissed'); });
        }
      })
      .catch(error => {
        throw error;
      });
  }

}

}

export default QuotationHistory;















