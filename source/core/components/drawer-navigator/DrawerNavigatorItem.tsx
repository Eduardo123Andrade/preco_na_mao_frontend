import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { Touchable } from '../Touchable'

interface DrawerNavigatorItemProps {
  onPress: () => void
}

export const DrawerNavigatorItem: React.FC<DrawerNavigatorItemProps> = ({ onPress }) => {
  return (
    <Touchable onPress={onPress}>
      <View style={styles.container}>
        <Icon
          color='#008000'
          name='supervised-user-circle'
        />
        <Text>
          Perfil
        </Text>
      </View>
    </Touchable>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: '#38A37F'
  }
})