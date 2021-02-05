import { Component } from "react";
import "./item.css"

interface ItemProps {
    itemData: any
}

export class ItemComponent extends Component<ItemProps, {}> {
    state: any;

    constructor(props: any) {
        super(props)
        this.state = {
            itemData: props.itemData
        }
    }

    componentWillReceiveProps(nextProps: any) {
        if (this.props.itemData !== nextProps.itemData) {
            this.setState({
                itemData: nextProps.itemData
            });
        }
    }

    render() {
        return (
            <div className="item">
                <div className="item-top-row">
                    <div className="item-identifiers"> 
                        <img className="item-image" src={ this.state.itemData.image_src } alt={ this.state.itemData.item_name }/>
                        <div className="item-name">{ this.state.itemData.item_name }</div>
                    </div>
                    <div className="item-cost">
                        <img className="gold-icon" alt="gold" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/c/cd/Gold_symbol.png"/> { this.state.itemData.item_cost }
                    </div>
                </div>
                {this.renderItemBonuses()}
                {this.renderActiveAbility()}
                {this.renderPassiveAbility()}
            </div>
        )
    }

    renderItemBonuses() {
        if (this.state.itemData.bonuses) {
            return(
                <div className="item-bonuses">
                {
                    this.state.itemData.bonuses.map((bonus: any, index: any) => {
                        console.log(bonus);
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
        if (this.state.itemData.active) {
            return (
                <div className="active-ability">
                    <div className="item-ability-header active-ability-header">
                        <div>Active: {this.state.itemData.active.name}</div>{ this.displayCooldown(this.state.itemData.active) }
                    </div>
                    <div className="active-ability-effect">
                        {this.state.itemData.active.effect}
                    </div>
                    { this.displayItemAbilityNotes(this.state.itemData.active) }
                </div>
            )
        }
    }


    renderPassiveAbility() {
        if (this.state.itemData.passive) {
            return (
                <div className="passive-ability">
                    <div className="item-ability-header passive-ability-header">
                        <div>Passive: {this.state.itemData.passive.name}</div>{ this.displayCooldown(this.state.itemData.passive) }
                    </div>
                    <div className="passive-ability-effect">
                        {this.state.itemData.passive.effect}
                    </div>
                    { this.displayItemAbilityNotes(this.state.itemData.passive) }
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
