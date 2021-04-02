import { Component } from "react";
import "./talents.css"

interface TalentProps {
    talentData: any,
    talentChoices: string[]
}

export class TalentsComponent extends Component<TalentProps, {}> {
    render() {
        return (
            <div className="talent-tree-popup">
                <div className="talents-title">Talent Tree</div>
                <table>
                    <tbody>
                        <tr className="talent-tree-row">
                            <td className={ this.props.talentChoices.includes('25-left') ? 'talent-selected' : '' }>
                                { this.props.talentData["25"].left_talent }
                            </td>
                            <td className="talent-level">25</td>
                            <td className={ this.props.talentChoices.includes('25-right') ? 'talent-selected' : '' }>
                                { this.props.talentData["25"].right_talent }
                            </td>
                        </tr>
                        <tr className="talent-tree-row">
                            <td className={ this.props.talentChoices.includes('20-left') ? 'talent-selected' : '' }>
                                { this.props.talentData["20"].left_talent }
                            </td>
                            <td className="talent-level">20</td>
                            <td className={ this.props.talentChoices.includes('20-right') ? 'talent-selected' : '' }>
                                { this.props.talentData["20"].right_talent }
                            </td>
                        </tr>
                        <tr className="talent-tree-row">
                            <td className={ this.props.talentChoices.includes('15-left') ? 'talent-selected' : '' }>
                                { this.props.talentData["15"].left_talent }
                            </td>
                            <td className="talent-level">15</td>
                            <td className={ this.props.talentChoices.includes('15-right') ? 'talent-selected' : '' }>
                                { this.props.talentData["15"].right_talent }
                            </td>
                        </tr>
                        <tr className="talent-tree-row">
                            <td className={ this.props.talentChoices.includes('10-left') ? 'talent-selected' : '' }>
                                { this.props.talentData["10"].left_talent }
                            </td>
                            <td className="talent-level">10</td>
                            <td className={ this.props.talentChoices.includes('10-right') ? 'talent-selected' : '' }>
                                { this.props.talentData["10"].right_talent }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}