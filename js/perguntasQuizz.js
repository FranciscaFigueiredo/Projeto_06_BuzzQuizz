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
    pagina.classList.toggle("hide");

    dados = quizz.data[indice];

    pagina.innerHTML = "";

    pagina.innerHTML = `<div class="header-quizz">
                            <img src="${dados.image}">
                            
                            <div class="titulo">
                                <span>${dados.title}</span>
                            </div>
                        </div>`;

    for (let i = 0; i < quizz.data[indice].questions.length; i++) {
        pagina.innerHTML += `<div class="questao">
                                <div class="pergunta">
                                    <h2>${quizz.data[indice].questions[i].title}</h2>
                                </div>
                            </div>
                            <div class="respostas">
                                <div class="resposta">
                                    <img src="${quizz.data[indice].questions[i].answers[0].image}">
                                    <h3>${quizz.data[indice].questions[i].answers[0].text}</h3>
                                </div>
                                <div class="resposta">
                                    <img src="${quizz.data[indice].questions[i].answers[1].image}">
                                    <h3>${quizz.data[indice].questions[i].answers[1].text}</h3>
                                </div>
                                <div class="resposta">
                                    <img src="https://s3-alpha-sig.figma.com/img/c7e0/64f3/0145b79667e2e9f0f8193b64984531af?Expires=1629676800&Signature=CwocLGV4-3qrAYnl4HCwRtLRzl~AspbrMRQ3ueAeJZeljjNLdVCuoTld1cJKKOPNPyV79~4YT-oKijCgETqZuhH5Vs6J15LWrDQvPn1i-NAim5HXG9K-cr~gtAH0CQye~yHLv~PEBr1OQVN7ouVyFeSaxXFpHiwgiqJobyOpkTIzw4-CS5u~qY6NBjLeSjeG0EUj~7aG402JOcqcGkiK0iBLrBeVBFxf1CfB1X8uCG6xwKRGOVD4gWRSUCerjVF-wXIgbbSJoGatLtKzkbAHsL6tojNV8EyuFKe23u2Qk7-xEBhUlOMZ4c8TkyzUaR5KcdET6tD7d83IKHiYEqEh-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Sapo">
                                    <h3>Sapo gordo</h3>
                                </div>
                                <div class="resposta">
                                    <img src="https://s3-alpha-sig.figma.com/img/4bfb/7d5f/52d4ab9bee7b444cfed9506a1c2bc0ea?Expires=1629676800&Signature=htp5DJZeEhVTRBxtF15kuVq0uB4mbyg~Qn2TupEUq9yACH-6jDwcRLXI4qVy20x2MJbiBOAIcJi97VH1VTuerRrgwGdIa-12LrfTrLAc9BgMDLlTzSawqGUaL5-nzVYwtoJVFREda5atl5vRhQzJLm1SqPoB4VeZMiPbD35gEQ-oeY7XJTNx2jTHy11XJKukaUZQ2-IXEeYLObxfRLH9ycowPZxyInLEr4cq41wVyHdR5cW70SpLtm3B-7yGOW8Uto5bLQ1gpL6l1LoZ2B8OrHifZlmY4dg216ea9eCbKicNvfbFPKLokq3u0qOFA1DkBuDCFMJCSxxZLMephZ-Wug__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="Furão">
                                    <h3>Mustela putorius (o Furão)</h3>
                                </div>
                            </div>`
    }
    //
    //tenho que arranjar uma forma de deixar essas respostas sem limitação de quantidade também
    //                   
}