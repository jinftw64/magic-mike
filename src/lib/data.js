import krark from '../assets/krark.webp';
import zndrsplt from '../assets/zndrsplt.webp';
import okaun from '../assets/okaun.webp';
import mana from '../assets/mana.jpg';

const initialCards = [{
  id: 0,
  name: "Krark's Thumb",
  ability: 'Flip 2 coins, ignore 1.',
  firesOn: null,
  isActive: false,
  count: 0,
  art: krark,
}, {
  id: 1,
  name: 'Zndrsplt, Eye of Wisdom',
  ability: 'Draw a card.',
  firesOn: 'heads',
  isActive: false,
  count: 0,
  art: zndrsplt,
}, {
  id: 2,
  name: 'Okaun, Eye of Chaos',
  ability: "Double Okrain's power/toughness.",
  firesOn: 'heads',
  isActive: false,
  count: 0,
  art: okaun,
  power: 3,
  toughness: 3,
}, {
  id: 3,
  name: 'Mana Crypt',
  ability: 'Deals 3 damage to you.',
  firesOn: 'tails',
  isActive: false,
  count: 0,
  art: mana,
}
]

export default initialCards;
