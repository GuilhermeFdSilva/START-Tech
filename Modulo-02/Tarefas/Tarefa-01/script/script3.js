function conversorTemp() {
  //Obtenção dos valores
  let tempFah = parseFloat(document.getElementById("tempFah").value);
  let tempCel = document.getElementById("tempCel");
  let calc;

  //Verificação
  tempFah = isNaN(tempFah) ? 0 : tempFah;

  calc = (tempFah - 32) / 1.8;
  tempCel.value = calc.toFixed(2);
}