import React, { useState } from 'react'
import SplitPane from 'react-split-pane'
import Editor from './Editor/editor.js'
import './App.css';

function App() {
  const [isMarkdown, setMarkdown] = useState('true')
  
  return (
    <div className="App">
      <SplitPane split='vertical' defaultSize='50%'>
        <div className='editor-pane'>
          <Editor className='editor' value={isMarkdown ? (
            setMarkdown
          ) : null} />
        </div>
        <div className='view-pane'>
        </div>
      </SplitPane>
    </div>
  );
}

export default App;
