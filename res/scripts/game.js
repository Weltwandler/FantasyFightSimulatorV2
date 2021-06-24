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
        if (magic === true) {
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
}

class Enemey extends Character {
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

class Magic {
    constructor(name, cost, heal, effect) {
        this._name = name;
        this._cost = cost;
        this._heal = heal;
        this._effect = effect;
    }

    get name() {
        return this._name;
    }

    get cost() {
        return this._cost;
    }

    get heal() {
        return this._heal;
    }

    get effect() {
        return this._effect;
    }
}

class GameLogic {
    
}