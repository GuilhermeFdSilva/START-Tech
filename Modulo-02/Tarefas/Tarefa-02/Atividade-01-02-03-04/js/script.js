let contador = 0;
let qtdAlunos = 0;

function real_regular(string) {
  const REGULAR = /([^\d\.])+/gim;
  let novaString = string.replace(REGULAR, "");
  return novaString;
}

function inteiro_regular(string) {
  const REGULAR = /([^\d])+/gim;
  let novaString = string.replace(REGULAR, "");
  return novaString;
}

function calcula_media(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    return "Dados incorretos";
  } else {
    return (numero1 + numero2) / 2;
  }
}

function calcula_produto(numero1, numero2) {
  if (isNaN(numero1) || isNaN(numero2)) {
    return "Dados incorretos";
  } else {
    return numero1 * numero2;
  }
}

function calcula_media_ponderada(nota1, nota2, peso1, peso2) {
  if (isNaN(nota1) || isNaN(nota2) || isNaN(peso1) || isNaN(peso2)) {
    alert("Dados incorretos");
    document.getElementById("formNotas").reset();
  } else {
    document.getElementById("formNotas").reset();
    return (calcula_produto(nota1, peso1) + calcula_produto(nota2, peso2)) / (peso1 + peso2);
  }
}

function exibir_resultado() {
  let numero1 = parseInt(inteiro_regular(document.getElementById("numero1").value));
  let numero2 = parseInt(inteiro_regular(document.getElementById("numero2").value));
  let media = document.getElementById("mediaAr");
  let produto = document.getElementById("produto");

  media.value = calcula_media(numero1, numero2);
  produto.value = calcula_produto(numero1, numero2);
}

//Inserir 2 (ou mais) alunos
function controle_qtd() {
  qtdAlunos = document.getElementById("qtdAlunos").value;
  if (contador >= qtdAlunos) {
    document.getElementById("botao2").setAttribute("disabled", "");
    document.getElementById("botao3").removeAttribute("disabled");
  }
}

function limpar_tabela() {
  document.getElementById("botao3").setAttribute("disabled", "");
  document.getElementById("botao2").removeAttribute("disabled");
  contador = 0;

  let lista = document.getElementById("notas");
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

function inserir_aluno() {
  //obtendo os valores
  let nota1 = parseFloat(real_regular(document.getElementById("nota1").value));
  let nota2 = parseFloat(real_regular(document.getElementById("nota2").value));
  let peso1 = parseInt(inteiro_regular(document.getElementById("peso1").value));
  let peso2 = parseInt(inteiro_regular(document.getElementById("peso2").value));
  let matricula = inteiro_regular(document.getElementById("matricula").value);


  // Verificar notas
  if ((nota1 > 10 || nota1 < 0) || (nota2 > 10 || nota2 < 0)) {
    alert("Notas de 0 a 10");
    return;
  }

  //Criando as tags
  let card = document.getElementById("notas");
  let novaNota = document.createElement("div");
  let matriculaDiv = document.createElement("div");
  let media = document.createElement("div");

  //Definindo as classes
  novaNota.className = "row mb-2 mt-2";
  matriculaDiv.className = "col-md-6 col-sm-5";
  media.className = "col-md-6 col-sm-5";

  //Inserindo as Strings nas tags
  if (matricula == '') {
    alert("Todos os campos são obrigatorios e númeriocos");
    return;
  }
  matriculaDiv.append(matricula);
  try {
    media.append(calcula_media_ponderada(nota1, nota2, peso1, peso2).toFixed(1));
  } catch (error) {
    return;
  }

  novaNota.appendChild(matriculaDiv);
  novaNota.appendChild(media);

  card.appendChild(novaNota);
  contador++;
  controle_qtd();
}