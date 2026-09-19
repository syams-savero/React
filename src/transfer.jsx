import { useState, useRef } from 'react';

export default function Transfer() {
  const [balanceA, setBalanceA] = useState(100);
  const [balanceB, setBalanceB] = useState(0);
  const [amount, setAmount] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isNarik, setIsNarik] = useState(false);
  const timerRef = useRef(null);

  function handleTransfer() {
    const value = Number(amount);

    if (timerRef.current) return;

    if (!amount || value <= 0 || value > balanceA) {
      alert('Nominal tidak valid');
      return;
    }

    setIsSending(true);
    timerRef.current = setTimeout(() => {
      setBalanceA(balanceA - value);
      setBalanceB(balanceB + value);
      setAmount('');
      setIsSending(false);
      timerRef.current = null;
    }, 1500);
  }

  function handleNarik() {
    const value = Number(amount)

    if (timerRef.current) return;

    if (!amount || value <=0 || value > balanceB) {
      alert('Nominal tidak cukup');
      return;
    }

    setIsNarik(true);
    timerRef.current = setTimeout(() => {
      setBalanceB(balanceB - value);
      setBalanceA(balanceA + value);
      setAmount('');
      setIsNarik(false);
      timerRef.current = null
    }, 500)
  }

  return (
    <div className="transfer-page">
      <div className="transfer-card">
        <h2 className="judul-transfer">Simulasi Transfer</h2>
        <div className="balance-row">
          <span>Orang A</span>
          <b>{balanceA}</b>
        </div>
        <div className="balance-row">
          <span>Orang B</span>
          <b>{balanceB}</b>
        </div>
        <input
          type="number"
          placeholder="Masukan Nominal"
          value={amount}
          disabled={isSending || isNarik}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleTransfer} disabled={isSending}>
          {isSending ? 'Mengirim...' : 'Kirim'}
        </button>
        <button onClick={handleNarik} disabled={isNarik}>
          {isNarik ? 'Sedang menarik..' : 'Tarik'}
        </button>
      </div>
    </div>
  );
}
