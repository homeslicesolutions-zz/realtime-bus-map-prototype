import RTM from 'satori-rtm-sdk';

function transChannelInit(callback = ()=>{}) {
  const endpoint = "wss://open-data.api.satori.com";
  const appKey = "Fdea89aBAD5Bff3b94a6B6CFdd9F3c35";
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
