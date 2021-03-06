import { Component } from "react";
import { AbilitiesComponent } from "../abilities/abilities";
import "./aghs.css"

interface AghsProps {
    heroId: any,
    heroData: any
}

export class AghsComponent extends Component<AghsProps, {}> {
    heroId: any;
    heroData: any;
    data: any = require('resources/aghanim_effects.json');

    constructor(props: any) {
        super(props)
        this.heroId = props.heroId;
        this.heroData = props.heroData;
    }

    render() {
        const aghsData = this.data[this.heroId];
        return (
            <div className="aghanims-upgrades">
                <div className="scepter-upgrade">
                    <div className="upgrade-header">
                        { this.getUpgradeIcon(true) }
                        { this.getUpgradeHeader(aghsData.scepter_effect) }
                    </div>
                    {this.getUpgrade(aghsData.scepter_effect)}
                </div>
                <div className="shard-upgrade">
                    <div className="upgrade-header">
                        { this.getUpgradeIcon(false) }
                        { this.getUpgradeHeader(aghsData.shard_effect) }
                    </div>
                    {this.getUpgrade(aghsData.shard_effect)}
                </div>
            </div>
        )
    }

    getUpgrade(effect: any) {
        if (effect.type === 'ability') {
            const abilityData = this.heroData.abilities.find((a: any) => {
                return a.ability_name === effect.ability_name;
            })
            return <AbilitiesComponent ability={abilityData}></AbilitiesComponent>
        } else if (effect.type === 'upgrade') {
            return (
                <div className="ability-upgrade">{effect.description}</div>
            )
        }
    }

    getUpgradeIcon(isScepterUpgrade: boolean) {
        if (isScepterUpgrade) {
            return <img className="aghs-icon" alt="aghanims_scepter" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png"/>
        } else {
            return <img className="aghs-icon" alt="aghanims_shard" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/d/d8/Aghanim%27s_Shard_icon.png"/>
        }
    }

    getUpgradeHeader(effect: any) {
        if (effect.type === 'ability') {
            return <div>Grants the New Ability: <b>{effect.ability_name}</b></div>
        } else {
            return <div>Upgrades the Ability: <b>{effect.ability_name}</b></div>
        }
    }
}