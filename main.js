var req = new XMLHttpRequest();
var elements;
req.onload = function () {
    elements = JSON.parse(this.responseText)
};
req.open('GET', 'https://raw.githubusercontent.com/zbot473/Periodic-Table/master/properties.json');
req.send();

function showProperty(html) {
    document.getElementById("propertytable").removeAttribute("hidden")
    var elementsel = elements.filter(function (elements) {
        return elements.symbol == html.innerHTML
    })
    var elementJson = elementsel["0"]

    var name = document.getElementById("name");
    var anumber = document.getElementById("anumber");
    var econfig = document.getElementById("econfig");
    var ostate = document.getElementById("ostate");
    var aradius = document.getElementById("aradius");
    var eneg = document.getElementById("eneg");
    var state = document.getElementById("state");
    var mpoint = document.getElementById("mpoint");
    var bpoint = document.getElementById("bpoint");
    var amass = document.getElementById("amass");
    var ienergy = document.getElementById("ienergy");
    var density = document.getElementById("density");
    name.innerHTML = elementJson.name;
    anumber.innerHTML = elementJson.atomicNumber;
    econfig.innerHTML = elementJson.electronicConfiguration;
    ostate.innerHTML = elementJson.oxidationStates;
    aradius.innerHTML = elementJson.atomicRadius +" pm";
    eneg.innerHTML = elementJson.electronegativity;
    state.innerHTML = elementJson.standardState;
    density.innerHTML = elementJson.density;
    ienergy.innerHTML = elementJson.ionizationEnergy+" kJ/mol";
    amass.innerHTML = elementJson.atomicMass+" amu";
    mpoint.innerHTML = elementJson.meltingPoint + "˚C";
    bpoint.innerHTML = elementJson.boilingPoint + "˚C";
}

function hideProperty() {
    document.getElementById("propertytable").setAttribute("hidden", null)
}
