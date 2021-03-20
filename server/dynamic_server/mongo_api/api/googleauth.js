const { google } = require('googleapis')
var config = require('../../config/mongo_config');
class googleApi {
    constructor(){
        
  
        const { clientID, clientSecret,callbackURL } = config.google;
        this.oAuth2Client = new google.auth.OAuth2(clientID, clientSecret,callbackURL)
    }

    generateUrl(scopes){
        const url = this.oAuth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes.join(' ')
        })
        return url;
    }

    async getUserInfo(code){
        const credentials = await this.oAuth2Client.getToken(code)
        this.oAuth2Client.setCredentials(credentials.tokens);
        const plus = google.plus({
            version: 'v1',
            auth: this.oAuth2Client,
        });
        const data = await plus.people.get({userId: 'me'});
        return data;
    }
}

module.exports = new googleApi();