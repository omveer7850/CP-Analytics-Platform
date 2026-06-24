import React from 'react';
import './Sidebar.css';

const platforms = [
  { key: 'lc', name: 'LeetCode', sub: 'Problems', dot: '#F0A500' },
  { key: 'cf', name: 'Codeforces', sub: 'Rating', dot: '#378ADD' },
  { key: 'gh', name: 'GitHub', sub: 'Repos', dot: '#444441' },
  { key: 'cc', name: 'CodeChef', sub: 'Stars', dot: '#5DCAA5' },
  { key: 'ac', name: 'AtCoder', sub: 'Contests', dot: '#D85A30' },
];

export default function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-label">Platforms</div>
      {platforms.map((p) => (
        <div
          key={p.key}
          className={`pcard ${active === p.key ? 'active' : ''}`}
          onClick={() => onSelect(p.key)}
        >
          <span className="pcard-dot" style={{ background: p.dot }} />
          <div>
            <div className="pcard-name">{p.name}</div>
            <div className="pcard-sub">{p.sub}</div>
          </div>
        </div>
      ))}
      <div className="sidebar-footer">
        <button className="sidebar-footer-btn">⚙ Settings</button>
      </div>
    </aside>
  );
}