import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Logo, Screen } from 'core/components'
import { useForm } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FieldValidation } from 'core/validations'



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

  const onSubmit = ({ password }: Password) => {
    navigation.navigate(nextRouterName)
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
        disabled={!isValid}
        onPress={onPress}
      >
        Avançar
      </Button>

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