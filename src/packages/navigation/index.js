import React from 'react'
import { View } from "react-native";
import { Direction } from './constants'

import Chip from '../common/chip'

export default function Navigation({ items, current, direction = Direction.HORIZONTAL }) {
  return (
    <View style={{ display: 'flex', flexDirection: direction, padding: 8 }}>
      {items.map(item => <Chip label={item.label} value={item.value} style={{ margin: 4 }} active={(current === item.value)} />)}
    </View>
  )
}

