const HomeItemsViewModel = require("./schedule-items-view-model");
const firebase = require("nativescript-plugin-firebase");


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

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
