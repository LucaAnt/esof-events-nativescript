const application = require("tns-core-modules/application");

if(application.ios) {
    GMSServices.provideAPIKey("AIzaSyDG-chJjgOUksKOC3j7kHdU8SAcGynnDMw");
  }
  
application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
