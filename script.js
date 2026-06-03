// Game Data - EXPANDED with 15+ challenges per role
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

// EXPANDED CHALLENGES - 16 per role now
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

// EXPANDED DRINKING RULES
const drinkingRules = {
    survivor: [
        { rule: "Take a sip when you miss a skill check", intensity: "sip" },
        { rule: "Take a drink when you get hooked for the first time", intensity: "drink" },
        { rule: "Finish your drink if you die on first hook", intensity: "finish" },
        { rule: "Take a sip when the killer finds you in a locker", intensity: "sip" },
        { rule: "Everyone drinks when the killer gets a 4k", intensity: "drink" },
        { rule: "Take a shot if you get downed within 10 seconds of being unhooked", intensity: "shot" },
        { rule: "Take a sip when you sandbag a teammate (accidentally)", intensity: "sip" },
        { rule: "Finish your drink if you escape through hatch", intensity: "finish" },
        { rule: "Take a drink for every gen that pops while you're in chase", intensity: "drink" },
        { rule: "Shotgun a beer if you DC", intensity: "shotgun" }
    ],
    killer: [
        { rule: "Take a sip when a survivor teabags at a pallet", intensity: "sip" },
        { rule: "Take a drink when you lose a survivor in a chase", intensity: "drink" },
        { rule: "Take a shot if all gens pop within 5 minutes", intensity: "shot" },
        { rule: "Everyone drinks when a survivor flashlight saves", intensity: "drink" },
        { rule: "Take a sip when you get gen rushed", intensity: "sip" },
        { rule: "Finish your drink if 0 kills", intensity: "finish" },
        { rule: "Take a drink for every DS/Dead Hard you eat", intensity: "drink" },
        { rule: "Everyone cheers (drink) when you get a 4k", intensity: "drink" },
        { rule: "Waterfall your drink if you get blinded at a pallet", intensity: "finish" },
        { rule: "Take a shot if all 4 escape", intensity: "shot" }
    ]
};

// Difficulty colors and icons
const difficultyConfig = {
    easy: { color: "#4ecdc4", icon: "⭐", name: "Easy" },
    medium: { color: "#ffd93d", icon: "⭐⭐", name: "Medium" },
    hard: { color: "#ff8e8e", icon: "⭐⭐⭐", name: "Hard" },
    extreme: { color: "#ff4444", icon: "💀", name: "Extreme" }
};

const intensityIcons = { sip: "🥤", drink: "🍺", shot: "🥃", finish: "💀", shotgun: "🍻" };

// State
let currentMode = 'normal';
let history = [];
let totalPoints = 0;

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
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
const pointsDisplay = document.getElementById('pointsDisplay');
const pointsTotal = document.getElementById('pointsTotal');
const completeChallengeBtn = document.getElementById('completeChallengeBtn');

// Helper Functions
function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getImagePath(category, name) {
    // IMPORTANT: Replace this path with where you store your icon images
    // Example structure: images/perks/Dead Hard.png
    // You'll need to download icons and place them in folders
    
    const sanitizedName = name.replace(/[\(\)]/g, '').replace(/\s+/g, ' ').trim();
    
    // For actual images, you'd want to map names to filenames
    // Since you're getting Galaxy icons, the filenames should match perk names
    return `images/${category}/${encodeURIComponent(sanitizedName)}.png`;
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

function renderPerkWithImage(perkName, role) {
    // If you have images, use <img> tag; otherwise fallback to text
    // Uncomment the image version when you have icon files
    
    // Image version (uncomment when you have icons):
    /*
    return `
        <div class="perk-item">
            <img src="${getImagePath(role === 'survivor' ? 'perks_survivor' : 'perks_killer', perkName)}" 
                 alt="${perkName}" 
                 class="perk-icon"
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='inline';">
            <span style="display:none;">✨ ${perkName}</span>
            <span>${perkName}</span>
        </div>
    `;
    */
    
    // Text fallback version (works without images):
    return `<div class="perk-item">✨ ${perkName}</div>`;
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
    
    // Update difficulty badge
    const diff = difficultyConfig[challenge.difficulty];
    difficultyBadge.innerHTML = `${diff.icon} ${diff.name} ${diff.icon}`;
    difficultyBadge.style.background = diff.color;
    difficultyBadge.style.display = 'inline-block';
    
    // Update perks with images if available
    perksList.innerHTML = build.perks.map(perk => `<div class="perk-item">✨ ${perk}</div>`).join('');
    itemsList.innerHTML = build.items.map(item => `<div class="item-item">📦 ${item}</div>`).join('');
    
    // Store current challenge points for completion
    window.currentChallengePoints = challenge.points;
    window.currentChallengeTitle = challenge.title;
    
    // Drinking mode specific
    if(currentMode === 'drinking') {
        const drinkRules = drinkingRules[role];
        const selectedRules = [];
        const usedIndices = new Set();
        while(selectedRules.length < 3 && selectedRules.length < drinkRules.length) {
            const idx = Math.floor(Math.random() * drinkRules.length);
            if(!usedIndices.has(idx)) {
                usedIndices.add(idx);
                const rule = drinkRules[idx];
                selectedRules.push(`<li>${intensityIcons[rule.intensity]} ${rule.rule}</li>`);
            }
        }
        drinkList.innerHTML = selectedRules.join('');
        drinkingRulesDiv.style.display = 'block';
    } else {
        drinkingRulesDiv.style.display = 'none';
    }
    
    // Add to history
    const historyEntry = {
        timestamp: new Date().toLocaleTimeString(),
        role: roleName,
        challenge: challenge.title,
        mode: currentMode,
        points: challenge.points
    };
    history.unshift(historyEntry);
    if(history.length > 10) history.pop();
    updateHistory();
    
    return { role, challenge, build };
}

function updateHistory() {
    historyList.innerHTML = history.map(entry => 
        `<li>[${entry.timestamp}] ${entry.role} - ${entry.challenge} ${entry.mode === 'drinking' ? '🍺' : '🎯'} +${entry.points}pts</li>`
    ).join('');
}

function clearHistory() {
    history = [];
    updateHistory();
}

function addPoints(points) {
    totalPoints += points;
    pointsTotal.textContent = totalPoints;
    
    // Animation
    pointsDisplay.style.transform = 'scale(1.2)';
    setTimeout(() => { pointsDisplay.style.transform = 'scale(1)'; }, 300);
}

function completeChallenge() {
    if(window.currentChallengePoints) {
        addPoints(window.currentChallengePoints);
        // Optional: Show notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.innerHTML = `✅ +${window.currentChallengePoints} points for "${window.currentChallengeTitle}"!`;
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2000);
        
        // Generate new challenge automatically
        generateChallenge();
    }
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
if(completeChallengeBtn) {
    completeChallengeBtn.addEventListener('click', completeChallenge);
}

// Keyboard shortcuts
document.addEventListener('keypress', (e) => {
    if(e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        generateChallenge();
    }
    if(e.key === 'c' || e.key === 'C') {
        completeChallenge();
    }
});

// Initial generation
generateChallenge();
