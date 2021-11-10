#!/usr/bin/env node
// 这里表明 index.js 是 node 可执行文件

const fs = require('fs');
const { program } = require('commander');
const inquirer = require('inquirer');

const templates = require('./templates/index');

let prompList = [
  {
    type: 'list',
    name: 'template',
    message: '请选择你想要生成的模板？',
    choices: templates,
    default: templates[0],
  },
];

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
 * 利用命令行创建项目文件
 * 简单的设计一个流程：输入命令 -> 选择模板 -> 调取模板 -> 创建问价
 */
program
  .command('create <filename>')
  .description('创建一个文件')
  .action(async (filename) => {
    const res = await inquirer.prompt(prompList);
    console.log(res);
    const target = templates.find((item) => item.name === res.template);
    const callback = (err) => {
      if (err) {
        console.log('创建失败：', err);
        return;
      }
      console.log('文件创建成功！');
    };
    if (res.template === 'reactClass') {
      fs.writeFile(`./${filename}.jsx`, target.src(filename), callback);
    }
    if (res.template === 'vueTemplate') {
      fs.writeFile(`./${filename}.vue`, target.src(), callback);
    }
  });

/**
 * 创建文件夹命令行
 */
program
  .command('create-f <folder>')
  .description('创建一个文件夹')
  .action((folder) => {
    if (fs.existsSync(folder)) {
      console.log('该文件夹已存在！');
      return;
    }
    fs.mkdirSync(folder);
    console.log('文件夹创建成功！');
  });

program.parse(process.argv);
