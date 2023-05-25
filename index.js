const accountSid = {<accountSID>};
const authToken = {<accountSID>};
const client = require('twilio')(accountSid, authToken);


client.messages.create({
                to: '<Sender number>',
                body: 'This is a test SMS from Twilio',
                from: '<number assigned by twilio>',
                mediaUrl: ['URL of an image from googledrive'],
    }).then(message => console.log(message.sid));