import React from 'react'
import { Modal as NativeModal, ModalProps as NativeModalProps, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'

export interface BaseModalProps extends NativeModalProps {
  contentContainerStyle?: StyleProp<ViewStyle>
}

export const BaseModal: React.FC<BaseModalProps> = ({ children, contentContainerStyle, ...rest }) => {
  return (
    <NativeModal
      transparent
      statusBarTranslucent={false}
      animationType='fade'
      {...rest}>
      <View style={styles.container}>
        <View style={[styles.modal, contentContainerStyle]}>
          {children}
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
  }
})