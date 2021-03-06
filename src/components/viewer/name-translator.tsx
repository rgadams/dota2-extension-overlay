/**
 * This class helps match ability and item names that have a larger discrepancy than a simple regex expression can fix.
 * The DOTA2GSI doesn't always return names that are consistent with what is on the DOTA2 Wiki.
 */
export class NameTranslator {
    correctedItemNames: Map<string, string>;
    correctedAbilityNames: Map<string, string>;

    constructor() {
        this.correctedItemNames = new Map();
        this.correctedAbilityNames = new Map();
        this.initializeCorrectedItemNames();
        this.initializeCorrectedAbilityNames();
    }

    initializeCorrectedItemNames() {
        this.correctedItemNames.set('Boots', 'Boots of Speed');
        this.correctedItemNames.set('Relic', 'Sacred Relic');
        this.correctedItemNames.set('Flask', 'Healing Salve');
        this.correctedItemNames.set('Dust', 'Dust of Appearance');
        this.correctedItemNames.set('Ward Observer', 'Observer Ward');
        this.correctedItemNames.set('Ward Sentry', 'Sentry Ward');
        //TODO: Fix doubled wards
        this.correctedItemNames.set('Ward Dispenser', 'Observer Ward');
        this.correctedItemNames.set('Ultimate Scepter', 'Aghanim\'s Scepter');
        this.correctedItemNames.set('Gem', 'Gem of True Sight');
        this.correctedItemNames.set('Blink', 'Blink Dagger');
        this.correctedItemNames.set('Infused Raindrop', 'Infused Raindrops');
        this.correctedItemNames.set('Gloves', 'Gloves of Haste');
        this.correctedItemNames.set('Eagle', 'Eaglesong');
        this.correctedItemNames.set('Branches', 'Iron Branch');
        this.correctedItemNames.set('Gauntlets', 'Gauntlets of Strength');
        this.correctedItemNames.set('Slippers', 'Slippers of Agility');
        this.correctedItemNames.set('Mantle', 'Mantle of Intelligence');
        this.correctedItemNames.set('Gauntlets', 'Gauntlets of Strength');
        this.correctedItemNames.set('Boots of Elves', 'Band of Elvenskin');
        this.correctedItemNames.set('Robe', 'Robe of the Magi');
        this.correctedItemNames.set('Sobi Mask', 'Sage\'s Mask');
        this.correctedItemNames.set('Lifesteal', 'Morbid Mask');
        this.correctedItemNames.set('Ghost', 'Ghost Scepter');
        this.correctedItemNames.set('Pers', 'Perseverance');
        this.correctedItemNames.set('Helm of The Dominator', 'Helm of the Dominator 1');
        this.correctedItemNames.set('Helm of The Dominator 2', 'Helm of the Dominator 2');
        this.correctedItemNames.set('Travel Boots', 'Boots of Travel');
        this.correctedItemNames.set('Travel Boots 2', 'Boots of Travel');
        this.correctedItemNames.set('Necronomicon 2', 'Necronomicon');
        this.correctedItemNames.set('Necronomicon 3', 'Necronomicon');
        this.correctedItemNames.set('Cyclone', 'Eul\'s Scepter of Divinity');
        this.correctedItemNames.set('Dagon 2', 'Dagon');
        this.correctedItemNames.set('Dagon 3', 'Dagon');
        this.correctedItemNames.set('Dagon 4', 'Dagon');
        this.correctedItemNames.set('Dagon 5', 'Dagon');
        this.correctedItemNames.set('Orchid', 'Orchid Malevolence');
        this.correctedItemNames.set('Refresher', 'Refresher Orb');
        this.correctedItemNames.set('Sheepstick', 'Scythe of Vyse');
        this.correctedItemNames.set('Gungir', 'Gleipnir');
        this.correctedItemNames.set('Lesser Crit', 'Crystalys');
        this.correctedItemNames.set('Greater Crit', 'Daedalus');
        this.correctedItemNames.set('Armlet', 'Armlet of Mordiggian');
        this.correctedItemNames.set('Basher', 'Skull Basher');
        this.correctedItemNames.set('Invis Sword', 'Shadow Blade');
        this.correctedItemNames.set('Bfury', 'Battle Fury');
        this.correctedItemNames.set('Ancient Janggo', 'Drum of Endurance');
        this.correctedItemNames.set('Vladmir', 'Vladmir\'s Offering');
        this.correctedItemNames.set('Pipe', 'Pipe of Insight');
        this.correctedItemNames.set('Manta', 'Manta Style');
        this.correctedItemNames.set('Heart', 'Heart of Tarrasque');
        this.correctedItemNames.set('Shivas Guard', 'Shiva\'s Guard');
        this.correctedItemNames.set('Sphere', 'Linken\'s Sphere');
        this.correctedItemNames.set('Assault', 'Assault Cuirass');
        this.correctedItemNames.set('Heavens Halberd', 'Heaven\'s Halberd');
        this.correctedItemNames.set('Kaya And Sange', 'Kaya and Sange');
        this.correctedItemNames.set('Sange And Yasha', 'Sange and Yasha');
        this.correctedItemNames.set('Yasha And Kaya', 'Yasha and Kaya');
        this.correctedItemNames.set('Skadi', 'Eye of Skadi');
        this.correctedItemNames.set('Mysterious Hat', 'Fairy\'s Trinket');
        this.correctedItemNames.set('Pupils Gift', 'Pupil\'s Gift');
        this.correctedItemNames.set('Philosophers Stone', 'Philosopher\'s Stone');
        this.correctedItemNames.set('Illusionsts Cape', 'Illusionist\'s Cape');
        this.correctedItemNames.set('Lesser Crit', 'Crystalys');
        this.correctedItemNames.set('Spy Gadget', 'Telescope');
        this.correctedItemNames.set('Penta Edged Sword', 'Penta-Edged Sword');
        this.correctedItemNames.set('Desolator 2', 'Stygian Desolator');
        this.correctedItemNames.set('Demonicon', 'Book of the Dead');
        this.correctedItemNames.set('Giants Ring', 'Giant\'s Ring');

    }

    initializeCorrectedAbilityNames() {
        this.correctedAbilityNames.set('Trap Teleport', 'Psionic Projection');
    }
    
    translateAbilityName(abilityName: string) {
        return this.correctedAbilityNames.get(abilityName) || abilityName;
    }

    translateItemName(itemName: string) {
        return this.correctedItemNames.get(itemName) || itemName;
    }
}