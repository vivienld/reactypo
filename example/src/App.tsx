import React from 'react'

import { Text, Typo } from 'reactypo'

const App = () => {
  return <>
    <div className='header'>
      <Typo name={'title'} next={'sub-title'} first>
        <Text pace={200} charClassName="reactypo-title wave-infinite" block rewind>Reactypo</Text>
      </Typo>
    </div>
    <div className='header'>
      <Typo name={'sub-title'} next={'hello-world'} first>
        <Text pace={1} charClassName="reactypo-subtitle swirl-in-fwd">Easy text animation</Text>
      </Typo>
    </div>

    <Typo pace={5000} name={'hello-world'} next={"title"} >
        <Text pace={50} charClassName="wave">Hello World!</Text>
    </Typo>
  </>
}

export default App
