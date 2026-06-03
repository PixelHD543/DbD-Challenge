// ==================== GAME DATA ====================
const survivors = {
    perks: [
        "Dead Hard", "Borrowed Time", "Decisive Strike", "Sprint Burst", 
        "Unbreakable", "Iron Will", "Prove Thyself", "Adrenaline", 
        "Windows of Opportunity", "Lithe", "Dance With Me", "Head On",
        "Bond", "Empathy", "We'll Make It", "Botany Knowledge",
        "Circle of Healing", "Off the Record", "Built to Last", "Flashbang"
    ],
    items: [
        "Medkit", "Toolbox", "Map", "Rainbow Map", "Ranger's Aid Kit", "Broken Key"
    ]
};

const killers = {
    perks: [
        "NOED", "Pop Goes the Weasel", "Barbecue & Chili", "Ruin", 
        "Corrupt Intervention", "Save the Best for Last", "Enduring", 
        "Spirit Fury", "Infectious Fright", "Make Your Choice", 
        "Devour Hope", "Undying", "Tinkerer", "Discordance",
        "Lethal Pursuer", "Pain Resonance", "Deadlock", "No Way Out"
    ],
    items: [
        "Mori (Ebony)", "Add-ons (Ultra Rare)", "Iridescent Add-ons",
        "Offering (Map)", "Offering (Bloodpoints)", "Offering (Survivor Pudding)"
    ]
};

const challenges = {
    survivor: [
        { title: "Altruism Guardian", desc: "Safe unhook 3 survivors before any generators are completed", difficulty: "hard", points: 50 },
        { title: "Stealth Master", desc: "Complete 1 full generator without being detected by the killer", difficulty: "medium", points: 30 },
        { title: "Loop King", desc: "Keep the killer in a chase for 90 seconds without being hit", difficulty: "hard", points: 50 },
        { title: "Gen Jockey", desc: "Repair 3 generators solo in a single match", difficulty: "medium", points: 35 },
        { title: "Sabo Squad", desc: "Sabotage 3 hooks before the killer can use them", difficulty: "hard", points: 50 },
        { title: "Flashlight Savior", desc: "Blind the killer while they're carrying a survivor", difficulty: "extreme", points: 75 },
        { title: "Exit Gate Hero", desc: "Open the exit gate and wait for all survivors to escape before leaving", difficulty: "medium", points: 30 },
        { title: "No Mither Warrior", desc: "Escape without being healed once", difficulty: "extreme", points: 100 },
        { title: "Chest Goblin", desc: "Open 3 chests in a single match", difficulty: "easy", points: 15 },
        { title: "Totem Hunter", desc: "Cleanse 3 totems before any generators are completed", difficulty: "medium", points: 35 },
        { title: "Body Blocker", desc: "Take a protection hit that would have downed a teammate", difficulty: "hard", points: 50 },
        { title: "Houdini", desc: "Escape the killer's grasp twice in one chase", difficulty: "extreme", points: 80 },
        { title: "Medic", desc: "Heal 4 health states on other survivors", difficulty: "easy", points: 20 },
        { title: "Distraction", desc: "Get the killer to chase you for 3 generators worth of time", difficulty: "hard", points: 55 },
        { title: "Sole Survivor", desc: "Be the last survivor and escape through the exit gate (not hatch)", difficulty: "extreme", points: 100 },
        { title: "Boon Buddy", desc: "Bless a hex totem and have teammates use it 3 times", difficulty: "medium", points: 40 }
    ],
    killer: [
        { title: "Mori Master", desc: "Mori all 4 survivors in a single match", difficulty: "extreme", points: 100 },
        { title: "Gen Patrol", desc: "Damage 10 generators in one match", difficulty: "medium", points: 35 },
        { title: "3-Gen God", desc: "Defend a 3-gen situation for 10 minutes and win", difficulty: "hard", points: 60 },
        { title: "Hook Hugger", desc: "Hook each survivor twice before sacrificing anyone", difficulty: "hard", points: 55 },
        { title: "Stealth Assassin", desc: "Get 4 grabs off survivors without entering chase", difficulty: "extreme", points: 85 },
        { title: "End Game Nightmare", desc: "Sacrifice 2 survivors after gates are powered", difficulty: "hard", points: 50 },
        { title: "Perkless Wonder", desc: "Get a 4k without using any perks", difficulty: "extreme", points: 100 },
        { title: "Hatch Denier", desc: "Close the hatch and sacrifice the last survivor", difficulty: "medium", points: 40 },
        { title: "Basement Party", desc: "Sacrifice 2 survivors in the basement", difficulty: "easy", points: 20 },
        { title: "Pallet Eater", desc: "Break 8 pallets in a single match", difficulty: "easy", points: 15 },
        { title: "Tunnel Vision", desc: "Sacrifice the obsession before any other survivor", difficulty: "medium", points: 30 },
        { title: "Hex Guardian", desc: "Defend your hex totem and get 2 kills before it's cleansed", difficulty: "hard", points: 50 },
        { title: "Merciless", desc: "Get a 4k with at least 8 hook stages", difficulty: "hard", points: 60 },
        { title: "Jump Scare", desc: "Hit a survivor within 5 seconds of exiting stealth", difficulty: "medium", points: 35 },
        { title: "Slug Race", desc: "Down all 4 survivors at once (no hooks)", difficulty: "extreme", points: 90 },
        { title: "Sweatshop", desc: "Get 12 unique hook actions before gates open", difficulty: "hard", points: 65 }
    ]
};

const difficultyConfig = {
    easy: { color: "#4ecdc4", icon: "⭐", name: "EASY", failShots: 3 },
    medium: { color: "#ffd93d", icon: "⭐⭐", name: "MEDIUM", failShots: 2 },
    hard: { color: "#ff8e8e", icon: "⭐⭐⭐", name: "HARD", failShots: 1 },
    extreme: { color: "#ff4444", icon: "💀", name: "EXTREME", failShots: 1 }
};

const drinkingRules = {
    survivor: [
        "Take a sip when you miss a skill check",
        "Take a drink when you get hooked for the first time",
        "Take a sip when the killer finds you in a locker",
        "Everyone drinks when the killer gets a 4k",
        "Take a sip when you sandbag a teammate",
        "Take a drink for every gen that pops while in chase"
    ],
    killer: [
        "Take a sip when a survivor teabags at a pallet",
        "Take a drink when you lose a survivor in a chase",
        "Everyone drinks when a survivor flashlight saves",
        "Take a sip when you get gen rushed",
        "Take a drink for every DS/Dead Hard you eat",
        "Everyone cheers when you get a 4k"
    ]
};

// ==================== IMAGE MAPPING ====================
function getPerkImagePath(perkName, isSurvivor) {
    // Map common perk names to your actual filenames
    const perkMap = {
        "Dead Hard": "IconPerks_GeneticLimits.png", // Using available image
        "Borrowed Time": "IconPerks_scavenger.png",
        "Sprint Burst": "IconPerks_troubleshooter.png",
        "Circle of Healing": "T_UI_iconPerks_AllShakingThunder.png",
        "Unbreakable": "T_UI_iconPerks_ApocalypticIngenuity.png",
        "Windows of Opportunity": "T_UI_iconPerks_ComeAndGetMe.png",
        "Lithe": "T_UI_iconPerks_Conviction.png",
        "Adrenaline": "T_UI_iconPerks_LastStand.png",
        "NOED": "IconPerks_ForcedHesitation.png",
        "Pop Goes the Weasel": "T_UI_iconPerks_ForeverEntwined.png",
        "Ruin": "T_UI_iconPerks_HexOvertureOfDoom.png"
    };
    
    let filename = perkMap[perkName];
    if (!filename) {
        // Fallback: try to generate filename
        filename = `IconPerks_${perkName.replace(/\s/g, '')}.png`;
    }
    
    const folder = isSurvivor ? 'perks_survivor' : 'perks_killer';
    return `images/${folder}/${filename}`;
}

function getItemImagePath(itemName) {
    const itemMap = {
        "Medkit": "iconltems_medkit.png",
        "Toolbox": "iconltems_toolbox.png",
        "Map": "iconltems_map.png",
        "Rainbow Map": "iconltems_rainbowMap.png",
        "Ranger's Aid Kit": "iconltems_rangersAidKit.png",
        "Broken Key": "iconltems_rundownAidKit.png"
    };
    
    let filename = itemMap[itemName];
    if (!filename) filename = "iconltems_toolbox.png";
    return `images/items/${filename}`;
}

// ==================== PLAYER SYSTEM ====================
let players = [];
let nextPlayerId = 1;
let currentMode = "drinking";
let globalHistory = [];

// DOM Elements
const playersGrid = document.getElementById('playersGrid');
const roleFilter = document.getElementById('roleFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const globalGenerateBtn = document.getElementById('globalGenerateBtn');
const addPlayerBtn = document.getElementById('addPlayerBtn');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const historyList = document.getElementById('historyList');

// Helper Functions
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getFilteredChallenges() {
    const role = roleFilter.value;
    const difficulty = difficultyFilter.value;
    
    let pool = [];
    if (role === "survivor") pool = [...challenges.survivor];
    else if (role === "killer") pool = [...challenges.killer];
    else pool = [...challenges.survivor, ...challenges.killer];
    
    if (difficulty !== "all") {
        pool = pool.filter(c => c.difficulty === difficulty);
    }
    
    return pool.length ? pool : [...challenges.survivor, ...challenges.killer];
}

function getRandomBuild(role) {
    const data = role === 'survivor' ? survivors : killers;
    const perks = [];
    const items = [];
    
    while(perks.length < 4) {
        const perk = getRandomItem(data.perks);
        if(!perks.includes(perk)) perks.push(perk);
    }
    
    for(let i = 0; i < 2; i++) {
        items.push(getRandomItem(data.items));
    }
    
    return { perks, items };
}

function generateChallengeForPlayer(player) {
    const pool = getFilteredChallenges();
    const challenge = getRandomItem(pool);
    const isSurvivor = challenges.survivor.includes(challenge);
    const build = getRandomBuild(isSurvivor ? 'survivor' : 'killer');
    
    player.currentChallenge = { ...challenge, isSurvivor, build };
    return player.currentChallenge;
}

function addToHistory(entry) {
    globalHistory.unshift(entry);
    if (globalHistory.length > 20) globalHistory.pop();
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    historyList.innerHTML = globalHistory.map(entry => 
        `<li>[${entry.timestamp}] ${entry.playerName} - ${entry.challenge} ${entry.result === 'FAILED' ? '💀 FAILED 💀' : `✅ +${entry.points}pts`}</li>`
    ).join('');
}

function showNotification(message, type = "success") {
    const notification = document.createElement('div');
    notification.className = `notification ${type === 'fail' ? 'fail' : ''}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// Player Card Rendering
function createDrinkingRulesHTML(role) {
    if (currentMode !== 'drinking') return '';
    const rules = drinkingRules[role];
    const selectedRules = [];
    for(let i = 0; i < 2; i++) {
        selectedRules.push(getRandomItem(rules));
    }
    return `
        <div class="drinking-rules">
            <h4>🍺 DRINKING RULES (This Challenge)</h4>
            <ul>
                ${selectedRules.map(rule => `<li>${rule}</li>`).join('')}
            </ul>
        </div>
    `;
}

function renderPlayerCard(player) {
    if (!player.currentChallenge) {
        generateChallengeForPlayer(player);
    }
    
    const challenge = player.currentChallenge;
    const diff = difficultyConfig[challenge.difficulty];
    const roleClass = challenge.isSurvivor ? 'survivor-badge' : 'killer-badge';
    const roleText = challenge.isSurvivor ? 'SURVIVOR' : 'KILLER';
    
    // Build perks HTML with images
    const perksHTML = challenge.build.perks.map(perk => {
        const imgPath = getPerkImagePath(perk, challenge.isSurvivor);
        return `
            <div class="perk-item">
                <img src="${imgPath}" class="perk-icon" alt="${perk}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                <span style="display:none;">✨</span>
                <span>${perk}</span>
            </div>
        `;
    }).join('');
    
    const itemsHTML = challenge.build.items.map(item => {
        const imgPath = getItemImagePath(item);
        return `
            <div class="perk-item">
                <img src="${imgPath}" class="perk-icon" alt="${item}" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
                <span style="display:none;">📦</span>
                <span>${item}</span>
            </div>
        `;
    }).join('');
    
    return `
        <div class="player-card" data-player-id="${player.id}">
            <div class="player-header">
                <div class="player-name-section">
                    <div class="player-avatar">🔪</div>
                    <div class="player-name">${player.name}</div>
                    <span class="role-badge ${roleClass}">${roleText}</span>
                </div>
                <div class="player-score">
                    <span>🏆</span> ${player.score}
                </div>
                <button class="remove-player-btn" onclick="removePlayer(${player.id})">🗑️</button>
            </div>
            
            <div class="challenge-area">
                <div class="challenge-title">${challenge.title}</div>
                <div class="challenge-desc">${challenge.desc}</div>
                <span class="difficulty" style="background: ${diff.color}">${diff.icon} ${diff.name} ${diff.icon}</span>
                
                <div class="build-section">
                    <h4>🎭 PERKS</h4>
                    <div class="perks-grid">${perksHTML}</div>
                    <h4>📦 ITEMS & ADD-ONS</h4>
                    <div class="items-grid">${itemsHTML}</div>
                </div>
                
                ${createDrinkingRulesHTML(challenge.isSurvivor ? 'survivor' : 'killer')}
                
                <div class="challenge-actions">
                    <button class="btn-pass" onclick="completeChallenge(${player.id})">✓ PASS (+${challenge.points})</button>
                    <button class="btn-fail" onclick="failChallenge(${player.id})">💀 FAIL (${diff.failShots} SHOT${diff.failShots > 1 ? 'S' : ''})</button>
                </div>
            </div>
        </div>
    `;
}

function renderAllPlayers() {
    playersGrid.innerHTML = players.map(p => renderPlayerCard(p)).join('');
}

// Player Management
function addPlayer() {
    if (players.length >= 5) {
        showNotification("Maximum 5 players reached!", "fail");
        return;
    }
    const newPlayer = {
        id: nextPlayerId++,
        name: `SURVIVOR ${nextPlayerId - 1}`,
        score: 0,
        currentChallenge: null
    };
    players.push(newPlayer);
    generateChallengeForPlayer(newPlayer);
    renderAllPlayers();
    showNotification(`➕ Added ${newPlayer.name}`);
}

window.removePlayer = function(playerId) {
    if (players.length <= 1) {
        showNotification("Cannot remove last player!", "fail");
        return;
    }
    const removed = players.find(p => p.id === playerId);
    players = players.filter(p => p.id !== playerId);
    renderAllPlayers();
    showNotification(`➖ Removed ${removed.name}`);
};

window.completeChallenge = function(playerId) {
    const player = players.find(p => p.id === playerId);
    if (!player || !player.currentChallenge) return;
    
    const points = player.currentChallenge.points;
    player.score += points;
    
    addToHistory({
        timestamp: new Date().toLocaleTimeString(),
        playerName: player.name,
        challenge: player.currentChallenge.title,
        points: points,
        result: 'COMPLETED'
    });
    
    showNotification(`✅ ${player.name} +${points} points!`);
    generateChallengeForPlayer(player);
    renderAllPlayers();
};

window.failChallenge = function(playerId) {
    const player = players.find(p => p.id === playerId);
    if (!player || !player.currentChallenge) return;
    
    const diff = difficultyConfig[player.currentChallenge.difficulty];
    const shots = diff.failShots;
    
    if (currentMode === 'drinking') {
        showNotification(`🍺 ${player.name} must take ${shots} SHOT${shots > 1 ? 'S' : '!'} 🍺`, "fail");
    }
    
    addToHistory({
        timestamp: new Date().toLocaleTimeString(),
        playerName: player.name,
        challenge: player.currentChallenge.title,
        points: 0,
        result: 'FAILED'
    });
    
    generateChallengeForPlayer(player);
    renderAllPlayers();
};

function regenerateAllChallenges() {
    players.forEach(player => {
        generateChallengeForPlayer(player);
    });
    renderAllPlayers();
    showNotification("🎲 New challenges for all players!");
}

// Event Listeners
globalGenerateBtn.addEventListener('click', regenerateAllChallenges);
addPlayerBtn.addEventListener('click', addPlayer);
clearHistoryBtn.addEventListener('click', () => {
    globalHistory = [];
    updateHistoryDisplay();
    showNotification("History cleared!");
});

roleFilter.addEventListener('change', () => {
    regenerateAllChallenges();
});

difficultyFilter.addEventListener('change', () => {
    regenerateAllChallenges();
});

document.querySelectorAll('.mode-option').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        regenerateAllChallenges();
        showNotification(`🍺 Mode: ${currentMode.toUpperCase()}`);
    });
});

// Initialize with 2 players
players.push({
    id: nextPlayerId++,
    name: "SURVIVOR 1",
    score: 0,
    currentChallenge: null
});
players.push({
    id: nextPlayerId++,
    name: "SURVIVOR 2",
    score: 0,
    currentChallenge: null
});
players.forEach(p => generateChallengeForPlayer(p));
renderAllPlayers();
