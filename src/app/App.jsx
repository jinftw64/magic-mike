import { useState } from 'react'
import './App.css'

import initialCards from '../lib/data.js';
import Card from '../components/card.jsx';

function App() {
  const [cards, setCards] = useState(initialCards);

  function handleActive(activatedID) {
    setCards(cards.map(card => {
      if (card.id === activatedID) {
        console.log('selected card here')
        return {
          ...card,
          isActive: !card.isActive
        }
      } else {
        return card;
      }
    }))
  }

  return (
    <>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div className='cardsContainer'>
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            onToggle={handleActive}
          />
        ))}
      </div>

    </>
  )
}

export default App
