export interface IListItem {
  title: string;
  icon: string;
  url: string;

  subListItems: IListItem[];
}
