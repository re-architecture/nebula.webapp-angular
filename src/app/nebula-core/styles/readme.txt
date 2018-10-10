我对比了下列 icon 选项
在开发环境可以用 Icon 字体，但在产品环境最佳实践是使用svg(单一文件)，并只保留实际使用的。

1.fontawesome 5.3.1 
问题：Free 版本 Solid 图标很好，但在网页中不是很美观，而 Reqular 类型图标太少，仅151个

2.Material Design Icon 3.0.1 
https://material.io/tools/icons/?icon=account_balance&style=twotone


问题：有新的 Outlined 等主题类型可用。但问题如下，官方没有给出传统方法使用新主题的办法。
As of today (July 19, 2018), a little over 2 months since the new icons themes were introduced, 
there is No Way to include these icons using an inline tag <i class="material-icons"></i>.

变通的方法是：（注意：这些css文件非常大，只能在开发环境中使用。）

Hey folks, the font is actually available. Looks like the spec hasn't been finalized yet? We need to wait for them to finalize, test, publish, etc.

I am not sure what the spec is going to look like but for those who want to have a non-spec implementation, you could do the following to match what the material icons website does:

Import the following 6 style sheets made available on the material icons page:

https://storage.googleapis.com/non-spec-apps/mio-icons/latest/styles.css
https://storage.googleapis.com/non-spec-apps/mio-icons/latest/baseline.css
https://storage.googleapis.com/non-spec-apps/mio-icons/latest/sharp.css
https://storage.googleapis.com/non-spec-apps/mio-icons/latest/outline.css
https://storage.googleapis.com/non-spec-apps/mio-icons/latest/round.css
https://storage.googleapis.com/non-spec-apps/mio-icons/latest/twotone.css
Then use the same markup as the website (seems to be similar to fontawesome?)

<i class="baseline-router icon-image-preview"></i>
<i class="outline-router icon-image-preview"></i>
<i class="round-router icon-image-preview"></i>
<i class="twotone-router icon-image-preview"></i>
<i class="sharp-router icon-image-preview"></i>

https://stackoverflow.com/questions/50303454/how-to-use-the-new-material-design-icon-themes-outlined-rounded-two-tone-and
https://github.com/google/material-design-icons/issues/773
https://github.com/angular/material2/issues/11544
https://github.com/google/fonts/issues/1592
https://github.com/google/material-design-icons/issues/779

3. 微软的字体库
https://github.com/OfficeDev/office-ui-fabric-core/tree/master/src/sass

问题是：微软字体并不是开源的，可能会有版权问题。另外一个是它是字体图标，没有svg格式。

4.IBM 字体库 
https://www.ibm.com/design/language/resources/icon-library/
问题是：开源 svg 图标库，但图标较少。
