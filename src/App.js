import React from 'react'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Translate from './components/Translate'
import Route from './components/Route'
import Dropdown  from './components/Dropdown'
import Header from './components/Header'
const items = [
  {
    title: 'What is React?',
    content: 'React is a front end Javascript framework used to create complex frontend experiences'
  },
  {
    title:  'Why use React?',
    content: 'React is a favorite JS library among developers'
  },
  {
    title: 'How do use React?',
    content: 'We use udemy to learn React'
  }
]
const options = [
  {
    label: 'Color of Red',
    value: 'red'
  },
  {
    label: 'Color of Green',
    value: 'green'
  },
  {
    label: 'Shade of Blue',
    value: 'blue'
  }
]

const label = 'Select a Color'
const App = () => {
  const [selected, setSelected] = React.useState(options[0])
  return (
    
    <div>
      <Header />
      <Route path='/'>
        <Accordion items={items} />
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          options={options}
          label='Select a Color'
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
      
    </div>
      
    )
}

export default App