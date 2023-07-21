//Declaração das variaveis ainda não inicializadas
let senha;
let senhaNormalize;
let dica;
let palavraMascarada;
let vidas = 6;
let imagem = 1;

//Função que acessa o "banco de dados" no Github MyJsonServer
async function buscar_palavra() {
  let temas = ["filmes", "animais", "jogos", "alimentos", "paises"]
  let numeroPalavra = Math.ceil(Math.random() * 20);
  let numeroTema = Math.floor(Math.random() * 5);
  let leOJson = await fetch(`https://my-json-server.typicode.com/GuilhermeFdSilva/forca-json-server/${temas[numeroTema]}/${numeroPalavra}`);
  let objPalavra = await leOJson.json();
  return objPalavra;
}

async function inicia_jogo() {
  //Mostra e oculta os itens para inicio do jogo
  document.getElementById("inicio").style.display = "none";
  document.getElementById("titulo").style.display = "none";
  document.getElementById("teclado").style.display = "flex";
  document.getElementById("containerPalavra").style.display = "block";
  document.getElementById("imagem").setAttribute("src", "img/forca-01.png");
  reset_teclado();

  //Reset da vida e das imagens
  vidas = 6;
  imagem = 1;
  letrasUsadas = "";

  //Pede uma nova palavra e
  //Tranforma a palavra de Promise em um objeto Javascript
  let objPalavra = await buscar_palavra().then();
  senha = objPalavra.palavra;
  senhaNormalize = objPalavra.palavra.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  dica = objPalavra.tema;
  palavraMascarada = senha.split("");
  for (let i = 0; i < palavraMascarada.length; i++) {
    if (palavraMascarada[i] == " ") {
      palavraMascarada[i] = "*";
    } else {
      palavraMascarada[i] = "_";
    }
  }
  exibe_a_palavra();
}

function sai_do_jogo() {
  //Oculta os itens para voltar para o layout original
  document.getElementById("inicio").style.display = "block";
  document.getElementById("titulo").style.display = "block";
  document.getElementById("teclado").style.display = "none";
  document.getElementById("containerPalavra").style.display = "none";
  document.getElementById("imagem").setAttribute("src", "img/forca-01.png");
}

//Remove as condições de cor e "disabled" definidas no ultimo jogo
function reset_teclado() {
  let teclado = document.getElementsByClassName("letra");
  for (let i = 0; i < teclado.length; i++) {
    teclado[i].removeAttribute("disabled");
    teclado[i].classList.remove("acerto");
    teclado[i].classList.remove("erro");
  }
  document.getElementById("responder").removeAttribute("disabled");
}

//Impede que o usuario insira insira mais letras ou respostas
function trava_teclado() {
  let teclado = document.getElementsByClassName("letra");
  for (let i = 0; i < teclado.length; i++) {
    teclado[i].setAttribute("disabled", "true");
  }
  document.getElementById("responder").setAttribute("disabled", "true");
}

function exibe_a_palavra() {
  document.getElementById("mostraPalavra").innerHTML = palavraMascarada.join(" ");
}

//A tag que chamou a função e passada atravez do "this" no HTML
function palpite_letra(tag) {
  if (senhaNormalize.includes(tag.value)) {
    tag.classList.add("acerto");
    tag.setAttribute("disabled", "true");
    atualiza_palavra_mascarada(tag.value);
    exibe_a_palavra();
    verificar_estado();
  } else {
    tag.classList.add("erro");
    tag.setAttribute("disabled", "true");
    vidas--;
    imagem++;
    document.getElementById("imagem").setAttribute("src", `img/forca-0${imagem}.png`);
    verificar_estado();
  }
}

function atualiza_palavra_mascarada(letra) {
  for (let i = 0; i < senhaNormalize.length; i++) {
    if (senhaNormalize[i] == letra) {
      palavraMascarada[i] = senha[i];
    }
  }
}

//Verifica a condição de Vitória ou Derrota
function verificar_estado() {
  let verificarSenha = palavraMascarada.join("").replace("*", " ");
  if (verificarSenha == senha) {
    condicao_vitoria();
  }
  if (vidas == 0) {
    condicao_derrota();
  }
}

//Exibe o popup de Vitória e reinicia o jogo
function condicao_vitoria() {
  let main = document.getElementById("corpo");
  let article = document.createElement("article");
  let h2 = document.createElement("h2");
  h2.innerHTML = "Vitória";
  article.appendChild(h2);
  article.setAttribute("class", "popup cartao-popup-vitoria");
  main.appendChild(article);
  trava_teclado();
  setTimeout(() => {
    main.removeChild(article)
    inicia_jogo();
  }, 3000);
  oculta_campo_resposta();
}

//Exibe o popup de Derrota e reinicia o jogo
function condicao_derrota() {
  let main = document.getElementById("corpo");
  let article = document.createElement("article");
  let h2 = document.createElement("h2");
  let h6 = document.createElement("h6");
  h2.innerHTML = "Derrota";
  h6.innerHTML = `A palavra era: ${senha}`;
  article.appendChild(h2);
  article.appendChild(h6);
  article.setAttribute("class", "popup cartao-popup-derrota");
  main.appendChild(article);
  trava_teclado();
  setTimeout(() => {
    main.removeChild(article)
    inicia_jogo();
  }, 3000);
  oculta_campo_resposta();
}

function exibe_campo_resposta() {
  document.getElementById("campoResposta").style.display = "block";
}

function oculta_campo_resposta() {
  document.getElementById("campoResposta").style.display = "none";
  document.getElementById("inputResposta").value = "";
}

//Filtra os valores do input para padronização
function filtro() {
  const NUMEROS = /[^a-zA-ZÀ-ú]+$/;
  let texto = document.getElementById("inputResposta").value;
  document.getElementById("inputResposta").value = texto.replace(NUMEROS, "");
}

//Verifica a resposta inserida e da a condição
function verificar_resposta() {
  let resposta = document.getElementById("inputResposta").value;
  resposta = resposta.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  if (resposta == senhaNormalize) {
    trava_teclado();
    condicao_vitoria();
  } else {
    trava_teclado();
    condicao_derrota();
  }
}

function exibe_dica(elemento) {
  let main = document.getElementById("corpo");
  let article = document.createElement("article");
  let h2 = document.createElement("h2");
  h2.innerHTML = dica;
  article.appendChild(h2);
  article.setAttribute("class", "popup cartao-popup-vitoria");
  main.appendChild(article);
  vidas--;
  imagem++;
  document.getElementById("imagem").setAttribute("src", `img/forca-0${imagem}.png`);
  verificar_estado();
  setTimeout(() => {
    main.removeChild(article)
  }, 3000);
}