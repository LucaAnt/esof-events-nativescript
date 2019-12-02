const SpeakersViewModel = require("./Speakers-view-model");

function onNavigatingTo(args) {
    const component = args.object;
    component.bindingContext = new SpeakersViewModel();
}

exports.onNavigatingTo = onNavigatingTo;

exports.onTap = ()=>{alert();};

