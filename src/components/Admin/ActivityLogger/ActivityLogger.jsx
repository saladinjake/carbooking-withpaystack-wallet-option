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
    <div className="main" style={{height:"400px",overflow:"scroll"}}>
      <h2>Activity</h2>
      <ul className="activity-list " id="loadbase" >
        <li className="row  loadmore ">
          <div className="profile col-xs-2">
            <img src="http://placehold.it/60x60" />
          </div>
          <div className="activity-content col-xs-10 card cardbox card-box">
            <div className="inner">
              <span className="date">yesterday</span>
              <div className="name">Stefan M.</div>
              <div className="content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </li>
        <li className="row  loadmore">
          <div className="profile col-xs-2">
            <img src="http://placehold.it/60x60" />
          </div>
          <div className="activity-content col-xs-10">
            <div className="inner">
              <span className="date">yesterday</span>
              <div className="name">Stefan M.</div>
              <div className="content">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
              </div>
            </div>
          </div>
        </li>
        
      </ul>
    </div>

    <a href="#" id="loadMore">Load More</a>

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
