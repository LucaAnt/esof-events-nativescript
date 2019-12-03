const observableModule = require("tns-core-modules/data/observable");

function SearchViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        nome:'',
        cognome:''
    });

    return viewModel;
}

module.exports = SearchViewModel;
