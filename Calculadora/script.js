function calcular() {
    let valor1 = parseFloat(document.getElementById("valor1").value);
    let valor2 = parseFloat(document.getElementById("valor2").value);
    let operacao = document.getElementById("Operacao").value;
  
    let resultado;
  
    if (isNaN(valor1) || isNaN(valor2)) {
      resultado = "Erro: insira números válidos.";
    } else {
      switch (operacao) {
        case "+":
          resultado = valor1 + valor2;
          break;
        case "-":
          resultado = valor1 - valor2;
          break;
        case "*":
          resultado = valor1 * valor2;
          break;
        case "/":
          resultado = valor2 !== 0 ? valor1 / valor2 : "Erro: divisão por zero.";
          break;
        default:
          resultado = "Operação inválida.";
      }
    }
  
    document.getElementById("saida").textContent = resultado;
  }
  
  document.getElementById("Calcular").addEventListener("click", calcular);