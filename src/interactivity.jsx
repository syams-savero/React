import { useState } from 'react';

const people = [
  { id: 1, name: 'Budi', age: 20, hobby: 'Gaming' },
  { id: 2, name: 'Ani', age: 22, hobby: 'Reading' },
  { id: 3, name: 'Coco', age: 19, hobby: 'Cooking' },
];

function AlertButton({ message, buttonName }) {
  return (
  <button onClick={() => alert(message)}>{buttonName}</button>
  );
}

export default function Button() {
  
  const [index, setIndex] = useState(0);

  function click() {
    alert('clicked');
  }
 
  function next() {
    if (index < people.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  return (
  <div>
  <button onClick={click}>Clicked</button>
  <AlertButton message="Alert 1 works" buttonName="Alert 1" />
  <AlertButton message="Alert 2 works" buttonName="Alert 2" />
  <h2>Nama : {people[index].name}</h2>
  <p>Umur : {people[index].age}</p>
  <p>Hobi : {people[index].hobby}</p>
  <button onClick={next}>next people</button>
  </div>
  )
}
