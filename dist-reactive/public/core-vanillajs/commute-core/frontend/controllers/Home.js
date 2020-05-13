'use strict';
const kick

import IReporterWebsiteRedFlag from './Redflag';
import IReporterWebsiteInterventions from './Interventions';
class WebsiteHome {
  constructor() {   
  }

  attachEvents() {
    if (document.getElementById('dashboard')) {
      this.indexPageController();
    }
  }

  indexPageController() {
    let data = [
      {
        id: 72,
        user_id: 825,
        location: '6.524379, 3.379206',
        comment: 'A',
        images: '{"a.png","allo_1x.png","ajn_1x.png"}',
        videos: '{"001 Introduction To The Certified Developer - Associate Course.mp4"}',
        status: 'draft',
        created_at: '2019-09-10T12:51:29.354Z',
        updated_at: '2019-09-10T12:51:29.354Z',
        reportType: 'intervention',
      },

      {
        id: 72,
        user_id: 825,
        location: '6.524379, 3.379206',
        comment: 'B',
        images: '{"a.png","allo_1x.png","ajn_1x.png"}',
        videos: '{"001 Introduction To The Certified Developer - Associate Course.mp4"}',
        status: 'draft',
        created_at: '2019-09-10T12:51:29.354Z',
        updated_at: '2019-09-10T12:51:29.354Z',
        reportType: 'intervention',
      },
    ];

    
  }

}

export default WebsiteHome;
