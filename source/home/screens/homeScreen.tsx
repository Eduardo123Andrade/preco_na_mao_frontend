import React from 'react'
import { View, Text } from 'react-native'

type HomeScreenProps = {}

export const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <View>
      <Text>
        Olá mundo!
      </Text>
    </View>
  )
}

