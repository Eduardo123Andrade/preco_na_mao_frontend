import React from 'react'
import { TouchableHighlightProps, TouchableWithoutFeedback, TouchableNativeFeedback, View } from 'react-native'


const DEFAULT_LIGHT_UNDERLAY_COLOR = "#FFFFFF42"

interface TouchableProps extends TouchableHighlightProps {
  children: React.ReactNode,
  enableFeedback?: boolean
  onPress?: () => void
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
  onPress,
  ...rest }) => {

  const _onPress = () => {
    if (!disabled && typeof onPress === 'function')
      onPress()
  }

  return (
    <InternalTouchable
      enableFeedback={enableFeedback}
      onPress={_onPress}
      {...rest}>
      <View style={style}>
        <View>{children}</View>
      </View>
    </InternalTouchable>
  )
}
