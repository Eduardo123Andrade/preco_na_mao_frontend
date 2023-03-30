import { Icon, Text } from 'core/components'
import { formatDate } from 'core/utils'
import { useCurrentShoppingList } from 'home/hooks'
import React from 'react'
import { StyleSheet, View } from 'react-native'

interface ListDetailsProps {
  name: string
  date?: Date
}

export const ListDetails: React.FC<ListDetailsProps> = ({
  name,
  date = new Date()
}) => {
  const [, { clearStorage }] = useCurrentShoppingList()
  const formattedDate = formatDate(date)

  const onPress = () => clearStorage()

  return (
    <View style={styles.container}>
      <View>
        <Text>
          {`Lista: ${name}`}
        </Text>
        <Text>
          {formattedDate}
        </Text>
      </View>
      <Icon
        name='stop'
        size={26}
        onPress={onPress}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})