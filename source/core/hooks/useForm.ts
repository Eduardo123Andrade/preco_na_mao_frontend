import { useFormik, FormikConfig, FormikValues, FieldInputProps as FieldInputPropsFormik, FormikHelpers } from "formik"
import { useCallback, useImperativeHandle, useMemo, useRef } from "react"


interface UseFormProps<Value> {
  validationSchema: object
  initialValues: Value
  onSubmit: (values?: Value, helper?: FormikHelpers<Value>) => void
}

export const useForm =
  <Value = unknown, FieldInputProps = unknown>(props: UseFormProps<Value>) => {

    const formik = useFormik({
      validateOnMount: true,
      validateOnChange: true,
      ...props,
    })

    useImperativeHandle(null, () => formik, [formik])

    const { getFieldProps: _getFieldProps, getFieldMeta } = formik

    const inputEvents = useRef<any>({})


    const getFieldProps = useCallback(
      (key: string) => {
        const { onChange, value, onBlur: _onBlur } = _getFieldProps(key) as FieldInputPropsFormik<FieldInputProps>
        const { error, touched } = getFieldMeta(key)

        // const status = getCurrentStatus(touched, error, value)

        if (!inputEvents.current[key]) {
          inputEvents.current[key] = {
            onChange: onChange(key),
            onBlur: _onBlur(key),
          }
        }

        const { onBlur, onChange: onChangeText } = inputEvents.current[key]
        const subtitle = touched && error ? error : null

        // return {status, onChangeText, onBlur, value, subtitle}
        return { onChangeText, onBlur, value, subtitle }
      },
      [_getFieldProps, getFieldMeta],
    )
    // return formik
    return useMemo(() => ({ ...formik, getFieldProps }), [formik, getFieldProps])

  }