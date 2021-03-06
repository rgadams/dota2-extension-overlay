import React, { Component } from "react";
import "./viewer.css";
import { Dota2GameData } from "types/dota2-game-data";
import { AbilitiesComponent } from "./abilities/abilities";
import { ItemsComponent } from "./items/items";
import { TalentsComponent } from "./talents/talents";
import { HeroComponent } from "./hero/hero";
import { AghsComponent } from "./aghs/aghs";
import { NameTranslator } from "./name-translator";

declare const window: any;

export class ViewerComponent extends Component {
    heroes: any = require('resources/heroes_data.json');
    nameTranslator: NameTranslator = new NameTranslator();
    state: { gameData: Dota2GameData, numberOfAbilities: number, hero: any, showItemsPopup: boolean }

    constructor(props: any) {
        super(props);
        this.state = {
            gameData: { HeroId: -1, Abilities: [], ActiveItems: [], BackpackItems: [], NeutralItem: "", TpSlot: ""},
            numberOfAbilities: 0,
            hero: null,
            showItemsPopup: false
        }
        // this.state = {
        //     gameData: require('resources/test-data-ta-aghs.json'),
        //     numberOfAbilities: 6,
        //     hero: this.heroes["46"],
        //     showItemsPopup: false
        // }
    }

    componentDidMount() {
        const twitch = window.Twitch.ext;
        twitch.listen('broadcast', (target: any, type: any, msg: string) => {
            const gameData: Dota2GameData = JSON.parse(msg)
            this.setState({
                gameData: gameData,
                numberOfAbilities: gameData.Abilities.length,
                hero: this.heroes[gameData.HeroId],
                showItemsPopup: this.state.showItemsPopup
            });
        });
    }

    render() {
        if (this.state.gameData.HeroId === -1) {
            return null;
        }
        return (
            <div className="viewerComponent">
                <div className={ this.getUISizeClass() + " dota2-grid" }>
                    <div className="hero popup-parent">
                        <div className="popup hero-popup">
                            <HeroComponent baseStats={this.state.hero.data.base_stats}></HeroComponent>
                        </div>
                    </div>
                    <div className="talent-tree popup-parent">
                        <div className="popup talents-popup">
                            <TalentsComponent talentData={this.state.hero.data.talents}></TalentsComponent>
                        </div>
                    </div>
                    <div className="abilities">
                        {
                            this.state.gameData.Abilities.map((ability, index) => {
                                const abilityData = this.state.hero.data.abilities.find((a: any) => {
                                    let abilityName = ability.split("_")
                                        .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
                                        .join(" ")
                                        .replace(this.state.hero.name, '')
                                        .trim();
                                    return a.ability_name === this.nameTranslator.translateAbilityName(abilityName);
                                })
                                return (
                                    <div className="popup-parent">&nbsp;
                                        <div className="popup ability-popup">
                                            <AbilitiesComponent ability={abilityData}></AbilitiesComponent>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="aghanims popup-parent">
                        <div className="aghanims-popup popup">
                            <AghsComponent heroId={this.state.gameData.HeroId} heroData={this.state.hero.data}></AghsComponent>
                        </div>
                    </div>
                    <div className="items" onClick={this.toggleItemsPopup.bind(this)}>
                        <div className="items-hover-text">
                            Click For Item Information
                        </div>
                    </div>
                    <div hidden={!this.state.showItemsPopup} className="items-popup">
                        <ItemsComponent activeItems={this.state.gameData.ActiveItems} 
                                        backpackItems={this.state.gameData.BackpackItems}>
                        </ItemsComponent>
                    </div>
                    <div className="neutrals popup-parent">
                        {/* <div className="neutral-popup popup">
                            Neutral Item Popup
                        </div> */}
                    </div>
                    <div className="tp-scroll popup-parent">
                        {/* <div className="tp-popup popup">
                            TP Popup
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }

    /**
     * Uses the number of abilities returned with the game data to determine the dimensions of the UI so that the grid lines
     * up with the stream.
     */
    getUISizeClass() {
        switch (this.state.numberOfAbilities) {
            case 4:
                return "grid-four-abilities";
            case 5:
                return "grid-five-abilities";
            case 6:
                return "grid-six-abilities";
            default:
                return "";
        }
    }

    toggleItemsPopup() {
        this.setState((state: any) => ({
            showItemsPopup: !state.showItemsPopup
        }));
    }
}