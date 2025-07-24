export default function Card({
  card,
  onToggle,
  onFlip,
}) {
  return (
    <div
      className={"card " + (card.isActive ? 'isActive' : '')}
    >
      <img
        src={card.art}
        onClick={() => {
          onToggle(card.id);
        }}
      />

      <p>{card.name}</p>

      <button
        onClick={() => {
          onFlip(card.id);
        }}>
        Start Flips
      </button>

      <p>{'Card counter is ' + card.count}</p>

    </div>
  )
}
