let fahrtkostenberechnung = function () {
    let km = parseFloat(document.getElementById("km").value)
    let stunden = parseFloat(document.getElementById("stunden").value)
    let berechnung = "";
    if(document.getElementById('pkw').checked) {
        berechnung = km*0.35+stunden*2;

    }else if(document.getElementById('kleintransport').checked) {
        berechnung = km*0.50+stunden*5.50;
    } else {
        alert("Fehler aufgetretten. Laden Sie die Seite neu!")
    }
    let rounden = berechnung.toFixed(2);
    let ausgabe = document.getElementById("ergebnis")
    ausgabe.value= rounden;
}
			