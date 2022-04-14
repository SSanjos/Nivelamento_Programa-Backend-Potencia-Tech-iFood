# Nivelamento_Programa-Back-end-Potencia-Tech-iFood
Alguns códigos em JavaScript realizados na fase de nivelamento

Descrição dos problemas e soluções:

(1)
Variáveis, if e loop

No fim de semana o elevador do nosso prédio quebrou, restringindo muito o fluxo de pessoas. Considerando isso, apenas os moradores dos apartamentos com número par poderão usar o elevador.

Escreva um código que nos informe quais moradores poderão utilizar o elevador com base na variável moradores. O número do apartamento é a sua posição no array. O nome do morador é o valor.

Imprima no console a seguinte frase: 'O morador <nome do morador> pode usar o elevador', substituindo <nome do morador> pelo nome do morador.
  
(2)
Dados de um usuário

Em uma academia estão cadastrando nome, idade e altura de vários usuários.

Um determinado treino exige os seguintes requisitos: Ter 18 anos ou mais e ter uma altura igual ou maior a 1,70.

Crie uma função chamada maiorAlto. Essa função irá receber um array como parâmetro. Este array terá o nome na primeira posição, a idade na segunda posição e a altura em centímetros na terceira posição. Ela também deve retornar verdadeiro (true) caso o aluno atenda os requisitos, ou falso (false) caso contrário.

(3)  
Academia
  
Uma academia precisa separar grupos de pessoas tendo como base as suas alturas. Temos um array alunos que contem a altura de cada aluno da academia.

Temos outros 3 arrays: grupoA, grupoB e grupoC. Eles devem ser preenchidos da seguinte forma: 

grupoA - Alunos com altura entre 150 a 159
grupoB - Alunos com altura entre 160 a 169
grupoC - Alunos com altura de 170 ou mais

Seu trabalho é pegar cada valor do array alunos e colocar o valor correspondente em seu respectivo grupo. Para esse exercício, você precisará usar loops, condicionais e funções de arrays.
  
(4)
Estacionamento

Um estacionamento deseja automatizar a cobrança de mensalistas. Para isso decidiu simplificar a forma de calcular o valor devido pelo seu cliente. A quantia a ser paga pelos seus usuários depende do número de entradas que o veículo realiza no estacionamento. A cada entrada, a placa do veículo é registrada. Ao final do mês, conta-se o número de entradas que o veículo realizou e faz-se o seguinte cálculo:

Se o motorista realizou até 20 entradas, ele deve pagar R$ 10,00 por entrada realizada.

Da vigésima primeira entrada em diante, cada entrada custa R$ 5,00 ao cliente.

Agora, você deve ajudar na automatização da cobrança escrevendo duas funções.

A primeira função se chama calcularNumeroDeEntradas(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve retornar o número de entradas que esse carro realizou no estacionamento. Em outras palavras, o número de vezes que a placa passada como parâmetro aparece no array placas.

A segunda função se chama calcularValorDevido(placa). Ela deve receber um único parâmetro que representa a placa de um carro. A função deve calcular o valor que o proprietário do carro tem que pagar segundo a política de preços estabelecida. Naturalmente, será necessário utilizar a primeira função dentro da segunda. 
  
(5)
Cinema

Em um site sobre cinema, os visitantes cadastrados podem dar notas de 0 a 5 para um filme que ele tenha assistido. Cada filme tem um grande array de notas atribuídas pelos visitantes. Contudo, além de dar notas para os filmes, os visitantes querem ver o que as outras pessoas acharam do filme! É aí que você entra com seu código:

Escreva uma função calculaGostos(notas)

Essa função deve ser escrita para receber somente um parâmetro: um array de notas. Ela deve retornar também um array com três elementos:

O primeiro, com a quantidade de notas iguais a 0 ou 1. Seriam os que não gostaram do filme

O segundo, com a quantidade de notas iguais a 2 ou 3. Seriam os que acharam o filme mediano

O terceiro, com a quantidade de notas iguais a 4 ou 5. Seriam os que gostaram do filme.  
