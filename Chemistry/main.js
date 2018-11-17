var req = new XMLHttpRequest();
var elements;
req.onload = function() {
    elements = JSON.parse(this.responseText)
};
req.open('GET', 'https://raw.githubusercontent.com/zbot473/zbot473.github.io/master/Chemistry/properties.json');
req.send();

function showProperty(html) {
    document.getElementById("propertytable").removeAttribute("hidden")
    var elementJson = elements.filter(function(elements) {
        return elements.symbol == html.innerHTML
    })["0"]
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
    sublevels = elementJson.electronicConfiguration
    console.log(sublevels)
    amass.innerHTML = elementJson.atomicMass + " amu";
    if (elementJson.oxidationStates){
        ostate.innerHTML = elementJson.oxidationStates;
    }
    else { 
        ostate.innerHTML = "Unknown"
    }
    if (elementJson.vanDelWaalsRadius){
        aradius.innerHTML = elementJson.vanDelWaalsRadius + " pm";
    }
    else { 
        aradius.innerHTML = "Unknown"
    }
    if (elementJson.electronegativity){
        eneg.innerHTML = elementJson.electronegativity;
    }
    else { 
        eneg.innerHTML = "Unknown"
    }
    if (elementJson.standardState){
        state.innerHTML = elementJson.standardState;
    }
    else { 
        state.innerHTML = "Unknown"
    }
    if (elementJson.density){
        density.innerHTML = elementJson.density + "g/cm" + "3".sup();
    }
    else { 
        density.innerHTML = "Unknown"
    }
    if (elementJson.ionizationEnergy){
        ienergy.innerHTML = elementJson.ionizationEnergy + " kJ/mol";
    }
    else { 
        ienergy.innerHTML = "Unknown"
    }
    if (elementJson.meltingPoint){
        mpoint.innerHTML = elementJson.meltingPoint + "˚C";
    }
    else { 
        mpoint.innerHTML = "Unknown"
    }
    if (elementJson.boilingPoint){
        bpoint.innerHTML = elementJson.boilingPoint + "˚C";
    }
    else { 
        bpoint.innerHTML = "Unknown"
    }
}

function hideProperty() {
    document.getElementById("propertytable").setAttribute("hidden", null)
}
