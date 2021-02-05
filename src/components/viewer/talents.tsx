import { Component } from "react";
import "./talents.css"

interface TalentProps {
    talentData: any
}

export class TalentsComponent extends Component<TalentProps, {}> {
    talentData: any;

    constructor(props: any) {
        super(props)
        this.talentData = props.talentData;
    }

    render() {
        return (
            <div className="talent-tree-popup">
                <div className="talents-title">Talent Tree</div>
                <table>
                    <tbody>
                        <tr className="talent-tree-row">
                            <td>
                                { this.talentData["25"].left_talent }
                            </td>
                            <td className="talent-level">
                                <div>25</div>
                            </td>
                            <td>
                                { this.talentData["25"].right_talent }
                            </td>
                        </tr>
                        <tr className="talent-tree-row">
                            <td>
                                { this.talentData["20"].left_talent }
                            </td>
                            <td className="talent-level">20</td>
                            <td>
                                { this.talentData["20"].right_talent }
                            </td>
                        </tr>
                        <tr className="talent-tree-row">
                            <td>
                                { this.talentData["15"].left_talent }
                            </td>
                            <td className="talent-level">15</td>
                            <td>
                                { this.talentData["15"].right_talent }
                            </td>
                        </tr>
                        <tr className="talent-tree-row">
                            <td>
                                { this.talentData["10"].left_talent }
                            </td>
                            <td className="talent-level">10</td>
                            <td>
                                { this.talentData["10"].right_talent }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}