import { ForgottenPasswordContext } from 'authentication/providers';
import { useContext } from 'react';

export const useForgottenPassword = () => {
  const context = useContext(ForgottenPasswordContext)

  if (!context)
    throw new Error("This hook needs be wrapped by ForgottenPasswordProvider");

  return context
}