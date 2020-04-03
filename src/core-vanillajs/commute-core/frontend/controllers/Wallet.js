let accountBalance; 
const postUrl="http://localhost:12000/api/v1/paystack/pay"
    alertify.set('notifier','position', 'top-left');
'use strict';
import WalletModel from '../models/WalletModel';

function setOldBalance(balance){

   const user = JSON.parse(localStorage.getItem('userToken'))
    return fetch("http://localhost:12000/api/v1/old_balance/"+ user.user.id, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
      body: JSON.stringify({old_balance:balance})
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
           var notification = alertify.notify('Wallet balance set.', 'success', 5, function(){  console.log('dismissed'); });
          
          
        }
      })
      .catch(error => {
        throw error;
      });

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

function numberWithCommas(x) {
    // if(typeof(x)=='string'){
    //    var parts = x.split(".");
    //   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    //   return parts.join(".");
    // }else{
    //   var parts = x.toString().split(".");
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // return parts.join(".");
    // }
    return x
    
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
class Ewallet {
  constructor() {   
  }

  static render(items) {
    const user = JSON.parse(localStorage.getItem('userToken'))
    const recordItems = document.getElementById('fetched-data-transactions');
    
    
    
  }

  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }

  static getBalance(){
     if(document.getElementById("wallet-page")){
      const user = JSON.parse(localStorage.getItem('userToken'))
    return fetch("http://localhost:12000/api/v1/balance/"+ user.user.id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': user.token,
      },
      mode: 'cors',
    })
      .then(response => response.json())
      .then(data => {
        if (data.status === 200) {
          console.log(data)

          // if(user.user.roles!='user'){
          //       document.getElementById("balance").style.display="none"
          //       document.getElementById("new-balance").style.display="none"
          // }else{
          document.getElementById("balance").innerHTML = '₦ '+ numberWithCommas(data.data[0].accountBalance);
           // document.getElementById('balance-seen').innerHTML = '₦ '+ formatAmount(data.data[0].accountBalance);
          document.getElementById("new-balance").innerHTML='₦ '+ numberWithCommas(data.data[0].accountBalance);
          accountBalance = data.data[0].accountBalance;
          user.user.balance = accountBalance;
          localStorage.setItem('userToken',JSON.stringify(user))
           document.getElementById("balance").style.display="block"

          // }
        }
      })
      .catch(error => {
        throw error;
      });
    }
  }

  static getTransactions(){
    if(document.getElementById("wallet-page")){
     const user = JSON.parse(localStorage.getItem('userToken'))
    
    return fetch("http://localhost:12000/api/v1/transactions", {
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
        if (data.status === 200) {
          console.log(data)


          
          
        }
      })
      .catch(error => {
        throw error;
      });
   }
  }


  attachEvents() {

   //  document.getElementById("demo-foo-search").addEventListener("keyup",(e)=>{
   //   searchTable() 
   // })
    
    const user = JSON.parse(localStorage.getItem('userToken'))

     // if(user.user.roles!='user'){
     //            document.getElementById("balance").style.display="none"
     //            document.getElementById("new-balance").style.display="none"
     //      }else{

            if((!document.getElementById('signup_page') && !document.getElementById('loginpage') && !document.getElementById('pass_forgot_page') )){
              
              document.getElementById("balance").innerHTML ="₦ "+ numberWithCommas(user.user.balance) ;
            }
            
            if (document.getElementById('wallet-page') ) {
              document.getElementById("new-balance").innerHTML ="₦ "+ numberWithCommas(user.user.balance) ; 
              document.getElementById("field-1").value= user.user.firstname;
            document.getElementById("field-2").value= user.user.email;
            document.getElementById("field-2").style.display="none"
            document.getElementById("field-1").style.display="none"
               Ewallet.getBalance();
               
               
               document.getElementById("balance").innerHTML ="₦ "+ numberWithCommas(user.user.balance) ;
               document.addEventListener("click", (e)=>{
                 if(Ewallet.hasClass(e.target,'topup')){
                    console.log('top up')
                    this.indexPageController()
                 }
               });
           
            // Ewallet.getTransactions();

            const tablebody = document.getElementById("tablebodyx");
            let eachRecord ='';

            let that = this;
            let dataPromise = WalletModel.getUsersTrnx();

            console.log(dataPromise+ "prommise")
            dataPromise
              .then(data => {
                console.log(data)
                let className="label-success";


                
            

            

                  data.map((item,i)=>{
                    console.log(item.createdDate)
                    if(item.status=="Successful"){
                       className="label-success"
                    }else{
                      className="label-error"
                    }
                    eachRecord =`
                              <tr>
                                  <td class=""> ${formatDate(new Date(item.createdDate))} </td>
                                  <td class="">${item.reference}</td>
                                  <td class="">${item.full_name}</td>
                                  <td class="">${item.amount} </td>
                                  <td class="">${item.email}</td>
                                  <td class=""><span class="label ${className}">${item.status}</span></td>
                                  
                             </tr>`; 
                     tablebody.insertAdjacentHTML('beforeend', eachRecord); 
                  });

                  
              })
              .catch(err => console.log(err.msg));

          //}


    }
 }

  indexPageController() {
    //return WalletModel.topUp() 
      const user = JSON.parse(localStorage.getItem('userToken'))


    
    

    const fullname = document.getElementById("field-1").value;
    const email = document.getElementById("field-2").value;
    const amount = document.getElementById("field-3").value;
    //const phone_number = document.getElementById('field_4').value

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

    //let oldbalance =localStorage.getItem('oldbalance')

    const prePostData ={
      fullname,
      email,
      amount,
      phone_number:user.user.phoneNumber,
      //old_balance:oldbalance
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

          setOldBalance(user.user.balance)
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

export default Ewallet;















