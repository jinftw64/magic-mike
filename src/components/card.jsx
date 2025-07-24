export default function Card({
  card,
  onToggle,
  onFlip,
}) {
  return (
    <div
      className={"card " + (card.isActive ? 'isActive' : '')}
      onClick={() => {
        onToggle(card.id);
      }}
    >
      <img src={card.art} />

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
