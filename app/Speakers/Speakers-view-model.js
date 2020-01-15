const observableModule = require("tns-core-modules/data/observable");
const ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;
const firebase = require("nativescript-plugin-firebase/app");
const speakersCollection = firebase.firestore().collection("speakers");
const myObservableArraySpeakers = new ObservableArray();
const data = require('./SpeakersData')

function populateDatabase() {
    data.forEach((itemToAdd)=>{
        //Aggiunge nuovo documento con ID auto-generato
        speakersCollection.add(itemToAdd).then(documentRef => {
            console.log(` added with auto-generated ID: ${documentRef.id}`);
            const doc = speakersCollection.doc(documentRef.id);
            //Aggiorna il campo/i specificati
            doc.update({id:documentRef.id}).then(()=>{console.log("campo ID sincronizzato")});
          });
        });
}


speakersCollection.get({ source: "server" }).then(querySnapshot => {
    if (querySnapshot.docs.length<=1)
        populateDatabase();
  });

  
  speakersCollection.get({ source: "server" }).then(querySnapshot => {
    querySnapshot.forEach(doc => {
        const item = doc.data();
        item.interventocompleto = `${item.nome} — ${item.inizio} ${item.fine}`;
        myObservableArraySpeakers.push(item);
    });
  });




function SpeakersViewModel() {
    const viewModel = {
        itemsSpeakers: myObservableArraySpeakers
    }
    return viewModel;
}

module.exports = SpeakersViewModel;
