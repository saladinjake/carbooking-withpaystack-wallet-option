'use strict';
import config from '../mongo_config';
import nodemailer from 'nodemailer';


class SendMail {
    constructor(options) {
        this.mailer = nodemailer;
        this.settings = config.mail;
        this.options = options;
    }

    send() {
        if(this.mailer && this.options) {
            let self = this;
            let transporter = self.mailer.createTransport(self.settings);

            if(transporter !== null) {
                return new Promise((resolve, reject) =>{
                    transporter.sendMail(self.options, (error, info) =>{
                        if(error) {
                            reject(Error('Failed'));
                        } else {
                            resolve('OK');
                        }
                    });
                });
            }
        }
    }
}


export default SendMail;