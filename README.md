# wc-mdit

A markdown-to-html web component.

## ⚙️ Installation

- ### npm

```shell
npm i wc-mdit
```

- ### scripts
  
```html
<script src="https://cdn.jsdelivr.net/npm/markdown-it/dist/markdown-it.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/wc-mdit/dist/wc-mdit.umd.js"></script>
```

## 🚀 Example

```jsx
import 'wc-mdit'

function App() {
  return (
    <wc-mdit content='# H1' theme='github-dark' />
    // or
    <wc-mdit src="https://raw.githubusercontent.com/huodoushigemi/wc-mdit/refs/heads/main/README.md" theme='github-dark' />
  )
}
```

## 📄 Props

| Attribute  | Type    | Description                                                                            |
| ---------- | ------- | -------------------------------------------------------------------------------------- |
| src        | String  | URL to external markdown file.                                                         |
| content    | String  |                                                                                        |
| theme      | String  |                                                                                        |
| css        | String  | `<style>{css}</style>`                                                                      |
| no-shadow  | Boolean | If set, renders and stamps into **light DOM** instead. Please know what you are doing. |
| body-class | String  | Class names forwarded to `.markdown-body` block.                                       |
| body-style | String  | Style forwarded to `.markdown-body` block.                                             |
| options    | Object  | [`new MarkdownIt(options)`](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) |
