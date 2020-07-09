import React from 'react'
import ReactDOM from 'react-dom'

const element = React.createElement('div', null, 'Hello World!')

ReactDOM.render(
  element,
  document.getElementById('root')
)

