import UserController from '../controllers/user_controller';
import multer from 'multer';

const aws_upload = require('./services/aws_uploads');
const singleUpload = aws_upload.single('image');


// Set file upload path and file name
var storage = multer.diskStorage({
  destination: function (req, file, cb){
    // File upload will be placed in upload folder under public after successful upload
    cb(null, './public/upload')
  },
  filename: function (req, file, cb){
    // Set the name of the file to its original name, or add other characters to distinguish the same file, such as file. originalname + new Date (). getTime (); use time to distinguish
    cb(null, file.originalname)
  }
});
var upload = multer({
  storage: storage
});


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

  //MULTER CONFIG: to get file photos to temp server storage
  const multerConfig = {

    //specify diskStorage (another option is memory)
    storage: multer.diskStorage({

      //specify destination
      destination: function(req, file, next){
        next(null, './public/photo-storage');
      },

      //specify the filename to be unique
      filename: function(req, file, next){
        console.log(file);
        //get the file mimetype ie 'image/jpeg' split and prefer the second value ie'jpeg'
        const ext = file.mimetype.split('/')[1];
        //set the file fieldname to a unique name containing the original name, current datetime and the extension.
        next(null, file.fieldname + '-' + Date.now() + '.'+ext);
      }
    }),

    // filter out and prevent non-image files.
    fileFilter: function(req, file, next){
          if(!file){
            next();
          }

        // only permit image mimetypes
        const image = file.mimetype.startsWith('image/');
        if(image){
          console.log('photo uploaded');
          next(null, true);
        }else{
          console.log("file not supported")
          //TODO:  A better message response to user on failure.
          return next();
        }
    }
  };

  this.router.post('/image/profile/avater', multer(multerConfig).single('image-upload'),function(req, res){
      //Here is where I could add functions to then get the url of the new photo
      //And relocate that to a cloud storage solution with a callback containing its new url
      //then ideally loading that into your database solution.   Use case - user uploading an avatar...
      res.send('Complete! Check out your public/photo-storage folder.  Please note that files not encoded with an image mimetype are rejected. <a href="index.html">try again</a>');
  })


  this.router.post('/image-upload',function(req, res) {
  singleUpload(req, res, function(err) {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}]});
    }

    return res.json({'imageUrl': req.file});
  });
});

  }

  
}

export default ApiUploads;

