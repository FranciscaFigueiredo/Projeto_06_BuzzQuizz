
let titulo;
let URLimagemPrincipal;
let quantidadePerguntas;
let quantidadeNiveis;
let quizz = {};

const tela2 = document.querySelector(".tela2");
const tela1 = document.querySelector(".create-quizz");
const tela3 = document.querySelector(".tela3");

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
    console.log(titulo.length);
    if (titulo === '' || URLimagemPrincipal === '' || quantidadePerguntas === '' || quantidadeNiveis === ''){
        alert("Impossível continuar, campo vazio");
    }
    else if(quantidadePerguntas < 3 || isNaN(quantidadePerguntas)){
        alert("Quantidade de perguntas ou níveis invalida");
    } 
    else if((titulo.length < 20 || titulo.length > 65) || !URLimagemPrincipal.includes("https:") ){
        alert("Título ou URL invalida");
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

    let URLS = [urlCorretaP1,urlCorretaP2,urlCorretaP3,incorretaP1_1URL,incorretaP2_1URL,incorretaP3_1URL];

    let cont = 0;
    if(textoP1 === '' || textoP2 === '' || textoP3 === '' || corretaP1 === '' || corretaP2 === '' ||corretaP3 === ''){
        alert("Impossível continuar, campo vazio");
        return;
    }
    for(let i =0 ;i < URLS.length;i++){
       if( !URLS[i].includes("https:")){
           cont++;
       } 
    }
    if(cont > 0){
        alert(`${cont} URLS inválidas`)
        return;
    }

    if (textoP1.length < 20 || textoP2.length < 20  || textoP3.length < 20 ){
        alert("Texto da pergunta deve ter no mínimo 20 caracteres");
        return;
    }
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
   
}

function abrirLVL(lvl){
    const div = lvl.parentNode;   
    const pai = div.parentNode; 
    const nivel = pai.querySelector(".level");
    nivel.classList.toggle("hide");
}


function finalizarQuizz(){

    let tituloLevel1 = document.querySelector(".lvlTitle1").value;
    let acerto1 = document.querySelector(".%acerto1").value;
    let url1 = document.querySelector("URLlvl1").value;
    let desc1 = document.querySelector(".descLVL1").value;
    let tituloLevel2 = document.querySelector(".lvlTitle1").value;
    let acerto2 = document.querySelector(".%acerto1").value;
    let url2 = document.querySelector("URLlvl1").value;
    let desc2 = document.querySelector(".descLVL1").value;
    // let tituloLevel3 = document.querySelector(".lvlTitle1").value;
    // let acerto3 = document.querySelector(".%acerto1").value;
    // let url3 = document.querySelector("URLlvl1").value;
    // let desc3 = document.querySelector(".descLVL1").value;

    if(tituloLevel1.length < 10 || tituloLevel2.length < 10){
        alert("Titulo deve ser maior que 10 caracteres");
        return;
    }
    if ((Number(acerto1) < 0 || Number(acerto1) > 100) || (Number(acerto2) < 0 || Number(acerto3) > 100)){
        alert("Porcentagem invalida");
        return;
    }


}