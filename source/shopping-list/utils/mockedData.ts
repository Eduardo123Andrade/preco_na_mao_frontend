import { Product, ShoppingList, Marketplace } from 'shopping-list/interfaces';

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

export const MOCKED_MARKETPLACE_LIST: Marketplace[] = [
  {
    id: '1',
    name: "Mercado 1",
    products: MOCKED_SHOPPING_LIST_ITEM
  },
  {
    id: '2',
    name: "Mercado 2",
    products: MOCKED_SHOPPING_LIST_ITEM
  },
  {
    id: '3',
    name: "Mercado 3",
    products: MOCKED_SHOPPING_LIST_ITEM
  },
  {
    id: '4',
    name: "Mercado 4",
    products: MOCKED_SHOPPING_LIST_ITEM
  },
  {
    id: '5',
    name: "Mercado 5",
    products: MOCKED_SHOPPING_LIST_ITEM
  },
  {
    id: '6',
    name: "Mercado 6",
    products: MOCKED_SHOPPING_LIST_ITEM
  },
]

export const MOCKED_CURRENT_MARKETPLACE: Marketplace = {
  name: 'Mercado principal',
  id: '1',
  products: MOCKED_SHOPPING_LIST_ITEM
}

export const MOCKED_CURRENT_SHOPPING_LIST: ShoppingList = {
  name: "TEST",
  date: new Date(),
  id: '10',
  products: MOCKED_SHOPPING_LIST_ITEM
}