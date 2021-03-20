'use strict';
import View from '../views/View';
import UserProfileModel from '../models/UserProfileModel';
import setConfigData from '../helpers/localStorageData';
//import  TextEditor from '../../core/TextEditor';

class WebsiteProfile {
  constructor() {}

  attachEvents() {
    console.log('calling profile controller');

    if (document.getElementById('profile-page')) {
      this.indexPageController();
      this.deleteRecordPageController();
      this.saveNewRecordPageController();
   
    } else {
      console.log('cant find where to load data');
    }
  }
  static hasClass(el, classname) {
    return el.classList.contains(classname);
  }

  indexPageController() {
    let that = this;
    let dataPromise = UserProfileModel.fetchUserProfile();
    return dataPromise;
    // dataPromise
    //   .then(data => {
    //     //console.log(JSON.stringify(data) +'hello')
    //     //View.Index(data,'data');
    //   })
    //   .catch(err => console.log(err));
  }

  
  saveNewRecordPageController() {
    let documentDom = document;

    documentDom.addEventListener(
      'click',
      e => {
        if (WebsiteProfile.hasClass(e.target, 'new_content')) {
          e.preventDefault();
          return UserProfileModel.updateProfile();
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
        if (WebsiteProfile.hasClass(e.target, 'delete_icon')) {
          UserProfileModel.deleteOneProfileRecord();
        }
      },
      false,
    );
  }

 
  
}

export default WebsiteProfile;
