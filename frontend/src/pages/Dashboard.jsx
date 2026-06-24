function Dashboard() {
  return (
    <div className="dash">
      <div className="sidebar">
        <div className="pcard active">
          <div className="pcard-name">LeetCode</div>
          <div className="pcard-sub">Problems solved</div>
        </div>
        <div className="pcard">
          <div className="pcard-name">Codeforces</div>
          <div className="pcard-sub">Rating & rank</div>
        </div>
        <div className="pcard">
          <div className="pcard-name">GitHub</div>
          <div className="pcard-sub">Repositories</div>
        </div>
        <div className="pcard">
          <div className="pcard-name">CodeChef</div>
          <div className="pcard-sub">Stars & rating</div>
        </div>
        <div className="pcard">
          <div className="pcard-name">AtCoder</div>
          <div className="pcard-sub">Contest rating</div>
        </div>
      </div>

      <div className="main">
        <div className="circles-row">
          <div className="circle-box"><div className="circle total">0</div><span className="clabel">Total</span></div>
          <div className="circle-box"><div className="circle easy">0</div><span className="clabel">Easy</span></div>
          <div className="circle-box"><div className="circle medium">0</div><span className="clabel">Medium</span></div>
          <div className="circle-box"><div className="circle hard">0</div><span className="clabel">Hard</span></div>
        </div>

        <div className="profile-card">
          <h2>Codeforces Profile</h2>
          <div className="profile-grid">
            <div className="stat-box"><div className="stat-label">Username</div><div className="stat-val">—</div></div>
            <div className="stat-box"><div className="stat-label">Rating</div><div className="stat-val">—</div></div>
            <div className="stat-box"><div className="stat-label">Rank</div><div className="stat-val">—</div></div>
            <div className="stat-box"><div className="stat-label">Max rating</div><div className="stat-val">—</div></div>
          </div>
        </div>
      </div>
    </div>
  );
}