import { CurrentShoppingListContext } from 'home/providers';
import { useContext } from 'react';


export const useCurrentShoppingList = () => {
  const context = useContext(CurrentShoppingListContext)

  if (!context)
    throw new Error("This hook needs be wrapped by CurrentShoppingListProvider");

  return context
}