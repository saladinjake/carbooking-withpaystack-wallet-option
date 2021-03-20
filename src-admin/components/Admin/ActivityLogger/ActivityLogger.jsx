import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './logs.scss'


export class Logger extends Component {


  componentDidMount() {
     let mainNav;
    if (document.getElementById("loginpage") ) {
            mainNav = document.getElementById("loggedInOnly");
            mainNav.style.display="none";
            mainNav.style.opacity=0;

          }

  }

  render() {
   
    return (
      <React.Fragment>

       <div className="column-sos">
       <div className="content-page " id="spread-out">
                <div className="content" id="admin" data-pageid="admin-logs">
                    <div className="container">                        
                         <div className="row">

                            <div className="col-lg-12 " >
                                <div className="card-box ">
                                    
                                <div className="row ">
                                    
                                    <div className="">
                                       


                                       <div className="container">
  <div className="row">
    <div className="main" style={{height:"350px",overflow:"scroll"}}>
      <h2>Activity</h2>

    
      <ul className="activity-list " id="loadbase" >
       
        
      </ul>
    </div>

    <a href="#" id="showMoreTrigger">Load More</a>

<p className="totop"> 
    <a href="#top">Back to top</a> 
</p>


    <div className="sidebar">
    </div>
  </div>
</div>
                                            
                                      </div>
</div>


                                    
                                       
                                       </div> 
                                        
                                    </div>

                                </div>
                            </div>
                        
                        </div>
                       


                          
         </div>       

          </div>
</React.Fragment>
            
            
    );
  }

}



export default Logger;
