import { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import { nanoid } from 'nanoid';

function App() {
  const [todos, setTodos] = useState([]);

  const addTask = userInput => {
    if (userInput) {
      const newItem = {
        id: nanoid(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = id => {
    setTodos([...todos.filter(todo => todo.id !== id)]);
  };

  const handleToggle = id => {
    setTodos([
      ...todos.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo },
      ),
    ]);
  };

  return (
    <div className='App'>
      <header>
        {todos.length > 0 ? (
          <h1> Количество задач в списке: {todos.length}</h1>
        ) : (
          <h1>Список задач пуст</h1>
        )}
      </header>
      <ToDoForm addTask={addTask} />
      <ol>
        {todos.map(todo => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          );
        })}
      </ol>
    </div>
  );
}

export default App;
