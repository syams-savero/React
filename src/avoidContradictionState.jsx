import { useState } from 'react';

export default function FeedbackForm() {
  const [text, setText] = useState('');
  const [status, setStatus] = useState('typing');

  async function handleSubmit(e) {
  e.preventDefault();
  setStatus('sending');
  await sendMessage(text);
  setStatus('sent');
  }

  const isSending = status === 'sending';
  const isSent = status === 'sent';

  if (isSent) {
    return <h1>Thanks for your feedback!</h1>;
  }

  return (
  <form onSubmit={handleSubmit} style={{ textAlign: 'left'}}>
  <h3>Tolong masukan saran dan pendapat anda :)</h3>
  <textArea 
    disabled={isSending}
    value={text}
    onChange={e => setText(e.target.value)}
    />
  
  <br />
  <button disabled={isSending} tpye="isSubmit">Submit</button>
  {isSending && <p>sending...</p>}
  </form>
  );
}

function sendMessage(text) {
  return new Promise(resolve => {
    setTimeout(resolve, 2000);
  });
}

