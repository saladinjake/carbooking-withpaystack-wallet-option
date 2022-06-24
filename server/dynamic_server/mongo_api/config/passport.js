var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var InstagramStrategy = require('passport-instagram').Strategy;
var User = require('../models/User.model');
var config = require('./mongo_config');
import AutoincrementId from '../helpers/autoincrement_mongo.js';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
module.exports = passport.use(
  new FacebookStrategy(
    {
      clientID: config.facebook.clientID,
      clientSecret: config.facebook.clientSecret,
      callbackURL: config.facebook.callbackURL,
      profileFields: ['email', 'name'],
    },
    function(accessToken, refreshToken, profile, done) {
      //console.log(JSON.stringify(profile._json))
      const { email, first_name, last_name } = profile._json;
      // const userData = {
      //   email,
      //   firstName: first_name,
      //   lastName: last_name
      // };
      // new userModel(userData).save();
      // done(null, profile);

      //   User.findOne({ email: email }, function(err, user) {
      //     if(err) {
      //       console.log(err);  // handle errors!
      //     }
      //     if (!err && user !== null) {
      //        console.log('user already signed up')
      //       done(null, user);
      //     } else {
      //       user = new User({
      //         oauthID: profile.id,
      //         username: profile.displayName,
      //         firstname: first_name,
      //         lastname: last_name,
      //         created: Date.now()
      //       });
      //       user.save(function(err) {
      //         if(err) {
      //           console.log(err);  // handle errors!
      //         } else {
      //           console.log("saving user ...");
      //           done(null, user);
      //         }
      //       });
      //     }
      //   });
      // }

      User.findOne({ email: email }, function(err, user) {
        if (err) {
          console.log(err); // handle errors!
        }
        if (!err && user !== null) {
          done(null, user);
        } else {
          user = new User({
            id: new AutoincrementId(User).counter(),
            name: profile.displayName,
            email: email,
            firstname: first_name,
            lastname: last_name,

            created: Date.now(),
          });
          user.save(function(err, user) {
            if (err) {
              console.log(err); // handle errors!
            } else {
              console.log('saving user ...');
              console.log(JSON.stringify(user));
              done(null, user);
            }
          });
        }
      });
    },
  ),
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: config.twitter.consumerKey,
      consumerSecret: config.twitter.consumerSecret,
      callbackURL: config.twitter.callbackURL,
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ oauthID: profile.id }, function(err, user) {
        if (err) {
          console.log(err); // handle errors!
        }
        if (!err && user !== null) {
          done(null, user);
        } else {
          user = new User({
            oauthID: profile.id,
            username: profile.displayName,
            created: Date.now(),
          });
          user.save(function(err) {
            if (err) {
              console.log(err); // handle errors!
            } else {
              console.log('saving user ...');
              done(null, user);
            }
          });
        }
      });
    },
  ),
);

passport.use(
  new GoogleStrategy(
    {
      clientID: config.google.clientID,
      clientSecret: config.google.clientSecret,
      callbackURL: config.google.callbackURL,
    },
    function(request, accessToken, refreshToken, profile, done) {
      User.findOne({ oauthID: profile.id }, function(err, user) {
        if (err) {
          console.log(err); // handle errors!
        }
        if (!err && user !== null) {
          done(null, user);
        } else {
          user = new User({
            oauthID: profile.id,
            name: profile.displayName,
            created: Date.now(),
          });
          user.save(function(err) {
            if (err) {
              console.log(err); // handle errors!
            } else {
              console.log('saving user ...');
              done(null, user);
            }
          });
        }
      });
    },
  ),
);

passport.use(
  new InstagramStrategy(
    {
      clientID: config.instagram.clientID,
      clientSecret: config.instagram.clientSecret,
      callbackURL: config.instagram.callbackURL,
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({ oauthID: profile.id }, function(err, user) {
        if (err) {
          console.log(err); // handle errors!
        }
        if (!err && user !== null) {
          done(null, user);
        } else {
          user = new User({
            oauthID: profile.id,
            name: profile.displayName,
            created: Date.now(),
          });
          user.save(function(err) {
            if (err) {
              console.log(err); // handle errors!
            } else {
              console.log('saving user ...');
              done(null, user);
            }
          });
        }
      });
    },
  ),
);
