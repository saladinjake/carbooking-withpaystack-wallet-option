import UserController from '../controllers/user_controller';
import multer from 'multer';
const aws = require('aws-sdk');
import dotenv from 'dotenv';
dotenv.config();
// const aws_upload = require('./services/aws_uploads').upload;
//const singleUpload = aws_upload.single('image');
const uploadFile = require('./services/aws_uploads');



/*
 * Configure the AWS region of the target bucket.
 * Remember to change this to the relevant region.
 */


aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'us-east-1'
});

//aws.config.region = 'eu-west-1';

/*
 * Load the S3 information from the environment variables.
 */
const S3_BUCKET = 'commute-bucket'//process.env.S3_BUCKET;

class ApiUploads {
  constructor(router) {
    this.router = router;
  }
  attachRoutes() {
    // this.router.post('/image/uploads', UserController.handleImageUpload);
    // this.router.post('/video/uploads', UserController.handleVideoUpload);
    //this.router.post('/image/profile/avater', upload.single('image-upload'), function (req, res, next) {
      //console.log("testing..")
  // The network path after file upload is spliced.
       
  // });



/*
 * Respond to GET requests to /sign-s3.
 * Upon request, return JSON containing the temporarily-signed S3 request and
 * the anticipated URL of the image.
 */
    this.router.get('/sign-s3', (req, res) => {
      const s3 = new aws.S3();


      const fileName = req.query['file-name'];
      const fileType = req.query['file-type'];
      const s3Params = {
        Bucket: S3_BUCKET,
        Key: fileName,
        //Expires: 60,
        ContentType: fileType,
        //ACL: 'public-read'
      };

      s3.getSignedUrl('putObject', s3Params, (err, data) => {
        if(err){
          console.log(err);
          return res.end();
        }
        const returnData = {
          signedRequest: data,
          url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
        };
        res.write(JSON.stringify(returnData));
        res.end();
      });
    });



    /*
     * Respond to POST requests to /submit_form.
     * This function needs to be completed to handle the information in
     * a way that suits your application.
     */
    this.router.put('/save-details', (req, res) => {
      // TODO: Read POSTed form data and do something useful
    });






  this.router.post('/image-upload',function(req, res) {
     console.log(req.body.files)
     uploadFile(req.body.files)
  
  });

  }

  
}

export default ApiUploads;

