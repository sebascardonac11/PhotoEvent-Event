const AWS = require('aws-sdk');
//AWS.config.update({ region: 'us-east-2' });
const s3Client = new AWS.S3();
const dynamo = new AWS.DynamoDB.DocumentClient();

module.exports = class Event {
    constructor() {
    }
    async getEvents(email) {
        try {
            var params = {
                TableName: "photoEvent-Dynamo-event"
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
 {
  "id": {
    "S": "1"
  },
  "banner": {
    "S": "https://scontent.feoh4-3.fna.fbcdn.net/v/t39.30808-6/288272220_5180596878684788_995914729887946854_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=bvJZslVTWJIAX_Z0476&_nc_ht=scontent.feoh4-3.fna&oh=00_AT-W0AtXhnw1jElHYhqFvkHUMdWtKgCTbuOkBCyMaWk94Q&oe=6308D111"
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
  "name": {
    "S": "GP Colombia PRO"
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