pegarQuizzes();

function pegarQuizzes() {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes");
    promise.then(listarQuizzes);
}

function listarQuizzes(quizzes) {
    let listaQuizzes = document.querySelector(".todos .quizzes");
    listaQuizzes.innerHTML = "";
    listarQuizzPessoal();
    for (let i = 0; i < quizzes.data.length; i++) {
        listaQuizzes.innerHTML += `<div class="card" onclick="verQuizzes(${i});">
                                    <img src="${quizzes.data[i].image}">
                                    <div class="title">
                                        <span>${quizzes.data[i].title}</span>
                                    </div>
                                </div>`
    }
    
}


function listarQuizzPessoal() {
    const quizz_string = localStorage.getItem("quizz");
    const quizz = JSON.parse(quizz_string);
    console.log(quizz);
    const pessoais = document.querySelector(".pessoais");
    const quizzes = document.querySelector(".quizzes");
    const divCriar = document.querySelector(".criar-quizz");

    if (quizz === null) {
        return;
    }
    else{
        pessoais.classList.remove("hide");
        divCriar.classList.add("hide");
        for(let i = 0; i < quizz.length;i++){
            quizzes.innerHTML += `<div class="card">
                                    <img src="${quizz[i].image}">
                                    <div class="title">
                                        <span>${quizz[i].title}</span>
                                    </div>
                                </div>`
        }
    }
}




let titulo;
let URLimagemPrincipal;
let quantidadePerguntas;
let quantidadeNiveis;
let quizz = {};
let textoP1 ;
let urlCorretaP1 ;
let incorretaP1_1 ;
let incorretaP1_1URL;

let textoP2 ;
let corfundoP2;
let corretaP2 ;
let urlCorretaP2;
let incorretaP2_1;
let incorretaP2_1URL;

let textoP3 ;
let corfundoP3 ;
let corretaP3 ;
let urlCorretaP3 ;
let incorretaP3_1 ;
let incorretaP3_1URL;


const tela2 = document.querySelector(".tela2");
const tela1 = document.querySelector(".create-quizz");
const tela3 = document.querySelector(".tela3");

function paginaCriacaoQuizz(quizz) {
    console.log(quantidadePerguntas)

    for (let i = 1; i < quantidadePerguntas; i++) {
        tela2.innerHTML += `<div class="input-create">
                                <div class="titulo-pergunta">
                                    <h3 style="margin: 0;">Pergunta ${i+1}</h3>
                                    <img src="./assets/Vector (1).png" onclick="abrirPergunta(this);">
                                </div>
                                <div class="question hide">
                                    <input type="text" placeholder="Texto da pergunta" class="textP${i+1}">
                                    <input type="text" placeholder="Cor de fundo da pergunta" class="colorP${i+1}">
                                    <h3>Resposta correta</h3>
                                    <input type="text" placeholder="Resposta correta" class="correctP${i+1}">
                                    <input type="text" placeholder="URL da imagem" class="correctURL-P${i+1}">
                                    <h3>Respostas incorretas</h3>
                                    <div class="incorreta">
                                        <input type="text" placeholder="Resposta incorreta 1" class="incorrectP${i+1}-1">
                                        <input type="text" placeholder="URL da imagem 1" class="incorrectP${i+1}-1URL">
                                    </div>
                                    <div class="incorreta">
                                        <input type="text" placeholder="Resposta incorreta 2" class="incorrectP${i+1}-2">
                                        <input type="text" placeholder="URL da imagem 2" class="incorrectP${i+1}-2URL">
                                    </div>
                                    <div class="incorreta">
                                        <input type="text" placeholder="Resposta incorreta 3" class="incorrectP${i+1}-3">
                                        <input type="text" placeholder="URL da imagem 3" class="incorrectP${i+1}-3URL">
                                    </div>
                                </div>
                            </div>`;
    }
    tela2.innerHTML += `<button onclick="criarPerguntas();">Prosseguir para criar niveis</button>`
}



function start(){
    titulo = document.querySelector(".titulo-quizz").value;
    URLimagemPrincipal= document.querySelector(".urlPrin").value;
    quantidadePerguntas = Number(document.querySelector(".qtdQ").value);
    quantidadeNiveis = Number(document.querySelector(".qtdN").value);

    if (titulo === '' || URLimagemPrincipal === '' || quantidadePerguntas === '' || quantidadeNiveis === ''){
        alert("Impossível continuar, campo vazio");
    }
    else if(quantidadePerguntas < 3 || isNaN(quantidadePerguntas) || quantidadeNiveis < 2 || isNaN(quantidadeNiveis)){
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
     textoP1 = document.querySelector(".textP1").value;
     corfundoP1 = document.querySelector(".colorP1") .value;
     corretaP1 = document.querySelector(".correctP1").value;
     urlCorretaP1 = document.querySelector(".correctURL-P1").value;
     incorretaP1_1 = document.querySelector(".incorrectP1-1").value;
     incorretaP1_1URL = document.querySelector(".incorrectP1-1URL").value;
    
   
    
    textoP2 = document.querySelector(".textP2").value;
    corfundoP2 = document.querySelector(".colorP2") .value;
    corretaP2 = document.querySelector(".correctP2").value;
    urlCorretaP2 = document.querySelector(".correctURL-P2").value;
    incorretaP2_1 = document.querySelector(".incorrectP2-1").value;
    incorretaP2_1URL = document.querySelector(".incorrectP2-1URL").value;
    
    
    
    textoP3 = document.querySelector(".textP3").value;
    corfundoP3 = document.querySelector(".colorP3") .value;
    corretaP3 = document.querySelector(".correctP3").value;
    urlCorretaP3 = document.querySelector(".correctURL-P3").value;
    incorretaP3_1 = document.querySelector(".incorrectP3-1").value;
    incorretaP3_1URL = document.querySelector(".incorrectP3-1URL").value;

    let URLS = [urlCorretaP1,urlCorretaP2,urlCorretaP3,incorretaP1_1URL,incorretaP2_1URL,incorretaP3_1URL];

    let cont = 0;
    if(textoP1 === '' || textoP2 === '' || textoP3 === '' || corretaP1 === '' || corretaP2 === '' ||corretaP3 === ''){
        alert("Impossível continuar, campo vazio");
        return;
    }
    for(let i =0 ;i < URLS.length;i++) {
       if( !URLS[i].includes("https:")){
           cont++;
       } 
    }
    if(cont > 0){
        alert(`${cont} URLS inválidas`)
        return;
    }

    if(!corfundoP1.includes("#") || corfundoP1.length !== 7) {
        alert(`Cor Inválida`)
        return;
    }

    if (textoP1.length < 20 || textoP2.length < 20  || textoP3.length < 20 ) {
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
    console.log(quizz)
    tela2.classList.add("hide");
    tela3.classList.remove("hide");
   
}

function abrirLVL(lvl){
    const div = lvl.parentNode;   
    const pai = div.parentNode; 
    const nivel = pai.querySelector(".level");
    nivel.classList.toggle("hide");
}


function finalizarQuizz(){

    let tituloLevel1 = document.querySelector(".lvlTitle1").value;
    let acerto1 = document.querySelector(".acerto1").value;
    let url1 = document.querySelector(".URLlvl1").value;
    let desc1 = document.querySelector(".descLVL1").value;
    let tituloLevel2 = document.querySelector(".lvlTitle2").value;
    let acerto2 = document.querySelector(".acerto2").value;
    let url2 = document.querySelector(".URLlvl2").value;
    let desc2 = document.querySelector(".descLVL2").value;
    // let tituloLevel3 = document.querySelector(".lvlTitle1").value;
    // let acerto3 = document.querySelector(".%acerto1").value;
    // let url3 = document.querySelector("URLlvl1").value;
    // let desc3 = document.querySelector(".descLVL1").value;

    if(tituloLevel1.length < 10 || tituloLevel2.length < 10){
        alert("Titulo deve ser maior que 10 caracteres");
        return;
    }
    if ((Number(acerto1) < 0 || Number(acerto1) > 100) || (Number(acerto2) < 0 || Number(acerto2) > 100)){
        alert("Porcentagem invalida");
        return;
    }

    if(!url1.includes("https:") || !url2.includes("https:")){
        alert("URL inválida");
        return;
    }

    if(desc1.length < 30 || desc2.length < 30){
        alert("Descriação deve ter no minimo 30 caracteres");
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
                title: tituloLevel1,
                image: url1,
                text: desc1,
                minValue: 0
            },
            {
                title: tituloLevel2,
                image: url2,
                text: desc2,
                minValue: 50
            }
        ]
    }


    const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes",quizz)
    promisse.then(enviarQuizz);
}


function enviarQuizz(quizz){
    const tela4 = document.querySelector(".tela4");
    tela3.classList.add("hide");
    tela4.classList.remove("hide");
    tela4.innerHTML = "";
    tela4.innerHTML += `<h2>Seu quizz está pronto!</h2>
    <div class="card2">
        <img src="${URLimagemPrincipal}">
        <div class="title">
            <span>${titulo}</span>
        </div>
    </div>
    <button>Acessar quizz</button>
    <a href="" onclick="redirecionar();">Voltar para home</a>`
    let quizz_usuario = quizz.data;
    const localQuizz = localStorage.getItem("quizz");
    if(localQuizz !== null){
        let arrayQuizz = JSON.parse(localQuizz);
        arrayQuizz.push(quizz_usuario);
        let arrayString = JSON.stringify(arrayQuizz);
        localStorage.setItem("quizz",arrayString);
    }
    else{
        let arrayQuizz = [quizz_usuario];
        let arrayString = JSON.stringify(arrayQuizz);
        localStorage.setItem("quizz",arrayString);
    }

}

function redirecionar() {
    window.location.reload;
}

function criarQuizz(){
    const todos = document.querySelector(".todos");
    pessoais.classList.add("hide")
    todos.classList.add("hide");
    tela1.classList.remove("hide");
}