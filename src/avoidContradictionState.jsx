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
}
