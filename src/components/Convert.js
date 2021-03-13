import React, {useState, useEffect} from 'react'
import translate from '../api/googleTranslate'
const Convert = ({ language, text }) => {
  const [result, setResult] = useState('')
  const [debouncedText, setDebouncedText] = React.useState(text)

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 500)
    return () => clearTimeout(timerId)
  }, [text])
  useEffect(() => {
    if(debouncedText.trim() === '') {
      return
    }
    const doTranslation =  async () => {
        const { data } =  await translate.post('', {}, {
        params: {
          q: debouncedText,
          target: language.value,
        }
      })
      setResult(data.data.translations[0].translatedText)
      
    }
    doTranslation()
  
  }, [debouncedText, language])
  return (
    <div>
      <h1 className='ui header'>{result}</h1>
    </div>
  )
}

export default Convert