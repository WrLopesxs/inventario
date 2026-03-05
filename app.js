// ============================================
// CONFIGURAÇÕES
// ============================================
const API_URL = 'https://script.google.com/macros/s/AKfycby1maOcceERkhtNyoBb0_3xHwzV7iupXGkyx-cUeJSKJKVisQ40ui9g1k-wpb2wd7be/exec';

// ============================================
// DADOS DOS PART NUMBERS (MESMA ORDEM QUE VOCÊ PASSOU)
// ============================================
const partNumbers = [
    // 230B
    { pn: "53311-230.1B", modelo: "230B" },
    { pn: "53321-230.1B", modelo: "230B" },
    { pn: "53811-230.1B", modelo: "230B" },
    { pn: "53812-230.1B", modelo: "230B" },
    { pn: "55111-230.1B", modelo: "230B" },
    { pn: "58211-230.1B", modelo: "230B" },
    { pn: "61633-230.1B", modelo: "230B" },
    { pn: "61634-230.1B", modelo: "230B" },
    { pn: "67111-230.1B", modelo: "230B" },
    { pn: "67112-230.1B", modelo: "230B" },
    { pn: "67141-230.1B", modelo: "230B" },
    { pn: "67142-230.1B", modelo: "230B" },
    { pn: "58311-230B (HB)", modelo: "230B" },
    { pn: "61631-230B (HB)", modelo: "230B" },
    { pn: "61632-230B (HB)", modelo: "230B" },
    { pn: "63111-230B (HB)", modelo: "230B" },
    { pn: "67115-230B (HB)", modelo: "230B" },
    { pn: "67149-230B (HB)", modelo: "230B" },
    
    // 231 (SD)
    { pn: "58311-231B (SD)", modelo: "231" },
    { pn: "61111-231B (SD)", modelo: "231" },
    { pn: "61112-231B (SD)", modelo: "231" },
    { pn: "64411-231B (SD)", modelo: "231" },
    { pn: "64412-231B (SD)", modelo: "231" },
    { pn: "64414-231B (SD)", modelo: "231" },
    
    // 740B
    { pn: "53311-740B", modelo: "740B" },
    { pn: "53321-740B", modelo: "740B" },
    { pn: "53811-740B", modelo: "740B" },
    { pn: "53812-740B", modelo: "740B" },
    { pn: "61111-740B", modelo: "740B" },
    { pn: "61112-740B", modelo: "740B" },
    { pn: "61631-740B", modelo: "740B" },
    { pn: "61632-740B", modelo: "740B" },
    { pn: "63111-740B", modelo: "740B" },
    { pn: "63111-740B (SOLAR)", modelo: "740B" },
    { pn: "67111-740B", modelo: "740B" },
    { pn: "67112-740B", modelo: "740B" },
    { pn: "67141-740B", modelo: "740B" },
    { pn: "67142-740B", modelo: "740B" },
    { pn: "67113-740B", modelo: "740B" },
    { pn: "67114-740B", modelo: "740B" },
    { pn: "67143-740B", modelo: "740B" },
    { pn: "67144-740B", modelo: "740B" },
    { pn: "67118-740B", modelo: "740B" },
    { pn: "67119-740B", modelo: "740B" },
    { pn: "67149-740B", modelo: "740B" },
    { pn: "67149-740B POWER", modelo: "740B" },
    { pn: "58211-HV-740B", modelo: "740B" },
    { pn: "58211-FF-740B", modelo: "740B" },
    { pn: "58311-740B", modelo: "740B" },
    { pn: "55111-740B", modelo: "740B" },
    { pn: "58113-740B", modelo: "740B" },
    
    // 340B
    { pn: "61633.4-340B", modelo: "340B" },
    
    // D90B
    { pn: "53311-D90B", modelo: "D90B" },
    { pn: "53321-D90B", modelo: "D90B" },
    { pn: "63111-D90B C/F", modelo: "D90B" },
    { pn: "63111-D90B S/F", modelo: "D90B" },
    { pn: "63113-D90B PANOR", modelo: "D90B" },
    { pn: "53811-D90B", modelo: "D90B" },
    { pn: "53812-D90B", modelo: "D90B" },
    { pn: "61111-D90B", modelo: "D90B" },
    { pn: "61112-D90B", modelo: "D90B" },
    { pn: "67111-D90B", modelo: "D90B" },
    { pn: "67112-D90B", modelo: "D90B" },
    { pn: "67113-D90B", modelo: "D90B" },
    { pn: "67114-D90B", modelo: "D90B" },
    { pn: "67141-D90B", modelo: "D90B" },
    { pn: "67142-D90B", modelo: "D90B" },
    { pn: "67143-D90B", modelo: "D90B" },
    { pn: "67144-D90B", modelo: "D90B" },
    { pn: "67118-D90B", modelo: "D90B" },
    { pn: "67119-D90B", modelo: "D90B" },
    { pn: "67149-D90B", modelo: "D90B" },
    { pn: "67149-D90B PBD", modelo: "D90B" },
    { pn: "61631-D90B", modelo: "D90B" },
    { pn: "61632-D90B", modelo: "D90B" },
    { pn: "61633-D90B", modelo: "D90B" },
    { pn: "61634-D90B", modelo: "D90B" },
    { pn: "55111-D90B FFV", modelo: "D90B" },
    { pn: "55111-D90B HV", modelo: "D90B" },
    { pn: "55111-D90B HV IBOOSTER", modelo: "D90B" },
    { pn: "58211-D90B FFV", modelo: "D90B" },
    { pn: "58211-D90B HV", modelo: "D90B" },
    { pn: "58311-D90B FFV", modelo: "D90B" },
    { pn: "58311-D90B HV", modelo: "D90B" },
    { pn: "58111-D90B", modelo: "D90B" }
];

// ============================================
// ESTADO DA APLICAÇÃO
// ============================================
let turnoAtivo = null;
let modeloAtual = null;
let pnsFiltrados = [...partNumbers];

// ============================================
// ELEMENTOS DOM
// ============================================
const telaInicial = document.getElementById('telaInicial');
const telaPreenchimento = document.getElementById('telaPreenchimento');
const modelosContainer = document.getElementById('modelosContainer');
const cardsContainer = document.getElementById('cardsContainer');
const buscaPN = document.getElementById('buscaPN');
const btnVoltar = document.getElementById('btnVoltar');
const btnEnviar = document.getElementById('btnEnviar');
const tituloModelo = document.getElementById('tituloModelo');
const turnoInfo = document.getElementById('turnoInfo');
const notificacao = document.getElementById('notificacao');
const modalConfirmacao = document.getElementById('modalConfirmacao');
const modalSucesso = document.getElementById('modalSucesso');
const modalMensagem = document.getElementById('modalMensagem');
const modalCancelar = document.getElementById('modalCancelar');
const modalConfirmar = document.getElementById('modalConfirmar');
const fecharSucesso = document.getElementById('fecharSucesso');
const resumoEnvio = document.getElementById('resumoEnvio');
const themeToggle = document.getElementById('themeToggle');
const themeToggleText = document.getElementById('themeToggleText');

const THEME_STORAGE_KEY = 'inventario-theme';
const THEME_LIGHT = 'light';
const THEME_DARK = 'dark';

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    configurarTema();
    carregarModelos();
    configurarEventos();
});

function configurarEventos() {
    // Turnos
    document.querySelectorAll('.turno-btn').forEach(btn => {
        btn.addEventListener('click', () => selecionarTurno(btn.dataset.turno));
    });

    // Busca
    buscaPN.addEventListener('input', filtrarModelos);

    // Botões de navegação
    btnVoltar.addEventListener('click', voltarParaInicio);
    btnEnviar.addEventListener('click', enviarDados);
    if (themeToggle) {
        themeToggle.addEventListener('click', alternarTema);
    }

    // Modais
    modalCancelar.addEventListener('click', fecharModalConfirmacao);
    modalConfirmar.addEventListener('click', confirmarEnvio);
    fecharSucesso.addEventListener('click', () => {
        modalSucesso.classList.remove('mostrar');
        voltarParaInicio();
    });

    // Fechar modais clicando fora
    window.addEventListener('click', (e) => {
        if (e.target === modalConfirmacao) fecharModalConfirmacao();
        if (e.target === modalSucesso) {
            modalSucesso.classList.remove('mostrar');
            voltarParaInicio();
        }
    });
}

// ============================================
// FUNÇÕES DE TURNO
// ============================================
function selecionarTurno(turno) {
    turnoAtivo = turno;
    document.querySelectorAll('.turno-btn').forEach(btn => {
        btn.classList.toggle('ativo', btn.dataset.turno === turno);
    });
    turnoInfo.textContent = `${turno}o Turno`;
}

function configurarTema() {
    const temaSalvo = localStorage.getItem(THEME_STORAGE_KEY);
    const temaInicial = temaSalvo === THEME_DARK ? THEME_DARK : THEME_LIGHT;
    aplicarTema(temaInicial);
}

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem(THEME_STORAGE_KEY, tema);

    if (themeToggleText) {
        themeToggleText.textContent = tema === THEME_DARK ? 'Modo claro' : 'Modo escuro';
    }

    if (themeToggle) {
        themeToggle.setAttribute('aria-pressed', tema === THEME_DARK ? 'true' : 'false');
    }
}

function alternarTema() {
    const temaAtual = document.documentElement.getAttribute('data-theme') || THEME_LIGHT;
    const proximoTema = temaAtual === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    aplicarTema(proximoTema);
}

// ============================================
// FUNÇÕES DOS MODELOS
// ============================================
function carregarModelos() {
    // Agrupar PNs por modelo
    const modelos = {};
    partNumbers.forEach(item => {
        if (!modelos[item.modelo]) {
            modelos[item.modelo] = [];
        }
        modelos[item.modelo].push(item);
    });

    // Criar cards dos modelos
    modelosContainer.innerHTML = '';
    Object.entries(modelos).forEach(([modelo, itens]) => {
        const card = document.createElement('div');
        card.className = 'modelo-card';
        card.dataset.modelo = modelo;
        card.innerHTML = `
            <div class="modelo-nome">${modelo}</div>
            <div class="modelo-qtd">${itens.length} itens</div>
        `;
        card.addEventListener('click', () => abrirModelo(modelo));
        modelosContainer.appendChild(card);
    });
}

function filtrarModelos() {
    const termo = buscaPN.value.toLowerCase().trim();
    
    if (!termo) {
        carregarModelos();
        return;
    }

    // Filtrar PNs que contêm o termo
    const pnsFiltrados = partNumbers.filter(item => 
        item.pn.toLowerCase().includes(termo)
    );

    // Agrupar resultados por modelo
    const modelosFiltrados = {};
    pnsFiltrados.forEach(item => {
        if (!modelosFiltrados[item.modelo]) {
            modelosFiltrados[item.modelo] = [];
        }
        modelosFiltrados[item.modelo].push(item);
    });

    // Mostrar resultados
    modelosContainer.innerHTML = '';
    Object.entries(modelosFiltrados).forEach(([modelo, itens]) => {
        const card = document.createElement('div');
        card.className = 'modelo-card';
        card.dataset.modelo = modelo;
        card.innerHTML = `
            <div class="modelo-nome">${modelo}</div>
            <div class="modelo-qtd">${itens.length} itens encontrados</div>
        `;
        card.addEventListener('click', () => abrirModelo(modelo));
        modelosContainer.appendChild(card);
    });

    if (pnsFiltrados.length === 0) {
        modelosContainer.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px;">Nenhum PN encontrado</div>';
    }
}

// ============================================
// FUNÇÕES DE PREENCHIMENTO
// ============================================
function abrirModelo(modelo) {
    if (!turnoAtivo) {
        mostrarNotificacao('Selecione um turno primeiro!', 'erro');
        return;
    }

    modeloAtual = modelo;
    tituloModelo.textContent = modelo;
    
    // Filtrar PNs do modelo (manter ordem original)
    const pnsModelo = partNumbers.filter(item => item.modelo === modelo);
    
    // Criar cards de preenchimento
    cardsContainer.innerHTML = '';
    pnsModelo.forEach(item => {
        const card = criarCardPN(item.pn);
        cardsContainer.appendChild(card);
    });

    // Trocar tela
    telaInicial.classList.remove('ativa');
    telaPreenchimento.classList.add('ativa');
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function criarCardPN(pn) {
    const card = document.createElement('div');
    card.className = 'card-pn';
    card.dataset.pn = pn;
    
    card.innerHTML = `
        <div class="pn-titulo">${pn}</div>
        <div class="opcoes-container">
            <div class="opcao estoque">
                <div class="opcao-titulo">ESTOQUE</div>
                <div class="inputs-row">
                    <div class="input-group">
                        <label>Palete</label>
                        <input type="number" class="estoque-palete" min="0" placeholder="0">
                    </div>
                    <div class="input-group">
                        <label>Fracionado</label>
                        <input type="number" class="estoque-frac" min="0" placeholder="0">
                    </div>
                </div>
            </div>
            <div class="opcao reparo">
                <div class="opcao-titulo">REPARO</div>
                <div class="inputs-row">
                    <div class="input-group">
                        <label>Palete</label>
                        <input type="number" class="reparo-palete" min="0" placeholder="0">
                    </div>
                    <div class="input-group">
                        <label>Fracionado</label>
                        <input type="number" class="reparo-frac" min="0" placeholder="0">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function voltarParaInicio() {
    telaPreenchimento.classList.remove('ativa');
    telaInicial.classList.add('ativa');
    modeloAtual = null;
}

// ============================================
// VALIDAÇÃO E ENVIO
// ============================================
function validarCards() {
    const cards = document.querySelectorAll('.card-pn');
    const cardsVazios = [];

    cards.forEach((card, index) => {
        const estoquePalete = card.querySelector('.estoque-palete').value;
        const estoqueFrac = card.querySelector('.estoque-frac').value;
        const reparoPalete = card.querySelector('.reparo-palete').value;
        const reparoFrac = card.querySelector('.reparo-frac').value;

        // Verifica se TODOS os campos do card estão vazios
        if (!estoquePalete && !estoqueFrac && !reparoPalete && !reparoFrac) {
            cardsVazios.push({
                card: card,
                pn: card.dataset.pn,
                index: index
            });
        }
    });

    return cardsVazios;
}

function enviarDados() {
    if (!turnoAtivo) {
        mostrarNotificacao('Turno não selecionado!', 'erro');
        return;
    }

    const cardsVazios = validarCards();

    if (cardsVazios.length > 0) {
        // Mostrar modal com os PNs vazios
        const pnsVazios = cardsVazios.map(item => item.pn).join(', ');
        modalMensagem.textContent = `Os seguintes itens estão sem informação: ${pnsVazios}. Deseja enviar mesmo assim?`;
        modalConfirmacao.classList.add('mostrar');
        
        // Guardar referência para envio
        window.cardsVazios = cardsVazios;
    } else {
        // Se não tem vazios, envia direto
        prepararEnvio();
    }
}

function fecharModalConfirmacao() {
    modalConfirmacao.classList.remove('mostrar');
}

function confirmarEnvio() {
    modalConfirmacao.classList.remove('mostrar');
    
    // Se tem cards vazios, podemos prosseguir (usuário confirmou)
    prepararEnvio();
}

function prepararEnvio() {
    // Coletar dados preenchidos
    const cards = document.querySelectorAll('.card-pn');
    const dadosEnvio = [];

    cards.forEach(card => {
        const pn = card.dataset.pn;
        const estoquePalete = card.querySelector('.estoque-palete').value;
        const estoqueFrac = card.querySelector('.estoque-frac').value;
        const reparoPalete = card.querySelector('.reparo-palete').value;
        const reparoFrac = card.querySelector('.reparo-frac').value;

        // Só inclui se pelo menos um campo foi preenchido
        if (estoquePalete || estoqueFrac || reparoPalete || reparoFrac) {
            dadosEnvio.push({
                partNumber: pn,
                turno: turnoAtivo,
                tipo: estoquePalete || estoqueFrac ? 'estoque' : 'reparo',
                qtdePalete: parseInt(estoquePalete || reparoPalete || 0),
                fracionado: parseInt(estoqueFrac || reparoFrac || 0),
                timestamp: new Date().toISOString()
            });
        }
    });

    if (dadosEnvio.length === 0) {
        mostrarNotificacao('Nenhum dado para enviar!', 'erro');
        return;
    }

    // Enviar para API
    enviarParaAPI(dadosEnvio);
}

async function enviarParaAPI(dados) {
    btnEnviar.disabled = true;
    btnEnviar.innerHTML = '<span class="loading"></span> Enviando...';

    try {
        // Prepara os dados em lote
        const dadosLote = {
            turno: turnoAtivo,
            timestamp: new Date().toISOString(),
            itens: dados.map(item => ({
                partNumber: item.partNumber,
                tipo: item.tipo,
                qtdePalete: item.qtdePalete,
                fracionado: item.fracionado
            }))
        };

        console.log('📦 Enviando lote com', dados.length, 'itens:', dadosLote);

        // ÚNICA REQUISIÇÃO com TODOS os itens
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dadosLote) // Envia tudo de uma vez
        });

        // Como é no-cors, não podemos ler response
        // Mas podemos assumir que deu certo se não deu erro
        
        console.log('✅ Lote enviado com sucesso!');

        // Mostrar modal de sucesso
        mostrarModalSucesso(dados);

    } catch (error) {
        console.error('❌ Erro no envio do lote:', error);
        
        // Tenta fallback: enviar um por um se o lote falhar
        console.log('⚠️ Tentando fallback: envio individual...');
        
        try {
            for (const item of dados) {
                await fetch(API_URL, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(item)
                });
            }
            mostrarModalSucesso(dados);
            mostrarNotificacao('Envio concluído (modo fallback)', 'sucesso');
        } catch (fallbackError) {
            mostrarNotificacao('Erro ao enviar dados. Tente novamente.', 'erro');
        }
    } finally {
        btnEnviar.disabled = false;
        btnEnviar.innerHTML = '<span class="btn-enviar-icon" aria-hidden="true">-></span> ENVIAR INVENTARIO';
    }
}

function mostrarModalSucesso(dados) {
    // Agrupar por tipo para mostrar mais organizado
    const estoque = dados.filter(d => d.tipo === 'estoque');
    const reparo = dados.filter(d => d.tipo === 'reparo');
    
    let resumo = '';
    
    if (estoque.length > 0) {
        resumo += '<strong>ESTOQUE:</strong><br>';
        estoque.forEach(item => {
            resumo += `• ${item.partNumber}: ${item.qtdePalete} palete, ${item.fracionado} frac<br>`;
        });
    }
    
    if (reparo.length > 0) {
        resumo += '<br><strong>REPARO:</strong><br>';
        reparo.forEach(item => {
            resumo += `• ${item.partNumber}: ${item.qtdePalete} palete, ${item.fracionado} frac<br>`;
        });
    }
    
    resumo += `<br><strong>Total:</strong> ${dados.length} itens`;
    resumo += `<br><strong>Turno:</strong> ${turnoAtivo}º`;
    
    resumoEnvio.innerHTML = resumo;
    modalSucesso.classList.add('mostrar');
}

// ============================================
// UTILITÁRIOS
// ============================================
function mostrarNotificacao(mensagem, tipo) {
    notificacao.textContent = mensagem;
    notificacao.className = `notificacao mostrar ${tipo}`;
    
    setTimeout(() => {
        notificacao.classList.remove('mostrar');
    }, 3000);
}

// Scroll para card específico
function scrollAteCard(card) {
    const headerOffset = 100;
    const elementPosition = card.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

    // Destacar card
    card.classList.add('alerta');
    setTimeout(() => {
        card.classList.remove('alerta');
    }, 2000);
}
