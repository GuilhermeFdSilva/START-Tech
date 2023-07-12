function real_regular(string) {
  const REGULAR = /([^\d\.])+/gim;
  let novaString = string.replace(REGULAR, "");
  return novaString;
}

function calcula_inss(salario) {
  return salario * 0.1;
}

function calcula_fgts(salario) {
  return salario * 0.08;
}

// Descontar o inss e o fgts ??
function retorna_descontos() {
  let salarioBruto = parseFloat(real_regular(document.getElementById("salario").value));
  let inss = calcula_inss(salarioBruto);
  let fgts = calcula_fgts(salarioBruto); // Pago pelo empregador
  let salarioLiquido = salarioBruto - inss - 100;

  document.getElementById("bruto").innerHTML = `R$ ${salarioBruto.toFixed(2)}`;
  document.getElementById("inss").innerHTML = `R$ ${inss.toFixed(2)}`;
  document.getElementById("fgts").innerHTML = `R$ ${fgts.toFixed(2)}`;
  document.getElementById("planoDeSaude").innerHTML = `R$ 100.00`;
  document.getElementById("liquido").innerHTML = `R$ ${salarioLiquido.toFixed(2)}`;
}