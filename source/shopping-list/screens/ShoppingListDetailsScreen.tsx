import { useNavigation } from '@react-navigation/native'
import { StackNavigationOptions } from '@react-navigation/stack'
import { Icon, Loading, Screen, Text, TotalPrice } from 'core/components'
import { SHOPPING_LIST_KEY } from 'core/constants'
import { useErrorModal, useLocalStorage } from 'core/hooks'
import { calculateTotalPrice } from 'core/utils'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { Product } from 'shopping-list/components'
import { useShoppingList } from 'shopping-list/hooks/useShoppingList'
import { Product as ProductInterface, ShoppingList } from 'core/interfaces'
import { useRequestAddItemsOnShoppingList, useRequestShoppingListDetail } from 'shopping-list/hooks'
import { Modal, SimpleModal } from 'core/modals'

interface RenderItemProps {
  item: ProductInterface
}

const renderItem = ({ item }: RenderItemProps) => {
  return (
    <View style={styles.productContainer} key={`${item.id}`}>
      <Product product={item} />
    </View>
  )
}

const renderLoading = () => {
  return (
    <Screen contentContainerStyles={styles.container}>
      <Loading />
    </Screen>
  )
}

export const ShoppingListDetailsScreen = () => {
  const [{ currentShoppingList }, { saveShoppingList, deleteList, selectShoppingList }] = useShoppingList()
  const [, { storeData }] = useLocalStorage<ShoppingList>()
  const [{ show, message }, { startModalError, resetState }] = useErrorModal()
  const [selectedProducts, setSelectedProducts] = useState<ProductInterface[]>([])


  const { isLoading, refetch } = useRequestShoppingListDetail({
    onSuccess: ({ data }) => {
      selectShoppingList(data)
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const { isLoading: isLoadingUpdate, mutate } = useRequestAddItemsOnShoppingList({
    onSuccess: () => {
      refetch()
    },
    onError: ({ response }) => {
      const { data: { message } } = response
      startModalError(message)
    }
  })

  const { products } = currentShoppingList
  const navigation = useNavigation()

  const totalPrice = products.reduce(calculateTotalPrice, 0)

  const onPressAddNewProducts = () => navigation.navigate('MarketplaceListScreen')

  const onPressDeleteList = () => {
    deleteList()
    navigation.goBack()
  }

  const onPressAddStartShopping = () => {
    storeData(SHOPPING_LIST_KEY, currentShoppingList)
    navigation.navigate('Home')
  }


  const onPressAddSave = () => {
    const productsToUpDate = products
      .filter(item => item.edited)
      .map(item => ({ id: item.id, quantity: item.quantity }))

    mutate({
      listId: currentShoppingList.id,
      products: productsToUpDate
    })
  }

  const hasEditedItem = products.find(item => item.edited)

  const onRequestClose = () => {
    resetState()
    navigation.goBack()
  }

  useEffect(() => navigation.addListener("focus", () => {
    refetch()
  }), [navigation])

  if (isLoading)
    return renderLoading()

  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headerContainer}>
          <Text>
            {currentShoppingList.name}
          </Text>
          <View style={styles.iconContainer}>
            <Icon
              name='delete'
              onPress={onPressDeleteList}
            />
            <Icon
              name='play-arrow'
              onPress={onPressAddStartShopping}
            />

            {hasEditedItem && (
              <Icon
                name='save'
                onPress={onPressAddSave}
              />
            )}

            {!hasEditedItem && (
              <Icon
                mode='ant_design'
                name='plus'
                onPress={onPressAddNewProducts}
              />
            )}
          </View>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={products}
            renderItem={renderItem}
            contentContainerStyle={styles.listContentContainer}
          />
        </View>
      </View>

      <View style={styles.footerContainer}>
        <TotalPrice totalPrice={totalPrice} />
      </View>
      <SimpleModal
        visible={show}
        message={message}
        onRequestClose={onRequestClose}
      />
      <Modal
        visible={isLoadingUpdate}
        onRequestClose={() => { }}
      >
        <Loading />
      </Modal>

    </Screen>
  )
}


const navigationOptions: StackNavigationOptions = {
  title: 'Detalhe da lista'
}

ShoppingListDetailsScreen.NavigationOptions = navigationOptions


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  subContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  iconContainer: {
    flexDirection: 'row',
  },
  listContainer: {
    marginHorizontal: -15,
    flexGrow: 1,
  },
  listContentContainer: {
    flexGrow: 1
  },
  productContainer: {
    paddingTop: 5
  },
  footerContainer: {
    marginHorizontal: -20,
  }
})