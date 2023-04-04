import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen, Text } from 'core/components'
import { usePhoneNumberForm } from 'core/hooks'
import { UserPhoneForm } from 'core/interfaces'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export const UpdatePhoneNumber = () => {
  const onSubmit = ({ phone }: UserPhoneForm) => {
    console.log({ phone })
  }

  const [{ isValid, fieldProps }, { handleSubmit }] = usePhoneNumberForm({ onSubmit })

  const onPress = () => handleSubmit()

  return (
    <Screen contentContainerStyles={styles.container}>
      <View>
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
            {...fieldProps}
          />
        </View>
      </View>

      <Button
        onPress={onPress}
        disabled={!isValid}
      >
        Avançar
      </Button>
    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  title: 'Atulizar telefone'
}

UpdatePhoneNumber.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'space-between'
  },
  titleContainer: {
    alignItems: 'center',
  },
  inputTextContainer: {
    paddingVertical: 10
  },
})