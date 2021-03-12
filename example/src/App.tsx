import React from 'react'

import { Char, Animation } from 'typo'

const App = () => {
  return (
    <>
      <Char animation={Animation.rotateInVer} duration={1000} hide>a</Char>
      <Char animation={Animation.rotateInVer} duration={1000}>b</Char>
      <Char animation={Animation.rotateInVer} duration={1000} unload>c</Char>
      <Char animation={Animation.rotateInVer} duration={1000}>d</Char>
      <Char animation={Animation.rotateInVer} duration={1000}>e</Char>
    </>
  )
}

export default App
