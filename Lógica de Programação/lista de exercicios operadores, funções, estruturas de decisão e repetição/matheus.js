/*
1 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
e faça uma condicional com if para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
Faça para tipo `A+`, `A-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.
Exemplo se receber A+: "A+ doa para A+ e B+".
*/

/*
function tipoSanguineo (tipoSanguineo)
{ 
    if(tipoSanguineo == "A+"){
        console.log ("A+ doa para A+ e AB+")
    }
    else if(tipoSanguineo == "A-"){
        console.log ("A- doa para A+, A-, AB+ e AB-")
    }
    else{
        console.log("Esse tipo sanguíneo não está em nossa base.")
    }
    
}

tipoSanguineo("B-")
*/

// 2 - Crie uma função que recebe o argumento `tipoSanguineo` que recebe uma string
// e faça uma condicional com switch para retornar uma string falando para qual tipo sanguíneo o tipo recebido doa.
// Faça para tipo `B+`, `B-` e caso a função receba outro tipo sanguíneo, retornar que não está em nossa base.


function tipoSanguineo (tipoSanguineo)
{
    switch (tipoSanguineo) 
    {
    case "B+":
        console.log ("B+ doa para B+ e AB+");
        break;
    case "B-":
        console.log("B- doa para B+, B-, AB+ e AB-");
        break;
    default:
        console.log("Esse tipo sanguíneo não está em nossa base.")
    }
}

tipoSanguineo("C-")

// 3 - Crie uma laço de repetição com for que se inicia com 5 e incrementa de um em um até chegar em 15.

for(let i = 5; i <=15; i++){
    console.log(i)
}