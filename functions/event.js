const AWS = require('aws-sdk');
//AWS.config.update({ region: 'us-east-2' });
const s3Client = new AWS.S3();
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports = class Event {
  DYNAMODBTABLE;
    constructor(table) {
      this.DYNAMODBTABLE = table
    }
    async getEvents(email) {
        try {
            var params = {
                TableName: this.DYNAMODBTABLE,
                KeyConditionExpression: 'Entity =:s',
                ExpressionAttributeValues: {
                  ':s': 'EVENT',
                }
            }
            var result = await dynamo.scan(params).promise();
            var data = result.Items;

           // var response=dynamo.query(KeyConditionExpression)
            return {
                statusCode: 200,
                data: data
            }
        } catch (error) {
            return {
                statusCode: 404,
                data: error
            }
        }
    }
    async setEvent(body, photographer) {
        try {
            var Item = JSON.parse(body);
            Item.photographer = photographer
            var params = {
                TableName: "photoEvent-Dynamo-event",
                Item: Item
            }
            console.log("param: ", params)
            var result = await dynamo.put(params).promise();

            return {
                statusCode: 201,
                data: result
            }
        } catch (error) {
            console.log("Someting Wrong creating sessions", error)
            return {
                statusCode: 409,
                data: result
            };
        }
    }
}
/**
 * Data dummy para dynamo
 * 
 * 
 * 
 * {
  "Key": {
    "S": "SPONSOR#cdc53b1f-eb9a-4114-8346-29de56fc5133 "
  },
  "Sort": {
    "S": "EVENT#12bf90bf-95a6-4692-bc04-4b19a5b0aa65 "
  },
  "name": {
    "S": "GP Colombia PRO"
  },
  "banner": {
    "S": "https://fedemoto.org/w/wp-content/uploads/2022/09/Homenaje-Salva-68-1-scaled.jpg"
  },
  "date": {
    "S": "2022-02-17"
  },
  "description": {
    "S": "Julio nos trae el #GPColombia!\n\nNos preparamos para la máxima competencia del motociclismo en Colombia, el evento mas importante del país tiene su primer episodio de la temporada 2022 con el #GranPremioVitrix!"
  },
  "location": {
    "S": "Tocancipa"
  },
  "photographers": {
    "SS": [
      "sebascardonac11@gmail.com"
    ]
  },
  "url": {
    "S": "https://www.facebook.com/fedemotocol"
  }
}
 */