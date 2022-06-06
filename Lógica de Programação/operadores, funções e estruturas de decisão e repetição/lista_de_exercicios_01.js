/*1) Faça uma função que:
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

//-------------------------------------------------------------------

/*2) Faça uma função para calcular o estoque médio de uma peça,
sendo que ESTOQUEMÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2
*/

function estoqueMedio (quantmin,quantmax)
{
    let media = (quantmin + quantmax)/2
    console.log(media)
}
estoqueMedio(8,5)

//-------------------------------------------------------------------

/*3) Faça uma função que:
a) Receba a cotação do dólar
b) Receba um valor em dólares
c) Converta esse valor para Real
d) Mostre o resultado
*/

function conversaoDolar (cotacao,valorDolar)
{
    let conversao = cotacao * valorDolar

    console.log("O valor convertido para real é: " + conversao)
}
conversaoDolar (4.80, 5)

//-------------------------------------------------------------------

/*4) Sabendo que A=3, B=7 e C=4, informe se as expressões abaixo são verdadeiras ou falsas.
a) (A + C) > B  false         
b) B >= (A + 2) true       
c) C = (B –A)   true     
d) (B + A) <= C false        
e) (C + A) > B  false
*/