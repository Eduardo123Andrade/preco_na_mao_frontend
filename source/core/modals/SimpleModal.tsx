import { Button, Text } from 'core/components'
import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BaseModalProps } from './BaseModal'
import { Modal } from './Modal'

interface SimpleModalProps extends BaseModalProps {
  title: string
  message: string
  label: string
  onPress?: () => void
}

export const SimpleModal: React.FC<SimpleModalProps> = ({
  title,
  message,
  label,
  onPress,
  children,
  ...rest
}) => {
  const { onRequestClose } = rest
  const _onPress = () => {
    if (onPress)
      return onPress()
    onRequestClose()
  }

  return (
    <Modal contentContainerStyle={styles.container} {...rest}>
      <View style={styles.titleContainer} >
        <Text bold >
          {title}
        </Text>
      </View>

      <View style={styles.messageContainer}>
        <Text>
          {message}
        </Text>
      </View>

      <View>
        <Button onPress={_onPress}>
          <Text>
            {label}
          </Text>
        </Button>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  titleContainer: {
    alignItems: 'center',
  },
  messageContainer: {
    alignItems: 'center',
  }
})