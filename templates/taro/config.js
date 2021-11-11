/*
 * @Author: luodan
 * @Date: 2021-11-10 17:29:30
 * @LastEditTime: 2021-11-11 13:50:21
 * @LastEditors: luodan
 * @Description: 配置文件模板
 * @FilePath: /cli/templates/taro/config.js
 */

module.exports = (title) => {
  return `export default {
  navigationBarTitleText: '${title}',
};
`;
};
