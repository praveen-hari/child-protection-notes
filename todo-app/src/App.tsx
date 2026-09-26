import { useState } from 'react';
import { Todo } from './types';
import TodoItem from './components/TodoItem';
import './App.css';

type Filter = 'all' | 'active' | 'completed';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const addTodo = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;
    setTodos([...todos, { id: Date.now(), text: trimmed, completed: false }]);
    setInputText('');
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter(t => !t.completed));
  };

  const filteredTodos = todos.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const activeCount = todos.filter(t => !t.completed).length;

  return (
    <div className="app">
      <h1>Todo List</h1>

      <div className="input-row">
        <input
          type="text"
          placeholder="What needs to be done?"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTodo()}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {todos.length > 0 && (
        <>
          <div className="filters">
            {(['all', 'active', 'completed'] as Filter[]).map(f => (
              <button
                key={f}
                className={filter === f ? 'active' : ''}
                onClick={() => setFilter(f)}
              >
                {f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <ul className="todo-list">
            {filteredTodos.map(todo => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </ul>

          <div className="footer">
            <span>{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
            {todos.some(t => t.completed) && (
              <button onClick={clearCompleted}>Clear completed</button>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
