import { createContext, useContext, useState } from 'react';
const  ThemeContext = createContext(null);

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button style={{
    background: 'transparent',
    border: '2px dashed currentColor',
    color: 'inherit'
  }}>Warna : {theme}</button>
}

function Header() { return <ThemeButton /> }
function Layout() { return <Header /> }
function Page() { return <Layout />}

export default function Context() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value = {theme}>
      <div style={{
        background: theme === 'dark' ? '#111' : "#eee",
        color: theme === 'dark' ? '#eee' : '#111',
        padding: 20,
        minHeight: 150,
        position: 'fixed',
        inset: 0,
        boxSizing: 'border-box',
        overflow: "auto",
        zIndex: 10
      }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} style={{ color: 'inherit', background: 'transparent', border: 'none', fontSize: 16 }}>
        Ganti Tema
      </button>
      <Page />
      </div>
    </ThemeContext.Provider>
  );
}
