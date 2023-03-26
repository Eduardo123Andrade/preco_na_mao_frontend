import { Icon, Separator, Text } from 'core/components'
import { useDropDownAnimation } from 'core/hooks'
import { formatPrice } from 'core/utils'
import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { useShoppingList } from 'shopping-list/hooks/useShoppingList'
import { Product as ProductInterface } from 'shopping-list/interfaces'
import { ActionComponent } from './ActionComponent'

interface ProductProps {
  product: ProductInterface
}

export const Product: React.FC<ProductProps> = ({ product }) => {
  const [, { decrementProduct, incrementProduct, removeProduct }] = useShoppingList()

  const onPressDecrement = () => {
    if (product.quantity > 0)
      decrementProduct(product.id)
  }
  const onPressIncrement = () => incrementProduct(product.id)

  const [
    { animatedIconButtonStyle, open },
    { onToggleAccordion },
  ] = useDropDownAnimation()

  const unityPrice = formatPrice(product.price)
  const totalPrice = formatPrice(product.price * product.quantity)

  const onPress = () => onToggleAccordion()

  const onRemoveProduct = () => removeProduct(product.id)

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>
          {product.name}
        </Text>

        <View style={styles.actionContainer}>
          <ActionComponent
            number={product.quantity}
            onPressDecrement={onPressDecrement}
            onPressIncrement={onPressIncrement}
          />

          <View>
            <Icon
              mode='ant_design'
              name='close'
              size={15}
              onPress={onRemoveProduct}
            />
          </View>

          <Animated.View style={animatedIconButtonStyle}>
            <Icon
              name='keyboard-arrow-down'
              size={15}
              color='#000'
              onPress={onPress}
            />
          </Animated.View>
        </View>
      </View>

      {open && <Separator />}

      {
        open && (
          <View style={styles.extraInfoContainer}>
            <Text>
              {`Preço unitario: R$ ${unityPrice}`}
            </Text>

            <Text>
              {`Preço total: R$ ${totalPrice}`}
            </Text>
          </View>
        )
      }
    </View >
  )
}


const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-between',
    paddingHorizontal: 15
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.45
  },
  extraInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 5
  }
})