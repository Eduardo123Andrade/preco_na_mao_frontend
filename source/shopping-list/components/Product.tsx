import { Button, Icon, Text, Touchable } from 'core/components'
import { useDropDownAnimation } from 'core/hooks'
import React from 'react'
import { Animated, StyleSheet, View } from 'react-native'
import { Product as ProductInterface } from 'shopping-list/interfaces'
import { MOCKED_SHOPPING_LIST } from 'shopping-list/utils'
import { ActionComponent } from './ActionComponent'
import { ProductButton } from './ProductButton'

interface ProductProps {
  product?: ProductInterface
}

const [currentShoppingList] = MOCKED_SHOPPING_LIST
const [firstItem] = currentShoppingList.items

export const Product: React.FC<ProductProps> = (props) => {
  const onPressDecrement = () => console.log("-")
  const onPressIncrement = () => console.log("+")

  const [
    { animatedIconButtonStyle, open, height },
    { onToggleAccordion, setHeight },
  ] = useDropDownAnimation()

  function onPress() {
    onToggleAccordion()
  }


  return (
    <View style={styles.container}>
      <Text>
        {firstItem.name}
      </Text>

      <View>
        <View style={styles.actionContainer}>

          <View style={styles.quantityActionContainer}>
            <ActionComponent
              number={firstItem.quantity}
              onPressDecrement={onPressDecrement}
              onPressIncrement={onPressIncrement}
            />
          </View>

          <Animated.View style={animatedIconButtonStyle}>
            <Icon
              name='keyboard-arrow-down'
              size={20}
              color='#AAA'
              onPress={onPress}
            />
          </Animated.View>

        </View>

      </View>

    </View >
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F11',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  quantityActionContainer: {
    paddingRight: 30
  },
})