# cli

![cli](https://s3.bmp.ovh/imgs/2021/11/b6193eaef94a4a61.jpg)

使用示例：
![cli](https://s3.bmp.ovh/imgs/2021/11/8e015dfe6ef8666d.png)


index.config.ts 代码如下：
```js
export default {
  navigationBarTitleText: '测试',
};
```

index.tsx 代码如下：
```js
import React from 'react';
import { View } from '@tarojs/components';
import './index.scss';

interface NewPageProps {}

export default (props: NewPageProps) => {
  return (
    <View>
      NewPage
    </View>
  );
};
```
