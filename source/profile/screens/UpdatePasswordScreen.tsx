import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Logo, Screen } from 'core/components'
import { useErrorModal, usePasswordValidationForm, useUpdatePassword } from 'core/hooks'
import { UserPasswordForm } from 'core/interfaces'
import { SimpleModal } from 'core/modals'
import React from 'react'
import { StyleSheet, View } from 'react-native'



interface RouterParameter {
  password: string
}

type RootStackParamList = {
  UpdatePasswordScreen: RouterParameter
}

type UpdatePasswordRouteProp = RouteProp<RootStackParamList, 'UpdatePasswordScreen'>


export const UpdatePasswordScreen = () => {
  const navigation = useNavigation()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()

  const route = useRoute<UpdatePasswordRouteProp>()

  const { password } = route.params

  const { mutate, isLoading } = useUpdatePassword({
    onSuccess: () => {
      navigation.navigate("Home")
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })


  const onSubmit = (props: UserPasswordForm) => {
    mutate({ ...props, oldPassword: password })
  }

  const [{ isValid, fieldPropsPassword, fieldPropsConfirmPassword }, { handleSubmit }] = usePasswordValidationForm({ onSubmit })


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
          isLoading={isLoading}
        >
          Salvar
        </Button>
      </View>
      <SimpleModal
        visible={show}
        onRequestClose={resetState}
        message={message}
      />
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
