import { UpdatePhoneNumberContext } from "profile/providers";
import { useContext } from "react"

export const useUpdatePhoneNumber = () => {
  const context = useContext(UpdatePhoneNumberContext)

  if (!context)
    throw new Error("This hook needs be wrapper by UpdatePhoneNumberProvider");

  return context
}