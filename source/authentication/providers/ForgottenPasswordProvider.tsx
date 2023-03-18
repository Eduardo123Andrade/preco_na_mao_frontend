import React, { createContext, useState } from "react";

interface ForgottenPassword {
  cpf: string
  code?: string
}

interface ForgottenPasswordProviderState {
  forgottenPassword: ForgottenPassword
}

interface ForgottenPasswordProviderActions {
  setForgottenPasswordData: (forgottenPassword: ForgottenPassword) => void
}


type ForgottenPasswordProviderData = [
  state: ForgottenPasswordProviderState,
  actions: ForgottenPasswordProviderActions
]

export const ForgottenPasswordContext =
  createContext<ForgottenPasswordProviderData>({} as ForgottenPasswordProviderData)

interface ForgottenPasswordProviderDataProps {
  children: React.ReactNode,
  cpf: string
}

export const ForgottenPasswordProvider: React.FC<ForgottenPasswordProviderDataProps> = ({ children, cpf }) => {
  const [forgottenPassword, setRegisterUser] = useState<ForgottenPassword>({ cpf })

  const setForgottenPasswordData = (forgottenPassword: ForgottenPassword) => {
    setRegisterUser(prevState => ({ ...prevState, ...forgottenPassword }))
  }


  return <ForgottenPasswordContext.Provider
    children={children}
    value={[
      { forgottenPassword },
      { setForgottenPasswordData }
    ]} />

}


