:root {
  --bg: #f5f5ee;
  --card: #ffffff;
  --ink: #171821;
  --muted: #6d7280;
  --line: #e9e7e0;
  --primary: #5d47f5;
  --primary-soft: #efeaff;
  --accent: #c8f36a;
  --success: #2fa777;
  --warning: #d8783d;
  --shadow: 0 20px 50px rgba(34, 30, 66, 0.12);
}

body.dark {
  --bg: #14161d;
  --card: #1d212b;
  --ink: #edf3f8;
  --muted: #aab0bc;
  --line: #2f3541;
  --primary: #8979ff;
  --primary-soft: rgba(137, 121, 255, 0.14);
  --shadow: 0 20px 50px rgba(0, 0, 0, 0.26);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: "Cairo", sans-serif;
}
button, input { font: inherit; }
button { cursor: pointer; }
a { text-decoration: none; }
.container { width: min(1120px, calc(100% - 40px)); margin: 0 auto; }

.topbar {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: var(--ink);
  color: var(--accent);
  display: grid;
  place-items: center;
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
}

.brand-title {
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
}

.brand-wrap small {
  color: var(--muted);
  font-size: 10px;
}

.main-nav {
  display: flex;
  gap: 26px;
  margin-inline: auto;
}

.main-nav a {
  color: var(--muted);
  font-size: 13px;
  font-weight: 700;
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.icon-button, .login-btn, .primary-btn, .secondary-btn, .filter-btn, .answer-btn, .save-word-btn {
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--ink);
}

.icon-button {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  font-size: 18px;
}

.login-btn, .primary-btn, .secondary-btn {
  padding: 10px 16px;
  font-weight: 700;
}

.primary-btn {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--bg);
}

.secondary-btn {
  background: transparent;
}

.hero {
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  gap: 36px;
  align-items: center;
  padding: 52px 0 40px;
}

.eyebrow {
  color: var(--primary);
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 11px;
  margin: 0 0 12px;
}

.eyebrow.small {
  letter-spacing: 0.5px;
  text-transform: none;
  font-size: 12px;
}

.hero h1 {
  font-size: clamp(46px, 7vw, 72px);
  line-height: 1.06;
  margin: 0;
  letter-spacing: -2px;
}

.hero h1 span {
  color: var(--primary);
}

.subtitle {
  max-width: 550px;
  color: var(--muted);
  line-height: 2;
  margin: 18px 0 0;
}

.hero-actions {
  display: flex;
  gap: 14px;
  margin-top: 28px;
}

.mini-proof {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 12px;
  margin-top: 24px;
}

.avatars {
  display: flex;
  direction: ltr;
}

.avatars span {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  border: 2px solid var(--bg);
  background: linear-gradient(135deg, #ffa1c3, #7a8cff);
  color: white;
  font-size: 10px;
  margin-left: -7px;
}

.avatars span:first-child { margin-left: 0; }

.hero-panel {
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 22px;
  padding: 18px 18px 12px;
}

.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.chip, .status-live {
  font-size: 11px;
  font-weight: 700;
  padding: 6px 10px;
  border-radius: 999px;
}

.chip {
  background: var(--primary-soft);
  color: var(--primary);
}

.status-live {
  background: rgba(47, 167, 119, 0.12);
  color: var(--success);
}

.sample-code {
  background: #171a24;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid #2d3340;
}

.window-bar {
  height: 42px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 16px;
  background: #1d222d;
  border-bottom: 1px solid #2d3340;
}

.window-bar span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.window-bar .red { background: #ee7d7d; }
.window-bar .yellow { background: #efc356; }
.window-bar .green { background: #7fd17a; }
.window-bar small {
  margin-inline: auto;
  color: #8a90a1;
  font-size: 11px;
  font-family: "Space Grotesk", sans-serif;
}

.sample-code pre {
  margin: 0;
  padding: 18px 20px 16px;
  color: #f5f7ff;
  font-size: 14px;
  line-height: 2;
  font-family: "Space Grotesk", sans-serif;
  white-space: pre-wrap;
}

.panel-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 18px;
}

.panel-stats div {
  background: rgba(93, 71, 245, 0.05);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 16px 10px;
  text-align: center;
}

.panel-stats strong {
  display: block;
  font-size: 28px;
  font-family: "Space Grotesk", sans-serif;
}

.panel-stats span {
  display: block;
  color: var(--muted);
  font-size: 11px;
  margin-top: 4px;
}

.progress-card, .section-block, .practice-section {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
}

.progress-card {
  padding: 26px 28px;
  margin: 18px 0 16px;
}

.progress-header {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 12px;
}

.progress-header h2, .section-heading h2, .practice-copy h2 {
  margin: 0;
  font-size: 28px;
}

.progress-header strong {
  font-family: "Space Grotesk", sans-serif;
  color: var(--primary);
  font-size: 24px;
}

.progress-bar {
  width: 100%;
  height: 11px;
  background: #ecece5;
  border-radius: 999px;
  overflow: hidden;
  margin: 22px 0 12px;
}

.progress-bar span {
  display: block;
  width: 0%;
  height: 100%;
  background: linear-gradient(90deg, var(--primary), #7a8cff);
  border-radius: inherit;
  transition: width 0.3s ease;
}

.progress-hint {
  color: var(--muted);
  margin: 0;
  font-size: 13px;
}

.phase-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.phase-pills span {
  background: rgba(93, 71, 245, 0.06);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 8px 12px;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
}

.phase-pills .done {
  background: rgba(47, 167, 119, 0.12);
  color: var(--success);
  border-color: rgba(47, 167, 119, 0.15);
}

.section-block {
  padding: 30px 26px;
  margin-top: 28px;
}

.section-heading {
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-bottom: 22px;
  gap: 16px;
}

.filters {
  display: flex;
  gap: 8px;
}

.filter-btn {
  padding: 8px 14px;
  font-size: 12px;
  font-weight: 700;
  color: var(--muted);
}

.filter-btn.active {
  background: var(--ink);
  border-color: var(--ink);
  color: var(--bg);
}

.word-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
}

.word-card {
  background: rgba(93, 71, 245, 0.02);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 16px 14px;
  min-height: 165px;
  position: relative;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.word-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.word-card.saved {
  border-color: rgba(47, 167, 119, 0.45);
  background: rgba(47, 167, 119, 0.06);
}

.word-number {
  color: var(--muted);
  font-size: 10px;
  font-family: "Space Grotesk", sans-serif;
}

.word-card h3 {
  margin: 10px 0 6px;
  font-size: 20px;
  font-family: "Space Grotesk", sans-serif;
}

.word-card p {
  margin: 0 0 8px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.7;
}

.save-word-btn {
  position: absolute;
  left: 12px;
  bottom: 12px;
  border-color: transparent;
  background: transparent;
  color: var(--primary);
  font-size: 11px;
  font-weight: 800;
  padding: 0;
}

.word-card.saved .save-word-btn {
  color: var(--success);
}

.practice-section {
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  gap: 30px;
  margin-top: 28px;
  padding: 28px 24px;
}

.practice-copy {
  padding: 10px 0;
}

.practice-copy p:last-child {
  color: var(--muted);
  line-height: 1.9;
}

.quiz-box {
  border: 1px solid var(--line);
  background: rgba(93, 71, 245, 0.03);
  border-radius: 14px;
  padding: 20px;
}

.quiz-question {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 18px;
}

.quiz-answers {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.answer-btn {
  padding: 10px 14px;
  background: transparent;
  color: var(--ink);
  border-color: var(--line);
  font-weight: 700;
}

.quiz-feedback {
  min-height: 25px;
  margin: 16px 0 0;
  font-weight: 700;
}

.projects-block {
  margin-bottom: 36px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
}

.project-card {
  background: rgba(93, 71, 245, 0.03);
  border: 1px solid var(--line);
  border-radius: 14px;
  padding: 18px 16px;
}

.project-tag {
  display: inline-block;
  background: var(--primary-soft);
  color: var(--primary);
  border-radius: 999px;
  padding: 6px 10px;
  font-weight: 700;
  font-size: 11px;
}

.project-card h3 {
  margin: 16px 0 8px;
}

.project-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.8;
  font-size: 13px;
}

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 0 40px;
  color: var(--muted);
  font-size: 12px;
}

.modal {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: rgba(15, 17, 22, 0.56);
  padding: 20px;
  z-index: 30;
}

.hidden { display: none; }

.modal-card {
  position: relative;
  width: min(420px, 100%);
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 26px 22px 22px;
}

.modal-card h3 {
  margin: 0 0 8px;
  font-size: 32px;
}

.auth-step {
  display: grid;
  gap: 12px;
}

.auth-step label {
  font-weight: 700;
  font-size: 14px;
}

.auth-step input {
  width: 100%;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: transparent;
  padding: 12px 14px;
  color: var(--ink);
  outline: none;
}

.otp-message {
  margin: 0;
  color: var(--primary);
  font-weight: 700;
  font-size: 13px;
}

.full {
  width: 100%;
}

.close-btn {
  position: absolute;
  top: 16px;
  left: 18px;
  border: none;
  background: transparent;
  color: var(--muted);
  font-size: 28px;
  line-height: 1;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }

  .word-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .practice-section {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }
}

@media (max-width: 620px) {
  .word-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-actions, .footer, .top-actions {
    flex-wrap: wrap;
  }

  .topbar {
    height: auto;
    padding: 16px 0 0;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
