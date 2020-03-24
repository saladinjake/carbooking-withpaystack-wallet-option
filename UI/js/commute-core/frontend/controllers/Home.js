'use strict';
import HomeModel from '../models/HomeModel';
class WebsiteHome {
  constructor() {   
  }

  attachEvents() {
    if (document.getElementById('dashboard')) {
      this.indexPageController();
    }
  }

  indexPageController() {

    const links = document.getElementsByTagName('a');

     
   
   
    return HomeModel.dashboard()
  }

}

export default WebsiteHome;
