/*
1) O cardápio de uma lanchonete é dado abaixo.
 Faça uma função que leia a quantidade de cada item que você consumiu e calcule e retorne a conta final.
 */

let cardapio = () => 
{
    let hamb = 3.00
    let cheese = 2.50
    let fritas = 2.50
    let refri = 1.00
    let milk = 3.00

    let soma = (hamb + cheese + fritas + refri + milk)

    return soma
}

console.log(cardapio() + " reais.")

//2) Faça uma função que retorne a frase:  Olá, que você tenha um dia muito bom!

let frase = () => 
{
    let bomDia = "Olá, que você tenha um dia muito bom!"

    return bomDia
}

console.log(frase())

/*
3) Faça uma função que receba uma quantidade de chuva dada em polegadas
 e imprima o equivalente em milímetros (25,4 mm = 1 polegada).
 */

let chuvaMl = (quantPolegada) =>
{
    let quantMl = quantPolegada * 25.4
    
    return quantMl;


}

console.log(chuvaMl(2))