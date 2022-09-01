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
                TableName: "photoEvent-Dynamo-event",
                FilterExpression: "contains(photographer, :photographer)",
                ExpressionAttributeValues: { ":photographer": email }
            }
            var result = await dynamo.scan(params).promise();
            var data = result.Items;
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
