function Square() {
  return <button className="Square">X</button>
}

export default function Board() {
  return (
    <>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
      
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>

      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
    </>
  )
}
