//https://www.eclipse.org/paho/clients/js/

function enviar() {
		var msg=document.getElementById("datos").value;
        message = new Paho.MQTT.Message(msg);
        message.destinationName = "hugoflores411995@gmail.com/test";
        client.send(message);
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "hugoflores411995@gmail.com",
    password: "123456",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("hugoflores411995@gmail.com/test1");
    message = new Paho.MQTT.Message("hola");
    message.destinationName = "hugoflores411995@gmail.com/test";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
    //console.log("onMessageArrived:"+message.payloadString);
	var msg=message.payloadString.split("=")[0];
	document.getElementById("bot").innerHTML=msg;
	var msg=message.payloadString.split("=")[1];
	document.getElementById("led2").innerHTML=msg;
	
  }