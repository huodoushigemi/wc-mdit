/* @refresh reload */
import { render } from 'solid-js/web';

import '../src'
import { createSignal } from 'solid-js';

const root = document.getElementById('root');

render(() => {
  const [theme1, theme2] = createSignal('github-markdown')
  return (<>
    <style>
      {`html, body { margin: 0; padding: 0; }`}
    </style>
    <select value={theme1()} onChange={e => theme2(e.target.value)}>
      <option value='github-markdown'>github-markdown</option>
      <option value='vuepress'>vuepress</option>
      <option value='juejin'>juejin</option>
      <option value='juejin-yu'>juejin-yu</option>
      <option value='juejin-devui-blue'>juejin-devui-blue</option>
    </select>
    <wc-mdit
      theme={theme1()}
      style=''
      src='https://zerodevx.github.io/zero-md/getting-started.md'
      options={{html:true}}
      body-style='padding: 32px'
    />
  </>)
}, root!);
