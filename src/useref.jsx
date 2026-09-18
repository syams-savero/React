import { useState, useRef, useEffect } from 'react';

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const usernameref = useRef(null);
  const passwordref = useRef(null);
  const formref = useRef(null);

  useEffect(() => {
    usernameref.current.focus();
  }, []);

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

  function handlePasswordInput(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (password.trim() === '') {
        passwordref.current.focus();
      } else {
        formref.current.requestSubmit();
      }
    }
  }

  const isValid = username.trim() !== '' && password.trim() !== '';

  function handleSubmit(e) {
    e.preventDefault();
    alert('login sebagai ' + username);
  }

  return (
    <div className='login-page'>
      <form className='login-form' ref={formref} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>
          Username
          <input
            ref={usernameref}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={handleUsernameInput}
          />
        </label>
        <label>
          Password
          <input
            ref={passwordref}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handlePasswordInput}
          />
        </label>
        <button type="submit" disabled={!isValid}>Login</button>
      </form>
    </div>
  )
}