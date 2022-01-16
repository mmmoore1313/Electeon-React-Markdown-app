import React from 'react'
import CodeMirror from '@skidding/react-codemirror'

require('codemirror/lib/codemirror.css')
require('codemirror/mode/javascript/javascript')
require('codemirror/mode/python/python')
require('codemirror/mode/xml/xml')
require('codemirror/mode/markdown/markdown')
require('codemirror/theme/monokai.css')

export default function Editor(props) {
  
  const options ={
    mode: 'markdown',
    theme: 'monokai'
  }
  return (
    <CodeMirror value={props} options={options} height='100%' />
  )
}