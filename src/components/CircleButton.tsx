import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props: any) {
  const { style, name, onPress } = props;
  return (
    // 配列にしてスタイルを上書きできる
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Feather name={name} size={32} color='white' />
    </TouchableOpacity>
  );
}

CircleButton.prototypes = {
  style: shape(),
  name: string.isRequired,
  // イベントを受け取る
  onPress: func,
};

CircleButton.defaultProps = {
  style: null,
  onPress: null,
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
