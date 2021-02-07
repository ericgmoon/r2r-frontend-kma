import React from 'react'
import { View } from "react-native";

import Chip from '../common/chip'

export default function Navigation({ items, current }) {
  return (
    <View style={{ display: 'flex', flexDirection: 'row', padding: 8 }}>
      {items.map(item => <Chip label={item.label} value={item.value} style={{ margin: 4 }} />)}
    </View>
  )
}
