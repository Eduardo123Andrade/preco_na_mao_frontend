import { useEffect, useState } from 'react'
import { Animated, Easing } from 'react-native'

const IDLE_HEIGHT = 0

type AnimatedIconButton = {
  transform: {
    rotate: Animated.AnimatedInterpolation<any>
  }[]
}

type AnimatedBodyStyle = {
  transform: {
    scale: Animated.AnimatedInterpolation<any>
  }[]
  height: Animated.Value
  opacity: Animated.AnimatedInterpolation<any>
}

type UseDropDownState = {
  animatedIconButtonStyle: AnimatedIconButton
  animatedBodyStyle: AnimatedBodyStyle
  open: boolean
  height: number
}

type UseDropDownActions = {
  onToggleAccordion: () => void
  setHeight: (value: number) => void
}

type UseDropDownAnimationData = [
  state: UseDropDownState,
  actions: UseDropDownActions,
]

export const useDropDownAnimation = (): UseDropDownAnimationData => {
  const [open, setOpen] = useState(false)
  const [height, updateHeight] = useState(1)

  const animated = new Animated.Value(open ? height : IDLE_HEIGHT)

  useEffect(() => {
    Animated.timing(animated, {
      toValue: open ? height : IDLE_HEIGHT,
      easing: Easing.inOut(Easing.ease),
      duration: 225,
      useNativeDriver: false,
    }).start()
  }, [open, height, animated])

  const interpolateTransformRotate = animated.interpolate({
    inputRange: [IDLE_HEIGHT, height],
    outputRange: ['0deg', '180deg'],
    extrapolate: 'clamp',
  })

  const interpolateOpacity = animated.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })

  const interpolateScale = animated.interpolate({
    inputRange: [height / 5, height],
    outputRange: [0.9, 1],
    extrapolate: 'clamp',
  })

  const animatedIconButtonStyle = {
    transform: [{ rotate: interpolateTransformRotate }],
  }

  const animatedBodyStyle = {
    transform: [{ scale: interpolateScale }],
    height: animated,
    opacity: interpolateOpacity,
  }

  function onToggleAccordion() {
    setOpen((prevState) => !prevState)
  }

  function setHeight(value: number) {
    updateHeight(value)
  }

  return [
    {
      animatedIconButtonStyle,
      animatedBodyStyle,
      open,
      height
    },
    {
      onToggleAccordion,
      setHeight,
    },
  ]
}
