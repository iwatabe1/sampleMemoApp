import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape, any } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props: any) {
  const { style, name } = props;
  return (
    // 配列にしてスタイルを上書きできる
    <View style={[styles.circleButton, style]}>
      <Feather name={name} size={32} color='white' />
    </View>
  );
}

CircleButton.prototypes = {
  style: shape(),
  name: string.isRequired,
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    // shadowはiOSのみ
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // elevationはAndroidのみ
    elevation: 8,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
