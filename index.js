#!/usr/bin/env node
// 这里表明 index.js 是 node 可执行文件

// console.log('执行成功');

const { program } = require('commander');

const str2Arr = (str) => str.split(',');

// cli版本
program.version(
  require('./package.json').version,
  '-v, --version',
  'cli的最新版本'
);

/**
 * 设置选项
 */
program
  .option('-d, --debug', '调试一下')
  .option('-l, --list <value>', '把字符串分割为数组', str2Arr)
  .action((options, command) => {
    if (options.debug) {
      console.log('调试成功');
    }
    if (options.list !== undefined) {
      console.log(options.list);
    }
  });

/**
 * 创建子命令
 * command('create <filename>') 就是创建了一个 mycli 的 create 子命令，后面跟了一个必填参数
 */
program
  .command('create <filename>')
  .description('创建一个文件')
  .action((filename) => console.log(filename));

program.parse(process.argv);
