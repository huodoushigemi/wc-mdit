/* @refresh reload */
import { createEffect, createMemo, createSignal } from 'solid-js'
import { customElement, noShadowDOM } from 'solid-element'
import MarkdownIt from 'markdown-it'

const props = {
  src: '',
  content: { value: '', reflect: false },
  options: { value: {}, attribute: 'options', notify: true, reflect: false, parse: true },
  theme: '',
  css: { value: '', reflect: false },
  noShadow: false,
  bodyClass: '',
  bodyStyle: '',
  md: null,
}

const cache = {} as Record<string, string>

export const MditElement = customElement('wc-mdit', props, (props, { element }) => {
  const css = memoAsync(() => (k => cache[k] ?? import(`./theme/${k}.css?raw`).then(e => cache[k] = e.default))(props.theme))
  const fetched = memoAsync(() => props.src && fetch(props.src).then(e => e.text()))

  if (props.noShadow) noShadowDOM()

  const md = createMemo(() => props.md ?? MarkdownIt(props.options))
  
  return (
    <>
      <style>
        {`${css()} ${props.css} :host {display: block; overflow: hidden}`}
      </style>
      <div class={`markdown-body ${props.bodyClass}`} part='body' style={props.bodyStyle} innerHTML={md().render(fetched() || props.content)} />
    </>
  )
})

function memoAsync(fn) {
  const ret = createSignal('')
  let count = 0
  createEffect(async () => {
    const _count = ++count
    let val = fn()
    if (val instanceof Promise) val = await val
    if (_count == count) ret[1](val)
  })
  return ret[0]
}