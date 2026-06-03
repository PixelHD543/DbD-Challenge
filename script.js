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
        "Medkit", "Toolbox", "Flashlight", "Map", "Key", "Firecracker"
    ]
};

const killersList = [
    "The Trapper", "The Wraith", "The Hillbilly", "The Nurse", "The Hag",
    "The Shape", "The Doctor", "The Huntress", "The Cannibal", "The Nightmare",
    "The Pig", "The Clown", "The Spirit", "The Legion", "The Plague",
    "The Ghostface", "The Demogorgon", "The Oni", "The Deathslinger", "The Executioner",
    "The Blight", "The Twins", "The Trickster", "The Nemesis", "The Cenobite",
    "The Artist", "The Onryo", "The Dredge", "The MasterMind", "The Knight",
    "The Skull Merchant", "The Singularity", "The Xenomorph", "The Unknown", "The Lich",
    "The Dracula", "The Houndmaster", "The Ghoul"
];

const killerPerks = [
    "NOED", "Pop Goes the Weasel", "Barbecue & Chili", "Ruin", 
    "Corrupt Intervention", "Save the Best for Last", "Enduring", 
    "Spirit Fury", "Infectious Fright", "Make Your Choice", 
    "Devour Hope", "Undying", "Tinkerer", "Discordance",
    "Lethal Pursuer", "Pain Resonance", "Deadlock", "No Way Out"
];

// ==================== FULL IMAGE MAPPING ====================
const survivorPerkMap = {
    "Dead Hard": "iconPerks_DeadHard.png",
    "Borrowed Time": "iconPerks_BorrowedTime.png",
    "Decisive Strike": "iconPerks_DecisiveStrike.png",
    "Sprint Burst": "iconPerks_SprintBurst.png",
    "Unbreakable": "iconPerks_Unbreakable.png",
    "Iron Will": "iconPerks_IronWill.png",
    "Prove Thyself": "iconPerks_ProveThyself.png",
    "Adrenaline": "iconPerks_Adrenaline.png",
    "Windows of Opportunity": "iconPerks_WindowsOfOpportunity.png",
    "Lithe": "iconPerks_Lithe.png",
    "Dance With Me": "iconPerks_DanceWithMe.png",
    "Head On": "iconPerks_HeadOn.png",
    "Bond": "iconPerks_Bond.png",
    "Empathy": "iconPerks_Empathy.png",
    "We'll Make It": "iconPerks_WellMakelt.png",
    "Botany Knowledge": "iconPerks_BotanyKnowledge.png",
    "Circle of Healing": "iconPerks_BoonCircleOfHealing.png",
    "Off the Record": "iconPerks_OffTheRecord.png",
    "Built to Last": "iconPerks_BuiltToLast.png",
    "Flashbang": "iconPerks_Flashbang.png"
};

const killerPerkMap = {
    "NOED": "iconPerks_NoOneEscapesDeath.png",
    "Pop Goes the Weasel": "iconPerks_PopGoesTheWeasel.png",
    "Barbecue & Chili": "iconPerks_BBQAndChili.png",
    "Ruin": "iconPerks_Ruin.png",
    "Corrupt Intervention": "iconPerks_CorruptIntervention.png",
    "Save the Best for Last": "iconPerks_SaveTheBestForLast.png",
    "Enduring": "iconPerks_Enduring.png",
    "Spirit Fury": "iconPerks_SpiritFury.png",
    "Infectious Fright": "iconPerks_InfectiousFright.png",
    "Make Your Choice": "iconPerks_MakeYourChoice.png",
    "Devour Hope": "iconPerks_DevourHope.png",
    "Undying": "iconPerks_HexUndying.png",
    "Tinkerer": "iconPerks_Tinkerer.png",
    "Discordance": "iconPerks_Discordance.png",
    "Lethal Pursuer": "iconPerks_LethalPursuer.png",
    "Pain Resonance": "T_iconPerks_PainResonance.png",
    "Deadlock": "iconPerks_Deadlock.png",
    "No Way Out": "iconPerks_NoWayOut.png"
};

const itemMap = {
    "Medkit": "iconltems_medkit.png",
    "Toolbox": "iconltems_toolbox.png",
    "Flashlight": "iconltems_flashlight.png",
    "Map": "iconltems_map.png",
    "Key": "iconltems_key.png",
    "Firecracker": "iconltems_chineseFirecracker.png"
};

function getKillerPortrait(killerName) {
    const portraitMap = {
        "The Trapper": "K01_TheTrapper_Portrait.png",
        "The Wraith": "K02_TheWraith_Portrait.png",
        "The Hillbilly": "K03_TheHillbilly_Portrait.png",
        "The Nurse": "K04_TheNurse_Portrait.png",
        "The Hag": "K05_TheHag_Portrait.png",
        "The Shape": "K06_TheShape_Portrait.png",
        "The Doctor": "K07_TheDoctor_Portrait.png",
        "The Huntress": "K08_TheHuntress_Portrait.png",
        "The Cannibal": "K09_TheCannibal_Portrait.png",
        "The Nightmare": "K10_TheNightmare_Portrait.png",
        "The Pig": "K11_ThePig_Portrait.png",
        "The Clown": "K12_TheClown_Portrait.png",
        "The Spirit": "K13_TheSpirit_Portrait.png",
        "The Legion": "K14_TheLegion_Portrait.png",
        "The Plague": "K15_ThePlague_Portrait.png",
        "The Ghostface": "K16_TheGhostface_Portrait.png",
        "The Demogorgon": "K17_TheDemogorgon_Portrait.png",
        "The Oni": "K18_TheOni_Portrait.png",
        "The Deathslinger": "K19_TheDeathslinger_Portrait.png",
        "The Executioner": "K20_TheExecutioner_Portrait.png",
        "The Blight": "K21_TheBlight_Portrait.png",
        "The Twins": "K22_TheTwins_Portrait.png",
        "The Trickster": "K23_TheTrickster_Portrait.png",
        "The Nemesis": "K24_TheNemesis_Portrait.png",
        "The Cenobite": "K25_TheCenobite_Portrait.png",
        "The Artist": "K26_TheArtist_Portrait.png",
        "The Onryo": "K27_TheOnryo_Portrait.png",
        "The Dredge": "K28_TheDredge_Portrait.png",
        "The MasterMind": "K29_TheMasterMind_Portrait.png",
        "The Knight": "K30_TheKnight_Portrait.png",
        "The Skull Merchant": "K31_TheSkullMerchant_Portrait.png",
        "The Singularity": "K32_TheSingularity_Portrait.png",
        "The Xenomorph": "K33_TheXenomorph_Portrait.png",
        "The Unknown": "K35_TheUnknown_Portrait.png",
        "The Lich": "K36_TheLich_Portrait.png",
        "The Dracula": "K37_TheDracula_Portrait.png",
        "The Houndmaster": "K38_TheHoundmaster_Portrait.png",
        "The Ghoul": "K39_TheGhoul_Portrait.png"
    };
    return `images/killers/${portraitMap[killerName] || "K01_TheTrapper_Portrait.png"}`;
}

function getPerkImagePath(perkName, isSurvivor) {
    const map = isSurvivor ? survivorPerkMap : killerPerkMap;
    let filename = map[perkName];
    if (!filename) {
        filename = perkName.replace(/\s/g, '') + ".png";
    }
    const folder = isSurvivor ? 'perks_survivor' : 'perks_killer';
    return `images/${folder}/${filename}`;
}

function getItemImagePath(itemName) {
    const filename = itemMap[itemName] || "iconltems_toolbox.png";
    return `images/items/${filename}`;
}

// ==================== CHALLENGES DATA ====================
const survivorChallenges = [
    { title: "Altruism Guardian", desc: "Safe unhook 3 survivors before any generators are completed", difficulty: "hard", points: 50 },
    { title: "Stealth Master", desc: "Complete 1 full generator without being detected by the killer", difficulty: "medium", points: 30 },
    { title: "Loop King", desc: "Keep the killer in a chase for 90 seconds without being hit", difficulty: "hard", points: 50 },
    { title: "Gen Jockey", desc: "Repair 3 generators solo in a single match", difficulty: "medium", points: 35 },
    { title: "Flashlight Savior", desc: "Blind the killer while they're carrying a survivor", difficulty: "extreme", points: 75 },
    { title: "No Mither Warrior", desc: "Escape without being healed once", difficulty: "extreme", points: 100 },
    { title: "Totem Hunter", desc: "Cleanse 3 totems before any generators are completed", difficulty: "medium", points: 35 },
    { title: "Medic", desc: "Heal 4 health states on other survivors", difficulty: "easy", points: 20 },
    { title: "Sole Survivor", desc: "Be the last survivor and escape through the exit gate", difficulty: "extreme", points: 100 },
    { title: "Boon Buddy", desc: "Bless a hex totem and have teammates use it 3 times", difficulty: "medium", points: 40 }
];

const killerChallenges = [
    { title: "Mori Master", desc: "Mori all 4 survivors in a single match", difficulty: "extreme", points: 100 },
    { title: "Gen Patrol", desc: "Damage 10 generators in one match", difficulty: "medium", points: 35 },
    { title: "3-Gen God", desc: "Defend a 3-gen situation for 10 minutes and win", difficulty: "hard", points: 60 },
    { title: "Stealth Assassin", desc: "Get 4 grabs off survivors without entering chase", difficulty: "extreme", points: 85 },
    { title: "Perkless Wonder", desc: "Get a 4k without using any perks", difficulty: "extreme", points: 100 },
    { title: "Basement Party", desc: "Sacrifice 2 survivors in the basement", difficulty: "easy", points: 20 },
    { title: "Hex Guardian", desc: "Defend your hex totem and get 2 kills before it's cleansed", difficulty: "hard", points: 50 },
    { title: "Merciless", desc: "Get a 4k with at least 8 hook stages", difficulty: "hard", points: 60 },
    { title: "Slug Race", desc: "Down all 4 survivors at once (no hooks)", difficulty: "extreme", points: 90 }
];

const difficultyConfig = {
    easy: { color: "#4ecdc4", icon: "⭐", name: "EASY", failShots: 3 },
    medium: { color: "#ffd93d", icon: "⭐⭐", name: "MEDIUM", failShots: 2 },
    hard: { color: "#ff8e8e", icon: "⭐⭐⭐", name: "HARD", failShots: 1 },
    extreme: { color: "#ff4444", icon: "💀", name: "EXTREME", failShots: 1 }
};

const drinkingRules = {
    survivor: [
        "Take a sip when you miss a skill check",
        "Take a drink when you get hooked",
        "Everyone drinks when the killer gets a 4k",
        "Take a sip when you sandbag a teammate",
        "Take a drink when you're the first down"
    ],
    killer: [
        "Take a sip when a survivor teabags",
        "Take a drink when you lose a chase",
        "Everyone drinks when a survivor flashlight saves",
        "Everyone cheers when you get a 4k",
        "Take a sip when a gen pops"
    ]
};

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

function getRandomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

function getRandomKiller() { return getRandomItem(killersList); }

function getRandomBuild(isSurvivor) {
    const perks = [];
    const items = [];
    const perkPool = isSurvivor ? survivors.perks : killerPerks;
    
    while(perks.length < 4) {
        const perk = getRandomItem(perkPool);
        if(!perks.includes(perk)) perks.push(perk);
    }
    
    if(isSurvivor) {
        for(let i = 0; i < 2; i++) items.push(getRandomItem(survivors.items));
    }
    
    return { perks, items };
}

function getFilteredChallenges(isSurvivor) {
    const difficulty = difficultyFilter.value;
    let pool = isSurvivor ? [...survivorChallenges] : [...killerChallenges];
    if (difficulty !== "all") {
        pool = pool.filter(c => c.difficulty === difficulty);
    }
    return pool.length ? pool : (isSurvivor ? survivorChallenges : killerChallenges);
}

function generateChallengeForPlayer(player, isKillerSlot = false) {
    // Force survivor for slots 1-4, killer only for slot 5
    const isSurvivor = !isKillerSlot;
    const pool = getFilteredChallenges(isSurvivor);
    const challenge = getRandomItem(pool);
    const build = getRandomBuild(isSurvivor);
    const killerName = (!isSurvivor) ? getRandomKiller() : null;
    
    player.currentChallenge = { ...challenge, isSurvivor, build, killerName };
    return player.currentChallenge;
}

function addToHistory(entry) {
    globalHistory.unshift(entry);
    if (globalHistory.length > 20) globalHistory.pop();
    historyList.innerHTML = globalHistory.map(e => 
        `<li>[${e.timestamp}] ${e.playerName} - ${e.challenge} ${e.result === 'FAILED' ? '💀 FAILED' : `✅ +${e.points}pts`}</li>`
    ).join('');
}

function showNotification(message, type = "success") {
    const notification = document.createElement('div');
    notification.className = `notification ${type === 'fail' ? 'fail' : ''}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function renderPlayerCard(player, index) {
    if (!player.currentChallenge) generateChallengeForPlayer(player, index === 4);
    
    const challenge = player.currentChallenge;
    const diff = difficultyConfig[challenge.difficulty];
    const isKillerSlot = (index === 4);
    const roleClass = challenge.isSurvivor ? 'survivor-badge' : 'killer-badge';
    const roleText = challenge.isSurvivor ? 'SURVIVOR' : 'KILLER';
    
    // Killer portrait for 5th slot only
    const killerPortraitHTML = (!challenge.isSurvivor && challenge.killerName && isKillerSlot) ? `
        <div class="killer-portrait">
            <img src="${getKillerPortrait(challenge.killerName)}" alt="${challenge.killerName}" class="killer-img" 
                 onerror="this.src='https://via.placeholder.com/100?text=Killer'">
            <div class="killer-name">${challenge.killerName}</div>
        </div>
    ` : '';
    
    const perksHTML = challenge.build.perks.map(perk => {
        const imgPath = getPerkImagePath(perk, challenge.isSurviv
