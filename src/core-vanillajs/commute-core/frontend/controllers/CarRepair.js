'use strict';
import View from '../views/View';
import RepairModel from '../models/RepairsModel';
import setConfigData from '../helpers/localStorageData';
import $ from 'jquery';

//get-cars-info-use

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
alertify.set('notifier','position', 'top-left');

 function hasClass(el, classname) {
    return el.classList.contains(classname);
  }

window.getIdRepair  = (item)  =>{
    var that = item;

  if (document.getElementById('car-repair')) {
    
    localStorage.setItem('Id', item.dataset.id);
    localStorage.setItem('reportType', 'mechRequest');
    // let dataPromise =  RepairModel.getSpecificData();
    // dataPromise.then(data => {
 const user = JSON.parse(localStorage.getItem('userToken'));
   

      console.log(item.dataset)
        let firstname = document.getElementById('field-1');
        let lastname = document.getElementById('field-2');
        let email = document.getElementById('field-3');
        let location = document.getElementById('field-4');
        let carbrand = document.getElementById('field-5');
        let id = document.getElementById('field-6');
        let description = document.getElementById('field-7');

        location.value = item.dataset.location;
        firstname.value = item.dataset.firstname;
        lastname.value = item.dataset.lastname;
        email.value = item.dataset.email;
        description.value = item.dataset.description;
        carbrand.value= item.dataset.carbrand;
        let ids = item.dataset.id;
        id.disabled= true;
        id.value=ids;

        const record = {
          user_id: user.user.id,
          firstname:item.dataset.firstname,
          lastname: item.dataset.lastname,
          email: item.dataset.email,
          description: item.dataset.description,
          carbrand: item.dataset.carbrand,
          id: ids,
          location: item.dataset.location,
          recordType: 'mechRequest'
        };

        document.getElementById("title-header").innerHTML = 'Editing Record of id:' + ids;
        //update modal form on submit....
        document.body.addEventListener('click', (e) =>{
           e.preventDefault()
           if(hasClass(e.target, 'update')){
              RepairModel.updateOneRecord(record);
           }
        })

  }


}


class IReporterWebsiteRepairs {
  constructor() {}

  attachEvents() {
    console.log('calling feedback intervention controller');
    if (document.getElementById('car-repair')) {
       const user = JSON.parse(localStorage.getItem('userToken'));
         
         document.getElementById('firstname').value= user.user.firstname;
          document.getElementById('lastname').value = user.user.username;
        document.getElementById('email').value= user.user.email;
        var loc = document.getElementById('findme');
         var options = {
      types: ['geocode'],
      componentRestrictions: {country: "NG"}
     };

        var autocomplete3 = new google.maps.places.Autocomplete(loc,options);
        google.maps.event.addListener(autocomplete3, 'place_changed', function () {
            //startLoc = autocomplete3.getPlace();
            // document.getElementById('city2').value = place.name;
            // document.getElementById('cityLat').value = place.geometry.location.lat();
            // document.getElementById('cityLng').value = place.geometry.location.lng();
        });
           
      this.saveNewRecordPageController();
    } else if(document.getElementById('fetched-data-repair')){
      this.indexPageController(); 
      console.log('cant find where to load data');
    }


    if (document.getElementById('car-repair')) {

      if(localStorage.getItem('userToken')){
     let user = JSON.parse(localStorage.getItem('userToken'))
    fetch('http://localhost:12000/api/v1/get-cars-info-user', {
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
        console.log(data)
        //if (data.status === 200) {
           let modelNameOptionX =[]
              let cars = data.data[0].carInfo;

              cars.map((item)=>{
                   modelNameOptionX.push(item.car_name)
              });

  modelNameOptionX = [...new Set(modelNameOptionX)];

  console.log(modelNameOptionX)


  let modelNameOption=``;

  modelNameOptionX.map((item)=>{
     modelNameOption+=`<option>${item}</option>`

  });

   document.getElementById('carbrand').innerHTML=modelNameOption

          
       // }
      })
      .catch(error => {
        throw error;
      });

     }

     } 
  }
  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }


  static render(items) {
    const recordItems = document.getElementById('fetched-data-repair');
    const user = JSON.parse(localStorage.getItem('userToken'));
    let eachRecord;
    let className;
    if (items.length === 0) {
      recordItems.innerHTML = 'No records Yet';
      recordItems.style.textAlign = 'center';
      recordItems.style.fontSize = '32px';
      recordItems.style.font = 'bold';
    } else {
      items.forEach((item) => {
        if(item.status=="Completed"){
             className ='label-success';
          }else if(item.status=="Ongoing"){
             className ='label-danger';
          }else{
            className="label-warning"
          }

         var loc = item.location.split(",");
         var lat = loc[0];
         var long = loc[1];
        
         eachRecord = `
           <tr>
              <td class=""><a href="#">CMT-USER-${user.user.account_num}</a></td>
              <td class="">${item.location}</td>
              <td class="">${item.carbrand}</td>
              <td class="">${formatDate(new Date(item.created_at))}</td>
              <td class=""><span class="label ${className}">${item.status}</span></td>
                     </tr>
    `;
        recordItems.innerHTML += eachRecord;
        //   <td><a data-email="${item.carbrand}" data-firstname="${item.firstname}" data-lastname="${item.lastname}" data-location="${item.location}" data-description="${item.description}" data-userid="${user.user.id}" data-points="-1" data-type="mechRequest" className="btn btn-primary waves-effect waves-light table-action-btn read_more md-trigger" data-toggle="modal" data-target="#con-close-modal"  href=""  data-carbrand="${item.carbrand}"  data-id="${item.id}" onclick="getIdRepair(this)"><i class="md md-edit"></i></a>
        //      </td>
 
      });
    }

    
  }

  




  indexPageController() {
    let that = this;
    let dataPromise = RepairModel.getUsersRepairs();
    
    console.log(dataPromise)
    
    dataPromise
      .then(data => {
        console.log(data.data[0].mechRequest)
        IReporterWebsiteRepairs.render(data.data[0].mechRequest);
      })
      .catch(err => console.log(err));
  }

  

  saveNewRecordPageController() {
    let documentDom = document;

    documentDom.addEventListener(
      'click',
      e => {
        if (IReporterWebsiteRepairs.hasClass(e.target, 'new_content')) {

          e.preventDefault();
          console.log('called')
          return RepairModel.saveRepairs()
        } 
      },
      false,
    );
  }

  static editRecord(record){

  }
  
  
}



 /*
      Function to carry out the actual PUT request to S3 using the signed request from the app.
    */
    function uploadFile(file, signedRequest, url){
      
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', signedRequest);
      xhr.onreadystatechange = () => {
        if(xhr.readyState === 4){
          if(xhr.status === 200){
            
            var notification = alertify.notify('image upload success.', 'success', 5, function(){  console.log('dismissed'); });
       
          }
          else{
            var notification = alertify.notify('Image upload error.', 'error', 5, function(){  console.log('dismissed'); });
       
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
    function getSignedRequest(file){
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
    function initUpload(){
      const files = document.getElementById('image-file').files;
      const file = files[0];
      if(file == null){
        return alert('No file selected.');
      }
      getSignedRequest(file);
    }

    /*
     Bind listeners when the page loads.
    */


  if (document.getElementById('car-repair')) {
    document.addEventListener('DOMContentLoaded',() => {
      
     

        document.getElementById('image-file').onchange = initUpload;
    });

  }

export default IReporterWebsiteRepairs;
