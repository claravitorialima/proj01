let peso = Number(prompt("Insira seu peso, por favor:"));
let altura = Number(prompt("Agora, adicione sua altura por favor"));
let imc = peso / (altura*altura);

if (imc < 18.5){
    alert("Você está abaixo do peso");
}
if  (imc >= 18.5 && imc <= 24.9){
    alert("Seu peso está normal");
}
if (imc >= 25 && imc <= 29.9){
    alert("Sobrepeso");
}
if (imc >= 30){
    alert("Obesidade");
}