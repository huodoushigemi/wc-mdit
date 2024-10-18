/* @refresh reload */
import { createSignal } from 'solid-js'
import { render } from 'solid-js/web'

import '../src'
// import '../dist/wc-mdit.es'

const root = document.getElementById('root')

render(() => {
  const [theme1, theme2] = createSignal('github')
  const [content1, content2] = createSignal('# h1')
  
  return (<>
    <style>
      {`html, body { margin: 0; padding: 0; }`}
    </style>
    <select value={theme1()} onChange={e => theme2(e.target.value)}>
      <option value='github'>github</option>
      <option value='vuepress'>vuepress</option>
      <option value='juejin'>juejin</option>
      <option value='juejin-yu'>juejin-yu</option>
      <option value='juejin-devui-blue'>juejin-devui-blue</option>
      <option value='juejin-devui-blue'>juejin-devui-blue</option>
    </select>

    <div style='margin: 10px' />

    <wc-mdit
      src="https://raw.githubusercontent.com/huodoushigemi/wc-mdit/refs/heads/main/README.md"
      theme={theme1()}
      css='.markdown-body { padding: 32px }'
    />

    {/* <wc-mdit
      src='https://zerodevx.github.io/zero-md/getting-started.md'
      theme={theme1()}
      options={{html:true}}
      body-style='padding: 32px'
    /> */}
  </>)
}, root!);
