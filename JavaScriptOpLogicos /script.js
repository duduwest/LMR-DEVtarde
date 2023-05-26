function ParImpar() {
    let numero = document.getElementById("nDigitado").value;
    let div = numero % 2;
    if (div == 0) {
        alert("Esse Numero é par")
    } else {
        alert("Esse numero é impar")
    }

}

let Valor1 = parseInt(document.getElementById("nValor1").value);
let Valor2 = parseInt(document.getElementById("nValor2").value);
let operacao = document.getElementById("pOperacao").value;
let resultado;

function calculador() {
    switch (operacao) {
        case "+":
            resultado = Valor1 + Valor2;
            break;
        case "-":
            resultado = Valor1 - Valor2;
            break;
        case "*":
            resultado = Valor1 * Valor2;
            break;
        case "/":
            resultado = Valor1 / Valor2; 
            if (Valor2!=0) {
                    resultado = Valor1/Valor2;
                
                  
            } else { alert("Não pode Divisão por ZERO");
                
            }
            break; 

        default:
            break;
    }
}