import { Clock } from "./Clock"


export function ShowClocks({clocksList, onDeleted}) {
  const allClocks = clocksList.map((clock) => <Clock key={clock.id} clockData={clock} onDeleted={onDeleted}/>)
  return (
    // allClocks
    <div className="show-clocks">
      {allClocks}
    </div>
  )
}
