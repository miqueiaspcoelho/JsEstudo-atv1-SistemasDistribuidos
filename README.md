# Miquéias Pereira Coelho - 06-05-2022.
#observações: melhorar algumas funcionalidades, fazer um front e resolver o problema de quando entram
#dois usuários ou mais as compras deles se misturam.

# PASSOS INICIAIS
Passo 1 - npm init (Coloca-se as informações que se pedem)
Passo 2 _ configurar um start no JSON JavaScript Object Notation
# COMENTÁRIOS
Não é obrigatório colocar ponto e vírgula no final, mas é uma boa prática
Comentários de barra dupla são comentários de linha.
Comentários de bloco são /* */
Tipo mais especial
/**
*
*/
Dessa forma o próprio editor de texto vai colocando os * de maneira automatizada.
# INFO
JS é uma linguagem que não é tipada, como muitos desenvolvedores tiveram dificuldade de se adaptar foi criado o TypeScript.
Em JS tudo é visto como objeto, exceto os tipos básicos de dados. Com 'console.log()' podemos estar imprimindo no terminal algo que queiramos.
As linguagens que são baseadas em C possuem um corpo de instruções muito parecido.
O JS compatibiliza os tipos de variáveis para fazer as comparações.
Para o JS o null representa o objeto vazio.
# VARIÁVEIS
Temos três palavras reservadas para a declaração de variáveis
- const - declarar valores constantes (Não é possível sofrer alteração, não podemos fazer uma atribuição após a definir)
- var - podemos fazer alterações no decorrer do código, a palavra var pode ser até mesmo omitida na declaração, dessa forma o ambiente entende que tudo que está omitida é var, é uma variável de declaração genérica.
# VETORES
- vetores - podemos inicializar um var e definir como um array: ex.: 'var v = Array();', dessa forma já podemos ir atribuindo valores as posições, como as variáveis são dinamicamente tipadas, podemos redefinir uma variável.
Outra forma de criar vetores é:
'var v = []' já está definido o vetor
# OBJETOS
Podemos definir agora uma variável que tem diferentes tipos de dados.
O abre e fecha chaves inicializa a variável como objeto, se imprimirmos, ele utiliza o formato JSON
ex.:
'
var carro = {};
carro['cor']="vermelho";
carro['fabricante']="Nissan";
carro['ano']=1992;
'
- outra forma
'
var carro ={
  cor: "vermelho",
  fabricante: "Nissan",
  ano: 1992,
};
'
# INTRUÇÕES
Ex.:
'
var x = 30;
if (x > 5){
  console.log("maior");
} else if (x < 5){
  console.log("menor");
} else{
  console.log("iguais")
}
'
 - Operadores relacionais
 maior '>'
 menor '<'
 menor igual '<='
 maior igual '>='
 igual igual '==' (comparação de igualdade)
 exclamação igual '!=' (Comparação de diferença)
 igual igual igual '===' (comparação, porém, considerando o tipo de variável)
 exclamação igual igual '!==' (comparação levando em conta o tipo e ver se são diferentes)
- Operadores lógicos
&& - representa E
|| - representa OU
! - representa a negação NOT
switch - é um if com várias condições case
Ex.:
'
switch (x){
  case 1:
    console.log("valor 1");
    break;
  case 5:
    console.log("valor 5");
    break;
  default:
    console.log("qualquer valor");
    break;
}
'
- Repetição
while  - condição vem no começo e é testada no começo.
Ex.:
'
while (x >=0){
  console.log(x);
  x--;
};
'
do while - condição testada no final, ou seja, testada ao menos uma vez.

Ex.:
'
do {
  console.log(x);
  x--;
}while(x >=0);
'
for
Ex.:
for (i = 0; i < 10; i++){
  console.log(i);
}
# FUNÇÕES: também são vistas como objetos
Ex.:
'
/*Forma 1*/
function soma (a,b){
  return a+b;
}
x = soma(1,7);
console.log(x);
/*Forma 2*/
const subtracao = function (a,b){
  return a-b;
}
y = subtracao(1,7):
console.log(y)
/*Forma 3 arrow function (função seta)*/
const multiplicacao = (a,b) => {
  return a*b;
}
z = multiplicacao(3,4);
console.log(z);
'
# DIFERENÇA ENTRE LET E VAR
O comando de declaração var, serve pra declarar variáveis que ficam disponíveis globalmente e o escopo é uma função, o let é só dentro ali do bloco.
Var é para função.
Let é para bloco.
Dica usar sempre Let e Const para produção, pois, variáveis com var você não tem muito controle sobre ela.
