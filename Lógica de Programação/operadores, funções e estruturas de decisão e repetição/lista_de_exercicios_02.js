/*1) Faça uma função que recebe a idade de uma pessoa em anos, 
meses e dias e retorna essa idade expressa em dias.


let idadeEmDias = (ano,meses,dias)  => 
{
    
    let recerber = 

}
*/

//-------------------------------------------------------------------

/*2)      Faça uma função que conte de 1 a 100 e a cada múltiplo de 
7 escreva no console a mensagem: “Múltiplo de 7”.
*/

let multiploSete = () => 
{
    for(let i = 1; i <= 100; i++) {
        console.log(i)
        if (i % 7 == 0){
            console.log( i + " este número é Múltiplo de 7")
        }
    }

}

multiploSete()

//-------------------------------------------------------------------

//3) Faça uma função que repita a palavra  arara 230 vezes.

let arara = () => 
{
    for(let i = 1; i <= 230; i++) {

        console.log(i + " arara")
    }
}

arara()