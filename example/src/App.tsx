import React from 'react'
import { Text, Typo } from 'reactypo'
import ExampleCard from './example-card'
import { Typography } from '@material-ui/core'
const App = () => {
  return (
    <main className='main'>

      <Typo className='header' name={'title'} next='under-contruction' first>
        <Text pace={100} charClassName="wave-infinite title-char" className="header-title" stamp>Reactypo</Text>
        <Text pause={200} charClassName="wave-infinite" className="header-title title2" stamp>Reactypo</Text>
        <Text pause={500} whiteSpacePace={100} charClassName=" sub-title-char" className={'sub-title'} block>animate and control text</Text>
      </Typo>

      <>
        <h2 className="description">These demos show you how to use Reactypo</h2>
      </>

      {/** Animation de base */}
      <ExampleCard title="Simple Print Effect"
        description='The <Text /> component is the base component to give your text a type-writer effect. The default pace is 40ms.'
        demo={<Text>I am a &lt;Text /&gt; component without props</Text>}
        code={`<Text>I am a <Text /> component without props</Text>`}
      />
      {/** Changer le pas */}
      <ExampleCard title="Change the pace"
        description='The pace props defines the interval speed between two chars print'
        demo={
          <div>
            <Text pace={200} block>This &lt;Text /&gt; has a pace of 200</Text>
            <Text pace={10}>This &lt;Text /&gt; has a pace of 10</Text>
          </div>
        }
        code={
          `<Text pace={200} block>This <Text /> has a pace of 200</Text>
<Text pace={10}>This <Text /> has a pace of 10</Text>`
        }
      />
      {/** Changer le pas des espaces blancs */}
      <ExampleCard title="Change the white spaces pace "
        description='Changing the pace of the white spaces can give your text a more dynamic feel'
        demo={<Text whiteSpacePace={80}>White spaces have a slower pace and it give the text more rythm</Text>}
        code={`<Text whiteSpacePace={80}>White spaces have a slower pace and it give the text more rythm</Text>`}
      />
      {/** Mettre en pause */}
      <ExampleCard title="Pause the print"
        description='The pause props defines the time before the text starts printing'
        demo={<Text pause={1000}>This text paused for 1 second before printing</Text>}
        code={`<Text>This text paused for 1 second before printing</Text>`}
      />

    </main>
  )
}

export default App
