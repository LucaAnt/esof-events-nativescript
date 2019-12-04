const observableModule = require("tns-core-modules/data/observable");


function SearchViewModel() {
    const viewModel = observableModule.fromObject({
        /* Add your view model properties here */
        latitude: 45.6522854,
        longitude: 13.7661518,
        zoom:14
    });

    return viewModel;
}

module.exports = SearchViewModel;
