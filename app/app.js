const application = require("tns-core-modules/application");
const config = require("../app/config")
const MapAPI = config.google.map.provideAPIKey || "AIzaSyDG-chJjgOUksKOC3j7kHdU8SAcGynnDMw"
if(application.ios) {
    GMSServices.provideAPIKey(MapAPI);
  }
  
application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
