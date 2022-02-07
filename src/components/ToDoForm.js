import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addTask(userInput);
    setUserInput('');
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type='text'
        onChange={e => setUserInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder='Напишите задачу...'
      />

      <button>Сохранить</button>
    </form>
  );
};

export default ToDoForm;
