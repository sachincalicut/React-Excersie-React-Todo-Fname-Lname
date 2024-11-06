import React, { useState } from 'react';

function FullName() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (!firstName || !lastName) return; // Prevent adding empty todos

    const newTodo = {
      id: Date.now(),
      name: `${firstName} ${lastName}`,
    };

    setTodos([...todos, newTodo]);
    setFirstName('');
    setLastName('');
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.name}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FullName;
