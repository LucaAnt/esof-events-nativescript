const HomeItemsViewModel = require("./schedule-items-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new HomeItemsViewModel();
}

exports.onNavigatingTo = onNavigatingTo;
