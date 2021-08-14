
let titulo;
let URLimagemPrincipal;
let quantidadePerguntas;
let quantidadeNiveis;
let quizz = {};

const tela2 = document.querySelector(".tela2");
const tela1 = document.querySelector(".create-quizz");

function paginaCriacaoQuizz(quizz) {

    for (let i = 1; i < quantidadePerguntas; i++) {
        console.log(quantidadePerguntas, quantidadeNiveis);
        tela2.innerHTML += `<div class="input-create">
                                <div class="titulo-pergunta">
                                    <h3 style="margin: 0;">Pergunta ${i+1}</h3>
                                    <img src="./assets/Vector (1).png" onclick="abrirPergunta(this);">
                                </div>
                                <div class="question hide">
                                    <input type="text" placeholder="Texto da pergunta" class="textP2">
                                    <input type="text" placeholder="Cor de fundo da pergunta" class="colorP2">
                                    <h3>Resposta correta</h3>
                                    <input type="text" placeholder="Resposta correta" class="correctP2">
                                    <input type="text" placeholder="URL da imagem" class="correctURL-P2">
                                    <h3>Respostas incorretas</h3>
                                    <div class="incorreta">
                                        <input type="text" placeholder="Resposta incorreta 1" class="incorrectP2-1">
                                        <input type="text" placeholder="URL da imagem 1" class="incorrectP2-1URL">
                                    </div>
                                    <div class="incorreta">
                                        <input type="text" placeholder="Resposta incorreta 2" class="incorrectP2-2">
                                        <input type="text" placeholder="URL da imagem 2" class="incorrectP2-2URL">
                                    </div>
                                    <div class="incorreta">
                                        <input type="text" placeholder="Resposta incorreta 3" class="incorrectP2-3">
                                        <input type="text" placeholder="URL da imagem 3" class="incorrectP2-3URL">
                                    </div>
                                </div>
                            </div>`;
    }
    tela2.innerHTML += `<button onclick="criarPerguntas();">Prosseguir para criar niveis</button>`
}















function criarQuizz (){
    const section = document.querySelector(".fazer-quiz");
    const todos = document.querySelector(".todos");
    todos.classList.add("hide");
    section.classList.remove("hide");
}


function start(){
    titulo = document.querySelector(".title").value;
    URLimagemPrincipal= document.querySelector(".urlPrin").value;
    quantidadePerguntas = Number(document.querySelector(".qtdQ").value);
    quantidadeNiveis = Number(document.querySelector(".qtdN").value);
    console.log(quantidadePerguntas, quantidadeNiveis);
    if (titulo === '' || URLimagemPrincipal === '' || quantidadePerguntas === '' || quantidadeNiveis === ''){
        alert("Impossível continuar, campo vazio");
    }
    else if(quantidadePerguntas < 3 || isNaN(quantidadePerguntas)){
        alert("Quantidade de perguntas ou níveis invalida")
    } 
    else {
        tela1.classList.add("hide");
        tela2.classList.remove("hide");
    }
    // Falta verificar se foi digitado numeros 
    paginaCriacaoQuizz();
}


function abrirPergunta(pergunta){
    const div = pergunta.parentNode;   
    const pai = div.parentNode; 
    const question = pai.querySelector(".question");
    question.classList.toggle("hide");
}



function criarPerguntas(){
    // Pegando valores das perguntas(apenas 1 resposta incorreta)//
    let textoP1 = document.querySelector(".textP1").value;
    let corfundoP1 = document.querySelector(".colorP1") .value;
    let corretaP1 = document.querySelector(".correctP1").value;
    let urlCorretaP1 = document.querySelector(".correctURL-P1").value;
    let incorretaP1_1 = document.querySelector(".incorrectP1-1").value;
    let incorretaP1_1URL = document.querySelector(".incorrectP1-1URL").value;
    
    
    
    let textoP2 = document.querySelector(".textP2").value;
    let corfundoP2 = document.querySelector(".colorP2") .value;
    let corretaP2 = document.querySelector(".correctP2").value;
    let urlCorretaP2 = document.querySelector(".correctURL-P2").value;
    let incorretaP2_1 = document.querySelector(".incorrectP2-1").value;
    let incorretaP2_1URL = document.querySelector(".incorrectP2-1URL").value;
    
    
    
    let textoP3 = document.querySelector(".textP3").value;
    let corfundoP3 = document.querySelector(".colorP3") .value;
    let corretaP3 = document.querySelector(".correctP3").value;
    let urlCorretaP3 = document.querySelector(".correctURL-P3").value;
    let incorretaP3_1 = document.querySelector(".incorrectP3-1").value;
    let incorretaP3_1URL = document.querySelector(".incorrectP3-1URL").value;

    quizz = {
        title: titulo,
        image: URLimagemPrincipal,
        questions: [
            {
                title: textoP1,
                color: corfundoP1,
                answers: [
                    {
                        text: corretaP1,
                        image: urlCorretaP1,
                        isCorrectAnswer: true
                    },
                    {
                        text: incorretaP1_1,
                        image: incorretaP1_1URL,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: textoP2,
                color: corfundoP2,
                answers: [
                    {
                        text: corretaP2,
                        image: urlCorretaP2,
                        isCorrectAnswer: true
                    },
                    {
                        text: incorretaP2_1,
                        image: incorretaP2_1URL,
                        isCorrectAnswer: false
                    }
                ]
            },
            {
                title: textoP3,
                color: corfundoP3,
                answers: [
                    {
                        text:corretaP3,
                        image: urlCorretaP3,
                        isCorrectAnswer: true
                    },
                    {
                        text: incorretaP3_1,
                        image: incorretaP3_1URL,
                        isCorrectAnswer: false
                    }
                ]
            }
        ],
        levels: [
            {
                title: "Título do nível 1",
                image: "https://http.cat/411.jpg",
                text: "Descrição do nível 1",
                minValue: 0
            },
            {
                title: "Título do nível 2",
                image: "https://http.cat/412.jpg",
                text: "Descrição do nível 2",
                minValue: 50
            }
        ]
    }
    
console.log(quizz);
}