import React from 'react'
import { Modal as NativeModal, ModalProps as NativeModalProps, NativeSyntheticEvent, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { Icon } from 'core/components'

export interface BaseModalProps extends NativeModalProps {
  contentContainerStyle?: StyleProp<ViewStyle>
}

export const BaseModal: React.FC<BaseModalProps> = ({ children, contentContainerStyle, style, ...rest }) => {
  const { onRequestClose } = rest

  const _onRequestClose = (e: NativeSyntheticEvent<any>) => {
    onRequestClose(e)
  }

  return (
    <NativeModal
      transparent
      statusBarTranslucent={false}
      animationType='fade'
      {...rest}>
      <View style={styles.container}>
        <View style={[styles.modal, style]}>
          <View style={styles.headerModal}>
            <Icon
              size={24}
              name="close"
              color={"#000"}
              onPress={_onRequestClose}
            />
          </View>
          <View style={[styles.contentContainer, contentContainerStyle]}>
            {children}
          </View>
        </View>
      </View>
    </NativeModal>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000AA",
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFillObject
  },
  modal: {
    backgroundColor: "#FFF",
    borderRadius: 30,
    width: 250,
    height: 200,
    padding: 20,
  },
  headerModal: {
    flexDirection: 'row-reverse'
  },
  contentContainer: {
    flex: 1,
  }
})