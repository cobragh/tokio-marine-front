/*
    Tipos de declarações:
    var
    let 
    Diferença: var não contem escopo de bloco/let contém escopo de bloco.
    
    Tipos de Dados principais:
    String - Tudo que está entre aspas duplas("") ou simples(''), age como texto.
    Numero - É um tipo de dado que permite você trabalhar com matemática e valores numéricos, apenas números.
    Array ([]) = Recebe todos os tipos de dados 
    Booleano ou boolean = True ou False 

    Estruras condicionais:
    if (estrutura de condição inicial)
    else (SE NÃO)
    else if (MAS SE) 

    Estrutura de repetição:
    for (Crie um looping por contagem)
    while(cria um looping enquanto a condição for verdadeira)

    Expressões e operadores principais:
    = : Atribuição
    == : comparação
    != : diferente
    === : estritamente igual
    > : maior
    < : menor
    <= : menor ou igual
    >= : maior ou igual
*/

// Operações Matemáticas Simples:

/* Essa função multiplica o valor das variáveis locais inseridas dentro dos parentêses(definindo o valor delas),
e exibe a operação e o resultado no log do console. ${} */

function multiplicarVariavel(primeiraVariavel, segundaVariavel) {
    resultado = primeiraVariavel * segundaVariavel;
    console.log(`${primeiraVariavel}  * ${segundaVariavel} = ${resultado}`);
}

multiplicarVariavel(1, 1);

/* Essa função soma o valor das variáveis locais inseridas dentro dos parentêses(definindo o valor delas),
e exibe a operação e o resultado no log do console.  */

function somarVariavel(primeiraVariavel, segundaVariavel) {
    resultado = primeiraVariavel + segundaVariavel;
    console.log(`${primeiraVariavel}  + ${segundaVariavel} = ${resultado}`);
}

somarVariavel(1, 1);

/* Essa função faz o cálculo da porcentagem, através da definição das variáveis locais, que definem
o valor que deverá ser consultado e a porcentagem que deseja consultar e exibe o log do console.   */

function porcentagemVariavel(variavel, porcentagem) {
    resultado = variavel * (porcentagem * 0.01);
    console.log(`${porcentagem} % de ${variavel} é: ${resultado}`);
}

porcentagemVariavel(200, 7.5);

// Laços de Repetição:

/* Essa função cria um laço de repetição enquanto a condição dentro dos parentêses não for cumprida,
a condição dentro dos parentêses se organiza assim: (declaração da variável; condição; incremento)
O operador ++ executa a função de adicionar um valor na variável, ou seja, num laço de repetição
ao repetir o incremento ele retornará a variavél inicial + 1, até a condição dentro do parentêses
ser cumprida. No caso dessa função, ela inicialmente cria um laço de repetição para limitar a 
multiplicação da tabuada somente até um valor menor ou igual a 10, dentro dela existe outro laço 
de repetição, servindo para limitar o número de vezes que a tabuada será realizada em 10 e exibir 
a operação realizada no log do console. */

function tabuadaAteDez() {
    for (i = 0; i <= 10; i++) {
        for (j = 1; j <= 10; j++) {
            resultado = j * i;
            console.log(`${j}  *  ${i}  =  ${resultado}`);
        }
    }
}

tabuadaAteDez();

/* Essa função cria um laço de repetição enquanto a condição dentro dos parentêses não for cumprida,
a condição dentro dos parentêses se organiza assim: (condição).
Dentro do laço de repetição ele executa um incremento no valor da variável e exibe o valor da variável,
até atingir um valor menor ou igual a 10. */

function contagemAteDez() {
    var i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}

contagemAteDez();

// Condição:

/* Essa função cria uma estrutura condicional, se o valor da variavél for igual a Natan exibirá 
"Nome correto."" no log do console, senão exibirá "Nome incorreto." */

function verificarNome(nome) {
    if(nome == "Natan") {
        console.log("Nome correto.")
    } else {
        console.log("Nome incorreto.")
    }
}

verificarNome("Natan");

/* Essa função cria uma estrutura condicional, se o valor da variavél for diferente de Natan e de Renan
exibirá "Nome correto."" no log do console, mas se for igual a Renan exibirá "Renan é gay.", senão
exibirá "Nome incorreto." */

function verificarNomes(nome) {
    if(nome != "Natan" && nome != "Renan") {
        console.log("Nome correto.")
    }
    else if(nome == "Renan") {
        console.log("Renan é gay.")
    } else {
        console.log("Nome incorreto.")
    }
}

verificarNomes("Renan");