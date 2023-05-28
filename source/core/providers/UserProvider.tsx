import React, { createContext, useEffect, useState } from "react";
import { User } from "core/interfaces";
import { useLocalStorage } from "core/hooks";
import { USER_KEY } from "core/constants";


interface UserContextState {
  user: User
  retrievingUserData: boolean
}

interface UserContextActions {
  setUser: (user: User) => void
  setUserName: (name: string) => void
  setPhoneNumber: (phoneNumber: string) => void
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
  const [, { getData }] = useLocalStorage<User>()
  const [retrievingUserData, setRetrievingUserData] = useState(true)

  useEffect(() => {
    getData(USER_KEY)
      .then(user => {
        if (user) updateUser(user)
        setRetrievingUserData(false)
      })
  }, [])


  const setUser = (user: User) => {
    updateUser(user)
  }

  const setUserName = (name: string) => {
    updateUser(prevState => ({ ...prevState, name }))
  }

  const setPhoneNumber = (phoneNumber: string) => {
    updateUser(prevState => ({ ...prevState, phoneNumber }))
  }

  return <UserContext.Provider
    children={children}
    value={[{ user, retrievingUserData }, { setUser, setUserName, setPhoneNumber }]}
  />
}