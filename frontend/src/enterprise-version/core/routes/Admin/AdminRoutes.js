import React, {useState, useEffect} from 'react'
import { Route, Redirect, HashRouter as Router,BrowserRouter,Switch  } from 'react-router-dom'
import axios from "axios"
//admin
import AdminDashboard from '../../../views/Admin/Dashboard/Dashboard';
import Users from "../../../views/Admin/userMgt/users/Users";
import UserDetail from "../../../views/Admin/userMgt/userDetail/UserDetail"
import Admins from "../../../views/Admin/AdminMgt/users/Users";
//import Previledges from "../../../views/Admin/Previledges/users/Users";
import AdminsDetail from "../../../views/Admin/AdminMgt/userDetail/UserDetail"
import Partners from "../../../views/Admin/partnerMgt/users/Users";
import PartnerDetail from "../../../views/Admin/partnerMgt/userDetail/UserDetail"
import PartnersEarnings from  "../../../views/Admin/partnerMgt/users/Earnings"
import Drivers from "../../../views/Admin/driverMgt/users/Users";
import DriverDetail from "../../../views/Admin/driverMgt/userDetail/UserDetail"
import CarMgt from '../../../views/Admin/CarMgt/CarMgt';
import AdminMapTracker from '../../../views/Admin/Map/EmbedMap';
import PlanPackage from "../../../views/Admin/PlanPackage/Plan/PlanPackage";
import PlanPackageDetail from "../../../views/Admin/PlanPackage/PlanPackageDetail/PlanPackageDetail"
import CarInspection from '../../../views/Admin/CarInspection/users/Users';
import AdminCarRequest from '../../../views/Admin/CarInspection/users/Retrieval';
import RetrievalEdit from '../../../views/Admin/CarInspection/users/RetrievalEdit'
import CarInspectionDetail from '../../../views/Admin/CarInspection/userDetail/UserDetail';
import DriveTest from '../../../views/Admin/DriveTest/users/Users';
import DriveTestDetail from '../../../views/Admin/DriveTest/userDetail/UserDetail';
import ProfileUser from "../../../views/Admin/Profile/userDetail/UserDetail";
import SOSADMIN from '../../../views/Admin/SOS/users/Users';
import SOSDETAIL from "../../../views/Admin/SOS/userDetail/UserDetail"
import ProfileDetail from "../../../views/Admin/Profile/userDetail/UserDetail";
import GoogleApi from "../../../views/Admin/Settings/ApiKeys/Google"
import FaceBookApi from "../../../views/Admin/Settings/ApiKeys/FaceBook"
import PayStackApi from "../../../views/Admin/Settings/ApiKeys/PayStack"
import InstagramApi from "../../../views/Admin/Settings/ApiKeys/Instagram"
import AwsS3Api from "../../../views/Admin/Settings/ApiKeys/S3Bucket"
import EmailApi from "../../../views/Admin/Settings/ApiKeys/Email"
import Payments from "../../../views/Admin/PaymentModule/users/Payments"
import paymentDetail from "../../../views/Admin/PaymentModule/userDetail/PaymentDetail"
import Quotations from "../../../views/Admin/PaymentModule/users/Quotations"
import QuotationDetail from "../../../views/Admin/PaymentModule/userDetail/QuotationDetail"
import WalletTransactions from "../../../views/Admin/PaymentModule/users/WalletTransactions"
import WalletTransactionDetail  from "../../../views/Admin/PaymentModule/userDetail/WalletTransactionDetail"
import Bookings from "../../../views/Admin/Bookings/Bookings"
import BookingDetail from "../../../views/Admin/Bookings/BookingDetails"
import ManualBooking from "../../../views/Admin/Bookings/ManualBookings"
import Itineraries from "../../../views/Admin/Bookings/Trips"
import ItinerariesDetails from "../../../views/Admin/Bookings/TripDetail"
import Tickets from "../../../views/Admin/SupportMgt/users/Ticket"
import TicketsDetail from "../../../views/Admin/SupportMgt/userDetail/TicketDetail"
import Enquiries from "../../../views/Admin/SupportMgt/users/Enquiries"
import EnquiriesDetail from "../../../views/Admin/SupportMgt/userDetail/EnquiriesDetail"
import FAQS from "../../../views/Admin/SupportMgt/users/FAQ"
import FAQSDetail from "../../../views/Admin/SupportMgt/userDetail/FAQDetail"
import TechnicalSupport from "../../../views/Admin/SupportMgt/users/TechnicalSupport"
import TechnicalSupportDetail from "../../../views/Admin/SupportMgt/userDetail/TechnicalSupportDetail"
import FeedBack from "../../../views/Admin/SupportMgt/users/Feedback"
import FeedBackDetail from "../../../views/Admin/SupportMgt/userDetail/FeedbackDetail"
import WalletAdmin from '../../../views/Admin/Wallet/WalletHomeAdmin';
import WalletHistoryAdmin from '../../../views/Admin/Wallet/WalletHistoryAdmin'
import QuoteSubscriptionHistoryAdmin from '../../../views/Admin/Wallet/QuoteSubscriptionHistoryAdmin'
import ActivityLogger from '../../../views/Admin/ActivityLogger/ActivityLogger';
import Mech from '../../../views/Admin/Mech/users/Users';
// import Previledges from  '../../../views/Admin/Previledges/users/Users'
import Previledges from "../../../views/Admin/Previledges/users/Users"
import AdminNotifications from '../../../views/Admin/Notifications/notifications'
import NotFoundPage from '../../../views/404Page/NotFound';
import Forbidden from '../../../views/403/Forbidden';
//import Mapp from './components/map'
import Settings from '../../../views/Admin/Settings/Settings'
import Driversettings from '../../../views/Admin/Settings/Drivers/Drivers'
import NewDriver from '../../../views/Admin/Settings/Drivers/NewDriver'
import UpdateDriver from '../../../views/Admin/Settings/Drivers/UpdateDriver'
import Vehicles from '../../../views/Admin/Settings/vehicles/Vehicles'
import NewVehicle from '../../../views/Admin/Settings/vehicles/NewVehicle'
import UpdateVehicle from '../../../views/Admin/Settings/vehicles/UpdateVehicle'
import Journeys from '../../../views/Admin/Settings/journeys/Journeys'
import NewJourney from '../../../views/Admin/Settings/journeys/NewJourney'
import ScheduleJourney from '../../../views/Admin/Settings/journeys/ScheduleJourney'


import Home from '../../../views/Admin/Home/Home' //login

const AdminRouter = () => {
  const token = JSON.parse(sessionStorage.getItem('token'))
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const getCurrentUser = () => {
    const user = sessionStorage.getItem('user')
    return user ? user : false
  }

  const isAdmin= () => {
    const user = sessionStorage.getItem('user')
    return user && JSON.parse(user).roles === 'admin' ? user : false
  }
 return (
	<>
		<BrowserRouter>
		  <Switch>
		   {/* user routes completed ...*/}

		


            {/*Admin Routes*/}
          {/* <Route exact path="/" component={Home} />
		    <Route exact path="/index.html" component={Home} /> */}
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
		   <Route exact path="/admin-google" component={GoogleApi} />
		   <Route exact path="/admin-facebook" component={FaceBookApi} />
		   <Route exact path="/admin-paystack" component={PayStackApi} />
		   <Route exact path="/admin-instagram" component={InstagramApi} />
		   <Route exact path="/admin-bucket" component={AwsS3Api} />
           <Route exact path="/admin-mail" component={EmailApi} />
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
        {/*main map geolocation movment track activity*/}
        <Route exact path='/geolocation-settings' render={props => (
              isAdmin() ? <geolocation-settings {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>

            <Route exact path='/geolocation-settings/drivers' render={props => (
              isAdmin() ? <Driversettings {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>

            <Route exact path='/geolocation-settings/Admin/new' render={props => (
              isAdmin() ? <NewDriver {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>

            <Route exact path='/geolocation-settings/Admin/:id/edit' render={props => (
              isAdmin() ? <UpdateDriver {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>

            <Route exact path='/geolocation-settings/vehicles' render={props => (
              isAdmin() ? <Vehicles {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>

            <Route exact path='/geolocation-settings/vehicles/new' render={props => (
              isAdmin() ? <NewVehicle {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>

            <Route exact path='/geolocation-settings/vehicles/:id/edit' render={props => (
              isAdmin() ? <UpdateVehicle {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>


            <Route exact path='/geolocation-settings/journeys' render={props => (
              isAdmin() ? <Journeys {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>

            <Route exact path='/geolocation-settings/journeys/vehicle/:id/new' render={props => (
              isAdmin() ? <NewJourney {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>

          <Route exact path='/geolocation-settings/journeys/driver/:id/schedule' render={props => (
              isAdmin() ? <ScheduleJourney {...props} /> :
              getCurrentUser() ? <Redirect to='/map-viewer' /> :
              <Redirect to='/login' />
            )}/>




        <Route exact path="/previledges-denied" component={Forbidden} />
		<Route path="*" component={NotFoundPage} />


		  </Switch>
	  </BrowserRouter>
  </>
);
 }

export default AdminRouter;
