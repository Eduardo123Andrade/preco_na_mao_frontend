import React from 'react'
import { Icon } from "core/components";

type IconName = 'home' | 'view-list' | 'supervised-user-circle'

interface TabBarIconProps {
  iconName: IconName,
  focused: boolean
}

export const TabBarIcon: React.FC<TabBarIconProps> = ({ iconName, focused }) => {
  const color = focused ? "#000" : "#AAA"

  return <Icon name={iconName} size={20} color={color} />
}