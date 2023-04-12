import { Button, Logo, Screen } from 'core/components'
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
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={[styles.contentContainerStyle, contentContainerStyle]}>
        {children}
      </View>

      <View>
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
    paddingBottom: 20,
  },
  contentContainerStyle: {
    flex: 1,
  },
  logoContainer: {
    paddingBottom: 20,
    marginTop: 60,
    alignItems: 'center',
  },
})
