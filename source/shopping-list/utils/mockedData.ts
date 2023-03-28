import { MarketPlace } from './../interfaces/MarketPlaceInterface';
import { Product, ShoppingList } from 'shopping-list/interfaces';

export const MOCKED_SHOPPING_LIST_ITEM: Product[] = [
  {
    id: '1',
    name: 'Produto 1',
    price: 100,
    quantity: 1,
  },
  {
    id: '2',
    name: 'Produto 2',
    price: 150,
    quantity: 2,
  },
  {
    id: '3',
    name: 'Produto 3',
    price: 50,
    quantity: 3,
  },
  {
    id: '4',
    name: 'Produto 4',
    price: 200,
    quantity: 4,
  },
]


export const MOCKED_SHOPPING_LIST: ShoppingList[] = [
  {
    id: '1',
    date: new Date(),
    products: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 1"
  },
  {
    id: '2',
    date: new Date(),
    products: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 2"
  },
  {
    id: '3',
    date: new Date(),
    products: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 3"
  },
  {
    id: '4',
    date: new Date(),
    products: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 4"
  },
  {
    id: '5',
    date: new Date(),
    products: MOCKED_SHOPPING_LIST_ITEM,
    name: "Lista 5"
  },
]

export const MOCKED_MARKETPLACE_LIST: MarketPlace[] = [
  {
    id: '1',
    name: "Mercado 1",
  },
  {
    id: '2',
    name: "Mercado 2",
  },
  {
    id: '3',
    name: "Mercado 3",
  },
  {
    id: '4',
    name: "Mercado 4",
  },
  {
    id: '5',
    name: "Mercado 5",
  },
  {
    id: '6',
    name: "Mercado 6",
  },
]