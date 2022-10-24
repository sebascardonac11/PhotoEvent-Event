const PhotoEvent = require('./functions/event');
const jwt_decode = require('jwt-decode');

exports.handler = async function (event, context, callback) {
  console.log("Event: ", event);
  var Event = new PhotoEvent(process.env.DYNAMODB);
  var authorizationDecoded = jwt_decode(event.headers.Authorization);
  switch (event.httpMethod) {
    case 'GET':
        this.response = await Event.getEvents(authorizationDecoded.email);
      break;
    case 'POST':
      console.log("### POST ####")
      this.response = await Event.setEvent(event.body, authorizationDecoded.email);
      break;
    case 'DELETE':
        console.log("### DELETE ####")
        //this.response = await Event.setEvent(event.body, authorizationDecoded.email);
        break;
    default:
    // code
  }
  console.log("Response: ",this.response);
  return {
    statusCode: this.response.statusCode,
    headers: {
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
      "Content-Type": 'application/json'
    },
    body: JSON.stringify(this.response.data)
  };
};