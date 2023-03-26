import { Item, ShoppingList } from 'shopping-list/interfaces';

export const MOCKED_SHOPPING_LIST_ITEM: Item[] = [
  {
    id: '1',
    name: 'Produto 1',
    price: 100
  },
  {
    id: '2',
    name: 'Produto 2',
    price: 150
  },
  {
    id: '3',
    name: 'Produto 3',
    price: 50
  },
  {
    id: '4',
    name: 'Produto 4',
    price: 200
  },
]


export const MOCKED_SHOPPING_LIST: ShoppingList[] = [
  {
    id: '1',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 1"
  },
  {
    id: '2',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 2"
  },
  {
    id: '3',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 3"
  },
  {
    id: '4',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 4"
  },
  {
    id: '5',
    date: new Date(),
    items: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 5"
  },
]