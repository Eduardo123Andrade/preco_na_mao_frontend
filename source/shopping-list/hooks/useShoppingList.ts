import { ShoppingListContext } from 'shopping-list/providers';
import { useContext } from 'react';

export const useShoppingList = () => {
  const context = useContext(ShoppingListContext)

  if (!context)
    throw new Error("This hook needs be wrapped by ShoppingListProvider");

  return context
}