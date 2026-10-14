import { createContext, useContext, useState } from 'react';
const  ThemeContext = createContext(null);

function ThemeButton() {
  const theme = useContext(ThemeContext);
  return <button style={{
    background: 'transparent',
    border: '2px dashed currentColor',
    color: 'inherit',
    position: "fixed",
    top: 30,
    left: '50%',
    transform: 'translateX(-50%)',
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
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="theme-toogle">
        Ganti Tema
      </button>
      <Page />
      </div>
    </ThemeContext.Provider>
  );
}
