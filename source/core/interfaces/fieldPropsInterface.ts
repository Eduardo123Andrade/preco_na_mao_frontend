import { InputStatus } from "core/types";

export interface FieldProps<T = string> {
  status: InputStatus;
  onChangeText: any;
  onBlur: any;
  value: T;
  subtitle: string;
}