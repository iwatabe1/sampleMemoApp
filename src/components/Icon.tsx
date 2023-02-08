// 70.カスタムアイコンを作成する
/**
import React from 'react';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

import icomoon from '../../assets/fonts/icomoon.ttf';
import selection from '../../assets/fonts/selection';
import { useFonts } from '@use-expo/font';

export default function Icon(props: any) {
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);
  // before font loaded
  if (!fontLoaded) {
    return null;
  }
  return <CustomIcon name={name} size={size} color={color} />;
}
 */
