export default function Button() {
  function click() {
    alert('clicked');
  }

  return (
  <button onClick={click}>Clicked</button>
  )
}
