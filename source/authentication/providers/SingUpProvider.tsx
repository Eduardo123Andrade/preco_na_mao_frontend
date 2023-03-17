import { RegisterUser } from "authentication/interfaces";
import React, { createContext, useState } from "react";

interface SingUpProviderState {
  user: RegisterUser
}

interface SingUpProviderActions {
  setRegisterUserData: (user: RegisterUser) => void
}


type SingUpProviderData = [
  state: SingUpProviderState,
  actions: SingUpProviderActions
]



export const SingUpContext = createContext<SingUpProviderData>({} as SingUpProviderData)

interface SingUpProviderDataProps {
  children: React.ReactNode,
}

export const SingUpProvider: React.FC<SingUpProviderDataProps> = ({ children }) => {
  const [user, setRegisterUser] = useState<RegisterUser>()

  const setRegisterUserData = (user: RegisterUser) => {
    setRegisterUser(prevState => ({ ...prevState, ...user }))
  }


  return <SingUpContext.Provider
    children={children}
    value={[
      { user },
      { setRegisterUserData }
    ]} />

}


