import { Text, Touchable } from 'core/components'
import { BaseModal } from 'core/modals'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Product, ShoppingList } from 'shopping-list/interfaces'
import { ActionComponent } from 'shopping-list/components'
import { useShoppingList } from 'shopping-list/hooks'

interface IncrementProductModalProps {
  onCloseRequest: () => void
  product: Product
  visible: boolean

}

const getInitialValue = (currentShoppingLit: ShoppingList, productId: string) => {
  const { products } = currentShoppingLit
  const foundedProduct = products.find(item => item.id === productId)
  return foundedProduct?.quantity ?? 0
}

export const IncrementProductModal: React.FC<IncrementProductModalProps> = ({
  onCloseRequest,
  product,
  visible
}) => {
  const [{ currentShoppingList }, { saveProduct }] = useShoppingList()
  const [currentQuantity, setCurrentQuantity] = useState(0)

  const initialCurrentQuantityValue = getInitialValue(currentShoppingList, product?.id)

  useEffect(() => {
    if (initialCurrentQuantityValue)
      setCurrentQuantity(initialCurrentQuantityValue)
  }, [initialCurrentQuantityValue])


  const onPressDecrement = () => {
    if (currentQuantity > 0)
      setCurrentQuantity(prevState => --prevState)
  }

  const onPressIncrement = () =>
    setCurrentQuantity(prevState => ++prevState)

  const _onCloseRequest = () => {
    setCurrentQuantity(0)
    onCloseRequest()
  }

  const onPressSave = () => {
    saveProduct(product, currentQuantity)
    _onCloseRequest()
  }


  return (
    <BaseModal
      visible={visible}
      onRequestClose={_onCloseRequest}
    >
      <View style={styles.productNameContainer}>
        <Text>
          {product?.name}
        </Text>
      </View>

      <View style={styles.quantityIncrementorContainer}>
        <ActionComponent
          number={currentQuantity}
          onPressDecrement={onPressDecrement}
          onPressIncrement={onPressIncrement}
        />
      </View>

      <View style={styles.footerContainer}>
        <Touchable onPress={onPressSave}>
          <Text>
            Ok
          </Text>
        </Touchable>
      </View>

    </BaseModal>
  )
}


const styles = StyleSheet.create({
  container: {

  },
  productNameContainer: {
    alignItems: 'center'
  },
  quantityIncrementorContainer: {
    paddingVertical: 20,
    backgroundColor: '#3c3',
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'flex-end'
  }
})