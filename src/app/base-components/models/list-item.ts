export interface IListitem {
  title: string;
  icon: string;
  url: string;

  subListItems: IListitem[];
}
