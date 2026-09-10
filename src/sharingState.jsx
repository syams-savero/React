import { useState } from 'react';

function Panel({ title, description, isActive, onShow }) {
  return (
    <section>
      <h3>{title}</h3>
      {isActive ? (
        <p>{description}</p>
      ) : (
        <button onClick={onShow}>
            Show
        </button>
      )}
    </section>
  )
}

export default function Animal() {
  const [active, setActive] = useState(0);
  return (
  <div style={{ textAlign: 'left' }}>
    <h2 style={{ textAlign: 'center' }}>Cat</h2>
    <Panel
      title='About'
      description='a small, carnivorous mammal and one of the most popular companion animals in the world'
      isActive={active === 1}
      onShow={() => setActive(1)}
    />

    <Panel
      title='Fun Fact'
      description='Cats spend roughly 70% of their lives sleeping and possess 32 muscles in each ear, allowing them to swivel 180 degrees'
      isActive={active === 2}
      onShow={() => setActive(2)}
    />
  </div>
  )
}
