function real_regular(string) {
  const REGULAR = /([^\d\.])+/gim;
  let novaString = string.replace(REGULAR, "");
  return novaString;
}

function porcentagem_reajuste(valor) {
  if (valor < 0) {
    return "Valor invalido";
  } else if (valor <= 280) {
    return 0.2;
  } else if (valor < 700) {
    return 0.15;
  } else if (valor < 1500) {
    return 0.1;
  } else {
    return 0.05;
  }
}

function retorna_reajuste() {
  let salarioInc = parseFloat(real_regular(document.getElementById("salarioInicio").value));
  let porcentagem = porcentagem_reajuste(salarioInc);
  let valorReajuste = salarioInc * porcentagem;
  let novoSalario = salarioInc + valorReajuste;

  document.getElementById("retornoSalInicio").value = `R$ ${salarioInc.toFixed(2)}`;
  document.getElementById("reajuste").value = `${(porcentagem * 100).toFixed()} %`;
  document.getElementById("valorReajuste").value = `R$ ${valorReajuste.toFixed(2)}`;
  document.getElementById("novoSalario").value = `R$ ${novoSalario.toFixed(2)}`;

  document.getElementById("cardRetorno").classList.remove("none");
}