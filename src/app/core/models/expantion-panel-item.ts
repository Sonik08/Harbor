import { IListItem } from "./list-item";

export interface IExpantionPanelItem {
    title: string;
    description: string;
    icon: string;
    url: string;

    listItems: IListItem[]
}