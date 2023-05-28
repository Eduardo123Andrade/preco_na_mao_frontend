import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen } from 'core/components'
import { useErrorModal, useForm } from 'core/hooks'
import { SimpleModal } from 'core/modals'
import { FieldValidation, validateShoppingListName } from 'core/validations'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useRequestCreateShoppingList, useShoppingList } from 'shopping-list/hooks'

const { string } = FieldValidation

interface MarketplaceName {
  name: string
}

const MARKETPLACE_NAME_VALIDATION_SCHEMA = FieldValidation.object({
  name: string().label('name').required().test('name', 'Nome inválido', validateShoppingListName),
})


const INITIAL_VALUES = {
  name: '',
}

export const CreateShoppingListScreen = () => {
  const navigation = useNavigation()
  const [, { selectShoppingList }] = useShoppingList()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()


  const { mutate } = useRequestCreateShoppingList({
    onSuccess: ({ data }) => {
      selectShoppingList({ ...data, products: [] })
      navigation.navigate('MarketplaceListScreen')
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const onSubmit = ({ name }: MarketplaceName) => {
    mutate({ name })
  }

  const { handleSubmit, isValid, getFieldProps } = useForm<MarketplaceName>({
    onSubmit,
    validationSchema: MARKETPLACE_NAME_VALIDATION_SCHEMA,
    initialValues: INITIAL_VALUES,
  })

  const onPress = () => handleSubmit()

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.subContainer}>
        <InputText
          autoCapitalize='sentences'
          placeholder='Nova lista'
          {...getFieldProps('name')}
        />
        <Button
          disabled={!isValid}
          onPress={onPress}>
          Avançar
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
  title: 'Criar lista de compras'
}

CreateShoppingListScreen.NavigationOptions = navigationOptions

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 30,
    justifyContent: 'space-between'
  }
})