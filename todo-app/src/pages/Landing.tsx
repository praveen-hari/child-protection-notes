import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
  return (
    <div className="lp">

      {/* ── NAV ── */}
      <header className="lp-nav">
        <div className="lp-nav-inner">
          <Link to="/" className="lp-logo" aria-label="Todo List home">
            <span className="lp-logo-mark" aria-hidden="true">✓</span>
            TodoList
          </Link>
          <nav className="lp-nav-links" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <Link to="/about">About</Link>
            <Link to="/todos" className="lp-btn lp-btn-sm">Open app →</Link>
          </nav>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section className="lp-hero" aria-labelledby="hero-title">
          <div className="lp-hero-inner">
            <div className="lp-hero-text">
              <p className="lp-eyebrow">✦ Simple. Focused. Effective.</p>
              <h1 id="hero-title">
                Stop juggling tasks.<br />
                <span>Start getting things done.</span>
              </h1>
              <p className="lp-hero-sub">
                A clean, distraction-free task manager built for people who
                want to focus. Add tasks, track progress, and check things off —
                no account, no clutter, no noise.
              </p>
              <div className="lp-hero-actions">
                <Link to="/todos" className="lp-btn lp-btn-lg">
                  Start for free <span aria-hidden="true">→</span>
                </Link>
                <a href="#how" className="lp-link-arrow">See how it works ↓</a>
              </div>
              <p className="lp-hero-note">
                🔒 No sign-up · No data stored on servers · Works offline
              </p>
            </div>

            <aside className="lp-hero-card" aria-label="App preview">
              <div className="lp-card-header">
                <div className="lp-card-dots">
                  <span /><span /><span />
                </div>
                <span className="lp-card-title">My tasks for today</span>
                <span className="lp-badge">3 left</span>
              </div>
              <ul className="lp-task-list">
                <li className="lp-task done">
                  <span className="lp-check checked" aria-hidden="true">✓</span>
                  <div>
                    <s>Morning standup notes</s>
                    <small>Completed · 9:00 AM</small>
                  </div>
                </li>
                <li className="lp-task done">
                  <span className="lp-check checked" aria-hidden="true">✓</span>
                  <div>
                    <s>Review pull requests</s>
                    <small>Completed · 10:30 AM</small>
                  </div>
                </li>
                <li className="lp-task active">
                  <span className="lp-check" aria-hidden="true" />
                  <div>
                    Write project documentation
                    <small>In progress</small>
                  </div>
                </li>
                <li className="lp-task">
                  <span className="lp-check" aria-hidden="true" />
                  <div>
                    Deploy to staging environment
                    <small>Up next</small>
                  </div>
                </li>
                <li className="lp-task">
                  <span className="lp-check" aria-hidden="true" />
                  <div>
                    Send weekly status update
                    <small>Due today</small>
                  </div>
                </li>
              </ul>
              <div className="lp-card-footer">
                <div className="lp-progress-bar">
                  <div className="lp-progress-fill" style={{ width: '40%' }} />
                </div>
                <span>2 of 5 completed · 40%</span>
              </div>
            </aside>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="lp-stats" aria-label="App statistics">
          <div className="lp-stats-inner">
            <div className="lp-stat">
              <strong>100%</strong>
              <span>Free forever</span>
            </div>
            <div className="lp-stat-divider" aria-hidden="true" />
            <div className="lp-stat">
              <strong>0</strong>
              <span>Sign-ups required</span>
            </div>
            <div className="lp-stat-divider" aria-hidden="true" />
            <div className="lp-stat">
              <strong>3</strong>
              <span>Filter views</span>
            </div>
            <div className="lp-stat-divider" aria-hidden="true" />
            <div className="lp-stat">
              <strong>∞</strong>
              <span>Tasks you can add</span>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="lp-features" id="features" aria-labelledby="features-title">
          <div className="lp-section-inner">
            <p className="lp-eyebrow">✦ Features</p>
            <h2 id="features-title">Everything you need. Nothing you don't.</h2>
            <p className="lp-section-sub">
              Designed to be simple enough to start in seconds, powerful enough to keep you on track all day.
            </p>
            <div className="lp-feature-grid">
              <div className="lp-feature-card">
                <span className="lp-feature-icon" aria-hidden="true">⚡</span>
                <h3>Instant capture</h3>
                <p>Type a task and press Enter. It's on your list immediately — no forms, no friction.</p>
              </div>
              <div className="lp-feature-card">
                <span className="lp-feature-icon" aria-hidden="true">🎯</span>
                <h3>Smart filtering</h3>
                <p>Switch between All, Active, and Completed views to see exactly what needs your attention.</p>
              </div>
              <div className="lp-feature-card">
                <span className="lp-feature-icon" aria-hidden="true">✅</span>
                <h3>One-tap complete</h3>
                <p>Check off tasks as you finish them and feel the satisfaction of making real progress.</p>
              </div>
              <div className="lp-feature-card">
                <span className="lp-feature-icon" aria-hidden="true">🧹</span>
                <h3>Clear completed</h3>
                <p>Sweep away finished tasks in one click to keep your list clean and focused on what's left.</p>
              </div>
              <div className="lp-feature-card">
                <span className="lp-feature-icon" aria-hidden="true">🔒</span>
                <h3>Private by default</h3>
                <p>Your tasks never leave your browser. No accounts, no tracking, no data on our servers.</p>
              </div>
              <div className="lp-feature-card">
                <span className="lp-feature-icon" aria-hidden="true">📱</span>
                <h3>Works everywhere</h3>
                <p>Fully responsive on desktop, tablet, and mobile. Use it anywhere, any time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="lp-how" id="how" aria-labelledby="how-title">
          <div className="lp-section-inner">
            <p className="lp-eyebrow">✦ How it works</p>
            <h2 id="how-title">Up and running in 3 steps.</h2>
            <p className="lp-section-sub">No tutorial needed. You'll figure it out in seconds.</p>
            <div className="lp-steps">
              <div className="lp-step">
                <div className="lp-step-num" aria-hidden="true">01</div>
                <div className="lp-step-body">
                  <h3>Open the app</h3>
                  <p>Click "Start for free" — no sign-up, no email, nothing. You're instantly in.</p>
                </div>
              </div>
              <div className="lp-step-arrow" aria-hidden="true">→</div>
              <div className="lp-step">
                <div className="lp-step-num" aria-hidden="true">02</div>
                <div className="lp-step-body">
                  <h3>Add your tasks</h3>
                  <p>Type what needs doing and press <kbd>Enter</kbd>. Add as many as you like.</p>
                </div>
              </div>
              <div className="lp-step-arrow" aria-hidden="true">→</div>
              <div className="lp-step">
                <div className="lp-step-num" aria-hidden="true">03</div>
                <div className="lp-step-body">
                  <h3>Check things off</h3>
                  <p>Work through your list, check off tasks as you go, and clear the finished ones.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section className="lp-testimonials" aria-labelledby="testimonials-title">
          <div className="lp-section-inner">
            <p className="lp-eyebrow">✦ What people say</p>
            <h2 id="testimonials-title">Loved by people who get things done.</h2>
            <div className="lp-testimonial-grid">
              <blockquote className="lp-testimonial">
                <p>"Finally a todo app that doesn't make me sign up, pay, or watch a tutorial. It just works."</p>
                <footer>
                  <strong>Alex M.</strong>
                  <span>Software Developer</span>
                </footer>
              </blockquote>
              <blockquote className="lp-testimonial">
                <p>"The filter views are all I ever needed. I open it, see my active tasks, and get to work."</p>
                <footer>
                  <strong>Sarah K.</strong>
                  <span>Product Designer</span>
                </footer>
              </blockquote>
              <blockquote className="lp-testimonial">
                <p>"I've tried dozens of task managers. This one I actually use every day because it gets out of my way."</p>
                <footer>
                  <strong>James L.</strong>
                  <span>Freelance Writer</span>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="lp-cta" aria-labelledby="cta-title">
          <div className="lp-cta-inner">
            <p className="lp-eyebrow lp-eyebrow-light">✦ Ready to start?</p>
            <h2 id="cta-title">Your next task is waiting.</h2>
            <p>No sign-up. No credit card. Just you and your list.</p>
            <Link to="/todos" className="lp-btn lp-btn-lg lp-btn-white">
              Open the app — it's free →
            </Link>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <Link to="/" className="lp-logo lp-logo-footer" aria-label="Todo List home">
            <span className="lp-logo-mark" aria-hidden="true">✓</span>
            TodoList
          </Link>
          <div className="lp-footer-links">
            <Link to="/todos">Open app</Link>
            <Link to="/about">About</Link>
          </div>
          <p className="lp-footer-note">
            Built with React, TypeScript &amp; Vite. Tasks stay in memory only.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default Landing;
