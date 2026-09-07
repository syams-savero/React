import { useState } from 'react';

const DAFTAR_BARANG = [
  { id: 1, nama: 'Kopi Susu', harga: 15000 },
  { id: 2, nama: 'Roti Bakar', harga: 20000 },
  { id: 3, nama: 'Keripik Kentang', harga: 12000 },
];

export default function KasirSimpel() {
  const [selectedIds, setSelectedIds] = useState([]);

  const totalHarga = selectedIds.reduce((total, id) => {
    const barang = DAFTAR_BARANG.find(b => b.id === id);
    return total + (barang ? barang.harga : 0);
  }, 0);

  function handleTogglePilih(id) {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Menu Kasir</h2>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {DAFTAR_BARANG.map(barang => (
          <li key={barang.id} style={{ marginBottom: '10px' }}>
            <label style={{ fontSize: '18px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                checked={selectedIds.includes(barang.id)}
                onChange={() => handleTogglePilih(barang.id)}
                style={{ marginRight: '10px', transform: 'scale(1.2)' }}
              />
              {barang.nama} - <strong>Rp {barang.harga.toLocaleString('id-ID')}</strong>
            </label>
          </li>
        ))}
      </ul>

      <hr />

      <h3>Ringkasan Belanja:</h3>
      <p style={{ fontSize: '20px', color: 'green' }}>
        Total Harga: <strong>Rp {totalHarga.toLocaleString('id-ID')}</strong>
      </p>
    </div>
  );
}

