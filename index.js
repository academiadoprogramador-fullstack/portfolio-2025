const dadosCardControleBar = {
    titulo: 'Controle de Bar',
    imagem: 'https://alexandre-rech-lages.github.io/portfolio-ap-dev/assets/sistema-bar.png',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O Sistema de Gerenciamento para Restaurantes permite que gar�ons registrem e gerenciem pedidos nas mesas, possibilitando a adi��o e remo��o de produtos em contas espec�ficas. Al�m disso, os funcion�rios podem cadastrar produtos, mesas e gar�ons. O sistema oferece relat�rios di�rios de faturamento e permite visualizar contas em aberto, al�m de acompanhar o total faturado no dia, semana e m�s, proporcionando uma gest�o eficiente das opera��es e do desempenho financeiro do restaurante.`
};

const dadosCardControleCinema = {
    titulo: 'Controle de Cinema',
    imagem: 'https://alexandre-rech-lages.github.io/portfolio-ap-dev/assets/sistema-cinema.png',
    stack: [
        'https://skillicons.dev/icons?i=html&theme=light',
        'https://skillicons.dev/icons?i=css&theme=light',
        'https://skillicons.dev/icons?i=cs&theme=light',
        'https://skillicons.dev/icons?i=net&theme=light',
    ],
    descricao: `O Sistema de Controle de Cinemas foi criado para otimizar a gest�o de ingressos e salas no Cinema de Lages.Ele permite que os funcion�rios registrem e gerenciem informa��es das salas, filmes e sess�es, facilitando o controle da capacidade e a venda de ingressos.Com funcionalidades de cadastro, consulta, altera��o e remo��o de sess�es, o sistema organiza as exibi��es do dia e apresenta detalhes sobre as poltronas dispon�veis e vendidas, agilizando o atendimento e melhorando a experi�ncia dos clientes.`
}

let cardSelecionado;

function carregarDadosCardAtual() {
    if (!cardSelecionado)
        throw new Error('Card n�o selecionado.');

    const imgCard = document.getElementById('imgCard');
    const stackCard = document.getElementById('stackCard');
    const tituloCard = document.getElementById('tituloCard');
    const descricaoCard = document.getElementById('descricaoCard');

    imgCard.src = cardSelecionado.imagem;
    tituloCard.textContent = cardSelecionado.titulo;
    descricaoCard.textContent = cardSelecionado.descricao;

    stackCard.innerHTML = '';

    for (let item of cardSelecionado.stack) {
        const iconeStack = document.createElement('img');
        iconeStack.width = 35;
        iconeStack.src = item;

        stackCard.appendChild(iconeStack);
    }
}

function selecionarPrimeiroCard() {
    if (cardSelecionado == dadosCardControleBar)
        return;

    cardSelecionado = dadosCardControleBar;
    carregarDadosCardAtual();
}

function selecionarSegundoCard() {
    if (cardSelecionado == dadosCardControleCinema)
        return;

    cardSelecionado = dadosCardControleCinema;
    carregarDadosCardAtual();
}

function main() {
    const btnSelecionarPrimeiroCard = document.getElementById("btnSelecionarPrimeiroCard");
    const btnSelecionarSegundoCard = document.getElementById("btnSelecionarSegundoCard");

    btnSelecionarPrimeiroCard.addEventListener('click', selecionarPrimeiroCard);
    btnSelecionarSegundoCard.addEventListener('click', selecionarSegundoCard);

    selecionarPrimeiroCard();
};

document.addEventListener('DOMContentLoaded', main);