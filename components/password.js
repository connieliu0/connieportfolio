// components/PasswordPromptDialog.tsx
"use client";

import React, { useState } from 'react';

const PasswordPromptDialog = ({ onSubmit }) => {
  const [password, setPassword] = useState('');
  const [passwordIncorrect, setPasswordIncorrect] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const request = await fetch(`/api/routes`, {
        body: JSON.stringify({ password }),
        headers: { "Content-Type": "application/json" },
        method: "POST",
      });

      if (request.status !== 200) {
        setPasswordIncorrect(true);
        setLoading(false);
      } else {
        if (onSubmit) {
          onSubmit();
        }
      }
    } catch (error) {
      console.error('Error submitting password:', error);
      setPasswordIncorrect(true);
      setLoading(false);
    }
  };

  return (
    <div className="password-prompt-dialog">
      <form onSubmit={handleSubmit}>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
        {passwordIncorrect && (
          <p className="error">Incorrect password</p>
        )}
      </form>
    </div>
  );
};

export default PasswordPromptDialog;