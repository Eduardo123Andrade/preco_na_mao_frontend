import { UserContext } from 'core/providers';
import { useContext } from 'react';


export const useUser = () => {
  const context = useContext(UserContext)

  if (!context)
    throw new Error("This hook must be wrapped by UserProvider context");

  return context
}