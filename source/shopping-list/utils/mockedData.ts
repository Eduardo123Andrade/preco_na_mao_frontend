import { Marketplace } from 'shopping-list/interfaces';
import { Product, ShoppingList } from 'core/interfaces'

export const MOCKED_SHOPPING_LIST_ITEM: Product[] = [
  {
    id: '25',
    name: 'Produto 1',
    price: 100,
    quantity: 1,
  },
  {
    id: '26',
    name: 'Produto 2',
    price: 150,
    quantity: 2,
  },
  {
    id: '27',
    name: 'Produto 3',
    price: 50,
    quantity: 3,
  },
  {
    id: '28',
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
    products: [
      {
        id: '1',
        name: 'P1 - M1',
        price: 50,
        quantity: 0,
      },
      {
        id: '2',
        name: 'P2 - M1',
        price: 75,
        quantity: 0
      },
      {
        id: '3',
        name: 'P3- M1',
        price: 100,
        quantity: 0,
      },
      {
        id: '4',
        name: 'P4 - M1',
        price: 30,
        quantity: 0
      }
    ]
  },
  {
    id: '2',
    name: "Mercado 2",
    products: [
      {
        id: '5',
        name: 'P1 - M2',
        price: 50,
        quantity: 0,
      },
      {
        id: '6',
        name: 'P2 - M2',
        price: 75,
        quantity: 0
      },
      {
        id: '7',
        name: 'P3- M2',
        price: 100,
        quantity: 0,
      },
      {
        id: '8',
        name: 'P4 - M2',
        price: 30,
        quantity: 0
      }
    ]
  },
  {
    id: '3',
    name: "Mercado 3",
    products: [
      {
        id: '9',
        name: 'P1 - M3',
        price: 50,
        quantity: 0,
      },
      {
        id: '10',
        name: 'P2 - M3',
        price: 75,
        quantity: 0
      },
      {
        id: '11',
        name: 'P3- M3',
        price: 100,
        quantity: 0,
      },
      {
        id: '12',
        name: 'P4 - M3',
        price: 30,
        quantity: 0
      }
    ]
  },
  {
    id: '4',
    name: "Mercado 4",
    products: [
      {
        id: '13',
        name: 'P1 - M4',
        price: 50,
        quantity: 0,
      },
      {
        id: '14',
        name: 'P2 - M4',
        price: 75,
        quantity: 0
      },
      {
        id: '15',
        name: 'P3- M4',
        price: 100,
        quantity: 0,
      },
      {
        id: '16',
        name: 'P4 - M4',
        price: 30,
        quantity: 0
      }
    ]
  },
  {
    id: '5',
    name: "Mercado 5",
    products: [
      {
        id: '17',
        name: 'P1 - M5',
        price: 50,
        quantity: 0,
      },
      {
        id: '18',
        name: 'P2 - M5',
        price: 75,
        quantity: 0
      },
      {
        id: '19',
        name: 'P3- M5',
        price: 100,
        quantity: 0,
      },
      {
        id: '20',
        name: 'P4 - M5',
        price: 30,
        quantity: 0
      }
    ]
  },
  {
    id: '6',
    name: "Mercado 6",
    products: [
      {
        id: '21',
        name: 'P1 - M6',
        price: 50,
        quantity: 0,
      },
      {
        id: '22',
        name: 'P2 - M6',
        price: 75,
        quantity: 0
      },
      {
        id: '23',
        name: 'P3- M6',
        price: 100,
        quantity: 0,
      },
      {
        id: '24',
        name: 'P4 - M6',
        price: 30,
        quantity: 0
      }
    ]
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