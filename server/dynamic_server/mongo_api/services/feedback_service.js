//import mongoose from 'mongoose';
import Database from '../models/db';
/****************************************************************/
/******* @author saladin jake (Victor juwa) ********************************/
/******* @desc Express js || ****************/
import { ResponseHandler } from '../helpers/response_handler';
import { ErrorHandler } from '../helpers/error_handler';
import Config from '../config/mongo_config';
import InterventionsModel from '../models/Feedback.model';
import SingleInterventionActiveRecord from '../models/ActiveRecords/ActiveRecordSingleIntervention';
// Database.establishConnection();
import AutoincrementId from '../helpers/autoincrement_mongo.js';

const MongooseDatabase = Database.getInstance() || new Database();
export class InterventonService {
  static createIntervention(request, res) {
    const {
      comment,
      reportType,
      images,
      subject,
      location,
      status,
      user_id,
      category,
      ticket_id,
      username,
      email,
      phone_number,
      response,
    } = request.body;
    console.log('images : ' + images);
    //console.log('videos: ' + videos);
    let id = Number(user_id) || Number(request.body.user_id);
    console.log('you user id : ' + id);
    let postData = request.body;

    const NewIntervention = new InterventionsModel({
      id: new AutoincrementId(InterventionsModel).counter(),
      user_id: request.body.user_id,
      location: request.body.location,
      images: request.body.images,
      subject: request.body.subject,
      comment: request.body.comment,
      status: request.body.status,
      category: reportType,
      email: request.body.email,
      response: request.body.response,
      phone_number: request.body.phone_number,
      ticket_id: request.body.ticket_id,
      username: request.body.username,
    });

    NewIntervention.save()
      .then(data => {
        const intervention = data;
        return res.status(201).json({
          status: 201,
          data: [
            {
              id: intervention.id,
              message: 'Created intervention record',
            },
          ],
        });
      })
      .catch(err =>
        res.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static allInterventions(request, response) {
    //simple use case no promises
    //   InterventionsModel.getAllInterventions((err, data) => {
    //   if(err){
    //     throw err;
    //   }
    //   res.json(data);
    // });
    InterventionsModel.find()
      .then(data => {
        console.log('all' + data);
        let intervention = data;
        if (intervention.length === 0) {
          intervention = [
            {
              id: 1,
              user_id: 1,
              location: '6.524379, 3.379206',
              images: ['http://localhost/UI/images/a.jpg', 'http://localhost/UI/images/a.jpg'],
              videos: ['http://localhost/UI/videos/a.mp4', 'http://localhost/UI/videos/b.mp4'],
              comment: 'Story for the Gods',
              status: 'draft',
            },
          ];

          return response.status(200).json({
            status: 200,
            data: [
              {
                // intervention,
                message: 'No records yet',
              },
            ],
          });
        }
        //console.log( intervention)
        return response.status(200).json({
          status: 200,
          data: [
            {
              intervention,
              message: 'All interventions was retrieved successfully',
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

  static interventionId(request, response) {
    //simple use case without promises
    //   InterventionsModel.getInterventionById(req.params.id, (err, data) => {
    //   if(err){
    //     throw err;
    //   }
    //   res.json(data);
    // });
    InterventionsModel.find({ id: Number(request.params.id) })
      .then(data => {
        console.log('specific:' + data);

        const intervention = data; //related
        if (intervention.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The intervention with the given id does not exists',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              intervention,
              message: 'Get a specific intervention was successful',
            },
          ],
        });
      })
      .catch(err => {
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }

  static deleteIntervention(request, response) {
    //simple use case without promises
    //var id = req.params.id;
    //   InterventionsModel.removeIntervention(id, (err, data) => {
    //   if(err){
    //     throw err;
    //   }
    //   res.json(data);
    // });
    InterventionsModel.find({ id: Number(request.params.id) })
      .then(data => {
        const interventions = data;

        if (interventions.length <= 0) {
          console.log(
            JSON.stringify({
              status: 404,
              error: 'The intervention with the given id does not exists',
            }),
          );
          return response.status(404).json({
            status: 404,
            error: 'The intervention with the given id does not exists',
          });
        }
        InterventionsModel.remove({ id: Number(request.params.id) })
          .then(data => {
            const deletedIntervention = data;
            response.status(202).json({
              status: 202,
              data: [
                {
                  id: deletedIntervention.id,
                  message: 'intervention record has been deleted',
                },
              ],
            });
          })
          .catch(error => {
            console.log(error);
            response.status(400).json({
              status: 400,
              error: ErrorHandler.errors().validationError,
            });
          });
      })
      .catch(error => {
        console.log(error);
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        });
      });
  }

  static interventionLocation(request, response) {
    //simple use case with out promises
    //var id = req.params.id;
    //var intervention = req.body;
    //   InterventionsModel.updateLocation(id, intervention, {}, (err, intervention) => {
    //   if(err){
    //     throw err;
    //   }
    //   res.json(intervention);
    // });
    InterventionsModel.find({ id: Number(request.params.id) })
      .then(interventionId => {
        if (interventionId.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The intervention with the given id does not exists',
          });
        }
        const { location } = request.body;
        console.log(
          JSON.stringify(request.user) + ' this user has record id' + interventionId[0].user_id,
        );

        if (Number(request.user.id) === Number(interventionId[0].user_id)) {
          InterventionsModel.updateOne(
            { id: Number(request.params.id) },
            {
              location: location,
            },
          )
            .then(data => {
              const editInterventionLocation = data;
              return response.status(200).json({
                status: 200,
                data: [
                  {
                    _id: editInterventionLocation._id,
                    id: editInterventionLocation.id,
                    editInterventionLocation,
                    message: 'Updated intervention record’s location',
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
          return response.status(403).json({
            status: 403,
            error: 'You must signup or login to access this route',
          });
        }
      })
      .catch(error =>
        response.status(400).json({
          status: 400,
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static editInterventionComment(request, response) {
    //simple use case with out promises
    //var id = req.params.id;
    //var intervention = req.body;
    //   InterventionsModel.updateComment(id, intervention, {}, (err, book) => {
    //   if(err){
    //     throw err;
    //   }
    //   res.json(book);
    // });
    InterventionsModel.find({ id: Number(request.params.id) })
      .then(interventionId => {
        if (interventionId.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The comment with the given intervention id does not exists',
          });
        }
        const { comment } = request.body;
        if (Number(request.user.id) === Number(interventionId[0].user_id)) {
          InterventionsModel.updateOne(
            { id: Number(request.params.id) },
            {
              comment: comment,
            },
          )
            .then(data => {
              const editComment = data;
              return response.status(200).json({
                status: 200,
                data: [
                  {
                    _id: editComment._id,
                    id: editComment.id,
                    editComment,
                    message: 'Updated intervention record’s comment',
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

  static updateInterventionStatus(request, response) {
    //simple use case with out promises
    //var id = req.params.id;
    //var intervention = req.body;
    //   InterventionsModel.updateStatus(id, intervention, {}, (err, book) => {
    //   if(err){
    //     throw err;
    //   }
    //   res.json(book);
    // });

    InterventionsModel.find({ id: Number(request.params.id) })
      .then(interventionId => {
        if (interventionId.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'The status with the given intervention id was not found',
          });
        }
        const { status } = request.body;
        if (Number(request.user.id)) {
          InterventionsModel.updateOne(
            { id: Number(request.params.id) },
            {
              status: status,
            },
          )
            .then(data => {
              const interventionStatus = data;

              return response.status(200).json({
                status: 200,
                data: [
                  {
                    _id: interventionStatus._id,
                    id: interventionStatus.id,
                    message: 'Updated intervention record’s status',
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
          error: ErrorHandler.errors().validationError,
        }),
      );
  }

  static activateSearch(request, response) {
    let searchTerm = request.body.searchTerm;
    let query = {
      comment: {
        $regex: searchTerm,
        $options: 'i',
      },
    };

    InterventionsModel.find(query)
      .limit(6)
      .then(rests => {
        const interventions = data;
        if (interventions.length === 0) {
          return response.status(404).json({
            status: 404,
            error: 'was not found',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              id: interventionStatus._id,
              data: interventions,
              message: 'success in search',
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

  static usersInterventions(request, response) {
    InterventionsModel.find({ user_id: Number(request.params.id) })

      // UserModel.find({user_id: request.params.id})
      .then(data => {
        const intervention = data;
        if (intervention.length <= 0) {
          return response.status(404).json({
            status: 404,
            error: 'User has no interventions record',
          });
        }
        return response.status(200).json({
          status: 200,
          data: [
            {
              intervention,
              type: 'Intervention',
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
