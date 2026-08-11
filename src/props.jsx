function App() {
  return (
    <div>
      <User name="Wowo" />
    </div>
  );
}

function User({ name }) {
  return <h1>Halo, {name}!</h1>;
}

export default App;
