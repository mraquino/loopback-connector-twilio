## loopback-connector-twilio2

[Twilio](http://www.twilio.com/) connector for [LoopBack](http://www.loopback.io)

## Customizing Twilio configuration for examples

By default, examples from this module assumes the user has a [Twillio](http://www.twilio.com) account.  To run the example you will need to provide your `accountSid` and `authToken` from Twilio and any Token string to use as `apiToken`.

The connector support the following aspects of the [Twilio REST API](http://www.twilio.com/docs/api/rest):
  - [Making Calls](http://www.twilio.com/docs/api/rest/making-calls)
  - [Sending Messages](http://www.twilio.com/docs/api/rest/sending-messages)

### Installation

In your LoopBack project:
    
    $ npm install loopback-connector-twilio2

## The model
Copy the model that is available in the `node_modules/loopback-connector-twilio2` to your `loopback_project/common/models`


## Using the Connector
To use the connector, define the datasource using the connector in your `datasources.json` file. I added the parameter apiToken so you can "restrict" people from using your API even without ACL set. You can use any string as a token:

    
    "twilio-service": {
        "name": "twilio",
        "connector": "loopback-connector-twilio2",
        "accountSid": "YOUR_TWILIO_ACCOUNT_SID",
        "authToken": "YOUR_TWILIO_AUTH_TOKEN",
        "apiToken": "YOUR_API_TOKEN"  
    }
  
Next, attach the created datasource to the provided model in the `model-config.json` file:

    "Twilio": {
        "dataSource": "twilio-service",
        "public": true
    }
    
Now, using the created model, you can send an SMS or make a call using the `send` method of the model:
    
    Twilio.send(options, callback);
    
**Note**: `options` is defined by the JSON objects in the next two sections:
**Note**: `The only loopback operation that actually works is /TwilioMessages - Create a new instance of the model and persist it into the data source. All other methods are loopback default behavior but not implemented`
### Sending a SMS
    {
        type: 'sms',
        to: 'TARGET_PHONE_NUMBER',
        from: 'YOUR_TWILIO_PHONE_NUMBER',
        body: 'TEXT_MESSAGE'
    }

### Making a Call
    {
        type: 'call',
        to: 'TARGET_PHONE_NUMBER',
        from: 'YOUR_TWILIO_PHONE_NUMBER',
        url: 'URL_TO_TwiMIL_FILE'
    }
        
**NOTE**: The `url` property points to an XML file that specifies a [TwiMIL](http://www.twilio.com/docs/api/twiml) command.

### Version
0.5.0

License
----

MIT