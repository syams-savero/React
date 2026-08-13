function Item({ name, isPacked}) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name}
        </del>
      ) : (
       name 
      )}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>List barang</h1>
      <ul>
        <Item 
          isPacked={true}
          name="Sandal"
        />

        <Item 
          isPacked={false}
          name="Sepatu"
        />
      </ul>
    </section>
  )
}
