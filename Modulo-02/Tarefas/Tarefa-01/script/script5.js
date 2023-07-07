function azulejos() {
  //Obtenção dos valores
  const AREA_CAIXA = 2.5;
  let alturaAzul = parseFloat(document.getElementById("alturaAzul").value);
  let larguraAzul = parseFloat(document.getElementById("larguraAzul").value);
  let qtdCaixas = document.getElementById("qtdCaixas");
  let qtdSobra = document.getElementById("qtdSobra");
  let caixas;
  let sobra;

  //Verificação
  alturaAzul = isNaN(alturaAzul) ? 0 : alturaAzul;
  larguraAzul = isNaN(larguraAzul) ? 0 : larguraAzul;

  caixas = (alturaAzul * larguraAzul) / AREA_CAIXA;
  qtdCaixas.value = caixas.toFixed(0);
  sobra = (alturaAzul * larguraAzul) % AREA_CAIXA;
  qtdSobra.value = sobra.toFixed(3);
}