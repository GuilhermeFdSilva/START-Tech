function mediaNota() {
  //Obtenção dos valores
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);
  let mediahtml = document.getElementById("media");
  let media;

  //Verificação
  nota1 = isNaN(nota1) ? 0 : nota1;
  nota2 = isNaN(nota2) ? 0 : nota2;
  nota3 = isNaN(nota3) ? 0 : nota3;
  nota4 = isNaN(nota4) ? 0 : nota4;
  
  media = (nota1 + nota2 + nota3 + nota4) / 4;
  mediahtml.value = media.toFixed(2);
}