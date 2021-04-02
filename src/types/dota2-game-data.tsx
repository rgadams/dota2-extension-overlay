export interface Dota2GameData {
    heroId: number;
    abilities: string[];
    activeItems: string[];
    backpackItems: string[];
    neutralItem: string;
    talentChoices: string[];
    consumedScepter: boolean;
    consumedShard: boolean;
}