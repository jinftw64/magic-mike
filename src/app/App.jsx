import { useState } from 'react'
import './App.css'

import initialCards from '../lib/data.js';
import Card from '../components/card.jsx';
import Summary from '../components/summary.jsx';

function App() {
  const [cards, setCards] = useState(initialCards);
  console.log(cards);

  function flipCoin() {
    let result = ''

    if (cards[0].isActive) { // krark's thumb is active
      result = Math.random() < 0.5 || Math.random() < 0.5 ? 'heads' : 'tails'
    } else { // krark's thumb is NOT active
      result = Math.random() < 0.5 ? 'heads' : 'tails'
    }

    return result;
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
    console.log(`${cards[flipID].name} is starting its flips.`);
    console.log(`Krark is ${cards[0].isActive ? 'active' : 'NOT active'}`)
    let headsCount = 0;
    let tailsCount = 0;

    let isFlipping = true;

    while (isFlipping) {
      const side = flipCoin();
      console.log(side);

      if (side === 'heads') {
        headsCount++;
      } else {
        tailsCount++;
        isFlipping = false
      }
    }

    setCards(cards.map(card => {
      if (card.firesOn === 'heads' && card.isActive) {
        return {
          ...card,
          count: card.count + headsCount
        }
      } else if (card.firesOn === 'tails' && card.isActive) {
        return {
          ...card,
          count: card.count + tailsCount
        }
      } else {
        return { ...card }
      }
    }))
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
            onFlip={handleFlip}
          />
        ))}
      </div>


    </>
  )
}

export default App
