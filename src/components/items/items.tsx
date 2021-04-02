import { Component } from "react";
import { Item } from "../../types/item";
import { NameTranslator } from "../../name-translator"
import { ItemComponent } from "./item/item";
import "./items.css"

interface ItemsProps {
    activeItems: string[],
    backpackItems: string[],
    onClose: () => void
}

export class ItemsComponent extends Component<ItemsProps, {}> {
    items: any = require('../../resources/items_data.json');
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
        const activeItemList: Item[] = this.props.activeItems.map((activeItem: string) => {
            return this.items[activeItem];
        })
        const backpackItemList: Item[] = this.props.backpackItems.map((backpackItem: string) => {
            return this.items[backpackItem];
        })
        return (
            <div className="item-info-panel">
                <div className="items-title">Items</div>
                <div className="item-selector-grid">
                    {
                        activeItemList.map((item: Item, index: number) => {
                            if (item) {
                                return <div className={(this.isSelectedItem(item) ? "selected-item ": "") + "item-selector-option"} key={'item-selector-' + index}>
                                    <img className="item-selector-image" src={item.image_src} alt={item.item_name} onClick={() => this.selectItemForDisplay(item)}/>
                                </div>
                            } else {
                                return <div className="item-selector-option" key={'item-selector-' + index}/>;
                            }
                        })
                    }
                    {
                        backpackItemList.map((item: Item, index: number) => {
                            if (item) {
                                return <div className={(this.isSelectedItem(item) ? "selected-item ": "") + "item-selector-option"} key={'item-selector-' + index}>
                                    <img className="item-selector-image" src={item.image_src} alt={item.item_name} onClick={() => this.selectItemForDisplay(item)}/>
                                </div>
                            } else {
                                return <div className="item-selector-option" key={'item-selector-' + index}/>;
                            }
                        })
                    }
                </div>
                <div className="close-items-button" onClick={this.props.onClose}>
                    Close
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
        if (this.state.selectedItem !== item) {
            this.setState({
                selectedItem: item
            });
        } else {
            this.setState({
                selectedItem: null
            })
        }
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