import { Button, Screen } from 'core/components'
import React from 'react'
import { StyleSheet, View, ViewStyle } from 'react-native'

type SingUpScreenProps = {
  contentContainerStyle?: ViewStyle
  buttonTitle?: string
  children: React.ReactNode
  onPress: () => void
  isLoading?: boolean
  disabled?: boolean
}

export const AuthenticationScreen: React.FC<SingUpScreenProps> = ({
  buttonTitle = 'Avançar',
  children,
  contentContainerStyle,
  disabled,
  isLoading,
  onPress
}) => {
  return (
    <Screen contentContainerStyles={styles.container}>
      <View style={contentContainerStyle}>
        {children}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          disabled={disabled}
          isLoading={isLoading}
          onPress={(onPress)}>
          {buttonTitle}
        </Button>
      </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  buttonContainer: {
  },
})
