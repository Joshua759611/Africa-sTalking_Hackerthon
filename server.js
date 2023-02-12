// Set your app credentials
const credentials = {
    apiKey: '2650563815069f0f1369302f32788cddf9f1d51c16624c96adfee7ae8017991d',
    username: 'chuka_devs',
}

// Initialize the SDK
const AfricasTalking = require('africastalking')(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;

function sendMessage() {
    const options = {
        // Set the numbers you want to send to in international format
        to: ['+254794158818', '+254794594545'],
        // Set your message
        message: "Hello..I am Joshua.",
        // Set your shortCode or senderId
        from: 'Joshua'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(console.log)
        .catch(console.log);
}

sendMessage();