let valor = Number(prompt("Insira o valor da sua compra, por favor:"));
let desconto;
let resultado;

if (valor >= 100){
    alert("Muito bom, você ganhou um desconto de 10% na sua compra!");
    desconto = (valor*10)/100; 
    alert("Seu desconto foi de: R$" + desconto.toFixed(2));
    resultado = valor - desconto;
    alert("O resultado da sua compra final, com adicional de desconto é : R$" + resultado.toFixed(2));
} 
else {
    alert ("Que pena, não foi disponibilizado um desconto, valor: R$" + valor.toFixed(2));
}