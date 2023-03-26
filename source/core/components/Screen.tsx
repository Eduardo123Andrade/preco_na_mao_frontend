import React from 'react'
import { ViewProps, View, StyleSheet, ViewStyle, SafeAreaView } from 'react-native'

interface ScreenProps extends ViewProps {
  contentContainerStyles?: ViewStyle,

}

export const Screen: React.FC<ScreenProps> = ({ contentContainerStyles, style, children }) => {

  return (
    <SafeAreaView style={[styles.container, style]}>
      <View style={[styles.contentContainer, contentContainerStyles]}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  contentContainer: {
    paddingHorizontal: 20,
  }
})