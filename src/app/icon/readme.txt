此目录保存在项目中使用的小图标

使用 svg-sprite 工具将这个目录下的 *.svg 合成到 app/assets/icon/icon-svg-sprite.svg 文件中。

参见 package.json 中的命令
"iconSprite": "svg-sprite --config ./src/app/config/icon-svg-sprite.config.json src/app/icon/*.svg"

命令参数见 src/app/config/icon-svg-sprite.config.json 文件

src/app/icon/icon-svg.sprite.html 是命令生成的示例文件

Ref：
https://github.com/google/material-design-icons/tree/master/sprites
https://github.com/angular/material2/blob/master/src/demo-app/icon/icon-demo.ts

svg-sprite
https://github.com/jkphl/svg-sprite
https://github.com/jkphl/svg-sprite/blob/HEAD/docs/command-line.md
http://jkphl.github.io/svg-sprite/#json
https://github.com/google/material-design-icons/tree/master/sprites


https://css-tricks.com/icon-fonts-vs-svg/
https://blog.github.com/2016-02-22-delivering-octicons-with-svg/
https://css-tricks.com/svg-sprites-use-better-icon-fonts/
https://css-tricks.com/svg-symbol-good-choice-icons/
https://webdesign.tutsplus.com/tutorials/how-to-implement-cross-browser-svg-sprites--cms-22427
https://css-tricks.com/svg-fragment-identifiers-work/
https://css-tricks.com/css-sprites/
