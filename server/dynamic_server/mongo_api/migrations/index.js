import mongoose from 'mongoose'
import UserModel from '../models/User.model';
import PartnerModel from "../models/Partners.model";
import DriversModel from "../models/Driver.model";
import SOSModel from '../models/SOS.model';
import FeedbackModel from '../models/Feedback.model';
import CarModel from '../models/Cars.model';
import PlanModel from '../models/Plan.model';
import IndividualPlanModel from '../models/IndividualPlan.model';
import CoperatePlanModel from '../models/CoperatePlan.model';
import UsersPlanModel from '../models/UserPlan.model';
import ItineraryModel from '../models/Itinerary.model';
import FAQModel from '../models/FAQ.model';
import NotificationModel from '../models/Notification.model';
import MechModel from '../models/Repairs.model';
import PayStackSettingsModel from "../models/PaystackSettings.model";
import FacebookSettingsModel from "../models/FacebookSettings.model";
import GoogleSettingsModel from "../models/GmailSettings.model";
import InstagramSettingsModel from "../models/InstagramSettings.model";
import AWSSettingsModel from "../models/AWS3BucketSettings.model";
import SendgridSettingsModel from "../models/SendgridEmailSettings.model";
import WalletModel from "../models/Wallet.model";
import PaymentsModel from "../models/Payments.model";
import QuotationsModel from "../models/Quotation.model";
import QuoteModel from "../models/Quote.model";

import InspectionModel from '../models/Inspection.model';
import DriveTestModel from '../models/DriveTest.model';

import RolesAndPreviledgesModel from '../models/RolesAndPreviledges.model'








const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL,{ 
      keepAlive: 1,
      // useMongoClient: true,
      useNewUrlParser: true,
      // useUnifiedTopology: false,
      useFindAndModify:false,
      useCreateIndex:true
    });
};

const models = {RolesAndPreviledgesModel,
DriveTestModel,
InspectionModel,
QuoteModel,
PaymentsModel,
WalletModel,
SendgridSettingsModel,
AWSSettingsModel,
InstagramSettingsModel,
UserModel,
 PartnerModel,
 DriversModel,
 SOSModel ,
FeedbackModel,
 CarModel,
 PlanModel,
 IndividualPlanModel ,
 CoperatePlanModel ,
 UsersPlanModel ,
 ItineraryModel ,
 FAQModel ,
 NotificationModel ,
MechModel ,
PayStackSettingsModel ,
FacebookSettingsModel,
GoogleSettingsModel

};

export { connectDb };

export default models;