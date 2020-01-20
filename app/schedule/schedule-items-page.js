const HomeItemsViewModel = require("./schedule-items-view-model");
const firebase = require("nativescript-plugin-firebase");
const dialogs = require("tns-core-modules/ui/dialogs") ;

/*
firebase.login({
    type : firebase.LoginType.PASSWORD,
    passwordOptions : {
        email:"luca.antinori@tecnicosuperiorekennedy.it",
        password:"123456"
    }
}).then(result => {
    console.log("OK",result);
    alert({
        title:"Autenticazione Ok",
        message:`Ciao, ${result.email}`,
        okButtonText:"OK"
    });
}).catch(error=> console.log("error",error))

firebase.getCurrentUser().then(user=>console.log("USER" + user)).catch(()=>[console.log("NO USER LOGGED IN")]);

firebase.logout().then(()=>{console.log("LOGOUT")}).catch(()=>[console.log("LOGOUT ERROR")]);

//firebase.sendEmailVerification({});

firebase.login(
    {
      type: firebase.LoginType.ANONYMOUS
    })
    .then(user => console.log("User uid: " + user.uid))
    .catch(error => console.log("Trouble in paradise: " + error));

*/
const viewModel = new ScheduleItemsViewModel();
function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = viewModel;
}

function showDialog() {
    console.log("test")
    dialogs.login({title: "Login ESOF",
    message: "Enter your credentials",
    okButtonText: "Login",
    cancelButtonText: "Cancel",
    neutralButtonText: "Neutral",
    userNameHint: "Enter your username",
    passwordHint: "Enter your password",
    userName: "luca.antinori@tecnicosuperiorekennedy.it",
    password: "123456"}).then((r)=>{
        console.log(r)
        if (r.result){
            console.log("OK")
            firebase.login({
                type : firebase.LoginType.PASSWORD,
                passwordOptions : {
                    email:r.userName,
                    password:r.password
                }
            }).then(result => {
                console.log("OK",result);
                alert({
                    title:"Autenticazione Ok",
                    message:`Ciao, ${result.email}`,
                    okButtonText:"OK"
                });
                firebase.getCurrentUser().then(user=>console.log("USER" + user)).catch(()=>[console.log("NO USER LOGGED IN")]);
                viewModel.set("isLoggedIn", true)
                if(!result.emailVerified)
                {
                    console.log("Email not verified");
                    
                }
            }).catch(error=>{
                alert({
                    title:"Autenticazione Fallita",
                    message:`Dati sbagliati o inesistenti ${error}`,
                    okButtonText:"OK"
                });
                viewModel.set("isLoggedIn", false)
            })
        }else{
            console.log("Cancel pressed")
        }
    })
}

exports.onNavigatingTo = onNavigatingTo;
exports.showDialog = showDialog;