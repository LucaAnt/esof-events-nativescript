const application = require("tns-core-modules/application");
var firebase = require("nativescript-plugin-firebase");

if(application.ios) {
    GMSServices.provideAPIKey("AIzaSyDG-chJjgOUksKOC3j7kHdU8SAcGynnDMw");
  }
 


// Optionally pass in properties for database, authentication and cloud messaging,
  // see their respective docs.
firebase.init({
  iOSEmulatorFlush: true,//bug simulatore
  persist:false, //Caching
  onAuthStateChanged:function(data) {
    console.log(data.loggedIn?"LOGGED":"LOGGED OUT")
  },
}).then(
    function () {
      console.log("firebase.init done");

    },
    function (error) {
      console.log("firebase.init error: " + error);
    }
);


application.run({ moduleName: "app-root" });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
