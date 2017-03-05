var google = require('googleapis')
var OAuth2 = google.auth.OAuth2
var auth = require ('../config/auth.js')
var readline = require('readline');
var plus = google.plus('v1');

var oauth2Client = new OAuth2(
  auth.googleAuth.clientID,
  auth.googleAuth.clientSecret,
  auth.googleAuth.callbackURL
)

// generate a url that asks permissions for Google+ and Google Calendar scopes
var scopes = [
  'https://www.googleapis.com/auth/plus.me',
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email'
]

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function getAccessToken (oauth2Client, callback) {
  // generate consent page url
  var url = oauth2Client.generateAuthUrl({
    access_type: 'offline', // will return a refresh token
    scope: scopes
  })

  console.log('Visit the url: ', url)
  rl.question('Enter the code here:', function (code) {
    // request access token
    oauth2Client.getToken(code, function (err, tokens) {
      if (err) {
        return callback(err)
      }
      // set tokens to the client
      // TODO: tokens should be set by OAuth2 client.
      oauth2Client.setCredentials(tokens)
      callback()
    })
  })
}

// retrieve an access token
var getAccessToken2 = getAccessToken(oauth2Client, () => {
  // retrieve user profile
  plus.people.get({ userId: 'me', auth: oauth2Client }, function (err, profile) {
    if (err) {
      return console.log('An error occured', err)
    }
    console.log(profile.displayName, ':', profile.tagline)
  })
})



module.exports= getAccessToken2
