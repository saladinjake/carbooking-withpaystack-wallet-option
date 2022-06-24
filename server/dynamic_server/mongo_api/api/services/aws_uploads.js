/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const fs = require('fs');

const dotenv = require('dotenv');
dotenv.config();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  region: 'us-east-1',
});

const s3 = new aws.S3();

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only JPEG and PNG is allowed!'), false);
  }
};
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
const upload = multer({
  fileFilter,
  storage: multerS3({
    acl: 'public-read',
    s3,

    bucket: 'commute-bucket',
    metadata: function(req, file, cb) {
      cb(null, { fieldName: 'TESTING_METADATA' });
    },
    key: function(req, file, cb) {
      cb(null, Date.now().toString());
    },
  }),
});

// const uploadFile = () => {
//   const fileName = 'create-ticket.jpg';
//   fs.readFile(fileName, (err, data) => {
//      if (err) throw err;
//      const params = {
//          Bucket: 'commute-bucket', // pass your bucket name
//          Key: 'create-ticket.jpg', // file will be saved as commute-bucket/contacts.csv
//          Body: JSON.stringify(data, null, 2)
//      };
//      s3.upload(params, function(s3Err, data) {
//          if (s3Err) { throw s3Err; }
//          console.log(`File uploaded successfully at ${data.Location}`)
//      });
//   });
// };

const uploadFile = fileName => {
  // read content from the file
  const fileContent = fs.readFileSync(fileName);

  // setting up s3 upload parameters

  const params = {
    Bucket: 'commute-bucket',
    Key: 'avatar-1.jpg',
    ContentType: 'image/jpeg', // file name you want to save as
    Body: fileContent,
  };

  // Uploading files to the bucket
  s3.upload(params, function(err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

module.exports = uploadFile;
