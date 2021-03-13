import React from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'

const options = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  },
]
const Translate = () => {
  const [language, setLanguage] =  React.useState(options[0])
  const [text, setText] =  React.useState('')
  
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
            <input type='text' onChange={(e) => setText(e.target.value)} value={text} />
        </div>
      </div>
      <Dropdown
        options={options} 
        selected={language}
        onSelectedChange={setLanguage}
        label='Select a language'
      />
      <h3 className='ui header'>Translated Text</h3>
      <Convert
        text={text}
        language={language}
      />

    </div>
  )
}

export default Translate