import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Button, InputText, Screen } from 'core/components'
import { useForm } from 'core/hooks'
import { FieldValidation, validateShoppingListName } from 'core/validations'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useCreateShoppingList } from 'shopping-list/hooks'

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
  const { createShoppingList } = useCreateShoppingList()


  /**
   *  router: shopping-list/create
   *  
   * body:
   *  cpf,
   *  name,
   * 
   * success: 
   *  status: ok
   *  response:
   *    id,
   *    name
   *    date
   * 
   * error:
   *  status: _
   *
   */


  const onSubmit = ({ name }: MarketplaceName) => {
    createShoppingList(name)
    navigation.navigate('MarketplaceListScreen')
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