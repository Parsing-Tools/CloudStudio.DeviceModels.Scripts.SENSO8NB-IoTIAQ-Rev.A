function parseUplink(device, payload)
{
    var parsed = payload.asJsonObject();
    env.log(parsed);    

    // Store humidity
    var e = device.endpoints.byType(endpointType.humiditySensor);
    if (e != null)
        e.updateHumiditySensorStatus(parsed.RH);

    // Store temperature
    e = device.endpoints.byType(endpointType.temperatureSensor);
    if (e != null)
        e.updateTemperatureSensorStatus(parsed.temp);

    // Store CO2
    e = device.endpoints.byType(endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.carbonDioxide);
    if (e != null)
        e.updatePpmConcentrationSensorStatus(parsed.CO2[0]);

    // Store PM 1.0
    e = device.endpoints.byAddress("4");
    if (e != null)
        e.updateMvConcentrationSensorStatus(parsed["PM1.0"][0]);

    // Store PM 2.5
    e = device.endpoints.byAddress("5")
    if (e != null)
        e.updateMvConcentrationSensorStatus(parsed["PM2.5"][0]);

    // Store PM 10
    e = device.endpoints.byAddress("6")
    if (e != null)
        e.updateMvConcentrationSensorStatus(parsed.PM10[0]);
      
    // Store TVOC
    e = device.endpoints.byAddress("7");
    if (e != null)
        e.updatePpmConcentrationSensorStatus(parsed.TVOC[0]);
  
    // Store AQI
    e = device.endpoints.byAddress("8");
    if (e != null)
        e.updateAqiSensorStatus(parsed.AQI[0]);

}

function buildDownlink(device, endpoint, command, payload) 
{ 
	// This function allows you to convert a command from the platform 
	// into a payload to be sent to the device.
	// Learn more at https://wiki.cloud.studio/page/200

	// The parameters in this function are:
	// - device: object representing the device to which the command will
	//   be sent. 
	// - endpoint: endpoint to which the command will be sent. May be null
	//   if the command is to be sent to the device, and not to an individual
	//   endpoint within the device.
	// - command: object containing the command that needs to be sent. More
	//   information at https://wiki.cloud.studio/page/1195.

	// This example is written assuming a device that contains a single endpoint, 
	// of type appliance, that can be turned on, off, and toggled. 
	// It is assumed that a single byte must be sent in the payload, 
	// which indicates the type of operation.

	 payload.port = 25; 	 	 // This device receives commands on LoRaWAN port 25 
	 //payload.buildResult = downlinkBuildResult.ok;
     payload.buildResult = downlinkBuildResult.ok; 
     payload.setAsBytes([1, 2, 3, 4, 5, 6, 7, 8]);
     payload.errorbytes = "This is an error bytes!";
     payload.requiresResponse = false;     
}