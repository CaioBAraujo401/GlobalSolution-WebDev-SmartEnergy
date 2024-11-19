
window.onload = function() {
    // Obtém o nome do arquivo atual
    const paginaAtual = window.location.pathname.split('/').pop();

    // Verifica se a página atual é index.html ou vazia 
    if (paginaAtual === 'index.html' || paginaAtual === '') {
        alert('Seja Bem-Vindo a Smart Energy!');
    }
};

// Selecionando os botões e atribuindo cores diretamente
const buttonVerde = document.getElementById('verde');
const buttonAzul = document.getElementById('azul');
const buttonRoxo = document.getElementById('roxo');
const buttonBranco = document.getElementById('branco')

// Função para mudar a cor de fundo do body
function mudarCor(cor) {
    document.body.style.backgroundColor = cor;
}

// Adicionando eventos de clique para cada botão
buttonBranco.addEventListener('click', () => mudarCor('#fff'))
buttonVerde.addEventListener('click', () => mudarCor('#8cd66e'));
buttonAzul.addEventListener('click', () => mudarCor('#0179c5'));
buttonRoxo.addEventListener('click', () => mudarCor('#a340aa'));

let imagens = [
    "/src/assets/painelSolar.jpg",
    "/src/assets/usinaBiomassa.jpg",
    "../src/assets/usinaEolica.jpg",
    "../src/assets/usinaMaremotriz.jpg",

];

let i = 0;
let time = 3000;

function slideShow(){
    document.getElementById("image").src = imagens[i];
    i++;
    if(i == imagens.length){i = 0};
    setTimeout("slideShow()", time);
}
slideShow();

