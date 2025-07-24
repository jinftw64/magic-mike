import krark from '../assets/krark.webp';
import zndrsplt from '../assets/zndrsplt.webp';
import okaun from '../assets/okaun.webp';
import mana from '../assets/mana.jpg';

const initialCards = [{
  id: 0,
  name: "Krark's Thumb",
  ability() {
    return 'Flip 2 coins, ignore 1.'
  },
  firesOn: null,
  isActive: false,
  count: 0,
  art: krark,
}, {
  id: 1,
  name: 'Zndrsplt, Eye of Wisdom',
  ability() {
    return `Draw ${this.count} cards.`
  },
  firesOn: 'heads',
  isActive: false,
  count: 0,
  art: zndrsplt,
}, {
  id: 2,
  name: 'Okaun, Eye of Chaos',
  ability() {
    return `Triggered ${this.count} times. Okaun is now a ${this.power * (2 ** (this.count))}/${this.toughness * (2 ** (this.count))} `
  },
  firesOn: 'heads',
  isActive: false,
  count: 0,
  art: okaun,
  power: 3,
  toughness: 3,
}, {
  id: 3,
  name: 'Mana Crypt',
  ability() {
    return `Deals ${3 * (this.count + 1)} to you`
  },
  firesOn: 'tails',
  isActive: false,
  count: 0,
  art: mana,
}
]

export default initialCards;
