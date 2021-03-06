import { Component } from "react";
import "./abilities.css"
import talent_tree from 'resources/talent_tree.png';

interface AbilitiesProps {
    ability: any
}

export class AbilitiesComponent extends Component<AbilitiesProps, {}> {
    
    render() {
        return (
            <div className="ability">
                <div className="ability-name">
                    <img src={ this.props.ability.ability_image_url } alt={ this.props.ability.ability_name }/>
                    <div>{ this.props.ability.ability_name}</div>
                </div>
                <div className="ability-top-row">
                    <div className="ability-info">
                        {
                            this.displayAbilityInfo(this.props.ability.ability_info.target, 'Ability')
                        }
                        {
                            this.displayAbilityInfo(this.props.ability.ability_info.damage_type, 'Damage Type')
                        }
                        {
                            this.displayAbilityInfo(this.props.ability.ability_info.affects, 'Affects')
                        }
                    </div>
                </div>
                <div className="ability-description">
                    { this.props.ability.ability_info.description }
                </div>
                <div className="ability-notes">
                    {
                        this.props.ability.ability_numbers.map((note: any, index: number) => {
                            if (note.title !== "Cooldown" && note.title !== "Manacost") {
                                return <span key={index} className="ability-note">
                                    {
                                        this.displayNoteValue(note)
                                    }
                                </span>
                            } else {
                                return null;
                            }
                        })
                    }
                    {
                        <div className="other-notes">
                            {
                                this.props.ability.ability_numbers.map((note: any, index: number) => {
                                    if (note.title === "Cooldown") {
                                        return <div key="cooldown" className="cooldown"><img className="icon" alt="cooldown" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b7/Cooldown_symbol.png"/><div className="cooldown-value"> { note.value }</div></div>
                                    } else if (note.title === "Manacost") {
                                        return <div key="mana" className="manacost"><img className="icon" alt="manacost" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/f/f3/Mana_symbol.png"/><div className="manacost-value"> { note.value }</div></div>
                                    } else {
                                        return null;
                                    }
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }

    displayAbilityInfo(info: any, label: string) {
        if (info) {
            return (   
                <div className="ability-target"><b>{ label }:</b>&nbsp;
                    { info }
                </div>
            )
        } else {
            return null;
        }
    }

    displayNoteValue(note: any) {
        if (note.modifiers) {
            if (note.modifiers.type === 'Talent') {
                return (
                    <span className="note-value">
                        <b>{ note.title }:</b>&nbsp;
                        <span>
                            { note.value }
                            <img className="icon talent-icon" alt="talent" src={talent_tree}></img>
                            <span className="talent-modifiers">({ note.modifiers.value })</span>
                        </span>
                    </span>
                )
            } else if (note.modifiers.type === 'Upgradable by Aghanim\'s Scepter.' || note.modifiers.type === 'Upgradable by Aghanim\'s Shard.') {
                return (
                    <span className="note-value">
                        <b>{ note.title }:</b>&nbsp;
                        <span>
                            { note.value }
                            { this.displayAghsIcon(note.modifiers.type) }
                            <span className="aghs-modifiers">({ note.modifiers.value })</span>
                        </span>
                    </span>
                )
            }
        } else {
            return <span><b>{ note.title }:</b>&nbsp;{note.value}</span>
        }
    }

    displayAghsIcon(type: any) {
        if (type === 'Upgradable by Aghanim\'s Shard.') {
            return <img className="aghs-modifier-icon" alt="aghanims_shard" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/d/dd/Aghanim%27s_Shard_symbol.png"/>
        } else if (type === 'Upgradable by Aghanim\'s Scepter.') {
            return <img className="aghs-modifier-icon" alt="aghanims_scepter" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/0/07/Aghanim%27s_Scepter_icon.png"/>
        }
    }
}