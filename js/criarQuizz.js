
let titulo;
let URLimagemPrincipal;
let quantidadePerguntas;
let quantidadeNiveis;
let pergunta1 = false;
let pergunta2 = false;
const tela2 = document.querySelector(".tela2");
function criarQuizz (){
    const todos = document.querySelector(".todos");
    const criarQuizz = document.querySelector(".criar-quizz")
    todos.classList.add("hide");
    criarQuizz.classList.add("hide");
    tela1.classList.remove("hide");
}


function start(){
    titulo = document.querySelector(".title").value;
    URLimagemPrincipal= document.querySelector(".urlPrin").value;
    quantidadePerguntas = Number(document.querySelector(".qtdQ").value);
    quantidadeNiveis = Number(document.querySelector(".qtdN").value);
    console.log(typeof quantidadePerguntas, typeof quantidadeNiveis);
    if (titulo === '' || URLimagemPrincipal === '' || quantidadePerguntas === '' || quantidadeNiveis === ''){
        alert("Impossível continuar, campo vazio");
    }
    else if(quantidadePerguntas > 3 && quantidadePerguntas < 2){
        alert("Quantidade de perguntas ou níveis invalida")
    } 
    else {
        tela1.classList.add("hide");
        tela2.classList.remove("hide");
    }
    // Falta verificar se foi digitado numeros 

}


function abrirPergunta(pergunta){
    const div = pergunta.parentNode;   
    const pai = div.parentNode; 
    const question = pai.querySelector(".question");
    question.classList.toggle("hide");
}