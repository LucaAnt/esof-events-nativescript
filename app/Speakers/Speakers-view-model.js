const observableModule = require("tns-core-modules/data/observable");
const data = require('./SpeakersData')

const redata = data.map((item) => {
    item.interventocompleto = `${item.nome} — ${item.inizio} ${item.fine}`
    return item
});

function SpeakersViewModel() {
    const viewModel = observableModule.fromObject({
       itemsSpeakers:redata

    });
    return viewModel;
}

module.exports = SpeakersViewModel;
