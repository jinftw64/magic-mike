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
        onclick={() => {
          onFlip(card.id);
        }}>
        Start Flips
      </button>

    </div>
  )
}
