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
      console.log('Krark is active');
      result = Math.random() < 0.5 || Math.random() < 0.5 ? 'heads' : 'tails'
    } else { // krark's thumb is NOT active
      console.log('Krark is !active');
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

    let isFlipping = true;

    while (isFlipping) {
      console.log('flip train started')
      const side = flipCoin();
      console.log(`side is ${side}`);

      // there is some repeating code here
      // probably clean this up by creating another helper function
      // the loop doesnt change the card count
      // maybe we shouldnt iterate over the state structure
      // instead lets try a for loop and set each card explicitly by ID
      // or maybe just build another card array and only call setCards once for the game loop
      if (side === 'heads') {
        // start interating thru the cards, only working up the active cards
        setCards(cards.map(card => {
          console.log(cards);
          if (card.firesOn == 'heads') {
            return {
              ...card,
              count: card.count + 1
            }
          } else {
            return card;
          }
        }))
      } else if (side === 'tails') {
        setCards(cards.map(card => {
          if (card.firesOn === 'tails') {
            return {
              ...card,
              count: card.count + 1
            }
          } else {
            return card;
          }
        }))

        // side is 'tails' so we end the flip train for this card
        isFlipping = false;
      }
    }

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
