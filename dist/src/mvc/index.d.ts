import { TJSON } from "../common";
export declare class mvc {
    index: number;
    item: TJSON;
    list: TJSON[];
    constructor();
    create: () => void;
    update: (index: number, item: TJSON) => void;
    read: (index: number) => TJSON;
    delete: (index: number) => void;
}
