
const postUrl="http://localhost:12000/api/v1/paystack/pay"

'use strict';
//import WalletModel from '../models/WalletModel';
class Ewallet {
  constructor() {   
  }

  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }


  attachEvents() {
    if (document.getElementById('wallet-page')) {
       document.addEventListener("click", (e)=>{
         if(Ewallet.hasClass(e.target,'topup')){
            console.log('top up')
            this.indexPageController()
         }
       });
    }
  }

  indexPageController() {
    //return WalletModel.topUp() 
    const user = JSON.parse(localStorage.getItem('userToken'))
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
          MessageBoard.displayMsg('Form submitted succesfully');

          localStorage.setItem('urlType', postUrl);
        } else if (data.status === 401 || data.status === 403) {
          window.location.href = './';
        } else {
          MessageBoard.displayMsg(data.error);
        }
      })
      .catch(error => {
        throw error;
      });
  }

}

export default Ewallet;
