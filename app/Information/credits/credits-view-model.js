const observableModule = require("tns-core-modules/data/observable");

function SearchViewModel() {
    const viewModel = observableModule.fromObject({
        credits:["Mario Rossi","Luca Rossi","Piero Rossi"]
    });

    return viewModel;
}

module.exports = SearchViewModel;
