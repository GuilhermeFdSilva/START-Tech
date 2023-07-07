function areaCirculo() {
  //Obtenção dos valores
  const PI = 3.14159265;
  let raio = parseFloat(document.getElementById("raio").value);
  let area = document.getElementById("areaCirc");
  let calc;

  //Verificação
  raio = isNaN(raio) ? 0 : raio;

  calc = (raio ** 2) * PI;
  area.value = calc.toFixed(2);
}