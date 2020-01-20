const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const observableModule = require("tns-core-modules/data/observable");
const firebase = require("nativescript-plugin-firebase/app");
const scheduleCollection = firebase.firestore().collection("schedule");
const myObservableArray = new ObservableArray();


scheduleCollection.get({ source: "server" }).then(querySnapshot => {
    querySnapshot.forEach(itemSnapshot => {
      let item = itemSnapshot.data()
      item.sub = `${item.inizio} — ${item.fine} ${item.luogo}`
      myObservableArray.push(item);
    });
  });

/*
//Aggiungie nuovo documento con ID auto-generato
scheduleCollection.add({
    group:"9:00-10:00",
    inizio: "9:00",
    fine: "10:00",
    luogo: "Caffé degli specchi",
    nome: "test"
  }).then(documentRef => {
    console.log(` added with auto-generated ID: ${documentRef.id}`);
    const doc = scheduleCollection.doc(documentRef.id);
    //Aggiorna il campo/i specificati
    doc.update({id:documentRef.id}).then(()=>{console.log("campo ID sincronizzato")});
  });

//Ritorna tutti i documenti della collection
  scheduleCollection.get({ source: "server" }).then(querySnapshot => {
    querySnapshot.forEach(doc => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  });

  // Aggiungie il documento con l'ID specificato
  /*
  scheduleCollection.doc("SF").set({
    group:"13:00-15:00",
    inizio: "13:00",
    fine: "15:00",
    luogo: "Caffé de paris",
    nome: "test"
 });

//Query
const query = scheduleCollection.where("inizio","==","9:00");

 query.get().then((querySnapshot)=>{querySnapshot.forEach((doc)=>{console.log("Inizio alle 9:00"+doc.data())})})
*/
function ScheduleItemsViewModel() {
    

    const viewModel = observableModule.fromObject({
        items: myObservableArray,
        myGroupingFunc: function(item) {
            return item.group
        },
        isLoggedIn:false
    });
    return viewModel;
}

module.exports = ScheduleItemsViewModel;