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
const SIDE_MENU_WIDTH = WIDTH * 0.6
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

type SideBarStatus = 'IDLE' | 'VISIBLE' | 'CLOSING' | 'CLOSED'

export const DrawerNavigation: React.FC<DrawerNavigationProps> = ({ visible, onRequestClose }) => {
  const [sideBarStatus, setSideBarStatus] = useState<SideBarStatus>('IDLE')
  const [, { requestLogout }] = useLogin()
  const navigation = useNavigation()


  useEffect(() => {
    if (visible)
      openAnimation.start()
  }, [visible])


  useEffect(() => {
    if (sideBarStatus === 'CLOSING') {
      closeAnimation.start(({ finished }) => {
        if (finished) {
          setSideBarStatus('CLOSED')
          onRequestClose()
        }
      })
    }
  }, [sideBarStatus, setSideBarStatus])

  const logout = () => {
    requestLogout()
  }

  function onCloseDrawer() {
    setSideBarStatus('CLOSING')
  }

  const goToProfile = () => {
    onCloseDrawer()
    navigation.navigate('Profile')
  }

  const _onRequestClose = () => {
    onRequestClose()
  }

  return (
    <Modal
      visible={visible}
      onRequestClose={_onRequestClose}
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
    backgroundColor: '#FFF',
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