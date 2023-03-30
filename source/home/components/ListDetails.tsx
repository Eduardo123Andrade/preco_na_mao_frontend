import { Text } from 'core/components'
import { formatDate } from 'core/utils'
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
  const formattedDate = formatDate(date)

  return (
    <View style={styles.container}>
      <Text>
        {`Lista: ${name}`}
      </Text>
      <Text>
        {formattedDate}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {

  }
})