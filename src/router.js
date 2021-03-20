/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

//import Mapp from './components/map'

//user
import HomeLogin from './components/User/Home/Home';
import Register from './components/User/Register/Register';
import ForgotPassword from './components/User/ForgotPassword/ForgotPassword';
import Dashboard from './components/User/Dashboard/Dashboard';
import ItineraryHistory from './components/User/Dashboard/ItineraryHistory';
import PlanHistory from './components/User/Dashboard/PlanHistory';
import SingleRecord from './components/User/SingleRecord/SingleRecord';
import Plan from './components/User/Plan/Plan';
import MechanicRequest from './components/User/MechanicRequest/MechanicRequest';
import Profile from './components/User/Profile/Profile';
import SOSRequest from './components/User/SOS/SOS';
import TicketRequest from './components/User/Ticket/Ticket';
import TicketHistory from './components/User/Ticket/SubmittedTicket';
import FAQHistory from './components/User/Faq/Faq';
import SubmittedSOS from './components/User/SOS/SOSHistory';
import Wallet from './components/User/Wallet/WalletHome';
import WalletHistory from './components/User/Wallet/WalletHistory'
import QuoteSubscriptionHistory from './components/User/Wallet/QuoteSubscriptionHistory'
import MechanicRequestHistory from './components/User/MechanicRequest/MechanicRequestHistory';
import PayAction from  "./components/User/PayAction/PayAction";
import Map from './components/User/Map/Map';
import Notifications from './components/User/Notifications/notifications'



//admin
import AdminDashboard from './components/Admin/Dashboard/Dashboard';

import Users from "./components/Admin/userMgt/users/Users";
import UserDetail from "./components/Admin/userMgt/userDetail/UserDetail"
import Admins from "./components/Admin/AdminMgt/users/Users";
//import Previledges from "./components/Admin/Previledges/users/Users";

import AdminsDetail from "./components/Admin/AdminMgt/userDetail/UserDetail"
import Partners from "./components/Admin/partnerMgt/users/Users";
import PartnerDetail from "./components/Admin/partnerMgt/userDetail/UserDetail"
import PartnersEarnings from  "./components/Admin/partnerMgt/users/Earnings"
import Drivers from "./components/Admin/driverMgt/users/Users";
import DriverDetail from "./components/Admin/driverMgt/userDetail/UserDetail"
import CarMgt from './components/Admin/CarMgt/CarMgt';
import AdminMapTracker from './components/Admin/Map/Map';
import PlanPackage from "./components/Admin/PlanPackage/Plan/PlanPackage";
import PlanPackageDetail from "./components/Admin/PlanPackage/PlanPackageDetail/PlanPackageDetail"
import CarInspection from './components/Admin/CarInspection/users/Users';
import AdminCarRequest from './components/Admin/CarInspection/users/Retrieval';
import RetrievalEdit from './components/Admin/CarInspection/users/RetrievalEdit'
import CarInspectionDetail from './components/Admin/CarInspection/userDetail/UserDetail';
import DriveTest from './components/Admin/DriveTest/users/Users';
import DriveTestDetail from './components/Admin/DriveTest/userDetail/UserDetail';
import ProfileUser from "./components/Admin/Profile/userDetail/UserDetail";
import SOSADMIN from './components/Admin/SOS/users/Users';


import SOSDETAIL from "./components/Admin/SOS/userDetail/UserDetail"
import ProfileDetail from "./components/Admin/Profile/userDetail/UserDetail";

import GoogleApiSettings from "./components/Admin/Settings/ApiKeys/Google"
import FaceBookApiSettings from "./components/Admin/Settings/ApiKeys/FaceBook"
import PayStackSettings from "./components/Admin/Settings/ApiKeys/PayStack"
import InstagramApiSettings from "./components/Admin/Settings/ApiKeys/Instagram"
import AwsS3ApiSettings from "./components/Admin/Settings/ApiKeys/S3Bucket"
import EmailApiSettings from "./components/Admin/Settings/ApiKeys/Email"

import Payments from "./components/Admin/PaymentModule/users/Payments"

import paymentDetail from "./components/Admin/PaymentModule/userDetail/PaymentDetail"
import Quotations from "./components/Admin/PaymentModule/users/Quotations"
import QuotationDetail from "./components/Admin/PaymentModule/userDetail/QuotationDetail"
import WalletTransactions from "./components/Admin/PaymentModule/users/WalletTransactions"
import WalletTransactionDetail  from "./components/Admin/PaymentModule/userDetail/WalletTransactionDetail"

import Bookings from "./components/Admin/Bookings/Bookings"
import BookingDetail from "./components/Admin/Bookings/BookingDetails"
import ManualBooking from "./components/Admin/Bookings/ManualBookings"
import Itineraries from "./components/Admin/Bookings/Trips"
import ItinerariesDetails from "./components/Admin/Bookings/TripDetail"

import Tickets from "./components/Admin/SupportMgt/users/Ticket"
import TicketsDetail from "./components/Admin/SupportMgt/userDetail/TicketDetail"
import Enquiries from "./components/Admin/SupportMgt/users/Enquiries"
import EnquiriesDetail from "./components/Admin/SupportMgt/userDetail/EnquiriesDetail"
import FAQS from "./components/Admin/SupportMgt/users/FAQ"
import FAQSDetail from "./components/Admin/SupportMgt/userDetail/FAQDetail"
import TechnicalSupport from "./components/Admin/SupportMgt/users/TechnicalSupport"
import TechnicalSupportDetail from "./components/Admin/SupportMgt/userDetail/TechnicalSupportDetail"
import FeedBack from "./components/Admin/SupportMgt/users/Feedback"
import FeedBackDetail from "./components/Admin/SupportMgt/userDetail/FeedbackDetail"


import WalletAdmin from './components/Admin/Wallet/WalletHomeAdmin';
import WalletHistoryAdmin from './components/Admin/Wallet/WalletHistoryAdmin'
import QuoteSubscriptionHistoryAdmin from './components/Admin/Wallet/QuoteSubscriptionHistoryAdmin'

import ActivityLogger from './components/Admin/ActivityLogger/ActivityLogger';
import Mech from './components/Admin/Mech/users/Users';
// import Previledges from  './components/Admin/Previledges/users/Users'
import Previledges from "./components/Admin/Previledges/users/Users"

import NotFoundPage from './containers/404Page/NotFound';
import Forbidden from './containers/403/Forbidden';

 import AdminNotifications from './components/Admin/Notifications/notifications'







//driver

//mine

/*import HomeLoginDriver from './components/Drivers/Driver/Home/Home';
import RegisterDriver from './components/Drivers/Driver/Register/Register';
import ForgotPasswordDriver from './components/Drivers/Driver/ForgotPassword/ForgotPassword';
import DashboardDriver from './components/Drivers/Driver/Dashboard/Dashboard';
import ItineraryHistoryDriver from './components/Drivers/Driver/Dashboard/ItineraryHistory';


import MechanicRequestDriver from './components/Drivers/Driver/MechanicRequest/MechanicRequest';
import ProfileDriver from './components/Drivers/Driver/Profile/Profile';
import Ratings from './components/Drivers/Driver/Profile/Ratings';
import SOSRequestDriver from './components/Drivers/Driver/SOS/SOS';
import TicketRequestDriver from './components/Drivers/Driver/Ticket/Ticket';
import TicketHistoryDriver from './components/Drivers/Driver/Ticket/SubmittedTicket';
import FAQHistoryDriver from './components/Drivers/Driver/Faq/Faq';
import SubmittedSOSDriver from './components/Drivers/Driver/SOS/SOSHistory';
import MechanicRequestDriverHistory from './components/Drivers/Driver/MechanicRequest/MechanicRequestHistory';
import NotificationsDriver from './components/Drivers/Driver/Notifications/notifications'
 import AssignedVehicleHistory from './components/Drivers/Driver/Profile/assignedVehicleHistory';
 import CompletedTripsContent from './components/Drivers/Driver/Trips/completedTrips';
import UpcomingTripsContent from './components/Drivers/Driver/Trips/upcomingTrips';
import TripDetailContent from './components/Drivers/Driver/Trips/tripDetail';
*/





//partners




const Router = () => (
	<>
		<BrowserRouter>
		  <Switch>
		   {/* user routes completed ...*/}

		   <Route exact path="/" component={HomeLogin} />
		    <Route exact path="/index.html" component={HomeLogin} />
		     <Route exact path="/signup" component={Register} /> 
		    <Route exact path="/recovery" component={ForgotPassword} />
		    <Route exact path="/dashboard" component={Dashboard} />
		    <Route exact path="/plan-history" component={PlanHistory} />
		    <Route exact path="/itinerary-history" component={ItineraryHistory} />
		    <Route exact path="/submitted-ticket" component={TicketHistory} />
		    <Route exact path="/faqs" component={FAQHistory} />
		    <Route exact path="/sos-history" component={SubmittedSOS} />
            <Route exact path="/create-plan" component={Plan} />
		    <Route exact path="/profile" component={Profile} />
		    <Route  exact path="/sos-request" component={SOSRequest} />
		    <Route  exact path="/create-ticket" component={TicketRequest} />
		     <Route exact path="/plan" component={Plan} />

		    <Route exact path="/request-car-repair" component={MechanicRequest} />
		    <Route exact path="/request-repairs-history" component={MechanicRequestHistory} />
		    <Route exact path="/wallet" component={Wallet} />
		    <Route exact path="/paid-history" component={WalletHistory} />
		    <Route exact path="/quote-subscription-history" component={QuoteSubscriptionHistory} />
            <Route exact path="/plan-detail" component={SingleRecord} />

            <Route exact path="/pay-action" component={PayAction} />
              <Route exact path="/gtd-event" component={Map} />
              <Route exact path="/notification" component={Notifications} />
            

            {/*Admin Routes*/}


          <Route exact path="/" component={HomeLogin} />
		    <Route exact path="/index.html" component={HomeLogin} /> 
        {/* <Route exact path="/dashboard" component={AdminDashboard} /> */}
           <Route exact path="/admin-dashboard" component={AdminDashboard} />
           <Route exact path="/admin-users" component={Users} />
           <Route exact path="/admin-users-detail" component={UserDetail} />
           <Route exact path="/admin-admins" component={Admins} />
           <Route exact path="/admin-mech" component={Mech} />
           
           <Route exact path="/admin-admins-detail" component={AdminsDetail} />
           <Route exact path="/admin-drivers" component={Drivers} />
           <Route exact path="/admin-drivers-detail" component={DriverDetail} />
           <Route exact path="/admin-partners" component={Partners} />
          
           <Route exact path="/admin-car-request-view" component={RetrievalEdit} />
           <Route exact path="/admin-map" component={AdminMapTracker} />
           
           <Route exact path="/admin-car-request" component={AdminCarRequest} />
           
           <Route exact path="/admin-car-request" component={AdminCarRequest} />
           <Route exact path="/admin-partners-detail" component={PartnerDetail} />
           <Route exact path="/admin-partners-earnings" component={PartnersEarnings} />
           <Route exact path="/admin-plan-package" component={PlanPackage} />
           <Route exact path="/admin-plan-package-detail" component={PlanPackageDetail} />
           <Route exact path="/admin-cars-mgt" component={CarMgt} />
            <Route exact path="/admin-sos" component={SOSADMIN} />
           <Route exact path="/admin-sos-detail" component={SOSDETAIL} />
           <Route exact path="/admin-inspection" component={CarInspection} />
           <Route exact path="/admin-inspection-detail" component={CarInspectionDetail} />
           <Route exact path="/admin-drive-test" component={DriveTest} />
           <Route exact path="/admin-drive-test-detail" component={DriveTestDetail} />
		   <Route exact path="/admin-profile" component={ProfileDetail} />
		   <Route exact path="/admin-settings-google" component={GoogleApiSettings} />
		   <Route exact path="/admin-settings-facebook" component={FaceBookApiSettings} />
		   <Route exact path="/admin-settings-paystack" component={PayStackSettings} />
		   <Route exact path="/admin-settings-instagram" component={InstagramApiSettings} />
		   <Route exact path="/admin-settings-bucket" component={AwsS3ApiSettings} />
           <Route exact path="/admin-settings-email" component={EmailApiSettings} />
		   <Route exact path="/admin-bookings" component={Bookings} />
		   <Route exact path="/admin-booking-detail" component={BookingDetail} />
		   <Route exact path="/admin-manual-booking" component={ManualBooking} />
		   <Route exact path="/admin-itineraries" component={Itineraries} />
		   <Route exact path="/admin-itinerary-detail" component={ItinerariesDetails} />
           <Route exact path="/admin-tickets" component={Tickets} />
		   <Route exact path="/admin-tickets-detail" component={TicketsDetail} />
		   <Route exact path="/admin-enquiries" component={Enquiries} />
		   <Route exact path="/admin-enquiries-detail" component={EnquiriesDetail} />
		   <Route exact path="/admin-faqs" component={FAQS} />
		   <Route exact path="/admin-faqs-detail" component={FAQSDetail} />
		   <Route exact path="/admin-tech-support" component={TechnicalSupport} />
		   <Route exact path="/admin-tech-support-detail" component={TechnicalSupportDetail} />
		   <Route exact path="/admin-feedback" component={FeedBack} />
		   <Route exact path="/admin-feedback-detail" component={FeedBackDetail} />

		   <Route exact path="/admin-wallet" component={WalletAdmin} />
		    <Route exact path="/admin-paid-history" component={WalletHistoryAdmin} />
		    <Route exact path="/admin-quote-subscription-history" component={QuoteSubscriptionHistoryAdmin} />
             <Route exact path="/admin-previledges" component={Previledges} /> 


             <Route path="/activity-logger" component={ActivityLogger} /> 
             <Route exact path="/admin-notification" component={AdminNotifications} />






             {/*
                 <Route path="/drivers-home" exact component={HomeLoginDriver} />
                <Route path="/drivers-login" component={HomeLoginDriver} />
                <Route path="/dashboard-driver" component={DashboardDriver} />
                <Route path="/drivers-signup" component={RegisterDriver} />
                <Route path="/recovery-driver" component={ForgotPasswordDriver} />
                <Route path="/drivers-profile" component={ProfileDriver} /> 
                 <Route path="/drivers-ratings" component={Ratings} />
                 <Route path="/drivers-sos-request" component={SOSRequestDriver} /> 
                 <Route path="/drivers-sos-history" component={SubmittedSOSDriver} /> 

                    
                <Route path="/drivers-request-car-repair" component={MechanicRequestDriver} />    
                  <Route path="/drivers-request-repairs-history" component={MechanicRequestDriverHistory} />
                <Route path="/drivers-createticket" component={TicketRequestDriver} />    
                <Route path="/drivers-submittedticket" component={TicketHistoryDriver} />   
                <Route path="/drivers-faqs" component={FAQHistoryDriver} />   
                <Route path="/drivers-notifications" component={NotificationsDriver} /> 
                
                


                <Route path="/drivers-assignedvehiclehistory" component={AssignedVehicleHistory} />  
                <Route path="/drivers-completedtrips" component={CompletedTripsContent} />    
                <Route path="/drivers-upcomingtrips" component={UpcomingTripsContent} />    
                <Route path="/drivers-tripdetail" component={TripDetailContent} />  

             */}

             
                



                

               



             <Route exact path="/previledges-denied" component={Forbidden} />

		         <Route path="*" component={NotFoundPage} />














 


		  </Switch>
	  </BrowserRouter>
  </>
);

export default Router;
