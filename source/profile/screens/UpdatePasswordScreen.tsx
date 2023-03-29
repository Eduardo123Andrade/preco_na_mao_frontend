import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen, Text } from 'core/components'
import { useErrorModal, useForm, useUpdatePassword, useUser } from 'core/hooks'
import { UserPasswordForm } from 'core/interfaces'
import { PASSWORD_VALIDATION_SCHEMA } from 'core/validations/schemas'
import React from 'react'
import { StyleSheet, View } from 'react-native'


const INITIAL_VALUES: UserPasswordForm = {
  password: '',
  confirmPassword: '',
}

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

  const { handleSubmit, isValid, getFieldProps } = useForm<UserPasswordForm>({
    onSubmit,
    validationSchema: PASSWORD_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.titleContainer}>
        <Text>
          Preço na Mão
        </Text>
      </View>

      <View>
        <View style={styles.inputTextContainer}>
          <InputText
            placeholder='Senha'
            secureTextEntry
            {...getFieldProps('password')}
          />
        </View>

        <View style={styles.inputTextContainer}>
          <InputText
            placeholder='Confirmar senha'
            secureTextEntry
            {...getFieldProps('confirmPassword')}
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
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})
