import { Component } from "react";
import "./hero.css"

interface HeroProps {
    baseStats: any,
    // heroImgSrc: string
}

export class HeroComponent extends Component<HeroProps, {}> {
    baseStats: any;
    // heroImgSrc: string;

    constructor(props: any) {
        super(props)
        this.baseStats = props.baseStats;
        // this.heroImgSrc = props.heroImgSrc;
    }

    render() {
        return (
            <div className="hero-portrait">
                <div className="top-row">
                    {/* <img className="hero-image" alt="hero" src={this.heroImgSrc}/> */}
                    <div className="base-attributes">
                        <div className="base-strength">
                            <img className="icon" alt="strength" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/7/7a/Strength_attribute_symbol.png"/> <b>{ this.baseStats.strength.base }</b> { this.baseStats.strength.additional_per_level }
                        </div>
                        <div className="base-agility">
                            <img className="icon" alt="agility" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/2/2d/Agility_attribute_symbol.png"/> <b>{ this.baseStats.agility.base }</b> { this.baseStats.agility.additional_per_level }
                        </div>
                        <div className="base-intelligence">
                            <img className="icon" alt="intelligence" src="https://static.wikia.nocookie.net/dota2_gamepedia/images/5/56/Intelligence_attribute_symbol.png"/> <b>{ this.baseStats.intelligence.base }</b> { this.baseStats.intelligence.additional_per_level }
                        </div>
                    </div>
                </div>
                <div className="base-attack">
                    Base Attack Damage: { this.baseStats.attack }
                </div>
                <div className="base-attack-range">
                    Base Attack Range: { this.baseStats.attack_range }
                </div>
                <div className="base-attack-time">
                    Base Attack Time: { this.baseStats.attack_time }
                </div>
            </div>
        )
    }
}