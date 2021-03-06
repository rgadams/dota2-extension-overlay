import { Component } from "react";
import { Item } from "types/item";
import { NameTranslator } from "../name-translator"
import { ItemComponent } from "./item/item";
import "./items.css"

interface ItemsProps {
    activeItems: string[],
    backpackItems: string[]
}

export class ItemsComponent extends Component<ItemsProps, {}> {
    items: any = require('resources/items_data.json');
    nameTranslator: NameTranslator = new NameTranslator();
    state: {
        selectedItem?: Item;
    } = {};

    componentDidUpdate(nextProps: any) {
        if (this.props.activeItems !== nextProps.activeItems 
            || this.props.backpackItems !== nextProps.backpackItems) {
            this.setState({
                activeItems: nextProps.activeItems,
                backpackItems: nextProps.backpackItems
            });
        }
    }

    render() {
        const activeItemList: Item[] = [...new Set(this.props.activeItems)].map((activeItem: string) => {
            const itemName = this.translateItemName(activeItem);
            return this.items[itemName];
        })
        const backpackItemList: Item[] = [...new Set(this.props.backpackItems)].map((backpackItem: string) => {
            const itemName = this.translateItemName(backpackItem);
            return this.items[itemName];
        })
        return (
            <div className="item-info-panel">
                <div className="item-selector">
                    <div className="item-selector-inventory">
                        <div className="selector-label">Inventory</div>
                        {
                            activeItemList.map((item: Item) => {
                                if (item) {
                                    return <div className={(this.isSelectedItem(item) ? "selected-item ": "") + "item-selector-option"} key={'item-selector-' + item.item_name}>
                                        <img className="item-selector-image" src={item.image_src} alt={item.item_name} onClick={() => this.selectItemForDisplay(item)}/>
                                    </div>
                                } else {
                                    return null;
                                }
                            })
                        }
                    </div>
                    <div className="item-selector-backpack">
                        <div className="selector-label">Backpack</div>
                        {
                            backpackItemList.map((item: Item) => {
                                if (item) {
                                    return <div className={(this.isSelectedItem(item) ? "selected-item ": "") + "item-selector-option"} key={'item-selector-' + item.item_name}>
                                        <img className="item-selector-image" src={item.image_src} alt={item.item_name} onClick={() => this.selectItemForDisplay(item)}/>
                                    </div>
                                } else {
                                    return null;
                                }
                            })
                        }
                    </div>
                </div>
                <div className="item-information">
                    { this.displaySelectedItem() }
                </div>
            </div>
        )
    }


    /**
     * Translates the name of the item returned with the Game State to a name recognizable by the scraped item data
     * @param itemName The untranslated item name
     */
    translateItemName(itemName: string) {
        let translatedItemName = itemName.replace(/.*?_/, '')
            .split("_")
            .map((str: string) => str.charAt(0).toUpperCase() + str.substring(1))
            .join(" ")
            .trim()
            .replace(" Of ", " of ");
        return this.nameTranslator.translateItemName(translatedItemName);
    }

    displaySelectedItem() {
        if (this.state.selectedItem) {
            return <ItemComponent itemData={this.state.selectedItem} deselectItem={this.handleDeselectItem.bind(this)}></ItemComponent>
        }
    }

    selectItemForDisplay(item: Item) {
        this.setState({
            selectedItem: item
        });
    }

    isSelectedItem(item: Item) {
        if (!this.state.selectedItem) {
            return false;
        }
        return item.item_name === this.state.selectedItem.item_name
    }

    handleDeselectItem() {
        this.setState({
            selectedItem: null
        });
    }
}