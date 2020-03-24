//import mongoose from 'mongoose';
import Database from '../models/db';


import { ResponseHandler } from '../helpers/response_handler';
import { ErrorHandler } from '../helpers/error_handler';
import DriversRedFlagModel from '../models/DriversSOS.model.js';
import DriversNotificationsModel from '../models/DriversNotifications.model';
import AutoincrementId from '../helpers/autoincrement_mongo.js';
// Database.establishConnection();
const MongooseDatabase = Database.getInstance() || new Database();
export class RedFlagService {
  static createRedFlag(request, response) {
    const { user_id, location, filename, address, status, media,email,phone_number,plate_number,username} = request.body;
    // let id = Number(user_id) || Number(request.body.user_id);
    console.log('you user id : ' + user_id);
    let postData = request.body;
    const NewRedflag = new DriversRedFlagModel({ 
        id:  new AutoincrementId(DriversRedFlagModel).counter(),
        user_id, location, address, status, email,phone_number,plate_number,username,media: [filename] || 'cant find it'
      });

    NewRedflag.save()
      .then(data => {
        const redFlag = data;
        return response.status(201).json({
          status: 201,
          data: [
            {
              id: redFlag.id,
              message: 'Created sos record',
            },
          ],
        });
      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static allRedFlags(request, response) {
    DriversRedFlagModel.find()
      .then(data => {
        let redFlag = data;
        if (redFlag.length === 0) {
          redFlag = [
            // {
            //   id: 1,
            //     user_id:5, 
            //     location:'89898888,09007667', 
            //     address:'lekki', 
            //     status:'unresolved'
              
            // },
          ];

          return response.status(200).json({
            status: 200,
            data: [
              {
                redFlag,
                message: 'All redflags was retrieved successfully',
              },
            ],
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              redFlag,
              message: 'All redflags was retrieved successfully',
            },
          ],
        });
      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static redFlagId(request, response) {
    DriversRedFlagModel.find({id: Number(request.params.id)})
      .then(data => {
        const redFlag = data;
        if (redFlag.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The id of the given red-flag was not found',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              redFlag,
              message: 'Get a specific red-flag was successful',
            },
          ],
        });
      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static deleteRedFlag(request, response) {
    DriversRedFlagModel.find({id: Number(request.params.id)})
      .then(data => {
        const redflags = data;

        if ( redflags.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The red-flag with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The red-flag with the given id does not exists',
          });
        }
        DriversRedFlagModel.removeOne({id: Number(request.params.id)})
          .then(data => {
            const deletedRedFlag = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedRedFlag._id,
                  message: 'red-flag record has been deleted',
                },
              ],
            });
          })
          .catch(error =>
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            }),
          );
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static editRedFlag(request, response) {
    DriversRedFlagModel.find({id: Number(request.params.id)})
      .then(redflagId => {
        if (redflagId.length < 1) {
          return response.status(404).json({
            status: 404,
            error: 'The location with the given red-flag id does not exists',
          });
        }
        const { location } = request.body;
        if ( Number(request.user.id) === Number(redflagId[0].user_id) )  {
          DriversRedFlagModel.updateOne({id: Number(request.params.id)}, {
             
                location: location
             
           }).then(data => {
              const editRedFlags = data;
              return response.status(200).json({
                status: 200,
                data: [
                  {
                    id: editRedFlags._id,
                    editRedFlags,
                    message: 'Updated red-flag record’s location',
                  },
                ],
              });
            })
            .catch(error =>
              response.status(400).json({
                status: 400,
                error: errors.validationError,
              }),
            );
        } else {
          return response.status(403).json({
            status: 403,
            error: 'You must signup or login to access this route',
          });
        }
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );
  }

  static editRedFlagComment(request, response) {
    DriversRedFlagModel.find({id: request.params.id})
      .then(redflagId => {
        if (redflagId.length <=0) {
          return response.status(404).json({
            status: 404,
            error: 'The comment with the given red-flag id does not exists',
          });
        }
        const { comment } = request.body;
        if ( Number(request.user.id) === Number(redflagId[0].user_id) )  {
          DriversRedFlagModel.updateOne({id: Number(request.params.id)}, {
            
                comment: comment
             
           }).then(data => {
              const editCommentRedFlag = data;
              return response.status(200).json({
                status: 200,
                data: [
                  {
                    id: editCommentRedFlag._id,
                    editCommentRedFlag,
                    message: 'Updated red-flag record’s comment',
                  },
                ],
              });
            })
            .catch(error =>
              response.status(400).json({
                status: 400,
                error: ErrorHandler.errors().validationError,
              }),
            );
        } else {
          return response.status(401).json({
            status: 401,
            error: 'You must signup or login to access this route',
          });
        }
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static updateRedFlagStatus(request, response) {
   DriversRedFlagModel.find({id: Number(request.params.id)})
  .then(redId => {
        if (redId.length <= 0) {
          return response.status(404).json({
                      status: 404,
                      error: 'The status with the given red-flag id does not exists',
                    });
        }
         const { status } = request.body;
     if ( Number(request.user.id) )  {


            DriversRedFlagModel.updateOne({id: Number(request.params.id) }, {
                    
                      status: status
                  
                }).then(data => {
                  
                const redflagStatus = data;
                
                return response.status(200).json({
                  status: 200,
                  data: [
                    {
                      id: redflagStatus._id,
                      message: 'Updated red-flag record’s status',
                    },
                  ],
                });
              })
              .catch(err =>
                response.status(400).json({
                  status: 400,
                  error: ErrorHandler.errors().validationError,
                }),
              );

    } else {
          return response.status(401).json({
            status: 401,
            error: 'You must signup or login to access this route',
          });
        }
      })
      .catch(error =>
        response.status(400).send({
          status: 400,
          error:ErrorHandler.errors().validationError,
        }),
      );
  }

  static usersRedflags(request, response) {
    // UserModel.find({user_id: request.params.id})
    DriversRedFlagModel.find({ user_id: Number(request.params.id) })
    
      .then(data => {
        const redFlags = data;
        if (redFlags.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no red-flag record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              redFlags,
              type: 'Red-flag',
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }


  static sendNotifications(request,response){

    const { user_id, message, type, description } = request.body;
    let id = Number(user_id) || Number(request.body.user_id);
    console.log('you user id : ' + id);
    let postData = request.body;
    const NewNotification = new NotificationModel({ 
        id:  new AutoincrementId(NotificationModel).counter(),
        user_id, message, type, description
      });

    NewNotification.save()
      .then(data => {
        const notification = data;
        return response.status(201).json({
          status: 201,
          data: [
            {
              id: notification.id,
              message: 'Created sos record',
            },
          ],
        });
      })
      .catch(err =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );

  }


  static getNotifications(request,response){
    NotificationModel.find({ user_id: Number(request.params.id) })
    
      .then(data => {
        const notifications = data;
        if (notifications.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no notifications record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              notifications,
              type: 'notifications',
              message: 'Successful',
            },
          ],
        });
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

}
