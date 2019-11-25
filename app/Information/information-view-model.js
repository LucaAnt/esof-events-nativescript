const observableModule = require("tns-core-modules/data/observable");

function SearchViewModel() {
    const viewModel = observableModule.fromObject({
        test:"Variabile from viewModelInformation"
    });

    return viewModel;
}

module.exports = SearchViewModel;
