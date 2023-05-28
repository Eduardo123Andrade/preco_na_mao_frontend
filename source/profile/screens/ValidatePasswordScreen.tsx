import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Logo, Screen } from 'core/components'
import { useErrorModal, useForm } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FieldValidation } from 'core/validations'
import { useCheckPasswordRequest } from 'profile/hooks'
import { SimpleModal } from 'core/modals'



type RouterParameter = {
  nextRouterName: string
}

type RootStackParamList = {
  ValidatePasswordScreen: RouterParameter
}

type ValidatePasswordScreenRouteProp = RouteProp<
  RootStackParamList,
  'ValidatePasswordScreen'
>

interface Password {
  password: string
}

const INITIAL_VALUES: Password = {
  password: ''
}

const { string } = FieldValidation

export const PASSWORD_VALIDATION_SCHEMA = FieldValidation.object({
  password: string().min(6).required("É preciso atender a todos os requisitos").label('Senha'),
})


export const ValidatePasswordScreen = () => {
  const navigation = useNavigation()

  const route = useRoute<ValidatePasswordScreenRouteProp>()
  const { nextRouterName } = route.params
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()

  const { mutate, isLoading } = useCheckPasswordRequest({
    onSuccess: () => {
      navigation.navigate(nextRouterName)
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const onSubmit = ({ password }: Password) => {
    mutate({ password })
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<Password>({
    onSubmit,
    validationSchema: PASSWORD_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const onPress = () => handleSubmit()


  return (
    <Screen contentContainerStyles={styles.container}>
      <View>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <InputText
          placeholder='Senha'
          secureTextEntry
          {...getFieldProps('password')}
        />
      </View>

      <Button
        isLoading={isLoading}
        disabled={!isValid}
        onPress={onPress}
      >
        Avançar
      </Button>

      <SimpleModal
        visible={show}
        onRequestClose={resetState}
        message={message}
      />

    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  title: 'Validar senha'
}

ValidatePasswordScreen.NavigationOptions = navigationOptions



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
})