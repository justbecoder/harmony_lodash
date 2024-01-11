/**
 * @description 将每个方法导出到index.ejs中
 * */

const fs = require('fs');
const path = require('path');

// 指定目录和文件
const sourceDirectory = './src/main/ets/';
const outputFile = './index.ets';

// 读取指定目录下的文件
fs.readdir(sourceDirectory, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    // 筛选扩展名为.ets的文件
    const etsFiles = files
        .filter(file => path.extname(file) === '.ets')
        .map(file => path.basename(file, '.ets'));

    // 格式化文件名，并写入到指定文件
    const formattedOutput = etsFiles.map(file => `export { default as ${file} } from './src/main/ets/${file}'`).join('\n');

    fs.writeFile(outputFile, formattedOutput, (err) => {
        if (err) {
            console.error('Error writing to output file:', err);
        } else {
            console.log(`Output written to ${outputFile}`);
        }
    });
});
