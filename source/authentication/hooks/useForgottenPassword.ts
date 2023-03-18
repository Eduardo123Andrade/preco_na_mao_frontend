import { ForgottenPasswordContext } from './../providers/ForgottenPasswordProvider';
import { createContext } from 'react';

export const useForgottenPassword = () => {
  const context = createContext(ForgottenPasswordContext)

  if (!context)
    throw new Error("This hook needs be wrapped by ForgottenPasswordProvider");

  return context
}