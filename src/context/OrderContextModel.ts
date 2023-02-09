import { Item } from "../models/Item";

export interface OrderContextModel {
  order: Item[];
  // name of the function, what it requires to give it, and what it returns
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
}
