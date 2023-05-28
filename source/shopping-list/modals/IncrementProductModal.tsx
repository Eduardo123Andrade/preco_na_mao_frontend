import { Text, Touchable } from 'core/components'
import { BaseModal } from 'core/modals'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Product } from 'core/interfaces'
import { ActionComponent } from 'shopping-list/components'

interface IncrementProductModalProps {
  onSave: (product: Product, quantity: number) => void
  onCloseRequest: () => void
  product: Product
  visible: boolean
  selectedProducts: Product[]
}

const getInitialValue = (products: Product[], productId: string) => {
  const foundedProduct = products.find(item => item.id === productId)
  return foundedProduct?.quantity ?? 0
}

export const IncrementProductModal: React.FC<IncrementProductModalProps> = ({
  onCloseRequest,
  product,
  visible,
  onSave,
  selectedProducts,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(0)

  const initialCurrentQuantityValue = getInitialValue(selectedProducts, product?.id)

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
    onSave(product, currentQuantity)
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
        <Touchable disabled={!currentQuantity} onPress={onPressSave}>
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
    alignItems: 'center',
  },
  footerContainer: {
    alignItems: 'flex-end'
  }
})