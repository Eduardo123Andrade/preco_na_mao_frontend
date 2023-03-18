import { AuthenticationScreen } from 'authentication/components'
import { InputText } from 'core/components'
import { useForm } from 'core/hooks'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { FieldValidation, validateName } from 'core/validations'
import { useSingUp } from 'authentication/hooks'
import { useNavigation } from '@react-navigation/native'
const { string } = FieldValidation


type SingUpNameScreenProps = {

}

const NAME_VALIDATION_SCHEMA = FieldValidation.object({
  name: string().label('name').required().test('cpf', 'CPF invalido', validateName),
})


const INITIAL_VALUES = {
  name: '',
}

export const SingUpNameScreen: React.FC<SingUpNameScreenProps> = () => {
  const navigation = useNavigation()
  const [, { setRegisterUserData }] = useSingUp()
  const onSubmit = () => { }

  const { isValid, getFieldProps } = useForm<string>({
    onSubmit,
    validationSchema: NAME_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })


  const { value: nameFieldValue, ...restNameFieldProps } = getFieldProps('name')

  const onPress = () => {
    setRegisterUserData({ name: nameFieldValue })
    navigation.navigate('SingUpCpfScreen')
  }

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
          {...restNameFieldProps}
        />
      </View>

    </AuthenticationScreen>
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
