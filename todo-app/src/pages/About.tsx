import { Link } from 'react-router-dom';
import '../App.css';

function About() {
  return (
    <div className="app">
      <h1>ℹ️ About</h1>

      <div className="about">
        <h2>📝 Todo List App</h2>
        <p>
          A simple and clean task manager built to help you stay organized and
          productive. Manage your daily tasks with ease — add, complete, filter,
          and remove them in seconds.
        </p>

        <h3>🛠️ Tech Stack</h3>
        <ul className="feature-list">
          <li>⚛️ <strong>React 18</strong> — component-based UI</li>
          <li>🟦 <strong>TypeScript</strong> — fully typed for reliability</li>
          <li>⚡ <strong>Vite</strong> — lightning-fast dev & build tooling</li>
          <li>🔀 <strong>React Router</strong> — client-side navigation</li>
        </ul>

        <h3>✨ Features</h3>
        <ul className="feature-list">
          <li>✅ Add tasks with <kbd>Enter</kbd> or the <strong>Add</strong> button</li>
          <li>☑️ Toggle tasks as complete / incomplete</li>
          <li>🗑️ Delete individual tasks</li>
          <li>🔍 Filter by <strong>All</strong>, <strong>Active</strong>, or <strong>Completed</strong></li>
          <li>🧹 Clear all completed tasks at once</li>
        </ul>

        <h3>👤 Author</h3>
        <p>Built as a demonstration project using modern React tooling.</p>

        <h3>📦 Version</h3>
        <p><strong>1.0.0</strong></p>
      </div>

      <div style={{ marginTop: '1.5rem' }}>
        <Link to="/" className="back-link">← Back to Todo List</Link>
      </div>
    </div>
  );
}

export default About;
