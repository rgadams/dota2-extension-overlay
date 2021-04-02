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
        // Abaddon
        this.correctedAbilityNames.set('Death Coil', 'Mist Coil');
        this.correctedAbilityNames.set('Frostmourne', 'Curse of Avernus');
        // Alchemist
        this.correctedAbilityNames.set('Goblins Greed', 'Greevil\'s Greed');
        // Axe
        this.correctedAbilityNames.set('Berserkers Call', 'Berserker\'s Call');
        // Centaur
        this.correctedAbilityNames.set('Return', 'Retaliate');
        // Earth Spirit
        this.correctedAbilityNames.set('Stone Caller', 'Stone Remnant');
        this.correctedAbilityNames.set('Petrify', 'Enchant Remnant');
        // Elder Titan
        this.correctedAbilityNames.set('Ancestral Spirit', 'Astral Spirit');
        // Huskar
        this.correctedAbilityNames.set('Berserkers Blood', 'Berserker\'s Blood');
        // Mars
        this.correctedAbilityNames.set('Spear', 'Spear of Mars');
        this.correctedAbilityNames.set('Gods Rebuke', 'God\'s Rebuke');
        this.correctedAbilityNames.set('Arena of Blood', 'Arena Of Blood');
        // Nightstalker
        this.correctedAbilityNames.set('Hunter In the night', 'Hunter in the Night');
        this.correctedAbilityNames.set('Darkness', 'Dark Ascension');
        // Omniknight
        this.correctedAbilityNames.set('Repel', 'Heavenly Grace');
        // Phoenix
        this.correctedAbilityNames.set('Sun Ray Toggle Move', 'Toggle Movement');
        // Sand King
        this.correctedAbilityNames.set('Sandking Burrowstrike', 'Burrowstrike');
        this.correctedAbilityNames.set('Sandking Sand Storm', 'Sand Storm');
        this.correctedAbilityNames.set('Sandking Caustic Finale', 'Caustic Finale');
        this.correctedAbilityNames.set('Sandking Epicenter', 'Epicenter');
        // Slardar
        this.correctedAbilityNames.set('Sprint', 'Guardian Sprint');
        this.correctedAbilityNames.set('Bash', 'Bash of the Deep');
        this.correctedAbilityNames.set('Amplify Damage', 'Corrosive Haze');
        // Snapfire
        this.correctedAbilityNames.set('Lil Shredder', 'Lil\' Shredder');
        this.correctedAbilityNames.set('Spit Creep', 'Spit Out');
        // Sven
        this.correctedAbilityNames.set('Storm Bolt', 'Storm Hammer');
        this.correctedAbilityNames.set('Gods Strength', 'God\'s Strength');
        // Timbersaw
        this.correctedAbilityNames.set('Chakram 2', 'Second Chakram');
        // Tiny
        this.correctedAbilityNames.set('Tree Channel', 'Tree Volley');
        this.correctedAbilityNames.set('Toss Tree', 'Tree Throw');
        // Treant Protector
        this.correctedAbilityNames.set('Natures Grasp', 'Nature\'s Grasp');
        this.correctedAbilityNames.set('Eyes In the Forest', 'Eyes in the Forest');
        this.correctedAbilityNames.set('Natures Guise', 'Nature\'s Guise');
        // Tusk
        this.correctedAbilityNames.set('Walrus Punch', 'Walrus PUNCH!');
        // Antimage
        this.correctedAbilityNames.set('Mana Overload', 'Blink Fragment');
        // Bloodseeker
        this.correctedAbilityNames.set('Bloodbath', 'Blood Rite');
        // Bounty Hunter
        this.correctedAbilityNames.set('Wind Walk', 'Shadow Walk');
        // Clinkz
        this.correctedAbilityNames.set('Wind Walk', 'Skeleton Walk');
        // Drow Ranger
        this.correctedAbilityNames.set('Wave of Silence', 'Gust');
        // Juggernaut
        this.correctedAbilityNames.set('Swift Slash', 'Swiftslash');
        this.correctedAbilityNames.set('Omni Slash', 'Omnislash');
        // Lone Druid
        this.correctedAbilityNames.set('Spirit Bear', 'Summon Spirit Bear');
        // Luna
        this.correctedAbilityNames.set('Moon Glaive', 'Moon Glaives');
        // Meepo
        this.correctedAbilityNames.set('Petrify', 'Dig');
        // Mirana
        this.correctedAbilityNames.set('Starfall', 'Starstorm');
        this.correctedAbilityNames.set('Arrow', 'Sacred Arrow');
        this.correctedAbilityNames.set('Invis', 'Moonlight Shadow');
        // Monkey King
        this.correctedAbilityNames.set('Wukongs Command', 'Wukong\'s Command');
        // Morphling
        this.correctedAbilityNames.set('Adaptive Strike Agi', 'Adaptive Strike (Agility)');
        this.correctedAbilityNames.set('Adaptive Strike Str', 'Adaptive Strike (Strength)');
        this.correctedAbilityNames.set('Morph Agi', 'Attribute Shift (Agility Gain)');
        this.correctedAbilityNames.set('Morph Str', 'Attribute Shift (Strength Gain)');
        this.correctedAbilityNames.set('Replicate', 'Morph');
        // Pangolier
        this.correctedAbilityNames.set('Rollup', 'Roll Up');
        this.correctedAbilityNames.set('Gyroshell', 'Rolling Thunder');
        // Phantom Assassin
        this.correctedAbilityNames.set('Coup De Grace', 'Coup de Grace');
        // Phantom Lancer
        this.correctedAbilityNames.set('Phantom Edge', 'Phantom Rush');
        this.correctedAbilityNames.set('Doppelwalk', 'Doppelganger');
        // Razor
        this.correctedAbilityNames.set('Unstable Current', 'Storm Surge');
        // Riki
        this.correctedAbilityNames.set('Poison Dart', 'Sleeping Dart');
        this.correctedAbilityNames.set('Backstab', 'Cloak and Dagger');
        // Shadowfiend
        this.correctedAbilityNames.set('Shadowraze1', 'Shadowraze (Near)');
        this.correctedAbilityNames.set('Shadowraze2', 'Shadowraze (Medium)');
        this.correctedAbilityNames.set('Shadowraze3', 'Shadowraze (Far)');
        this.correctedAbilityNames.set('Dark Lord', 'Presence of the Dark Lord');
        this.correctedAbilityNames.set('Requiem', 'Requiem of Souls');
        // Specter
        this.correctedAbilityNames.set('Haunt Single', 'Shadow Step');
        // Templar Assassin
        this.correctedAbilityNames.set('Trap Teleport', 'Psionic Projection');
        // Troll Warlord
        this.correctedAbilityNames.set('Berserkers Rage', 'Berserker\'s Rage');
        this.correctedAbilityNames.set('Whirling Axes Ranged', 'Whirling Axes (Ranged)');
        this.correctedAbilityNames.set('Whirling Axes Melee', 'Whirling Axes (Melee)');
        // Vengeful Spirit
        this.correctedAbilityNames.set('Command Aura', 'Vengeance Aura');
        // Weaver
        this.correctedAbilityNames.set('the Swarm', 'The Swarm');
        // Bane
        this.correctedAbilityNames.set('Fiends Grip', 'Fiend\'s Grip');
        // Crystal Maiden
        this.correctedAbilityNames.set('Brilliance Aura', 'Arcane Aura');
        // Death Prophet
        this.correctedAbilityNames.set('Carrion Swarm', 'Crypt Swarm');
        // Enchantress
        this.correctedAbilityNames.set('Natures Attendants', 'Nature\'s Attendants');
        this.correctedAbilityNames.set('Bunny Hop', 'Sproink');
        // Grimstroke
        this.correctedAbilityNames.set('Dark Artistry', 'Stroke of Fate');
        this.correctedAbilityNames.set('Ink Creature', 'Phantom\'s Embrace');
        this.correctedAbilityNames.set('Spirit Walk', 'Ink Swell');
        this.correctedAbilityNames.set('Soul Chain', 'Soulbind');
        // Invoker
        this.correctedAbilityNames.set('Emp', 'EMP');
        // Jakiro
        this.correctedAbilityNames.set('Liquid Ice', 'Liquid Frost');
        // KOTL
        this.correctedAbilityNames.set('Spirit Form Illuminate', 'Illuminate (Spirit Form)');
        this.correctedAbilityNames.set('Spirit Form Illuminate End', 'Release Illuminate (Spirit Form)');
        this.correctedAbilityNames.set('Radiant Bind', 'Solar Bind');
        this.correctedAbilityNames.set('Will O Wisp', 'Will-O-Wisp');
        this.correctedAbilityNames.set('Illuminate End', 'Release Illuminate');
        // Leshrac
        this.correctedAbilityNames.set('Greater Lightning Storm', 'Nihilism');
        // Lich
        this.correctedAbilityNames.set('Frost Nova', 'Frost Blast');
        // Lion
        this.correctedAbilityNames.set('Impale', 'Earth Spike');
        this.correctedAbilityNames.set('Voodoo', 'Hex');
        // Nature's Prophet
        this.correctedAbilityNames.set('Force of Nature', 'Nature\'s Call');
        // Necrophos
        this.correctedAbilityNames.set('Sadist', 'Ghost Shroud');
        this.correctedAbilityNames.set('Reapers Scythe', 'Reaper\'s Scythe');
        // Ogre Magi
        this.correctedAbilityNames.set('Smash', 'Fire Shield');
        this.correctedAbilityNames.set('Illuminate End', 'Release Illuminate');
        // Oracle
        this.correctedAbilityNames.set('Fortunes End', 'Fortune\'s End');
        this.correctedAbilityNames.set('Fates Edict', 'Fate\'s Edict');
        // OD
        this.correctedAbilityNames.set('Equilibrium', 'Essence Flux');
        this.correctedAbilityNames.set('Sanity Eclipse', 'Sanity\'s Eclipse');
        // Shadow Shaman
        this.correctedAbilityNames.set('Voodoo', 'Hex');
        // Silencer
        this.correctedAbilityNames.set('Curse of the Silent', 'Arcane Curse');
        // Techies
        this.correctedAbilityNames.set('Land Mines', 'Proximity Mines');
        this.correctedAbilityNames.set('Suicide', 'Blast Off!');
        // Tinker
        this.correctedAbilityNames.set('Heat-Seeking Missile', 'Hex');
        // Visage
        this.correctedAbilityNames.set('Gravekeepers Cloak', 'Gravekeeper\'s Cloak');
        this.correctedAbilityNames.set('Stone Form Self Cast', 'Stone Form');
        this.correctedAbilityNames.set('Silent As the Grave', 'Silent as the Grave');
        // Warlock
        this.correctedAbilityNames.set('Rain of Chaos', 'Chaotic Offering');
        // Windranger
        this.correctedAbilityNames.set('Focusfire', 'Focus Fire');
        // Winter Wyvern
        this.correctedAbilityNames.set('Winters Curse', 'Winter\'s Curse');
        // Zeus
        this.correctedAbilityNames.set('Cloud', 'Nimbus');
        this.correctedAbilityNames.set('Thundergods Wrath', 'Thundergod\'s Wrath');

    }
    
    translateAbilityName(abilityName: string) {
        return this.correctedAbilityNames.get(abilityName) || abilityName;
    }

    translateItemName(itemName: string) {
        return this.correctedItemNames.get(itemName) || itemName;
    }
}