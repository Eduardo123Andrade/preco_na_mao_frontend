import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Logo, Screen } from 'core/components'
import { usePasswordValidationForm, useUpdatePassword, useUser } from 'core/hooks'
import { UserPasswordForm } from 'core/interfaces'
import React from 'react'
import { StyleSheet, View } from 'react-native'


export const UpdatePasswordScreen = () => {
  const navigation = useNavigation()
  const [{ user }] = useUser()
  // const [{ show, message }, { startModalError, resetState }] = useErrorModal()

  // const [{ isLoading }, { requestUpdatePassword }] = useUpdatePassword({
  //   onSuccess: () => {
  //     navigation.navigate("Home")
  //   },
  //   onError: ({ message }) => {
  //     // startModalError(message)
  //   }
  // })


  const onSubmit = (props: UserPasswordForm) => {
    const { cpf } = user
    navigation.navigate('ProfileScreen')
    // requestUpdatePassword({ ...props, cpf })
  }

  const [{ handleSubmit, isValid, fieldPropsPassword, fieldPropsConfirmPassword }] = usePasswordValidationForm({ onSubmit })


  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.bodyContainer}>
        <View>
          <View style={styles.inputTextContainer}>
            <InputText
              placeholder='Senha'
              secureTextEntry
              {...fieldPropsPassword}
            />
          </View>

          <View style={styles.inputTextContainer}>
            <InputText
              placeholder='Confirmar senha'
              secureTextEntry
              {...fieldPropsConfirmPassword}
            />
          </View>
        </View>

        <Button
          disabled={!isValid}
          onPress={handleSubmit}
        // isLoading={isLoading}
        >
          Salvar
        </Button>
      </View>
    </Screen>
  )
}

const navigationOptions: StackNavigationOptions = {
  title: 'Atualizar senha'
}

UpdatePasswordScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 24
  },
  logoContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
