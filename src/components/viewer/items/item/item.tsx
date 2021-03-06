import { Component } from "react";
import "./item.css"

interface ItemProps {
    itemData: any
    deselectItem: any
}

export class ItemComponent extends Component<ItemProps, {}> {

    render() {
        return (
            <div className="item">
                <button className="deselect-button" onClick={this.props.deselectItem}>Close</button>
                <div className="item-top-row">
                    <div className="item-identifiers"> 
                        <img className="item-image" src={ this.props.itemData.image_src } alt={ this.props.itemData.item_name }/>
                        <div className="item-name">{ this.props.itemData.item_name }</div>
                    </div>
                    <div className="item-cost">
                        <img className="gold-icon" alt="gold" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cd/Gold_symbol.png"/> { this.props.itemData.item_cost }
                    </div>
                </div>
                {this.renderItemBonuses()}
                {this.renderActiveAbility()}
                {this.renderPassiveAbility()}
            </div>
        )
    }

    renderItemBonuses() {
        if (this.props.itemData.bonuses) {
            return(
                <div className="item-bonuses">
                {
                    this.props.itemData.bonuses.map((bonus: any, index: any) => {
                        return (
                            <div key={index} className={this.getClassForBonus(bonus) + " bonus"}>{ bonus }</div>
                        )
                    })
                }
                </div>
            )
        }
    }

    renderActiveAbility() {
        if (this.props.itemData.active) {
            return (
                <div className="active-ability">
                    <div className="item-ability-header active-ability-header">
                        <div>Active: {this.props.itemData.active.name}</div>{ this.displayCooldown(this.props.itemData.active) }
                    </div>
                    <div className="active-ability-effect">
                        {this.props.itemData.active.effect}
                    </div>
                    { this.displayItemAbilityNotes(this.props.itemData.active) }
                </div>
            )
        }
    }


    renderPassiveAbility() {
        if (this.props.itemData.passive) {
            return (
                <div className="passive-ability">
                    <div className="item-ability-header passive-ability-header">
                        <div>Passive: {this.props.itemData.passive.name}</div>{ this.displayCooldown(this.props.itemData.passive) }
                    </div>
                    <div className="passive-ability-effect">
                        {this.props.itemData.passive.effect}
                    </div>
                    { this.displayItemAbilityNotes(this.props.itemData.passive) }
                </div>
            )
        }
    }

    displayCooldown(ability: any) {
        if (ability.cooldown) {
            return <div><img className="cooldown-icon" alt="cooldown" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/b/b7/Cooldown_symbol.png"/> { ability.cooldown }</div>
        }
    }

    displayItemAbilityNotes(ability: any) {
        if (ability.notes) {
            return ability.notes.map((note: any, index: number) => {
                return (<div key={index} className="item-ability-note">
                    <b>{ note.title }:</b> { note.value }
                </div>)
            })
        }
    }

    getClassForBonus(bonus: string) {
        if (bonus.toLowerCase().search(/strength/) !== -1) {
            return 'strength-bonus';
        } else if (bonus.toLowerCase().search(/agility/) !== -1) {
            return 'agility-bonus';
        } else if (bonus.toLowerCase().search(/intelligence/) !== -1) {
            return 'intelligence-bonus';
        }
    }
}
