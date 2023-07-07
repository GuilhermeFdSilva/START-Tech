function areaRetangulo() {
  //Obtenção dos valores
  let alturaRet = parseFloat(document.getElementById("alturaRet").value);
  let larguraRet = parseFloat(document.getElementById("larguraRet").value);
  let areaRet = document.getElementById("areaRet");
  let area;

  //Verificação
  alturaRet = isNaN(alturaRet) ? 0 : alturaRet;
  larguraRet = isNaN(larguraRet) ? 0 : larguraRet;

  area = alturaRet * larguraRet;
  areaRet.value = area.toFixed(2);
}

function perimetroRetangulo() {
  //Obtenção dos valores
  let alturaRet = parseFloat(document.getElementById("alturaRet").value);
  let larguraRet = parseFloat(document.getElementById("larguraRet").value);
  let perimetroRet = document.getElementById("perimetroRet");
  let perimetro;

  //Verificação
  alturaRet = isNaN(alturaRet) ? 0 : alturaRet;
  larguraRet = isNaN(larguraRet) ? 0 : larguraRet;

  perimetro = (alturaRet * 2) + (larguraRet * 2);
  perimetroRet.value = perimetro.toFixed(2);
}