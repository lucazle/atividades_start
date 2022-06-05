/*Como está a aprendizagem dos conceitos de lógica de programação?  Vamos praticar?
1) Faça uma função que:
a) Receba código da peça
b) Receba valor da peça
c) Receba Quantidade de peças
d) Calcule o valor total da peça (Quantidade * Valor da peça)
e) Escreva no console o código da peça e seu valor total.
*/

function pecas(cod,valor,quant)
{
    let valorTotal = 0

    valorTotal = quant * valor

    console.log("O código do seu produto é " + cod + " e o valor total ficou: " + valorTotal + "R$.")

}

pecas(101,10,2)