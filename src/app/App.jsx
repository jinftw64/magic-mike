import { useState } from 'react'
import './App.css'

import initialCards from '../lib/data.js';
import Card from '../components/card.jsx';
import Summary from '../components/summary.jsx';

function App() {
  const [cards, setCards] = useState(initialCards);
  console.log(cards);

  // flip a coin and return heads or tails
  // checks if krarks is active (which is always the first card)
  function flipCoin() {
    let result = ''

    if (cards[0].isActive) { // krark's thumb is active
      result = Math.random() < 0.5 || Math.random() < 0.5 ? 'heads' : 'tails'
    } else { // krark's thumb is NOT active
      result = Math.random() < 0.5 ? 'heads' : 'tails'
    }

    return result;
  }

  // toggle isActive on clicked card image
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

  // majority of logic is here
  function handleFlip(flipID) {
    // start a flip train and accumulate results - heads = keep going / tails - end train 
    console.log(`${cards[flipID].name} is starting its flips.`);
    console.log(`Krark is ${cards[0].isActive ? 'active' : 'NOT active'}`)
    let headsCount = 0;
    let tailsCount = 0;

    let isFlipping = true;

    while (isFlipping) {
      const side = flipCoin();
      console.log(side);

      if (side === 'heads') {
        // keep train going
        headsCount++;
      } else {
        // train ends here
        tailsCount++;
        isFlipping = false
      }
    }

    // map function checks if card is active and what it triggers (firesOn) upon (heads/tails)
    // returns card with updated count
    // card.Count is used with card.Ability() to provide a summary of the flip train
    // see data.js for more context
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
