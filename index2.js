let placar = valores(19, 10)

function valores(vitorias, derrotas){
    let calculo = vitorias - derrotas
    return calculo
}

if (placar < 10){
    console.log(`O Herói tem saldo de ${placar} e está no nível Ferro`)
} else if (placar > 11 && placar < 20){
    console.log(`O Herói tem saldo de ${placar} e está no nível Bronze`)
} else if (placar > 21 && placar < 50){
    console.log(`O Herói tem saldo de ${placar} e está no nível Prata`)
} else if (placar > 51 && placar < 80){
    console.log(`O Herói tem saldo de ${placar} e está no nível Ouro`)
} else if (placar > 81 && placar < 90){
    console.log(`O Herói tem saldo de ${placar} e está no nível Diamante`)
} else if (placar > 91 && placar < 100){
    console.log(`O Herói tem saldo de ${placar} e está no nível Lendário`)
} else if (placar >= 101){
    console.log(`O Herói tem saldo de ${placar} e está no nível Imortal`)
}