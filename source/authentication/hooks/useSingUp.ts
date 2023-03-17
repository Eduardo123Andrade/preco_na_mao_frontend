import { SingUpContext } from 'authentication/providers';
import { useContext } from 'react';



export const useSingUp = () => {
  const context = useContext(SingUpContext)

  if (!context)
    throw new Error("This hook needs be wrapped by SingUpProvider");

  return context

}