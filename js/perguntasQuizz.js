let home = document.querySelector(".todos");
let indice;

function verQuizzes(i) {
    indice = i;
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes");
    promise.then(abrirQuizz);
}

function abrirQuizz(quizz) {
    home.classList.toggle("hide");
    let pagina = document.querySelector(".perguntas-quizz");
    let respostas = document.querySelector(".card-content");
    pagina.classList.toggle("hide");

    dados = quizz.data[indice];

    pagina.innerHTML = "";
    respostas = "";

    pagina.innerHTML = `<div class="header-quizz">
                            <img src="${dados.image}">
                            
                            <div class="titulo">
                                <span>${dados.title}</span>
                            </div>
                        </div>`;

    for (let i = 0; i < quizz.data[indice].questions.length; i++) {
        for (let j = 0; j < quizz.data[indice].questions[i].answers.length; j++) {
            respostas += `<div class="resposta">
                            <img src="${quizz.data[indice].questions[i].answers[j].image}">
                            <h5>${quizz.data[indice].questions[i].answers[j].text}</h5>
                        </div>`
        }

        pagina.innerHTML += `<div class="questao">
                                <div class="card-title">
                                    <h2>${quizz.data[indice].questions[i].title}</h2>
                                </div>
                            
                                <div class="card-content">
                                    ${respostas}
                                </div>
                            </div>`
        respostas = "";
    }             
}