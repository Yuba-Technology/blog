---
title: 煜霸科技博客今日开通
date: 2023-07-10 00:00:00
tags:
  - Hello, world!
---

# 煜霸科技博客今日开通

今天，煜霸科技博客正式开通，欢迎大家访问。

<!-- more -->

以下是部分功能测试：

## 标题 (Headers)

```markdown source code
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题

## 排版替换 (Typography Replacements)

```markdown source code
(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

上标: 19^th^

下标: H~2~O
```

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,, -- ---

"Smartypants, double quotes" and 'single quotes'

上标: 19^th^

下标: H~2~O

## 强调 (Emphasis)

```markdown source code
**加粗**

_斜体_

~~删除线~~

<u>下划线</u>

## 引用 (Blockquotes)

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.
```

**加粗**

_斜体_

~~删除线~~

<u>下划线</u>

## 引用 (Blockquotes)

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

### 带有作者的引用 (Blockquotes with Authors)

```markdown source code
{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}
```

{% blockquote David Levithan, Wide Awake %}
Do not just seek happiness for yourself. Seek happiness for all. Through kindness. Through mercy.
{% endblockquote %}

```markdown source code
{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}
```

{% blockquote @DevDocs https://twitter.com/devdocs/status/356095192085962752 %}
NEW: DevDocs now comes with syntax highlighting. http://devdocs.io
{% endblockquote %}

### 带有链接的引用 (Blockquotes with Links)

```markdown source code
{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}
```

{% blockquote Seth Godin http://sethgodin.typepad.com/seths_blog/2009/07/welcome-to-island-marketing.html Welcome to Island Marketing %}
Every interaction is both precious and an opportunity to delight.
{% endblockquote %}

## 内联 HTML (Inline HTML)

```html source code
<p align="center">居中</p>

<p align="right">右对齐</p>

<p align="justify">两端对齐</p>

<p align="left">左对齐</p>

<p align="center">
  <img src="/images/logo.svg" alt="图片" />

  <br />

  <em>图片</em>

  <br />

  <strong>图片</strong>

  <br />

  <u>图片</u>

  <br />

  <a href="https://yuba.tech/">链接</a>

  <br />

  <code>行内代码</code>

  <br />

  <kbd>键盘</kbd>

  <br />

  <samp>输出</samp>

  <br />

  <var>变量</var>

  <br />

  <sub>下标</sub>

  <br />

  <sup>上标</sup>

  <br />

  <small>小字</small>

  <br />

  <mark>高亮</mark>

  <br />

  <del>删除线</del>

  <br />

  <ins>下划线</ins>

  <br />

  <abbr title="Abbreviation">缩写</abbr>

  <br />

  <cite>引用</cite>

  <br />

  <q>引用</q>

  <br />

  <dfn>定义</dfn>

  <br />

  <s>删除线</s>
</p>
```

<p align="center">居中</p>

<p align="right">右对齐</p>

<p align="justify">两端对齐</p>

<p align="left">左对齐</p>

<p align="center">
  <img src="/images/logo.svg" alt="图片" />

  <br />

<em>图片</em>

  <br />

<strong>图片</strong>

  <br />

<u>图片</u>

  <br />

<a href="https://yuba.tech/">链接</a>

  <br />

<code>行内代码</code>

  <br />

<kbd>键盘</kbd>

  <br />

<samp>输出</samp>

  <br />

<var>变量</var>

  <br />

<sub>下标</sub>

  <br />

<sup>上标</sup>

  <br />

<small>小字</small>

  <br />

<mark>高亮</mark>

  <br />

<del>删除线</del>

  <br />

<ins>下划线</ins>

  <br />

<abbr title="Abbreviation">缩写</abbr>

  <br />

<cite>引用</cite>

  <br />

<q>引用</q>

  <br />

<dfn>定义</dfn>

  <br />

<s>删除线</s>

</p>

## 分界线 (Horizontal Rules)

```markdown source code
---
---
```

---

---

## 列表 (Lists)

### 无序列表 (Unordered Lists)

```markdown source code
- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!
```

- Create a list by starting a line with `+`, `-`, or `*`
- Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    - Ac tristique libero volutpat at
    * Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
- Very easy!

### 有序列表 (Ordered Lists)

```markdown source code
1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`
```

1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

#### 偏移量 (Offset)

```markdown source code
57. foo
1. bar
```

57. foo
1. bar

## 代码 (Code)

### 行内代码 (Inline Code)

```markdown source code
Execute `npm install` to install...
```

Execute `npm install` to install...

### 代码块 (Code Blocks)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello,world!</title>
  </head>
  <body>
    <p>Hello,world!</p>
  </body>
</html>
```

### 缩进代码块(Intented Code Blocks)

```markdown source code
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

### 语法高亮 (Syntax Highlighting)

```javascript sample.js
const a = 1;
const b = 2;
const c = add(a, b);

function add(a, b) {
  return a + b;
}

window.onload = () => {
  console.log(c);
};
```

## 表格 (Tables)

```markdown source code
| 表头 1 | 表头 2 | 表头 3 |
| ------ | ------ | ------ |
| 内容 1 | 内容 2 | 内容 3 |
| 内容 4 | 内容 5 | 内容 6 |
| 内容 7 | 内容 8 | 内容 9 |
```

| 表头 1 | 表头 2 | 表头 3 |
| ------ | ------ | ------ |
| 内容 1 | 内容 2 | 内容 3 |
| 内容 4 | 内容 5 | 内容 6 |
| 内容 7 | 内容 8 | 内容 9 |

### 对齐 (Alignment)

```markdown source code
| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 内容 1 |  内容 2  | 内容 3 |
| 内容 4 |  内容 5  | 内容 6 |
| 内容 7 |  内容 8  | 内容 9 |
```

| 左对齐 | 居中对齐 | 右对齐 |
| :----- | :------: | -----: |
| 内容 1 |  内容 2  | 内容 3 |
| 内容 4 |  内容 5  | 内容 6 |
| 内容 7 |  内容 8  | 内容 9 |

## 脚注 (Footnotes)

```markdown source code
Here's a simple footnote[^1] and here's a longer one[^bignote].

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.
```

Here's a simple footnote[^1] and here's a longer one[^bignote].

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

## 定义列表 (Definition Lists)

```markdown source code
Markdown
: Text-to-HTML conversion tool

Authors
: John
: Luke
```

Markdown
: Text-to-HTML conversion tool

Authors
: John
: Luke

## 链接 (Links)

```markdown source code
链接：[链接](https://yuba.tech/)

带有标题的链接：[链接](https://yuba.tech/ "链接")

[链接][id]
```

链接：[链接](https://yuba.tech/)

带有标题的链接：[链接](https://yuba.tech/ "链接")

[链接][id]

[id]: https://yuba.tech/ "链接"

## 图片 (Images)

```markdown source code
图片：![图片](/images/logo.svg)

带有标题的图片：![图片](/images/logo.svg "图片")

![图片][id]

[id]: /images/logo.svg "图片"
```

图片：![图片](/images/logo.svg)

带有标题的图片：![图片](/images/logo.svg "图片")

![图片][id]

[id]: /images/logo.svg "图片"

## 自动链接 (Automatic Links)

```markdown source code
https://yuba.tech/
```

https://yuba.tech/

## Pull Quotes

```swig source code
{% pullquote %}
content
{% endpullquote %}
```

{% pullquote %}
content
{% endpullquote %}

## jsFiddle（中国大陆无法访问）

```swig source code
{% jsfiddle o2gxgz9r default light %}
```

## Gist（中国大陆无法访问）

```swig source code
{% gist b6365e79be6052e7531e7ba6ea8caf23 'Sample gist' %}
```

## iFrame

```swig source code
{% iframe https://www.bing.com %}
```

{% iframe https://www.bing.com %}

## Link to open in new tab

```swig source code
{% link Yuba Technology https://yuba.tech 煜霸科技 %}
```

{% link Yuba Technology https://yuba.tech 煜霸科技 %}

## Youtube（中国大陆无法访问）

```swig source code
{% youtube l_lblj8Cq0o %}
```
