import { AuthenticationScreen } from 'authentication/components'
import { InputText, Text } from 'core/components'
import { useForm } from 'core/hooks'
import React from 'react'
import { View, StyleSheet } from 'react-native'

import { FieldValidation, validateName } from 'core/validations'
import { useSingUp } from 'authentication/hooks'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
const { string } = FieldValidation


interface UserName {
  name: string
}
const NAME_VALIDATION_SCHEMA = FieldValidation.object({
  name: string().label('name').required().test('name', 'Nome inválido', validateName),
})


const INITIAL_VALUES = {
  name: '',
}

export const SingUpNameScreen = () => {
  const navigation = useNavigation()
  const [, { setRegisterUserData }] = useSingUp()

  const onSubmit = ({ name }: UserName) => {
    setRegisterUserData({ name })
    navigation.navigate('SingUpCpfScreen')
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<UserName>({
    onSubmit,
    validationSchema: NAME_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  // Ajustar em dev
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
          autoCapitalize='words'
          placeholder='Nome'
          {...getFieldProps('name')}
        />
      </View>

    </AuthenticationScreen>
  )
}

const navigationOptions: StackNavigationOptions = {
  headerTransparent: true,
  title: ''
}

SingUpNameScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
