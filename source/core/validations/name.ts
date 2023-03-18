import { REGEXP_FULL_NAME_WITH_MIN_THREE_CHARACTERS } from "core/utils";

export const validateName = (name: string) => {
  console.log(REGEXP_FULL_NAME_WITH_MIN_THREE_CHARACTERS.test)
  return REGEXP_FULL_NAME_WITH_MIN_THREE_CHARACTERS.test(name)
}