'use strict';
import View from '../views/View';
import InterventionModel from '../models/InterventionModel';
import setConfigData from '../helpers/localStorageData';
import $ from 'jquery';


function on() {
  document.getElementById("overlay").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}

const locationText = document.getElementById('location-code');
var locationText2 = document.getElementById('findme')
var location2 = document.getElementById("location2");

window.getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    locationText.innerHTML = 'Geolocation is not supported by this browser.';
   
  }
};

const showPosition = (position) => {
  locationText.innerHTML = `Location: <span id="location" style="color:#361f55">${
    position.coords.latitude
  }, ${position.coords.longitude}</span>`;
  locationText2.value= position.coords.latitude + ',' + position.coords.longitude
location2.value= position.coords.latitude + ',' + position.coords.longitude
  //locationText2.innerHTML = locationText.innerHTML

};

window.getId  = (item)  =>{
    var that = item;
    //defining all needed variables
 //You may use vanilla JS, I just chose jquery
  const form = document.getElementById('container-x');
  form.style.opacity=1;
  console.log(item)
on()

    localStorage.setItem('Id', item.id);
    console.log(item.id)
    localStorage.setItem('reportType', item.title);
     console.log(item.title);
     

     let dataPromise = InterventionModel.getSpecificData();
          dataPromise.then(data => {
           
  
  

            let location = document.getElementById('location2');
            let category = document.getElementById('category2');
            let description = document.getElementById('description2');
            let subject = document.getElementById('subject2');
            //let image = document.getElementById('image-off');            

            location.value = item.dataset.location;
            category.value = item.dataset.category;
            description.value = item.dataset.description;
            subject.value= item.dataset.subject
            //image.src = 'a.jpg';

      });


}

window.imgArry = (image) => {
  if (image.length === 0) {
    return 'No Image Uploaded';
  }
  const displayImage = image.map(
    img => `
  <img src="./assets/images/${img}" alt="" class="item" height="200" width="240">
  `
  );
  return displayImage;
};

window.videoArry = (video) => {
  if (video.length === 0) {
    return 'No Video Uploaded';
  }
  const displayVideo = video.map(
    (vid, i) => `
    <video width="240" height="180" controls>
      <source src="${vid}">
    </video>
`
  );
  return displayVideo;
};


class IReporterWebsiteInterventions {
  constructor() {}

  attachEvents() {
    console.log('calling feedback intervention controller');

    if (document.getElementById('interventionPage')) {
      this.indexPageController();
      this.singleItemPageController();
      this.deleteRecordPageController();
      this.editLocationRecordPageController();
      this.editStatusRecordPageController();
      this.editCommentRecordPageController();
      this.saveNewRecordPageController();
      
    } else if (document.getElementById('reportFormPage')) {
      console.log('report form page');
      //new PaginatedSlideshow( "#main-slider" );
      this.saveNewRecordPageController();
    } else {
      console.log('cant find where to load data');
    }
  }
  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }



 


  static render(items) {

    const recordItems = document.querySelector('#fetched-data');
  
    if (items.length === 0) {
      recordItems.innerHTML = 'No records Yet';
      recordItems.style.textAlign = 'center';
      recordItems.style.fontSize = '32px';
      recordItems.style.font = 'bold';
    } else {
      items.forEach((item) => {
        const eachRecord = `
           <tr>
              <td>${item.created_at} </td>
              <td>${item.category}</td>
              <td>${item.location}</td>
              <td>${item.comment.slice(0, 150)}</td>
               <td><div id="image-frame">
      <a href="record.html" class="interventions">${imgArry(item.images.slice(0, 1))}</a>
      </div></td>
              <td>${item.status}</td>
              <td>
              <a data-subject="${item.subject}" data-category="${item.category}" data-location="${item.location}" data-description="${item.comment}" data-points="-1" data-type="General Enquiries" class="table-action-btn read_more md-trigger" href="./record.html"  title=${item.reportType} class="comment" id=${item.id} onclick="getId(this)"><i class="md md-chevron-right"></i></a>
              </td>
           
          </tr>

       
    `;

        recordItems.innerHTML += eachRecord;
      });
    }
  }




  indexPageController() {
    let that = this;
    let dataPromise = InterventionModel.getAllData();
    dataPromise
      .then(data => {
        IReporterWebsiteInterventions.render(data);
      })
      .catch(err => console.log(err));
  }

  singleItemPageController() {
    let that = this;
    let documentDom = document;
    documentDom.addEventListener(
      'click',
      e => {
        if (IReporterWebsiteInterventions.hasClass(e.target, 'read_more')) {
          console.log('we are here')
          let dataPromise = InterventionModel.getSpecificData();
          dataPromise.then(data => {
            console.log(data)
          });
        }
      },
      false,
    );
  }

  saveNewRecordPageController() {
    let documentDom = document;

    documentDom.addEventListener(
      'click',
      e => {
        if (IReporterWebsiteInterventions.hasClass(e.target, 'new_content')) {

          e.preventDefault();
          console.log('called')
          return InterventionModel.submitFormData();
        } 
      },
      false,
    );



  }

  
  deleteRecordPageController() {
    let that = this;
    document.addEventListener(
      'click',
      function(e) {
        e.preventDefault();
        if (IReporterWebsiteInterventions.hasClass(e.target, 'delete_icon')) {
          InterventionModel.deleteOneRecord();

           setTimeout(()=>{
              window.location.reload()
            },3000)
        }
      },
      false,
    );
  }

  editLocationRecordPageController() {
    let that = this;
    document.addEventListener(
      'click',
      function(e) {
        e.preventDefault();
        if (IReporterWebsiteInterventions.hasClass(e.target, 'update_loc_icon')) {
          let dataPromise = InterventionModel.getSpecificData();
          dataPromise.then(data => {
            return View.EditLocation(data, () => {
              let triggerBtn = document.getElementById('trigger');
              triggerBtn.addEventListener('click', e => {
                e.preventDefault();
                return InterventionModel.updateOneLocation();
              });
            });
          });
        }
      },
      false,
    );
  }

  editCommentRecordPageController() {
    let that = this;
    document.addEventListener(
      'click',
      function(e) {
        e.preventDefault();
        if (IReporterWebsiteInterventions.hasClass(e.target, 'update_comment_icon')) {
          let dataPromise = InterventionModel.getSpecificData();
          dataPromise.then(data => {
            return View.EditComment(data, () => {
              let triggerBtn = document.getElementById('triggerComment');
              triggerBtn.addEventListener('click', e => {
                e.preventDefault();
                return InterventionModel.updateOneComment();
              });
            });
          });
        }
      },
      false,
    );
  }

  editStatusRecordPageController() {
    let that = this;
    document.addEventListener(
      'click',
      function(e) {
        if (IReporterWebsiteInterventions.hasClass(e.target, 'update_status_icon')) {
          let dataPromise = InterventionModel.getSpecificData();
          dataPromise.then(data => {
            return View.EditStatus(data, () => {
              let triggerBtn = document.getElementById('triggerStatus');
              triggerBtn.addEventListener('click', e => {
                e.preventDefault();
                return InterventionModel.updateOneStatus();
              });
            });
          });
        }
      },
      false,
    );
  }
}

export default IReporterWebsiteInterventions;
