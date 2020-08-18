import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import {
  BtCreate,
  BtCreateText
} from './styles';

export default function Button(props) {
  return (
    <BtCreate>
      <LinearGradient
          colors={props.colors}
          style={{height: props.height, width: '90%',
                  borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
        <BtCreateText>{props.text}</BtCreateText>
      </LinearGradient>
    </BtCreate>
  );
}