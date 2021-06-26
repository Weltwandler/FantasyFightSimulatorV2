// Set up classes

class Character {
    constructor(hitPoints, armor, attack, damage) {
        this._hitPoints = hitPoints;
        this._armor = armor;
        this._attack = attack;
        this._damage = damage;
    }

    get hitPoints() {
        return this._hitPoints;
    }

    get armor() {
        return this._armor;
    }

    get attack() {
        return this._attack;
    }

    get damage() {
        return this._damage;
    }

    set hitPoints(num) {
        this._hitPoints = num;
    }

    set armor(num) {
        this._armor = num;
    }

    set attack(num) {
        this._attack = num;
    }

    set damage(num) {
        this._damage = num;
    }
}

class PlayerChar extends Character {
    constructor(name, characterClass, mag, hp, armor, attack, damage) {
        super(hp, armor, attack, damage);
        this._name = name;
        this._characterClass = characterClass;
        this._magic = mag;
        this._initialHP = this.hitPoints;
        
        if (this._magic) {
            this._manaPoints = 30;
        } else {
            this._manaPoints = 0;
        }
    }

    get name() {
        return this._name;
    }

    get characterClass() {
        return this._characterClass;
    }

    get magic() {
        return this._magic;
    }

    get manaPoints() {
        return this._manaPoints;
    }

    get initialHP() {
        return this._initialHP;
    }

    set name(name) {
        this._name = name;
    }

    set characterClass(charC) {
        this._characterClass = charC;
    }

    set magic(mag) {
        this._magic = mag;
    }

    set manaPoints(points) {
        this._manaPoints = points;
    }

    set initialHP(num) {
        this._initialHP = num;
    }
}

class Enemy extends Character {
    constructor(type, hp, armor, attack, damage) {
        super(hp, armor, attack, damage);
        this._type = type;
    }

    get type() {
        return this._type;
    }

    set type(type) {
        this._type = type;
    }
}

// Set up DOM elements

const welcomeField = document.getElementById("welcome");
const charNameField = document.getElementById("name-select");
const enemySelectField = document.getElementById("enemy-select");
const actionSelectField = document.getElementById("action-select");
const actionOutcomeField = document.getElementById("action-outcome");
const gameOverField = document.getElementById("game-over");
const pcNameField = document.getElementById("pc-name");
const pcClassField = document.getElementById("pc-class");
const pcHpField = document.getElementById("pc-hp");
const pcArmorField = document.getElementById("pc-armor");
const pcAttackField = document.getElementById("pc-attack");
const pcDamageField = document.getElementById("pc-damage");
const pcManaField = document.getElementById("pc-mp");
const enemyTypeField = document.getElementById("enemy-type");
const enemyHpField = document.getElementById("enemy-hp");
const enemyArmorField = document.getElementById("enemy-armor");
const enemyAttackField = document.getElementById("enemy-attack");
const enemyDamageField = document.getElementById("enemy-damage");
const firstHeadingField = document.getElementById("first-action-heading");
const secondHeadingField = document.getElementById("second-action-heading");
const firstOutcomeField = document.getElementById("first-action-outcome");
const secondOutcomeField = document.getElementById("second-action-outcome");
const outcomeField = document.getElementById("outcome");
const warriorButton = document.getElementById("button-warrior");
const rogueButton = document.getElementById("button-rogue");
const wizardButton = document.getElementById("button-wizard");
const nameEntry = document.getElementById("name-entry");
const nameSubmit = document.getElementById("name-submit");
const orcButton = document.getElementById("button-orc");
const goblinButton = document.getElementById("button-goblin");
const dragonButton = document.getElementById("button-dragon");
const banditButton = document.getElementById("button-bandit");
const randomButton = document.getElementById("button-random");
const magicButtons = document.getElementById("magic-buttons");
const cautiousButton = document.getElementById("button-attack-cautious");
const normalButton = document.getElementById("button-attack-normal");
const aggressiveButton = document.getElementById("button-attack-aggressive");
const fireballButton = document.getElementById("button-fireball");
const lightningButton = document.getElementById("button-lightning");
const healingButton = document.getElementById("button-healing");
const confirmButton = document.getElementById("confirm-outcomes");
const playAgainButton = document.getElementById("play-again");
const goesFirstField = document.getElementById("goes-first");

// Set up objects and variables

const pChar = new PlayerChar('Name', 'default', false, 1, 1, 1, 1)
const eChar = new Enemy('default', 1, 1, 1, 1);

let playerFirst;
let damage;
let mana;
let healing;
let currentSpell;

// Set up event listeners

warriorButton.onclick = selectWarrior;
rogueButton.onclick = selectRogue;
wizardButton.onclick = selectWizard;
nameSubmit.onclick = createChar;
orcButton.onclick = selectOrc;
goblinButton.onclick = selectGoblin;
dragonButton.onclick = selectDragon;
banditButton.onclick = selectBandit;
randomButton.onclick = selectRandom;
cautiousButton.onclick = selectCautious;
normalButton.onclick = selectNormal;
aggressiveButton.onclick = selectAggressive;
fireballButton.onclick = selectFireball;
lightningButton.onclick = selectLightning;
healingButton.onclick = selectHealing;
confirmButton.onclick = nextRound;
playAgainButton.onclick = newGame;

// Game functions

function selectWarrior() {

    pChar.characterClass = 'Warrior';
    pChar.magic = false;
    pChar.hitPoints = 30;
    pChar.armor = 15;
    pChar.attack = 5;
    pChar.damage = 7;
    pChar.initialHP = pChar.hitPoints;

    moveNameSelect();
}

function selectRogue() {

    pChar.characterClass = 'Rogue';
    pChar.magic = false;
    pChar.hitPoints = 25;
    pChar.armor = 12;
    pChar.attack = 5;
    pChar.damage = 10;
    pChar.initialHP = pChar.hitPoints;

    moveNameSelect();

}

function selectWizard() {

    pChar.characterClass = 'Wizard';
    pChar.magic = true;
    pChar.hitPoints = 20;
    pChar.armor = 10;
    pChar.attack = 3;
    pChar.damage = 5;
    pChar.initialHP = pChar.hitPoints;
    pChar.manaPoints = 30;
    moveNameSelect();

}

function moveNameSelect() {

    welcomeField.style.display = 'none';
    charNameField.style.display = 'block';

}

function createChar() {
    
    let name = nameEntry.value;
    pChar.name = name;
    charNameField.style.display = 'none';
    enemySelectField.style.display = 'block';
    pcNameField.innerHTML = pChar.name;
    pcClassField.innerHTML = pChar.characterClass;
    pcHpField.innerHTML = 'HP: ' + pChar.hitPoints + ' / ' + pChar.initialHP;
    pcHpField.style.color = 'green';
    pcArmorField.innerHTML = 'Armor: ' + pChar.armor;
    pcAttackField.innerHTML = 'Attack: ' + pChar.attack;
    pcDamageField.innerHTML = 'Damage: ' + pChar.damage;
    if (pChar.magic) {
        pcManaField.innerHTML = 'Mana Points: ' + pChar.manaPoints;
    }
    switch (pChar.characterClass) {
        case 'Warrior':
            pcNameField.style.color = 'brown';
            pcClassField.style.color = 'brown';
            break;
        case 'Rogue':
            pcNameField.style.color = 'tan';
            pcClassField.style.color = 'tan';
            break;
        case 'Wizard':
            pcNameField.style.color = 'teal';
            pcClassField.style.color = 'teal';
    }
    
}

function selectRandom() {
    let sel = Math.floor(Math.random() * 4);
    switch(sel) {
        case 0:
            selectOrc();
            break;
        case 1:
            selectGoblin();
            break;
        case 2:
            selectDragon();
            break;
        case 3:
            selectBandit();
            break;
        default:
            alert('Uh-Oh, somethign went wrong!');
    }
}

function selectOrc() {
    eChar.type = 'Orc';
    eChar.hitPoints = 30;
    eChar.armor = 14;
    eChar.attack = 5;
    eChar.damage = 7;
    startGame();
}

function selectGoblin() {
    eChar.type = 'Goblin';
    eChar.hitPoints = 20;
    eChar.armor = 12;
    eChar.attack = 2;
    eChar.damage = 4;
    startGame();
}

function selectDragon() {
    alert('You are fighting a dragon. Be careful!');
    eChar.type = 'Dragon';
    eChar.hitPoints = 50;
    eChar.armor = 17;
    eChar.attack = 0;
    eChar.damage = 10;
    startGame();
}

function selectBandit() {
    eChar.type = 'Bandit';
    eChar.hitPoints = 25;
    eChar.armor = 13;
    eChar.attack = 3;
    eChar.damage = 5;
    startGame();
}

function startGame() {
    
    // Display enemy information
    enemyTypeField.innerHTML = eChar.type;
    enemyHpField.innerHTML = 'HP: ' + eChar.hitPoints;
    enemyArmorField.innerHTML = 'Armor: ' + eChar.armor;
    enemyAttackField.innerHTML = 'Attack: ' + eChar.attack;
    enemyDamageField.innerHTML = 'Damage: ' + eChar.damage;

    // Move to Action Selection Display
    enemySelectField.style.display = 'none';
    actionSelectField.style.display = 'block';
    if (pChar.magic) {
        magicButtons.style.display = 'block';
    }

    // Determine who starts
    if (Math.floor(Math.random() * 2) == 0) {
        playerFirst = true;
        goesFirstField.innerHTML = pChar.name + ' will go first, then ' + eChar.type;
    } else {
        playerFirst = false;
        goesFirstField.innerHTML = eChar.type + ' will go first, then ' + pChar.name;
    }

}

function selectCautious() {
    attackFunc(pChar.attack + 4, pChar.damage -1);
}

function selectNormal() {
    attackFunc(pChar.attack, pChar.damage);
}

function selectAggressive() {
    attackFunc(pChar.attack - 2, pChar.damage +1);
}

function selectFireball() {
    spell('Fireball', false, 10, 1, 10);
}

function selectLightning() {
    spell('Lightning', false, 5, 2, 5);
}

function selectHealing() {
    spell('Healing Hands', true, 5, 0, 10);
}

function attackFunc(mod, damage) {
    let attackRoll = rollTwenty() + pChar.attack + mod;
    let dam;
    if (attackRoll >= eChar.armor) {
        dam = rollFive() + damage;
    } else {
        dam = 0;
    }
    resolveAction(dam, 0, 0);
}

function spell(name, playerTarget, mana, effect, mod) {
    if (mana > pChar.manaPoints) {
        alert('Not enough Mana points - select a different action!');
    } else {
        // pChar.manaPoints -= mana;
        currentSpell = name;
        let out = mod;
        for (let i=0; i < effect; i++) {
            out += rollFive();
        }
        if (playerTarget) {
            resolveAction(0, mana, out);
        } else {
            resolveAction(out, mana, 0);
        }
    }
    
}

function enemyAttack() {
    if (playerFirst === true) {
        secondHeadingField.innerHTML = eChar.type + ' attacked ' + pChar.name + '!';
        if (rollTwenty() + eChar.attack >= pChar.armor) {
            let dam = rollFive() + eChar.damage;
            pChar.hitPoints -= dam;
            secondOutcomeField.innerHTML = eChar.type + ' dealt ' + dam + ' damage to ' + pChar.name;
        } else {
            secondOutcomeField.innerHTML = eChar.type + ' failed to overcome ' + pChar.name + "'s armor";
        }
    } else {
        firstHeadingField.innerHTML = eChar.type + ' attacked ' + pChar.name + '!';
        if (rollTwenty() + eChar.attack >= pChar.armor) {
            let dam = rollFive() + eChar.damage;
            pChar.hitPoints -= dam;
            firstOutcomeField.innerHTML = eChar.type + ' dealt ' + dam + ' damage to ' + pChar.name;
        } else {
            firstOutcomeField.innerHTML = eChar.type + ' failed to overcome ' + pChar.name + "'s armor";
        }
    }
    
}

function resolveAction(damage, mana, healing) {

    if (playerFirst) {
        eChar.hitPoints -= damage;
        pChar.hitPoints += healing;
        pChar.manaPoints -= mana;
        if(checkVictory()) {
            return true;
        }
        enemyAttack();
        if (checkDefeat()) {
            return true;
        }
        if (damage > 0) {
            firstHeadingField.innerHTML = pChar.name + ' attacked ' + eChar.type + '!';
            firstOutcomeField.innerHTML = pChar.name + ' dealt ' + damage + ' damage to ' + eChar.type;
        } else if (healing > 0) {
            firstHeadingField.innerHTML = pChar.name + " cast 'Healing Hands'";
            firstOutcomeField.innerHTML = pChar.name + ' healed themselves for ' + healing + ' Hit Points';
        } else {
            firstHeadingField.innerHTML = pChar.name + ' attacked ' + eChar.type + '!';
            firstOutcomeField.innerHTML = pChar.name + ' failed to overcome ' + eChar.type + "'s armor";
        }
    } else {
        enemyAttack();
        if (checkDefeat()) {
            return true;
        }
        eChar.hitPoints -= damage;
        pChar.hitPoints += healing;
        pChar.manaPoints -= mana;
        if (checkVictory()) {
            return true;
        }
        if (damage > 0) {
            secondHeadingField.innerHTML = pChar.name + ' attacked ' + eChar.type + '!';
            secondOutcomeField.innerHTML = pChar.name + ' dealt ' + damage + ' damage to ' + eChar.type;
        } else if (healing > 0) {
            secondHeadingField.innerHTML = pChar.name + " cast 'Healing Hands'";
            secondOutcomeField.innerHTML = pChar.name + ' healed themselves for ' + healing + ' Hit Points';
        } else {
            secondHeadingField.innerHTML = pChar.name + ' attacked ' + eChar.type + '!';
            secondOutcomeField.innerHTML = pChar.name + ' failed to overcome ' + eChar.type + "'s armor";
        }
    }
    pcHpField.innerHTML = 'HP: ' + pChar.hitPoints + ' / ' + pChar.initialHP;
    if (pChar.hitPoints / pChar.initialHP < 0.33) {
        pcHpField.style.color = 'red';
    } else if (pChar.hitPoints / pChar.initialHP < 0.67) {
        pcHpField.style.color = 'orange';
    }
    if (pChar.magic) {
        pcManaField.innerHTML = 'Mana Points: ' + pChar.manaPoints;
    }
    enemyHpField.innerHTML = 'HP: ' + eChar.hitPoints;
    actionOutcomeField.style.display = 'block';
    actionSelectField.style.display = 'none';
}

function rollTwenty() {
    // Simulates the roll of a twnty-sided die - for use in attack rolls
    let result = Math.floor(Math.random() * 20) + 1;
    return result;
}

function rollFive() {
    // Returns a number between -2 and +2, used for damage rolls
    let result = Math.floor(Math.random() * 5) -2;
    return(result);
}

function checkVictory() {
    if (eChar.hitPoints <= 0) {
        actionSelectField.style.display = 'none'
        gameOverField.style.display = 'block';
        outcomeField.innerHTML = pChar.name + ' defeated ' + eChar.type + '. Congratulations!';
        document.getElementById('all').style.backgroundColor = 'lightgreen';
        document.getElementById('all').style.color = 'black';
        return true;
    } else {
        return false;
    }
}

function checkDefeat() {
    if(pChar.hitPoints <= 0) {
        actionSelectField.style.display = 'none';
        gameOverField.style.display = 'block';
        outcomeField.innerHTML = pChar.name + ' was defeated by ' + eChar.type + '. Better luck next time!';
        document.getElementById('all').style.backgroundColor = 'lightcoral';
        document.getElementById('all').style.color = 'black';
        return true;
    } else {
        return false;
    }
}

function nextRound() {
    actionOutcomeField.style.display = 'none';
    actionSelectField.style.display = 'block';
}

function newGame() {
    location.reload();
}