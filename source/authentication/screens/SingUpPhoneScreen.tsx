import { SingUpScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation } from 'core/validations'
import { REGEX_ONLY_NUMBERS } from 'core/utils'
import { useSingUp } from 'authentication/hooks'


const { string } = FieldValidation

type SingUpPhoneScreenProps = {

}

const PHONE_VALIDATION_SCHEMA = FieldValidation.object({
  phone: string().length(11).required(),
})


const INITIAL_VALUES = {
  phone: '',
}

export const SingUpPhoneScreen: React.FC<SingUpPhoneScreenProps> = () => {
  const [{ user }, { setRegisterUserData }] = useSingUp()
  const onSubmit = () => { }

  const { isValid, getFieldProps } = useForm<string>({
    onSubmit,
    validationSchema: PHONE_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })


  const { onChangeText: onChangeTextPhone, value: phoneFieldValue, ...restPhoneFieldProps } = getFieldProps('phone')

  const _onChangeTextPhone = (text: string) => {
    const pureText = text.replace(REGEX_ONLY_NUMBERS, "")
    onChangeTextPhone(pureText)
  }

  const onPress = () => {
    setRegisterUserData({ phone: phoneFieldValue })
  }

  useEffect(() => {
    console.log({ user })
  }, [user])

  return (
    <SingUpScreen
      disabled={!isValid}
      onPress={onPress}
    >
      <View style={styles.titleContainer}>
        <Text>
          Preço na Mão
        </Text>
      </View>

      <View style={styles.inputTextContainer}>
        <InputText
          mask='phone'
          keyboardType='numeric'
          placeholder='Celular'
          value={phoneFieldValue}
          onChangeText={_onChangeTextPhone}
          {...restPhoneFieldProps}
        />
      </View>
    </SingUpScreen>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
