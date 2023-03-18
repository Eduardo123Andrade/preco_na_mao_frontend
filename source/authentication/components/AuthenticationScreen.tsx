import { Button, Screen } from 'core/components'
import React from 'react'
import { View, Text, StyleSheet, StyleProp, ViewStyle } from 'react-native'

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
          style={styles.button} onPress={onPress}>
          <Text>
            {buttonTitle}
          </Text>
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
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  button: {
    flex: 1
  },
})
