'use strict';
import '../../../css/mainstyles_backend.css';
import backendControllers from './Bootstrap';


const frontend = false;
const backend = true;
class BackendApp {
  constructor() {
    this.classes = backendControllers;
    
  }

  bootstrap() {
    this.loader.attachEvents();
    const keys = Object.values(this.classes).map(function(item) {
      let classInstance = item;
      classInstance.attachEvents();
    });
  }

  run() {
    this.bootstrap();
  }
}

export default BackendApp;
