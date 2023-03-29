import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation } from 'core/validations'
import { REGEXP_ONLY_NUMBERS } from 'core/utils'
import { useSingUp } from 'authentication/hooks'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'


const { string } = FieldValidation

interface UserPhone {
  phone: string
}

const PHONE_VALIDATION_SCHEMA = FieldValidation.object({
  phone: string().length(11).required(),
})


const INITIAL_VALUES = {
  phone: '',
}

export const SingUpPhoneScreen = () => {
  const navigation = useNavigation()
  const [, { setRegisterUserData }] = useSingUp()


  const onSubmit = ({ phone }: UserPhone) => {
    setRegisterUserData({ phone })
    navigation.navigate("SingUpPasswordScreen")

  }

  const { handleSubmit, isValid, getFieldProps } = useForm<UserPhone>({
    onSubmit,
    validationSchema: PHONE_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const { onChangeText: onChangeTextPhone, value: phoneFieldValue, ...restPhoneFieldProps } = getFieldProps('phone')

  const _onChangeTextPhone = (text: string) => {
    const pureText = text.replace(REGEXP_ONLY_NUMBERS, "")
    onChangeTextPhone(pureText)
  }

  const onPress = () => handleSubmit()

  return (
    <AuthenticationScreen
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
    </AuthenticationScreen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerTransparent: true,
  title: ''
}

SingUpPhoneScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
