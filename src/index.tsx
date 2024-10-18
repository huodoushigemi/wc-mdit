/* @refresh reload */
import { createEffect, createMemo, createSignal } from 'solid-js'
import { customElement, noShadowDOM } from 'solid-element'
import MarkdownIt from 'markdown-it'

const props = {
  src: '',
  content: '',
  options: { value: {}, attribute: 'options', norify: true, reflect: true, parse: true },
  theme: '',
  css: '',
  noShadow: false,
  bodyClass: '',
  bodyStyle: ''
}

export const HljsElement = customElement('wc-mdit', props, (props, { element }) => {
  console.log(props);
  
  const css = memoAsync(() => props.theme && import(`./theme/${props.theme}.css?raw`).then(e => e.default))
  const srcContent = memoAsync(() => props.src && fetch(props.src).then(e => e.text()))

  if (props.noShadow) noShadowDOM()

  const md = createMemo(() => MarkdownIt(props.options))
  return (
    <>
      <style>
        {`${css()} ${props.css} :host {display: block; overflow: hidden}`}
      </style>
      <div class={`markdown-body ${props.bodyClass}`} style={props.bodyStyle} innerHTML={md().render(srcContent() || props.content)} />
    </>
  )
})

function memoAsync(fn) {
  const ret = createSignal('')
  let count = 0
  createEffect(async () => {
    count++
    const _count = count
    const val = await fn()
    if (_count == count) {
      ret[1](val)
    }
  })
  return ret[0]
}