import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
/*
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/

const user2="Shruti"

/*
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
  
)
createRoot(document.getElementById('root')).render(
    anotherElement
  
)
*/


// /*
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click to visit Google  ',
  user2
)
createRoot(document.getElementById('root')).render(
  reactElement
)
  // */