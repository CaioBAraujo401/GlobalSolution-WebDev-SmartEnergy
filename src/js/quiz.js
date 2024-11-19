// Array com as perguntas e respostas do quiz
const perguntas = [
    {
        pergunta: "O que é energia renovável?",
        respostas: [
            {text: "Energia que nunca acaba", correct: false},
            {text: "Energia que não pode ser reutilizada", correct: false},
            {text: "Energia obtida de fontes naturais e renováveis", correct: true},
            {text: "Energia fóssil", correct: false}
        ]
    },
    {
        pergunta: "Qual dessas é uma fonte de energia verde?",
        respostas: [
            {text: "Solar", correct: true},
            {text: "Petróleo", correct: false},
            {text: "Carvão", correct: false},
            {text: "Gás natural", correct: false}
        ]
    },
    {
        pergunta: "Qual país é conhecido por sua alta produção de energia eólica?",
        respostas: [
            {text: "Japão", correct: false},
            {text: "Dinamarca", correct: true},
            {text: "Brasil", correct: false},
            {text: "Índia", correct: false}
        ]
    },
    {
        pergunta: "Qual é a principal fonte de energia renovável utilizada no Brasil?",
        respostas: [
            {text: "Energia solar", correct: false},
            {text: "Energia hidráulica", correct: true},
            {text: "Biomassa", correct: false},
            {text: "Energia eólica", correct: false}
        ]
    },
    {
        pergunta: "A energia solar é captada através de qual equipamento?",
        respostas: [
            {text: "Hélices", correct: false},
            {text: "Barragens", correct: false},
            {text: "Geradores a vapor", correct: false},
            {text: "Painéis fotovoltaicos", correct: true}
        ]
    },
    {
        pergunta: "O que significa o termo pegada de carbono?",
        respostas: [
            {text: "A quantidade de carbono capturada por plantas", correct: false},
            {text: "Uma marca de carbono no meio ambiente", correct: false},
            {text: "A medida do impacto ambiental de uma pessoa ou empresa", correct: true},
            {text: "O carbono presente no solo", correct: false}
        ]
    },
    {
        pergunta: "Qual das seguintes ações reduz o consumo de energia?",
        respostas: [
            {text: "Usar aparelhos em stand-by", correct: true},
            {text: "Desligar luzes ao sair do ambiente", correct: false},
            {text: "Ligar mais aparelhos durante a noite", correct: false},
            {text: "Manter eletrodomésticos antigos funcionando", correct: false}
        ]
    },
    {
        pergunta: "A energia maremotriz é gerada pelo movimento de qual elemento?",
        respostas: [
            {text: "Água", correct: true},
            {text: "Terra", correct: false},
            {text: "Sol", correct: false},
            {text: "Vento", correct: false}
        ]
    },
    {
        pergunta: "Qual destas não é uma vantagem da energia renovável?",
        respostas: [
            {text: "É sustentável", correct: false},
            {text: "Reduz a poluição", correct: false},
            {text: "É ilimitada", correct: false},
            {text: "É sempre mais barata que a energia fóssil", correct: true}
        ]
    },
    {
        pergunta: "Qual é o principal gás de efeito estufa associado ao uso de combustíveis fósseis?",
        respostas: [
            {text: "Oxigênio", correct: false},
            {text: "Metano", correct: false},
            {text: "Dióxido de carbono (CO2)", correct: true},
            {text: "Ozônio", correct: false}
        ]
    }
];

// Seleciona elementos HTML
const perguntaElemento = document.getElementById("pergunta");
const botaoResposta = document.getElementById("respostaBotao");
const botaoProxima = document.getElementById("next-btn");

// Controle do quiz
let respostaAtualIndex = 0;
let pontuacao = 0;

// Inicia o quiz
function startQuiz() {
    respostaAtualIndex = 0;
    pontuacao = 0;
    botaoProxima.innerHTML = "Próxima Pergunta";
    mostrarPergunta();
}

// Exibe a pergunta atual e opções de resposta
function mostrarPergunta() {
    resetState();
    let perguntaAtual = perguntas[respostaAtualIndex];
    perguntaElemento.innerHTML = `${respostaAtualIndex + 1}. ${perguntaAtual.pergunta}`;

    perguntaAtual.respostas.forEach((resposta) => {
        const button = document.createElement("button");
        button.innerHTML = resposta.text;
        button.classList.add("btn");
        botaoResposta.appendChild(button);
        if (resposta.correct) button.dataset.correct = resposta.correct;
        button.addEventListener("click", escolherResposta);
    });

    botaoProxima.innerHTML = respostaAtualIndex === perguntas.length - 1 ? "Ver Resultado" : "Próxima Pergunta";
}

// Reseta o estado da tela
function resetState() {
    botaoProxima.style.display = "none";
    while (botaoResposta.firstChild) {
        botaoResposta.removeChild(botaoResposta.firstChild);
    }
}

// Lida com a seleção de resposta
function escolherResposta(e) {
    const botaoEscolhido = e.target;
    const correto = botaoEscolhido.dataset.correct === "true";
    if (correto) {
        botaoEscolhido.classList.add("correct");
        pontuacao++;
    } else {
        botaoEscolhido.classList.add("incorrect");
    }

    Array.from(botaoResposta.children).forEach((button) => {
        if (button.dataset.correct === "true") button.classList.add("correct");
        button.disabled = true;
    });

    botaoProxima.style.display = "block";
}

// Exibe a pontuação final
function mostrarPontos() {
    resetState();
    perguntaElemento.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length}!`;
    botaoProxima.innerHTML = "Jogar novamente";
    botaoProxima.style.display = "block";
}

// Lida com o progresso no quiz
function mostrarBotaoProxima() {
    respostaAtualIndex++;
    respostaAtualIndex < perguntas.length ? mostrarPergunta() : mostrarPontos();
}

// Adiciona evento ao botão "Próxima"
botaoProxima.addEventListener("click", () => {
    respostaAtualIndex < perguntas.length ? mostrarBotaoProxima() : startQuiz();
});

// Inicializa o quiz
startQuiz();