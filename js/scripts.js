pegarQuizzes();

function pegarQuizzes() {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes");
    promise.then(listarQuizzes);
}

function listarQuizzes(quizzes) {
    let listaQuizzes = document.querySelector(".todos .quizzes");
    listaQuizzes.innerHTML = "";
    //listarQuizzPessoal();
    for (let i = 0; i < quizzes.data.length; i++) {
        listaQuizzes.innerHTML += `<div class="card" onclick="verQuizzes(${i});">
                                    <img src="${quizzes.data[i].image}">
                                    <div class="title">
                                        <span>${quizzes.data[i].title}</span>
                                    </div>
                                </div>`
    }
    
}

// function salvarQuizzPessoal() {
//     const quizz_string = localStorage.getItem("quizz");
//     const quizz = JSON.parse(quizz_string);
//     console.log(quizz);
    
// }

function listarQuizzPessoal() {
    const quizz_string = localStorage.getItem("quizz");
    const quizz = [];
    quizz.push(JSON.parse(quizz_string));
    console.log(quizz);
    const pessoais = document.querySelector(".pessoais");
    const quizzes = document.querySelector(".quizzes");

    if (quizz_string === null) {
        return;
    }
    else{
        pessoais.classList.remove("hide");
        for(let i = 0; i < quizz.length;i++){
            quizzes.innerHTML += `<div class="card">
                                    <img src="${quizz[i].data.image}">
                                    <div class="title">
                                        <span>${quizz[i].data.title}</span>
                                    </div>
                                </div>`
        }
    }
}