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
        "Medkit (Rare)", "Toolbox (Common)", "Flashlight (Ultra Rare)", 
        "Key (Skeleton)", "Map (Red Twine)", "Firecrackers",
        "Broken Key", "Toolbox (Engineer's)", "Medkit (Emergency)"
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
    easy: { color: "#4ecdc4", icon: "⭐", name: "Easy", failShots: 3 },
    medium: { color: "#ffd93d", icon: "⭐⭐", name: "Medium", failShots: 2 },
    hard: { color: "#ff8e8e", icon: "⭐⭐⭐", name: "Hard", failShots: 1 },
    extreme: { color: "#ff4444", icon: "💀", name: "Extreme", failShots: 1 }
};

const drinkingRules = {
    survivor: [
        "Take a sip when you miss a skill check",
        "Take a drink when you get hooked for the first time",
        "Take a sip when the killer finds you in a locker",
        "Everyone drinks when the killer gets a 4k",
        "Take a sip when you sandbag a teammate (accidentally)",
        "Take a drink for every gen that pops while you're in chase"
    ],
    killer: [
        "Take a sip when a survivor teabags at a pallet",
        "Take a drink when you lose a survivor in a chase",
        "Everyone drinks when a survivor flashlight saves",
        "Take a sip when you get gen rushed",
        "Take a drink for every DS/Dead Hard you eat",
        "Everyone cheers (drink) when you get a 4k"
    ]
};

// ==================== PLAYER SYSTEM ====================
let players = [
    { id: 1, name: "Player 1", score: 0 }
];
let currentPlayerIndex = 0;
let currentChallenge = null;
let currentMode = "drinking";

// ==================== DOM ELEMENTS ====================
const roleFilter = document.getElementById('roleFilter');
const difficultyFilter = document.getElementById('difficultyFilter');
const generateBtn = document.getElementById('generateBtn');
const completeBtn = document.getElementById('completeChallengeBtn');
const failBtn = document.getElementById('failChallengeBtn');
const roleBadge = document.getElementById('roleBadge');
const challengeTitle = document.getElementById('challengeTitle');
const challengeDescription = document.getElementById('challengeDescription');
const perksList = document.getElementById('perksList');
const itemsList = document.getElementById('itemsList');
const drinkingRulesDiv = document.getElementById('drinkingRules');
const drinkList = document.getElementById('drinkList');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');
const difficultyBadge = document.getElementById('difficultyBadge');
const currentPlayerNum = document.getElementById('currentPlayerNum');
const currentPlayerName = document.getElementById('currentPlayerName');
const currentPlayerScore = document.getElementById('currentPlayerScore');
const prevPlayerBtn = document.getElementById('prevPlayerBtn');
const nextPlayerBtn = document.getElementById('nextPlayerBtn');
const addPlayerBtn = document.getElementById('addPlayerBtn');
const removePlayerBtn = document.getElementById('removePlayerBtn');
const failurePenaltySpan = document.getElementById('failurePenalty');

// ==================== HELPER FUNCTIONS ====================
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
    
    return pool;
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

function updateUIForPlayer() {
    const player = players[currentPlayerIndex];
    currentPlayerNum.textContent = currentPlayerIndex + 1;
    currentPlayerName.textContent = player.name;
    currentPlayerScore.textContent = player.score;
}

function addToHistory(entry) {
    const historyListEl = document.getElementById('historyList');
    const li = document.createElement('li');
    li.innerHTML = `[${entry.timestamp}] ${entry.role} - ${entry.challenge} ${entry.mode === 'drinking' ? '🍺' : '🎯'} +${entry.points}pts ${entry.player ? `(${entry.player})` : ''}`;
    historyListEl.insertBefore(li, historyListEl.firstChild);
    if (historyListEl.children.length > 10) {
        historyListEl.removeChild(historyListEl.lastChild);
    }
}

function addPointsToCurrentPlayer(points) {
    players[currentPlayerIndex].score += points;
    currentPlayerScore.textContent = players[currentPlayerIndex].score;
    
    // Animation
    currentPlayerScore.style.transform = 'scale(1.2)';
    setTimeout(() => { currentPlayerScore.style.transform = 'scale(1)'; }, 300);
}

function generateChallenge() {
    const pool = getFilteredChallenges();
    if (pool.length === 0) {
        challengeTitle.textContent = "No Challenges!";
        challengeDescription.textContent = "Change your filters - no challenges match!";
        return;
    }
    
    const challenge = getRandomItem(pool);
    const isSurvivor = challenges.survivor.includes(challenge) || (roleFilter.value === "mixed" && Math.random() > 0.5);
    const role = isSurvivor ? 'survivor' : 'killer';
    const roleName = isSurvivor ? 'SURVIVOR' : 'KILLER';
    const build = getRandomBuild(role);
    
    // Store current challenge
    currentChallenge = { ...challenge, role, roleName, build };
    
    // Update display
    roleBadge.textContent = roleName;
    roleBadge.style.background = isSurvivor ? '#4ecdc4' : '#ff6b6b';
    challengeTitle.textContent = challenge.title;
    challengeDescription.textContent = challenge.desc;
    
    // Difficulty badge
    const diff = difficultyConfig[challenge.difficulty];
    difficultyBadge.innerHTML = `${diff.icon} ${diff.name} ${diff.icon}`;
    difficultyBadge.style.background = diff.color;
    difficultyBadge.style.display = 'inline-block';
    
    // Update builds
    perksList.innerHTML = build.perks.map(perk => `<div class="perk-item">✨ ${perk}</div>`).join('');
    itemsList.innerHTML = build.items.map(item => `<div class="item-item">📦 ${item}</div>`).join('');
    
    // Update failure penalty display
    failurePenaltySpan.innerHTML = `Easy=3 shots, Hard=1 shot (Current: ${diff.failShots} shot${diff.failShots > 1 ? 's' : ''} on fail)`;
    
    // Drinking rules
    if (currentMode === 'drinking') {
        const rules = drinkingRules[role];
        const selectedRules = [];
        for(let i = 0; i < 3; i++) {
            selectedRules.push(getRandomItem(rules));
        }
        drinkList.innerHTML = selectedRules.map(rule => `<li>🍺 ${rule}</li>`).join('');
        drinkingRulesDiv.style.display = 'block';
    } else {
        drinkingRulesDiv.style.display = 'none';
    }
}

function completeChallenge() {
    if (!currentChallenge) return;
    
    const points = currentChallenge.points;
    addPointsToCurrentPlayer(points);
    
    addToHistory({
        timestamp: new Date().toLocaleTimeString(),
        role: currentChallenge.roleName,
        challenge: currentChallenge.title,
        mode: currentMode,
        points: points,
        player: players[currentPlayerIndex].name
    });
    
    // Show notification
    showNotification(`✅ +${points} points for "${currentChallenge.title}"!`);
    
    generateChallenge();
}

function failChallenge() {
    if (!currentChallenge) return;
    
    const diff = difficultyConfig[currentChallenge.difficulty];
    const shots = diff.failShots;
    
    let drinkMessage = "";
    if (currentMode === "drinking") {
        drinkMessage = `🍺 ${players[currentPlayerIndex].name} must take ${shots} SHOT${shots > 1 ? 'S' : ''}! 🍺`;
        showNotification(drinkMessage, "fail");
    } else {
        drinkMessage = `💀 Challenge failed! ${shots} drink penalty in drinking mode! 💀`;
        showNotification(drinkMessage, "fail");
    }
    
    addToHistory({
        timestamp: new Date().toLocaleTimeString(),
        role: currentChallenge.roleName,
        challenge: `${currentChallenge.title} (FAILED)`,
        mode: currentMode,
        points: 0,
        player: players[currentPlayerIndex].name
    });
    
    generateChallenge();
}

function showNotification(message, type = "success") {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

// ==================== PLAYER MANAGEMENT ====================
function updatePlayerUI() {
    currentPlayerNum.textContent = currentPlayerIndex + 1;
    currentPlayerName.textContent = players[currentPlayerIndex].name;
    currentPlayerScore.textContent = players[currentPlayerIndex].score;
}

function nextPlayer() {
    if (players.length === 0) return;
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
    updatePlayerUI();
    generateChallenge();
}

function prevPlayer() {
    if (players.length === 0) return;
    currentPlayerIndex = (currentPlayerIndex - 1 + players.length) % players.length;
    updatePlayerUI();
    generateChallenge();
}

function addPlayer() {
    if (players.length >= 5) {
        showNotification("Maximum 5 players reached!", "fail");
        return;
    }
    const newId = Math.max(...players.map(p => p.id), 0) + 1;
    players.push({ id: newId, name: `Player ${newId}`, score: 0 });
    if (players.length === 1) currentPlayerIndex = 0;
    updatePlayerUI();
    showNotification(`➕ Added Player ${newId}`);
}

function removePlayer() {
    if (players.length <= 1) {
        showNotification("Cannot remove last player!", "fail");
        return;
    }
    const removed = players.splice(currentPlayerIndex, 1)[0];
    if (currentPlayerIndex >= players.length) currentPlayerIndex = players.length - 1;
    updatePlayerUI();
    showNotification(`➖ Removed ${removed.name}`);
    generateChallenge();
}

// ==================== EVENT LISTENERS ====================
generateBtn.addEventListener('click', generateChallenge);
completeBtn.addEventListener('click', completeChallenge);
failBtn.addEventListener('click', failChallenge);
clearHistoryBtn.addEventListener('click', () => {
    document.getElementById('historyList').innerHTML = '';
});

roleFilter.addEventListener('change', generateChallenge);
difficultyFilter.addEventListener('change', generateChallenge);

// Mode buttons
document.querySelectorAll('.mode-btn-small').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn-small').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        generateChallenge();
    });
});

// Player controls
prevPlayerBtn.addEventListener('click', prevPlayer);
nextPlayerBtn.addEventListener('click', nextPlayer);
addPlayerBtn.addEventListener('click', addPlayer);
removePlayerBtn.addEventListener('click', removePlayer);

// Keyboard shortcuts
document.addEventListener('keypress', (e) => {
    if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        generateChallenge();
    }
    if (e.key === 'c' || e.key === 'C') {
        completeChallenge();
    }
    if (e.key === 'f' || e.key === 'F') {
        failChallenge();
    }
});

// Initial load
generateChallenge();
updatePlayerUI();
