/*
 * @Author: luodan
 * @Date: 2021-11-10 17:28:15
 * @LastEditTime: 2021-11-11 13:50:27
 * @LastEditors: luodan
 * @Description: 文件模板
 * @FilePath: /cli/templates/taro/main.js
 */

module.exports = (className) => {
  return `import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';

interface ${className}Props {}

export default (props: ${className}Props) => {
  return (
    <View>
      ${className}
    </View>
  );
};
`;
};
