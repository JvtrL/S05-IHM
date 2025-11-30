function openMenu() {
    document.getElementById("menu_aba").style.display = "block";
}

function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";
}

function temaLim() {
    document.documentElement.style.setProperty('--cor-click', '#38184C');
    document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
    document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
}

function temaInatel() {
    document.documentElement.style.setProperty('--cor-click', '#126ae2');
    document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
    document.documentElement.style.setProperty('--cor-text', 'black');
    document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
    document.documentElement.style.setProperty('--cor-back2', '#6a937a');
    document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');

}

function temaDark() {
    const cores = {
        '--cor-click': '#CEF09D',
        '--cor-sombra': '#9b0a59',
        '--cor-text': 'black',
        '--cor-back1': '#38184C',
        '--cor-back2': '#4f6a93',
        '--md-sys-color-primary': '#CEF09D'
    };

    for (const [variavel, valor] of Object.entries(cores)) {
        document.documentElement.style.setProperty(variavel, valor);
    }
}

// ------------------------------------------
// Variável Global de Disciplinas (CORRIGIDO)
// ------------------------------------------
const disciplinasData = [ 
    {
        id: 1,
        disciplina: 'S05 - Interação Homem-máquina',
        data: 'ter',
        horario: '10:00',
        local: 'P1-S17',
        prova_alert: true, 
        prova: '15/06',
        frequencia: '10/25',
        nota: 49, 
        npl: 80, // Nota Prática Laboratorial (exemplo)
        pl: 0.5, // Peso NPL (exemplo)
        pt: 0.5  // Peso NPT (exemplo)
    },
    {
        id: 2,
        disciplina: 'C06 - Programação Orientada a Objetos com Java',
        data: 'ter',
        horario: '14:00',
        local: 'C104',
        prova_alert: false,
        prova: '20/06',
        frequencia: '15/25', 
        nota: 75, 
        npl: 90, // Nota Prática Laboratorial (exemplo)
        pl: 0.5, 
        pt: 0.5  
    },
    {
        id: 3,
        disciplina: 'T02 - Redes de Dados I',
        data: 'ter',
        horario: '19:00',
        local: 'L05',
        prova_alert: true,
        prova: '10/06',
        frequencia: '5/25',
        nota: 92, 
        npl: 70, // Nota Prática Laboratorial (exemplo)
        pl: 0.5, 
        pt: 0.5 
    }
];
// ------------------------------------------

const eventos = [
    {
        id: 1,
        title: 'Semana do Software 2025',
        date: '12/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'tech',
        description: 'Uma semana inteira dedicada à tecnologia e inovação, com palestras, workshops e hackathons.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 2,
        title: 'Workshop de IoT',
        date: '12/01',
        time: '08:00',
        location: 'Laboratório CS&I',
        type: 'tech',
        description: 'Workshop prático sobre Internet das Coisas e suas aplicações na indústria 4.0.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 3,
        title: 'Festa dos Alunos 2025',
        date: '18/05',
        time: '19:00',
        location: 'Área Esportiva',
        type: 'cultural',
        description: 'Venha comemorar a melhor Festa dos Alunos de todos os tempos!',
        image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800&h=400'
    },
    {
        id: 4,
        title: 'Feira de Oportunidades',
        date: '04/05',
        time: '10:00',
        location: 'Salão de Eventos',
        type: 'academic',
        description: 'Venha conhecer empresas e projetos com destaque na área da engenharia.',
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=400'
    }
];

const carousel = document.querySelector('.carousel');

function createCards() {
    eventos.forEach(event => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <div class="info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><span class="material-symbols-outlined icon">event</span> ${event.date} às ${event.time} <span class="material-symbols-outlined icon">pin_drop</span> ${event.location}</p>
            </div>
        `;
        carousel.appendChild(card);
    });
}

let index = 0;
function nextCard() {
    index = (index + 1) % eventos.length;
    updateCarousel();
}

function prevCard() {
    index = (index - 1 + eventos.length) % eventos.length;
    updateCarousel();
}

function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('nextBtn').addEventListener('click', nextCard);
document.getElementById('prevBtn').addEventListener('click', prevCard);

setInterval(nextCard, 5000);

let startX;
carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});
carousel.addEventListener('touchend', (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextCard();
    if (endX - startX > 50) prevCard();
});

createCards();


function simularAprovacao(np1, np2Simulada, npl, pl, pt) {
    
    let npt = (np1 + np2Simulada) / 2;
    let nfa;
    let situacao = "";

    const nptR = parseFloat(npt.toFixed(1));

    if (nptR >= 60 && npl >= 60) {
        nfa = (npl * pl) + (nptR * pt);
        situacao = "APROVADO POR MÉDIA";
    } else if (nptR < 30 || npl < 30) {
        nfa = Math.min(nptR, npl);
        situacao = "REPROVADO DIRETO";
    } else {
        nfa = (nptR * pt) + (npl * pl); 
        situacao = "EM RECUPERAÇÃO (NP3)";
    }
    
    let cor;
    if (situacao === "APROVADO POR MÉDIA") {
        cor = '#28a745'; 
    } else if (situacao === "REPROVADO DIRETO") {
        cor = '#dc3545';
    } else {
        cor = '#ffc107'; 
    }

    const resultadoTexto = 
        `NPT (Simulada): ${nptR.toFixed(1)} \n` + 
        `NPL (Atual): ${npl.toFixed(1)} \n` +
        `Situação: ${situacao} \n` + 
        `NFA (Simulada): ${nfa.toFixed(1)}`;
    
    const modal = document.getElementById('simulador-modal');
    const resultadoDiv = document.getElementById('resultado-simulacao');

    resultadoDiv.innerText = resultadoTexto;
    resultadoDiv.style.backgroundColor = cor;
    resultadoDiv.style.display = 'block';

}

// ------------------------------------------
// Função Simular (CORRIGIDO)
// ------------------------------------------
function abrirSimulador(disciplinaId) {
    // 1. Busca os dados da disciplina usando o ID
    const dados = disciplinasData.find(d => d.id === disciplinaId);

    if (!dados) {
        alert("Erro: Dados da disciplina não encontrados.");
        return;
    }

    const notaInput = document.getElementById('nota-np2');
    const modal = document.getElementById('simulador-modal');
    const titulo = document.getElementById('simulador-titulo');

    // 2. Define o título do modal com a NP1 e nome corretos
    titulo.innerText = `Simular NP2 para ${dados.disciplina} (NP1 Atual: ${dados.nota})`;
    
    document.getElementById('calcular-btn').onclick = () => {
        const notaNP2 = parseFloat(notaInput.value);
        if (isNaN(notaNP2) || notaNP2 < 0 || notaNP2 > 100) {
            alert("Por favor, insira uma nota válida entre 0 e 100.");
            return;
        }
        // 3. Chama a função de simulação com a NP1 e parâmetros corretos
        simularAprovacao(dados.nota, notaNP2, dados.npl, dados.pt, dados.pl);
    };

    modal.style.display = 'block';
}

function fecharSimulador() {
    document.getElementById('simulador-modal').style.display = 'none';
    document.getElementById('resultado-simulacao').style.display = 'none'; 
    document.getElementById('nota-np2').value = '';
}


class AulasComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); 
        this.aulas = disciplinasData; // Usa a variável global
        this.hoje = "ter"; 
    }

    connectedCallback() {
        this.render(); 
    }

    render() {
        const aulasDia = this.aulas.filter(a => a.data === this.hoje); 
        this.shadowRoot.innerHTML = `
      <style>
      .comp-aula {
        position: relative;
        background-color: white;
        top: 0px;
        left: 0px;
        rigth: 0px;
        padding: 15px;
        margin: 20px 0px; 
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
      }

      .titulo_aula {
        font-family: "Arimo", sans-serif;
        font-weight: bold;
        font-size: 15px;
        color: var(--cor-text);
        padding: 5px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      p {
        font-family: "Arimo", sans-serif;
        font-size: 11px;
        color: var(--cor-text);
        line-height: 1.5;
        padding: 5px;
      }

      .lables {
        display: flex;
        padding: 5px;
      }

      .lable-prova {
        background-color: var(--cor-click); 
        padding: 7px;
        padding-right: 15px;
        padding-left: 15px;
        margin-bottom: 10px;
        border-radius: 500px;
        text-align: center
      }

      .p_lable {
        font-family: "Arimo", sans-serif;
        font-size: 11px;
        color: white;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      
      .lable-nota-vermelho {
        background-color: #dc3545; 
        padding: 7px 15px;
        margin-right: 10px;
        border-radius: 500px;
      }
      
      .lable-nota-laranja {
        background-color: #ffc107; 
        padding: 7px 15px;
        margin-right: 10px;
        border-radius: 500px;
      }

      .lable-nota-verde {
        background-color: #28a745; 
        padding: 7px 15px;
        margin-right: 10px;
        border-radius: 500px;
      }
      
      .lable-frequencia {
        background-color: var(--cor-sombra); 
        padding: 7px 15px;
        margin-right: 10px;
        border-radius: 500px;
      }
      
      .simular-btn {
        background-color: var(--cor-click);
        color: white;
        border: none;
        border-radius: 500px;
        padding: 5px 10px;
        cursor: pointer;
        font-size: 11px;
      }

      </style>
      <div style="padding: 0px 10px;"> 
        <h2 style="font-family: Arimo, sans-serif; font-size: 18px; margin: 15px 10px 5px; color: var(--cor-text);">Suas Próximas Entregas (Terça-feira)</h2>
        ${aulasDia.map(a => {
            let provaDisplay = a.prova_alert ? '' : 'display: none;';
            let lableNotaClass;
            const nota = a.nota;

            if (nota < 50) { 
                lableNotaClass = 'lable-nota-vermelho';
            } else if (nota >= 50 && nota < 70) { 
                lableNotaClass = 'lable-nota-laranja';
            } else { 
                lableNotaClass = 'lable-nota-verde';
            }

            return `
            <div class="comp-aula">
              <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
              <div class="titulo_aula">${a.disciplina}</div>
              <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
              <div class="lables">
                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                <div class="${lableNotaClass} p_lable">NP1: <b>${nota}</b></div>
                <button class="simular-btn" onclick="abrirSimulador(${a.id})" style="margin-left: 10px;">Simular NP2</button>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    }
}

customElements.define('aulas-component', AulasComponent);