import React, { createContext, useState } from "react";
import { User } from "core/interfaces";
import { MOCKED_USER_DATA } from "core/utils";


interface UserContextState {
  user: User
}

interface UserContextActions {
  setUser: (user: User) => void
  setUserName: (name: string) => void
}

type UserContextType = [
  state: UserContextState,
  actions: UserContextActions
]

export const UserContext = createContext<UserContextType>({} as UserContextType)

interface UserProvider {
  children: React.ReactNode
}

export const UserProvider: React.FC<UserProvider> = ({ children }) => {
  const [user, updateUser] = useState<User>()

  const setUser = (user: User) => {
    updateUser(user)
  }

  const setUserName = (name: string) => {
    updateUser(prevState => ({ ...prevState, name }))
  }

  return <UserContext.Provider
    children={children}
    value={[{ user }, { setUser, setUserName }]}
  />
}