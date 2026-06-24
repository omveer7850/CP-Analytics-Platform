import React, { useState } from 'react';
import './MainContent.css';

const configs = {
  lc: {
    name: 'LeetCode', placeholder: 'Enter LeetCode username...',
    circles: true,
    bars: [
      { label: 'Easy', color: '#1D9E75', total: 800 },
      { label: 'Medium', color: '#BA7517', total: 1700 },
      { label: 'Hard', color: '#D85A30', total: 700 },
    ],
    stats: [
      { label: 'Username', val: '—', sub: 'not fetched' },
      { label: 'Global rank', val: '—', sub: 'all users' },
      { label: 'Streak', val: '—', sub: 'days' },
      { label: 'Acceptance', val: '—', sub: 'rate' },
    ],
  },
  cf: {
    name: 'Codeforces', placeholder: 'Enter Codeforces handle...',
    circles: false,
    stats: [
      { label: 'Handle', val: '—', sub: 'not fetched' },
      { label: 'Rating', val: '—', sub: 'current' },
      { label: 'Rank', val: '—', sub: 'title' },
      { label: 'Max rating', val: '—', sub: 'all time' },
    ],
  },
  gh: {
    name: 'GitHub', placeholder: 'Enter GitHub username...',
    circles: false,
    stats: [
      { label: 'Username', val: '—', sub: 'not fetched' },
      { label: 'Public repos', val: '—', sub: 'repositories' },
      { label: 'Followers', val: '—', sub: 'people' },
      { label: 'Following', val: '—', sub: 'accounts' },
    ],
  },
  cc: {
    name: 'CodeChef', placeholder: 'Enter CodeChef username...',
    circles: false,
    stats: [
      { label: 'Username', val: '—', sub: 'not fetched' },
      { label: 'Rating', val: '—', sub: 'current' },
      { label: 'Stars', val: '—', sub: 'badge' },
      { label: 'Global rank', val: '—', sub: 'rank' },
    ],
  },
  ac: {
    name: 'AtCoder', placeholder: 'Enter AtCoder username...',
    circles: false,
    stats: [
      { label: 'Username', val: '—', sub: 'not fetched' },
      { label: 'Rating', val: '—', sub: 'current' },
      { label: 'Rank', val: '—', sub: 'position' },
      { label: 'Contests', val: '—', sub: 'participated' },
    ],
  },
};

export default function MainContent({ platformKey }) {
  const [username, setUsername] = useState('');
  const config = configs[platformKey];

  return (
    <div className="main">
      <div className="main-header">
        <div className="main-title">
          📊 {config.name}
          <span className="platform-badge">Active</span>
        </div>
        <div className="header-actions">
          <button className="btn-sm">↺ Refresh</button>
          <button className="btn-sm btn-primary">↓ Fetch data</button>
        </div>
      </div>

      <div className="username-bar">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={config.placeholder}
        />
        <div className="status-pill">● Not connected</div>
      </div>

      <div className="scroll-area">
        {config.circles && (
          <>
            <div className="section-head">Problems solved</div>
            <div className="circles-row">
              {['total', 'easy', 'medium', 'hard'].map((type) => (
                <div className="circle-wrap" key={type}>
                  <div className={`circle ${type}`}>—</div>
                  <span className="clabel">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                </div>
              ))}
            </div>
            <div className="bars-section">
              {config.bars.map((bar) => (
                <div className="bar-wrap" key={bar.label}>
                  <div className="bar-label">
                    <span>{bar.label}</span>
                    <span>0 / {bar.total}</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width: '0%', background: bar.color }} />
                  </div>
                </div>
              ))}
            </div>
            <hr className="divider" />
          </>
        )}

        <div className="section-head">Profile stats</div>
        <div className="stats-grid">
          {config.stats.map((s) => (
            <div className="stat-box" key={s.label}>
              <div className="stat-label">{s.label}</div>
              <div className="stat-val">{s.val}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}