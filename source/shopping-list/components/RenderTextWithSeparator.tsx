import { Separator, Text } from 'core/components'
import React from 'react'
import { StyleSheet } from 'react-native'


interface renderTextWithSeparatorProps {
  text: string
}

export const RenderTextWithSeparator: React.FC<renderTextWithSeparatorProps> = ({ text }) => {
  return (
    <>
      <Text>
        {text}
      </Text>
      <Separator style={styles.separator} />
    </>
  )
}

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: -20,
    marginVertical: 10,
  }
})