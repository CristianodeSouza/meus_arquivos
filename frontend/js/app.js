// Crediclass Dashboard App

// Configuração da API
const API_BASE = window.location.origin.includes('localhost') || window.location.origin.includes('127.0.0.1')
    ? 'http://localhost:8000'
    : window.location.origin;

const API_ENDPOINTS = {
    ranking: `${API_BASE}/api/ranking`,
    rankingCompleto: `${API_BASE}/api/ranking/completo`,
    adms: `${API_BASE}/api/ranking/adms`,
    grupo: (id) => `${API_BASE}/api/grupo/${id}`,
    health: `${API_BASE}/health`
};

// Estado da aplicação
const appState = {
    rankingData: null,
    filtroAdm: '',
    filtroTipo: '',
    loading: false
};

// Dados fictícios para o Mapa de Grupos (será substituído por API)
const mapaGruposData = [
    { adm: 'CAIXA', grupo: 1042, tipo: 'Imóvel', creditoMax: 250000, prazo: 180, mediaLance: 15000, contemplacoes: 45, ultimaAtualizacao: '2026-05-15', status: 'Atualizado' },
    { adm: 'ITAÚ', grupo: 2105, tipo: 'Automóvel', creditoMax: 80000, prazo: 120, mediaLance: 8000, contemplacoes: 32, ultimaAtualizacao: '2026-04-20', status: 'Pendente' },
    { adm: 'PORTO', grupo: 1523, tipo: 'Imóvel', creditoMax: 200000, prazo: 90, mediaLance: 12000, contemplacoes: 38, ultimaAtualizacao: '2026-03-10', status: 'Desatualizado' },
    { adm: 'CAIXA', grupo: 1580, tipo: 'Automóvel', creditoMax: 75000, prazo: 150, mediaLance: 7500, contemplacoes: 28, ultimaAtualizacao: '2026-05-12', status: 'Atualizado' },
    { adm: 'ITAÚ', grupo: 2234, tipo: 'Imóvel', creditoMax: 300000, prazo: 200, mediaLance: 18000, contemplacoes: 52, ultimaAtualizacao: '2026-02-05', status: 'Desatualizado' },
    { adm: 'PORTO', grupo: 1890, tipo: 'Automóvel', creditoMax: 85000, prazo: 110, mediaLance: 8500, contemplacoes: 35, ultimaAtualizacao: '2026-05-14', status: 'Atualizado' }
];

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    console.log('Crediclass Dashboard iniciado');
    carregarADMsDisponiveis();
    setupTabButtons();
    setupMapaGruposData();
});

/**
 * Carrega lista de ADMs disponíveis
 */
async function carregarADMsDisponiveis() {
    try {
        const response = await fetch(API_ENDPOINTS.adms);
        const data = await response.json();

        const selectAdm = document.getElementById('filtroAdm');
        const opcaoAtual = selectAdm.value;

        // Limpar opções exceto a primeira (Todas)
        while (selectAdm.options.length > 1) {
            selectAdm.remove(1);
        }

        // Adicionar ADMs dinamicamente
        Object.keys(data.adms).forEach(adm => {
            const option = document.createElement('option');
            option.value = adm;
            option.textContent = `${adm} (${data.adms[adm]} grupos)`;
            selectAdm.appendChild(option);
        });

        selectAdm.value = opcaoAtual;
    } catch (error) {
        console.error('Erro ao carregar ADMs:', error);
    }
}

/**
 * Carrega e exibe o ranking
 */
async function carregarRanking() {
    const btnCarregar = document.getElementById('btnCarregar');
    const loadingState = document.getElementById('loadingState');
    const containerTop10 = document.getElementById('containerTop10');
    const resumoStats = document.getElementById('resumoStats');

    try {
        // Obter filtros
        const adm = document.getElementById('filtroAdm').value;
        const tipo = document.getElementById('filtroTipo').value;

        // Atualizar estado
        appState.filtroAdm = adm;
        appState.filtroTipo = tipo;
        appState.loading = true;

        // Mostrar loading
        btnCarregar.disabled = true;
        btnCarregar.innerHTML = '⏳ Carregando...';
        loadingState.style.display = 'block';
        containerTop10.style.display = 'none';
        resumoStats.style.display = 'none';

        // Fazer requisição
        const url = new URL(API_ENDPOINTS.ranking);
        if (adm) {
            url.searchParams.append('adm', adm);
        }

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        appState.rankingData = data;

        // Atualizar UI
        atualizarEstatisticas(data);
        atualizarTabela(data.top_10_grupos, tipo);
        preencherADMsSelect();

        // Mostrar resultados
        loadingState.style.display = 'none';
        containerTop10.style.display = 'block';
        resumoStats.style.display = 'grid';

    } catch (error) {
        console.error('Erro ao carregar ranking:', error);
        alert(`❌ Erro ao carregar ranking: ${error.message}`);
        loadingState.textContent = '❌ Erro ao carregar dados. Verifique a conexão com o servidor.';

    } finally {
        appState.loading = false;
        btnCarregar.disabled = false;
        btnCarregar.innerHTML = '⚡ Carregar Ranking';
    }
}

/**
 * Atualiza as estatísticas resumidas
 */
function atualizarEstatisticas(data) {
    document.getElementById('statTotal').textContent = data.total_grupos;
    document.getElementById('statMedia').textContent = data.score_medio;
    document.getElementById('statMaximo').textContent = data.score_maximo;
    document.getElementById('statMinimo').textContent = data.score_minimo;
    document.getElementById('statTop3').textContent = data.grupos_top_3;
}

/**
 * Atualiza a tabela com os grupos
 */
function atualizarTabela(grupos, filtroTipo = '') {
    const tbody = document.getElementById('tabelaTop10');
    tbody.innerHTML = '';

    // Filtrar por tipo se especificado
    let gruposFiltrados = grupos;
    if (filtroTipo) {
        gruposFiltrados = grupos.filter(g => g['Tipo de Bem'] === filtroTipo);
    }

    if (gruposFiltrados.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center text-gray-500 py-4">Nenhum grupo encontrado com os filtros selecionados</td></tr>';
        return;
    }

    gruposFiltrados.forEach((grupo, index) => {
        const row = document.createElement('tr');
        const score = parseInt(grupo['Score Final (0-100)']);
        const scoreBadge = obterScoreBadge(score);
        const admBadge = obterADMBadge(grupo['Adm.']);
        const topBadge = grupo['Top 3?'] ? '<span class="top-3-badge">🏆 TOP 3</span>' : '';

        row.className = 'clickable-row fade-in';
        row.style.animationDelay = `${index * 0.1}s`;
        row.innerHTML = `
            <td>${grupo['Ranking Geral']}</td>
            <td>
                <strong>${grupo['Grup0']}</strong>
                ${topBadge}
            </td>
            <td>${admBadge}</td>
            <td>${formatarValor(grupo['Taxa\\nAdm Original'], '%', 2)}</td>
            <td>${Math.round(grupo['Prazo\\nRestante'] || 0)} meses</td>
            <td class="text-center">
                ${scoreBadge}
            </td>
            <td>
                <small>${grupo['Motivo Recomendação']}</small>
            </td>
        `;

        // Adicionar evento de clique para detalhes
        row.addEventListener('click', () => mostrarDetalhesGrupo(grupo['Grup0']));

        tbody.appendChild(row);
    });
}

/**
 * Cria badge de score com cor apropriada
 */
function obterScoreBadge(score) {
    let classe = 'poor';
    if (score >= 70) classe = 'excellent';
    else if (score >= 50) classe = 'good';
    else if (score >= 30) classe = 'fair';

    return `<div class="score-badge ${classe}">${score}</div>`;
}

/**
 * Cria badge de ADM com cor apropriada
 */
function obterADMBadge(adm) {
    let classe = '';
    const admUpper = adm.toUpperCase();

    if (admUpper === 'ITAÚ' || admUpper === 'ITAU') classe = 'itau';
    else if (admUpper === 'CAIXA') classe = 'caixa';
    else if (admUpper === 'PORTO') classe = 'porto';

    return `<span class="adm-badge ${classe}">${adm}</span>`;
}

/**
 * Formata valores de moeda e percentual
 */
function formatarValor(valor, tipo = '', casas = 2) {
    if (valor === null || valor === undefined) return 'N/A';

    const num = parseFloat(valor);
    if (isNaN(num)) return valor;

    if (tipo === '%') {
        return `${num.toFixed(casas)}%`;
    } else if (tipo === 'R$') {
        return `R$ ${num.toLocaleString('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas })}`;
    }
    return num.toFixed(casas);
}

/**
 * Mostra detalhes de um grupo específico
 */
async function mostrarDetalhesGrupo(grupoId) {
    try {
        const response = await fetch(API_ENDPOINTS.grupo(grupoId));
        const dados = await response.json();

        // Criar modal com detalhes
        const modal = document.createElement('div');
        modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        modal.innerHTML = `
            <div class="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
                <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                    <h2 class="text-2xl font-bold">📊 Grupo ${dados.grupo_id}</h2>
                    <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">
                        ✕
                    </button>
                </div>

                <div class="p-6 grid grid-cols-2 gap-6">
                    <div>
                        <p class="text-gray-600 text-sm">ADM</p>
                        <p class="text-lg font-semibold">${dados.adm}</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-sm">Ranking</p>
                        <p class="text-lg font-semibold">#${dados.ranking_geral}</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-sm">Taxa de Administração</p>
                        <p class="text-lg font-semibold">${formatarValor(dados.taxa_adm, '%', 2)}</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-sm">Prazo Restante</p>
                        <p class="text-lg font-semibold">${dados.prazo_restante} meses</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-sm">Tipo de Bem</p>
                        <p class="text-lg font-semibold">${dados.tipo_bem}</p>
                    </div>
                    <div>
                        <p class="text-gray-600 text-sm">Score Final</p>
                        <p class="text-lg font-semibold text-blue-600">${dados.scores.final}/100</p>
                    </div>
                </div>

                <div class="px-6 pb-6 border-t border-gray-200">
                    <h3 class="font-semibold mb-4">Scores Detalhados</h3>
                    <div class="grid grid-cols-3 gap-4">
                        <div class="text-center">
                            <p class="text-gray-600 text-xs">Taxa ADM</p>
                            <p class="text-2xl font-bold text-gray-900">${dados.scores.taxa_adm}</p>
                        </div>
                        <div class="text-center">
                            <p class="text-gray-600 text-xs">Prazo</p>
                            <p class="text-2xl font-bold text-gray-900">${dados.scores.prazo}</p>
                        </div>
                        <div class="text-center">
                            <p class="text-gray-600 text-xs">Contemplação</p>
                            <p class="text-2xl font-bold text-gray-900">${dados.scores.contemplacao}</p>
                        </div>
                        <div class="text-center">
                            <p class="text-gray-600 text-xs">Compatibilidade</p>
                            <p class="text-2xl font-bold text-gray-900">${dados.scores.compatibilidade}</p>
                        </div>
                        <div class="text-center">
                            <p class="text-gray-600 text-xs">Vida do Grupo</p>
                            <p class="text-2xl font-bold text-gray-900">${dados.scores.vida_grupo}</p>
                        </div>
                        <div class="text-center">
                            <p class="text-gray-600 text-xs">Fundo RSV</p>
                            <p class="text-2xl font-bold text-gray-900">${dados.scores.fundo_rsv}</p>
                        </div>
                    </div>
                </div>

                <div class="px-6 pb-6 bg-blue-50 rounded-b-lg">
                    <p class="text-sm font-semibold text-gray-700 mb-2">Motivo da Recomendação:</p>
                    <p class="text-gray-800">${dados.motivo_recomendacao}</p>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Fechar ao clicar fora
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.remove();
        });

    } catch (error) {
        console.error('Erro ao carregar detalhes:', error);
        alert('Erro ao carregar detalhes do grupo');
    }
}

/**
 * Preenche o select de ADMs com os disponíveis
 */
function preencherADMsSelect() {
    if (!appState.rankingData || !appState.rankingData.distribuicao_adm) return;

    // Já foi preenchido por carregarADMsDisponiveis()
}

// Suporte para Enter no filtro
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('#filtroAdm, #filtroTipo');
    inputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                carregarRanking();
            }
        });
    });
});

/**
 * Configura os botões de abas
 */
function setupTabButtons() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.style.display = 'none';
            });
            btn.classList.add('active');
            const tabId = btn.dataset.tab;
            document.getElementById(`tab-${tabId}`).style.display = 'block';
        });
    });
}

/**
 * Configura dados iniciais do Mapa de Grupos
 */
function setupMapaGruposData() {
    const selectAdms = document.getElementById('filtroMapaAdm');
    const admsUnicos = [...new Set(mapaGruposData.map(g => g.adm))];

    admsUnicos.forEach(adm => {
        const option = document.createElement('option');
        option.value = adm;
        option.textContent = adm;
        selectAdms.appendChild(option);
    });

    atualizarCardsMapaGrupos();
}

/**
 * Atualiza os cards operacionais do Mapa
 */
function atualizarCardsMapaGrupos() {
    const data = mapaGruposData;

    document.getElementById('cardGruposUnicos').textContent = new Set(data.map(g => g.grupo)).size;
    document.getElementById('cardAdms').textContent = new Set(data.map(g => g.adm)).size;
    document.getElementById('cardAtualizados').textContent = data.filter(g => g.status === 'Atualizado').length;
    document.getElementById('cardPendentes').textContent = data.filter(g => g.status === 'Pendente').length;
    document.getElementById('cardDesatualizados').textContent = data.filter(g => g.status === 'Desatualizado').length;
    document.getElementById('cardIncompletos').textContent = data.filter(g => g.status === 'Incompleto').length;
}

/**
 * Carrega e exibe o Mapa de Grupos
 */
function carregarMapaGrupos() {
    const adm = document.getElementById('filtroMapaAdm').value;
    const status = document.getElementById('filtroMapaStatus').value;
    const tipo = document.getElementById('filtroMapaTipo').value;

    let dadosFiltrados = mapaGruposData;

    if (adm) dadosFiltrados = dadosFiltrados.filter(g => g.adm === adm);
    if (status) dadosFiltrados = dadosFiltrados.filter(g => g.status === status);
    if (tipo) dadosFiltrados = dadosFiltrados.filter(g => g.tipo === tipo);

    atualizarTabelaMapa(dadosFiltrados);

    document.getElementById('containerMapaGrupos').style.display = 'block';
    document.getElementById('loadingMapaState').style.display = 'none';
}

/**
 * Atualiza a tabela do Mapa de Grupos
 */
function atualizarTabelaMapa(grupos) {
    const tbody = document.getElementById('tabelaMapaGrupos');
    tbody.innerHTML = '';

    if (grupos.length === 0) {
        tbody.innerHTML = '<tr><td colspan="10" class="text-center text-gray-500 py-4">Nenhum grupo encontrado</td></tr>';
        return;
    }

    grupos.forEach((grupo, index) => {
        const row = document.createElement('tr');
        const statusBadge = `<span class="status-badge ${grupo.status.toLowerCase().replace(' ', '-')}">${grupo.status}</span>`;
        const admBadge = obterADMBadge(grupo.adm);

        row.className = 'fade-in';
        row.style.animationDelay = `${index * 0.05}s`;
        row.innerHTML = `
            <td>${admBadge}</td>
            <td><strong>${grupo.grupo}</strong></td>
            <td>${grupo.tipo}</td>
            <td>R$ ${(grupo.creditoMax / 1000).toFixed(0)}k</td>
            <td>${grupo.prazo} meses</td>
            <td>R$ ${(grupo.mediaLance / 1000).toFixed(1)}k</td>
            <td>${grupo.contemplacoes}</td>
            <td>${grupo.ultimaAtualizacao}</td>
            <td class="text-center">${statusBadge}</td>
            <td class="text-center">
                <button class="action-btn" onclick="editarGrupo(${grupo.grupo})">Editar</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

/**
 * Abre modal para editar grupo
 */
function editarGrupo(grupoId) {
    const grupo = mapaGruposData.find(g => g.grupo === grupoId);
    if (!grupo) return;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg shadow-xl max-w-md w-full mx-4">
            <div class="p-6 border-b border-gray-200 flex justify-between items-center">
                <h2 class="text-2xl font-bold">✏️ Editar Grupo ${grupo.grupo}</h2>
                <button onclick="this.closest('.fixed').remove()" class="text-gray-400 hover:text-gray-600">✕</button>
            </div>

            <div class="p-6 space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Maior Lance (R$)</label>
                    <input type="number" value="${grupo.mediaLance * 1.2}" class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Maior lance">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Menor Lance (R$)</label>
                    <input type="number" value="${grupo.mediaLance * 0.8}" class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Menor lance">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Contemplações</label>
                    <input type="number" value="${grupo.contemplacoes}" class="w-full px-3 py-2 border border-gray-300 rounded-lg" placeholder="Contemplações">
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Mês Atualização</label>
                    <input type="date" value="${grupo.ultimaAtualizacao}" class="w-full px-3 py-2 border border-gray-300 rounded-lg">
                </div>
            </div>

            <div class="p-6 border-t border-gray-200 flex gap-2">
                <button onclick="this.closest('.fixed').remove()" class="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Cancelar</button>
                <button onclick="salvarGrupo(${grupo.grupo}); this.closest('.fixed').remove();" class="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Salvar</button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

/**
 * Salva alterações do grupo
 */
function salvarGrupo(grupoId) {
    console.log(`Grupo ${grupoId} salvo!`);
    alert(`Grupo ${grupoId} atualizado com sucesso!`);
}
