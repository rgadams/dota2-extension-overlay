export interface ItemNote {
    title: string;
    value: string;
}

export interface Item {
    item_name: string;
    image_src: string;
    item_cost: string;
    active: {
        name: string;
        effect: string;
        cooldown?: string;
        notes?: ItemNote[];
    };
    passive: {
        name: string;
        effect: string;
        cooldown?: string;
        notes?: ItemNote[];
    };
}