let bmiBerechnung = function () {
    let cm = parseInt(document.getElementById("cm").value);
    let kg = parseInt(document.getElementById("kg").value);
    let bmi = (kg/(cm*cm)) * 10000;
    let bmiRounded = Math.round(bmi * 100) / 100;
    console.log(bmi);
    let ausgabe = document.getElementById("ergebnis");
    ausgabe.value=bmiRounded;
}
