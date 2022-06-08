/*
1) Faça uma função que:
a) Receba 4 (quatro) números
b) Calcule o quadrado para cada um
c) Somem todos e
d) Mostre o resultado
*/

let recebe = (n1,n2,n3,n4) =>{
    
    let resultado = n1**2 + n2**2 + n3**2 + n4**2

    return resultado
}

console.log(recebe(2,2,2,2))

/*
2) Construa uma função para mostrar o pagamento de comissão de vendedores de peças, levando-se em 
consideração que sua comissão será de 5% do total da venda e que você tem os seguintes dados:
a) Identificação do vendedor
b) Código da peça
c) Preço unitário da peça
d) Quantidade vendida
*/

const comissaoVendedores = (precoPeca, quantVendida) => {

    let idVendedor = 1010
    let codPeca = 550
    let venda = precoPeca *  quantVendida
    let comissao = (venda * 0.05)

    console.log(idVendedor)
    console.log(codPeca)
    console.log("Comissão: " + comissao)

}
comissaoVendedores(10,2)

/*3) Sabendo que A=5, B=4 e C=3 e D=6, informe se as expressões abaixo são verdadeiras ou falsas.
a) (A > C) AND (C <= D)                     true   
b) (A + B) > 10 OR (A + B) = (C + D)        true         
c) (A >= C) AND (D >= C)                    true
d) (B > D) AND (A <= C)                     false
e) (D <= A) OR (C >= B)                     false
*/

/*4) Construa uma função que receba um número.
a) Se positivo mostrar a informação de que ele é positivo.
b) Se for negativo, mostrar a informação de que ele é negativo.
*/

const receberNumero = (num) =>
{
    if (num >= 0){
        return "Número positivo"
    }else{
        return "Número negativo"
    }
}

console.log(receberNumero(-8))