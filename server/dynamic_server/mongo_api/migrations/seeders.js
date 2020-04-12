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


import EarningsModel from '../models/EarningsModel';

import InspectionModel from '../models/Inspection.model';
import DriveTestModel from '../models/DriveTest.model';

import RolesAndPreviledgesModel from '../models/RolesAndPreviledges.model'
import db from '../models/db';

const MongooseDatabase = db.getInstance() || new db();

class Seeders{

  seedInspectionAndDriveTest(inspection,driveTest){
     setTimeout(()  => {

             InspectionModel.addInspection(inspection,(err, collection) =>{
                 if(err){
                   console.log('could not create inspection settings')
                 }
                 console.log(collection + "inspection has been added")
             });


            DriveTestModel.addTest(driveTest,(err, collection) =>{
                 if(err){
                   console.log('could not add drive test seed settings')
                 }
                 console.log(collection + "drive test has been added")
             });


            



     },24000)
  }


  seedEarnings(earnings){
     setTimeout(()  => {

            EarningsModel.addEarnings(earnings,(err, collection) =>{
                 if(err){
                   console.log('could not create roles')
                   console.log(err)
                 }
                 console.log(collection + "roles has been added")
             });


     },24000)
  }


  seedRole(role){
     setTimeout(()  => {

            RolesAndPreviledgesModel.addRole(role,(err, collection) =>{
                 if(err){
                   console.log('could not create roles')
                   console.log(err)
                 }
                 console.log(collection + "roles has been added")
             });


     },22000)
  }

  seed3rdPartySettings(paystack,google,facebook,instagram,sendgrid,aws){
           setTimeout(()  => {
              PayStackSettingsModel.addSettings(paystack,(err, collection) =>{
                 if(err){
                   console.log('could not create paystack settings')
                 }
                 console.log(collection + "paystack settings has been added")
             });


              FacebookSettingsModel.addSettings(facebook,(err, collection) =>{
                 if(err){
                   console.log('could not facebook settings')
                 }
                 console.log(collection + "facebook has been added")
             });


              GoogleSettingsModel.addSettings(google,(err, collection) =>{
                 if(err){
                   console.log('could not google')
                 }
                 console.log(collection + "google has been added")
             });


              InstagramSettingsModel.addSettings(instagram,(err, collection) =>{
                 if(err){
                   console.log('could not create instagram')
                 }
                 console.log(collection + "instagram settings has been added")
             });


              AWSSettingsModel.addSettings(aws,(err, collection) =>{
                 if(err){
                   console.log('could not create aws settings')
                 }
                 console.log(collection + "has been added")
             });

              SendgridSettingsModel.addSettings(sendgrid,(err, collection) =>{
                 if(err){
                   console.log('could not create send grid settings')
                 }
                 console.log(collection + "send grid has been added")
             })


           },17000)
    
  }

  seedUsers(dataUsers){
           setTimeout(()  => {
              UserModel.addUser(dataUsers,(err, collection) =>{
                 if(err){
                   console.log('could not create user')
                 }
                 console.log(collection + "has been added")
             })
           },3000)
    
  }

  seedDrivers(dataUsers){
           setTimeout(()  => {
              DriversModel.addUser(dataUsers,(err, collection) =>{
                 if(err){
                   console.log('could not create driver')
                 }
                 console.log(collection + "driver has been added")
             })
           },15000)
    
  }

  seedPartners(dataUsers){
           setTimeout(()  => {
              PartnerModel.addUser(dataUsers,(err, collection) =>{
                 if(err){
                   console.log('could not create partner')
                 }
                 console.log(collection + "partner has been added")
             })
           },19000)
    
  }

  seedCars(cars){
    setTimeout(()  => {
              CarModel.addCars(cars,(err, collection) =>{
                 if(err){
                   console.log(err)
                   console.log('could not create car')
                 }
                 console.log(collection + " for cars has been added")
             })
           },11000)
  }


  seedPlanCategory(Plan){
    setTimeout(()  => {
              PlanModel.addPlanCategory(Plan,(err, collection) =>{
                 if(err){
                   console.log('could not create  plan category')
                 }
                 console.log(collection + " for plans category has been added")
             })
           },17000)
  }


  seedIndividualPlans(indivPlan){
    setTimeout(()  => {
           IndividualPlanModel.addIndividualPlan(indivPlan,(err, collection) =>{
                 if(err){
                   console.log('could not create individual plan')
                 }
                 console.log(collection + " for individual plans has been added")
             })
           },15000)
  }


  seedCoperatePlans(copPlan){
    setTimeout(()  => {
              CoperatePlanModel.addCoperatePlan(copPlan,(err, collection) =>{
                 if(err){
                   console.log('could not create coperate plan')
                 }
                 console.log(collection + " for coperate plans has been added")
             })
           },19000)
  }

  seedUsersPlan(copPlan){
    setTimeout(()  => {
              UsersPlanModel.addPlanToUser(copPlan,(err, collection) =>{
                 if(err){
                   console.log('could not create user  plan')
                 }
                 console.log(collection + " for **** user plans has been added")
             })
           },13000)
  }



  seedItinerary(itinerary){
    setTimeout(()  => {
            ItineraryModel.addItinerary(itinerary,(err, collection) =>{
                 if(err){
                   console.log('could not create user  itinerary')
                 }
                 console.log(collection + " for **** user itinerary has been added")
             })
           },4000)
  }


  

  seedSOSRequestByUser(dataInterventions, id){
     
          // perform seeding
          setTimeout(()  => {
              UserModel.findOne({id: id}).exec()
              .then((user) =>{
               console.log(user + "to porpulate by redflag")
               
               const NewIntervention = new SOSModel({...dataInterventions,_user: user._id});
              NewIntervention.save()
                .then(savedIntervention => console.log(savedIntervention  + "has been added"))
                .catch(e => console.log(e));

            }).catch(e => console.log('could not find user data for his redflag/sos'))

           },12000)
 
  }

  seedFaqs(dataFaqs){

    setTimeout(()  => {
              FAQModel.addFaq(dataFaqs,(err, collection) =>{
                 if(err){
                   console.log('could not create dataFaqs')
                 }
                 console.log(collection + " dataFaqs has been added")
             })
           },18000)

  }


  seedNotification(data){

    setTimeout(()  => {
              NotificationModel.addNotification(data,(err, collection) =>{
                 if(err){
                   console.log('could not create data for addMech')
                 }
                 console.log(collection + " addMech has been added")
             })
           },20000)

  }

  seedMechanicRequest(data){

    setTimeout(()  => {
      MechModel.addMech(data,(err, collection) =>{
                 if(err){
                   console.log('could not create data for notification')
                 }
                 console.log(collection + " dnotification has been added")
             })
      },20000)

  }

  seedWalletHistory(data){

    setTimeout(()  => {
      WalletModel.addToWallet(data,(err, collection) =>{
                 if(err){
                   console.log('could not add topwallet for user')
                 }
                 console.log(collection + "top wallet transaction has been added")
             })
      },24000)

  }

  seedQuotationHistory(data){
    setTimeout(()  => {
      QuoteModel.addToWallet(data,(err, collection) =>{
        if(err){
          console.log('could not add quotation for user')
        }
          console.log(collection + " quotation transaction has been added")
        })
      },40000)

  }


  seedPaymentHistory(data){
    setTimeout(()  => {
      PaymentsModel.addToWallet(data,(err, collection) =>{
                 if(err){
                   console.log('could not add payments for user')
                 }
                 console.log(collection + " payment transaction has been added")
             })
      },18000)

  }



  seedFeedbackByUser(dataRedflags, id){
          // perform seeding
          //Awesome saladin.. Awesome!!!
          setTimeout(()  => {
            UserModel.findOne({id: id}).exec()
            .then((user) =>{
             console.log(user + "to porpulate by intervention")
             
             const NewFeedbackModel = new FeedbackModel({...dataRedflags,_user: user._id});
            NewFeedbackModel.save()
              .then(savedRedflag => console.log(savedRedflag  + "has been added"))
              .catch(e => console.log(e));

          }).catch(e => console.log('could not find user data for his redflag'))

         },21000)     
  }






  tearDown(){
    UserModel.deleteMany().exec()
    .then(table=> console.log('table deleted: ' + table))
    .catch(e => throw e)
     
    SOSModel.deleteMany().exec()
       .then(table=> console.log('table deleted: ' + table))
       .catch(e => throw e)

    SOSModel.deleteMany().exec()
       .then(table=> console.log('table deleted: ' + table))
       .catch(e => throw e)

    CarModel.deleteMany().exec()
       .then(table=> console.log('table deleted: ' + table))
       .catch(e => throw e)

    PlanModel.deleteMany().exec()
       .then(table=> console.log('table deleted: ' + table))
       .catch(e => throw e)

    IndividualPlanModel.deleteMany().exec()
       .then(table=> console.log('table deleted: ' + table))
       .catch(e => throw e)

   
    CoperatePlanModel.deleteMany().exec()
       .then(table=> console.log('table deleted: ' + table))
       .catch(e => throw e)


    UsersPlanModel.deleteMany().exec()
       .then(table=> console.log('table deleted: ' + table))
       .catch(e => throw e)

    // for(let collection in mongoose.connection.collections){
    //   mongoose.connection.collections[collection].drop( (err,coll) =>{
    //      if(err){
    //        console.log("error droping")
    //      }
    //      console.log(coll +" has been dropped")
    //   })
    // }
       
  }

  buildUp(){
     [
       //all collections to create
      
      'users',
      'plan',
      'cars',


     ].forEach((table)=>{
         mongoose.connection.createCollection(table, (err,coll) =>{
           if(err){
             console.log("error creating")
           }
           console.log(coll +" has been created")
        });

     });
  
  
  }
}
export default Seeders;