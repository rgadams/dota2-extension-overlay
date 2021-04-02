import { Component } from "react";
import { AbilitiesComponent } from "../abilities/abilities";
import "./aghs.css"


interface AghsProps {
    heroId: any,
    heroData: any
}

export class AghsComponent extends Component<AghsProps, {}> {
    data: any = require('../../resources/aghanim_effects.json');

    render() {
        const aghsData = this.data[this.props.heroId];
        return (
            <div className="aghanims-upgrades">
                <div className="scepter-upgrade">
                    <div className="upgrade-header">
                        { this.getUpgradeIcon(true) }
                         Aghanim's Scepter 
                        { this.getUpgradePill(aghsData.scepter_effect) }
                    </div>
                    {this.getUpgrade(aghsData.scepter_effect)}
                </div>
                <div className="shard-upgrade">
                    <div className="upgrade-header">
                        { this.getUpgradeIcon(false) }
                         Aghanim's Shard 
                        { this.getUpgradePill(aghsData.shard_effect) }
                    </div>
                    {this.getUpgrade(aghsData.shard_effect)}
                </div>
            </div>
        )
    }

    getUpgrade(effect: any) {
        const abilityData = this.props.heroData.abilities.find((a: any) => {
            return a.ability_name === effect.ability_name;
        })
        if (effect.type === 'ability') {
            return <AbilitiesComponent ability={abilityData} justShowDescription={true}></AbilitiesComponent>
        } else if (effect.type === 'upgrade') {
            return (
                <div className="ability-upgrade">
                    <div className="ability-title">
                        <img src={ abilityData?.ability_image_url } alt={ abilityData.ability_name }/>
                        <div>{ abilityData.ability_name}</div>
                    </div>
                    <div className="ability-upgrade-description">{effect.description}</div>
                </div>
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

    getUpgradePill(effect: any) {
        if (effect.type === 'ability') {
            return <div className="new-ability pill">New Ability</div>
        } else {
            return <div className="upgrade-ability pill">Upgrade</div>
        }
    }
}