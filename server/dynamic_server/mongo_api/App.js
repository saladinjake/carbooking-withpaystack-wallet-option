require('dotenv').config();
import express, { Router } from 'express';
import mongoose from 'mongoose'
import cors from 'cors';
const debug = require('debug')('ireport:server/server');
const util = require('util');
import bodyParser from 'body-parser';
import logger from 'morgan';
import BridgeRouter from './api/routes';
import config from './config/mongo_config.js';
import DbMongoose from './models/db';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import session from 'express-session';
import methodOverride from 'method-override';
import fs from 'fs';
import path from 'path';
import compression from 'compression';
// import helmet from 'helmet'; // csrf xcrf security
const pug = require('pug');
//var config = require('./oauth.js');
import UserModel from './models/User.model';

const error = require('./middlewares/error');


const http = require('http')
const https = require('https');


var socket_io = require("socket.io");

var socketIo = require("socket.io");
var io = socketIo();

//database connection
const Chat = require("./models/Chat");
const connect = require("./dbconnect");

const chatRouter = require("./route/chatroute");

//import favicon from 'serve-favicon';
//const exphbs = require('express-handlebars');

require('./config/passport'); // pass passport for configuration



const getApiAndEmit = socket => {
  const response = new Date();
  // console.log("emit me frm server to user")
  // Emitting a new message. Will be consumed by the client
  socket.emit("FromAPI", response);
};



class MongoAppDemo {
  constructor() {
    this.express = express();
    this.express.use(logger('dev'));
  
    //this.express.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    // let corsOption = {
    //     origin: true,
    //     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //     credentials: true,
    //     exposedHeaders: ['x-auth-token']
    // };

    var allowedOrigins = [
      'http://localhost:4000',
      'https://checkout.paystack.com',
      "https://google.com",
      "https:mail.google.com",
      "https://facebook.com",
      "https://twitter.com",
      "https://instagram.com"
    ];

    let corsOption = {
       'Access-Control-Allow-Origin': '*',
        
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        exposedHeaders: ['x-auth-token'],
         "Access-Control-Allow-Credentials" :"true"
        
    };
    this.express.use(cors(corsOption));

    // gzip compression
    this.express.use(compression());
// secure apps by setting various HTTP headers
    // this.express.use(helmet());

    // if error is not an instanceOf APIError, convert it.
//     this.express.use(error.converter);

// // catch 404 and forward to error handler
//     this.express.use(error.notFound);

// // error handler, send stacktrace only during development
//     this.express.use(error.handler);

//     this.express.options("/*", function(req, res, next){
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   res.sendStatus(200);
// });
   // this.express.use(cors());
    
    // required for passport
    this.express.use(session({ secret: process.env.SECRET, 
          resave: true,
          saveUninitialized: true 
    })); // session secret
    this.express.use(passport.initialize());
    
    //this.express.use(cors(corsOption));
        
    this.express.use(bodyParser.json());//
    
    // this.express.use(methodOverride());
    this.express.disable('x-powered-by');
    this.express.use(
          bodyParser.urlencoded({
            extended: false,
          }),
    );
    this.express.use(cookieParser());

    // serialize and deserialize
    // passport.serializeUser(function(user, done) {
    //   console.log('serializeUser: ' + user.id);
    //   done(null, user.id);
    // });
    // passport.deserializeUser(function(id, done) {
    //   UserModel.findById(id, function(err, user){
    //     console.log(user);
    //       if(!err) done(null, user);
    //       else done(err, null);
    //     });
    // });

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });

    

    const router = Router();
    new BridgeRouter(router).attachRoutes();

    this.port = process.env.PORT || 12000;
    //define the route real path
    this.express.use('/api/v1', router);
    //routes
    this.express.use("/api/v1/chats", chatRouter);

    this.express.use((request, response, next) => {
      response.status(404).json({
        status: 404,
        error: 'User has no record',
      });
      next();
    });
    this.express.disable('x-powered-by');
    this.express.use(express.static(__dirname +'../../../public'));


      // app.use(express.static(path.join(__dirname, 'public/')));
      this.express.set('view engine', pug);


  
    
  }

  initialize() {}

  run(port = 12000) {
    const that = this;
    if (port) {
      this.port = port;
      this.port = port;
    }


     let app = that.express; 


     // Listen both http & https ports

       const httpServer = http.createServer(app);
      const httpsServer = https.createServer({
         key: fs.readFileSync('/etc/letsencrypt/live/demouserapp.commute.ng/privkey.pem'),
          cert: fs.readFileSync('/etc/letsencrypt/live/demouserapp.commute.ng/fullchain.pem'),
        
         requestCert: false, 
         rejectUnauthorized: false 
        }, app);

//  httpServer.listen(12000, () => {
//     console.log('HTTP Server running on port 80');
// }); 


// const io = socketIo(httpServer);

 const io = require("socket.io")(httpsServer, {
    handlePreflightRequest: (req, res) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": req.headers.origin, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }
});
  

let interval;




const locationMap = new Map()


io.on('connection', socket => {
  console.log("New client connected" + socket.id);
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => getApiAndEmit(socket), 1000);
  


  socket.on('updateLocation', pos => {
    locationMap.set(socket.id, pos)
  })

  socket.on('requestLocations', () => {
    socket.emit('locationsUpdate', Array.from(locationMap))
  })








  //server communication for chat message



  //Someone is typing
  socket.on("typing", data => {
    socket.broadcast.emit("notifyTyping", {
      user: data.user,
      message: data.message
    });
  });

  //when soemone stops typing
  socket.on("stopTyping", () => {
    socket.broadcast.emit("notifyStopTyping");
  });

  socket.on("chat message", function(msg) {
    console.log("message: " + msg);

    //broadcast message to everyone in port:5000 except yourself.
    socket.broadcast.emit("received", { message: msg });

    //save chat to the database
    connect.then(db => {
      console.log("connected correctly to the server");
      let chatMessage = new Chat({ message: msg, sender: "Anonymous" });

      chatMessage.save();
    });
  });







  socket.on('disconnect', () => {
    console.log("Client disconnected");
    clearInterval(interval);
    
    locationMap.delete(socket.id)
  })



})



    httpsServer.listen(12000, () => console.log(`Listening on port ${that.port}`));

  // httpServer.listen(12000, () => console.log(`Listening on port ${that.port}`));






// httpsServer.listen(12000, () => {
//     console.log('HTTPS Server running on port 443');
// });
   





    // io.listen(
    //    // that.express.listen(that.port, err => {
    //    //    if (err) {
    //    //      return console.log(err);
    //    //    }
    //    //    console.log(`server is listening on ${that.port}`);
    //    // })
    // );

    // that.express.io = io.on("connection", function(socket){
    //   console.log("Socket connected: " + socket.id);
    // });


// }); 

 

   }

}



export { passport };
export default MongoAppDemo;
