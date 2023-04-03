import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Modal, StyleSheet, View } from 'react-native'
import { Text } from '../Text'
import { Touchable } from '../Touchable'
import { DrawerNavigatorItem } from './DrawerNavigatorItem'
import { useLogin } from 'authentication/hooks'


const BORDER_RADIUS = 20

interface DrawerNavigationProps {
  visible: boolean
  onRequestClose: () => void
}

export const DrawerNavigation: React.FC<DrawerNavigationProps> = ({ visible, onRequestClose }) => {
  const [, { requestLogout }] = useLogin()
  const navigation = useNavigation()

  const onPress = () => {
    onRequestClose()
  }

  const logout = () => {
    requestLogout()
  }

  const goToProfile = () => {
    navigation.navigate('Profile')
    onRequestClose()
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
          onPress={onPress}
          style={styles.subContainer}
        >
          <View style={styles.card}>
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

          </View>
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
    width: '60%',
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