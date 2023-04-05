import React, { createContext, useState } from "react"

interface UpdatePhoneNumberProviderState {
  phoneNumber: string
}

interface UpdatePhoneNumberProviderActions {
  setPhoneNumber: (phoneNumber: string) => void
}

type UpdatePhoneNumberProviderData = [
  state: UpdatePhoneNumberProviderState,
  actions: UpdatePhoneNumberProviderActions
]

export const UpdatePhoneNumberContext = createContext<UpdatePhoneNumberProviderData>({} as UpdatePhoneNumberProviderData)

interface UpdatePhoneNumberProviderProps {
  children: React.ReactNode
}

export const UpdatePhoneNumberProvider: React.FC<UpdatePhoneNumberProviderProps> = ({ children }) => {
  const [phoneNumber, updatePhoneNumber] = useState<string>()

  const setPhoneNumber = (phoneNumber: string) => {
    updatePhoneNumber(phoneNumber)
  }

  return <UpdatePhoneNumberContext.Provider
    children={children}
    value={[{ phoneNumber }, { setPhoneNumber }]}
  />

}