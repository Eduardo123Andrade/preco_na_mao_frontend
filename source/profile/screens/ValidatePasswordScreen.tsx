import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen, Text } from 'core/components'
import { useForm } from 'core/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { FieldValidation } from 'core/validations'


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


  const onSubmit = ({ password }: Password) => {
    console.log(password)
    navigation.navigate('UpdatePasswordScreen')
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
        <View style={styles.titleContainer}>
          <Text>
            Preço na Mão
          </Text>
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
    padding: 24
  },
  titleContainer: {
    alignItems: 'center',
  },
})