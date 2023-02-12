// Set your app credentials
const credentials = {
    apiKey: '2650563815069f0f1369302f32788cddf9f1d51c16624c96adfee7ae8017991d',
    username: 'chuka_devs',
}

const AfricasTalking =require('africastalking')(credentials);
const airtime=AfricasTalking.AIRTIME;
function SendAirtime() {
    const output= {
        maxNumRetry:1,
        recipients:[
            {phoneNumber:'+254794594545',amount:05, currencyCode:'KES'},
            {phoneNumber:'+254794158818',amount:05,currencyCode:'KES'},
        ],
    };
    console.log({output});
};
SendAirtime();