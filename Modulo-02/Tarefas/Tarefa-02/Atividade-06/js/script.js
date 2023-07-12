function real_regular(string) {
  const REGULAR = /([^\d\.])+/gim;
  let novaString = string.replace(REGULAR, "");
  return novaString;
}

function calcula_media(num1, num2) {
  if ((num1 < 0 || num1 > 10) || (num2 < 0 || num2 > 10)) {
    return "Notas de 0 a 10"
  }
  return (num1 + num2) / 2;
}

function avalia_conceito(media) {
  if (isNaN(media)) {
    return "N/a"
  } else if (media == 10) {
    return "Aprovado com Distinção"
  } else if (media < 7) {
    return "Reprovado"
  } else {
    return "Aprovado"
  }
}

function retorna_valor() {
  let aluno = document.getElementById("alunoForm").value;
  let nota1 = parseFloat(real_regular(document.getElementById("nota1").value));
  let nota2 = parseFloat(real_regular(document.getElementById("nota2").value));
  let media = calcula_media(nota1, nota2);
  let conceito = avalia_conceito(media);

  // if (media == 10) {
  //   document.getElementById("aluno").innerHTML = "Guilherme França da Silva";
  // } else {
  //   document.getElementById("aluno").innerHTML = aluno;
  // }
  document.getElementById("aluno").innerHTML = aluno;
  document.getElementById("media").innerHTML = media;
  document.getElementById("resultado").innerHTML = conceito;
}