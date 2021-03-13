import React from 'react'
import wikipedia from '../api/wikipedia'

const Search = () => {
  const [term, setTerm] = React.useState('')
  const [debouncedTerm, setDebouncedTerm] = React.useState(term)
  const [results, setResults]  = React.useState([])
  const onTermChange = async (event) => {
    setTerm(event.target.value)
  }

  React.useEffect(() => {
    const timeoutId = setTimeout(()=> {
      setDebouncedTerm(term)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [term])

  React.useEffect(() => {
    if(debouncedTerm === '') {
      setResults([])
      return
    }
    const search = async () => {
      const response = await wikipedia.get('', {
        params: {
          srsearch: debouncedTerm
        }
      })
      setResults(response.data.query.search)
    }
    search()
  }, [debouncedTerm])

  const renderedResults = results.map(result => {
    return (
      <div className='item' key={result.pageid} >
        <div className='content'>
          <div className='header'>
            {result.title}
          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}>
          </span>
        </div>
      </div>
      )

  })
  return (
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Search Term</label>
          <input type='text' className='input' value={term} onChange={onTermChange} />
        </div>
      </div>
      <div className='ui  celled list'>
          {renderedResults}
      </div>
    </div>
  )
}

export default Search