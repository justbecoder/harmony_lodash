const fs = require('fs');
const path = require('path');


function transform (sourceDirectory, targetDirectory) {
    // 遍历指定目录下的所有文件
    fs.readdir(sourceDirectory, (err, files) => {
        if (err) {
            console.error('Error reading directory:', err);
            return;
        }

        // 遍历每个文件
        files.forEach(file => {
            // 检查文件扩展名是否为.ts
            if (path.extname(file) === '.ts') {
                // 构建源文件和目标文件的完整路径
                const sourceFile = path.join(sourceDirectory, file);
                const targetFile = path.join(targetDirectory, file.replace('.ts', '.ets'));

                // 重命名文件
                fs.rename(sourceFile, targetFile, (err) => {
                    if (err) {
                        console.error(`Error renaming file ${file}:`, err);
                    } else {
                        console.log(`File ${file} renamed successfully.`);
                    }
                });
            }
        });
    });
}

// 转换
transform('./origin/lodash/src/', './src/main/ets/')
transform('./origin/lodash/src/.internal/', './src/main/ets/.internal/')


