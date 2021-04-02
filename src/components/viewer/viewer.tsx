import React, { Component } from "react";
import "../../index.css";
import "./viewer.css";
import { Dota2GameData } from "../../types/dota2-game-data";
import { AbilitiesComponent } from "../abilities/abilities";
import { ItemsComponent } from "../items/items";
import { TalentsComponent } from "../talents/talents";
import { AghsComponent } from "../aghs/aghs";
import { NameTranslator } from "../../name-translator";

declare const window: any;

export class ViewerComponent extends Component {
    heroes: any = require('../../resources/heroes_data.json');
    nameTranslator: NameTranslator = new NameTranslator();
    state: { gameData: Dota2GameData, numberOfAbilities: number, hero: any, showItemsPopup: boolean }
    receiveLatency: number;

    constructor(props: any) {
        super(props);
        this.receiveLatency = 0;
        this.state = {
            gameData: { heroId: -1, abilities: [], activeItems: [], backpackItems: [], talentChoices: [], neutralItem: "", consumedScepter: false, consumedShard: false},
            numberOfAbilities: 0,
            hero: null,
            showItemsPopup: false
        }
    }

    componentDidMount() {
        const twitch = window.Twitch.ext;
        // https://discuss.dev.twitch.tv/t/solved-extension-review-process-released/13312
        twitch.onContext((context: any, contextFields: any) => {
            if (context != undefined && context.hlsLatencyBroadcaster != undefined) {
                this.receiveLatency = context.hlsLatencyBroadcaster;
                if (this.receiveLatency < 0) {
                        this.receiveLatency = 0;
                }
                // Reset the listener to account for the new latency
                twitch.unlisten('broadcast', this.pubSubListener.bind(this));
                twitch.listen('broadcast', this.pubSubListener.bind(this));
            }
        });
    }

    pubSubListener(target: any, type: any, msg: string) {
        const gameData: Dota2GameData = JSON.parse(msg)
        setTimeout(() => {
            this.setState({
                gameData: gameData,
                numberOfAbilities: gameData.abilities.length,
                hero: this.heroes[gameData.heroId],
            });
        }, this.receiveLatency * 1000);
    }

    render() {
        // If we don't have data, we don't want to display anything.
        if (this.state.gameData.heroId === -1) {
            if (this.state.showItemsPopup) {
                this.setState({
                    showItemsPopup: false
                })
            }
            return null;
        }
        return (
            <div className="viewerComponent">
                <div className={ this.getUISizeClass() + " dota2-grid" }>
                    <div className="talent-tree popup-parent">
                        <div className="popup talents-popup">
                            <TalentsComponent talentData={this.state.hero.data.talents} talentChoices={this.state.gameData.talentChoices}></TalentsComponent>
                        </div>
                    </div>
                    <div className="abilities">
                        {
                            this.state.gameData.abilities.map((ability, index) => {
                                const abilityData = this.state.hero.data.abilities.find((a: any) => {
                                    return a.ability_name === ability;
                                })
                                return (
                                    <div key={index} className="popup-parent">&nbsp;
                                        <div className="popup ability-popup">
                                            <AbilitiesComponent ability={abilityData} justShowDescription={false}></AbilitiesComponent>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="aghanims popup-parent">
                        <div className="aghanims-popup popup">
                            <AghsComponent heroId={this.state.gameData.heroId} heroData={this.state.hero.data}></AghsComponent>
                        </div>
                    </div>
                    <div className="items" onClick={this.toggleItemsPopup.bind(this)}>
                        <div className="items-hover-text">
                            Click To Show/Hide Item Information
                        </div>
                    </div>
                    <div hidden={!this.state.showItemsPopup} className="items-popup">
                        <ItemsComponent activeItems={this.state.gameData.activeItems} 
                                        backpackItems={this.state.gameData.backpackItems}
                                        onClose={this.toggleItemsPopup.bind(this)}>
                        </ItemsComponent>
                    </div>
                    <div className="neutrals popup-parent">
                        {/* <div className="neutral-popup popup">
                            Neutral Item Popup
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
                if (this.state.gameData.consumedScepter || this.state.gameData.consumedShard) {
                    return "grid-five-abilities-aghanims";
                } else {
                    return "grid-five-abilities";
                }
            case 6:
                if (this.state.gameData.consumedScepter && this.state.gameData.consumedShard) {
                    return "grid-six-abilities-aghanims";
                } else {
                    return "grid-six-abilities";
                }
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