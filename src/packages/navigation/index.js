import React from 'react'
import { View } from "react-native";

import Chip from '../common/chip'

export default function Navigation({ items, current }) {
  return (
    <View>
      {items.map(item => <Chip label={item.label} value={item.value} />)}
    </View>
  )
}
