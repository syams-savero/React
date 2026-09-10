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


