import mongoose from 'mongoose'
import Seeder from './seeders';
import DummyData  from './dummy_data';
import db from '../models/db';


const MongooseDatabase = db.getInstance() || new db();
class SeedFactory{
    constructor(){
        this.seeders = new Seeder();
        this.dummyData = DummyData;
    
    console.log("starting migrations...")
          // perform seeding
    this.seeders.tearDown();

    this.seeders.buildUp()

           


    
    }

    runSeeder(){

    this.seeders.seedQuotationHistory(this.dummyData.quotationHistory[0]);
    this.seeders.seedQuotationHistory(this.dummyData.quotationHistory[1]);
    this.seeders.seedQuotationHistory(this.dummyData.quotationHistory[2]);

    
     this.seeders.seedRole(this.dummyData.previledgesA[0])
    this.seeders.seedRole(this.dummyData.previledgesA[1])
     this.seeders.seedRole(this.dummyData.previledgesA[2])

     this.seeders.seedEarnings(this.dummyData.earnings[0])


    this.seeders.seedInspectionAndDriveTest(this.dummyData.inspection[0],this.dummyData.driveTest[0])


    this.seeders.seed3rdPartySettings(
      this.dummyData.paystackSettings[0], //paystack,google,facebook,instagram,sendgrid,aws
      this.dummyData.googleSettings[0],
      this.dummyData.facebookSettings[0],
      this.dummyData.instagramSettings[0],
      this.dummyData.sendgridSettings[0],
      this.dummyData.awsSettings[0]
      );

     
        //console.log("starting user seeds...")
      this.seeders.seedUsers(this.dummyData.users[0]);
      this.seeders.seedUsers(this.dummyData.users[1]);
      this.seeders.seedUsers(this.dummyData.users[2]);
      this.seeders.seedUsers(this.dummyData.users[3]);


      //seed partners
      this.seeders.seedPartners(this.dummyData.partners[0]);

      //seed drivers
      this.seeders.seedUsers(this.dummyData.drivers[0]);
      this.seeders.seedUsers(this.dummyData.drivers[1]);
      this.seeders.seedUsers(this.dummyData.drivers[2]);
      this.seeders.seedUsers(this.dummyData.drivers[3]);
  
      //plan category
      this.seeders.seedPlanCategory(this.dummyData.plan[0]);
      this.seeders.seedPlanCategory(this.dummyData.plan[1]);

      //individual plan 
       this.seeders.seedIndividualPlans(this.dummyData.individualPlan[0]);
      this.seeders.seedIndividualPlans(this.dummyData.individualPlan[1]);
       this.seeders.seedIndividualPlans(this.dummyData.individualPlan[2]);
     this.seeders.seedIndividualPlans(this.dummyData.individualPlan[3]);

     //coperate plan addCoperatePlan
       this.seeders.seedCoperatePlans(this.dummyData.coperatePlan[0]);
      this.seeders.seedCoperatePlans(this.dummyData.coperatePlan[1]);
      
       //users plan addCoperatePlan
      this.seeders.seedUsersPlan(this.dummyData.userPlan[0]);
      //wallet
      this.seeders.seedWalletHistory(this.dummyData.walletHistory[0]);
      this.seeders.seedWalletHistory(this.dummyData.walletHistory[1]);
      this.seeders.seedWalletHistory(this.dummyData.walletHistory[2]);
      this.seeders.seedWalletHistory(this.dummyData.walletHistory[3]);
      this.seeders.seedPaymentHistory(this.dummyData.paymentHistory[0]);
      //cars
      this.seeders.seedCars(this.dummyData.cars[0]);
      this.seeders.seedCars(this.dummyData.cars[1]);
      this.seeders.seedCars(this.dummyData.cars[2]);
      this.seeders.seedCars(this.dummyData.cars[3]);
      this.seeders.seedCars(this.dummyData.cars[4]);
      //trips and itineries
      this.seeders.seedItinerary(this.dummyData.userItinerary[0]);
      this.seeders.seedItinerary(this.dummyData.userItinerary[1]);
      this.seeders.seedItinerary(this.dummyData.userItinerary[2]);
     
      console.log("starting interventions seeds...")
      this.seeders.seedSOSRequestByUser(this.dummyData.redflags[0],this.dummyData.redflags[0].user_id);
      this.seeders.seedSOSRequestByUser(this.dummyData.redflags[1], 1);
      this.seeders.seedSOSRequestByUser(this.dummyData.redflags[2], 1);
      this.seeders.seedSOSRequestByUser(this.dummyData.redflags[3], 1);
    //console.log("starting redflags seeds...")
      this.seeders.seedFeedbackByUser(this.dummyData.interventions[0], 0);
      this.seeders.seedFeedbackByUser(this.dummyData.interventions[1], 0);
      this.seeders.seedFeedbackByUser(this.dummyData.interventions[2], 0);
      this.seeders.seedFaqs(this.dummyData.faqs[0]);
      this.seeders.seedFaqs(this.dummyData.faqs[1]);
      this.seeders.seedFaqs(this.dummyData.faqs[2]);
      this.seeders.seedNotification(this.dummyData.notification[0]);
      this.seeders.seedNotification(this.dummyData.notification[1]);
      this.seeders.seedNotification(this.dummyData.notification[2]);
      this.seeders.seedMechanicRequest(this.dummyData.mechanicRequest[0]);
      //to prevent database from halting test process
      setTimeout(() =>{
        mongoose.connection.close();
            
      },39000 )
    
    }
}

let Migrate = new SeedFactory();
Migrate.runSeeder()

 
export default SeedFactory;
