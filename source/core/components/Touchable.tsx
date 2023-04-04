import React from 'react'
import { TouchableHighlightProps, TouchableWithoutFeedback, TouchableNativeFeedback, View } from 'react-native'


const DEFAULT_LIGHT_UNDERLAY_COLOR = "#FFFFFF42"

interface TouchableProps extends TouchableHighlightProps {
  children: React.ReactNode,
  enableFeedback?: boolean

}
const InternalTouchable: React.FC<TouchableProps> = ({ enableFeedback, ...rest }) => {
  if (enableFeedback)
    return <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(DEFAULT_LIGHT_UNDERLAY_COLOR, false)} {...rest} />

  return <TouchableWithoutFeedback {...rest} />
}

export const Touchable: React.FC<TouchableProps> = ({
  children,
  disabled,
  enableFeedback = true,
  style,
  ...rest }) => {

  return (
    <InternalTouchable
      enableFeedback={enableFeedback}
      {...rest}>
      <View style={style}>
        <View>{children}</View>
      </View>
    </InternalTouchable>
  )
}
