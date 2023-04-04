import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen } from 'core/components'
import { useForm, useUser } from 'core/hooks'
import { FieldValidation, validateName } from 'core/validations'
import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'

const { string } = FieldValidation

interface UserName {
  name: string
}

const NAME_VALIDATION_SCHEMA = FieldValidation.object({
  name: string().label('name').required().test('name', 'Nome inválido', validateName),
})

const INITIAL_VALUE: UserName = {
  name: ''
}

export const ProfileScreen = () => {
  const [{ user }, { setUserName }] = useUser()
  const [name, setName] = useState<string>(user.name)

  const navigation = useNavigation()

  const onSubmit = ({ name }: UserName) => {
    setUserName(name)
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<UserName>({
    onSubmit,
    initialValues: INITIAL_VALUE,
    validationSchema: NAME_VALIDATION_SCHEMA
  })

  const { onChangeText, ...restNameFieldProps } = getFieldProps("name")

  const _onChangeText = (text: string) => {
    onChangeText(text)
    setName(text)
  }

  const onPress = () => handleSubmit()

  const goToUpdatePasswordScreen = () => {
    navigation.navigate('UpdatePassword', {
      screen: 'ValidatePasswordScreen',
      params: {
        nextRouterName: 'UpdatePasswordScreen',
      }
    })
  }

  const goToUpdatePhoneNumberScreen = () => {
    navigation.navigate('PhoneNumberScreen', {
      screen: 'ValidatePasswordScreen',
      params: {
        nextRouterName: 'PhoneNumberScreen',
      }
    })
  }

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.inputContainer}>
        <InputText
          {...restNameFieldProps}
          value={name}
          onChangeText={_onChangeText}
        />

        <InputText
          disabled
          value={user.phone}
          onPressOnDisabled={goToUpdatePhoneNumberScreen}
        />

        <InputText
          disabled
          value="123123123123"
          secureTextEntry
          onPressOnDisabled={goToUpdatePasswordScreen}
        />
      </View>

      <Button
        disabled={!isValid}
        onPress={onPress}>
        Avançar
      </Button>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  title: 'Atualizar dados'
}

ProfileScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  inputContainer: {
    flex: 0.6,
    justifyContent: 'space-around'
  }
})