import { useState, useRef } from 'react';

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameref = useRef(null);
  const passwordref = useRef(null);

  function handleUsernameInput(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (username.trim() === '') {
        usernameref.current.focus();
      } else {
        passwordref.current.focus();
      }
    }
  }
}
