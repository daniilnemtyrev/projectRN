import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {CustomSvgProps} from './types';

export const QuoteIcon = ({focused, ...rest}: CustomSvgProps) => (
  <Svg width={20} height={20} fill="none" {...rest}>
    <Path
      fill={focused ? '#ca371d' : '#ee8a78'}
      d="M18.889 20H1.11c-.295 0-.577-.105-.786-.293A.952.952 0 0 1 0 19V1C0 .735.117.48.325.293.534.105.816 0 1.111 0H18.89c.295 0 .577.105.786.293A.952.952 0 0 1 20 1v18c0 .265-.117.52-.325.707a1.177 1.177 0 0 1-.786.293Zm-1.111-2V2H2.222v16h15.556ZM4.444 4H8.89v4H4.444V4Zm0 6h11.112v2H4.444v-2Zm0 4h11.112v2H4.444v-2Zm6.667-9h4.445v2H11.11V5Z"
    />
  </Svg>
);
