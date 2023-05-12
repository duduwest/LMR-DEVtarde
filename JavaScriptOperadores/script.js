function boasVindas() {
    let nome;
    let sobrenome;

    nome = prompt("Digite o seu Nome", "Digite aqui");
    sobrenome = prompt("Digite o seu Sobreome", "Digite aqui");

    alert("Óla " + nome + " " + sobrenome);

}

function SomarNumeros() {
    let numero1, numero2, soma;



    numero1 = prompt("Digite um Nº")
    numero2 = prompt("Digite um outro Nº")

    soma = parseInt(numero1) + parseInt(numero2); // parseInt declara o numero como inteiro assim não concatena 

    alert(numero1 + " + " + numero2 + " = " + soma);



}

function SubtrairNumeros() {
    let numero1, numero2, subtrair;



    numero1 = prompt("Digite um Nº")
    numero2 = prompt("Digite um outro Nº")

    subtrair = parseInt(numero1) - parseInt(numero2); // parseInt declara o numero como inteiro assim não concatena 

    alert(numero1 + " - " + numero2 + " = " + subtrair);

}

function SubtrairNumeros() {
    let numero1, numero2, subtrair;



    numero1 = prompt("Digite um Nº")
    numero2 = prompt("Digite um outro Nº")

    subtrair = parseInt(numero1) - parseInt(numero2); // parseInt declara o numero como inteiro assim não concatena 

    alert(numero1 + " - " + numero2 + " = " + subtrair);

}

function MultiplicarNumeros() {
    let numero1, numero2, multiplicar;



    numero1 = prompt("Digite um Nº")
    numero2 = prompt("Digite um outro Nº")

    multiplicar = parseInt(numero1) * parseInt(numero2); // parseInt declara o numero como inteiro assim não concatena 

    alert(numero1 + " * " + numero2 + " = " + multiplicar);

}

function DividirNumeros() {
    let numero1, dividir; 
    let numero2=0;



    numero1 = prompt("Digite um Nº")  
        
        numero2 = prompt("Digite outro Nº")
        
    }
    

    if (numero2 != 0) {
        dividir = parseInt(numero1) / parseInt(numero2);

        alert(numero1 + " / " + numero2 + " = " + dividir);

    } else {
        alert("nao é possivel fazer a operação DIFERENTE DE ZERO 0") 

        
    }  


    // parseInt declara o numero como inteiro assim não concatena 





function ExpoenteNumeros() {
    let numero1, numero2, expoente;



    numero1 = prompt("Digite um Nº")
    numero2 = prompt("Digite um outro Nº")

    expoente = parseInt(numero1) ** parseInt(numero2); // parseInt declara o numero como inteiro assim não concatena 

    alert(numero1 + " ^ " + numero2 + " = " + expoente);

}