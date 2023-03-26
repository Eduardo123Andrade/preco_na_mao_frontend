import { Icon, Separator, Text } from 'core/components'
import { useDropDownAnimation } from 'core/hooks'
import { formatPrice } from 'core/utils'
import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { Product as ProductInterface } from 'shopping-list/interfaces'
import { ActionComponent } from './ActionComponent'

interface ProductProps {
  product: ProductInterface
}


export const Product: React.FC<ProductProps> = ({ product }) => {
  const onPressDecrement = () => console.log("-")
  const onPressIncrement = () => console.log("+")

  const [
    { animatedIconButtonStyle, open },
    { onToggleAccordion },
  ] = useDropDownAnimation()

  const unityPrice = formatPrice(product.price)
  const totalPrice = formatPrice(product.price * product.quantity)

  function onPress() {
    onToggleAccordion()
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text>
          {product.name}
        </Text>

        <View style={styles.actionContainer}>
          <View style={styles.quantityActionContainer}>
            <ActionComponent
              number={product.quantity}
              onPressDecrement={onPressDecrement}
              onPressIncrement={onPressIncrement}
            />
          </View>

          <Animated.View style={animatedIconButtonStyle}>
            <Icon
              name='keyboard-arrow-down'
              size={20}
              color='#000'
              onPress={onPress}
            />
          </Animated.View>
        </View>
      </View>

      {open && <Separator />}

      {open && (
        <View style={styles.extraInfoContainer}>
          <Text>
            {`Preço unitario: R$ ${unityPrice}`}
          </Text>

          <Text>
            {`Preço total: R$ ${totalPrice}`}
          </Text>
        </View>
      )}
    </View>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantityActionContainer: {
    paddingRight: 30
  },
  extraInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 5
  }
})