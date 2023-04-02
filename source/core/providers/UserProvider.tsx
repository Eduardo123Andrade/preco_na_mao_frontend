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
  const [{ data }, { getData }] = useLocalStorage<User>()
  const [retrievingUserData, setRetrievingUserData] = useState(true)

  useEffect(() => {
    getData(USER_KEY)
  }, [getData])

  useEffect(() => {
    if (data && !user) {
      updateUser(data)
      setRetrievingUserData(false)
    }
  }, [data, user, updateUser])

  const setUser = (user: User) => {
    updateUser(user)
  }

  const setUserName = (name: string) => {
    updateUser(prevState => ({ ...prevState, name }))
  }

  return <UserContext.Provider
    children={children}
    value={[{ user, retrievingUserData }, { setUser, setUserName }]}
  />
}