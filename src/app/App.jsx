import { useState } from 'react'
import './App.css'

import initialCards from '../lib/data.js';
import Card from '../components/card.jsx';
import Summary from '../components/summary.jsx';

function App() {
  const [cards, setCards] = useState(initialCards);

  function flipCoin() {
    let result = ''

    if (cards[0].isActive) { // krark's thumb is active
      result = Math.random() < 0.5 || Math.random() < 0.5 ? 'heads' : 'tails'
    } else { // krark's thumb is NOT active
      result = Math.random() < 0.5 ? 'heads' : 'tails'
    }
  }

  function handleActive(activatedID) {
    setCards(cards.map(card => {
      if (card.id === activatedID) {
        return {
          ...card,
          isActive: !card.isActive
        }
      } else {
        return card;
      }
    }))
  }

  function handleFlip(flipID) {
    pass
  }

  return (
    <>
      <p className="instructions">
        Click a card to activate it.
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
