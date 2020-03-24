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



// var socket = require("socket.io");
var http = require('http');


var socket_io = require("socket.io");
var io = socket_io();

//import favicon from 'serve-favicon';
//const exphbs = require('express-handlebars');

require('./config/passport'); // pass passport for configuration


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
        // origin: function(origin, callback){
        //   // allow requests with no origin 
        //   // (like mobile apps or curl requests)
        //   if(!origin) return callback(null, true);
        //   if(allowedOrigins.indexOf(origin) === -1){
        //     var msg = 'The CORS policy for this site does not ' +
        //               'allow access from the specified Origin.';
        //     return callback(new Error(msg), false);
        //   }
        //   return callback(null, true);
        // },
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


   //not in use for simpicity 
    // this.express.engine('.hbs', exphbs({
    //     extname: '.hbs',
    //     defaultLayout: 'main',
    
    // }));
    // this.express.set('view engine', '.hbs');
    // this.express.set('env', 'development');
    // this.express.use(favicon(path.join(__dirname, 'favicon.png')));
    //this.express.locals.apiKey = config.apiKey;
  //   app.set('views', __dirname + '/views');
  // app.set('view engine', 'jade');
    // app.use(express.static(__dirname + '/public'));
    
  }

  initialize() {}

  run(port = 12000) {
    const that = this;
    if (port) {
      this.port = port;
      this.port = process.env.PORT || port;
    }


  let app = that.express;   



  //good
  // var server = http.createServer(app).listen(that.port, function(){
  //   console.log("Express server listening on port " + that.port);
  // });

  // var io = socket.listen(server);
  // io.sockets.on('connection', function () {
  //   console.log('hello world im a hot socket');
  // });
  

   //old

   // let serverListener = that.express.listen(that.port, err => {
   //      if (err) {
   //        return console.log(err);
   //      }
   //      console.log(`server is listening on ${that.port}`);
   // })



   io.listen(
     that.express.listen(that.port, err => {
        if (err) {
          return console.log(err);
        }
        console.log(`server is listening on ${that.port}`);
     })
  );

  that.express.io = io.on("connection", function(socket){
    console.log("Socket connected: " + socket.id);
  });

   


   
           

      
    

  }
}


export { passport };
export default MongoAppDemo;
