import React from 'react'
import { ViewProps, View, StyleSheet, ViewStyle, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'

type Behavior = 'height' | 'position' | 'padding'

const BEHAVIOR: Behavior = Platform.select({
  ios: 'padding',
  android: 'height'
})

interface ScreenProps extends ViewProps {
  contentContainerStyles?: ViewStyle,
}

export const Screen: React.FC<ScreenProps> = ({
  children,
  contentContainerStyles,
  style,
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={BEHAVIOR}
      >
        <View style={[styles.contentContainer, contentContainerStyles]}>
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E2FBED"
  },
  contentContainer: {
    paddingHorizontal: 20,
  }
})