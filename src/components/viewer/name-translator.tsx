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
        this.correctedItemNames.set('Ultimate Scepter', 'Aghanim\'s Scepter');
        this.correctedItemNames.set('Gem', 'Gem of True Sight');
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