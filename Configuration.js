function getConfiguration(config) 
{ 
	config.addressLabel = {en: "IMEI", es: "IMEI"};
}

function getEndpoints(deviceAddress, endpoints)
{
        endpoints.addEndpoint("1", "Temperature sensor", endpointType.temperatureSensor);
        endpoints.addEndpoint("2", "Humidity sensor", endpointType.humiditySensor);
        endpoints.addEndpoint("3", "CO₂ sensor", endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.carbonDioxide);
        endpoints.addEndpoint("4", "PM 1.0", endpointType.mvConcentrationSensor);
        endpoints.addEndpoint("5", "PM 2.5", endpointType.mvConcentrationSensor, mvConcentrationSensorSubType.pm2_5);
        endpoints.addEndpoint("6", "PM 10", endpointType.mvConcentrationSensor, mvConcentrationSensorSubType.pm10);
        endpoints.addEndpoint("7", "TVOC sensor", endpointType.ppmConcentrationSensor, ppmConcentrationSensorSubType.voc);
        endpoints.addEndpoint("8", "AQI", endpointType.airQualityIndexSensor);
}

/*function validateDeviceAddress(address, result)
{
  if (address.length != 16) {
    result.ok = false;
    result.errorMessage = {
      en: "The address must be 16 characters long.", 
      es: "La dirección debe tener exactamente 16 caracteres."
    };
  }
}*/

function updateDeviceUIRules(device, rules)
{
  rules.canCreateEndpoints = true;
}

function updateEndpointUIRules(endpoint, rules)
{
  rules.canDelete = true;
  rules.canEditSubtype = false;
}