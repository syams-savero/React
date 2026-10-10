import { useLocalStorage } from './useLocalStorage.js';
import { useWindowSize } from './useWindowSize.js';

export default function HooksDemo() {
  const [isDark, setIsDark] = useLocalStorage('isDark', false);
  const { width, height } = useWindowSize();

  return (
  <div style={{
      background: isDark ? '#111' : '#f5f5f5',
      color: isDark ? '#eee' : '111',
      padding: 20,
      minHeight: 200,
    }}>
      <h3>Custom Hooks Demo</h3>
      <button onClick={() => setIsDark(!isDark)}>Mode: {isDark ? 'Gelap' : 'Terang'}</button>
      <p>Ukuran Layar: {width} x {height} px</p>
      <p>Resize jendela atau refresh halaman</p>
  </div>
  );
}
