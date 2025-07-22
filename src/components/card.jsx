export default function Card({
  card,
  onToggle,
}) {
  return (
    <div
      className={"card " + (card.isActive ? 'isActive' : '')}
      onClick={() => {
        onToggle(card.id);
      }}
    >
      <img src={card.art} />



    </div>
  )
}
