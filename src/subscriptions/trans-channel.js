import RTM from 'satori-rtm-sdk';

function transChannelInit(callback = ()=>{}) {
  const endpoint = "wss://open-data.api.satori.com";
  const appKey = "17B9dFcc138Cf9e2385E41270f6De6AA";
  const channel = "transportation";
  const userData = "trimet";

  const client = new RTM(endpoint, appKey);

  client.on('enter-connected', function () {
    console.log('Connected to Satori RTM!');
  });
  
  const subscription = client.subscribe(channel, RTM.SubscriptionMode.SIMPLE);
  
  subscription.on('rtm/subscription/data', function (pdu) {
    pdu.body.messages.forEach(function (msg) {
      if (msg.header['user-data'] === userData) {
        callback(msg);
      }
    });
  }); 

  client.start();
}

export default transChannelInit;
