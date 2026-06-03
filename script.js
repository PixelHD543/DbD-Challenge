// Game Data
const survivors = {
    perks: [
        "Dead Hard", "Borrowed Time", "Decisive Strike", "Sprint Burst", 
        "Unbreakable", "Iron Will", "Prove Thyself", "Adrenaline", 
        "Windows of Opportunity", "Lithe", "Dance With Me", "Head On",
        "Bond", "Empathy", "We'll Make It", "Botany Knowledge"
    ],
    items: [
        "Medkit (Rare)", "Toolbox (Common)", "Flashlight (Ultra Rare)", 
        "Key (Skeleton)", "Map (Red Twine)", "Firecrackers"
    ]
};

const killers = {
    perks: [
        "NOED", "Pop Goes the Weasel", "Barbecue & Chili", "Ruin", 
        "Corrupt Intervention", "Save the Best for Last", "Enduring", 
        "Spirit Fury", "Infectious Fright", "Make Your Choice", 
        "Devour Hope", "Undying", "Tinkerer", "Discordance"
    ],
    items: [
        "Mori (Ebony)", "Add-ons (Ultra Rare)", "Iridescent Add-ons",
        "Offering (Map)", "Offering (Bloodpoints)"
    ]
};

const challenges = {
    survivor: [
        { title: "Altruism Guardian", desc: "Safe unhook 3 survivors before any generators are completed" },
        { title: "Stealth Master", desc: "Complete 1 full generator without being detected by the killer" },
        { title: "Loop King", desc: "Keep the killer in a chase for 90 seconds without being hit" },
        { title: "Gen Jockey", desc: "Repair 3 generators solo in a single match" },
        { title: "Sabo Squad", desc: "Sabotage 3 hooks before the killer can use them" },
        { title: "Flashlight Savior", desc: "Blind the killer while they're carrying a survivor" },
        { title: "Exit Gate Hero", desc: "Open the exit gate and wait for all survivors to escape before leaving" },
        { title: "No Mither Warrior", desc: "Escape without being healed once" ]
    ],
    killer: [
        { title: "Mori Master", desc: "Morii all 4 survivors in a single match" },
        { title: "Gen Patrol", desc: "Damage 10 generators in one match" },
        { title: "3-Gen God", desc: "Defend a 3-gen situation for 10 minutes and win" },
        { title: "Hook Hugger", desc: "Hook each survivor twice before sacrificing anyone" },
        { title: "Stealth Assassin", desc: "Get 4 grabs off survivors without entering chase" },
        { title: "End Game Nightmare", desc: "Sacrifice 2 survivors after gates are powered" },
        { title: "Perkless Wonder", desc: "Get a 4k without using any perks" },
        { title: "Hatch Denier", desc: "Close the hatch and sacrifice the last survivor" }
    ]
};

const drinkingRules = {
    survivor: [
        "Take a sip when you miss a skill check",
        "Take a drink when you get hooked for the first time",
        "Finish your drink if you die on first hook",
        "Take a sip when the killer finds you in a locker",
        "Everyone drinks when the killer gets a 4k",
        "Take a shot if you get downed within 10 seconds of being unhooked",
        "Take a sip when you sandbag a teammate (accidentally)",
        "Finish your drink if you escape through hatch"
    ],
    killer: [
        "Take a sip when a survivor teabags at a pallet",
        "Take a drink when you lose a survivor in a chase",
        "Take a shot if all gens pop within 5 minutes",
        "Everyone drinks when a survivor flashlight saves",
        "Take a sip when you get gen rushed",
        "Finish your drink if 0 kills",
        "Take a drink for every DS/Dead Hard you eat",
        "Everyone cheers (drink) when you get a 4k"
    ]
};

// State
let currentMode = 'normal';
let history = [];

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const challengeCard = document.getElementById('challengeCard');
const roleBadge = document.getElementById('roleBadge');
const challengeTitle = document.getElementById('challengeTitle');
const challengeDescription = document.getElementById('challengeDescription');
const perksList = document.getElementById('perksList');
const itemsList = document.getElementById('itemsList');
const drinkingRulesDiv = document.getElementById('drinkingRules');
const drinkList = document.getElementById('drinkList');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

// Helper Functions
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getRandomBuild(role) {
    const data = role === 'survivor' ? survivors : killers;
    const perks = [];
    const items = [];
    
    // Get 4 random unique perks
    while(perks.length < 4) {
        const perk = getRandomItem(data.perks);
        if(!perks.includes(perk)) perks.push(perk);
    }
    
    // Get 2 random items
    for(let i = 0; i < 2; i++) {
        items.push(getRandomItem(data.items));
    }
    
    return { perks, items };
}

function generateChallenge() {
    const isSurvivor = Math.random() > 0.5;
    const role = isSurvivor ? 'survivor' : 'killer';
    const roleName = isSurvivor ? 'SURVIVOR' : 'KILLER';
    const challengePool = challenges[role];
    const challenge = getRandomItem(challengePool);
    const build = getRandomBuild(role);
    
    // Update display
    roleBadge.textContent = roleName;
    roleBadge.style.background = isSurvivor ? '#4ecdc4' : '#ff6b6b';
    challengeTitle.textContent = challenge.title;
    challengeDescription.textContent = challenge.desc;
    
    // Update perks
    perksList.innerHTML = build.perks.map(perk => `<div class="perk-item">✨ ${perk}</div>`).join('');
    itemsList.innerHTML = build.items.map(item => `<div class="item-item">📦 ${item}</div>`).join('');
    
    // Drinking mode specific
    if(currentMode === 'drinking') {
        const drinkRules = drinkingRules[role];
        const selectedRules = [];
        for(let i = 0; i < 3; i++) {
            selectedRules.push(getRandomItem(drinkRules));
        }
        drinkList.innerHTML = selectedRules.map(rule => `<li>${rule}</li>`).join('');
        drinkingRulesDiv.style.display = 'block';
    } else {
        drinkingRulesDiv.style.display = 'none';
    }
    
    // Add to history
    const historyEntry = {
        timestamp: new Date().toLocaleTimeString(),
        role: roleName,
        challenge: challenge.title,
        mode: currentMode
    };
    history.unshift(historyEntry);
    if(history.length > 10) history.pop();
    updateHistory();
    
    return { role, challenge, build };
}

function updateHistory() {
    historyList.innerHTML = history.map(entry => 
        `<li>[${entry.timestamp}] ${entry.role} - ${entry.challenge} ${entry.mode === 'drinking' ? '🍺' : '🎯'}</li>`
    ).join('');
}

function clearHistory() {
    history = [];
    updateHistory();
}

// Mode switching
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentMode = btn.dataset.mode;
        generateChallenge();
    });
});

// Event Listeners
generateBtn.addEventListener('click', generateChallenge);
clearHistoryBtn.addEventListener('click', clearHistory);

// Initial generation
generateChallenge();

// Keyboard shortcut
document.addEventListener('keypress', (e) => {
    if(e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        generateChallenge();
    }
});
