
/* Exercício 1. Laços+laços, e laços+condições.

Vamos criar um código que cria e recebe um array com os últimos 4 resultados da Mega-sena. Portanto, precisaremos de um array de arrays. 
Depois, devemos verificar se o número de itens do array que contém os jogos contém exatamente 4 resultados. 
Caso seja diferente, imprima que é necessário alterar o número de itens do array. 

Agora, devemos imprimir cada um dos jogos no seguinte formato:

- Sorteio 1: num1, num2, num3, num4, num5, num6
- Sorteio 2: num1, num2, num3, num4, num5, num6
- Sorteio 3: num1, num2, num3, num4, num5, num6
- Sorteio 4: num1, num2, num3, num4, num5, num6

Obs. Existem duas possibilidades de escrevermos arrays com arrays dentro:

POSSIBILIDADE 1  - Colocar meus arrays dentro de variáveis, depois criar um array que receba estas variáveis.

const resultado1 = [1, 2, 3, 4, 5, 6]
const resultado2 = [11, 22, 33, 44, 55, 66]
const resultado3 = [10, 20, 30, 40, 50, 60]
const resultado4 = [9, 19, 29, 39, 49, 59]

const megaSenaExemplo = [
  resultado1,
  resultado2,
  resultado3,
  resultado4,
]

POSSIBILIDADE 2 - Colocar meus arrays diretamente dentro de outro array, que é o que vamos usar neste exercício*/

//As duas possibilidades têm o mesmo conteúdo e trazem o mesmo resultado, são apenas duas formas diferentes de fazer.

// Como eu tenho vários arrays dentro de um array, eu preciso de um for que vai percorrer o array principal, e um ou vários for que vai percorrer cada array que está dentro do array principal. 

//Se o tamanho do meu array for igual a 4, vou rodar o código, senão vou imprimir a mensagem abaixo pro usuário. Estamos começando o código com essa verificação.


//exercício 1 - com o for normal dentro de outro for, sem for...in e for...of.

/* const megaSena = [ // início array pai
  [1, 2, 3, 4, 5, 6], // array filho
  [11, 22, 33, 44, 55, 66], // array filho
  [10, 20, 30, 40, 50, 60], // array filho
  [9, 19, 29, 39, 49, 59], // array filho
] // fim array pai

if (megaSena.length === 4) {
  for(let i = 0; i < megaSena.length; i++) {
    // percorre o array pai
    let sorteio = `Sorteio ${i + 1}: `
    for(let j = 0; j < megaSena[i].length; j++) {
    // percorre o array filho
      //sorteio = sorteio + `${megaSena[i][j]}` (também poderia escrever dessa forma!)
      sorteio += `${megaSena[i][j]} `
   }
   console.log(sorteio);
  }
} else {
  console.log('É necessário alterar o número de itens do array');
} */

//------------------------------------------------------------

/* Exercício 2. for...in 
Altere o laço externo do programa anterior para que ele seja um for... in

Exercício 3. for...of
Altere o laço interno do programa anterior para que ele seja um for... of */

//exercício 2 e 3 - alterando laço externo (primeiro for) para for...in e laço interno (segundo for) para for...of

/* const megaSena = [ // início array pai
  [1, 2, 3, 4, 5, 6], // array filho
  [11, 22, 33, 44, 55, 66], // array filho
  [10, 20, 30, 40, 50, 60], // array filho
  [9, 19, 29, 39, 49, 59], // array filho
] // fim array pai

if (megaSena.length === 4) {
  for (let i in megaSena) { // Esse i do for in é chamado de key, e é uma string. Para rodá-lo precisamos alterar o i do sorteio abaixo para Number, senão ele concatenaria o primeiro índice do array pai, que também é o primeiro array filho, que é 0, com o + 1 que foi adicionado no sorteio abaixo, ficando 01. E não queremos que ele comece do zero e nem queremos que ele mostre 01, mas sim que comece do 1, por isso a alteração.
    let sorteio = `Sorteio ${Number(i) + 1}: `
    for (let j of megaSena[i]) // Sempre que eu tiver um for dentro de outro for, o for interno (j) sempre rodará no índice do for externo (i).
   {
      //sorteio = sorteio + `${j} ` (também poderia escrever dessa forma!)
      sorteio += `${j} ` //o j do for of já me traz o valor. Como já estou dentro do array pai (megaSena[i]) pegando o valor que está dentro dele, basta adicionar o j no sorteio, porque eu já estou dentro do [i] e o meu j é o número dentro do [i] que eu quero pegar.
   }
   console.log(sorteio);
  }
} else {
  console.log('É necessário alterar o número de itens do array');
} */

// O for...in me traz a quantidade de arrays filhos que eu tenho dentro do array pai; o for...of me traz os valores que tenho dentro de cada array filho

//--------------------------------------------------------------------------------------------

// Pra guardar na cabeça 
/* 1. Use o array de filmes que está no template.
  a. Crie um laço for para exibir o título, o ano e o diretor dos filmes como uma String.
  b. Crie um laço for dentro do primeiro, para concatenar o elenco numa String.

  A saída deve se parecer com:
  "O Homem que copiava, de 2003, dirigido por Jorge Furtado"
  "Tem no elenco: Lázaro Ramos, Leandra Leal, Pedro Cardoso"

  2. Altere o laço externo do programa anterior para que ele seja um for...in.

  3. Altere o laço interno do programa anterior para que ele seja um for...of. */

const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻
  // definição; condição; incremento;  
/* for (let i = 0; i < filmes.length; i++) {
  console.log(`Filme ${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}`);
    for (let j = 0; j < filmes[i].lenght; j++) {
      console.log(`Tem no elenco: ${filmes[i].elenco}`);
    }  */

    // Não consegui concluir o segundo for de cima, não consegui inserir o nome dos atores na parte do 'tem no elenco'.
    
    for (let i in filmes) {
      console.log(`Filme ${filmes[i].titulo}, de ${filmes[i.ano]}, dirigido por ${filmes[i].diretor}`);
        for (let j in filmes) {
          console.log(`Tem no elenco: ${filmes[i].elenco}` );
        }
    }

// Podemos tentar visualizar o i como linhas do array pai e o j como colunas do array filho