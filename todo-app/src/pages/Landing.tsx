import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="landing">
      <header className="landing-header">
        <Link to="/" className="landing-brand" aria-label="Todo List home">
          <span className="landing-brand-mark" aria-hidden="true">✓</span>
          Todo List
        </Link>
        <nav aria-label="Main navigation">
          <Link to="/about">About</Link>
          <Link to="/todos" className="landing-button landing-button-small">Open app</Link>
        </nav>
      </header>

      <main>
        <section className="landing-hero" aria-labelledby="landing-title">
          <div>
            <p className="landing-eyebrow">LESS CLUTTER. MORE CLARITY.</p>
            <h1 id="landing-title">Make room for<br /><span>what matters.</span></h1>
            <p className="landing-intro">
              A little structure goes a long way. Capture your tasks, focus on
              what’s next, and enjoy checking things off — one day at a time.
            </p>
            <div className="landing-actions">
              <Link to="/todos" className="landing-button">Start your list <span aria-hidden="true">→</span></Link>
              <Link to="/about" className="landing-secondary">Learn about the app</Link>
            </div>
            <p className="landing-note">No sign-up needed. Just you and your next task.</p>
          </div>

          <aside className="landing-preview" aria-labelledby="preview-title">
            <div className="landing-preview-heading">
              <div>
                <p className="landing-eyebrow">A FRESH START</p>
                <h2 id="preview-title">A little progress, every day</h2>
              </div>
              <span className="landing-example">Example list</span>
            </div>
            <ul className="landing-sample-list">
              <li className="landing-sample-done"><span aria-hidden="true">✓</span><div><s>Make a plan for the day</s><small>Completed</small></div></li>
              <li><span aria-hidden="true" /><div>Focus on one important task<small>One thing at a time</small></div></li>
              <li><span aria-hidden="true" /><div>Take a well-earned break<small>Make time for yourself</small></div></li>
            </ul>
            <p className="landing-preview-footer">2 tasks left · You’re making progress</p>
          </aside>
        </section>

        <section className="landing-features" aria-labelledby="features-title">
          <p className="landing-eyebrow">SIMPLE BY DESIGN</p>
          <h2 id="features-title">Everything you need. Nothing in your way.</h2>
          <div className="landing-feature-grid">
            <article>
              <span className="landing-step">01</span>
              <h3>Capture your thoughts</h3>
              <p>Add a task with a quick tap or press Enter. Get it out of your head and onto your list.</p>
            </article>
            <article>
              <span className="landing-step">02</span>
              <h3>Find your focus</h3>
              <p>Switch between all, active, and completed tasks to see exactly what needs your attention.</p>
            </article>
            <article>
              <span className="landing-step">03</span>
              <h3>See your progress</h3>
              <p>Check off finished tasks, clear completed items, and give your next step a little more space.</p>
            </article>
          </div>
        </section>
      </main>

      <footer className="landing-footer">
        <span>Built with React, TypeScript, and Vite.</span>
        <span>Tasks stay in memory and reset when you leave the list or refresh.</span>
      </footer>
    </div>
  );
}

export default Landing;
