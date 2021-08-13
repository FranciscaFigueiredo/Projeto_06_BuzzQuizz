let home = document.querySelector(".todos");


function abrirQuizz(quizz) {
    home.classList.toggle("hide");
    let pagina = document.querySelector(".perguntas-quizz");
    pagina.classList.toggle("hide")
}