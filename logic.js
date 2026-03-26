function showNotice(msg) {
    const t = document.getElementById('toast');
    if (t) {
        t.innerText = msg;
        t.classList.add('active');
        setTimeout(() => t.classList.remove('active'), 2500);
    }
}

const gameState = {
    players: ["玩家A", "玩家B", "玩家C", "玩家D"],
    balances: [0, 0, 0, 0],
    settings: { base: 5, rate: 1 },
    dealerIndex: 0,
    dealerStreak: 0,
    pendingDebts: [], // Array of { creditor: index, debtor: index, amount: number }
    history: [],
    historyStack: []
};

const activeCalcFans = new Map(); // Use Map to track count of each fan type
let lastHistoryLength = -1;

const tileMap = {
    'Man1':'🀇','Man2':'🀈','Man3':'🀉','Man4':'🀊','Man5':'🀋','Man6':'🀌','Man7':'🀍','Man8':'🀎','Man9':'🀏',
    'Sou1':'🀐','Sou2':'🀑','Sou3':'🀒','Sou4':'🀓','Sou5':'🀔','Sou6':'🀕','Sou7':'🀖','Sou8':'🀗','Sou9':'🀘',
    'Pin1':'🀙','Pin2':'🀚','Pin3':'🀛','Pin4':'🀜','Pin5':'🀝','Pin6':'🀞','Pin7':'🀟','Pin8':'🀠','Pin9':'🀡',
    'Ton':'🀀','Nan':'🀁','Shaa':'🀂','Pei':'🀃',
    'Chun':'🀄','Hatsu':'🀅','Haku':'🀆'
};

function preloadSVGs() {
    const baseUrl = './assets/tiles/';
    Object.keys(tileMap).forEach(key => {
        const img = new Image();
        img.src = `${baseUrl}${key}.svg`;
    });
}

function init() {
    const savedString = localStorage.getItem('mahjong_special_v1');
    if (savedString) {
        const saved = JSON.parse(savedString);
        // Migration: Ensure pendingDebts is an array (Handle legacy object format)
        if (saved.pendingDebts && !Array.isArray(saved.pendingDebts)) {
            saved.pendingDebts = [];
        }
        Object.assign(gameState, saved);
    }
    if (gameState.roundIndex === undefined) gameState.roundIndex = 0;
    if (gameState.extraActive === undefined) gameState.extraActive = false;
    
    document.getElementById('base-val').value = gameState.settings.base;
    document.getElementById('rate-val').value = gameState.settings.rate;
    if (gameState.players) {
        document.getElementById('p1-val').value = gameState.players[0] || '玩家A';
        document.getElementById('p2-val').value = gameState.players[1] || '玩家B';
        document.getElementById('p3-val').value = gameState.players[2] || '玩家C';
        document.getElementById('p4-val').value = gameState.players[3] || '玩家D';
    }
    
    lastHistoryLength = -1;
    preloadSVGs();
    renderStaticHTML();
    updateAllUI();
}

function save() {
    // Save state but EXCLUDE historyStack to stay under 5MB quota
    const { historyStack, ...persistentState } = gameState;
    try {
        localStorage.setItem('mahjong_special_v1', JSON.stringify(persistentState));
    } catch (e) {
        console.error("Storage Error:", e);
        showNotice('記憶體已滿，請按「重啟」清空紀錄！');
    }
    updateAllUI();
}

function pushHistory() {
    // Snapshot state EXCLUDING the stack itself (Fix recursive leak)
    const { historyStack, ...clone } = gameState;
    const snapshot = JSON.parse(JSON.stringify(clone));
    gameState.historyStack.push(snapshot);
    if (gameState.historyStack.length > 10) gameState.historyStack.shift();
}

function undoLastAction() {
    if (gameState.historyStack.length === 0) return showNotice('沒有可復原的紀錄');
    const lastState = gameState.historyStack.pop();
    Object.assign(gameState, lastState);
    lastHistoryLength = -1;
    save();
    showNotice('已復原上一鋪');
}

let resetConfirmTimeout = null;
function resetGame() {
    const btn = document.querySelector('button[onclick="resetGame()"]');
    if (!resetConfirmTimeout) {
        if (btn) btn.innerHTML = `<i class="fa-solid fa-triangle-exclamation text-xs"></i> 確定重啟?`;
        resetConfirmTimeout = setTimeout(() => {
            if (btn) btn.innerHTML = `<i class="fa-solid fa-trash-can text-xs"></i> 重啟`;
            resetConfirmTimeout = null;
        }, 3000);
        showNotice('請再次點擊「重啟」以確認清空所有紀錄');
        return;
    }
    
    // Confirmed
    clearTimeout(resetConfirmTimeout);
    resetConfirmTimeout = null;
    if (btn) btn.innerHTML = `<i class="fa-solid fa-trash-can text-xs"></i> 重啟`;
    
    // Soft Reset State
    localStorage.removeItem('mahjong_special_v1');
    Object.assign(gameState, {
        players: ["玩家A", "玩家B", "玩家C", "玩家D"],
        balances: [0, 0, 0, 0],
        settings: { base: 5, rate: 1 },
        dealerIndex: 0,
        dealerStreak: 0,
        roundIndex: 0,
        pendingDebts: [],
        history: [],
        historyStack: []
    });
    activeCalcFans.clear();
    lastHistoryLength = -1;
    document.getElementById('base-val').value = 5;
    document.getElementById('rate-val').value = 1;
    document.getElementById('p1-val').value = '玩家A';
    document.getElementById('p2-val').value = '玩家B';
    document.getElementById('p3-val').value = '玩家C';
    document.getElementById('p4-val').value = '玩家D';
    document.getElementById('manual-tai-input').value = 0;
    save();
    renderStaticHTML();
    updateAllUI();
    showNotice('遊戲已完全重啟！');
}

function renderMahjongText(text) {
    if (!text) return '';
    return text.toString().replace(/[\u{1F000}-\u{1F02F}]+/gu, match => {
        return `<span class="inline-block bg-white text-2xl shadow-sm rounded-md border border-slate-200 px-1 py-0.5 mx-0.5 leading-none align-middle text-slate-800">${match}</span>`;
    });
}

function getTileImg(itemArray) {
    if (!itemArray) return '';
    if (!Array.isArray(itemArray)) return `<span class="align-middle text-slate-600 font-medium text-sm mx-1">${renderMahjongText(itemArray)}</span>`;
    
    const baseUrl = './assets/tiles/';
    return itemArray.map(item => {
        if (item.endsWith('.svg')) {
            const tk = item.replace('.svg', '');
            const fallback = tileMap[tk] || '';
            const onerr = `this.onerror=null; this.outerHTML='<span class=&quot;inline-block bg-white text-2xl shadow-sm rounded-md border-2 border-slate-200 px-1 py-0.5 mx-0.5 leading-none align-middle text-slate-800&quot;>${fallback}</span>';`;
            const isHaku = item.includes('Haku.svg');
            const extraClass = isHaku ? 'rounded border-2 border-slate-200' : '';
            return `<img src="${baseUrl}${item}" onerror="${onerr}" class="inline-block h-7 shadow-sm mr-0.5 align-middle ${extraClass}" alt="${item}">`;
        } else {
            return `<span class="align-middle text-slate-600 font-medium text-sm mx-0.5">${renderMahjongText(item)}</span>`;
        }
    }).join('');
}

function renderStaticHTML() {
    document.getElementById('rules-grid').innerHTML = mahjongData.rules.map((r, i) => `
        <div class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm space-y-2">
            <h5 class="font-black text-mahjong uppercase text-[10px] tracking-widest">規則 ${i + 1}</h5>
            <p class="text-slate-600 leading-relaxed font-medium">${r}</p>
        </div>
    `).join('');

    if (mahjongData.instantPay && document.getElementById('instant-pay-grid')) {
        document.getElementById('instant-pay-grid').innerHTML = mahjongData.instantPay.map(p => `
            <div class="p-5 bg-orange-50/50 rounded-2xl border border-orange-100 shadow-sm flex flex-col justify-between">
                <div class="flex justify-between items-start mb-2">
                    <h5 class="font-black text-orange-600">${p.name}</h5>
                    <span class="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-[10px] font-black whitespace-nowrap">${p.amount}</span>
                </div>
                <p class="text-slate-500 text-xs font-medium">${p.desc}</p>
            </div>
        `).join('');
    }

    const groupedFans = {};
    const fansWithIndex = mahjongData.fanTable.map((t, idx) => ({ ...t, originalIndex: idx }));
    fansWithIndex.forEach(t => {
        if (!groupedFans[t.category]) groupedFans[t.category] = [];
        groupedFans[t.category].push(t);
    });

    let tableHTML = `
        <table class="w-full text-left">
            <thead class="bg-slate-50 border-b border-slate-100">
                <tr class="text-[10px] font-black uppercase text-slate-400 tracking-widest">
                    <th class="px-6 py-4">番數</th><th class="px-6 py-4">名稱 (Name)</th><th class="px-6 py-4">條件 (Condition)</th><th class="px-6 py-4">圖例 (Example)</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-slate-50">
    `;
    
    for (const [cat, fans] of Object.entries(groupedFans)) {
        tableHTML += `<tr class="bg-slate-100"><td colspan="4" class="px-6 py-2 font-black text-slate-700 uppercase tracking-widest text-xs"><i class="fa-solid fa-layer-group opacity-50 mr-2"></i> ${cat}</td></tr>`;
        fans.forEach(t => {
            tableHTML += `
                <tr class="hover:bg-slate-50 transition-colors">
                            <td class="px-6 py-4 font-black text-mahjong whitespace-nowrap text-lg">${t.fan} 番</td>
                            <td class="px-6 py-4 font-bold text-slate-800">${t.name}</td>
                            <td class="px-6 py-4 font-medium text-slate-500 text-xs">${t.condition}</td>
                            <td class="px-6 py-4 text-sm font-medium text-slate-600">${getTileImg(t.example)}</td>
                </tr>
            `;
        });
    }
    tableHTML += `</tbody></table>`;
    document.getElementById('teach-table-container').innerHTML = tableHTML;

    let calcHTML = '';
    for (const [cat, fans] of Object.entries(groupedFans)) {
        calcHTML += `
            <div class="mb-6">
                <h4 class="font-black text-slate-400 uppercase tracking-widest text-[11px] mb-3 flex items-center gap-2"><div class="w-1.5 h-3 bg-mahjong rounded-full"></div> ${cat}</h4>
                <div class="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    ${fans.map(t => {
                        const count = activeCalcFans.get(t.originalIndex) || 0;
                        return `
                        <button onclick="toggleFan(${t.originalIndex})" id="fan-${t.originalIndex}" class="btn-fan relative p-4 bg-white rounded-2xl border-2 border-slate-100 text-left transition-all flex flex-col gap-1 justify-between h-full hover:border-mahjong/30 ${count > 0 ? 'active' : ''}">
                            <div class="flex justify-between items-start w-full gap-2 mb-2">
                                <span class="target-name text-sm font-bold text-slate-700 truncate w-full">${t.name}</span>
                                <span class="target-fan text-mahjong font-black whitespace-nowrap text-right">${t.fan} 番</span>
                            </div>
                            <div class="target-example mt-auto text-left w-full text-xs font-medium text-slate-500 overflow-hidden leading-relaxed">${getTileImg(t.example)}</div>
                            ${count > 0 ? `
                                <div class="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle border-2 border-white">
                                    x${count}
                                </div>
                            ` : ''}
                        </button>
                    `}).join('')}
                </div>
            </div>
        `;
    }
    if (document.getElementById('calc-categories-container')) {
        document.getElementById('calc-categories-container').innerHTML = calcHTML;
    }

    const players = gameState.players;
    const winnerContainer = document.getElementById('winner-checkboxes');
    if (winnerContainer) {
        winnerContainer.innerHTML = players.map((p, i) => `
            <div class="flex items-center gap-2 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-all">
                <input type="checkbox" id="winner-${i}" class="winner-checkbox w-4 h-4 text-mahjong border-slate-200 rounded focus:ring-mahjong" data-index="${i}">
                <label for="winner-${i}" class="text-xs font-black text-slate-700 cursor-pointer flex-1 line-clamp-1">${p}</label>
            </div>
        `).join('');
    }
    
    const lSelect = document.getElementById('loser-select');
    if (lSelect) {
        lSelect.innerHTML = `<option value="self">自摸 (三家賠)</option>` + 
            players.map((p, i) => `<option value="${i}">${p}</option>`).join('');
    }
    
    document.getElementById('adj-payer').innerHTML = players.map((p, i) => `<option value="${i}">${p}</option>`).join('');
    document.getElementById('adj-payee').innerHTML = players.map((p, i) => `<option value="${i}">${p}</option>`).join('');
}

function toggleFan(idx) {
    const current = activeCalcFans.get(idx) || 0;
    
    // Increment count (allow multiple clicks)
    activeCalcFans.set(idx, current + 1);
    
    // We need to re-render to show the count badge
    renderStaticHTML();
    
    // Auto-sum selected fans and push to manual input
    recalculateTotal();
}

function recalculateTotal() {
    let sum = 0;
    activeCalcFans.forEach((count, i) => sum += (mahjongData.fanTable[i].fan * count));
    
    if (gameState.extraActive) {
        sum += (2 * gameState.dealerStreak) + 1;
    }
    
    document.getElementById('manual-tai-input').value = sum;
    updateAllUI();
}

function clearCalcSelections() {
    activeCalcFans.clear();
    gameState.extraActive = false;
    document.getElementById('manual-tai-input').value = 0;
    renderStaticHTML();
    updateAllUI();
}

function updateAllUI() {
    // Safety Migration: Ensure pendingDebts is an array
    if (gameState.pendingDebts && !Array.isArray(gameState.pendingDebts)) {
        gameState.pendingDebts = [];
    }

    if (gameState.roundIndex === undefined) gameState.roundIndex = 0;
    const winds = ['東', '南', '西', '北'];
    
    document.getElementById('wind-badge').innerText = winds[gameState.dealerIndex];
    document.getElementById('round-text').innerText = `${winds[gameState.roundIndex]}圈`;
    
    const extraBtn = document.getElementById('extra-fan-card');
    if (extraBtn) {
        if (gameState.extraActive) {
            extraBtn.classList.add('active');
        } else {
            extraBtn.classList.remove('active');
        }
    }

    const dealerName = gameState.players[gameState.dealerIndex];
    const streak = gameState.dealerStreak;
    document.getElementById('dealer-name').innerText = dealerName;
    document.getElementById('dealer-streak-text').innerText = `連莊: ${streak} (${streak === 0 ? '平庄' : '連' + streak})`;
    
    // Sync to Ledger Tab as well
    if (document.getElementById('ledger-wind-badge')) {
        document.getElementById('ledger-wind-badge').innerText = winds[gameState.dealerIndex];
        document.getElementById('ledger-round-text').innerText = `${winds[gameState.roundIndex]}圈`;
        document.getElementById('ledger-dealer-name').innerText = dealerName;
        document.getElementById('ledger-dealer-streak-text').innerText = `連莊: ${streak} (${streak === 0 ? '平庄' : '連' + streak})`;
    }
    
    const diceContainer = document.getElementById('dice-icons');
    const diceIcons = ['one', 'two', 'three', 'four', 'five', 'six'];
    const extraFan = (2 * streak) + 1;
    const totalFans = parseInt(document.getElementById('manual-tai-input').value) || 0;
    let diceHTML = '';
    if (streak === 0) {
        diceHTML = '<i class="fa-solid fa-dice-one text-slate-200 text-lg"></i>';
    } else {
        let remaining = streak;
        while (remaining > 0) {
            let v = Math.min(remaining, 6);
            diceHTML += `<i class="fa-solid fa-dice-${diceIcons[v-1]} text-mahjong text-lg"></i>`;
            remaining -= v;
        }
    }
    diceContainer.innerHTML = diceHTML;
    
    document.getElementById('extra-fan-display').innerText = `+${extraFan} Extra`;
    
    document.getElementById('ledger-fans-preview').value = totalFans;
    document.getElementById('ledger-base-preview').innerText = `${gameState.settings.base}`;
    
    const rawAmt = gameState.settings.base + (totalFans * gameState.settings.rate);
    document.getElementById('amount-preview').innerText = `$${rawAmt}`;

    document.getElementById('balance-grid').innerHTML = gameState.balances.map((b, i) => `
        <div class="bg-white p-6 rounded-3xl border border-slate-100 text-center shadow-sm">
            <p class="text-[10px] font-black uppercase text-slate-400">${gameState.players[i]}</p>
            <p class="text-2xl font-black ${b >= 0 ? 'text-green-600' : 'text-red-500'} mt-1">${b > 0 ? '+' : ''}${b}</p>
        </div>
    `).join('');

    const content = document.getElementById('pending-debt-content');
    if (content) {
        if (gameState.pendingDebts.length === 0) {
            content.innerHTML = `
                <div class="flex flex-col items-center justify-center py-12 text-white/20">
                    <i class="fa-solid fa-mug-hot text-6xl mb-4 text-white/10"></i>
                    <p class="font-black italic">目前冇人爭錢，輕鬆啲！</p>
                </div>
            `;
        } else {
            content.innerHTML = gameState.pendingDebts.map((d, idx) => `
                <div class="bg-white/10 p-5 rounded-3xl flex items-center justify-between group relative border border-white/5 hover:bg-white/20 transition-all">
                    <div class="flex items-center gap-4">
                        <div class="flex flex-col">
                            <span class="text-[10px] font-black text-white/40 uppercase tracking-widest text-left">債主 (Winner)</span>
                            <span class="text-lg font-black text-white">${gameState.players[d.creditor]}</span>
                        </div>
                        <i class="fa-solid fa-arrow-right-long text-yellow-400"></i>
                        <div class="flex flex-col">
                            <span class="text-[10px] font-black text-white/40 uppercase tracking-widest text-left">債仔 (Loser)</span>
                            <span class="text-lg font-black text-white">${gameState.players[d.debtor]}</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-6">
                        <div class="text-right">
                            <span class="block text-[10px] font-black text-white/40 uppercase tracking-widest">欠款額</span>
                            <span class="text-3xl font-black text-yellow-400 tracking-tighter shadow-sm">$${d.amount || 0}</span>
                        </div>
                        <button onclick="settleIndividualDebt(${idx})" class="w-12 h-12 bg-white/20 hover:bg-red-500 text-white rounded-2xl flex items-center justify-center text-xl transition-all shadow-xl group/btn ring-1 ring-white/10">
                            <span class="group-hover/btn:hidden font-black">清</span>
                            <i class="fa-solid fa-check hidden group-hover/btn:block font-black"></i>
                        </button>
                    </div>
                </div>
            `).join('');
        }
    }

    if (gameState.history.length !== lastHistoryLength) {
        document.getElementById('history-table-body').innerHTML = gameState.history.slice().reverse().map(log => `
            <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-6 py-4 font-black text-slate-400">${log.round === '平帳' ? '⚖️' : (log.round === '流局' ? '🌊' : (log.round === '即時' ? '⚡' : log.round))}</td>
                <td class="px-6 py-4 font-bold text-green-600">${log.winner}</td>
                <td class="px-6 py-4 font-bold text-red-500">${log.loser || '-'}</td>
                <td class="px-6 py-4 font-black text-slate-700">${log.tai || 0}</td>
                <td class="px-6 py-4 font-black text-slate-800">$${log.amount}</td>
                <td class="px-6 py-4">
                    <span class="px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-500 whitespace-nowrap">${log.remark}</span>
                </td>
            </tr>
        `).join('');
        
        const countEl = document.getElementById('history-count');
        if (countEl) countEl.innerText = `${gameState.history.length} 條紀錄`;
        
        lastHistoryLength = gameState.history.length;
    }
}

function recordDraw() {
    pushHistory();
    gameState.dealerStreak += 1;
    gameState.history.push({
        round: "流局",
        winner: "-",
        loser: "-",
        tai: "-",
        amount: 0,
        remark: `🌊 庄家連莊 (連${gameState.dealerStreak})`
    });
    save();
    updateAllUI();
    showNotice('已紀錄流局，連莊 +1');
}

function addExtraFans() {
    gameState.extraActive = !gameState.extraActive;
    recalculateTotal();
}

function recordSpecialTransaction() {
    // 1. Inputs
    const winnerCheckboxes = document.querySelectorAll('.winner-checkbox:checked');
    const winners = Array.from(winnerCheckboxes).map(cb => parseInt(cb.dataset.index));
    const loseVal = document.getElementById('loser-select').value;
    const loseIdx = loseVal === 'self' ? -1 : parseInt(loseVal);
    
    if (winners.length === 0) return showNotice('請至少選擇一位贏家');
    if (winners.includes(loseIdx)) return showNotice('贏家與輸家不可相同');

    pushHistory();

    const totalFans = parseInt(document.getElementById('manual-tai-input').value) || 0;
    const baseAmount = gameState.settings.base + (totalFans * gameState.settings.rate);
    
    // Resolve Sub-Win Transactions (Round Pairs)
    const roundPairs = [];
    winners.forEach(w => {
        const losers = (loseIdx === -1) ? [0, 1, 2, 3].filter(i => !winners.includes(i)) : [loseIdx];
        losers.forEach(l => roundPairs.push({ w, l, absorbed: false }));
    });

    const snapshot = JSON.parse(JSON.stringify(gameState.pendingDebts));
    const newPendingList = [];
    
    // Process Each Existing Debt Against Current Round
    snapshot.forEach(d => {
        let outcome = "B"; // Default: Stay (Neutral)
        let relevantPair = null;

        // Rule C: Creditor Privilege (Stay or Pull)
        if (winners.includes(d.creditor)) {
            // Check if it's a direct PULL (Creditor wins from Debtor)
            relevantPair = roundPairs.find(p => p.w === d.creditor && p.l === d.debtor);
            if (relevantPair) {
                outcome = "C_PULL";
            } else {
                outcome = "C_STAY";
            }
        } 
        // Rule D: Kick (Debtor wins from Creditor)
        else if (winners.includes(d.debtor) && (loseIdx === d.creditor || (loseIdx === -1 && !winners.includes(d.creditor)))) {
            // Note: In self-win, loseIdx -1 means everyone not in winners lost.
            relevantPair = roundPairs.find(p => p.w === d.debtor && p.l === d.creditor);
            if (relevantPair) outcome = "D_KICK";
        }
        // Rule A: Debtor Trigger (Debtor involved without Creditor winning)
        else {
            const isDebtorWinner = winners.includes(d.debtor);
            const isDebtorLoser = (loseIdx === d.debtor || (loseIdx === -1 && !winners.includes(d.debtor)));
            if (isDebtorWinner || isDebtorLoser) {
                outcome = "A_SETTLE";
            }
        }

        // Execute Outcome
        if (outcome === "C_PULL") {
            relevantPair.absorbed = true;
            d.amount = Math.ceil(d.amount * 1.5) + baseAmount;
            newPendingList.push(d);
            showNotice(`🔥 ${gameState.players[d.creditor]} 繼續拉住 ${gameState.players[d.debtor]}！`);
        } else if (outcome === "C_STAY") {
            newPendingList.push(d); // Maintain existing debt
        } else if (outcome === "D_KICK") {
            relevantPair.absorbed = true;
            const kickOldAmount = Math.floor(d.amount * 0.5);
            // Net Change: Winner gets new win but PAYS BACK half of old debt
            const netChange = baseAmount - kickOldAmount; 
            
            gameState.balances[d.debtor] += netChange;
            gameState.balances[d.creditor] -= netChange;
            
            gameState.history.push({
                round: "踢半",
                winner: gameState.players[d.debtor],
                loser: gameState.players[d.creditor],
                tai: totalFans,
                amount: Math.abs(netChange),
                remark: `⚡ 踢半 (${netChange >= 0 ? '贏' : '輸'} ${Math.abs(netChange)} | 舊${kickOldAmount} vs 新${baseAmount})`
            });
            showNotice(`❄️ ${gameState.players[d.debtor]} 極速斷尾！債務清零。`);
        } else if (outcome === "A_SETTLE") {
            gameState.balances[d.creditor] += d.amount;
            gameState.balances[d.debtor] -= d.amount;
            gameState.history.push({
                round: "斷線",
                winner: gameState.players[d.creditor],
                loser: gameState.players[d.debtor],
                tai: "-",
                amount: d.amount,
                remark: `⚡ 斷線 (結算 ${gameState.players[d.debtor]} -> ${gameState.players[d.creditor]})`
            });
            showNotice(`☁️ ${gameState.players[d.debtor]} 捲入其他勝負，債務自動結帳。`);
        } else {
            // Scenario B: Neutral Stay
            newPendingList.push(d);
        }
    });

    // Handle Unabsorbed Winner Pairs (New Pends)
    roundPairs.forEach(p => {
        if (!p.absorbed) {
            newPendingList.push({
                creditor: p.w,
                debtor: p.l,
                amount: baseAmount
            });
        }
    });

    gameState.pendingDebts = newPendingList;

    // --- Dealer State Update ---
    const isDealerWinning = winners.includes(gameState.dealerIndex);
    if (isDealerWinning) {
        gameState.dealerStreak += 1;
    } else {
        if (gameState.dealerIndex === 3) gameState.roundIndex = (gameState.roundIndex + 1) % 4;
        gameState.dealerIndex = (gameState.dealerIndex + 1) % 4;
        gameState.dealerStreak = 0;
    }

    gameState.history.push({
        round: gameState.history.length + 1,
        winner: winners.map(i => gameState.players[i]).join(' & '),
        loser: loseIdx === -1 ? "三家" : gameState.players[loseIdx],
        tai: totalFans,
        amount: baseAmount * (loseIdx === -1 ? 3 : 1),
        remark: `${winners.length > 1 ? '一炮多響 | ' : ''}${isDealerWinning ? '連莊 | ' : ''}${loseIdx === -1 ? '自摸' : '出銃'}`
    });

    save();
    showNotice('入帳成功');
    clearCalcSelections();
}

function toggleManualModal(show) {
    document.getElementById('manual-modal').classList.toggle('active', show);
}

function submitManualAdjustment() {
    const payer = parseInt(document.getElementById('adj-payer').value);
    const payee = parseInt(document.getElementById('adj-payee').value);
    const amt = parseInt(document.getElementById('adj-amount').value);
    const remark = document.getElementById('adj-remark').value || "手動平帳";

    if (payer === payee) return showNotice('付款人與收款人不可相同');
    if (isNaN(amt) || amt <= 0) return showNotice('請輸入有效金額');

    pushHistory();
    gameState.balances[payer] -= amt;
    gameState.balances[payee] += amt;

    gameState.history.push({
        round: '平帳',
        winner: gameState.players[payee],
        loser: gameState.players[payer],
        tai: "-",
        amount: amt,
        remark: `⚖️ ${remark}`
    });

    save();
    toggleManualModal(false);
    showNotice('平帳成功');
}

function saveSpecialSettings() {
    gameState.settings.base = parseInt(document.getElementById('base-val').value);
    gameState.settings.rate = parseInt(document.getElementById('rate-val').value);
    
    gameState.players = [
        document.getElementById('p1-val').value.trim() || '玩家A',
        document.getElementById('p2-val').value.trim() || '玩家B',
        document.getElementById('p3-val').value.trim() || '玩家C',
        document.getElementById('p4-val').value.trim() || '玩家D'
    ];
    
    save();
    renderStaticHTML();
    updateAllUI();
    showNotice('設定及玩家名稱已生效');
}

function syncFansToCalc(val) {
    const v = parseInt(val) || 0;
    document.getElementById('manual-tai-input').value = v;
    updateAllUI();
}

let currentInstantType = '';
function openInstantModal(type) {
    currentInstantType = type;
    const title = document.getElementById('instant-modal-title');
    const desc = document.getElementById('instant-modal-desc');
    const list = document.getElementById('instant-player-list');
    
    title.innerText = type;
    if (type === '追' || type === '詐胡') {
        desc.innerText = '誰人賠款 (Payer)？';
    } else {
        desc.innerText = '誰人收費 (Winner)？';
    }
    
    list.innerHTML = gameState.players.map((p, i) => `
        <button onclick="recordInstantPay(${i})" class="p-4 bg-slate-50 hover:bg-mahjong hover:text-white rounded-2xl font-black transition-all text-left flex justify-between items-center group">
            <span>${p}</span>
            <i class="fa-solid fa-chevron-right opacity-0 group-hover:opacity-100 transition-opacity"></i>
        </button>
    `).join('');
    
    toggleInstantModal(true);
}

function toggleInstantModal(show) {
    document.getElementById('instant-modal').classList.toggle('active', show);
}

function recordInstantPay(playerIdx) {
    const type = currentInstantType;
    const base = gameState.settings.base;
    const rate = gameState.settings.rate;
    
    pushHistory();
    
    let amountPerPerson = 0;
    let remark = "";
    let winner = "-";
    let loser = "-";
    
    if (type === '追') {
        amountPerPerson = base;
        loser = gameState.players[playerIdx];
        winner = "其餘三家";
        remark = `🏃 追 (賠全家 $${base})`;
        gameState.balances[playerIdx] -= (amountPerPerson * 3);
        [0,1,2,3].forEach(i => { if(i !== playerIdx) gameState.balances[i] += amountPerPerson; });
    } else if (type === '詐胡') {
        amountPerPerson = 30 * rate;
        loser = gameState.players[playerIdx];
        winner = "其餘三家";
        remark = `🚫 詐胡 (賠全家 $${amountPerPerson})`;
        gameState.balances[playerIdx] -= (amountPerPerson * 3);
        [0,1,2,3].forEach(i => { if(i !== playerIdx) gameState.balances[i] += amountPerPerson; });
    } else {
        // 暗槓, 一台草, 一台花 (Receiver is playerIdx)
        winner = gameState.players[playerIdx];
        loser = "其餘三家";
        if (type === '暗槓') { amountPerPerson = base; remark = `🌑 暗槓 (收三家 $${base})`; }
        else if (type === '一台草') { amountPerPerson = Math.floor(base / 2); remark = `🌿 一台草 (收三家 $${amountPerPerson})`; }
        else if (type === '一台花') { amountPerPerson = base; remark = `🌸 一台花 (收三家 $${base})`; }
        
        gameState.balances[playerIdx] += (amountPerPerson * 3);
        [0,1,2,3].forEach(i => { if(i !== playerIdx) gameState.balances[i] -= amountPerPerson; });
    }
    
    gameState.history.push({
        round: "即時",
        winner: winner,
        loser: loser,
        tai: (type === '詐胡' ? 30 : "-"),
        amount: amountPerPerson * 3,
        remark: remark
    });
    
    toggleInstantModal(false);
    save();
    updateAllUI();
    showNotice(`${type} 已入帳`);
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-view').forEach(v => v.classList.add('hidden'));
    document.querySelectorAll('.btn-tab').forEach(b => b.classList.remove('active', 'opacity-100'));
    document.querySelectorAll('.btn-tab').forEach(b => b.classList.add('opacity-60'));
    
    document.getElementById(`view-${tabId}`).classList.remove('hidden');
    document.getElementById(`tab-${tabId}`).classList.add('active', 'opacity-100');
    window.scrollTo(0, 0);
}

// --- Settlement (截數) ---
window.settleIndividualDebt = function(debtIndex) {
    const d = gameState.pendingDebts[debtIndex];
    if (!d) return;

    pushHistory();
    
    // Move to Permanent Balances
    gameState.balances[d.creditor] += d.amount;
    gameState.balances[d.debtor] -= d.amount;

    gameState.history.push({
        round: "截數",
        winner: gameState.players[d.creditor],
        loser: gameState.players[d.debtor],
        tai: "-",
        amount: d.amount,
        remark: `⚡ 截數 (結清 ${gameState.players[d.debtor]} -> ${gameState.players[d.creditor]})`
    });

    // Remove from array
    gameState.pendingDebts.splice(debtIndex, 1);

    save();
    showNotice(`已結清一條債務`);
};

document.addEventListener("DOMContentLoaded", init);
