import { Item, ShoppingList } from 'shopping-list/interfaces';

export const MOCKED_SHOPPING_LIST_ITEM: Item[] = [
  {
    id: '1',
    name: 'Item 1',
    price: 100
  },
  {
    id: '2',
    name: 'Item 2',
    price: 150
  },
  {
    id: '3',
    name: 'Item 3',
    price: 50
  },
  {
    id: '4',
    name: 'Item 4',
    price: 200
  },
]


export const MOCKED_SHOPPING_LIST: ShoppingList[] = [
  {
    id: '1',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Produto 1"
  },
  {
    id: '2',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Produto 2"
  },
  {
    id: '3',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Produto 3"
  },
  {
    id: '4',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Produto 4"
  },
  {
    id: '5',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Produto 5"
  },
]