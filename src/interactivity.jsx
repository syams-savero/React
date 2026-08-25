function AlertButton({ message, buttonName }) {
  return (
  <button onClick={() => alert(message)}>{buttonName}</button>
  );
}

export default function Button() {
  function click() {
    alert('clicked');
  }
  
  return (
  <div>
  <button onClick={click}>Clicked</button>
  <AlertButton message="Alert 1 works" buttonName="Alert 1" />
  <AlertButton message="Alert 2 works" buttonName="Alert 2" />
  </div>
  )
}
