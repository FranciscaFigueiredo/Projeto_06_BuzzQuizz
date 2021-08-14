pegarQuizzes();

function pegarQuizzes() {
    const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v3/buzzquizz/quizzes");
    promise.then(listarQuizzes);
}

function listarQuizzes(quizzes) {
    let listaQuizzes = document.querySelector(".todos .quizzes");
    listaQuizzes.innerHTML = "";
    
    for (let i = 0; i < quizzes.data.length; i++) {
        listaQuizzes.innerHTML += `<div class="card" onclick="verQuizzes(${i+1});">
                                    <img src="${quizzes.data[i].image}">
                                    <div class="titulo">
                                        <span>${quizzes.data[i].title}</span>
                                    </div>
                                </div>`
    }
}