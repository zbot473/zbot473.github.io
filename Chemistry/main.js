var req = new XMLHttpRequest();
var elements;
req.onload = function () {
    elements = JSON.parse(this.responseText)
};
req.open('GET', 'https://raw.githubusercontent.com/zbot473/zbot473.github.io/master/Chemistry/properties.json');
req.send();

function showProperty(html) {
    document.getElementById("propertytable").removeAttribute("hidden")
    var elementJson = elements.filter(function (elements) {
        return elements.symbol == html.innerHTML
    })["0"]
    var name = document.getElementById("name"),
        anumber = document.getElementById("anumber"),
        econfig = document.getElementById("econfig"),
        ostate = document.getElementById("ostate"),
        aradius = document.getElementById("aradius"),
        eneg = document.getElementById("eneg"),
        state = document.getElementById("state"),
        mpoint = document.getElementById("mpoint"),
        bpoint = document.getElementById("bpoint"),
        amass = document.getElementById("amass"),
        ienergy = document.getElementById("ienergy"),
        density = document.getElementById("density"),
        btype = document.getElementById("btype"),
        ydiscover = document.getElementById("ydiscover"),
        electronicConfiguration = elementJson.electronicConfiguration.split(/((?<=\w)(\d))/)

    name.innerHTML = elementJson.name;
    anumber.innerHTML = elementJson.atomicNumber;
    for (let i = 0; i < electronicConfiguration.length; i++) {
        const e = electronicConfiguration[i];
        if (e.match(/\b\d\b/g) != null) {
            if (electronicConfiguration[i + 1].match(/\b\d\b/g) != null) {
                electronicConfiguration.splice(i, 1)
            }
        }
    }
    for (let i = 0; i < electronicConfiguration.length; i++) {
        const e = electronicConfiguration[i];
        if (e.match(/\b\d\b/g) != null) {
            electronicConfiguration[i]="<sup>"+electronicConfiguration[i]+"</sup>"
        }
    }
    console.log(electronicConfiguration)
    econfig.innerHTML = electronicConfiguration.join("")
    amass.innerHTML = elementJson.atomicMass + " amu";
    if (elementJson.oxidationStates) {
        ostate.innerHTML = elementJson.oxidationStates;
    } else {
        ostate.innerHTML = "Unknown"
    }
    if (elementJson.vanDelWaalsRadius) {
        aradius.innerHTML = elementJson.vanDelWaalsRadius + " pm";
    } else {
        aradius.innerHTML = "Unknown"
    }
    if (elementJson.electronegativity) {
        eneg.innerHTML = elementJson.electronegativity;
    } else {
        eneg.innerHTML = "Unknown"
    }
    if (elementJson.standardState) {
        state.innerHTML = elementJson.standardState;
    } else {
        state.innerHTML = "Unknown"
    }
    if (elementJson.density) {
        density.innerHTML = elementJson.density + "g/cm" + "<sup>3</sup>";
    } else {
        density.innerHTML = "Unknown"
    }
    if (elementJson.ionizationEnergy) {
        ienergy.innerHTML = elementJson.ionizationEnergy + " kJ/mol";
    } else {
        ienergy.innerHTML = "Unknown"
    }
    if (elementJson.meltingPoint) {
        mpoint.innerHTML = elementJson.meltingPoint + "˚C";
    } else {
        mpoint.innerHTML = "Unknown"
    }
    if (elementJson.boilingPoint) {
        bpoint.innerHTML = elementJson.boilingPoint + "˚C";
    } else {
        bpoint.innerHTML = "Unknown"
    }
    if (elementJson.meltingPoint) {
        btype.innerHTML = elementJson.bondingType
    } else {
        btype.innerHTML = "Unknown"
    }
    
    ydiscover.innerHTML = elementJson.yearDiscovered

}

function hideProperty() {
    document.getElementById("propertytable").setAttribute("hidden", null)
}