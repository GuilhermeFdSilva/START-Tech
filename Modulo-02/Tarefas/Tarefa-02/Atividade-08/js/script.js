function real_regular(string) {
  const REGULAR = /([^\d\.])+/gim;
  let novaString = string.replace(REGULAR, "");
  return novaString;
}

function porcentagem_ir(valor) {
  if (valor <= 900) {
    return "Isento";
  } else if (valor <= 1500) {
    return 0.05;
  } else if (valor <= 2500) {
    return 0.1;
  } else {
    return 0.2;
  }
}

function retorna_detalhes() {
  let valorHora = parseFloat(real_regular(document.getElementById("valorHora").value));
  let horasTrab = parseFloat(real_regular(document.getElementById("horasTrabalhadas").value));
  let salarioBruto = valorHora * horasTrab;
  let porsentagemIr = porcentagem_ir(salarioBruto);
  let ir = salarioBruto * porsentagemIr;
  let inss = salarioBruto * 0.1;
  let fgts = salarioBruto * 0.11;

  let totalDescontos;
  if (isNaN(ir)) {
    totalDescontos = inss;
  } else {
    totalDescontos = ir + inss;
  }

  let salarioLiq = salarioBruto - totalDescontos;

  document.getElementById("salarioBruto").value = `R$ ${salarioBruto.toFixed(2)}`;

  if (isNaN(porsentagemIr)) {
    document.getElementById("impostoRenda").value = porsentagemIr;
  } else {
    document.getElementById("impostoRenda").value = `${(porsentagemIr * 100).toFixed()} % = R$ ${ir.toFixed(2)}`;
  }

  document.getElementById("inss").value = `10 % = R$ ${inss.toFixed(2)}`;
  document.getElementById("fgts").value = `10 % = R$ ${fgts.toFixed(2)}`;
  document.getElementById("totalDescontos").value = `R$ ${totalDescontos.toFixed(2)}`;
  document.getElementById("salarioLiquido").value = `R$ ${salarioLiq.toFixed(2)}`;
}