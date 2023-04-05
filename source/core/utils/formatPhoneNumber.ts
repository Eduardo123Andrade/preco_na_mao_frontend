import { REGEXP_PHONE_NUMBER_MASK } from "./regex";

export const formatPhoneNumber = (phoneNumber: string) =>
  phoneNumber.replace(REGEXP_PHONE_NUMBER_MASK, '($1) $2 $3-$4');

