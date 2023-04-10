import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { Animated, Dimensions, Modal, StyleSheet, View } from 'react-native'
import { Text } from '../Text'
import { Touchable } from '../Touchable'
import { DrawerNavigatorItem } from './DrawerNavigatorItem'
import { useLogin } from 'authentication/hooks'


const { width: WIDTH } = Dimensions.get('screen')

const BORDER_RADIUS = 20

const SEVEN_HUNDRED_MILLISECONDS = 700
const SIDE_MENU_WIDTH = WIDTH * 0.65
const translateX = new Animated.Value(-SIDE_MENU_WIDTH)
const transform = [{ translateX }]

const openAnimation = Animated.timing(translateX, {
  toValue: 0,
  duration: SEVEN_HUNDRED_MILLISECONDS,
  useNativeDriver: false,
})

const closeAnimation = Animated.timing(translateX, {
  toValue: -SIDE_MENU_WIDTH,
  duration: SEVEN_HUNDRED_MILLISECONDS,
  useNativeDriver: false,
})


interface DrawerNavigationProps {
  visible: boolean
  onRequestClose: () => void
}

export const DrawerNavigation: React.FC<DrawerNavigationProps> = ({ visible, onRequestClose }) => {
  const [, { requestLogout }] = useLogin()
  const navigation = useNavigation()

  useEffect(() => {
    if (visible)
      openAnimation.start()
  }, [visible])

  const onCloseDrawerAnimation = (cb?: CallableFunction) => {
    closeAnimation.start(({ finished }) => {
      if (finished) {
        onRequestClose()
      }
      if (typeof cb === 'function')
        cb()
    })
  }

  const logout = () => {
    onCloseDrawerAnimation(() => requestLogout())
  }

  function onCloseDrawer() {
    onCloseDrawerAnimation()
  }

  const goToProfile = () => {
    onCloseDrawerAnimation(() => navigation.navigate('Profile'))
  }

  return (
    <Modal
      visible={visible}
      transparent={true}
      statusBarTranslucent={false}
      animationType='none'
    >
      <View style={styles.container}>
        <Touchable
          onPress={onCloseDrawer}
          style={styles.subContainer}
          enableFeedback={false}
        >
          <Animated.View style={[
            styles.card,
            { transform }
          ]}>
            <View>
              <DrawerNavigatorItem onPress={goToProfile} />
            </View>

            <View style={styles.footerContainer}>
              <Text
                onPress={logout}
                fontSize={16}
                color='#0000FF'
                style={styles.exitText}
              >
                Sair
              </Text>

              <View style={styles.separator} />

              <Text fontSize={12} color='#696969'>
                Version 1.0.0
              </Text>
            </View>

          </Animated.View>
        </Touchable>
      </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  subContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#000000AA",
  },
  card: {
    width: SIDE_MENU_WIDTH,
    height: '100%',
    backgroundColor: '#E2FBED',
    borderBottomRightRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  footerContainer: {
    alignItems: 'flex-end'
  },
  exitText: {
    textDecorationLine: 'underline'
  },
  separator: {
    height: 10
  }
})