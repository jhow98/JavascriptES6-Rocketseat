//REST
//Pega o resto dos parâmetos

const usuario = {
    nome: 'Diego',
    idade: 23,
    empresa: 'Rocketseat'
}

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);


const arr = [1, 2, 3, 4];

const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

//SPREAD
//Propaga para outra estrutura de dados
const arr1 = [1, 2, 3, 4];

const arr2 = [2, 3, 4, 5];

const arr3 = [ ...arr1, ...arr2];
console.log(arr3);


const usuario1 = {
    nome: 'diego',
    idade: 23,
    empresa: 'Rocketseat'
};

const usuario2 = { ...usuario1, nome: 'Gabriel'};

console.log(usuario2);
